#![feature(portable_simd)]

use std::fs::File;
use std::io::Read;
use genetic_algorithm::crossover::CrossoverUniform;
use genetic_algorithm::fitness::FitnessOrdering;
use genetic_algorithm::genotype::{Genotype, ListGenotype};
use genetic_algorithm::mutate::MutateSingleGene;
use genetic_algorithm::select::SelectElite;
use genetic_algorithm::strategy::evolve::EvolveReporterSimple;
use genetic_algorithm::strategy::prelude::Evolve;
use genetic_algorithm::strategy::Strategy;
use stack_sizes::analyze_executable;
use triple_mix_prng::{build_list_of_instructions, PrngMixingFitness, TripleMixSimdCore};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut program_file = File::open("triple_mix_simd.exe")?;
    let mut program_bytes = Vec::with_capacity(program_file.metadata()?.len() as usize);
    program_file.read_to_end(&mut program_bytes)?;
    analyze_executable(&program_bytes)?;
    simple_log::console("debug")?;
    let genotype = ListGenotype::builder()
        .with_allele_list(build_list_of_instructions(TripleMixSimdCore::NUM_OPERANDS))
        .with_genes_size(32)
        .build()
        .unwrap();
    let evolve = Evolve::builder()
    .with_genotype(genotype)
    .with_select(SelectElite::new(0.5, 0.02))         // sort the chromosomes by fitness to determine crossover order. Strive to replace 50% of the population with offspring. Allow 2% through the non-generational best chromosomes gate before selection and replacement
    .with_crossover(CrossoverUniform::new(0.7, 0.8))  // crossover all individual genes between 2 chromosomes for offspring with 70% parent selection (30% do not produce offspring) and 80% chance of crossover (20% of parents just clone)
    .with_mutate(MutateSingleGene::new(0.2))          // mutate offspring for a single gene with a 20% probability per chromosome
    .with_fitness(PrngMixingFitness)                          // count the number of true values in the chromosomes
    .with_fitness_ordering(FitnessOrdering::Maximize) // optional, default is Maximize, aim towards the most true values
    .with_target_population_size(64)                 // evolve with 100 chromosomes
    .with_target_fitness_score(-100)                   // goal is 100 times true in the best chromosome
    .with_reporter(EvolveReporterSimple::new(100))    // optional builder step, report every 100 generations
    .call()
    .unwrap();

    let (best_genes, best_fitness_score) = evolve.best_genes_and_fitness_score().unwrap();
    println!("Results: Score: {best_fitness_score}\n\rGenes:\n\r{best_genes:?}");
    Ok(())
}
