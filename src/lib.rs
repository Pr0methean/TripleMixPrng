#![feature(likely_unlikely, portable_simd)]

use core::convert::Infallible;
use generic_array::{typenum, GenericArray};
use rs_shake256::{Shake256Hasher};
use rs_hasher_ctx::{HasherContext, ByteArrayWrapper};
use std::hash::Hasher;
use rand_core::{SeedableRng, TryRng};
use rand_core::block::{BlockRng, Generator};
use std::simd::*;
use std::simd::num::SimdUint;
use std::simd::cmp::SimdPartialOrd;

#[derive(Debug, Clone)]
pub struct TripleMixSimdCore {
    xr0: u64x4,
    xr1: u64x4,
    tm0: u64x4,
    tm1: u64x4,
    weyl_lo: u64x4,
    weyl_hi: u64x4,
    inc_lo: u64x4,
    inc_hi: u64x4,
}

impl TripleMixSimdCore {
    const TINYMT_MAT1: u32 = 0xdaa51b54;
    const TINYMT_MAT2: u32 = 0xfed47fb5;
    const TINYMT_TMAT: u64 = 0xa853e7ffeffefffe;
}

#[derive(Clone)]
pub struct TripleMixPrng(BlockRng<TripleMixSimdCore>);

impl TripleMixPrng {
    pub const SEED_SIZE: usize = 256;
}

impl SeedableRng for TripleMixPrng {
    type Seed = GenericArray<u8, typenum::U256>;

    fn from_seed(seed: Self::Seed) -> Self {
        let mut xr0_s = [0u64; 4];
        let mut xr1_s = [0u64; 4];
        let mut tm0_s = [0u64; 4];
        let mut tm1_s = [0u64; 4];
        let mut w_lo_s = [0u64; 4];
        let mut w_hi_s = [0u64; 4];
        let mut i_lo_s = [0u64; 4];
        let mut i_hi_s = [0u64; 4];

        let mut master_hasher = Shake256Hasher::<64>::default();

        for i in 0..4 {
            let mut buf = [0u8; 64];
            let mut count: u128 = 0;
            
            // 1. Absorb only the NEW 64-byte chunk into the master hasher
            master_hasher.write(&seed[i * 64 .. (i + 1) * 64]);
            
            loop {
                // 2. Clone the master_hasher to prevent "polluting" the prefix state 
                //    with lane-specific domain strings or retry counters.
                let mut lane_hasher = master_hasher.clone();
                lane_hasher.write(format!("TripleMix V10 Lane {}", i).as_bytes());
                if count > 0 {
                    lane_hasher.write(&count.to_ne_bytes());
                }
                
                let output: ByteArrayWrapper<64> = HasherContext::finish(&mut lane_hasher);
                let out_bytes: &[u8] = output.as_ref();
                buf.copy_from_slice(out_bytes);

                // Extract states for current lane
                let x0 = u64::from_ne_bytes(buf[0..8].try_into().unwrap());
                let x1 = u64::from_ne_bytes(buf[8..16].try_into().unwrap());
                let t0 = u64::from_ne_bytes(buf[16..24].try_into().unwrap()) & 0x7fff_ffff_ffff_ffff;
                let t1 = u64::from_ne_bytes(buf[24..32].try_into().unwrap());
                
                // Rejection sampling for trap states
                if (x0 == 0 && x1 == 0) || (t0 == 0 && t1 == 0) {
                    count += 1;
                    continue;
                }

                xr0_s[i] = x0;
                xr1_s[i] = x1;
                tm0_s[i] = t0;
                tm1_s[i] = t1;
                w_lo_s[i] = u64::from_ne_bytes(buf[32..40].try_into().unwrap());
                w_hi_s[i] = u64::from_ne_bytes(buf[40..48].try_into().unwrap());
                i_lo_s[i] = u64::from_ne_bytes(buf[48..56].try_into().unwrap()) | 1;
                i_hi_s[i] = u64::from_ne_bytes(buf[56..64].try_into().unwrap());
                break;
            }
        }

        let core = TripleMixSimdCore {
            xr0: u64x4::from_array(xr0_s),
            xr1: u64x4::from_array(xr1_s),
            tm0: u64x4::from_array(tm0_s),
            tm1: u64x4::from_array(tm1_s),
            weyl_lo: u64x4::from_array(w_lo_s),
            weyl_hi: u64x4::from_array(w_hi_s),
            inc_lo: u64x4::from_array(i_lo_s),
            inc_hi: u64x4::from_array(i_hi_s),
        };
        TripleMixPrng(BlockRng::new(core))
    }
}

impl TryRng for TripleMixPrng {
    type Error = Infallible;

