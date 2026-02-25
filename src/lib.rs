#![feature(likely_unlikely, portable_simd, generic_const_exprs, target_feature_inline_always)]
#![allow(incomplete_features)]
#[cfg(all(
    target_arch = "x86_64",
    target_feature = "avx2",
    not(all(target_feature = "avx512dq", target_feature = "avx512vl"))
))]
mod avx2;

use core::convert::Infallible;
use std::array::from_fn;
use std::fmt::{Debug, Formatter};
use rand::{rng, RngExt};
use rand_core::block::{BlockRng, Generator};
use rand_core::{Rng, TryRng};
use std::hash::{Hash};
use std::hint::unlikely;
use std::simd::cmp::SimdPartialOrd;
use std::simd::num::SimdUint;
use std::simd::*;
use std::slice::from_mut;
use genetic_algorithm::fitness::{Fitness, FitnessChromosome, FitnessValue};
use genetic_algorithm::genotype::{MultiListGenotype};
use genetic_algorithm::impl_allele;
use hypors::chi_square::goodness_of_fit;
use log::{debug, info, trace};
use statrs::distribution::{Binomial, DiscreteCDF};
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

#[derive(Hash, Eq, PartialEq, Copy, Clone, Debug)]
enum Operation {
    Copy,
    Add(usize),
    Subtract(usize),
    Multiply(usize),
    Xor(usize),
    ShiftLeft(u64),
    ShiftRight(u64),
    RotateLeft(u64),
    Swizzle(usize)
}

const SIMD_SWIZZLE_DESCRIPTIONS: [&str; 23] = [
    "[0, 1, 3, 2]",
    "[0, 2, 1, 3]",
    "[0, 2, 3, 1]",
    "[0, 3, 1, 2]",
    "[0, 3, 2, 1]",
    "[1, 0, 2, 3]",
    "[1, 0, 3, 2]",
    "[1, 2, 0, 3]",
    "[1, 2, 3, 0]",
    "[1, 3, 0, 2]",
    "[1, 3, 2, 0]",
    "[2, 0, 1, 3]",
    "[2, 0, 3, 1]",
    "[2, 1, 0, 3]",
    "[2, 1, 3, 0]",
    "[2, 3, 0, 1]",
    "[2, 3, 1, 0]",
    "[3, 0, 1, 2]",
    "[3, 0, 2, 1]",
    "[3, 1, 0, 2]",
    "[3, 1, 2, 0]",
    "[3, 2, 0, 1]",
    "[3, 2, 1, 0]",
];

const SIMD_SWIZZLES: [fn(Simd64) -> Simd64; 23] = [
    |x| simd_swizzle!(x, [0, 1, 3, 2]),
                |x| simd_swizzle!(x, [0, 2, 1, 3]),
                |x| simd_swizzle!(x, [0, 2, 3, 1]),
                |x| simd_swizzle!(x, [0, 3, 1, 2]),
                |x| simd_swizzle!(x, [0, 3, 2, 1]),
                |x| simd_swizzle!(x, [1, 0, 2, 3]),
                |x| simd_swizzle!(x, [1, 0, 3, 2]),
                |x| simd_swizzle!(x, [1, 2, 0, 3]),
                |x| simd_swizzle!(x, [1, 2, 3, 0]),
                |x| simd_swizzle!(x, [1, 3, 0, 2]),
                |x| simd_swizzle!(x, [1, 3, 2, 0]),
                |x| simd_swizzle!(x, [2, 0, 1, 3]),
                |x| simd_swizzle!(x, [2, 0, 3, 1]),
                |x| simd_swizzle!(x, [2, 1, 0, 3]),
                |x| simd_swizzle!(x, [2, 1, 3, 0]),
                |x| simd_swizzle!(x, [2, 3, 0, 1]),
                |x| simd_swizzle!(x, [2, 3, 1, 0]),
                |x| simd_swizzle!(x, [3, 0, 1, 2]),
                |x| simd_swizzle!(x, [3, 0, 2, 1]),
                |x| simd_swizzle!(x, [3, 1, 0, 2]),
                |x| simd_swizzle!(x, [3, 1, 2, 0]),
                |x| simd_swizzle!(x, [3, 2, 0, 1]),
                |x| simd_swizzle!(x, [3, 2, 1, 0]),
];

