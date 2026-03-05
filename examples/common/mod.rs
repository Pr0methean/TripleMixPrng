use aws_lc_rs::rand::{SecureRandom, SystemRandom};
use rand::rngs::SysRng;
use rand_core::TryRng;
use rand_triplemix::SEED_SIZE;
use std::thread;

pub fn get_random_seed() -> [u8; 256] {
    const OS_ENTROPY_BYTES: usize = 32;
    let mut seed = [0u8; SEED_SIZE];
    for (index, chunk) in seed.chunks_mut(OS_ENTROPY_BYTES).enumerate() {
        #[cfg_attr(
            not(any(all(unix, target_arch = "x86_64"), feature = "rdrand")),
            allow(unused_mut)
        )]
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
