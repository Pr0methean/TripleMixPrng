use criterion::measurement::Measurement;
use criterion::{BenchmarkId, Criterion, Throughput, criterion_group, criterion_main};

// Using criterion_cycles_per_byte on aarch64 requires a custom Linux kernel module, so it's not an
// option on GitHub Actions hosted runners; and aarch64 on other OSs isn't currently supported.
#[cfg(any(target_arch = "x86_64", target_arch = "x86"))]
use criterion_cycles_per_byte::CyclesPerByte;
#[cfg(feature = "bench_include_threadrng")]
use rand::rng;
use rand::rngs::SysRng;
use rand_core::{Rng, SeedableRng, TryRng};
use rand_triplemix::{CrossPlatform, NotReproducible, SEED_SIZE, SameEndianness, TripleMixPrng};
use std::hint::black_box;

fn fill_bytes<T: Measurement>(c: &mut Criterion<T>) {
    let mut seed = [0u8; SEED_SIZE];
    SysRng.try_fill_bytes(&mut seed).unwrap();
    let mut triple_mix = TripleMixPrng::<NotReproducible>::from(&seed);
    let mut triple_mix_reproducible = TripleMixPrng::<SameEndianness>::from(&seed);
    let mut triple_mix_x_reproducible = TripleMixPrng::<CrossPlatform>::from(&seed);
    #[cfg(feature = "bench_include_threadrng")]
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
        group.throughput(Throughput::Bytes(BUFFER_LEN as u64));
        group.bench_function("TripleMixPrng", |b| {
            b.iter(|| {
                triple_mix.fill_bytes(misaligned_buffer);
                black_box(&*misaligned_buffer);
            })
        });
        group.bench_function("TripleMixPrng with SameEndianness reproducibility", |b| {
            b.iter(|| {
                triple_mix_reproducible.fill_bytes(misaligned_buffer);
                black_box(&*misaligned_buffer);
            })
        });
        group.bench_function("TripleMixPrng with CrossPlatform reproducibility", |b| {
            b.iter(|| {
                triple_mix_x_reproducible.fill_bytes(misaligned_buffer);
                black_box(&*misaligned_buffer);
            })
        });
        #[cfg(feature = "bench_include_threadrng")]
        group.bench_function("ThreadRng", |b| {
            b.iter(|| {
                thread_rng.fill_bytes(misaligned_buffer);
                black_box(&*misaligned_buffer);
            })
        });
        group.finish();
    }
}

fn next_u64<T: Measurement>(c: &mut Criterion<T>) {
    let mut seed = [0u8; SEED_SIZE];
    SysRng.try_fill_bytes(&mut seed).unwrap();
    let mut triple_mix = TripleMixPrng::<NotReproducible>::from(&seed);
    let mut triple_mix_reproducible = TripleMixPrng::<SameEndianness>::from(&seed);
    let mut triple_mix_x_reproducible = TripleMixPrng::<CrossPlatform>::from(&seed);
    #[cfg(feature = "bench_include_threadrng")]
    let mut thread_rng = rng();
    let mut group = c.benchmark_group("next_u64");
    group.throughput(Throughput::Bytes(size_of::<u64>() as u64));
    group.bench_function("TripleMixPrng", |b| b.iter(|| triple_mix.next_u64()));
    group.bench_function("TripleMixPrng with SameEndianness reproducibility", |b| {
        b.iter(|| triple_mix_reproducible.next_u64())
    });
    group.bench_function("TripleMixPrng with CrossPlatform reproducibility", |b| {
        b.iter(|| triple_mix_x_reproducible.next_u64())
    });
    #[cfg(feature = "bench_include_threadrng")]
    group.bench_function("ThreadRng", |b| b.iter(|| thread_rng.next_u64()));
    group.finish();
}

fn init<T: Measurement>(c: &mut Criterion<T>) {
    let mut group = c.benchmark_group("Initialization");

    // Seed and instance setup
    let seed_4096 = [0u8; 512];

    // Benchmark from_seed with various sizes
    for size in [8, 16, 32, 64, 128, 256, 512] {
        let input_seed = &seed_4096[..size];
        group.throughput(Throughput::Bytes(size as u64));
        group.bench_with_input(BenchmarkId::new("from_seed", size), input_seed, |b, s| {
            b.iter(|| black_box(TripleMixPrng::<NotReproducible>::from(black_box(s))))
        });
    }

    let mut parent = TripleMixPrng::<NotReproducible>::from(&seed_4096);

    // Benchmark fork()
    group.bench_function("fork", |b| {
        b.iter(|| {
            // Using black_box to ensure the compiler doesn't optimize away the result
            black_box(parent.fork())
        })
    });

    group.finish();
}

#[cfg(any(target_arch = "x86_64", target_arch = "x86"))]
criterion_group!(
    name = benches;
    config = Criterion::default().with_measurement(CyclesPerByte);
    targets = fill_bytes, next_u64, init
);
#[cfg(not(any(target_arch = "x86_64", target_arch = "x86")))]
criterion_group!(name = benches; config = Criterion::default(); targets = fill_bytes, next_u64, init);
criterion_main!(benches);
