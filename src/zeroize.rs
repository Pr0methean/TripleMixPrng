use core::simd::Simd;
use crate::reproducibility::Reproducibility;
use crate::{TripleMixPrng, TripleMixSimdCore};

impl zeroize::Zeroize for TripleMixSimdCore {
    fn zeroize(&mut self) {
        self.xr0 = Simd::splat(0);
        self.xr1 = Simd::splat(0);
        self.tm0 = Simd::splat(0);
        self.tm1 = Simd::splat(0);
        self.weyl_lo = Simd::splat(0);
        self.weyl_hi = Simd::splat(0);
        self.inc_lo = Simd::splat(0);
        self.inc_hi = Simd::splat(0);

        // Prevent dead-write elimination
        core::hint::black_box(&*self);
    }
}

impl<R: Reproducibility> zeroize::Zeroize for TripleMixPrng<R> {
    fn zeroize(&mut self) {
        self.block_core.core.zeroize();

        // Force next generation to overwrite the buffer using output derived from the zeroized core
        // (this won't be zero, but it won't reflect the previous core state either)
        self.block_core.reset_and_skip(0);

        // Prevent dead-write elimination
        core::hint::black_box(self.block_core.remaining_results());
    }
}

impl<R: Reproducibility> Drop for TripleMixPrng<R> {
    fn drop(&mut self) {
        use zeroize::Zeroize;
        self.zeroize();
    }
}