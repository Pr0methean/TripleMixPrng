#![feature(likely_unlikely, portable_simd, generic_const_exprs, target_feature_inline_always)]
#![allow(incomplete_features)]
#[cfg(all(
    target_arch = "x86_64",
    target_feature = "avx2",
    not(all(target_feature = "avx512dq", target_feature = "avx512vl"))
))]
mod avx2;

use core::convert::Infallible;
use generic_array::{GenericArray, typenum};
use rand::RngExt;
use rand_core::block::{BlockRng, Generator};
use rand_core::utils::read_words;
use rand_core::{SeedableRng, TryRng};
use rs_hasher_ctx::{ByteArrayWrapper, HasherContext};
use rs_shake256::Shake256Hasher;
use std::hash::Hasher;
use std::hint::unlikely;
use std::simd::cmp::{SimdPartialEq, SimdPartialOrd};
use std::simd::num::SimdUint;
use std::simd::*;
use std::slice::from_mut;
use typenum::U;

// ============================================================================
// Multiplication dispatch — the ONLY operation where AVX2 differs
// ============================================================================

/// SIMD multiply: uses AVX2 mullo (in-register) or portable * (scalarized).
#[inline(always)]
fn simd_mul(a: Simd64, b: Simd64) -> Simd64 {
    #[cfg(all(
        target_arch = "x86_64",
        target_feature = "avx2",
        not(all(target_feature = "avx512dq", target_feature = "avx512vl"))
    ))]
    {
        avx2::mullo(a, b)
    }
    #[cfg(not(all(
        target_arch = "x86_64",
        target_feature = "avx2",
        not(all(target_feature = "avx512dq", target_feature = "avx512vl"))
    )))]
    {
        a * b
    }
}

// ============================================================================
// Constants
// ============================================================================

const TINYMT64_LANE_MASK: u64 = 0x7fff_ffff_ffff_ffff_u64;
const SIMD_WIDTH: usize = 4;
const OUTPUTS_PER_STEP: usize = 2;
const OUTPUT_LEN: usize = OUTPUTS_PER_STEP * SIMD_WIDTH;

pub type Simd64 = Simd<u64, SIMD_WIDTH>;


// ============================================================================
// Core struct
// ============================================================================

#[derive(Clone)]
struct TripleMixSimdCore {
    xr0: Simd64,
    xr1: Simd64,
    tm0: Simd64,
    tm1: Simd64,
    weyl_lo: Simd64,
    weyl_hi: Simd64,
    inc_lo: Simd64,
    inc_hi: Simd64,
}

impl std::fmt::Debug for TripleMixSimdCore {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let x = self.inc_hi;
        let x1 = self.inc_lo;
        let x2 = self.weyl_hi;
        let x3 = self.weyl_lo;
        let x4 = self.tm1;
        let x5 = self.tm0;
        let x6 = self.xr1;
        let x7 = self.xr0;
        f.debug_struct("TripleMixSimdCore")
            .field("xr0", &x7.to_array())
            .field("xr1", &x6.to_array())
            .field("tm0", &x5.to_array())
            .field("tm1", &x4.to_array())
            .field("weyl_lo", &x3.to_array())
            .field("weyl_hi", &x2.to_array())
            .field("inc_lo", &x1.to_array())
            .field("inc_hi", &x.to_array())
            .finish()
    }
}

impl TripleMixSimdCore {
    const TINYMT_MAT1: u64 = 0xdaa51b54;
    const TINYMT_MAT2: u64 = 0xfed47fb5 << 32;
    const TINYMT_TMAT: u64 = 0xa853e7ffeffefffe;

