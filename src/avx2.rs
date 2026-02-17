use core::arch::x86_64::*;
use std::simd::Simd;

#[inline(always)]
#[target_feature(enable = "avx2")]
pub unsafe fn simd_u64x4_to_m256i(x: Simd<u64, 4>) -> __m256i {
    let arr = x.to_array();
    unsafe { _mm256_loadu_si256(arr.as_ptr() as *const __m256i) }
}

#[inline(always)]
#[target_feature(enable = "avx2")]
pub unsafe fn m256i_to_simd_u64x4(x: __m256i) -> Simd<u64, 4> {
    let mut arr = [0u64; 4];
    unsafe {
        _mm256_storeu_si256(arr.as_mut_ptr() as *mut __m256i, x);
    }
    Simd::from_array(arr)
}

#[inline(always)]
#[target_feature(enable = "avx2")]
unsafe fn rotl_u64x4_avx2<const K: i32>(x: __m256i) -> __m256i
where
    [(); (64 - K) as usize]:,
{
    // rotate_left per 64-bit lane: (x<<k) | (x>>(64-k))
    // (k must be 0<k<64 in your usage)
    let l = _mm256_slli_epi64(x, K);
    let r = _mm256_srli_epi64(x, 64 - K);
    _mm256_or_si256(l, r)
}

#[inline(always)]
#[target_feature(enable = "avx2")]
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

#[target_feature(enable = "avx2")]
#[inline(always)]
unsafe fn mullo_u64x4_const_avx2(a: __m256i, c: u64) -> __m256i {
    let bc = _mm256_set1_epi64x(c as i64);
    unsafe { mullo_u64x4_avx2(a, bc) }
}

/// Performs the source generation step using AVX2 intrinsics.
///
/// Updates the three source PRNGs (128-bit LCG, Xoroshiro128**, TinyMT64) and
/// returns the four Feistel network inputs `(b_l0, b_l1, b_r0, b_r1)`.
///
/// All state vectors are mutated in-place.
#[target_feature(enable = "avx2")]
#[inline(always)]
pub unsafe fn source_generation_avx2(
    xr0: &mut __m256i,
    xr1: &mut __m256i,
    tm0: &mut __m256i,
    tm1: &mut __m256i,
    w_lo: &mut __m256i,
    w_hi: &mut __m256i,
    i_lo: __m256i,
    i_hi: __m256i,
    lane_constants: __m256i,
    tinymt_mask: __m256i,
    tinymt_mat1: u64,
    tinymt_mat2: u64,
    tinymt_tmat: u64,
) -> (__m256i, __m256i, __m256i, __m256i) {
    unsafe {
        let ones = _mm256_set1_epi64x(1);
        let zeroes = _mm256_setzero_si256();

        // === 128-bit LCG: w = w * (lane_constant << 64 + 1) + inc ===
        // next_w_lo = w_lo + i_lo
        let next_w_lo = _mm256_add_epi64(*w_lo, i_lo);
        // high_product = w_lo * LANE_CONSTANTS
        let high_product = mullo_u64x4_avx2(*w_lo, lane_constants);
        // carry = (next_w_lo < w_lo) ? 1 : 0  (unsigned compare via signed trick)
        // For unsigned lt on AVX2: a < b  iff  (a ^ signbit) < (b ^ signbit) signed
        let sign_bit = _mm256_set1_epi64x(i64::MIN);
        let a_biased = _mm256_xor_si256(next_w_lo, sign_bit);
        let b_biased = _mm256_xor_si256(*w_lo, sign_bit);
        let lt_mask = _mm256_cmpgt_epi64(b_biased, a_biased); // all-ones lanes where carry
        let carry = _mm256_and_si256(lt_mask, ones);
        // w_hi = w_hi + high_product + i_hi + carry
        let tmp = _mm256_add_epi64(*w_hi, high_product);
        let tmp = _mm256_add_epi64(tmp, i_hi);
        *w_hi = _mm256_add_epi64(tmp, carry);
        *w_lo = next_w_lo;
        // b_l0 = w_lo + LANE_CONSTANTS
        let b_l0 = _mm256_add_epi64(*w_lo, lane_constants);
        // b_r1 = w_hi
        let b_r1 = *w_hi;

        // === Xoroshiro update ===
        // b_l1 = xr0 + xr1
        let b_l1 = _mm256_add_epi64(*xr0, *xr1);
        // t = xr0 ^ xr1
        let t = _mm256_xor_si256(*xr0, *xr1);
        // xr0 = rotl(xr0, 9) ^ t ^ (t << 14)
        let rotl_xr0_9 = rotl_u64x4_avx2::<9>(*xr0);
        let t_shl_14 = _mm256_slli_epi64(t, 14);
        *xr0 = _mm256_xor_si256(rotl_xr0_9, _mm256_xor_si256(t, t_shl_14));
        // xr1 = rotl(t, 36)
        *xr1 = rotl_u64x4_avx2::<36>(t);

        // === TinyMT64 update ===
        // tm0 &= TINYMT64_MASK
        *tm0 = _mm256_and_si256(*tm0, tinymt_mask);
        // x = tm0 ^ tm1
        let mut x = _mm256_xor_si256(*tm0, *tm1);
        // x ^= x << 12
        x = _mm256_xor_si256(x, _mm256_slli_epi64(x, 12));
        // x ^= x >> 32
        x = _mm256_xor_si256(x, _mm256_srli_epi64(x, 32));
        // x ^= x << 32
        x = _mm256_xor_si256(x, _mm256_slli_epi64(x, 32));
        // x ^= x << 11
        x = _mm256_xor_si256(x, _mm256_slli_epi64(x, 11));

        // mask = (x & 1).wrapping_neg()  — either all-ones or all-zeros per lane
        let lsb = _mm256_and_si256(x, ones);
        let mask = _mm256_sub_epi64(zeroes, lsb);
        // next_tm0 = tm1 ^ (mask & TINYMT_MAT1)
        let mat1_vec = _mm256_set1_epi64x(tinymt_mat1 as i64);
        let next_tm0 = _mm256_xor_si256(*tm1, _mm256_and_si256(mask, mat1_vec));
        // next_tm1 = x ^ (mask & TINYMT_MAT2)
        let mat2_vec = _mm256_set1_epi64x(tinymt_mat2 as i64);
        let next_tm1 = _mm256_xor_si256(x, _mm256_and_si256(mask, mat2_vec));
        *tm0 = next_tm0;
        *tm1 = next_tm1;

        // ty = tm0 + tm1
        let mut ty = _mm256_add_epi64(*tm0, *tm1);
        // ty ^= tm0 >> 8
        ty = _mm256_xor_si256(ty, _mm256_srli_epi64(*tm0, 8));
        // b_r0 = ty ^ ((ty & 1).wrapping_neg() & TINYMT_TMAT)
        let ty_lsb = _mm256_and_si256(ty, ones);
        let ty_mask = _mm256_sub_epi64(zeroes, ty_lsb);
        let tmat_vec = _mm256_set1_epi64x(tinymt_tmat as i64);
        let b_r0 = _mm256_xor_si256(ty, _mm256_and_si256(ty_mask, tmat_vec));

        (b_l0, b_l1, b_r0, b_r1)
    }
}