#[derive(Hash, Eq, PartialEq, Copy, Clone)]
pub struct Instruction {
    operation: Operation,
    operand1: usize,
    output: usize,
}

impl Debug for Instruction {
    fn fmt(&self, f: &mut Formatter<'_>) -> std::fmt::Result {
        write!(f, "op[{}] = ", self.output)?;
        match self.operation {
            Operation::Copy => {
                if self.operand1 == self.output {
                    Ok(())
                } else {
                    write!(f, "op[{}]", self.operand1)
                }
            }
            Operation::Add(operand2) => {
                write!(f, "op[{}] + op[{}]", self.operand1, operand2)
            }
            Operation::Subtract(operand2) => {
                write!(f, "op[{}] - op[{}]", self.operand1, operand2)
            }
            Operation::Multiply(_) => {
                write!(f, "simd_mul(op[{}], op[{}])", self.operand1, self.operand1)
            }
            Operation::Xor(operand2) => {
                write!(f, "op[{}] ^ op[{}]", self.operand1, operand2)
            }
            Operation::ShiftLeft(amount) => {
                write!(f, "op[{}] << {amount}", self.operand1)
            }
            Operation::ShiftRight(amount) => {
                write!(f, "op[{}] << {amount}", self.operand1)
            }
            Operation::RotateLeft(amount) => {
                write!(f, "rotl(op[{}], {amount})", self.operand1)
            }
            Operation::Swizzle(swizzle) => {
                write!(f, "simd_swizzle!(op[{}], {})", self.operand1, SIMD_SWIZZLE_DESCRIPTIONS[swizzle])
            }
        }
    }
}

impl_allele!(Instruction);

pub fn build_input_instructions(num_operands: usize, operand1: usize) -> Vec<Instruction> {
    let mut instructions = Vec::with_capacity(num_operands * num_operands);
    for output in 0..num_operands {
        add_operations_between(num_operands, operand1, output, &mut instructions);
    }
    instructions
}

pub fn build_output_instructions(num_operands: usize, output: usize) -> Vec<Instruction> {
    let mut instructions = Vec::with_capacity(num_operands * num_operands);
    for operand1 in 0..num_operands {
        add_operations_between(num_operands, operand1, output, &mut instructions);
    }
    instructions
}

fn add_operations_between(num_operands: usize, operand1: usize, output: usize, instructions: &mut Vec<Instruction>) {
    for swizzle in 0..23 {
        instructions.push(Instruction {
            operation: Operation::Swizzle(swizzle),
            output,
            operand1
        });
    }
    for operand2 in 0..num_operands {
        if operand2 != operand1 {
            instructions.push(Instruction {
                operation: Operation::Subtract(operand2),
                output,
                operand1
            });
        }
    }
    for operand2 in (operand1 + 1)..num_operands {
        instructions.push(Instruction {
            operation: Operation::Add(operand2),
            output,
            operand1,
        });
        instructions.push(Instruction {
            operation: Operation::Xor(operand2),
            output,
            operand1
        });
    }
    for shift_amount in 1..=63 {
        instructions.push(Instruction {
            output,
            operand1,
            operation: Operation::ShiftLeft(shift_amount)
        });
        instructions.push(Instruction {
            output,
            operand1,
            operation: Operation::ShiftRight(shift_amount)
        });
        instructions.push(Instruction {
            output,
            operand1,
            operation: Operation::RotateLeft(shift_amount)
        });
    }
}

