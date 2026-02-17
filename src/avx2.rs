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
        // low64(a*b) = (a_lo*b_lo) + ((a_hi*b_lo + a_lo*b_hi) << 32)  (mod 2^64)
        let lo_mask = _mm256_set1_epi64x(0xFFFF_FFFFu64 as i64);

        let a_lo = _mm256_and_si256(a, lo_mask);
        let b_lo = _mm256_and_si256(b, lo_mask);
        let a_hi = _mm256_srli_epi64(a, 32);
        let b_hi = _mm256_srli_epi64(b, 32);

        let p0 = _mm256_mul_epu32(a_lo, b_lo);
        let p1 = _mm256_mul_epu32(a_hi, b_lo);
        let p2 = _mm256_mul_epu32(a_lo, b_hi);

        let p12 = _mm256_add_epi64(p1, p2);
        let p12_shift = _mm256_slli_epi64(p12, 32);

        _mm256_add_epi64(p0, p12_shift)
    }
}
