#![feature(portable_simd)]

use aws_lc_rs::rand::SecureRandom;
use aws_lc_rs::rand::SystemRandom;
use rand::rngs::SysRng;
use rand_core::{Rng, SeedableRng, TryRng};
use std::ffi::OsString;
use std::io::{Write, stdout};
use std::str::FromStr;
use std::{env, thread};
use triple_mix_prng::{TripleMixPrng, SEED_SIZE};

const OS_ENTROPY_BYTES: usize = 32;

fn main() {
    let args: Vec<_> = env::args_os().collect();
    let mut prng: TripleMixPrng;
    if let Some(seed_arg) = args.get(1)
        && let Ok(decoded_seed) = hex::decode(seed_arg.as_encoded_bytes())
    {
        let mut seed = [0u8; SEED_SIZE];
        seed[0..(SEED_SIZE.min(decoded_seed.len()))].copy_from_slice(&decoded_seed);
        eprintln!("Seed: {}", seed.map(|b| format!("{:02X}", b)).join(""));
        prng = TripleMixPrng::from_seed(seed.into());
    } else if args.get(1) == Some(&OsString::from_str("z").unwrap()) {
        prng = TripleMixPrng::almost_all_zeroes_state();
    } else {
        let mut seed = [0u8; SEED_SIZE];
        for (index, chunk) in seed.chunks_mut(OS_ENTROPY_BYTES).enumerate() {
            #[cfg_attr(not(any(feature = "tss-esapi", feature = "rdrand")), allow(unused_mut))]
            let mut seeded = false;
            if index >= 2 {
                #[cfg(feature = "rdrand")]
                if let Ok(mut rd_seed) = rdrand::RdSeed::new()
                    && rd_seed.try_fill_bytes(chunk).is_ok()
                {
                    eprintln!("Generated a seed chunk using RDSEED");
                    seeded = true;
                } else {
                    eprintln!("RDSEED failed.");
                }
                #[cfg(feature = "tss-esapi")]
                if !seeded
                    && let Ok(mut ctx) = tss_esapi::Context::new_with_tabrmd(
                        tss_esapi::tcti_ldr::TabrmdConfig::default(),
                    )
                    .or_else(|_| {
                        tss_esapi::Context::new(tss_esapi::Tcti::Device(
                            tss_esapi::tcti_ldr::DeviceConfig::default(),
                        ))
                    })
                    && let Ok(random) = ctx.get_random(OS_ENTROPY_BYTES)
                {
                    chunk.copy_from_slice(&random);
                    eprintln!("Generated a seed chunk using TPM GetRandom");
                    seeded = true;
                } else {
                    eprintln!("TPM GetRandom failed.");
                }
            }
            if !seeded {
                if index.is_multiple_of(2) {
                    SysRng.try_fill_bytes(chunk).unwrap();
                    eprintln!("Generated a seed chunk using OS RNG");
                } else {
                    SystemRandom::default().fill(chunk).unwrap();
                    eprintln!("Generated a seed chunk using aws-lc");
                }
                thread::yield_now();
            }
        }
        eprintln!("Seed: {}", seed.map(|b| format!("{:02X}", b)).join(""));
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