pub fn build_list_of_instructions(num_operands: usize, near_head_or_tail: bool) -> Vec<Instruction> {
    let mut instructions = Vec::with_capacity(num_operands * num_operands * (193 + 4 * num_operands));

    // No-op instruction
    if !near_head_or_tail {
        instructions.push(Instruction {
            operation: Operation::Copy,
            operand1: 0,
            output: 0
        });
    }
    for output in 0..num_operands {
        for operand1 in 0..num_operands {
            if operand1 != output {
                instructions.push(Instruction {
                    operation: Operation::Copy,
                    operand1, output
                });
            }
            if !near_head_or_tail {
                for operand2 in (operand1 + 1)..num_operands {
                    instructions.push(Instruction {
                        operation: Operation::Multiply(operand2),
                        output,
                        operand1,
                    });
                }
            }
            add_operations_between(num_operands, operand1, output, &mut instructions);
        }
    }
    instructions
}

#[derive(Clone, Copy, Debug, Default)]
pub struct PrngMixingFitness;

impl Fitness for PrngMixingFitness {
    type Genotype = MultiListGenotype<Instruction>;

    fn calculate_for_chromosome(&mut self, chromosome: &FitnessChromosome<Self>, _genotype: &Self::Genotype) -> Option<FitnessValue> {
        let mut complexity_cost = 0;
        let mut total_multiplies: usize = 0;
        let mut total_shifts: usize = 0;
        let mut total_swizzles: usize = 0;
        for instruction in chromosome.genes().iter() {
            complexity_cost += match instruction.operation {
                Operation::Copy => if instruction.operand1 == instruction.output { 0 } else { 5 },
                Operation::Xor(_) => 8,
                Operation::Add(_) => 10,
                Operation::Subtract(_) => 10,
                Operation::Multiply(_) => {
                    total_multiplies += 1;
                    match total_multiplies {
                        1 => 60,
                        _ => 100
                    }
                }
                Operation::ShiftLeft(_) | Operation::ShiftRight(_) => {
                    total_shifts += 1;
                    match total_shifts {
                        0..=12 => 12,
                        13..=16 => 14,
                        17..=24 => 16,
                        25..=32 => 18,
                        _ => 50
                    }
                }
                Operation::RotateLeft(_) => {
                    total_shifts += 1;
                    match total_shifts {
                        0..=12 => 32,
                        13..=16 => 34,
                        17..=24 => 36,
                        25..=32 => 38,
                        33.. => 70
                    }
                }
                Operation::Swizzle(_) => {
                    total_swizzles += 1;
                    match total_swizzles {
                        0..=3 => 35,
                        4 => 45,
                        _ => 50
                    }
                }
            }
        }
        debug!("Complexity cost: {}", complexity_cost);
        let mut test_failures_cost = 0;
        let mut prng = TripleMixPrng::from_instructions(chromosome.genes().clone());
        const EVAL_SEEDS: usize = 8;
        for seed_idx in 0..EVAL_SEEDS {
            match seed_idx {
                0 => {},
                1 => prng.set_max_state(),
                _ => prng.reseed()
            }
            {
                // Avalanche test
                let mut avalanche_failure_cost = 0;
                let mut related_seed_related_output_cost = 0;
                let core = prng.0.core.clone();
                const AVALANCHE_ITERATIONS: usize = 20;
                const LOW_AVALANCHE_THRESHOLD: u32 = 28 * OUTPUT_LEN as u32;
                let mut min_flips = u32::MAX;
                let mut max_flips = 0;
                let mut total_flips: u64 = 0;
                let mut count: u64 = 0;
                let mut flips_per_bit = [[[0; 64]; SIMD_WIDTH]; 8];
                let mut core1 = core.clone();
                let mut output1 = [[0u64; OUTPUT_LEN]; AVALANCHE_ITERATIONS];
                for output_block in output1.iter_mut() {
                    core1.generate(output_block);
                }
                let mut low_avalanches = 0;
                for (field_idx, flips_total_for_field) in flips_per_bit.iter_mut().enumerate() {
                    for (lane_idx, flips_total_for_lane) in flips_total_for_field.iter_mut().enumerate() {
                        for (bit_idx, flips_total_for_bit) in flips_total_for_lane.iter_mut().enumerate() {
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
                            let mut output2 = [[0u64; OUTPUT_LEN]; AVALANCHE_ITERATIONS];
                            for output_block in output2.iter_mut() {
                                core2.generate(output_block);
                            }
                            for i in 0..AVALANCHE_ITERATIONS {
                                let mut flips = 0;
                                for cell in 0..OUTPUT_LEN {
                                    if cell != 0
                                        && (output2[i][cell].wrapping_sub(output2[i][0]) == output1[i][cell].wrapping_sub(output1[i][0])
                                        || output2[i][cell] ^ output2[i][0] == output1[i][cell] ^ output1[i][0]) {
                                        trace!("Field {field_idx}, lane {lane_idx}, bit {bit_idx}: Same difference or xor between cells 0 and {cell} as before flipping");
                                        related_seed_related_output_cost += 50;
                                    }
                                    flips += (output1[i][cell] ^ output2[i][cell]).count_ones();
                                }
                                total_flips += flips as u64;
                                if flips <= LOW_AVALANCHE_THRESHOLD {
                                    low_avalanches += 1;
                                }
                                if flips < min_flips {
                                    min_flips = flips;
                                }
                                max_flips = max_flips.max(flips);
                                count += 1;
                                *flips_total_for_bit += flips;
                            }
                        }
                    }
                }
                let avg_flips = total_flips as f64 / count as f64;
                debug!(
                    "Avalanche stats ({} checks): Avg: {:.2}, Min: {}, Max: {}",
                    count, avg_flips, min_flips, max_flips
                );
                const DEVIATION: f64 = 0.1;
                const MIN_FLIPS: f64 = 32.0 * (1.0 - DEVIATION) * (OUTPUT_LEN as f64);
                const MAX_FLIPS: f64 = 32.0 * (1.0 + DEVIATION) * (OUTPUT_LEN as f64);
                if avg_flips < MIN_FLIPS {
                    avalanche_failure_cost += 20 * (MIN_FLIPS - avg_flips) as u64;
                } else if avg_flips > MAX_FLIPS {
                    avalanche_failure_cost += 20 * (avg_flips - MAX_FLIPS) as u64;
                }
                let bit_flip_distribution = Binomial::new(0.5, (OUTPUT_LEN * 64) as u64).unwrap();
                let low_avalanche_probability = bit_flip_distribution.cdf(LOW_AVALANCHE_THRESHOLD as u64);
                let low_avalanche_distribution = Binomial::new(low_avalanche_probability, count).unwrap();
                let low_avalanche_p_value = 1.0 - low_avalanche_distribution.cdf(low_avalanches as u64);
                debug!(
                    "Expected {:.4} low-avalanche checks, got {}; p={:.4}",
                    low_avalanche_probability * count as f64,
                    low_avalanches,
                    low_avalanche_p_value
                );
                if low_avalanche_p_value < 0.01 {
                    avalanche_failure_cost += Self::p_value_cost(low_avalanche_p_value);
                }
                avalanche_failure_cost = avalanche_failure_cost.min(MAX_PENALTY_PER_TEST);
                related_seed_related_output_cost = related_seed_related_output_cost.min(MAX_PENALTY_PER_TEST);
                debug!("Avalanche failure cost: {avalanche_failure_cost}");
                debug!("Related seed / related output cost: {related_seed_related_output_cost}");
                test_failures_cost += avalanche_failure_cost;
                test_failures_cost += related_seed_related_output_cost;
            }

            // Byte and u16 frequency test
            {
                const FREQUENCIES_SAMPLES: usize = 1 << 24;
                let mut frequencies_cost = 0;
                let mut frequencies_prng = prng.clone();
                let mut byte_frequencies = vec![0u32; u8::MAX as usize + 1];
                let mut u16_frequencies = vec![0u32; u16::MAX as usize + 1];
                for _ in 0..FREQUENCIES_SAMPLES {
                    let byte1: u8 = frequencies_prng.random();
                    byte_frequencies[byte1 as usize] += 1;
                    let byte2: u8 = frequencies_prng.random();
                    byte_frequencies[byte2 as usize] += 1;
                    let word: u16 = byte1 as u16 | (byte2 as u16) << 8;
                    u16_frequencies[word as usize] += 1;
                }
                let byte_chi_square = goodness_of_fit(
                    byte_frequencies.iter().map(|&x| x as f64).collect::<Vec<_>>(),
                    vec![(FREQUENCIES_SAMPLES >> 8) as f64; u8::MAX as usize + 1],
                    0.01,
                ).unwrap();
                trace!("Byte chi^2: {:?}", byte_chi_square);
                if byte_chi_square.reject_null {
                    frequencies_cost += 500 * Self::p_value_cost(byte_chi_square.p_value);
                }
                let u16_chi_square = goodness_of_fit(
                    u16_frequencies.iter().map(|&x| x as f64).collect::<Vec<_>>(),
                    vec![(FREQUENCIES_SAMPLES >> 16) as f64; u16::MAX as usize + 1],
                    0.01,
                ).unwrap();
                trace!("u16 chi^2: {:?}", u16_chi_square);
                if u16_chi_square.reject_null {
                    frequencies_cost += 500 * Self::p_value_cost(u16_chi_square.p_value);
                }
                frequencies_cost = frequencies_cost.min(MAX_PENALTY_PER_TEST);
                debug!("Frequencies cost: {frequencies_cost}");
                test_failures_cost += frequencies_cost;
            }

            {
                // Bit correlation test
                let mut correlation_cost = 0;
                const SAMPLE_COUNT: usize = 1 << 16;
                const P_THRESHOLD: f64 = 1e-6; // 6112 total tests per prng
                let mut samples = vec![0u64; SAMPLE_COUNT];
                prng.clone().fill(samples.as_mut());
                for i in 0..=62 {
                    for j in (i + 1)..=63 {
                        let mut bins = [0u64; 4];
                        for sample in &samples {
                            bins[((sample >> i) & 1 | ((sample >> j) & 1) << 1) as usize] += 1;
                        }
                        let p = goodness_of_fit(bins.map(|bin| bin as f64), [SAMPLE_COUNT as f64 * 0.25; 4], P_THRESHOLD).unwrap().p_value;
                        if p < P_THRESHOLD {
                            trace!("Chi-square test failed for bins: ({bins:?}, p={p:.10}) for i={i},j={j}");
                            correlation_cost += Self::p_value_cost(p * (0.01 / P_THRESHOLD));
                        }
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
                        let p = goodness_of_fit(lagged_bins.map(|bin| bin as f64), [(SAMPLE_COUNT - 1) as f64 * 0.25; 4], P_THRESHOLD).unwrap().p_value;
                        if p < P_THRESHOLD {
                            trace!("Chi-square test failed for bins: ({lagged_bins:?}, p={p:.10}) for i={i},j={j}");
                            correlation_cost += Self::p_value_cost(p * (0.01 / P_THRESHOLD));
                        }
                    }
                }
                correlation_cost = correlation_cost.min(MAX_PENALTY_PER_TEST);
                debug!("Correlation cost: {correlation_cost}");
                test_failures_cost += correlation_cost;
            }

            {
                // Low-bit-rank test
                let mut low_bit_rank_cost = 0;
                let mut rank60_count = 0;
                let mut bit_rank_rng = prng.clone();
                for _ in 0..10000 {
                    let matrix: [u64; 64] = from_fn(|_| bit_rank_rng.next_u64());
                    let rank = gf2_rank(matrix);
                    if rank <= 60 {
                        trace!("Low GF2 rank: {rank}");
                        rank60_count += 1;
                        if rank60_count > 2 {
                            low_bit_rank_cost += 100;
                        }
                        if rank < 60 {
                            low_bit_rank_cost += 6200 - 100 * (rank as u64);
                        }
                        if low_bit_rank_cost >= MAX_PENALTY_PER_TEST {
                            break;
                        }
                    }
                }
                low_bit_rank_cost = low_bit_rank_cost.min(MAX_PENALTY_PER_TEST);
                debug!("Low GF2 rank cost: {low_bit_rank_cost}");
                test_failures_cost += low_bit_rank_cost;
            }

            const MAX_PENALTY_PER_TEST: u64 = 10_000;
            {
                // Lane correlation test
                let mut lane_correlation_cost = 0;
                const N: usize = 1 << 20;
                let mut lanes = [0u64; SIMD_WIDTH];
                for target_lane in 1..SIMD_WIDTH {
                    let mut sums = [0i64; 64];
                    for _ in 0..N {
                        prng.fill(&mut lanes);
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
                        let z_score = corr.abs() / sigma;
                        if z_score > 5.0 {
                            trace!("Lane bit correlation detected on bit {bit} betweeen lanes 0 and {target_lane}: {corr} (σ={sigma})");
                            lane_correlation_cost += (20.0 * (z_score - 4.0)) as u64;
                        }
                    }
                }
                lane_correlation_cost = lane_correlation_cost.min(MAX_PENALTY_PER_TEST);
                debug!("Lane correlation cost: {lane_correlation_cost}");
                test_failures_cost += lane_correlation_cost;
            }
        }

        debug!("Total test failure cost: {test_failures_cost}");
        let cost = test_failures_cost + complexity_cost;
        info!("Total cost: {cost} (complexity {complexity_cost}, test failures {test_failures_cost}), function: {:?}", chromosome.genes());
        Some(FitnessValue::from(0isize.saturating_sub_unsigned(cost as usize)))
    }
}

