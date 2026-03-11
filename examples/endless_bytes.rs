use crate::common::get_random_seed;
use aws_lc_rs::test::from_hex;
use rand_core::{Rng, SeedableRng};
use rand_triplemix::TripleMixPrng;
use std::env::args_os;
use std::ffi::OsString;
use std::io::{stdout, Write};
use std::str::FromStr;
use rand_triplemix::reproducibility::NotReproducible;
use rand_triplemix::seed::DEFAULT_SEED_SIZE;

mod common;

fn main() {
    let args: Vec<_> = args_os().collect();
    let mut prng: TripleMixPrng<NotReproducible>;
    if let Some(seed_arg) = args.get(1)
        && let Some(seed_arg_utf8) = seed_arg.to_str()
        && let Ok(decoded_seed) = from_hex(seed_arg_utf8)
    {
        let mut seed = [0u8; DEFAULT_SEED_SIZE];
        seed[0..(DEFAULT_SEED_SIZE.min(decoded_seed.len()))].copy_from_slice(&decoded_seed);
        eprintln!("Seed: {}", seed.map(|b| format!("{:02X}", b)).join(""));
        prng = TripleMixPrng::from_seed(seed.into());
    } else if args.get(1) == Some(&OsString::from_str("z").unwrap()) {
        prng = TripleMixPrng::almost_all_zeroes_state();
    } else {
        let seed = get_random_seed();
        prng = TripleMixPrng::from_seed(seed.into());
    }
    loop {
        let mut buffer = [0u8; 1 << 16];
        prng.fill_bytes(&mut buffer);
        if let Err(e) = stdout().write_all(&buffer) {
            eprintln!("Error writing to stdout: {}", e);
            return;
        }
    }
}
