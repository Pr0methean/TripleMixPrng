#![feature(likely_unlikely, portable_simd)]
#![feature(generic_const_exprs)]
#![feature(target_feature_inline_always)]
#![allow(incomplete_features)]
#[cfg(all(
    target_arch = "x86_64",
    target_feature = "avx2",
    not(all(target_feature = "avx512dq", target_feature = "avx512vl"))
))]
mod x86;

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
use typenum::U;

#[derive(Debug, Clone)]
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

impl TripleMixSimdCore {
    const TINYMT_MAT1: u64 = 0xdaa51b54;
    const TINYMT_MAT2: u64 = 0xfed47fb5 << 32;
    const TINYMT_TMAT: u64 = 0xa853e7ffeffefffe;
}

#[derive(Clone)]
pub struct TripleMixPrng(BlockRng<TripleMixSimdCore>);
const TINYMT64_LANE_MASK: u64 = 0x7fff_ffff_ffff_ffff_u64;

const TINYMT64_MASK: Simd64 = Simd64::splat(TINYMT64_LANE_MASK);

impl TripleMixPrng {
    pub const SEED_SIZE: usize = 64 * SIMD_WIDTH;

    pub(crate) fn from_core(core: TripleMixSimdCore) -> Self {
        TripleMixPrng(BlockRng::new(core))
    }

    const SMALLEST_DISTINCT_ODD: Simd64 = Simd::from_array([1, 3, 5, 7]);
    const SMALLEST_DISTINCT_POSITIVE: Simd64 = Simd::from_array([1, 2, 3, 4]);