    #[inline(always)]
    pub(crate) fn fill_blocks(&mut self, blocks: &mut [[u64; OUTPUT_LEN]]) {
        if blocks.is_empty() {
            return;
        }
        // The first 16 64-bit words of the Golden Ratio, transposed.
        const FEISTEL_CONSTANT_1: Simd64 = Simd::from_array([0x9E3779B97F4A7C15, 0x2767f0b153d27b7f, 0xf06ad7ae9717877e, 0x626e33b8d04b4331]);
        const FEISTEL_CONSTANT_2: Simd64 = Simd::from_array([0xf39cc0605cedc834, 0x0347045b5bf1827f, 0x85839d6effbd7dc6, 0xbbf73c790d94f79d]);
        const FEISTEL_CONSTANT_3: Simd64 = Simd::from_array([0x1082276bf3a27251, 0x01886f0928403002, 0x64d325d1c5371682, 0x471c4ab3ed3d82a5]);
        const FEISTEL_CONSTANT_4: Simd64 = Simd::from_array([0xf86c6a11d0c18e95, 0xc1d64ba40f335e36, 0xcadd0cccfdffbbe1, 0xfec507705e4ae6e5]);

        // These are the hexadecimal expansion of pi, except that the first digit is changed in the
        // first and last constant to increase low-bit rank and avalanche effect.
        const LANE_CONSTANTS: Simd64 = Simd64::from_array([
            0xd243_f6a8_885a_308d,
            0x3131_98a2_e037_0734,
            0xca40_9382_2299_f31d,
            0x7082_efa9_8ec4_e6c8,
        ]);

        // Zero-cost transmute from Simd64 to portable Simd<u64, 4>
        let mut xr0 = self.xr0;
        let mut xr1 = self.xr1;
        let mut tm0 = self.tm0;
        let mut tm1 = self.tm1;
        let mut w_lo = self.weyl_lo;
        let mut w_hi = self.weyl_hi;
        let i_lo = self.inc_lo;
        let i_hi = self.inc_hi;

        // Mix i_hi into the mixing constants, because otherwise the top byte's avalanche effect is
        // too weak.
        let first_mix_with_i_hi = FEISTEL_CONSTANT_1 + rotl(i_hi, 29);
        let second_mix_with_i_hi = FEISTEL_CONSTANT_2 ^ i_hi;

        #[inline(always)]
        fn rotl(x: Simd64, k: u32) -> Simd64 {
            (x << Simd::splat(k as u64)) | (x >> Simd::splat((64 - k) as u64))
        }

        const MIXING_ROTATION_11: u64 = 3;
        const MIXING_ROTATION_20: u32 = 4;
        const MIXING_ROTATION_12: u64 = 5;
        const MIXING_ROTATION_08: u64 = 7;
        const MIXING_ROTATION_10: u32 = 9;
        const MIXING_ROTATION_07: u32 = 11;
        const MIXING_ROTATION_19: u32 = 13;
        const MIXING_ROTATION_16: u64 = 14;
        const MIXING_ROTATION_14: u64 = 17;
        const MIXING_ROTATION_13: u32 = 19;
        const MIXING_ROTATION_05: u32 = 22;
        const MIXING_ROTATION_02: u32 = 29;
        const MIXING_ROTATION_03: u32 = 31;
        const MIXING_ROTATION_04: u32 = 37;
        const MIXING_ROTATION_17: u32 = 38;
        const MIXING_ROTATION_23: u64 = 39;
        const MIXING_ROTATION_01: u32 = 41;
        const MIXING_ROTATION_21: u32 = 43;
        const MIXING_ROTATION_09: u32 = 44;
        const MIXING_ROTATION_06: u32 = 46;
        const MIXING_ROTATION_15: u32 = 49;
        const MIXING_ROTATION_22: u64 = 52;
        const MIXING_ROTATION_18: u32 = 54;
        for block in blocks {
            // === 1. Source Generation ===

            // 128-bit LCG: w = w * (lane_constant << 64 + 1) + inc
            let next_w_lo = w_lo + i_lo;
            let high_product = simd_mul(w_lo, LANE_CONSTANTS); // ← only AVX2-dispatched op
            let carry = next_w_lo
                .simd_lt(w_lo)
                .select(Simd::splat(1), Simd::splat(0));
            w_hi = w_hi + high_product + i_hi + carry;
            w_lo = next_w_lo;
            let b_l0 = w_lo + LANE_CONSTANTS;
            let b_r1 = w_hi;

            // Xoroshiro update
            let b_l1 = xr0 + xr1;
            let t = xr0 ^ xr1;
            xr0 = rotl(xr0, 9) ^ t ^ (t << Simd::splat(14));
            xr1 = rotl(t, 36);

            // TinyMT64 update
            tm0 &= Simd::splat(TINYMT64_LANE_MASK);
            let mut x = tm0 ^ tm1;
            x ^= x << Simd::splat(12);
            x ^= x >> Simd::splat(32);
            x ^= x << Simd::splat(32);
            x ^= x << Simd::splat(11);

            let mask = (x & Simd::splat(1)).wrapping_neg();
            let next_tm0 = tm1 ^ (mask & Simd::splat(Self::TINYMT_MAT1));
            let next_tm1 = x ^ (mask & Simd::splat(Self::TINYMT_MAT2));
            tm0 = next_tm0;
            tm1 = next_tm1;

            let mut ty = tm0 + tm1;
            ty ^= tm0 >> Simd::splat(8);
            let b_r0 =
                ty ^ ((ty & Simd::splat(1)).wrapping_neg() & Simd::splat(Self::TINYMT_TMAT));

            // === 2. Mixing ===
            let l0 = b_l0;
            let l1 = b_l1;
            let r0 = b_r0;
            let r1 = b_r1;

            // --------------------
            // Round 1 (ARX, local)
            // --------------------
            let t0 = (r0 ^ rotl(r1, MIXING_ROTATION_01)) + second_mix_with_i_hi;
            let t1 = (r1 + rotl(r0, MIXING_ROTATION_02)) ^ first_mix_with_i_hi;
            let t2 = (l0 ^ rotl(l1, MIXING_ROTATION_03)) + FEISTEL_CONSTANT_3;
            let t3 = (l1 + rotl(l0, MIXING_ROTATION_04)) ^ FEISTEL_CONSTANT_4;

            let mut l0 = r0 ^ t2;
            let mut l1 = r1 + t3;
            let mut r0 = t0 + l1;
            let mut r1 = t1 ^ l0;

            // --------------------
            // Round 2 (cross-lane)
            // --------------------
            let sr0 = simd_swizzle!(r0, [1, 2, 3, 0]);
            let sr1 = simd_swizzle!(r1, [2, 3, 0, 1]);
            let sl0 = simd_swizzle!(l0, [3, 0, 1, 2]);
            let sl1 = simd_swizzle!(l1, [3, 2, 1, 0]);

            l0 ^= rotl(sr0, MIXING_ROTATION_05) ^ sl1;
            l1 += rotl(sr1, MIXING_ROTATION_06) ^ sl0;
            r0 ^= rotl(sl1, MIXING_ROTATION_07) + (sr1 >> MIXING_ROTATION_08);   // restore low-bit injection
            r1 += rotl(sl0, MIXING_ROTATION_09) + sr0;

            // --------------------
            // Round 3 (nonlinear core)
            // --------------------
            let x = (r0 ^ rotl(r1, MIXING_ROTATION_10)) + ((l0 << MIXING_ROTATION_11) ^ (l1 >> MIXING_ROTATION_12));
            let m = simd_mul(x + FEISTEL_CONSTANT_2, FEISTEL_CONSTANT_1);

            let m1 = rotl(m, MIXING_ROTATION_13);
            let m2 = rotl(m ^ (m >> MIXING_ROTATION_14), MIXING_ROTATION_15);

            // asymmetric feedback (no duplicated structure)
            let nl0 = r0 ^ m1;
            let nl1 = r1 + m2;
            let nr0 = l0 + m2 + (m1 >> MIXING_ROTATION_16);  // carry injection
            let r1 = l1 ^ m1 ^ m2;

            let l0 = nl0;
            let l1 = nl1;
            let r0 = nr0;

            // --------------------
            // Round 4 (transport)
            // --------------------
            let sl0 = simd_swizzle!(l0, [3, 1, 2, 0]);
            let sl1 = simd_swizzle!(l1, [1, 2, 0, 3]);

            let t0 = (sl0 + r1) ^ FEISTEL_CONSTANT_3;
            let t1 = (sl1 ^ r0) + FEISTEL_CONSTANT_4;

            let l0 = r0 ^ rotl(t0, MIXING_ROTATION_17);
            let l1 = r1 + rotl(t1, MIXING_ROTATION_18);
            let r0 = t0 + l1;
            let r1 = t1 ^ l0;

            // --------------------
            // Output finalizer
            // --------------------
            let t0 = (r0 + l0) ^ (r1 - l1);    // strong carry interaction
            let t1 = (l1 ^ r0) + rotl(r1, MIXING_ROTATION_19);

            let mut out0 = t0 + rotl(t1, MIXING_ROTATION_20);
            let mut out1 = t1 ^ rotl(t0, MIXING_ROTATION_21);

            // single cross-mix (sufficient)
            out0 ^= out1 >> MIXING_ROTATION_22;
            out1 += out0 << MIXING_ROTATION_23;

            out0.copy_to_slice(&mut block[0..SIMD_WIDTH]);
            out1.copy_to_slice(&mut block[SIMD_WIDTH..(2 * SIMD_WIDTH)]);
        }

        // Zero-cost transmute back from portable Simd<u64, 4> to Simd64
        self.xr0 = xr0;
        self.xr1 = xr1;
        self.tm0 = tm0;
        self.tm1 = tm1;
        self.weyl_lo = w_lo;
        self.weyl_hi = w_hi;
    }
}