    #[inline(always)]
    fn try_next_u32(&mut self) -> Result<u32, Self::Error> {
        let next_u64 = self.try_next_u64()?;
        Ok((next_u64 >> 32 ^ next_u64) as u32)
    }

    #[inline(always)]
    fn try_next_u64(&mut self) -> Result<u64, Self::Error> {
        Ok(self.0.next_word())
    }

    #[inline(always)]
    fn try_fill_bytes(&mut self, dst: &mut [u8]) -> Result<(), Self::Error> {
        self.0.fill_bytes(dst);
        Ok(())
    }
}

impl Generator for TripleMixSimdCore {
    type Output = [u64; 16];

    #[inline(always)]
    fn generate(&mut self, output: &mut Self::Output) {
        const FEISTEL_KEYS: [u64; 4] = [0x9E3779B97F4A7C15, 0xBF58476D1CE4E5B9, 0x94D049BB133111EB, 0xFF51AFD7ED558CCD];
        const TINYMT64_SH0: u64 = 12;
        const TINYMT64_SH1: u64 = 11;
        const TINYMT64_SH8: u64 = 8;
        const TINYMT64_MASK: u64 = 0x7fff_ffff_ffff_ffff_u64;

        let mut xr0 = self.xr0;
        let mut xr1 = self.xr1;
        let mut tm0 = self.tm0;
        let mut tm1 = self.tm1;
        let mut w_lo = self.weyl_lo;
        let mut w_hi = self.weyl_hi;
        let i_lo = self.inc_lo;
        let i_hi = self.inc_hi;

        for step in 0..4 {
            // 1. Source Generation
            let b_l0 = w_lo;
            let b_r1 = w_hi;
            
            // 128-bit Weyl Update: w += inc
            let next_w_lo = w_lo + i_lo;
            let carry = next_w_lo.simd_lt(w_lo).select(u64x4::splat(1), u64x4::splat(0));
            w_hi = w_hi + i_hi + carry;
            w_lo = next_w_lo;

            let b_l1 = xr0 + xr1;
            let t = xr0 ^ xr1;
            xr0 = ((xr0 << u64x4::splat(55)) | (xr0 >> u64x4::splat(9))) ^ t ^ (t << u64x4::splat(14));
            xr1 = (t << u64x4::splat(36)) | (t >> u64x4::splat(28));

            tm0 &= u64x4::splat(TINYMT64_MASK);
            let mut x = tm0 ^ tm1;
            x ^= x << u64x4::splat(TINYMT64_SH0);
            x ^= x >> u64x4::splat(32);
            x ^= x << u64x4::splat(32);
            x ^= x << u64x4::splat(TINYMT64_SH1);
            
            let mask = (x & u64x4::splat(1)).wrapping_neg();
            let next_tm0 = tm1 ^ (mask & u64x4::splat(Self::TINYMT_MAT1 as u64));
            let next_tm1 = x ^ (mask & u64x4::splat((Self::TINYMT_MAT2 as u64) << 32));
            tm0 = next_tm0;
            tm1 = next_tm1;

            let mut ty = tm0 + tm1;
            ty ^= tm0 >> u64x4::splat(TINYMT64_SH8);
            let b_r0 = ty ^ ((ty & u64x4::splat(1)).wrapping_neg() & u64x4::splat(Self::TINYMT_TMAT));

            // 2. Mixing
            let mut cur_l0 = b_l0;
            let mut cur_l1 = b_l1;
            let mut cur_r0 = b_r0;
            let mut cur_r1 = b_r1;

            for r in 0..4 {
                let m0 = cur_r0 ^ ((cur_r1 >> u64x4::splat(23)) | (cur_r1 << u64x4::splat(41)));
                let mut h0 = m0 * u64x4::splat(FEISTEL_KEYS[r]);
                h0 ^= (h0 >> u64x4::splat(31)) | (h0 << u64x4::splat(33));

                let m1 = cur_r1 ^ ((cur_r0 >> u64x4::splat(33)) | (cur_r0 << u64x4::splat(31)));
                let mut h1 = m1 * u64x4::splat(FEISTEL_KEYS[(r+1)%4]);
                h1 ^= (h1 >> u64x4::splat(29)) | (h1 << u64x4::splat(35));

                let tr0 = cur_r0;
                let tr1 = cur_r1;
                cur_r0 = cur_l0 ^ h0;
                cur_r1 = cur_l1 ^ h1;
                cur_l0 = tr0;
                cur_l1 = tr1;

                match r {
                    0 => { cur_r1 = simd_swizzle!(cur_r1, [3, 0, 1, 2]); }
                    1 => { cur_r0 = simd_swizzle!(cur_r0, [2, 3, 0, 1]); }
                    2 => { cur_l1 = simd_swizzle!(cur_l1, [1, 2, 3, 0]); }
                    _ => {}
                }
            }

            let res = (cur_r0 ^ cur_l0) + (cur_r1 ^ !cur_l1);
            let arr = res.to_array();
            output[step * 4] = arr[0];
            output[step * 4 + 1] = arr[1];
            output[step * 4 + 2] = arr[2];
            output[step * 4 + 3] = arr[3];
        }

        self.xr0 = xr0;
        self.xr1 = xr1;
        self.tm0 = tm0;
        self.tm1 = tm1;
        self.weyl_lo = w_lo;
        self.weyl_hi = w_hi;
    }
}

