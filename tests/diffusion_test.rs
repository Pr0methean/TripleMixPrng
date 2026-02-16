
use generic_array::GenericArray;
use rand_core::{SeedableRng, TryRng};
use triple_mix_prng::TripleMixPrng; 

#[test]
fn test_seed_diffusion() {
    let mut seed = [0u8; 256];
    let mut rng1 = TripleMixPrng::from_seed(GenericArray::from(seed));
    let start_val1 = rng1.try_next_u64().unwrap();

    // Change the VERY LAST byte of the seed.
    // In the old implementation (incremental absorb), this would NOT affect the first lane
    // because the first lane was generated after only absorbing the first 64 bytes.
    seed[255] = 1;
    let mut rng2 = TripleMixPrng::from_seed(GenericArray::from(seed));
    let start_val2 = rng2.try_next_u64().unwrap();

    assert_ne!(start_val1, start_val2, "Changing the last byte of the seed did not affect the first output! Diffusion failure.");
    assert_ne!(start_val1, 0, "Output shouldn't be zero");
}