#[derive(Clone)]
pub struct TripleMixPrng(BlockRng<TripleMixSimdCore>);

impl TripleMixPrng {
    pub const SEED_SIZE: usize = 64 * SIMD_WIDTH;

    pub(crate) fn from_core(core: TripleMixSimdCore) -> Self {
        TripleMixPrng(BlockRng::new(core))
    }

    /// Creates an instance in a relatively predictable state. Intended only for testing.
    pub fn almost_all_zeroes_state() -> TripleMixPrng {
        const SMALLEST_DISTINCT_ODD: [u64; SIMD_WIDTH] = [1, 3, 5, 7];
        const SMALLEST_DISTINCT_POSITIVE: [u64; SIMD_WIDTH] = [1, 2, 3, 4];
        TripleMixPrng::from_core(TripleMixSimdCore {
            xr0: Simd::splat(0),
            xr1: Simd64::from_array(SMALLEST_DISTINCT_POSITIVE),
            tm0: Simd::splat(0),
            tm1: Simd64::from_array(SMALLEST_DISTINCT_POSITIVE),
            weyl_lo: Simd::splat(0),
            weyl_hi: Simd::splat(0),
            inc_lo: Simd64::from_array(SMALLEST_DISTINCT_ODD),
            inc_hi: Simd::splat(0),
        })
    }
}

impl SeedableRng for TripleMixPrng {
    type Seed = GenericArray<u8, U<{ TripleMixPrng::SEED_SIZE }>>;

