use crate::TripleMixPrng;
use crate::generate::Simd64;
use crate::reproducibility::Reproducibility;

#[derive(serde::Serialize, serde::Deserialize)]
pub(crate) struct CoreState {
    xr0: [u64; 4],
    xr1: [u64; 4],
    tm0: [u64; 4],
    tm1: [u64; 4],
    mwc_state: [u64; 4],
    mwc_carry: [u64; 4],
    remaining_results: Box<[u64]>,
}

impl<R: Reproducibility> serde::Serialize for TripleMixPrng<R> {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        let core = &self.block_core.core;
        CoreState {
            xr0: core.xr0.to_array(),
            xr1: core.xr1.to_array(),
            tm0: core.tm0.to_array(),
            tm1: core.tm1.to_array(),
            mwc_state: core.mwc_state.to_array(),
            mwc_carry: core.mwc_carry.to_array(),
            remaining_results: self
                .block_core
                .remaining_results()
                .to_vec()
                .into_boxed_slice(),
        }
        .serialize(serializer)
    }
}

impl<'de, R: Reproducibility> serde::Deserialize<'de> for TripleMixPrng<R> {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: serde::Deserializer<'de>,
    {
        use crate::TripleMixSimdCore;
        use core::hint::cold_path;
        use core::marker::PhantomData;
        use rand_core::block::BlockRng;
        use serde::de::Error;
        let state = CoreState::deserialize(deserializer)?;
        let core = TripleMixSimdCore {
            xr0: Simd64::from_array(state.xr0),
            xr1: Simd64::from_array(state.xr1),
            tm0: Simd64::from_array(state.tm0),
            tm1: Simd64::from_array(state.tm1),
            mwc_state: Simd64::from_array(state.mwc_state),
            mwc_carry: Simd64::from_array(state.mwc_carry),
        };
        if !core.is_valid() {
            cold_path();
            Err(D::Error::custom("invalid core state"))
        } else if let Some(block_core) = BlockRng::reconstruct(core, &state.remaining_results) {
            Ok(TripleMixPrng {
                block_core,
                reproducibility: PhantomData,
            })
        } else {
            Ok(TripleMixPrng::from_core(core))
        }
    }
}

#[cfg(test)]
mod tests {
    use crate::reproducibility::DefaultReproducibility;
    use crate::{TripleMixPrng, create_rngs};

    #[test]
    fn test_round_trip() {
        for prng in create_rngs::<DefaultReproducibility>() {
            let json = serde_json::to_string(&prng).unwrap();
            let prng_copy: TripleMixPrng<DefaultReproducibility> = serde_json::from_str(&json).unwrap();
            assert_eq!(
                prng.block_core.core.as_bytes(),
                prng_copy.block_core.core.as_bytes()
            );
            assert_eq!(
                prng.block_core.remaining_results(),
                prng_copy.block_core.remaining_results()
            );
        }
    }
}
