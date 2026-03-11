use crate::{avx2, TripleMixSimdCore};
use bytemuck::cast;
use core::simd::cmp::SimdPartialOrd;
use core::simd::num::{SimdInt, SimdUint};
use core::simd::{simd_swizzle, u16x16, u32x8, u8x32, Simd};
use core::slice::from_mut;
use rand_core::block::Generator;

impl TripleMixSimdCore {
    const TINYMT_MAT1: u64 = 0xdaa51b54;
    const TINYMT_MAT2: u64 = 0xfed47fb5 << 32;
    const TINYMT_TMAT: u64 = 0xa853e7ffeffefffe;

    // These are the hexadecimal expansion of pi, except that the first digit is changed in the
    // first and last constant to increase low-bit rank and avalanche effect.
    pub(crate) const LANE_CONSTANTS: Simd64 = Simd64::from_array([
        0xd243_f6a8_885a_308d,
        0x3131_98a2_e037_0734,
        0xca40_9382_2299_f31d,
        0x7082_efa9_8ec4_e6c8,
    ]);

    #[inline(always)]
    pub(crate) fn fill_blocks(&mut self, blocks: &mut [[u64; OUTPUT_LEN]]) {
        if blocks.is_empty() {
            return;
        }

        let mut xr0 = self.xr0;
        let mut xr1 = self.xr1;
        let mut tm0 = self.tm0;
        let mut tm1 = self.tm1;
        let mut w_lo = self.weyl_lo;
        let mut w_hi = self.weyl_hi;
        let i_lo = self.inc_lo;
        let i_hi = self.inc_hi;
        let i_mixed = i_lo + i_hi;

        for block in blocks {
            tm0 &= Simd::splat(TINYMT64_LANE_MASK); // TinyMT64 output tempering

            // 128-bit LCG: w = w * (lane_constant << 64 + 1) + inc
            // NB: w_lo is updated in the output but w_hi isn't, so the output is permuted compared
            // to a standard LCG!
            let high_product = simd_mul(w_lo, Self::LANE_CONSTANTS); // LCG update
            let next_w_lo = w_lo + i_lo; // LCG update
            let mut x = tm0 ^ tm1; // TinyMT64 update
            x ^= x << Simd::splat(12); // TinyMT64 output tempering
            let x_out = rotl(xr0 + xr1, 17) + xr0; // Xoroshiro128++ output tempering
            let mut ty = tm0 + tm1; // TinyMT64 update
            x ^= x >> Simd::splat(32); // TinyMT64 output tempering
            ty ^= tm0 >> Simd::splat(8); // TinyMT64 update
            x ^= x << Simd::splat(32); // TinyMT64++ output tempering

            // TinyMT64 update
            let t_out =
                ty ^ ((ty & Simd::splat(1)).wrapping_neg() & Simd::splat(Self::TINYMT_TMAT));

            x ^= x << Simd::splat(11); // TinyMT64 output tempering

            // Mixing
            let (out0, out1) = mix(next_w_lo, x_out, t_out, w_hi, i_mixed);
            out0.copy_to_slice(&mut block[0..SIMD_WIDTH]); // output
            out1.copy_to_slice(&mut block[SIMD_WIDTH..(2 * SIMD_WIDTH)]); // output
            let mask = (x & Simd::splat(1)).wrapping_neg(); // TinyMT64 update
            let t = xr0 ^ xr1; // Xoroshiro++ update
            let carry: Simd64 = next_w_lo.simd_lt(w_lo).to_simd().cast(); // LCG update
            tm0 = tm1 ^ (mask & Simd::splat(Self::TINYMT_MAT1)); // TinyMT64 update
            tm1 = x ^ (mask & Simd::splat(Self::TINYMT_MAT2)); // TinyMT64 update
            xr0 = rotl(xr0, 24) ^ t ^ (t << Simd::splat(16)); // Xoroshiro++ update
            w_hi += high_product + i_hi; // LCG update

            w_lo = next_w_lo; // LCG update
            xr1 = rotl(t, 37); // Xoroshiro++ update
            w_hi -= carry; // LCG update: subtracting u64::MAX = adding 1
        }

        self.xr0 = xr0;
        self.xr1 = xr1;
        self.tm0 = tm0;
        self.tm1 = tm1;
        self.weyl_lo = w_lo;
        self.weyl_hi = w_hi;
    }
}

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

