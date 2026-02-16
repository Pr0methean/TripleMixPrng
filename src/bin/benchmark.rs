use generic_array::GenericArray;
use rand_core::{Rng, SeedableRng};
use std::hint::black_box;
use std::time::Instant;
use triple_mix_prng::TripleMixPrng;

fn main() {
    const ITERATIONS: u64 = 8;
    let mut prng = TripleMixPrng::from_seed(GenericArray::default());
    let mut buffer = vec![0u8; 128 * 1024 * 1024]; // 128 MB

    println!("Benchmarking TripleMixPrng fill_bytes...");

    // Warm up
    prng.fill_bytes(&mut buffer);

    let start = Instant::now();
    for _ in 0..ITERATIONS {
        prng.fill_bytes(&mut buffer);
        black_box(&buffer);
    }
    let duration = start.elapsed();

    let total_bytes = buffer.len() as u64 * ITERATIONS;
    let throughput = (total_bytes as f64) / duration.as_secs_f64() / 1024.0 / 1024.0;

    println!("Throughput: {:.2} MB/s", throughput);
    println!("Duration: {:?}", duration);
}
