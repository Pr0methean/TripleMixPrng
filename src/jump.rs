use crate::generate::{SIMD_WIDTH, Simd64};
use crate::reproducibility::Reproducibility;
use crate::{TripleMixPrng, TripleMixSimdCore};

impl<R: Reproducibility> TripleMixPrng<R> {
    /// Advances the PRNG by `steps` internal sub-generator steps.
    /// Since the sub-generators are updated once per block of `OUTPUT_LEN` generated `u64` words,
    /// a single step here corresponds to moving past `OUTPUT_LEN` outputs.
    /// The unconsumed buffer of outputs is discarded.
    #[inline]
    pub fn advance(&mut self, steps: u128) {
        self.block_core.core.advance(steps);
        self.block_core.reset_and_skip(0);
    }

    /// Advances the PRNG by exactly `multiples` x 2<sup>128</sup> sub-generator steps.
    /// This is dramatically faster than ordinary `advance` because the 128-bit LCG
    /// exactly wraps its full state space and thus undergoes zero change for every 2^128 steps,
    /// while the matrices for TinyMT and Xoroshiro wrap tightly modulo their periods.
    /// The unconsumed buffer of outputs is discarded.
    #[inline]
    pub fn advance_2_128(&mut self, multiples: u128) {
        self.block_core.core.advance_2_128(multiples);
        self.block_core.reset_and_skip(0);
    }

    /// Advances the PRNG by exactly `multiples` x 2<sup>256</sup> sub-generator steps.
    /// This is dramatically faster than ordinary `advance` because the 128-bit LCG
    /// exactly wraps its full state space and thus undergoes zero change for every 2^128 steps,
    /// while the matrices for TinyMT and Xoroshiro wrap tightly modulo their periods.
    /// The unconsumed buffer of outputs is discarded.
    #[inline]
    pub fn advance_2_256(&mut self, multiples: u128) {
        self.block_core.core.advance_2_256(multiples);
        self.block_core.reset_and_skip(0);
    }
}

impl TripleMixSimdCore {
    // 2^128 == 2^1 mod (2^127 - 1)
    const TINYMT_JUMP_128_MAT: [u128; 128] = pow_mat_2_exp(Self::TINYMT_JUMP_MAT, 1);
    // 2^256 == 2^2 mod (2^127 - 1)
    const TINYMT_JUMP_256_MAT: [u128; 128] = pow_mat_2_exp(Self::TINYMT_JUMP_MAT, 2);

    #[inline]
    pub(crate) fn advance(&mut self, steps: u128) {
        if steps == 0 {
            return;
        }

        let x_pow = pow_mat(Self::XOROSHIRO_JUMP_MAT, steps);
        let t_pow = pow_mat(Self::TINYMT_JUMP_MAT, steps);

        self.update_x_and_t_from_matrices(&x_pow, &t_pow);

        let mut weyl_lo_arr = self.weyl_lo.to_array();
        let mut weyl_hi_arr = self.weyl_hi.to_array();

        for i in 0..SIMD_WIDTH {
            let w_lo = weyl_lo_arr[i];
            let w_hi = weyl_hi_arr[i];
            let init_state = ((w_hi as u128) << 64) | (w_lo as u128);
            let i_lo = self.inc_lo.as_array()[i];
            let i_hi = self.inc_hi.as_array()[i];
            let l = Self::LANE_CONSTANTS.as_array()[i];

            // M = (l << 64) + 1
            let m = (l as u128) << 64 | 1;
            // C = (i_hi << 64) | i_lo
            let c = (i_hi as u128) << 64 | (i_lo as u128);

            let mut acc_m = 1u128;
            let mut acc_c = 0u128;
            let mut cur_m = m;
            let mut cur_c = c;
            let mut remaining = steps;

            while remaining > 0 {
                if remaining & 1 != 0 {
                    // acc = acc ∘ cur
                    // new_acc_m = acc_m * cur_m
                    // new_acc_c = acc_c * cur_m + cur_c
                    let new_acc_m = acc_m.wrapping_mul(cur_m);
                    let new_acc_c = acc_c.wrapping_mul(cur_m).wrapping_add(cur_c);
                    acc_m = new_acc_m;
                    acc_c = new_acc_c;
                }

                // cur = cur ∘ cur  (square the transformation)
                // new_cur_m = cur_m * cur_m
                // new_cur_c = cur_c * cur_m + cur_c
                let new_cur_m = cur_m.wrapping_mul(cur_m);
                let new_cur_c = cur_c.wrapping_mul(cur_m).wrapping_add(cur_c);
                cur_m = new_cur_m;
                cur_c = new_cur_c;

                remaining >>= 1;
            }

            // Apply the accumulated transformation
            let new_state = acc_m.wrapping_mul(init_state).wrapping_add(acc_c);

            weyl_lo_arr[i] = new_state as u64;
            weyl_hi_arr[i] = (new_state >> 64) as u64;
        }

        self.weyl_lo = Simd64::from_array(weyl_lo_arr);
        self.weyl_hi = Simd64::from_array(weyl_hi_arr);
    }