pub const TINYMT64_LANE_MASK: u64 = 0x7fff_ffff_ffff_ffff_u64;
pub const SIMD_WIDTH: usize = 4;
pub const OUTPUTS_PER_STEP: usize = 2;
pub const OUTPUT_LEN: usize = OUTPUTS_PER_STEP * SIMD_WIDTH;

pub type Simd64 = Simd<u64, SIMD_WIDTH>;

#[inline(always)]
fn rotl(x: Simd64, k: u64) -> Simd64 {
    (x << Simd::splat(k)) | (x >> Simd::splat(64 - k))
}

#[inline(always)]
pub fn mix(w_lo: Simd64, x_in: Simd64, t: Simd64, w_hi: Simd64, i: Simd64) -> (Simd64, Simd64) {
    #[inline(always)]
    fn rotl16(d: Simd64) -> Simd64 {
        let d_transmuted: u16x16 = cast(d);
        cast(simd_swizzle!(d_transmuted, [
            3, 0, 1, 2,
            7, 4, 5, 6,
            11, 8, 9, 10,
            15, 12, 13, 14]))
    }

    #[inline(always)]
    fn rotl8(d: Simd64) -> Simd64 {
        let d_transmuted: u8x32 = cast(d);
        cast(simd_swizzle!(d_transmuted, [
            7, 0, 1, 2, 3, 4, 5, 6,
            15, 8, 9, 10, 11, 12, 13, 14,
            23, 16, 17, 18, 19, 20, 21, 22,
            31, 24, 25, 26, 27, 28, 29, 30]))
    }

    #[inline(always)]
    fn rotl24(d: Simd64) -> Simd64 {
        let d_transmuted: u8x32 = cast(d);
        cast(simd_swizzle!(d_transmuted, [
            5, 6, 7, 0, 1, 2, 3, 4,
            13, 14, 15, 8, 9, 10, 11, 12,
            21, 22, 23, 16, 17, 18, 19, 20,
            29, 30, 31, 24, 25, 26, 27, 28]))
    }

    let i_transmuted: u32x8 = cast(i);
    let rotated_i: Simd64 = cast(simd_swizzle!(i_transmuted, [1, 0, 3, 2, 5, 4, 7, 6]));

    // Words 1, 5, 9 and 13 of the fractional part of the Golden Ratio.
    static FEISTEL_CONSTANT_1: Simd64 = Simd::from_array([
        0x9E3779B97F4A7C15,
        0x2767f0b153d27b7f,
        0xf06ad7ae9717877e,
        0x626e33b8d04b4331,
    ]);
    // Words 2, 6, 10 and 14 of the fractional part of the Golden Ratio.
    static FEISTEL_CONSTANT_2: Simd64 = Simd::from_array([
        0xf39cc0605cedc834,
        0x0347045b5bf1827f,
        0x85839d6effbd7dc6,
        0xbbf73c790d94f79d,
    ]);

    let i_mix_0 = FEISTEL_CONSTANT_2 ^ i;
    let i_mix_1 = FEISTEL_CONSTANT_1 + rotated_i;

    let mut a = w_lo;
    let mut b = t + i_mix_0;
    let mut c = x_in ^ i_mix_1;
    let mut d = w_hi;

    // This mixing function is a modified ChaCha20 double-round that uses 64-bit rather than 32-bit
    // words and adds the multiplication. Instead of permuting between rounds, we mix the
    // permutation in during the second round, thus hiding simd_swizzle's latency.

    // First ChaCha round
    a += b; d ^= a; d = rotl16(d);
    c += d; b ^= c; b = rotl24(b);
    a += b; d ^= a; d = rotl8(d);
    c += d; b ^= c; b = rotl(b,53);

    // This permutation is based on the `diagonalize` method in `c2-chacha`:
    // https://github.com/cryptocorrosion/cryptocorrosion/blob/master/stream-ciphers/chacha/src/guts.rs#L47
    let cr = c.rotate_elements_left::<1>();
    let dr = d.rotate_elements_right::<2>();
    let ar = a.rotate_elements_right::<1>();

    a += b; d ^= a; d = rotl16(d); // 1st quarter of 2nd ChaCha round
    b ^= cr; c += dr; d += ar;
    c += d; b ^= c; b = rotl24(b); // 2nd quarter of 2nd ChaCha round
    let m = simd_mul(a + b, c + d);
    a += b; d ^= a; d = rotl8(d);  // 3rd quarter of 2nd ChaCha round
    c ^= m; a += rotl(m, 33);
    b += m; d ^= rotl(m, 27);
    c += d; b ^= c; b = rotl(b,7);  // 4th quarter of 2nd ChaCha round
    let mut x = a + c;
    let mut y = b + d;

    x ^= rotl(y, 17);
    y ^= rotl(x, 41);

    (x, y)
}

