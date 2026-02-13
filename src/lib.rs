#![feature(likely_unlikely)]

use core::convert::Infallible;
use std::hint::unlikely;
use generic_array::{typenum, GenericArray};
use hkdf::Hkdf;
use rand_core::{SeedableRng, TryRng};
use sha3::Sha3_512;
use tinymt::TinyMT64;
use tinymt::tinymt64::tinymt64_generate_uint64;
use xoroshiro128::Xoroshiro128Rng;

#[derive(Clone)]
pub struct TripleMixPrng {
    xoroshiro128rng: Xoroshiro128Rng,
    tiny_mt64: TinyMT64,
    lcg_state: u128
}

fn split_u128(x: u128) -> [u64;2] { [x as u64, (x>>64) as u64] }

impl SeedableRng for TripleMixPrng {
    type Seed = GenericArray<u8, typenum::U47>;

    fn from_seed(seed: Self::Seed) -> Self {
        // Taken from the second entry in src/tinymt64dc.0.65536.txt from https://www.math.sci.hiroshima-u.ac.jp/m-mat/MT/TINYMT/JAVA/tinymt-1.0.zip
        const TINYMT_MAT1: u32 = 0xdaa51b54;
        const TINYMT_MAT2: u32 = 0xfed47fb5;
        const TINYMT_TMAT: u64 = 0xa853e7ffeffefffe;

        let hk = Hkdf::<Sha3_512>::new(Some(b"TripleMixPrng"), &seed);
        let mut subgenerator_seeds_combined = [0u8; 48];
        hk.expand(b"TinyMT64, Xoroshiro128, and LCG-128 combined", &mut subgenerator_seeds_combined).expect("Hkdf::expand failed");
        let mut tinymt_val = u128::from_ne_bytes(subgenerator_seeds_combined[..16].try_into().unwrap()) & (i128::MAX as u128);
        let mut xoroshiro_val = u128::from_ne_bytes(subgenerator_seeds_combined[16..32].try_into().unwrap());
        let lcg_state = u128::from_ne_bytes(subgenerator_seeds_combined[32..].try_into().unwrap());
        if unlikely(tinymt_val == 0) {
            let mut input = [0u8; 32];
            let mut new_tinymt_val = [0u8; 16];
            input[0..15].copy_from_slice(b"Seed for TinyMT");
            hk.expand(&input, &mut new_tinymt_val).expect("Hkdf::expand failed");
            tinymt_val = u128::from_ne_bytes(new_tinymt_val.try_into().unwrap()) & (i128::MAX as u128);
            let mut rejection_counter = 1u128;
            while unlikely(tinymt_val == 0) {
                input[16..32].copy_from_slice(&rejection_counter.to_ne_bytes()[..]);
                hk.expand(&input, &mut new_tinymt_val).expect("Hkdf::expand failed");
                // After 2 failed tries, switch to dropping the least significant bit rather than
                // the most significant, to improve the chance of escaping a mathematically simple
                // cycle.
                tinymt_val = u128::from_ne_bytes(new_tinymt_val.try_into().unwrap()) >> 1;
                rejection_counter += 1;
            }
        }
        if unlikely(xoroshiro_val == 0) {
            let mut rejection_counter = 0u128;
            let mut input = [0u8; 32];
            let mut new_xoroshiro_val = [0u8; 16];
            input[0..14].copy_from_slice(b"Xoroshiro seed");
            while xoroshiro_val == 0 {
                input[16..32].copy_from_slice(&rejection_counter.to_ne_bytes()[..]);
                hk.expand(&input, &mut new_xoroshiro_val).expect("Hkdf::expand failed");
                xoroshiro_val = u128::from_ne_bytes(new_xoroshiro_val.try_into().unwrap()) & (i128::MAX as u128);
                rejection_counter += 1;
            }
        }
        TripleMixPrng {
            tiny_mt64: TinyMT64::new(split_u128(tinymt_val), TINYMT_MAT1, TINYMT_MAT2, TINYMT_TMAT),
            xoroshiro128rng: Xoroshiro128Rng::from_seed_u64(split_u128(xoroshiro_val)),
            lcg_state: u128::from(lcg_state)
        }
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
        Ok(self.next_u64_raw())
    }

    fn try_fill_bytes(&mut self, dst: &mut [u8]) -> Result<(), Self::Error> {
        let mut chunks = dst.chunks_exact_mut(8);
        for chunk in chunks.by_ref() {
            let val = self.next_u64_raw();
            chunk.copy_from_slice(&val.to_ne_bytes());
        }
        let remainder = chunks.into_remainder();
        if !remainder.is_empty() {
            let val = self.next_u64_raw();
            let bytes = val.to_ne_bytes();
            remainder.copy_from_slice(&bytes[..remainder.len()]);
        }
        Ok(())
    }
}