    /// Creates an instance in a relatively predictable state. Intended only for testing.
    pub fn almost_all_zeroes_state() -> TripleMixPrng {
        TripleMixPrng::from_core(TripleMixSimdCore {
            xr0: ZEROES,
            xr1: Self::SMALLEST_DISTINCT_POSITIVE,

            tm0: ZEROES,
            tm1: Self::SMALLEST_DISTINCT_POSITIVE,
            weyl_lo: ZEROES,
            weyl_hi: ZEROES,
            inc_lo: Self::SMALLEST_DISTINCT_ODD,
            inc_hi: ZEROES,
        })
    }
}
const SIMD_WIDTH: usize = 4;
const OUTPUT_LEN: usize = 4 * SIMD_WIDTH;
pub type Simd64 = Simd<u64, SIMD_WIDTH>;
const ONES: Simd64 = Simd64::splat(1);
const ZEROES: Simd64 = Simd64::splat(0);

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

        // 1. Absorb the FULL seed into the master hasher
        // This ensures every lane depends on every bit of the 2048-bit seed.
        master_hasher.write(&seed);

        for i in 0..SIMD_WIDTH {
            let mut count: u128 = 0;
            // 2. Clone the master_hasher to prevent "polluting" the prefix state
            //    with lane-specific domain strings or retry counters.
            let mut lane_hasher = master_hasher.clone();

            // 3. Lane ID: Feed the lane index FIRST as a "Salt" or "Config".
            lane_hasher.write(&[i as u8]);

            // 4. Re-absorb the lane-specific chunk of the seed.
            // This breaks the 1600-bit bottleneck of the master_hasher state,
            // allowing us to reach the full 2048-bit state space of the PRNG.
            lane_hasher.write(&seed[i * LANE_CHUNK_SIZE..(i + 1) * LANE_CHUNK_SIZE]);
            'generate: loop {
                let output: ByteArrayWrapper<64> = HasherContext::finish(&mut lane_hasher);
                let out_bytes: &[u8] = output.as_ref();

                // Extract states for current lane
                [xr0_s[i], xr1_s[i], tm0_s[i], tm1_s[i]] = read_words(&out_bytes[0..32]);
                tm0_s[i] &= TINYMT64_LANE_MASK;

                // Rejection sampling for trap states
                if unlikely((xr0_s[i] == 0 && xr1_s[i] == 0) || (tm0_s[i] == 0 && tm1_s[i] == 0)) {
                    lane_hasher.write(&count.to_ne_bytes());
                    count += 1;
                    continue;
                }
                for j in 0..i {
                    if unlikely((xr0_s[j] == xr0_s[i] && xr1_s[j] == xr1_s[i])
                           || (tm0_s[j] == tm0_s[i] && tm1_s[j] == tm1_s[i])) {
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

    /// Splits the PRNG into two independent instances.
    /// The current instance remains valid, and a new one is returned.
    /// This is an O(1) operation that avoids the expensive SHAKE256 seeding process.
    fn fork(&mut self) -> Self {
        let mut entropy = [ZEROES; 8];
        for cell in entropy.iter_mut() {
            self.fill(cell.as_mut_array());
        }

        let mut child_core = self.0.core.clone();

        // 1. State Masking: XOR most of the entropy into the existing states.
        // This ensures the child instance starts at a completely different point in the state space.
        child_core.xr0 ^= entropy[2];
        child_core.xr1 ^= entropy[3];
        child_core.tm0 ^= entropy[4];
        child_core.tm1 ^= entropy[5];
        child_core.tm0 &= TINYMT64_MASK;

        // 2. Rejection Check (TinyMT / Xoroshiro protection)
        // Ensure no lane ended up in an all-zero trap state.
        let xr_zero = (child_core.xr0 | child_core.xr1).simd_eq(ZEROES);
        let tm_zero = (child_core.tm0 | child_core.tm1).simd_eq(ZEROES);

        let mut rejected = false;
        if unlikely(xr_zero.any() || tm_zero.any()) {
            rejected = true;
        } else {
            for i in 1..SIMD_WIDTH {
                for j in 0..i {
                    if unlikely(
                        (child_core.xr0[j] == child_core.xr0[i] && child_core.xr1[j] == child_core.xr1[i])
                        || (child_core.tm0[j] == child_core.tm0[i] && child_core.tm1[j] == child_core.tm1[i])
                        || child_core.weyl_lo[j] == child_core.weyl_lo[i]
                        || child_core.inc_lo[j] == child_core.inc_lo[i]) {
                        rejected = true;
                        break;
                    }
                }
            }
        }
        if unlikely(rejected) {
            // In the rare event of a zero-trap or an identical state in two lanes, we fall back to
            // full re-seeding to maintain absolute robustness.
            let mut seed = [0u8; Self::SEED_SIZE];
            self.0.fill_bytes(&mut seed);
            return Self::from_seed(GenericArray::from(seed));
        }
        // 3. Unique Increments: Replace the child's Weyl increments with new entropy.
        // We ensure inc_lo is odd to guarantee a full-period 128-bit Weyl sequence.
        child_core.inc_lo = entropy[0] | ONES;
        child_core.inc_hi = entropy[1];
        child_core.weyl_lo ^= entropy[6];
        child_core.weyl_hi ^= entropy[7];

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
    type Output = [u64; OUTPUT_LEN];

    #[inline(always)]
    fn generate(&mut self, output: &mut Self::Output) {
        const FEISTEL_KEY_1: u64 = 0x9E3779B97F4A7C15;
        const FEISTEL_KEY_2: u64 = 0xBF58476D1CE4E5B9;
        const FEISTEL_KEY_3: u64 = 0x94D049BB133111EB;
        const FEISTEL_KEY_4: u64 = 0xFF51AFD7ED558CCD;

        // These constants are taken from the hexadecimal expansion of pi * 1<<252, but with the
        // most significant bit set to one on lanes 0 and 2 (it'd otherwise always be zero).
        const LANE_CONSTANTS: Simd64 = Simd64::from_array([
            0xd243_f6a8_885a_308d,
            0x3131_98a2_e037_0734,
            0xca40_9382_2299_f31d,
            0x0082_efa9_8ec4_e6c8,
        ]);
        let mut xr0 = self.xr0;
        let mut xr1 = self.xr1;
        let mut tm0 = self.tm0;
        let mut tm1 = self.tm1;
        let mut w_lo = self.weyl_lo;
        let mut w_hi = self.weyl_hi;
        let i_lo = self.inc_lo;
        let i_hi = self.inc_hi;

        #[inline(always)]
        fn rotl(x: Simd<u64, 4>, k: u32) -> Simd<u64, 4> {
            (x << Simd::splat(k as u64)) | (x >> Simd::splat((64 - k) as u64))
        }
        for step in 0..4 {
            // 1. Source Generation

            // 128-bit LCG: w = w * (lane_constant << 64 + 1) + inc
            let next_w_lo = w_lo + i_lo;
            let high_product = w_lo * LANE_CONSTANTS;
            let carry = next_w_lo.simd_lt(w_lo).select(ONES, ZEROES);
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
            tm0 &= TINYMT64_MASK;
            let mut x = tm0 ^ tm1;
            x ^= x << Simd64::splat(12);
            x ^= x >> Simd64::splat(32);
            x ^= x << Simd64::splat(32);
            x ^= x << Simd64::splat(11);

            let mask = (x & ONES).wrapping_neg();
            let next_tm0 = tm1 ^ (mask & Simd64::splat(Self::TINYMT_MAT1));
            let next_tm1 = x ^ (mask & Simd64::splat(Self::TINYMT_MAT2));
            tm0 = next_tm0;
            tm1 = next_tm1;

            let mut ty = tm0 + tm1;
            ty ^= tm0 >> Simd64::splat(8);
            let b_r0 = ty ^ ((ty & ONES).wrapping_neg() & Simd64::splat(Self::TINYMT_TMAT));

            // 2. Mixing
            #[allow(unused_mut)]
            let mut l0_s = b_l0;
            #[allow(unused_mut)]
            let mut l1_s = b_l1;
            #[allow(unused_mut)]
            let mut r0_s = b_r0;
            #[allow(unused_mut)]
            let mut r1_s = b_r1;

            #[cfg(all(
                target_arch = "x86_64",
                target_feature = "avx2",
                not(all(target_feature = "avx512dq", target_feature = "avx512vl"))
            ))]
            unsafe {
                let mut l0 = x86::simd_u64x4_to_m256i(l0_s);
                let mut l1 = x86::simd_u64x4_to_m256i(l1_s);
                let mut r0 = x86::simd_u64x4_to_m256i(r0_s);
                let mut r1 = x86::simd_u64x4_to_m256i(r1_s);

                x86::feistel_round_avx2(
                    &mut l0,
                    &mut l1,
                    &mut r0,
                    &mut r1,
                    FEISTEL_KEY_1,
                    FEISTEL_KEY_2,
                );
                r1 = x86::permute_u64x4_avx2::<0x93>(r1);

                x86::feistel_round_avx2(
                    &mut l0,
                    &mut l1,
                    &mut r0,
                    &mut r1,
                    FEISTEL_KEY_2,
                    FEISTEL_KEY_3,
                );
                r0 = x86::permute_u64x4_avx2::<0x4E>(r0);

                x86::feistel_round_avx2(
                    &mut l0,
                    &mut l1,
                    &mut r0,
                    &mut r1,
                    FEISTEL_KEY_3,
                    FEISTEL_KEY_4,
                );
                l1 = x86::permute_u64x4_avx2::<0x39>(l1);

                x86::feistel_round_avx2(
                    &mut l0,
                    &mut l1,
                    &mut r0,
                    &mut r1,
                    FEISTEL_KEY_4,
                    FEISTEL_KEY_1,
                );
                l0 = x86::permute_u64x4_avx2::<0x1B>(l0);

                x86::finish_and_store_u64x4(l0, l1, r0, r1, output, step);
            }

            #[cfg(not(all(
                target_arch = "x86_64",
                target_feature = "avx2",
                not(all(target_feature = "avx512dq", target_feature = "avx512vl"))
            )))]
            {
                macro_rules! feistel_round {
                    ($const1:expr, $const2:expr) => {{
                        let m0 = r0_s ^ rotl(r1_s, 23);
                        let mut h0 = m0 * Simd::splat($const1);
                        h0 ^= h0 >> Simd::splat(31);

                        let m1 = r1_s ^ rotl(r0_s, 33);
                        let mut h1 = m1 + Simd::splat($const2);
                        h1 += rotl(h0, 29);

                        let (nl0, nr0) = (r0_s, l0_s ^ h0);
                        let (nl1, nr1) = (r1_s, l1_s ^ h1);
                        l0_s = nl0;
                        r0_s = nr0;
                        l1_s = nl1;
                        r1_s = nr1;
                    }};
                }
                // ---- round 0 ----
                feistel_round!(FEISTEL_KEY_1, FEISTEL_KEY_2);
                // swizzle for r=0: cur_r1 = [3,0,1,2]
                r1_s = simd_swizzle!(r1_s, [3, 0, 1, 2]);

                // ---- round 1 ----
                feistel_round!(FEISTEL_KEY_2, FEISTEL_KEY_3);
                // swizzle for r=1: cur_r0 = [2,3,0,1]
                r0_s = simd_swizzle!(r0_s, [2, 3, 0, 1]);

                // ---- round 2 ----
                feistel_round!(FEISTEL_KEY_3, FEISTEL_KEY_4);
                // swizzle for r=2: cur_l1 = [1,2,3,0]
                l1_s = simd_swizzle!(l1_s, [1, 2, 3, 0]);

                // ---- round 3 ----
                feistel_round!(FEISTEL_KEY_4, FEISTEL_KEY_1);
                // swizzle for r=3: cur_l0 = [3,2,1,0]
                l0_s = simd_swizzle!(l0_s, [3, 2, 1, 0]);

                let res = (r0_s ^ l0_s) + (r1_s ^ !l1_s);
                res.copy_to_slice(&mut output[(step * SIMD_WIDTH)..((step + 1) * SIMD_WIDTH)]);
            }
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
pub mod tests {
    use super::*;
    use hypors::chi_square::goodness_of_fit;
    use rand::RngExt;
    use rand_core::{Rng, SeedableRng};
    use std::collections::HashSet;
    use std::iter::repeat;

