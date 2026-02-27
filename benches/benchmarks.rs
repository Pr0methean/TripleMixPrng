use criterion::{Criterion, criterion_group, criterion_main};
use rand::rng;
use rand::rngs::SysRng;
use rand_core::{Rng, SeedableRng};
use std::hint::black_box;
use triple_mix_prng::TripleMixPrng;

fn fill_bytes(c: &mut Criterion) {
    let mut triple_mix = TripleMixPrng::try_from_rng(&mut SysRng).unwrap();
    let mut thread_rng = rng();
    let mut buffer = vec![0u8; 1024 * 1024]; // 1 MiB
    let mut group = c.benchmark_group("fill_bytes 1MB");
    group.bench_function("TripleMixPrng", |b| {
        b.iter(|| {
            triple_mix.fill_bytes(&mut buffer);
            black_box(&buffer);
        })
    });
    group.bench_function("ThreadRng", |b| {
        b.iter(|| {
            thread_rng.fill_bytes(&mut buffer);
            black_box(&buffer);
        })
    });
    group.finish();
}

fn next_u64(c: &mut Criterion) {
    let mut triple_mix = TripleMixPrng::try_from_rng(&mut SysRng).unwrap();
    let mut thread_rng = rng();
    let mut group = c.benchmark_group("next_u64");
    group.bench_function("TripleMixPrng", |b| b.iter(|| triple_mix.next_u64()));
    group.bench_function("ThreadRng", |b| b.iter(|| thread_rng.next_u64()));
    group.finish();
}

criterion_group!(benches, fill_bytes, next_u64);
criterion_main!(benches);
