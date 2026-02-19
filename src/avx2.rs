use core::arch::x86_64::*;

use super::Simd64;

// ============================================================================
// AVX2-optimized 64-bit multiplication (the ONLY operation that differs)
// ============================================================================

/// Multiply two vectors of u64 lanes, keeping the low 64 bits of each product.
/// This uses `_mm256_mul_epu32` to avoid the scalarization that portable SIMD does.
#[inline(always)]
pub fn mullo(a: Simd64, b: Simd64) -> Simd64 {
    unsafe {
        let a = std::mem::transmute(a);
        let b = std::mem::transmute(b);
        std::mem::transmute(mullo_u64x4_avx2(a, b))
    }
}

/// Multiply a vector by a scalar constant, keeping the low 64 bits.
#[inline(always)]
pub fn mullo_const(a: Simd64, c: u64) -> Simd64 {
    mullo(a, Simd64::splat(c))
}

#[inline(always)]
unsafe fn mullo_u64x4_avx2(a: __m256i, b: __m256i) -> __m256i {
    unsafe {
        let a_hi = _mm256_srli_epi64(a, 32);
        let b_hi = _mm256_srli_epi64(b, 32);

        let p0 = _mm256_mul_epu32(a, b);
        let p1 = _mm256_mul_epu32(a_hi, b);
        let p2 = _mm256_mul_epu32(a, b_hi);

        let p12 = _mm256_add_epi64(p1, p2);
        let p12_shift = _mm256_slli_epi64(p12, 32);

        _mm256_add_epi64(p0, p12_shift)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    /// Helper: check that mullo(a, b) == element-wise a[i].wrapping_mul(b[i])
    fn assert_mullo_eq(a_arr: [u64; 4], b_arr: [u64; 4]) {
        let a = Simd64::from_array(a_arr);
        let b = Simd64::from_array(b_arr);
        let result = mullo(a, b).to_array();
        let expected: [u64; 4] = std::array::from_fn(|i| a_arr[i].wrapping_mul(b_arr[i]));
        assert_eq!(result, expected, "mullo({a_arr:?}, {b_arr:?})");
    }

    #[test]
    fn test_mullo_identity() {
        let a = [3, 7, 0x1_0000_0001, 0xFFFF_FFFF_FFFF_FFFF];
        let ones = [1; 4];
        assert_mullo_eq(a, ones);
        // Commutativity
        assert_mullo_eq(ones, a);
    }

    #[test]
    fn test_mullo_zero() {
        let a = [42, u64::MAX, 1, 0x1234_5678_9ABC_DEF0];
        let zeros = [0; 4];
        assert_mullo_eq(a, zeros);
        assert_mullo_eq(zeros, a);
    }

    #[test]
    fn test_mullo_small_values() {
        assert_mullo_eq([2, 3, 4, 5], [10, 20, 30, 40]);
    }

    #[test]
    fn test_mullo_large_overflow() {
        // Products that overflow 64 bits (only low 64 bits should be kept)
        assert_mullo_eq(
            [u64::MAX, u64::MAX, 0x8000_0000_0000_0000, 0xFFFF_FFFF],
            [2,        u64::MAX, 2,                      0xFFFF_FFFF],
        );
    }

    #[test]
    fn test_mullo_commutativity() {
        let a = [0x1234_5678_9ABC_DEF0, 0xFEDC_BA98_7654_3210, 42, 0];
        let b = [0x0F0F_0F0F_0F0F_0F0F, 0xAAAA_BBBB_CCCC_DDDD, 99, 1];
        let r1 = mullo(Simd64::from_array(a), Simd64::from_array(b)).to_array();
        let r2 = mullo(Simd64::from_array(b), Simd64::from_array(a)).to_array();
        assert_eq!(r1, r2, "mullo should be commutative");
    }

    #[test]
    fn test_mullo_powers_of_two() {
        // Multiplying by powers of two should be equivalent to left shifts
        let a = [0x0123_4567_89AB_CDEF; 4];
        let pows = [1 << 0, 1 << 1, 1 << 16, 1 << 32];
        assert_mullo_eq(a, pows);
    }

    #[test]
    fn test_mullo_max_squared() {
        // MAX * MAX = 1 (mod 2^64)
        let maxes = [u64::MAX; 4];
        let result = mullo(Simd64::from_array(maxes), Simd64::from_array(maxes)).to_array();
        assert_eq!(result, [1; 4], "(-1)^2 ≡ 1 (mod 2^64)");
    }

    #[test]
    fn test_mullo_const_basic() {
        let a = [10, 20, 30, 40];
        let c = 7u64;
        let result = mullo_const(Simd64::from_array(a), c).to_array();
        let expected: [u64; 4] = std::array::from_fn(|i| a[i].wrapping_mul(c));
        assert_eq!(result, expected);
    }

    #[test]
    fn test_mullo_const_overflow() {
        let a = [u64::MAX, 0x8000_0000_0000_0001, 1, 0];
        let c = u64::MAX;
        let result = mullo_const(Simd64::from_array(a), c).to_array();
        let expected: [u64; 4] = std::array::from_fn(|i| a[i].wrapping_mul(c));
        assert_eq!(result, expected);
    }

    #[test]
    fn test_mullo_const_zero() {
        let a = [42, u64::MAX, 1, 0x1234_5678_9ABC_DEF0];
        let result = mullo_const(Simd64::from_array(a), 0).to_array();
        assert_eq!(result, [0; 4]);
    }

    #[test]
    fn test_mullo_const_one() {
        let a = [42, u64::MAX, 1, 0x1234_5678_9ABC_DEF0];
        let result = mullo_const(Simd64::from_array(a), 1).to_array();
        assert_eq!(result, a);
    }

    #[test]
    fn test_mullo_mixed_hi_lo_bits() {
        // Specifically exercises the cross-term (a_hi*b_lo + a_lo*b_hi) logic
        assert_mullo_eq(
            [0x0000_0001_0000_0000, 0x0000_0000_0000_0001, 0x8000_0000_8000_0000, 0x1_0000_0001],
            [0x0000_0000_0000_0002, 0x0000_0001_0000_0000, 0x0000_0002_0000_0002, 0x1_0000_0001],
        );
    }
}
