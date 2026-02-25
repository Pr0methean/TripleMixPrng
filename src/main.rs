#![feature(portable_simd)]

use std::iter::repeat_with;
use genetic_algorithm::crossover::CrossoverUniform;
use genetic_algorithm::fitness::FitnessOrdering;
use genetic_algorithm::genotype::{Genotype, MultiListGenotype};
use genetic_algorithm::mutate::MutateSingleGene;
use genetic_algorithm::select::SelectElite;
use genetic_algorithm::strategy::evolve::EvolveReporterSimple;
use genetic_algorithm::strategy::hill_climb::HillClimbVariant;
use genetic_algorithm::strategy::prelude::{Evolve, HillClimbBuilder, HillClimbReporterSimple};
use genetic_algorithm::strategy::Strategy;
use log::info;
use triple_mix_prng::{build_input_instructions, build_list_of_instructions, build_output_instructions, Instruction, PrngMixingFitness};

const TOTAL_POPULATION: usize = 1 << 10;
const HILL_CLIMBED_POPULATION: usize = 1 << 5;
fn main() -> Result<(), Box<dyn std::error::Error>> {
    const GENERATIONS_PER_REPORT: usize = 4;
    let body_operands = build_list_of_instructions(false);
    simple_log::console("debug")?;
    let genotype_builder = MultiListGenotype::builder()
        .with_allele_lists(vec![
            build_input_instructions(0),
            build_input_instructions(1),
            build_input_instructions(2),
            build_input_instructions(3),
            build_input_instructions(4),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands.clone(),
            body_operands,
            build_output_instructions(14),
            build_output_instructions(15),
        ])
        .with_genes_size(48);
    let genotype = genotype_builder.clone().build().unwrap();
    let mut rng = ga_rand::thread_rng();
    let random_population: Vec<_> = repeat_with(|| genotype.chromosome_constructor_random(&mut rng).genes)
        .take(TOTAL_POPULATION - HILL_CLIMBED_POPULATION)
        .collect();
    let (best_sgd, sgd_climbs) = HillClimbBuilder::new()
        .with_genotype(genotype)
        .with_variant(HillClimbVariant::Stochastic)
        .with_fitness(PrngMixingFitness)
        .with_fitness_cache(1 << 24)
        .with_par_fitness(true)
        .with_max_generations(128)
        .with_max_stale_generations(16)
        .with_reporter(HillClimbReporterSimple::new(GENERATIONS_PER_REPORT))
        .call_par_repeatedly(HILL_CLIMBED_POPULATION)
        .unwrap();
    let (best_genes, best_fitness_score) = best_sgd.best_genes_and_fitness_score().unwrap();
    info!("SGD bootstrap results: Score: {best_fitness_score:?}\n\rGenes:\n\r{best_genes:?}");
    let bootstrapped_genotype = genotype_builder.clone().with_seed_genes_list(
        sgd_climbs.into_iter().flat_map(|hc| hc.best_genes())
            .chain(random_population).collect()
    ).build().unwrap();
    let evolve = Evolve::<MultiListGenotype<Instruction>,_,_,_,_,_,_>::builder()
    .with_genotype(bootstrapped_genotype)
    .with_select(SelectElite::new(0.3, 0.0625))
    .with_crossover(CrossoverUniform::new(0.8, 0.9))
    .with_mutate(MutateSingleGene::new(0.25))
    .with_fitness(PrngMixingFitness)
    .with_par_fitness(true)
    .with_fitness_cache(1 << 24)
    .with_fitness_ordering(FitnessOrdering::Maximize) // optional, default is Maximize, aim towards the most true values
    .with_target_population_size(1 << 10)                 // evolve with 100 chromosomes
    .with_max_stale_generations(32)
    .with_reporter(EvolveReporterSimple::new(GENERATIONS_PER_REPORT))    // optional builder step, report every 100 generations
    .call()
    .unwrap();
    let (best_genes, best_fitness_score) = evolve.best_genes_and_fitness_score().unwrap();
    info!("GA results: Score: {best_fitness_score}\n\rGenes:\n\r{best_genes:?}");
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
    info!("Post-GA SGD results: Score: {post_sgd_score}\n\rGenes:\n\r{post_sgd_genes:?}");
    Ok(())
}
