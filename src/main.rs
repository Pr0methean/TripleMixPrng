#![feature(portable_simd)]

use genetic_algorithm::crossover::CrossoverUniform;
use genetic_algorithm::fitness::FitnessOrdering;
use genetic_algorithm::genotype::{Genotype, ListGenotype, MultiListGenotype};
use genetic_algorithm::mutate::MutateSingleGene;
use genetic_algorithm::select::SelectElite;
use genetic_algorithm::strategy::evolve::EvolveReporterSimple;
use genetic_algorithm::strategy::prelude::Evolve;
use genetic_algorithm::strategy::Strategy;
use log::info;
use triple_mix_prng::{build_input_instructions, build_list_of_instructions, build_output_instructions, PrngMixingFitness, TripleMixSimdCore};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let body_operands = build_list_of_instructions(TripleMixSimdCore::NUM_OPERANDS);
    simple_log::console("debug")?;
    let genotype = MultiListGenotype::builder()
        .with_allele_lists(vec![
            build_input_instructions(TripleMixSimdCore::NUM_OPERANDS, 4),
            build_input_instructions(TripleMixSimdCore::NUM_OPERANDS, 5),
            build_input_instructions(TripleMixSimdCore::NUM_OPERANDS, 6),
            build_input_instructions(TripleMixSimdCore::NUM_OPERANDS, 7),
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
            body_operands.clone(),
            body_operands.clone(),
            build_output_instructions(TripleMixSimdCore::NUM_OPERANDS, 0),
            build_output_instructions(TripleMixSimdCore::NUM_OPERANDS, 1),
        ])
        .with_genes_size(48)
        .build()
        .unwrap();
    let evolve = Evolve::builder()
    .with_genotype(genotype)
    .with_select(SelectElite::new(0.7, 0.0625))         // sort the chromosomes by fitness to determine crossover order. Strive to replace 50% of the population with offspring. Allow 2% through the non-generational best chromosomes gate before selection and replacement
    .with_crossover(CrossoverUniform::new(0.7, 0.8))  // crossover all individual genes between 2 chromosomes for offspring with 70% parent selection (30% do not produce offspring) and 80% chance of crossover (20% of parents just clone)
    .with_mutate(MutateSingleGene::new(0.3))          // mutate offspring for a single gene with a 20% probability per chromosome
    .with_fitness(PrngMixingFitness)
    .with_par_fitness(true)
    .with_fitness_cache(1 << 24)
    .with_fitness_ordering(FitnessOrdering::Maximize) // optional, default is Maximize, aim towards the most true values
    .with_target_population_size(1 << 8)                 // evolve with 100 chromosomes
    .with_max_stale_generations(32)
    .with_reporter(EvolveReporterSimple::new(4))    // optional builder step, report every 100 generations
    .call()
    .unwrap();

    let (best_genes, best_fitness_score) = evolve.best_genes_and_fitness_score().unwrap();
    info!("Results: Score: {best_fitness_score}\n\rGenes:\n\r{best_genes:?}");
    Ok(())
}