impl Generator for TripleMixSimdCore {
    type Output = [u64; OUTPUT_LEN];

    #[inline(always)]
    fn generate(&mut self, output: &mut Self::Output) {
        self.fill_blocks(from_mut(output))
    }
}

#[cfg(test)]
mod tests {
    use crate::generate::{mix, Simd64, OUTPUTS_PER_STEP, OUTPUT_LEN, SIMD_WIDTH};
    use crate::reproducibility::NotReproducible;
    use bytemuck::cast_slice_mut;
    use core::simd::cmp::SimdPartialEq;
    use core::simd::num::SimdUint;
    use core::simd::Simd;
    use gf2::{BitMatrix, BitStore};
    use hypors::chi_square::goodness_of_fit;
    use itertools::Itertools;
    use proptest::{prop_assert, proptest};
    use rand::{rng, RngExt};
    use rand_core::Rng;
    use statrs::distribution::{Binomial, Discrete, DiscreteCDF};

    struct MixMatrixStats {
        total_weight: usize,
        min_row_weight: usize,
        min_col_weight: usize,
    }

    fn evaluate_mix_matrix(mix_input: [u64; 20]) -> MixMatrixStats {
        let (base_input, base_out0, base_out1) = mix_from_flat_array(mix_input);
        let mut xor_matrix = BitMatrix::<u64>::zeros(512, 1280);
        let mut i = 0;
        for variable_idx in 0..5 {
            for lane_idx in 0..SIMD_WIDTH {
                for bit_idx in 0..64 {
                    let mut modified_input = base_input.clone();
                    modified_input[variable_idx][lane_idx] ^= 1u64 << bit_idx;
                    let (mod_out0, mod_out1) = mix(
                        modified_input[0],
                        modified_input[1],
                        modified_input[2],
                        modified_input[3],
                        modified_input[4],
                    );
                    let (out_xor_0, out_xor_1) = (mod_out0 ^ base_out0, mod_out1 ^ base_out1);
                    let mut j = 0;
                    for out_lane_idx in 0..SIMD_WIDTH {
                        for out_bit_idx in 0..64 {
                            xor_matrix.set(
                                j,
                                i,
                                (out_xor_0[out_lane_idx] >> out_bit_idx) & 1 != 0,
                            );
                            j += 1;
                        }
                        for out_bit_idx in 0..64 {
                            xor_matrix.set(
                                j,
                                i,
                                (out_xor_1[out_lane_idx] >> out_bit_idx) & 1 != 0,
                            );
                            j += 1;
                        }
                    }
                    i += 1;
                }
            }
        }
        assert_eq!(xor_matrix.clone().to_echelon_form().count_ones(), 512);
        let row_weights = (0..512)
            .map(|row| xor_matrix.row(row).count_ones())
            .collect::<Vec<_>>();
        let min_row_weight = row_weights.iter().copied().min().unwrap();
        let max_row_weight = row_weights.iter().copied().max().unwrap();
        let col_weights = (0..1280)
            .map(|col| xor_matrix.col(col).count_ones())
            .collect::<Vec<_>>();
        let min_col_weight = col_weights.iter().copied().min().unwrap();
        let max_col_weight = col_weights.iter().copied().max().unwrap();
        println!("min_row_weight={min_row_weight}, max_row_weight={max_row_weight}");
        println!("Row weights:");
        for row_chunk in row_weights.chunks_exact(64) {
            println!("{:>4?} = {:>6}", row_chunk, row_chunk.iter().sum::<usize>());
        }
        println!("min_col_weight={min_col_weight}, max_col_weight={max_col_weight}");
        println!("Column weights:");
        for col_chunk in col_weights.chunks_exact(64) {
            println!("{:>4?} = {:>6}", col_chunk, col_chunk.iter().sum::<usize>());
        }
        let total_weight = row_weights.into_iter().sum::<usize>();
        println!("Total weight: {total_weight}");
        MixMatrixStats { total_weight, min_row_weight, min_col_weight }
    }