impl PrngMixingFitness {
    fn p_value_cost(p_value: f64) -> u64 {
        (200.0 / (20.0 + 2000.0 * p_value)) as u64
    }
}

// ============================================================================
// Core struct
// ============================================================================

#[derive(Clone)]
pub struct TripleMixSimdCore {
    xr0: Simd64,
    xr1: Simd64,
    tm0: Simd64,
    tm1: Simd64,
    weyl_lo: Simd64,
    weyl_hi: Simd64,
    inc_lo: Simd64,
    inc_hi: Simd64,
    mixing_instructions: Box<[Instruction]>,
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
    pub const NUM_OPERANDS: usize = 16;
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

        #[inline(always)]
        fn rotl(x: Simd64, k: u64) -> Simd64 {
            (x << Simd::splat(k)) | (x >> Simd::splat(64 - k))
        }

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

            let mut operands = [Simd64::splat(0); Self::NUM_OPERANDS];
            // === 2. Mixing ===
            // Operands 0 and 1 are outputs
            operands[0] = b_l0;
            operands[1] = b_l1;
            operands[2] = b_r0;
            operands[3] = b_r1;

            // Duplicate state so that functions are encouraged to copy from input to output with modifications
            operands[4] = b_l0;
            operands[5] = b_l1;
            operands[6] = b_r0;
            operands[7] = b_r1;