#[target_feature(enable = "avx2")]
#[inline(always)]
pub unsafe fn feistel_round_avx2(
    l0: &mut __m256i,
    l1: &mut __m256i,
    r0: &mut __m256i,
    r1: &mut __m256i,
    const1: u64,
    const2: u64,
) {
    unsafe {
        let m0 = _mm256_xor_si256(*r0, rotl_u64x4_avx2::<23>(*r1));
        let mut h0 = mullo_u64x4_const_avx2(m0, const1);
        h0 = _mm256_xor_si256(h0, _mm256_srli_epi64(h0, 31));

        let m1 = _mm256_xor_si256(*r1, rotl_u64x4_avx2::<33>(*r0));
        let mut h1 = _mm256_add_epi64(m1, _mm256_set1_epi64x(const2 as i64));
        h1 = _mm256_add_epi64(h1, rotl_u64x4_avx2::<29>(h0));

        // swap halves + apply (matches your macro's dataflow)
        let nl0 = *r0;
        let nr0 = _mm256_xor_si256(*l0, h0);
        let nl1 = *r1;
        let nr1 = _mm256_xor_si256(*l1, h1);

        *l0 = nl0;
        *r0 = nr0;
        *l1 = nl1;
        *r1 = nr1;
    }
}

#[target_feature(enable = "avx2")]
#[inline(always)]
pub unsafe fn permute_u64x4_avx2<const IMM8: i32>(x: __m256i) -> __m256i {
    _mm256_permute4x64_epi64(x, IMM8)
}

#[inline(always)]
pub const fn mm_shuffle<const A0: i32, const A1: i32, const A2: i32, const A3: i32>() -> i32 {
    (A3 << 6) | (A2 << 4) | (A1 << 2) | A0
}

#[target_feature(enable = "avx2")]
#[inline(always)]
pub unsafe fn finish_and_store_u64x4(
    l0: __m256i,
    l1: __m256i,
    r0: __m256i,
    r1: __m256i,
    output: &mut [u64],
    step: usize,
) {
    // res = (r0 ^ l0) + (r1 ^ !l1)
    unsafe {
        let t0 = _mm256_xor_si256(r0, l0);
        let ones = _mm256_set1_epi64x(-1); // all bits set
        let not_l1 = _mm256_xor_si256(l1, ones); // bitwise NOT
        let t1 = _mm256_xor_si256(r1, not_l1);

        let res = _mm256_add_epi64(t0, t1);

        // store into output[step*4 .. step*4+4]
        let out_ptr = output.as_mut_ptr().add(step * 4) as *mut __m256i;
        _mm256_storeu_si256(out_ptr, res);
    }
}