    fn mix_from_flat_array(mix_input: [u64; 20]) -> ([Simd64; 5], Simd64, Simd64) {
        let base_input = [Simd::from_array(mix_input[0..4].try_into().unwrap()),
            Simd::from_array(mix_input[4..8].try_into().unwrap()),
            Simd::from_array(mix_input[8..12].try_into().unwrap()),
            Simd::from_array(mix_input[12..16].try_into().unwrap()),
            Simd::from_array(mix_input[16..20].try_into().unwrap())];
        let (base_out0, base_out1) = mix(
            base_input[0],
            base_input[1],
            base_input[2],
            base_input[3],
            base_input[4],
        );
        (base_input, base_out0, base_out1)
    }

    struct SecondDerivativeStats {
        min: u64,
        max: u64,
        mean: f64,
        stdev: f64,
    }

    fn evaluate_second_order_derivatives(mix_input: [u64; 20]) -> SecondDerivativeStats {
        let (base_input, base_out0, base_out1) = mix_from_flat_array(mix_input);
        let mut weights = Vec::new();
        for var_idx_1 in 0..5 {
            for var_idx_2 in var_idx_1..5 {
                for lane_idx_1 in 0..SIMD_WIDTH {
                    for lane_idx_2 in lane_idx_1..SIMD_WIDTH {
                        if lane_idx_1 == lane_idx_2 && var_idx_1 == var_idx_2 {
                            for bit_idx_1 in 0..63 {
                                for bit_idx_2 in bit_idx_1..64 {
                                    let mut modified_input = base_input;
                                    modified_input[var_idx_1][lane_idx_1] ^=
                                        1 << bit_idx_1 | 1 << bit_idx_2;
                                    let (mod_out0, mod_out1) = mix(
                                        modified_input[0],
                                        modified_input[1],
                                        modified_input[2],
                                        modified_input[3],
                                        modified_input[4],
                                    );
                                    let (out_xor_0, out_xor_1) =
                                        (mod_out0 ^ base_out0, mod_out1 ^ base_out1);
                                    weights.push(
                                        out_xor_0.count_ones().reduce_sum()
                                            + out_xor_1.count_ones().reduce_sum(),
                                    );
                                }
                            }
                        } else {
                            for bit_idx in 0..64 {
                                let mut modified_input = base_input;
                                modified_input[var_idx_1][lane_idx_1] ^= 1 << bit_idx;
                                modified_input[var_idx_2][lane_idx_2] ^= 1 << bit_idx;
                                let (mod_out0, mod_out1) = mix(
                                    modified_input[0],
                                    modified_input[1],
                                    modified_input[2],
                                    modified_input[3],
                                    modified_input[4],
                                );
                                let (out_xor_0, out_xor_1) =
                                    (mod_out0 ^ base_out0, mod_out1 ^ base_out1);
                                weights.push(
                                    out_xor_0.count_ones().reduce_sum()
                                        + out_xor_1.count_ones().reduce_sum(),
                                );
                            }
                        }
                    }
                }
            }
        }
        let sample_size = weights.len();
        let min = weights.iter().copied().min().unwrap();
        let max = weights.iter().copied().max().unwrap();
        let mean =
            weights.iter().copied().map(u64::from).sum::<u64>() as f64 / sample_size as f64;
        let variance_weight = weights
            .iter()
            .copied()
            .map(|weight| weight as f64 - mean)
            .map(|x| x * x)
            .sum::<f64>()
            / (sample_size - 1) as f64;
        let stdev = variance_weight.sqrt();
        println!(
            "N={sample_size}, min={min}, max={max}, mean={mean}, sd={stdev}"
        );
        SecondDerivativeStats { min, max, mean, stdev }
    }

