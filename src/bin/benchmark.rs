use std::time::Instant;
use rand_core::{Rng, SeedableRng};
use triple_mix_prng::TripleMixPrng;
use generic_array::GenericArray;

fn main() {
    let mut prng = TripleMixPrng::from_seed(GenericArray::default());
    let mut buffer = vec![0u8; 128 * 1024 * 1024]; // 128 MB

    println!("Benchmarking TripleMixPrng fill_bytes...");
    
    // Warm up
    prng.fill_bytes(&mut buffer);
    
    let start = Instant::now();
    for _ in 0..8 {
        prng.fill_bytes(&mut buffer);
    }
    let duration = start.elapsed();
    
    let total_bytes = buffer.len() as u64 * 8;
    let throughput = (total_bytes as f64) / duration.as_secs_f64() / 1024.0 / 1024.0;
    
    println!("Throughput: {:.2} MB/s", throughput);
    println!("Duration: {:?}", duration);
}