            operands[8] = i_hi;
            operands[9] = FEISTEL_CONSTANT_1;
            operands[10] = FEISTEL_CONSTANT_2;
            operands[11] = FEISTEL_CONSTANT_3;
            operands[12] = FEISTEL_CONSTANT_4;
            operands[13] = Simd::splat(u64::MAX);
            for instruction in self.mixing_instructions.iter() {
                let input = operands[instruction.operand1];
                let result = match instruction.operation {
                    Operation::Copy => input,
                    Operation::Add(operand2) => input + operands[operand2],
                    Operation::Subtract(operand2) => input - operands[operand2],
                    Operation::Multiply(operand2) => simd_mul(input, operands[operand2]),
                    Operation::Xor(operand2) => input ^ operands[operand2],
                    Operation::ShiftLeft(amount) => input << amount,
                    Operation::ShiftRight(amount) => input >> amount,
                    Operation::RotateLeft(amount) => rotl(input, amount),
                    Operation::Swizzle(swizzle) => SIMD_SWIZZLES[swizzle](input),
                };
                operands[instruction.output] = result;
            }
            operands[0].copy_to_slice(&mut block[0..SIMD_WIDTH]);
            operands[1].copy_to_slice(&mut block[SIMD_WIDTH..(2 * SIMD_WIDTH)]);
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
}