    fn from_seed(seed: Self::Seed) -> Self {
        const LANE_CHUNK_SIZE: usize = SIMD_WIDTH * 16;
        let mut xr0_s = [0u64; SIMD_WIDTH];
        let mut xr1_s = [0u64; SIMD_WIDTH];
        let mut tm0_s = [0u64; SIMD_WIDTH];
        let mut tm1_s = [0u64; SIMD_WIDTH];
        let mut w_lo_s = [0u64; SIMD_WIDTH];
        let mut w_hi_s = [0u64; SIMD_WIDTH];
        let mut i_lo_s = [0u64; SIMD_WIDTH];
        let mut i_hi_s = [0u64; SIMD_WIDTH];

        let mut master_hasher = Shake256Hasher::<64>::default();
        master_hasher.write(b"TripleMix V11");
        master_hasher.write(&seed);

        for i in 0..SIMD_WIDTH {
            let mut count: u128 = 0;
            let mut lane_hasher = master_hasher.clone();
            lane_hasher.write(&[i as u8]);
            lane_hasher.write(&seed[i * LANE_CHUNK_SIZE..(i + 1) * LANE_CHUNK_SIZE]);
            'generate: loop {
                let output: ByteArrayWrapper<64> = HasherContext::finish(&mut lane_hasher);
                let out_bytes: &[u8] = output.as_ref();

                [xr0_s[i], xr1_s[i], tm0_s[i], tm1_s[i]] = read_words(&out_bytes[0..32]);
                tm0_s[i] &= TINYMT64_LANE_MASK;

                if unlikely((xr0_s[i] == 0 && xr1_s[i] == 0) || (tm0_s[i] == 0 && tm1_s[i] == 0)) {
                    lane_hasher.write(&count.to_ne_bytes());
                    count += 1;
                    continue;
                }
                for j in 0..i {
                    if unlikely(
                        (xr0_s[j] == xr0_s[i] && xr1_s[j] == xr1_s[i])
                            || (tm0_s[j] == tm0_s[i] && tm1_s[j] == tm1_s[i]),
                    ) {
                        lane_hasher.write(&count.to_ne_bytes());
                        count += 1;
                        continue 'generate;
                    }
                }
                [w_lo_s[i], w_hi_s[i], i_lo_s[i], i_hi_s[i]] = read_words(&out_bytes[32..64]);
                for j in 0..i {
                    if unlikely(w_lo_s[j] == w_lo_s[i] || i_lo_s[j] == i_lo_s[i]) {
                        lane_hasher.write(&count.to_ne_bytes());
                        count += 1;
                        continue 'generate;
                    }
                }
                break;
            }
        }

        let core = TripleMixSimdCore {
            xr0: Simd64::from_array(xr0_s),
            xr1: Simd64::from_array(xr1_s),
            tm0: Simd64::from_array(tm0_s),
            tm1: Simd64::from_array(tm1_s),
            weyl_lo: Simd64::from_array(w_lo_s),
            weyl_hi: Simd64::from_array(w_hi_s),
            inc_lo: Simd64::from_array(i_lo_s),
            inc_hi: Simd64::from_array(i_hi_s),
        };
        TripleMixPrng(BlockRng::new(core))
    }

    fn fork(&mut self) -> Self {
        let mut entropy = [Simd::splat(0); 8];
        for cell in entropy.iter_mut() {
            self.fill(cell.as_mut_array());
        }

        let mut child_core = self.0.core.clone();

        let a = child_core.xr0;
        let b = entropy[2];
        child_core.xr0 = a ^ b;
        let a = child_core.xr1;
        let b = entropy[3];
        child_core.xr1 = a ^ b;
        let a = child_core.tm0;
        let b = entropy[4];
        child_core.tm0 = a ^ b;
        let a = child_core.tm1;
        let b = entropy[5];
        child_core.tm1 = a ^ b;
        let a1 = child_core.tm0;
        child_core.tm0 = a1 & Simd::splat(TINYMT64_LANE_MASK);

        let a2 = child_core.xr0;
        let b1 = child_core.xr1;
        let xr_combined = a2 | b1;
        let a2 = child_core.tm0;
        let b1 = child_core.tm1;
        let tm_combined = a2 | b1;

        let mut rejected = false;
        if unlikely(
            xr_combined.simd_eq(Simd::splat(0)).any() || tm_combined.simd_eq(Simd::splat(0)).any(),
        ) {
            rejected = true;
        } else {
            for i in 1..SIMD_WIDTH {
                for j in 0..i {
                    let x = child_core.inc_lo;
                    let x1 = child_core.inc_lo;
                    let x2 = child_core.weyl_lo;
                    let x3 = child_core.weyl_lo;
                    let x4 = child_core.tm1;
                    let x5 = child_core.tm1;
                    let x6 = child_core.tm0;
                    let x7 = child_core.tm0;
                    let x8 = child_core.xr1;
                    let x9 = child_core.xr1;
                    let x10 = child_core.xr0;
                    let x11 = child_core.xr0;
                    if unlikely(
                        (x11.to_array()[j] == x10.to_array()[i]
                            && x9.to_array()[j] == x8.to_array()[i])
                            || (x7.to_array()[j] == x6.to_array()[i]
                                && x5.to_array()[j] == x4.to_array()[i])
                            || x3.to_array()[j] == x2.to_array()[i]
                            || x1.to_array()[j] == x.to_array()[i],
                    ) {
                        rejected = true;
                        break;
                    }
                }
            }
        }
        if unlikely(rejected) {
            let mut seed = [0u8; Self::SEED_SIZE];
            self.0.fill_bytes(&mut seed);
            return Self::from_seed(GenericArray::from(seed));
        }
        child_core.inc_lo = entropy[0] | Simd::splat(1);
        child_core.inc_hi = entropy[1];
        child_core.weyl_lo = child_core.weyl_lo ^ entropy[6];
        child_core.weyl_hi = child_core.weyl_hi ^ entropy[7];

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
        let (prefix, u64s, suffix) = unsafe { dst.align_to_mut::<u64>() };
        if !prefix.is_empty() {
            self.0.fill_bytes(prefix);
        }
        let (dst_blocks, tail) = u64s.as_chunks_mut();
        if !dst_blocks.is_empty() {
            self.0.reset_and_skip(0);
            self.0.core.fill_blocks(dst_blocks);
        }
        for tail_u64 in tail {
            *tail_u64 = self.0.next_word();
        }
        if !suffix.is_empty() {
            self.0.fill_bytes(suffix);
        }
        Ok(())
    }
}

