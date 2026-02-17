use core::arch::x86_64::*;
use std::simd::Simd;

use super::Simd64;

// ============================================================================
// Safe helper functions for Simd64 (= __m256i on AVX2)
// ============================================================================

#[inline(always)]
pub fn from_array(arr: [u64; 4]) -> Simd64 {
    unsafe { _mm256_loadu_si256(arr.as_ptr() as *const __m256i) }
}

#[inline(always)]
pub fn to_array(x: Simd64) -> [u64; 4] {
    let mut arr = [0u64; 4];
    unsafe { _mm256_storeu_si256(arr.as_mut_ptr() as *mut __m256i, x) };
    arr
}

#[inline(always)]
pub fn as_mut_u64_array(x: &mut Simd64) -> &mut [u64; 4] {
    unsafe { &mut *(x as *mut Simd64 as *mut [u64; 4]) }
}

#[inline(always)]
pub fn to_portable(x: Simd64) -> Simd<u64, 4> {
    unsafe { std::mem::transmute(x) }
}

#[inline(always)]
pub fn from_portable(x: Simd<u64, 4>) -> Simd64 {
    unsafe { std::mem::transmute(x) }
}

#[inline(always)]
pub fn xor(a: Simd64, b: Simd64) -> Simd64 {
    unsafe { _mm256_xor_si256(a, b) }
}

#[inline(always)]
pub fn and(a: Simd64, b: Simd64) -> Simd64 {
    unsafe { _mm256_and_si256(a, b) }
}

#[inline(always)]
pub fn or(a: Simd64, b: Simd64) -> Simd64 {
    unsafe { _mm256_or_si256(a, b) }
}

/// Returns true if any lane of a equals the corresponding lane of b.
#[inline(always)]
pub fn any_eq(a: Simd64, b: Simd64) -> bool {
    unsafe {
        let cmp = _mm256_cmpeq_epi64(a, b);
        _mm256_movemask_epi8(cmp) != 0
    }
}

/// Extract lane i from x.
#[inline(always)]
pub fn lane(x: Simd64, i: usize) -> u64 {
    to_array(x)[i]
}

/// PartialEq for Simd64 values.
#[inline(always)]
pub fn eq(a: &Simd64, b: &Simd64) -> bool {
    to_array(*a) == to_array(*b)
}

// ============================================================================
// AVX2-optimized 64-bit multiplication (the ONLY operation that differs)
// ============================================================================

/// Multiply two vectors of u64 lanes, keeping the low 64 bits of each product.
/// This uses `_mm256_mul_epu32` to avoid the scalarization that portable SIMD does.
#[inline(always)]
pub fn mullo(a: Simd<u64, 4>, b: Simd<u64, 4>) -> Simd<u64, 4> {
    unsafe {
        let a = std::mem::transmute(a);
        let b = std::mem::transmute(b);
        std::mem::transmute(mullo_u64x4_avx2(a, b))
    }
}

/// Multiply a vector by a scalar constant, keeping the low 64 bits.
#[inline(always)]
pub fn mullo_const(a: Simd<u64, 4>, c: u64) -> Simd<u64, 4> {
    mullo(a, Simd::splat(c))
}

#[inline(always)]
unsafe fn mullo_u64x4_avx2(a: __m256i, b: __m256i) -> __m256i {
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