    #[test]
    fn test_mix_matrix_random_inputs() {
        let mut rng = rng();
        let mut mix_input = [0u64; 20];
        let sigma = ((512 * 1280) as f64 * 0.25).sqrt();
        for _ in 0..5 {
            rng.fill(&mut mix_input);
            let MixMatrixStats { total_weight, min_row_weight, min_col_weight } =
                evaluate_mix_matrix(mix_input);
            let z = (total_weight as f64 - (0.5 * 512.0 * 1280.0)) / sigma;
            assert!(min_col_weight >= 160, "Min column weight {min_col_weight} too low");
            assert!(min_row_weight >= 384, "Min row weight {min_row_weight} too low");
            assert!(z >= -3.0, "Total weight {total_weight} (z={z}) too low");
            assert!(z <= 3.0, "Total weight {total_weight} (z={z}) too high");
        }
    }

    #[test]
    pub fn test_second_derivative_random_inputs() {
        let mut rng = rng();
        let mut random_inputs = [0u64; 20];
        for _ in 0..5 {
            rng.fill(&mut random_inputs);
            let SecondDerivativeStats { min, max, mean, stdev } = evaluate_second_order_derivatives(random_inputs);
            assert!(min >= 150, "Min weight {min} too low");
            assert!(max <= 362, "Max weight {max} too high");
            assert!(mean >= 254.0, "Mean weight {mean:.02} too low");
            assert!(mean <= 258.0, "Mean weight {mean:.02} too high");
            assert!(stdev >= 11.0, "Stdev weight {stdev:.02} too low");
            assert!(stdev <= 14.0, "Stdev weight {stdev:.02} too high");
        }
    }

    proptest! {
        #[test]
        fn test_mix_matrix_proptest(mix_input: [u64; 20]) {
            let MixMatrixStats { total_weight, min_row_weight, min_col_weight } =
                evaluate_mix_matrix(mix_input);
            prop_assert!(min_col_weight >= 160);
            prop_assert!(min_row_weight >= 384);
            let expected = 512 * 1280 / 2;
            let deviation = (total_weight as isize - expected as isize).abs();
            prop_assert!(deviation <= 8192); // ≈1.25% bias
        }

        #[test]
        fn test_second_derivative_proptest(mix_input: [u64; 20]) {
            let SecondDerivativeStats { min, max, mean, stdev } = evaluate_second_order_derivatives(mix_input);
            assert!(min >= 140, "Min weight {min} too low");
            assert!(max <= 372, "Max weight {max} too high");
            assert!(mean >= 254.0, "Mean weight {mean:.02} too low");
            assert!(mean <= 258.0, "Mean weight {mean:.02} too high");
            assert!(stdev >= 11.0, "Stdev weight {stdev:.02} too low");
            assert!(stdev <= 14.0, "Stdev weight {stdev:.02} too high");
        }
    }

    #[test]
    fn test_byte_frequencies() {
        for mut prng in crate::create_rngs::<NotReproducible>() {
            let mut frequencies = [0u32; u8::MAX as usize + 1];
            for _ in 0..(1 << 28) {
                let byte: u8 = prng.random();
                frequencies[byte as usize] += 1;
            }
            let chi_square = goodness_of_fit(
                frequencies.map(f64::from),
                std::iter::repeat_n((1 << 20) as f64, u8::MAX as usize + 1),
                0.01,
            )
            .unwrap();
            println!("{:?}", chi_square);
            assert!(!chi_square.reject_null);
        }
    }

    #[test]
    fn test_u16_frequencies() {
        for mut prng in crate::create_rngs::<NotReproducible>() {
            let mut frequencies = vec![0u32; u16::MAX as usize + 1];
            for _ in 0..(1 << 28) {
                let word: u16 = prng.random();
                frequencies[word as usize] += 1;
            }
            let chi_square = goodness_of_fit(
                frequencies.into_iter().map(f64::from),
                std::iter::repeat_n((1 << 12) as f64, u16::MAX as usize + 1),
                0.01,
            )
            .unwrap();
            println!("{:?}", chi_square);
            assert!(!chi_square.reject_null);
        }
    }

