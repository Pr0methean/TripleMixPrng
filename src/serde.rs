use crate::TripleMixPrng;
use crate::generate::Simd64;
use crate::reproducibility::Reproducibility;

#[derive(serde::Serialize, serde::Deserialize)]
pub(crate) struct CoreState {
    xr0: [u64; 4],
    xr1: [u64; 4],
    tm0: [u64; 4],
    tm1: [u64; 4],
    weyl_lo: [u64; 4],
    weyl_hi: [u64; 4],
    inc_lo: [u64; 4],
    inc_hi: [u64; 4],
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
            weyl_lo: core.weyl_lo.to_array(),
            weyl_hi: core.weyl_hi.to_array(),
            inc_lo: core.inc_lo.to_array(),
            inc_hi: core.inc_hi.to_array(),
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
            weyl_lo: Simd64::from_array(state.weyl_lo),
            weyl_hi: Simd64::from_array(state.weyl_hi),
            inc_lo: Simd64::from_array(state.inc_lo),
            inc_hi: Simd64::from_array(state.inc_hi),
        };
        if !Self::is_valid(&core) {
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
    use crate::{create_rngs, TripleMixPrng};
    use crate::reproducibility::NotReproducible;

    #[test]
    fn test_round_trip() -> Result<(), serde_json::Error> {
        for prng in create_rngs::<NotReproducible>() {
            let json = serde_json::to_string(&prng)?;
            let prng_copy: TripleMixPrng<NotReproducible> = serde_json::from_str(&json)?;
            assert_eq!(prng.block_core.core.as_bytes(), prng_copy.block_core.core.as_bytes());
            assert_eq!(prng.block_core.remaining_results(), prng_copy.block_core.remaining_results());
        }
        Ok(())
    }
}