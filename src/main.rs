#![feature(portable_simd)]

use std::iter::{repeat_n};
use genetic_algorithm::crossover::CrossoverUniform;
use genetic_algorithm::fitness::FitnessOrdering;
use genetic_algorithm::genotype::{Genotype, MultiRangeGenotype, MutationType};
use genetic_algorithm::mutate::MutateSingleGene;
use genetic_algorithm::select::SelectElite;
use genetic_algorithm::strategy::evolve::EvolveReporterSimple;
use genetic_algorithm::strategy::hill_climb::HillClimbVariant;
use genetic_algorithm::strategy::prelude::{Evolve, HillClimbBuilder, HillClimbReporterSimple};
use genetic_algorithm::strategy::Strategy;
use log::info;
use triple_mix_prng::{as_instructions, PrngMixingFitness, ALL_OPERANDS, OPERATIONS, READ_WRITE_OPERANDS};

const TOTAL_POPULATION: usize = 1 << 8;
fn main() -> Result<(), Box<dyn std::error::Error>> {
    const GENERATIONS_PER_REPORT: usize = 4;
    simple_log::console("debug")?;
    let operation_indexes = 0..=(OPERATIONS.len() as u32 - 1);
    let mut allele_ranges = vec![
        READ_WRITE_OPERANDS, // output 1
        operation_indexes.clone(), // operation 1
        0..=0, // input 1
        READ_WRITE_OPERANDS, // output 2
        operation_indexes.clone(), // operation 2
        1..=1, // input 2
        READ_WRITE_OPERANDS, // output 3
        operation_indexes.clone(), // operation 3
        2..=2, // input 3
        READ_WRITE_OPERANDS, // output 4
        operation_indexes.clone(), // operation 4
        3..=3, // input 4
        READ_WRITE_OPERANDS, // output 5
        operation_indexes.clone(), // operation 5
        4..=4, // input 5
    ];
    allele_ranges.extend(repeat_n(vec![
        READ_WRITE_OPERANDS,
        operation_indexes.clone(),
        ALL_OPERANDS
    ], 41).flatten());
    allele_ranges.extend(vec![
        14..=14, // output 47
        operation_indexes.clone(), // operation 47
        ALL_OPERANDS, // input 47
        15..=15, // output 47
        operation_indexes, // operation 47
        ALL_OPERANDS, // input 47
    ]);
    let genotype_builder = MultiRangeGenotype::builder()
        .with_allele_ranges(allele_ranges)
        .with_mutation_type(MutationType::Discrete);
    let genotype = genotype_builder.clone().build().unwrap();
    let evolve = Evolve::<MultiRangeGenotype<u32>,_,_,_,_,_,_>::builder()
    .with_genotype(genotype)
    .with_select(SelectElite::new(0.3, 0.0625))
    .with_crossover(CrossoverUniform::new(0.8, 0.9))
    .with_mutate(MutateSingleGene::new(0.25))
    .with_fitness(PrngMixingFitness)
    .with_par_fitness(true)
    .with_fitness_cache(1 << 24)
    .with_fitness_ordering(FitnessOrdering::Maximize) // optional, default is Maximize, aim towards the most true values
    .with_target_population_size(TOTAL_POPULATION)                 // evolve with 100 chromosomes
    .with_max_stale_generations(32)
    .with_reporter(EvolveReporterSimple::new(GENERATIONS_PER_REPORT))    // optional builder step, report every 100 generations
    .call()
    .unwrap();
    let (best_genes, best_fitness_score) = evolve.best_genes_and_fitness_score().unwrap();
    info!("GA results: Score: {best_fitness_score}\n\rGenes:\n\r{:?}", as_instructions(&best_genes).collect::<Vec<_>>());
    let post_genotype = genotype_builder.with_seed_genes_list(vec![best_genes]).build().unwrap();
    let (post_sgd_genes, post_sgd_score) = HillClimbBuilder::new()
        .with_genotype(post_genotype)
        .with_variant(HillClimbVariant::Stochastic)
        .with_fitness(PrngMixingFitness)
        .with_fitness_cache(1 << 12)
        .with_max_stale_generations(32)
        .with_reporter(HillClimbReporterSimple::new(GENERATIONS_PER_REPORT))
        .call()
        .unwrap()
        .best_genes_and_fitness_score().unwrap();
    info!("Post-GA SGD results: Score: {post_sgd_score}\n\rGenes:\n\r{:?}", as_instructions(&post_sgd_genes).collect::<Vec<_>>());
    Ok(())
}
