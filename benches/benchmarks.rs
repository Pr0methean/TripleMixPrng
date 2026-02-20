use rand_core::{Rng, SeedableRng};
use std::hint::black_box;
use criterion::{criterion_group, criterion_main, Criterion};
use rand::rngs::SysRng;
use triple_mix_prng::TripleMixPrng;

fn fill_bytes(c: &mut Criterion) {
    let mut prng = TripleMixPrng::try_from_rng(&mut SysRng).unwrap();
    let mut buffer = vec![0u8; 1024 * 1024]; // 1 MiB

    c.bench_function("fill_bytes", |b| b.iter(|| {
        prng.fill_bytes(&mut buffer);
        black_box(&buffer);
    }));
}

fn next_u64(c: &mut Criterion) {
    let mut prng = TripleMixPrng::try_from_rng(&mut SysRng).unwrap();

    c.bench_function("next_u64", |b| b.iter(|| {
        prng.next_u64()
    }));
}

criterion_group!(benches, fill_bytes, next_u64);
criterion_main!(benches);