// ============================================================================
// Generator impl — SINGLE unified implementation
//
// All operations use portable Simd<u64, 4> operators, which compile to the
// same AVX2 instructions on AVX2 targets. The ONLY dispatch is for multiply,
// which portable SIMD scalarizes but AVX2 keeps in-register via mullo.
// ============================================================================

impl Generator for TripleMixSimdCore {
    type Output = [u64; OUTPUT_LEN];

    #[inline(always)]
    fn generate(&mut self, output: &mut Self::Output) {
        self.fill_blocks(from_mut(output))
    }
}

// ============================================================================
// Tests
// ============================================================================

#[cfg(test)]
mod tests {
    use super::*;
    use hypors::chi_square::goodness_of_fit;
    use rand::RngExt;
    use rand_core::{Rng, SeedableRng};
    use statrs::distribution::{Binomial, DiscreteCDF};
    use std::collections::HashSet;
    use std::iter::repeat;

    #[test]
    fn test_byte_frequencies() {
        let mut prng = TripleMixPrng::almost_all_zeroes_state();
        let mut frequencies = [0u32; u8::MAX as usize + 1];
        for _ in 0..(1 << 28) {
            let byte: u8 = prng.random();
            frequencies[byte as usize] += 1;
        }
        let chi_square = goodness_of_fit(
            frequencies.map(f64::from),
            repeat((1 << 20) as f64).take(u8::MAX as usize + 1),
            0.01,
        )
        .unwrap();
        println!("{:?}", chi_square);
        assert!(!chi_square.reject_null);
    }

    #[test]
    fn test_u16_frequencies() {
        let mut prng = TripleMixPrng::almost_all_zeroes_state();
        let mut frequencies = vec![0u32; u16::MAX as usize + 1];
        for _ in 0..(1 << 28) {
            let word: u16 = prng.random();
            frequencies[word as usize] += 1;
        }
        let chi_square = goodness_of_fit(
            frequencies.into_iter().map(f64::from),
            repeat((1 << 12) as f64).take(u16::MAX as usize + 1),
            0.01,
        )
        .unwrap();
        println!("{:?}", chi_square);
        assert!(!chi_square.reject_null);
    }

