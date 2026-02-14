use rs_shake256::Shake256State;
use rs_internal_state::{ExtendedOutputFunction, KeccakSponge};
use rs_internal_hasher::HashAlgorithm;

fn main() {
    // This probably won't compile if fields are private, 
    // but I want to see what's exposed.
    let mut state = Shake256State::<32>::default();
    // state.hash_block(b"hello");
    // let out1 = state.squeeze();
    // state.hash_block(b"world");
    // let out2 = state.squeeze();
}