impl TripleMixPrng {
    fn reseed(&mut self) {
        let mut rng = rng();
        let core = &mut self.0.core;
        rng.fill(core.xr0.as_mut_array());
        rng.fill(core.xr1.as_mut_array());
        rng.fill(core.tm0.as_mut_array());
        core.tm0 &= Simd::splat(TINYMT64_LANE_MASK);
        rng.fill(core.tm1.as_mut_array());
        rng.fill(core.weyl_lo.as_mut_array());
       rng.fill(core.weyl_hi.as_mut_array());
        rng.fill(core.inc_lo.as_mut_array());
        core.inc_lo |= Simd::splat(1);
        rng.fill(core.inc_hi.as_mut_array());

        for i in 0..SIMD_WIDTH {
            while unlikely((core.xr0[i] == 0 && core.xr1[i] == 0)
                || (i != 0 && core.xr0[i] == core.xr0[0] && core.xr1[i] == core.xr1[0])) {
                core.xr0[i] = rng.next_u64();
                core.xr1[i] = rng.next_u64();
            }
            while unlikely((core.tm0[i] == 0 && core.tm1[i] == 0)
                || (i != 0 && core.tm0[i] == core.tm0[0] && core.tm1[i] == core.tm1[0])) {
                core.tm0[i] = rng.next_u64() & TINYMT64_LANE_MASK;
                core.tm1[i] = rng.next_u64();
            }
            if i != 0 {
                while unlikely(core.weyl_lo[i] == core.weyl_lo[0]) {
                    core.weyl_lo[i] = rng.next_u64();
                }
                while unlikely(core.inc_lo[i] == core.inc_lo[0]) {
                    core.inc_lo[i] = rng.next_u64() | 1;
                }
            }
        }
    }
    fn from_instructions(instructions: Vec<Instruction>) -> Self {
        TripleMixPrng(BlockRng::new(TripleMixSimdCore {
            mixing_instructions: instructions.into_boxed_slice(),
            xr0: Default::default(),
            xr1: Simd::from_array([1, 2, 3, 4]),
            tm0: Default::default(),
            tm1: Simd::from_array([1, 2, 3, 4]),
            weyl_lo: Simd::from_array([0, 1, 2, 3]),
            weyl_hi: Default::default(),
            inc_lo: Simd::from_array([1, 3, 5, 7]),
            inc_hi: Default::default(),
        }))
    }

    fn set_max_state(&mut self) {
        self.0.core.xr0 = Simd::from_array([u64::MAX, u64::MAX - 1, u64::MAX - 2, u64::MAX - 3]);
        self.0.core.xr1 = Simd::splat(u64::MAX);
        self.0.core.tm0 = Simd::splat(TINYMT64_LANE_MASK);
        self.0.core.tm1 = Simd::from_array([u64::MAX, u64::MAX - 1, u64::MAX - 2, u64::MAX - 3]);
        self.0.core.weyl_lo = Simd::from_array([u64::MAX, u64::MAX - 1, u64::MAX - 2, u64::MAX - 3]);
        self.0.core.weyl_hi = Simd::splat(u64::MAX);
        self.0.core.inc_lo = Simd::from_array([u64::MAX, u64::MAX - 2, u64::MAX - 4, u64::MAX - 6]);
        self.0.core.inc_hi = Simd::splat(u64::MAX);
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