    #[inline]
    pub(crate) fn advance_2_128(&mut self, multiples: u128) {
        if multiples == 0 {
            return;
        }

        // 2^128 = 1 mod (2^128 - 1)
        let x_pow = pow_mat(Self::XOROSHIRO_JUMP_MAT, multiples);
        let t_pow = pow_mat(Self::TINYMT_JUMP_128_MAT, multiples);
        // LCG returns exactly to its same state after 2^128 steps

        self.update_x_and_t_from_matrices(&x_pow, &t_pow);
    }

    #[inline]
    pub(crate) fn advance_2_256(&mut self, multiples: u128) {
        if multiples == 0 {
            return;
        }
        // 2^256 = 1 mod (2^128 - 1)
        let x_pow = pow_mat(Self::XOROSHIRO_JUMP_MAT, multiples);
        let t_pow = pow_mat(Self::TINYMT_JUMP_256_MAT, multiples);

        self.update_x_and_t_from_matrices(&x_pow, &t_pow);
    }

    #[inline]
    fn update_x_and_t_from_matrices(&mut self, x_pow: &[u128; 128], t_pow: &[u128; 128]) {
        let xr0_arr = self.xr0.as_mut_array();
        let xr1_arr = self.xr1.as_mut_array();
        let tm0_arr = self.tm0.as_mut_array();
        let tm1_arr = self.tm1.as_mut_array();
        for i in 0..SIMD_WIDTH {
            let x_state = (xr0_arr[i] as u128) | ((xr1_arr[i] as u128) << 64);
            let x_new = apply_mat(x_pow, x_state);
            xr0_arr[i] = x_new as u64;
            xr1_arr[i] = (x_new >> 64) as u64;

            let t_state = (tm0_arr[i] as u128) | ((tm1_arr[i] as u128) << 64);
            let t_new = apply_mat(t_pow, t_state);
            tm0_arr[i] = t_new as u64;
            tm1_arr[i] = (t_new >> 64) as u64;
        }
    }
    const XOROSHIRO_JUMP_MAT: [u128; 128] = compute_xoroshiro_mat();
    const TINYMT_JUMP_MAT: [u128; 128] = compute_tinymt_mat();
}

// ============================================================================
// Jump-ahead helpers
// ============================================================================

const fn compute_xoroshiro_mat() -> [u128; 128] {
    let mut res = [0; 128];
    let mut i = 0;
    while i < 128 {
        let state = 1u128 << i;
        let mut xr0 = state as u64;
        let mut xr1 = (state >> 64) as u64;
        let t = xr0 ^ xr1;
        xr0 = rotl_scalar(xr0, 24) ^ t ^ (t << 16);
        xr1 = rotl_scalar(t, 37);
        res[i] = (xr0 as u128) | ((xr1 as u128) << 64);
        i += 1;
    }
    res
}

const fn compute_tinymt_mat() -> [u128; 128] {
    let mut res = [0; 128];
    let mut i = 0;
    while i < 128 {
        let state = 1u128 << i;
        let mut tm0 = state as u64 & TINYMT64_LANE_MASK;
        let mut tm1 = (state >> 64) as u64;
        const TINYMT_MAT1: u64 = 0xdaa51b54;
        const TINYMT_MAT2: u64 = 0xfed47fb5 << 32;
        const TINYMT64_LANE_MASK: u64 = 0x7fff_ffff_ffff_ffff_u64;

        let mut x = tm0 ^ tm1;
        x ^= x << 12;
        x ^= x >> 32;
        x ^= x << 32;
        x ^= x << 11;
        let mask = (x & 1).wrapping_neg();
        tm0 = tm1 ^ (mask & TINYMT_MAT1);
        tm1 = x ^ (mask & TINYMT_MAT2);
        res[i] = (tm0 as u128) | ((tm1 as u128) << 64);
        i += 1;
    }
    res
}

const fn rotl_scalar(x: u64, k: u32) -> u64 {
    x.rotate_left(k)
}

const fn apply_mat(mat: &[u128; 128], mut vec: u128) -> u128 {
    let mut res = 0;
    let mut i = 0;
    while i < 128 {
        if vec & 1 != 0 {
            res ^= mat[i];
        }
        vec >>= 1;
        i += 1;
    }
    res
}

const fn mul_mat(a: &[u128; 128], b: &[u128; 128]) -> [u128; 128] {
    let mut res = [0; 128];
    let mut i = 0;
    while i < 128 {
        res[i] = apply_mat(a, b[i]);
        i += 1;
    }
    res
}