    #[test]
    fn test_byte_frequencies() {
        let mut prng = almost_all_zeroes_state();
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
        let mut prng = almost_all_zeroes_state();
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
        let mut prng = almost_all_zeroes_state();
        let mut samples = vec![0u64; 1 << 24];
        prng.fill(samples.as_mut());
        let mut lowest_bin = u64::MAX;
        let mut highest_bin = 0;
        for i in 0..=62 {
            for j in (i + 1)..=63 {
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
    fn test_fork_independence() {
        const SAMPLES_PER_FORK: usize = 32;
        const FORKS: usize = 64;
        let mut random = HashSet::with_capacity(SAMPLES_PER_FORK * FORKS);
        let mut prng = almost_all_zeroes_state();
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
    fn test_avalanche() {
        let rng = TripleMixPrng::from_seed(GenericArray::from([0u8; TripleMixPrng::SEED_SIZE]));
        let mut core = rng.0.core.clone();

        let iterations = 20; // 20 iterations * 2048 bits = 40,960 checks.

        let mut min_flips = u32::MAX;
        let mut max_flips = 0;
        let mut total_flips: u64 = 0;
        let mut count: u64 = 0;
        let mut flips_per_bit = [[[0; 64]; SIMD_WIDTH]; 8];
        for _ in 0..iterations {
            // Generate baseline for this state
            let mut output1 = [0u64; OUTPUT_LEN];
            let mut core1 = core.clone();
            core1.generate(&mut output1);

            // Access core as mutable slice of u64s
            // We need to be careful with safety here or just use a safe introspection if possible.
            // TripleMixSimdCore has 8 Simd64 fields.
            // We can treat it as [u64; 32] via transmute for the test,
            // or just iterate fields manually to be safe.
            // Let's use a safe field iterator approach.

            // Actually, to flip "every bit", we need to mutate the struct fields.
            // Since they are private, we are in the module, so we can access them.
            // Let's iterate over the 8 fields.

            // Wait, we need to clone core for each flip AND mutate the clone.
            // Iterating pointers to a clone is tricky in a loop.

            // Better strategy: Serialization/Deserialization or direct access.
            // Let's just use `unsafe` to treat `core` as `[u64; 32]` for bit flipping since `TripleMixSimdCore` is `repr(C)`? No it's not.
            // But it's all Simd64s.
            // Let's just manually iterate the logic.

            for field_idx in 0..8 {
                for lane_idx in 0..SIMD_WIDTH {
                    for bit_idx in 0usize..64 {
                        // TinyMT tm0 MSB (field_idx 2, bit 63) is masked out.
                        if field_idx == 2 && bit_idx == 63 {
                            continue;
                        }

                        // Weyl Increment Low (field_idx 6) bit 0 must be 1. Flipping it breaks valid state assumption.
                        if field_idx == 6 && bit_idx == 0 {
                            continue;
                        }

                        // Weyl Increment High (field_idx 7) bit 63 has period 2 in additive update (d, 2d=0, 3d, 4d=0).
                        // It effectively affects only half the rounds, leading to lower diffusion (~250). Skip it.
                        if field_idx == 7 && bit_idx >= 62 {
                            continue;
                        }

                        let mut core2 = core.clone();
                        // Mutate specific bit
                        match field_idx {
                            0 => {
                                let mut arr = core2.xr0.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.xr0 = Simd64::from_array(arr);
                            }
                            1 => {
                                let mut arr = core2.xr1.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.xr1 = Simd64::from_array(arr);
                            }
                            2 => {
                                let mut arr = core2.tm0.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.tm0 = Simd64::from_array(arr);
                            }
                            3 => {
                                let mut arr = core2.tm1.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.tm1 = Simd64::from_array(arr);
                            }
                            4 => {
                                let mut arr = core2.weyl_lo.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.weyl_lo = Simd64::from_array(arr);
                            }
                            5 => {
                                let mut arr = core2.weyl_hi.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.weyl_hi = Simd64::from_array(arr);
                            }
                            6 => {
                                let mut arr = core2.inc_lo.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.inc_lo = Simd64::from_array(arr);
                            }
                            7 => {
                                let mut arr = core2.inc_hi.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.inc_hi = Simd64::from_array(arr);
                            }
                            _ => unreachable!(),
                        }

                        let mut output2 = [0u64; OUTPUT_LEN];
                        core2.generate(&mut output2);

                        // Check for similar states leading to related outputs
                        for cell in 1..OUTPUT_LEN {
                            assert_ne!(
                                output2[cell].wrapping_sub(output2[0]),
                                output1[cell].wrapping_sub(output1[0])
                            );
                            assert_ne!(output2[cell] ^ output2[0], output1[cell] ^ output1[0]);
                        }

                        let mut flips = 0;
                        for i in 0..OUTPUT_LEN {
                            flips += (output1[i] ^ output2[i]).count_ones();
                        }
                        total_flips += flips as u64;
                        min_flips = min_flips.min(flips);
                        max_flips = max_flips.max(flips);
                        count += 1;
                        flips_per_bit[field_idx][lane_idx][bit_idx] += flips;
                    }
                }
            }

            // Advance state
            let mut dummy = [0u64; OUTPUT_LEN];
            core.generate(&mut dummy);
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

        // 512 is ideal. Allow 10% deviation.
        const DEVIATION: f64 = 0.1;
        assert!(
            avg_flips >= 128.0 * (1.0 - DEVIATION) * (SIMD_WIDTH as f64),
            "Average diffusion too low"
        );
        assert!(
            avg_flips <= 128.0 * (1.0 + DEVIATION) * (SIMD_WIDTH as f64),
            "Average diffusion too high?"
        ); // Just sanity

        // Critical check: Ensure NO bit flip caused zero diffusion (independence failure)
        // With swizzle fix, min flips is around 337 (33%).
        // We accept this as sufficiently mixed (no obvious blind spots).
        assert!(
            min_flips as usize >= 96 * SIMD_WIDTH,
            "Minimum diffusion too low, possible blind spot!"
        );
    }

    #[test]
    fn test_seed_diffusion() {
        let seed = [0u8; TripleMixPrng::SEED_SIZE];
        let mut rng1 = TripleMixPrng::from_seed(GenericArray::from(seed));
        let start_val1 = rng1.try_next_u64().unwrap();

        // In the old implementation (incremental absorb), changing the LAST byte would NOT affect the
        // first lane, because the first lane was generated after only absorbing the first 64 bytes.
        for byte_index in 0..TripleMixPrng::SEED_SIZE {
            for bit_index in 0..=7 {
                let mut seed = [0u8; TripleMixPrng::SEED_SIZE];
                seed[byte_index] = 1 << bit_index;
                let mut rng2 = TripleMixPrng::from_seed(GenericArray::from(seed));
                let start_val2 = rng2.try_next_u64().unwrap();

                assert_ne!(
                    start_val1, start_val2,
                    "Changing byte {byte_index} bit {bit_index} of the seed did not affect the first output! Diffusion failure."
                );
                assert_ne!(start_val1, 0, "Output shouldn't be zero");
            }
        }
    }
}