    #[test]
    fn test_bit_correlations_and_transitions() {
        const SAMPLE_COUNT: usize = 1 << 24;
        const P_THRESHOLD: f64 = 1e-6; // 6112 total tests per prng
        let mut samples = vec![0u64; SAMPLE_COUNT];
        for mut prng in crate::create_rngs::<NotReproducible>() {
            prng.fill(samples.as_mut());
            for i in 0..=62 {
                for j in (i + 1)..=63 {
                    let mut bins = [0u64; 4];
                    for sample in &samples {
                        bins[((sample >> i) & 1 | ((sample >> j) & 1) << 1) as usize] += 1;
                    }
                    let p = goodness_of_fit(
                        bins.map(|bin| bin as f64),
                        [SAMPLE_COUNT as f64 * 0.25; 4],
                        P_THRESHOLD,
                    )
                    .unwrap()
                    .p_value;
                    assert!(
                        p >= P_THRESHOLD,
                        "Chi-square test failed for bins: ({bins:?}, p={p:.10}) for i={i},j={j}"
                    );
                }
            }
            for i in 0..=63 {
                for j in 0..=63 {
                    let mut lagged_bins = [0u64; 4];
                    for pair in samples.windows(2) {
                        let first = pair[0];
                        let second = pair[1];
                        lagged_bins[((first >> i) & 1 | ((second >> j) & 1) << 1) as usize] += 1;
                    }
                    let p = goodness_of_fit(
                        lagged_bins.map(|bin| bin as f64),
                        [(SAMPLE_COUNT - 1) as f64 * 0.25; 4],
                        P_THRESHOLD,
                    )
                    .unwrap()
                    .p_value;
                    assert!(
                        p >= P_THRESHOLD,
                        "Chi-square test failed for lagged bins: ({lagged_bins:?}, p={p:.10}) for i={i},j={j}"
                    );
                }
            }
        }
    }