const fn pow_mat(mut a: [u128; 128], mut n: u128) -> [u128; 128] {
    let mut res = [0; 128];
    let mut i = 0;
    while i < 128 {
        res[i] = 1 << i;
        i += 1;
    }
    while n > 0 {
        if n & 1 != 0 {
            res = mul_mat(&a, &res);
        }
        a = mul_mat(&a, &a);
        n >>= 1;
    }
    res
}

const fn pow_mat_2_exp(mut a: [u128; 128], mut exp: u32) -> [u128; 128] {
    while exp > 0 {
        a = mul_mat(&a, &a);
        exp -= 1;
    }
    a
}

#[cfg(test)]
mod tests {
    use crate::TripleMixSimdCore;
    use crate::generate::OUTPUT_LEN;
    use crate::jump::pow_mat_2_exp;
    use crate::reproducibility::NotReproducible;
    use rand_core::Rng;

    #[test]
    fn test_jump_ahead_constants() {
        assert_eq!(
            pow_mat_2_exp(TripleMixSimdCore::XOROSHIRO_JUMP_MAT, 128),
            TripleMixSimdCore::XOROSHIRO_JUMP_MAT
        );
        assert_eq!(
            pow_mat_2_exp(TripleMixSimdCore::XOROSHIRO_JUMP_MAT, 256),
            TripleMixSimdCore::XOROSHIRO_JUMP_MAT
        );

        assert_eq!(
            TripleMixSimdCore::TINYMT_JUMP_128_MAT,
            pow_mat_2_exp(TripleMixSimdCore::TINYMT_JUMP_MAT, 128)
        );
        assert_eq!(
            TripleMixSimdCore::TINYMT_JUMP_256_MAT,
            pow_mat_2_exp(TripleMixSimdCore::TINYMT_JUMP_MAT, 256)
        );
    }

    #[test]
    fn test_jump_ahead() {
        for mut prng in crate::create_rngs::<NotReproducible>() {
            let prng_large_jmp = prng.clone();
            let mut prng_jmp = prng.clone();

            // Advance sequential by 12 steps (meaning 12 * 8 = 96 next_u64 calls)
            for _ in 0..12 {
                for _ in 0..OUTPUT_LEN {
                    prng.next_u64();
                }
            }

            // Advance jumping by 12 steps
            prng_jmp.advance(12);
            prng.block_core.reset_and_skip(0);
        prng_jmp.block_core.reset_and_skip(0);
            println!("prng={:?}", prng.block_core.core);
            println!("prng_jmp={:?}", prng_jmp.block_core.core);
            println!("prng buffer remaining: {:?}",
                     prng.block_core.remaining_results());
            println!("prng_jmp buffer remaining: {:?}",
                     prng_jmp.block_core.remaining_results());
            for _ in 0..OUTPUT_LEN {
                assert_eq!(prng.next_u64(), prng_jmp.next_u64());
            }

            let prng = prng_large_jmp.clone();

            // Test advance_2_128 and advance consistency
            let mut base_a_for_2_128 = prng.clone();
            base_a_for_2_128.advance(1u128 << 127);
            base_a_for_2_128.advance(1u128 << 127);
            let mut base_b_for_2_128 = prng.clone();
            base_b_for_2_128.advance(1);
            base_b_for_2_128.advance(u128::MAX);

            let mut prng_2_128 = prng.clone();
            prng_2_128.advance_2_128(1);

            println!("base_a_for_2_128={:?}", base_a_for_2_128);
            println!("base_b_for_2_128={:?}", base_b_for_2_128);
            println!("prng_2_128={:?}", prng_2_128);

            for _ in 0..10_000 {
                // Ensure internal state logic lines up perfectly equivalent.
                let prng_2_128_u64 = prng_2_128.next_u64();
                assert_eq!(base_a_for_2_128.next_u64(), prng_2_128_u64);
                assert_eq!(base_b_for_2_128.next_u64(), prng_2_128_u64);
            }

            // Test advance_2_256 and advance consistency
            let mut base_a_for_2_256 = prng.clone();
            base_a_for_2_256.advance_2_128(1u128 << 127);
            base_a_for_2_256.advance_2_128(1u128 << 127);
            let mut base_b_for_2_256 = prng.clone();
            base_b_for_2_256.advance_2_128(1u128 << 127);
            base_b_for_2_256.advance_2_128(1u128 << 127);

            let mut prng_2_256 = prng.clone();
            prng_2_256.advance_2_256(1);

            for _ in 0..10_000 {
                // Ensure internal state logic lines up perfectly equivalent.
                let prng_2_256_u64 = prng_2_256.next_u64();
                assert_eq!(base_a_for_2_256.next_u64(), prng_2_256_u64);
                assert_eq!(base_b_for_2_256.next_u64(), prng_2_256_u64);
            }
        }
    }
}
