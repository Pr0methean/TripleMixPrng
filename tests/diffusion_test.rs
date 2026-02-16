use generic_array::GenericArray;
use rand_core::{SeedableRng, TryRng};
use triple_mix_prng::TripleMixPrng;

#[test]
fn test_seed_diffusion() {
    let seed = [0u8; TripleMixPrng::SEED_SIZE];
    let mut rng1 = TripleMixPrng::from_seed(GenericArray::from(seed));
    let start_val1 = rng1.try_next_u64().unwrap();

    // In the old implementation (incremental absorb), changing the LAST byte would NOT affect the
    // first lane, because the first lane was generated after only absorbing the first 64 bytes.
    for byte_index in 0..TripleMixPrng::SEED_SIZE {
        for bit_index in 0..=7 {
            let mut seed = [0u8; TripleMixPrng::SEED_SIZE];
            seed[byte_index] = 1 << bit_index;
            let mut rng2 = TripleMixPrng::from_seed(GenericArray::from(seed));
            let start_val2 = rng2.try_next_u64().unwrap();

            assert_ne!(
                start_val1, start_val2,
                "Changing byte {byte_index} bit {bit_index} of the seed did not affect the first output! Diffusion failure."
            );
            assert_ne!(start_val1, 0, "Output shouldn't be zero");
        }
    }
}