    #[test]
    fn test_avalanche() {
        const LOW_AVALANCHE_THRESHOLD: u64 = 28 * OUTPUT_LEN as u64;
        let mut total_low_avalanche_checks = 0;
        let mut total_checks = 0;
        let bit_flip_distribution = Binomial::new(0.5, (OUTPUT_LEN * 64) as u64).unwrap();
        let low_avalanche_probability = bit_flip_distribution.cdf(LOW_AVALANCHE_THRESHOLD);
        for rng in crate::create_rngs::<NotReproducible>() {
            let core = rng.block_core.core;

            const ITERATIONS: usize = 20;

            let mut min_flips = u64::MAX;
            let mut max_flips = 0;
            let mut total_flips: u64 = 0;
            let mut count: u64 = 0;
            let mut flips_per_bit = [[[0; 64]; SIMD_WIDTH]; 8];
            let mut core1 = core;
            let mut output1 = [[Simd64::splat(0); OUTPUTS_PER_STEP]; ITERATIONS];
            core1.fill_blocks(cast_slice_mut(&mut output1));
            let mut min_field = 0;
            let mut min_lane = 0;
            let mut min_bit = 0;
            let mut min_iter = 0;
            let mut low_avalanches = 0;
            for (field_idx, flips_per_bit_for_field) in flips_per_bit.iter_mut().enumerate() {
                for (lane_idx, flips_per_bit_for_lane) in
                    flips_per_bit_for_field.iter_mut().enumerate()
                {
                    for (bit_idx, flips_for_bit) in flips_per_bit_for_lane.iter_mut().enumerate() {
                        if field_idx == 2 && bit_idx == 63 {
                            continue;
                        }
                        if field_idx == 6 && bit_idx == 0 {
                            continue;
                        }
                        //if field_idx == 7 && bit_idx >= 59 { continue; }
                        let mut core2 = core;
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
                        let mut output2 = [[Simd64::splat(0); OUTPUTS_PER_STEP]; ITERATIONS];
                        core2.fill_blocks(cast_slice_mut(&mut output2));
                        for i in 0..ITERATIONS {
                            let mut flips = 0;
                            let first_output1 = Simd::splat(output1[i][0][0]);
                            let first_output2 = Simd::splat(output2[i][0][0]);
                            for vec_idx in 0..OUTPUTS_PER_STEP {
                                let xor = output1[i][vec_idx] ^ output2[i][vec_idx];
                                let sub_same = (output1[i][vec_idx] - output2[i][vec_idx])
                                    .simd_eq(first_output1 - first_output2);
                                let xor_same = xor.simd_eq(first_output1 ^ first_output2);
                                for cell in 0..SIMD_WIDTH {
                                    if vec_idx == 0 && cell == 0 {
                                        continue;
                                    }
                                    assert_eq!(
                                        sub_same.test(cell),
                                        false,
                                        "Field {field_idx}, lane {lane_idx}, bit {bit_idx}: Same difference between cells 0 and {cell} as before flipping"
                                    );
                                    assert_eq!(
                                        xor_same.test(cell),
                                        false,
                                        "Field {field_idx}, lane {lane_idx}, bit {bit_idx}: Same xor between cells 0 and {cell} as before flipping"
                                    );
                                }
                                flips += xor.count_ones().reduce_sum();
                            }
                            total_flips += flips;
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
                            *flips_for_bit += flips;
                        }
                    }
                }
            }
            for (field_idx, flips_per_bit_for_field) in flips_per_bit.iter().enumerate() {
                for (lane_idx, flips_per_bit_for_lane) in flips_per_bit_for_field.iter().enumerate()
                {
                    println!(
                        "Field {} lane {}: Flips: {:?}",
                        field_idx, lane_idx, flips_per_bit_for_lane
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

            let low_avalanche_p_value =
                binomial_p_value(low_avalanche_probability, count, low_avalanches);
            println!(
                "Expected {:.4} low-avalanche checks, got {}; p={:.4}",
                count as f64 * low_avalanche_probability,
                low_avalanches,
                low_avalanche_p_value
            );
            assert!(
                low_avalanche_p_value > 0.001,
                "Too many low-avalanche results"
            );
            assert!(
                min_flips as usize >= 16 * OUTPUT_LEN,
                "Minimum diffusion too low in field {min_field} lane {min_lane} bit {min_bit} on iteration {min_iter}, possible blind spot!"
            );
            total_checks += count;
            total_low_avalanche_checks += low_avalanches;
        }
        let low_avalanche_p_value = binomial_p_value(
            low_avalanche_probability,
            total_checks,
            total_low_avalanche_checks,
        );
        println!(
            "Expected {:.4} low-avalanche checks, got {}; p={:.4}",
            total_checks as f64 * low_avalanche_probability,
            total_low_avalanche_checks,
            low_avalanche_p_value
        );
        assert!(
            low_avalanche_p_value > 0.01,
            "Too many low-avalanche results"
        );
    }

    fn binomial_p_value(probability: f64, trials: u64, successes: u64) -> f64 {
        let low_avalanche_distribution = Binomial::new(probability, trials).unwrap();
        let p_obs = low_avalanche_distribution.pmf(successes);

        // Sum all outcomes whose probability is <= the probability of our observation
        let low_avalanche_p_value: f64 = (0..=trials)
            .map(|k| low_avalanche_distribution.pmf(k))
            .sorted_by(f64::total_cmp)
            .take_while(|&p| p <= p_obs + 1e-12) // + epsilon for float safety
            .sum();

        // Ensure it doesn't exceed 1.0 due to floating point errors
        let low_avalanche_p_value = low_avalanche_p_value.min(1.0);
        low_avalanche_p_value
    }

    mod projection {
        use crate::create_rngs;
        use crate::reproducibility::NotReproducible;
        use bytemuck::cast_slice_mut;
        use rand_core::Rng;

        fn xor_successive(words: &mut [u64]) {
            for i in 0..words.len() - 1 {
                words[i] ^= words[i + 1];
            }
        }

        fn random_projection_kernel() -> [[i8; PROJECTION_BLOCK]; PROJECTION_BLOCK] {
            // Fixed deterministic ±1 kernel
            let mut k = [[0i8; PROJECTION_BLOCK]; PROJECTION_BLOCK];
            let mut x: u64 = 0x12345678abcdef01;
            for row in k.iter_mut() {
                for cell in row.iter_mut() {
                    x ^= x << 13;
                    x ^= x >> 7;
                    x ^= x << 17;
                    *cell = if x & 1 == 0 { 1 } else { -1 };
                }
            }
            k
        }

        fn extract_bitplane(words: &[u64], bit: u32) -> Vec<i8> {
            words
                .iter()
                .map(|w| if ((w >> bit) & 1) != 0 { 1 } else { -1 })
                .collect()
        }

        fn projection_test(data: &[i8]) -> f64 {
            let kernel = random_projection_kernel();
            let mut sum = 0f64;
            let mut sum_sq = 0f64;
            let mut count = 0f64;

            let side = (data.len() as f64).sqrt() as usize;
            for y in 0..side - PROJECTION_BLOCK {
                for x in 0..side - PROJECTION_BLOCK {
                    let mut acc = 0i32;
                    for (ky, kernel_row) in kernel.iter().enumerate() {
                        for (kx, kernel_entry) in kernel_row.iter().copied().enumerate() {
                            let idx = (y + ky) * side + (x + kx);
                            acc += data[idx] as i32 * kernel_entry as i32;
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
        const PROJECTION_BLOCK: usize = 8; // 8x8 projection
        #[test]
        fn test_bitplane_projection() {
            const SAMPLES: usize = 1 << 22; // ~4M outputs
            for mut rng in create_rngs::<NotReproducible>() {
                let mut buf = vec![0u64; SAMPLES];
                rng.fill_bytes(cast_slice_mut(&mut buf));

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
        }
    }

    #[test]
    fn test_lane_cross_correlation_bitplane() {
        for mut rng in crate::create_rngs::<NotReproducible>() {
            const N: usize = 1 << 28;
            let mut lanes = [0u64; SIMD_WIDTH];
            for target_lane in 1..SIMD_WIDTH {
                let mut sums = [0i64; 64];
                for _ in 0..N {
                    rng.fill(&mut lanes);
                    for (bit, sum) in sums.iter_mut().enumerate() {
                        let a = if (lanes[0] >> bit) & 1 == 1 { 1 } else { -1 };
                        let b = if (lanes[target_lane] >> bit) & 1 == 1 {
                            1
                        } else {
                            -1
                        };

                        *sum += (a * b) as i64;
                    }
                }
                for (bit, sum) in sums.into_iter().enumerate() {
                    let corr = sum as f64 / N as f64;

                    // For the binomial distribution, stddev = sqrt(N * p * (1 - p))
                    // but its range is [0, N]; we've scaled it linearly to have the range [-1, 1]
                    // so sigma = sqrt(N * 0.25) * 2 / N
                    // = 1/sqrt(N)
                    let sigma = 1.0 / (N as f64).sqrt();

                    assert!(
                        corr.abs() < 5.0 * sigma,
                        "Lane bit correlation detected on bit {bit} betweeen lanes 0 and {target_lane}: {corr} (σ={sigma})",
                    );
                }
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

    /// False positive rate for this test is about 1.2% per PRNG.
    #[test]
    fn test_lowbit_rank() {
        for mut rng in crate::create_rngs::<NotReproducible>() {
            let mut rank60_count = 0;

            for _ in 0..10000 {
                let mut matrix = [0u64; 64];
                rng.fill(&mut matrix);
                let rank = gf2_rank(matrix);
                assert!(rank >= 60, "Low-bit rank deficiency: {}", rank);
                if rank == 60 {
                    rank60_count += 1;
                    assert!(
                        rank60_count <= 2,
                        "Too many low-bit rank deficiencies (rank 60)"
                    );
                }
            }
        }
    }

    #[test]
    fn test_double_differential() {
        for mut rng in crate::create_rngs::<NotReproducible>() {
            const N: usize = 1 << 21;

            let mut x = vec![0u64; N];
            rng.fill(x.as_mut_slice());

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
    }

    #[test]
    fn test_fractional_spectral() {
        for mut rng in crate::create_rngs::<NotReproducible>() {
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
}