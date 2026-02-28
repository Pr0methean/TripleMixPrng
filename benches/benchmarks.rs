use criterion::{Criterion, criterion_group, criterion_main};
use rand::rng;
use rand::rngs::SysRng;
use rand_core::{Rng, SeedableRng};
use std::hint::black_box;
use triple_mix_prng::TripleMixPrng;

fn fill_bytes(c: &mut Criterion) {
    let mut triple_mix = TripleMixPrng::try_from_rng(&mut SysRng).unwrap();
    let mut thread_rng = rng();

    // Allocate buffer as u64's so that it's aligned
    const MAX_ALIGNMENT: usize = size_of::<u64>() - 1;
    const BUFFER_LEN: usize = 1024 * 1024;
    let mut buffer = vec![0u64; BUFFER_LEN / size_of::<u64>() + 1]; // 1 MiB plus de-alignment padding
    for alignment in 0..=MAX_ALIGNMENT {
        let (_, buffer, _) = unsafe { buffer.align_to_mut::<u8>() };
        let misaligned_buffer = &mut buffer[alignment..(BUFFER_LEN + alignment)];
        let misaligned_name = format!("fill_bytes 1MB (misalignment: {})", alignment);
        let mut group = c.benchmark_group(misaligned_name);
        group.bench_function("TripleMixPrng", |b| {
            b.iter(|| {
                triple_mix.fill_bytes(misaligned_buffer);
                black_box(&*misaligned_buffer);
            })
        });
        group.bench_function("ThreadRng", |b| {
            b.iter(|| {
                thread_rng.fill_bytes(misaligned_buffer);
                black_box(&*misaligned_buffer);
            })
        });
        group.finish();
    }
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