    #[test]
    fn test_bit_correlations_and_transitions() {
        const SAMPLE_COUNT: usize = 1 << 24;
        let bin_count_distribution = Binomial::new(0.25, SAMPLE_COUNT as u64).unwrap();
        let mut prng = TripleMixPrng::almost_all_zeroes_state();
        let mut samples = vec![0u64; SAMPLE_COUNT];
        prng.fill(samples.as_mut());
        let mut lowest_bin = u64::MAX;
        let mut highest_bin = 0;
        for i in 0..=62 {
            for j in (i + 1)..=63 {
                let mut bins = [0u64; 4];
                for sample in &samples {
                    bins[((sample >> i) & 1 | ((sample >> j) & 1) << 1) as usize] += 1;
                }
                for (index, bin) in bins.into_iter().enumerate() {
                    let p = bin_count_distribution.cdf(bin);
                    assert!(
                        p >= 0.00001,
                        "Count too low ({bin}, p={p:.6}) for i={i},j={j},bin={index}"
                    );
                    assert!(
                        p <= 0.99999,
                        "Count too high ({bin}, p={p:.6}) for i={i},j={j},bin={index}"
                    );
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
                for (index, bin) in lagged_bins.into_iter().enumerate() {
                    let p = bin_count_distribution.cdf(bin);
                    assert!(
                        p >= 0.00001,
                        "Count too low ({bin}, p={p:.6}) for i={i},j={j},bin={index}"
                    );
                    assert!(
                        p <= 0.99999,
                        "Count too high ({bin}, p={p:.6}) for i={i},j={j},bin={index}"
                    );
                    lowest_lagged_bin = lowest_lagged_bin.min(bin);
                    highest_lagged_bin = highest_lagged_bin.max(bin);
                }
            }
        }
        println!(
            "Lowest lagged bin: {}, Highest lagged bin: {}",
            lowest_lagged_bin, highest_lagged_bin
        );
    }

    #[test]
    fn test_equivalence() {
        let seed = [0u8; TripleMixPrng::SEED_SIZE];
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
    fn test_fork_independence_descendants() {
        const SAMPLES_PER_FORK: usize = OUTPUTS_PER_STEP * SIMD_WIDTH * 4;
        const FORKS: usize = 64;
        let mut random = HashSet::with_capacity(SAMPLES_PER_FORK * FORKS);
        let mut prng = TripleMixPrng::almost_all_zeroes_state();
        for _ in 0..FORKS {
            for _ in 0..SAMPLES_PER_FORK {
                let next = prng.next_u64();
                print!("{next:016X}");
                assert!(random.insert(next));
            }
            println!();
            prng = prng.fork();
        }
    }

    #[test]
    fn test_fork_independence_siblings() {
        const SAMPLES_PER_FORK: usize = 32;
        const FORKS: usize = 64;
        let mut random = HashSet::with_capacity(SAMPLES_PER_FORK * FORKS);
        let mut parent_prng = TripleMixPrng::almost_all_zeroes_state();
        for _ in 0..FORKS {
            let mut prng = parent_prng.fork();
            for _ in 0..SAMPLES_PER_FORK {
                let next = prng.next_u64();
                print!("{next:016X}");
                assert!(random.insert(next));
            }
            println!();
        }
    }

    #[test]
    fn test_avalanche() {
        let rng = TripleMixPrng::almost_all_zeroes_state();
        let core = rng.0.core.clone();

        const ITERATIONS: usize = 20;
        const LOW_AVALANCHE_THRESHOLD: u32 = 28 * OUTPUT_LEN as u32;

        let mut min_flips = u32::MAX;
        let mut max_flips = 0;
        let mut total_flips: u64 = 0;
        let mut count: u64 = 0;
        let mut flips_per_bit = [[[0; 64]; SIMD_WIDTH]; 8];
        let mut core1 = core.clone();
        let mut output1 = [[0u64; OUTPUT_LEN]; ITERATIONS];
        for output_block in output1.iter_mut() {
            core1.generate(output_block);
        }
        let mut min_field = 0;
        let mut min_lane = 0;
        let mut min_bit = 0;
        let mut min_iter = 0;
        let mut low_avalanches = 0;
        for field_idx in 0..8 {
            for lane_idx in 0..SIMD_WIDTH {
                for bit_idx in 0usize..64 {
                    if field_idx == 2 && bit_idx == 63 {
                        continue;
                    }
                    if field_idx == 6 && bit_idx == 0 {
                        continue;
                    }
                    //if field_idx == 7 && bit_idx >= 59 { continue; }
                    let mut core2 = core.clone();
                    match field_idx {
                        0 => {
                            let x = core2.xr0;
                            let mut arr = x.to_array();
                            arr[lane_idx] ^= 1 << bit_idx;
                            core2.xr0 = Simd64::from_array(arr);
                        }
                        1 => {
                            let x = core2.xr1;
                            let mut arr = x.to_array();
                            arr[lane_idx] ^= 1 << bit_idx;
                            core2.xr1 = Simd64::from_array(arr);
                        }
                        2 => {
                            let x = core2.tm0;
                            let mut arr = x.to_array();
                            arr[lane_idx] ^= 1 << bit_idx;
                            core2.tm0 = Simd64::from_array(arr);
                        }
                        3 => {
                            let x = core2.tm1;
                            let mut arr = x.to_array();
                            arr[lane_idx] ^= 1 << bit_idx;
                            core2.tm1 = Simd64::from_array(arr);
                        }
                        4 => {
                            let x = core2.weyl_lo;
                            let mut arr = x.to_array();
                            arr[lane_idx] ^= 1 << bit_idx;
                            core2.weyl_lo = Simd64::from_array(arr);
                        }
                        5 => {
                            let x = core2.weyl_hi;
                            let mut arr = x.to_array();
                            arr[lane_idx] ^= 1 << bit_idx;
                            core2.weyl_hi = Simd64::from_array(arr);
                        }
                        6 => {
                            let x = core2.inc_lo;
                            let mut arr = x.to_array();
                            arr[lane_idx] ^= 1 << bit_idx;
                            core2.inc_lo = Simd64::from_array(arr);
                        }
                        7 => {
                            let x = core2.inc_hi;
                            let mut arr = x.to_array();
                            arr[lane_idx] ^= 1 << bit_idx;
                            core2.inc_hi = Simd64::from_array(arr);
                        }
                        _ => unreachable!(),
                    }
                    let mut output2 = [[0u64; OUTPUT_LEN]; ITERATIONS];
                    for output_block in output2.iter_mut() {
                        core2.generate(output_block);
                    }
                    for i in 0..ITERATIONS {
                        let mut flips = 0;
                        for cell in 0..OUTPUT_LEN {
                            if cell != 0 {
                                assert_ne!(
                                    output2[i][cell].wrapping_sub(output2[i][0]),
                                    output1[i][cell].wrapping_sub(output1[i][0]),
                                    "Same difference between cells 0 and {cell}"
                                );
                                assert_ne!(
                                    output2[i][cell] ^ output2[i][0],
                                    output1[i][cell] ^ output1[i][0],
                                    "Same xor between cells 0 and {cell}"
                                );
                            }
                            flips += (output1[i][cell] ^ output2[i][cell]).count_ones();
                        }
                        total_flips += flips as u64;
                        if flips <= LOW_AVALANCHE_THRESHOLD {
                            low_avalanches += 1;
                        }
                        if flips < min_flips {
                            min_flips = flips;
                            min_iter = i;
                            min_field = field_idx;
                            min_lane = lane_idx;
                            min_bit = bit_idx;
                        }
                        max_flips = max_flips.max(flips);
                        count += 1;
                        flips_per_bit[field_idx][lane_idx][bit_idx] += flips;
                    }
                }
            }
        }
        for field_idx in 0..8 {
            for lane_idx in 0..SIMD_WIDTH {
                println!(
                    "Field {} lane {}: Flips: {:?}",
                    field_idx, lane_idx, flips_per_bit[field_idx][lane_idx]
                );
            }
        }
        let avg_flips = total_flips as f64 / count as f64;
        println!(
            "Avalanche stats ({} checks): Avg: {:.2}, Min: {}, Max: {}",
            count, avg_flips, min_flips, max_flips
        );

        const DEVIATION: f64 = 0.1;
        assert!(
            avg_flips >= 32.0 * (1.0 - DEVIATION) * (OUTPUT_LEN as f64),
            "Average diffusion too low"
        );
        assert!(
            avg_flips <= 32.0 * (1.0 + DEVIATION) * (OUTPUT_LEN as f64),
            "Average diffusion too high?"
        );
        let bit_flip_distribution = Binomial::new(0.5, (OUTPUT_LEN * 64) as u64).unwrap();
        let low_avalanche_probability = bit_flip_distribution.cdf(LOW_AVALANCHE_THRESHOLD as u64);
        let low_avalanche_distribution = Binomial::new(low_avalanche_probability, count).unwrap();
        let low_avalanche_p_value = 1.0 - low_avalanche_distribution.cdf(low_avalanches as u64);
        println!(
            "Expected {:.4} low-avalanche checks, got {}; p={:.4}",
            low_avalanche_probability * count as f64,
            low_avalanches,
            low_avalanche_p_value
        );
        assert!(
            low_avalanche_p_value > 0.01,
            "Too many low-avalanche results"
        );
        assert!(
            min_flips as usize >= 16 * OUTPUT_LEN,
            "Minimum diffusion too low in field {min_field} lane {min_lane} bit {min_bit} on iteration {min_iter}, possible blind spot!"
        );
    }

    #[test]
    fn test_seed_diffusion() {
        let seed = [0u8; TripleMixPrng::SEED_SIZE];
        let mut rng1 = TripleMixPrng::from_seed(GenericArray::from(seed));
        let start_val1 = rng1.try_next_u64().unwrap();

        for byte_index in 0..TripleMixPrng::SEED_SIZE {
            for bit_index in 0..=7 {
                let mut seed = [0u8; TripleMixPrng::SEED_SIZE];
                seed[byte_index] = 1 << bit_index;
                let mut rng2 = TripleMixPrng::from_seed(GenericArray::from(seed));
                let start_val2 = rng2.try_next_u64().unwrap();
                let flipped_bits = (start_val1 ^ start_val2).count_ones();
                assert!(
                    flipped_bits > 1,
                    "Changing byte {byte_index} bit {bit_index} of the seed did not affect the first output! Diffusion failure."
                );
                assert!(
                    flipped_bits < 63,
                    "Changing byte {byte_index} bit {bit_index} of the seed just inverted the first output! Diffusion failure."
                );
                assert_ne!(start_val1, 0, "Output shouldn't be zero");
            }
        }
    }

    const SAMPLES: usize = 1 << 22; // ~4M outputs
    const BLOCK: usize = 8; // 8x8 projection

    fn extract_bitplane(words: &[u64], bit: u32) -> Vec<i8> {
        words
            .iter()
            .map(|w| if ((w >> bit) & 1) != 0 { 1 } else { -1 })
            .collect()
    }

    fn xor_successive(words: &mut [u64]) {
        for i in 0..words.len() - 1 {
            words[i] ^= words[i + 1];
        }
    }

    fn random_projection_kernel() -> [[i8; BLOCK]; BLOCK] {
        // Fixed deterministic ±1 kernel
        let mut k = [[0i8; BLOCK]; BLOCK];
        let mut x: u64 = 0x12345678abcdef01;
        for i in 0..BLOCK {
            for j in 0..BLOCK {
                x ^= x << 13;
                x ^= x >> 7;
                x ^= x << 17;
                k[i][j] = if x & 1 == 0 { 1 } else { -1 };
            }
        }
        k
    }

    fn projection_test(data: &[i8]) -> f64 {
        let kernel = random_projection_kernel();
        let mut sum = 0f64;
        let mut sum_sq = 0f64;
        let mut count = 0f64;

        let side = (data.len() as f64).sqrt() as usize;
        for y in 0..side - BLOCK {
            for x in 0..side - BLOCK {
                let mut acc = 0i32;
                for ky in 0..BLOCK {
                    for kx in 0..BLOCK {
                        let idx = (y + ky) * side + (x + kx);
                        acc += data[idx] as i32 * kernel[ky][kx] as i32;
                    }
                }
                let val = acc as f64;
                sum += val;
                sum_sq += val * val;
                count += 1.0;
            }
        }

        let mean = sum / count;
        let var = (sum_sq / count) - mean * mean;
        mean.abs() + (var - 64.0).abs() // 64 expected variance for 8x8 ±1
    }

    #[test]
    fn test_bitplane_projection() {
        let mut rng = TripleMixPrng::almost_all_zeroes_state();
        let mut buf = vec![0u64; SAMPLES];
        rng.fill_bytes(bytemuck::cast_slice_mut(&mut buf));

        xor_successive(&mut buf);

        for bit in 0..64 {
            let plane = extract_bitplane(&buf, bit);
            let score = projection_test(&plane);

            assert!(
                score < 1.0,
                "Projection deviation too large for bit {bit}: {}",
                score
            );
        }
    }

    #[test]
    fn test_lane_cross_correlation_bitplane() {
        let mut rng = TripleMixPrng::almost_all_zeroes_state();
        const N: usize = 1 << 28;

        let mut sums = [0i64; 64];

        let mut lanes = [0u64; 4];
        for target_lane in 1..4 {
            for _ in 0..N {
                rng.fill(&mut lanes);
                for bit in 0..64 {
                    // use lowest bit; can also test bit 0..63 in loop
                    let a = if (lanes[0] >> bit) & 1 == 1 { 1 } else { -1 };
                    let b = if (lanes[target_lane] >> bit) & 1 == 1 {
                        1
                    } else {
                        -1
                    };

                    sums[bit] += (a * b) as i64;
                }
            }
            for (bit, sum) in sums.into_iter().enumerate() {
                let corr = sum as f64 / N as f64;

                // For random ±1 variables, stddev ≈ 1/sqrt(N)
                let sigma = 1.0 / (N as f64).sqrt();

                assert!(
                    corr.abs() < 5.0 * sigma,
                    "Lane bit correlation detected on bit {bit}: {corr} (σ={sigma})",
                );
            }
        }
    }

    fn gf2_rank(mut rows: [u64; 64]) -> u32 {
        let mut rank = 0;
        for col in (0..64).rev() {
            if let Some(pivot) = (rank..64).find(|&r| (rows[r] >> col) & 1 == 1) {
                rows.swap(rank, pivot);
                for r in 0..64 {
                    if r != rank && ((rows[r] >> col) & 1) == 1 {
                        rows[r] ^= rows[rank];
                    }
                }
                rank += 1;
            }
        }
        rank.try_into().unwrap()
    }

    /// False positive rate for this test is about 1.2%.
    #[test]
    fn test_lowbit_rank() {
        let mut rng = TripleMixPrng::almost_all_zeroes_state();
        let mut rank60_count = 0;

        for _ in 0..10000 {
            let mut matrix = [0u64; 64];
            for r in 0..64 {
                matrix[r] = rng.next_u64();
            }
            let rank = gf2_rank(matrix);
            assert!(rank >= 60, "Low-bit rank deficiency: {}", rank);
            if rank == 60 {
                rank60_count += 1;
                assert!(rank60_count <= 2, "Too many low-bit rank deficiencies (rank 60)");
            }
        }
    }

    #[test]
    fn test_double_differential() {
        let mut rng = TripleMixPrng::almost_all_zeroes_state();
        const N: usize = 1 << 21;

        let mut x = vec![0u64; N];
        for i in 0..N {
            x[i] = rng.next_u64();
        }

        // first difference
        for i in 0..N - 1 {
            x[i] ^= x[i + 1];
        }

        // second difference
        for i in 0..N - 2 {
            x[i] ^= x[i + 2];
        }

        // check bit bias
        let ones = x.iter().map(|v| v.count_ones() as u64).sum::<u64>();
        let total_bits = (N as u64) * 64;
        let bias = (ones as f64 / total_bits as f64) - 0.5;

        assert!(bias.abs() < 1e-3, "Differential bias detected: {}", bias);
    }

    #[test]
    fn test_fractional_spectral() {
        let mut rng = TripleMixPrng::almost_all_zeroes_state();
        const N: usize = 1 << 21;

        let mut prev = rng.next_u64();
        let mut min_gap = f64::MAX;

        for _ in 0..N {
            let curr = rng.next_u64();
            let diff = (curr.wrapping_sub(prev) as f64).abs();
            if diff < min_gap {
                min_gap = diff;
            }
            prev = curr;
        }

        assert!(min_gap > 1.0, "Spectral lattice behavior suspected");
    }
}