#[cfg(test)]
mod tests {
    use std::iter::repeat;
    use hypors::chi_square::goodness_of_fit;
    use rand::RngExt;
    use super::*;
    use rand_core::{Rng, SeedableRng};

    #[test]
    fn test_byte_frequencies() {
        let mut seed = [0u8; 256];
        seed[0] = 1;
        let mut prng = TripleMixPrng::from_seed(GenericArray::from(seed));
        let mut frequencies = [0u32; u8::MAX as usize + 1];
        for _ in 0..(1 << 28) {
            let byte: u8 = prng.random();
            frequencies[byte as usize] += 1;
        }
        let chi_square = goodness_of_fit(frequencies.map(f64::from), repeat((1 << 20) as f64).take(u8::MAX as usize + 1), 0.01).unwrap();
        println!("{:?}", chi_square);
        assert!(!chi_square.reject_null);
    }

    #[test]
    fn test_u16_frequencies() {
        let mut seed = [0u8; 256];
        seed[0] = 1;
        let mut prng = TripleMixPrng::from_seed(GenericArray::from(seed));
        let mut frequencies = vec![0u32; u16::MAX as usize + 1];
        for _ in 0..(1 << 28) {
            let word: u16 = prng.random();
            frequencies[word as usize] += 1;
        }
        let chi_square = goodness_of_fit(frequencies.into_iter().map(f64::from), repeat((1 << 12) as f64).take(u16::MAX as usize + 1), 0.01).unwrap();
        println!("{:?}", chi_square);
        assert!(!chi_square.reject_null);
    }

    #[test]
    fn test_bit_correlations_and_transitions() {
        let mut seed = [0u8; 256];
        seed[0] = 1;
        let mut prng = TripleMixPrng::from_seed(GenericArray::from(seed));
        let mut samples = vec![0u64; 1 << 24];
        prng.fill(samples.as_mut());
        let mut lowest_bin = u64::MAX;
        let mut highest_bin = 0;
        for i in 0..=62 {
            for j in (i+1)..=63 {
                let mut bins = [0u64; 4];
                for sample in &samples {
                    bins[((sample >> i) & 1 | ((sample >> j) & 1) << 1) as usize] += 1;
                }
                for bin in bins {
                    lowest_bin = lowest_bin.min(bin);
                    highest_bin = highest_bin.max(bin);
                }
            }
        }
        println!("Lowest bin: {}, Highest bin: {}", lowest_bin, highest_bin);
        let mut lowest_lagged_bin = u64::MAX;
        let mut highest_lagged_bin = 0;
        for i in 0..=63 {
            for j in 0..=63 {
                let mut lagged_bins = [0u64; 4];
                for pair in samples.windows(2) {
                    let first = pair[0];
                    let second = pair[1];
                    lagged_bins[((first >> i) & 1 | ((second >> j) & 1) << 1) as usize] += 1;
                }
                for bin in lagged_bins {
                    lowest_lagged_bin = lowest_lagged_bin.min(bin);
                    highest_lagged_bin = highest_lagged_bin.max(bin);
                }
            }
        }
        println!("Lowest lagged bin: {}, Highest lagged bin: {}", lowest_lagged_bin, highest_lagged_bin);
    }

    #[test]
    fn test_equivalence() {
        let mut seed = [0u8; 256];
        let mut prng1 = TripleMixPrng::from_seed(GenericArray::from(seed));
        let mut prng2 = TripleMixPrng::from_seed(GenericArray::from(seed));
        
        let mut buf1 = vec![0u8; 1024];
        prng1.fill_bytes(&mut buf1);
        
        let mut buf2 = vec![0u8; 1024];
        for chunk in buf2.chunks_exact_mut(8) {
            let val = prng2.next_u64();
            chunk.copy_from_slice(&val.to_ne_bytes());
        }
        
        assert_eq!(buf1, buf2);
    }
}
