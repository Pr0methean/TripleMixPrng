#![feature(likely_unlikely, portable_simd)]

use core::convert::Infallible;
use generic_array::{typenum, GenericArray};
use rs_shake256::{Shake256Hasher};
use rs_hasher_ctx::{HasherContext, ByteArrayWrapper};
use std::hash::Hasher;
use std::hint::unlikely;
use std::mem::swap;
use rand_core::{SeedableRng, TryRng};
use rand_core::block::{BlockRng, Generator};
use std::simd::*;
use std::simd::num::SimdUint;
use std::simd::cmp::{SimdPartialEq, SimdPartialOrd};
use rand::RngExt;
use rand_core::utils::read_words;

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
    const TINYMT_MAT1: u64x4 = u64x4::splat(0xdaa51b54);
    const TINYMT_MAT2: u64x4 = u64x4::splat(0xfed47fb5 << 32);
    const TINYMT_TMAT: u64x4 = u64x4::splat(0xa853e7ffeffefffe);
}

#[derive(Clone)]
pub struct TripleMixPrng(BlockRng<TripleMixSimdCore>);

impl TripleMixPrng {
    pub const SEED_SIZE: usize = 256;
}
const ONES: Simd<u64, 4> = u64x4::splat(1);
const ZEROES: Simd<u64, 4> = u64x4::splat(0);

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
        master_hasher.write(b"TripleMix V11");

        for i in 0..4 {
            let mut count: u128 = 0;
            
            // 1. Absorb only the NEW 64-byte chunk into the master hasher
            master_hasher.write(&seed[i * 64 .. (i + 1) * 64]);
            // 2. Clone the master_hasher to prevent "polluting" the prefix state
            //    with lane-specific domain strings or retry counters.
            let mut lane_hasher = master_hasher.clone();
            lane_hasher.write(&[i as u8]);
            loop {
                let output: ByteArrayWrapper<64> = HasherContext::finish(&mut lane_hasher);
                let out_bytes: &[u8] = output.as_ref();

                // Extract states for current lane
                [xr0_s[i], xr1_s[i], tm0_s[i], tm1_s[i]] = read_words(&out_bytes[0..32]);
                
                // Rejection sampling for trap states
                if unlikely((xr0_s[i] == 0 && xr1_s[i] == 0) || (tm0_s[i] == 0 && tm1_s[i] == 0)) {
                    lane_hasher.write(&count.to_ne_bytes());
                    count += 1;
                    continue;
                }
                [w_lo_s[i], w_hi_s[i], i_lo_s[i], i_hi_s[i]] = read_words(&out_bytes[32..64]);
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


    /// Splits the PRNG into two independent instances.
    /// The current instance remains valid, and a new one is returned.
    /// This is an O(1) operation that avoids the expensive SHAKE256 seeding process.
    fn fork(&mut self) -> Self {
        let mut entropy = [ZEROES; 8];
        for cell in entropy.iter_mut() {
            self.fill(cell.as_mut_array());
        }

        let mut child_core = self.0.core.clone();

        // 1. Unique Increments: Replace the child's Weyl increments with new entropy.
        // We ensure inc_lo is odd to guarantee a full-period 128-bit Weyl sequence.
        child_core.inc_lo = entropy[0] | ONES;
        child_core.inc_hi = entropy[1];

        // 2. State Masking: XOR the remaining entropy into the existing states.
        // This ensures the child instance starts at a completely different point in the state space.
        child_core.xr0 ^= entropy[2];
        child_core.xr1 ^= entropy[3];
        child_core.tm0 ^= entropy[4];
        child_core.tm1 ^= entropy[5];
        child_core.weyl_lo ^= entropy[6];
        child_core.weyl_hi ^= entropy[7];

        // 3. Rejection Check (TinyMT / Xoroshiro protection)
        // Ensure no lane ended up in an all-zero trap state.
        let xr_zero = (child_core.xr0 | child_core.xr1).simd_eq(ZEROES);
        let tm_zero = (child_core.tm0 | child_core.tm1).simd_eq(ZEROES);

        if unlikely(xr_zero.any() || tm_zero.any()) {
            // In the astronomical event of a zero-trap, we just fallback to full re-seeding
            // to maintain absolute robustness.
            let mut seed = [0u8; 256];
            self.0.fill_bytes(&mut seed);
            return Self::from_seed(GenericArray::from(seed));
        }

        TripleMixPrng(BlockRng::new(child_core))
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
        const FEISTEL_KEYS: [u64x4; 4] = [
            u64x4::splat(0x9E3779B97F4A7C15),
            u64x4::splat(0xBF58476D1CE4E5B9),
            u64x4::splat(0x94D049BB133111EB),
            u64x4::splat(0xFF51AFD7ED558CCD)
        ];
        const TINYMT64_SH0: u64x4 = u64x4::splat(12);
        const TINYMT64_SH1: u64x4 = u64x4::splat(11);
        const TINYMT64_SH2: u64x4 = u64x4::splat(32);
        const TINYMT64_SH8: u64x4 = u64x4::splat(8);
        const TINYMT64_MASK: u64x4 = u64x4::splat(0x7fff_ffff_ffff_ffff_u64);

        let mut xr0 = self.xr0;
        let mut xr1 = self.xr1;
        let mut tm0 = self.tm0;
        let mut tm1 = self.tm1;
        let mut w_lo = self.weyl_lo;
        let mut w_hi = self.weyl_hi;
        let i_lo = self.inc_lo;
        let i_hi = self.inc_hi;

        const XORSHIFT_SH1: Simd<u64, 4> = u64x4::splat(55);
        const XORSHIFT_SH1_REVERSE: Simd<u64, 4> = u64x4::splat(9);
        const XORSHIFT_SH2: Simd<u64, 4> = u64x4::splat(14);
        const XORSHIFT_SH3: Simd<u64, 4> = u64x4::splat(36);
        const XORSHIFT_SH3_REVERSE: Simd<u64, 4> = u64x4::splat(28);
        const MIX_SHIFT_1: Simd<u64, 4> = u64x4::splat(23);
        const MIX_SHIFT_1_REVERSE: Simd<u64, 4> = u64x4::splat(41);
        const MIX_SHIFT_2: Simd<u64, 4> = u64x4::splat(33);
        const MIX_SHIFT_2_REVERSE: Simd<u64, 4> = u64x4::splat(31);
        const MIX_SHIFT_3: Simd<u64, 4> = u64x4::splat(29);
        const MIX_SHIFT_3_REVERSE: Simd<u64, 4> = u64x4::splat(35);
        for step in 0..4 {
            // 1. Source Generation
            let b_l0 = w_lo;
            let b_r1 = w_hi;
            
            // 128-bit Weyl Update: w += inc
            let next_w_lo = w_lo + i_lo;
            let carry = next_w_lo.simd_lt(w_lo).select(ONES, ZEROES);
            w_hi = w_hi + i_hi + carry;
            w_lo = next_w_lo;

            // Xoroshiro update
            let b_l1 = xr0 + xr1;
            let t = xr0 ^ xr1;
            xr0 = ((xr0 << XORSHIFT_SH1) | (xr0 >> XORSHIFT_SH1_REVERSE)) ^ t ^ (t << XORSHIFT_SH2);
            xr1 = (t << XORSHIFT_SH3) | (t >> XORSHIFT_SH3_REVERSE);

            // TinyMT64 update
            tm0 &= TINYMT64_MASK;
            let mut x = tm0 ^ tm1;
            x ^= x << TINYMT64_SH0;
            x ^= x >> TINYMT64_SH2;
            x ^= x << TINYMT64_SH2;
            x ^= x << TINYMT64_SH1;
            
            let mask = (x & ONES).wrapping_neg();
            let next_tm0 = tm1 ^ (mask & Self::TINYMT_MAT1);
            let next_tm1 = x ^ (mask & Self::TINYMT_MAT2);
            tm0 = next_tm0;
            tm1 = next_tm1;

            let mut ty = tm0 + tm1;
            ty ^= tm0 >> TINYMT64_SH8;
            let b_r0 = ty ^ ((ty & ONES).wrapping_neg() & Self::TINYMT_TMAT);

            // 2. Mixing
            let mut cur_l0 = b_l0;
            let mut cur_l1 = b_l1;
            let mut cur_r0 = b_r0;
            let mut cur_r1 = b_r1;

            for r in 0..4 {
                let m0 = cur_r0 ^ ((cur_r1 >> MIX_SHIFT_1) | (cur_r1 << MIX_SHIFT_1_REVERSE));
                let mut h0 = m0 * FEISTEL_KEYS[r];
                h0 ^= (h0 >> MIX_SHIFT_2_REVERSE) | (h0 << MIX_SHIFT_2);

                let m1 = cur_r1 ^ ((cur_r0 >> MIX_SHIFT_2) | (cur_r0 << MIX_SHIFT_2_REVERSE));
                let mut h1 = m1 * FEISTEL_KEYS[(r+1)%4];
                h1 ^= (h1 >> MIX_SHIFT_3) | (h1 << MIX_SHIFT_3_REVERSE);

                swap(&mut cur_r0, &mut cur_l0);
                swap(&mut cur_r1, &mut cur_l1);
                cur_r0 ^= h0;
                cur_r1 ^= h1;

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
    use std::collections::HashSet;
    use std::iter::repeat;
    use hypors::chi_square::goodness_of_fit;
    use rand::RngExt;
    use super::*;
    use rand_core::{Rng, SeedableRng};

    #[test]
    fn test_byte_frequencies() {
        let seed = [0u8; 256];
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
        let seed = [0u8; 256];
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
        let seed = [0u8; 256];
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
        let seed = [0u8; 256];
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

    #[test]
    fn test_fork_independence() {
        let mut random = HashSet::with_capacity(256);
        let seed = [0u8; 256];
        let mut prng = TripleMixPrng::from_seed(GenericArray::from(seed));
        for _ in 0..64 {
            for _ in 0..4 {
                assert!(random.insert(prng.next_u64()));
            }
            prng = prng.fork();
        }
    }
}
