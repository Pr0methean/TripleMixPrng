#![feature(portable_simd)]

use std::env::args_os;
use std::ffi::OsString;
use std::io::{stdout, Write};
use std::str::FromStr;
use std::thread;
use aws_lc_rs::rand::{SecureRandom, SystemRandom};
use aws_lc_rs::test::from_hex;
use rand::rngs::SysRng;
use rand_core::{Rng, SeedableRng, TryRng};
use rand_triplemix::{NotReproducible, TripleMixPrng, SEED_SIZE};

pub fn get_random_seed() -> [u8; 256] {
    const OS_ENTROPY_BYTES: usize = 32;
    let mut seed = [0u8; SEED_SIZE];
    for (index, chunk) in seed.chunks_mut(OS_ENTROPY_BYTES).enumerate() {
        #[cfg_attr(not(any(all(unix, target_arch = "x86_64"), feature = "rdrand")), allow(unused_mut))]
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
            #[cfg(all(unix, target_arch = "x86_64"))]
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
    seed
}

fn main() {
    let args: Vec<_> = args_os().collect();
    let mut prng: TripleMixPrng<NotReproducible>;
    if let Some(seed_arg) = args.get(1)
        && let Some(seed_arg_utf8) = seed_arg.to_str()
        && let Ok(decoded_seed) = from_hex(seed_arg_utf8)
    {
        let mut seed = [0u8; SEED_SIZE];
        seed[0..(SEED_SIZE.min(decoded_seed.len()))].copy_from_slice(&decoded_seed);
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