impl TripleMixPrng {
    #[inline(always)]
    fn next_u64_raw(&mut self) -> u64 {
        const LCG_MULTIPLIER: u128 = 47026247687942121848144207491837523525;
        const FEISTEL_KEYS: [u64; 4] = [0x9E3779B97F4A7C15, 0xBF58476D1CE4E5B9, 0x94D049BB133111EB, 0xFF51AFD7ED558CCD];

        let [mut l0, mut r1] = split_u128(self.lcg_state);
        self.lcg_state = self.lcg_state.wrapping_mul(LCG_MULTIPLIER).wrapping_add(1);
        let mut l1 = xoroshiro128::RngCore::next_u64(&mut self.xoroshiro128rng);
        let mut r0 = tinymt64_generate_uint64(&mut self.tiny_mt64);

        // Round 0
        let mut mix0 = r0 ^ r1.rotate_right(23);
        mix0 = mix0.wrapping_mul(FEISTEL_KEYS[0]);
        let h0 = mix0 ^ mix0.rotate_right(31);

        let mut mix1 = r1 ^ r0.rotate_right(33);
        mix1 = mix1.wrapping_mul(FEISTEL_KEYS[1]);
        let h1 = mix1 ^ mix1.rotate_right(29);

        let old_r0 = r0;
        let old_r1 = r1;
        r0 = l0 ^ h0;
        r1 = l1 ^ h1;
        l0 = old_r0;
        l1 = old_r1;

        r1 = r1.reverse_bits();

        // Round 1
        let mut mix0 = r0 ^ r1.rotate_right(23);
        mix0 = mix0.wrapping_mul(FEISTEL_KEYS[1]);
        let h0 = mix0 ^ mix0.rotate_right(31);

        let mut mix1 = r1 ^ r0.rotate_right(33);
        mix1 = mix1.wrapping_mul(FEISTEL_KEYS[2]);
        let h1 = mix1 ^ mix1.rotate_right(29);

        let old_r0 = r0;
        let old_r1 = r1;
        r0 = l0 ^ h0;
        r1 = l1 ^ h1;
        l0 = old_r0;
        l1 = old_r1;

        r0 = r0.swap_bytes();

        // Round 2
        let mut mix0 = r0 ^ r1.rotate_right(23);
        mix0 = mix0.wrapping_mul(FEISTEL_KEYS[2]);
        let h0 = mix0 ^ mix0.rotate_right(31);

        let mut mix1 = r1 ^ r0.rotate_right(33);
        mix1 = mix1.wrapping_mul(FEISTEL_KEYS[3]);
        let h1 = mix1 ^ mix1.rotate_right(29);

        let old_r0 = r0;
        let old_r1 = r1;
        r0 = l0 ^ h0;
        r1 = l1 ^ h1;
        l0 = old_r0;
        l1 = old_r1;

        l1 = l1.reverse_bits();

        // Round 3
        let mut mix0 = r0 ^ r1.rotate_right(23);
        mix0 = mix0.wrapping_mul(FEISTEL_KEYS[3]);
        let h0 = mix0 ^ mix0.rotate_right(31);

        let mut mix1 = r1 ^ r0.rotate_right(33);
        mix1 = mix1.wrapping_mul(FEISTEL_KEYS[0]);
        let h1 = mix1 ^ mix1.rotate_right(29);

        let res_r0 = l0 ^ h0;
        let res_r1 = l1 ^ h1;
        let res_l0 = r0;
        let res_l1 = r1;

        (res_r0 ^ res_l0).wrapping_add(res_r1 ^ !res_l1)
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
        let mut prng = TripleMixPrng::from_seed(GenericArray::default());
        let mut frequencies = [0u32; u8::MAX as usize + 1];
        for _ in 0..(1 << 28) {
            let byte: u8 = prng.random();
            frequencies[byte as usize] += 1;
        }
        for i in 0..=255 {
            println!("{:02X}: {}", i, frequencies[i as usize]);
        }
        let chi_square = goodness_of_fit(frequencies.map(f64::from), repeat((1 << 20) as f64).take(u8::MAX as usize + 1), 0.01).unwrap();
        println!("{:?}", chi_square);
        assert!(!chi_square.reject_null);
    }

    #[test]
    fn test_u16_frequencies() {
        let mut prng = TripleMixPrng::from_seed(GenericArray::default());
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
        let mut prng = TripleMixPrng::from_seed(GenericArray::default());
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
                println!("Coincidence for bits {i:02} and {j:02}: 00={:07}, 01={:07}, 10={:07}, 11={:07}",
                    bins[0], bins[1], bins[2], bins[3]
                );
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
                println!("Bit transition for {i:02}->{j:02}: 00={:07}, 01={:07}, 10={:07}, 11={:07}",
                    lagged_bins[0], lagged_bins[1], lagged_bins[2], lagged_bins[3]
                );
                for bin in lagged_bins {
                    lowest_lagged_bin = lowest_lagged_bin.min(bin);
                    highest_lagged_bin = highest_lagged_bin.max(bin);
                }

            }
        }
        println!("Lowest lagged bin: {}, Highest lagged bin: {}", lowest_lagged_bin, highest_lagged_bin);
    }
    #[test]
    fn first_output_for_small_seeds() {
        let mut seed_array = GenericArray::default();
        let mut results = [[0u8; u8::MAX as usize + 1]; 16];
        for seed in 0..=u8::MAX {
            seed_array[46] = seed;
            let mut prng = TripleMixPrng::from_seed(seed_array);
            for (index, digit) in format!("{:016X}", prng.next_u64()).chars().enumerate() {
                results[index][seed as usize] = digit as u8;
            }
        }
        for digit in 0..16 {
            println!("{digit}: {}, {}, {}",
                 str::from_utf8(&results[digit as usize]).unwrap(),
                results[digit as usize].windows(2).map(|win| if win[0] == win[1] {1} else {0}).sum::<usize>(),
                results[digit as usize].windows(3).map(|win| if win[0] == win[2] {1} else {0}).sum::<usize>(),
            );
        }
    }

    #[test]
    fn test_equivalence() {
        let mut prng1 = TripleMixPrng::from_seed(GenericArray::default());
        let mut prng2 = TripleMixPrng::from_seed(GenericArray::default());
        
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
