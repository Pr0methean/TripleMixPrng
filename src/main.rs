use std::io::{stdout, Write};
use rand::rngs::SysRng;
use rand_core::{Rng, SeedableRng, TryRng, UnwrapErr};

const SEED_SIZE: usize = 47;

fn main() {
    let mut seed = [0u8; SEED_SIZE];
    SysRng.try_fill_bytes(&mut seed).unwrap();
    eprintln!("Seed: {}", seed.map(|b| format!("{:02X}", b)).join(""));
    let mut prng = triple_mix_prng::TripleMixPrng::from_rng(&mut UnwrapErr(SysRng));
    loop {
        let mut buffer = [0u8; 1<<16];
        prng.fill_bytes(&mut buffer);
        if let Err(e) = stdout().write_all(&buffer) {
            eprintln!("Error writing to stdout: {}", e);
            return;
        }
    }
}