#![feature(portable_simd)]
#[cfg(all(
    target_arch = "x86_64",
    target_feature = "avx2",
    not(all(target_feature = "avx512dq", target_feature = "avx512vl"))
))]
mod avx2;

use core::convert::Infallible;
use core::hint::cold_path;
use core::marker::PhantomData;
use core::simd::cmp::{SimdPartialEq, SimdPartialOrd};
use core::simd::num::SimdUint;
use core::simd::simd_swizzle;
use core::simd::{Select, Simd};
use core::slice::from_mut;
use bytemuck::cast_slice;
use const_format::formatcp;
use generic_array::GenericArray;
use rand_core::block::{BlockRng, Generator};
use rand_core::{SeedableRng, TryRng};
use tiny_keccak::{Hasher, IntoXof, Kmac, Xof};
use typenum::U;
// ============================================================================
// Multiplication dispatch — the ONLY operation where AVX2 differs
// ============================================================================

/// SIMD multiply: uses AVX2 mullo (in-register) or portable * (scalarized).
#[inline(always)]
fn simd_mul(a: Simd64, b: Simd64) -> Simd64 {
    #[cfg(all(
        target_arch = "x86_64",
        target_feature = "avx2",
        not(all(target_feature = "avx512dq", target_feature = "avx512vl"))
    ))]
    {
        avx2::mullo(a, b)
    }
    #[cfg(not(all(
        target_arch = "x86_64",
        target_feature = "avx2",
        not(all(target_feature = "avx512dq", target_feature = "avx512vl"))
    )))]
    {
        a * b
    }
}

// ============================================================================
// Constants
// ============================================================================

const TINYMT64_LANE_MASK: u64 = 0x7fff_ffff_ffff_ffff_u64;
const SIMD_WIDTH: usize = 4;
const OUTPUTS_PER_STEP: usize = 2;
const OUTPUT_LEN: usize = OUTPUTS_PER_STEP * SIMD_WIDTH;

pub type Simd64 = Simd<u64, SIMD_WIDTH>;

// ============================================================================
// Core struct
// ============================================================================

#[derive(Clone, Copy)]
pub struct TripleMixSimdCore {
    xr0: Simd64,
    xr1: Simd64,
    tm0: Simd64,
    tm1: Simd64,
    weyl_lo: Simd64,
    weyl_hi: Simd64,
    inc_lo: Simd64,
    inc_hi: Simd64,
}

#[cfg(feature = "zeroize")]
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
        std::hint::black_box(&*self);
    }
}

#[cfg(feature = "serde")]
#[derive(serde::Serialize, serde::Deserialize)]
struct CoreState {
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

#[cfg(feature = "zeroize")]
impl<Reproducibility: FillBytesReproducibility> zeroize::Zeroize
    for TripleMixPrng<Reproducibility>
{
    fn zeroize(&mut self) {
        self.block_core.core.zeroize();

        // Force next generation to overwrite the buffer using output derived from the zeroized core
        // (this won't be zero, but it won't reflect the previous core state either)
        self.block_core.reset_and_skip(0);

        // Prevent dead-write elimination
        std::hint::black_box(self.block_core.remaining_results());
    }
}

#[cfg(feature = "serde")]
impl<Reproducibility: FillBytesReproducibility> serde::Serialize
    for TripleMixPrng<Reproducibility>
{
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

#[cfg(feature = "serde")]
impl<'de, Reproducibility: FillBytesReproducibility> serde::Deserialize<'de>
    for TripleMixPrng<Reproducibility>
{
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: serde::Deserializer<'de>,
    {
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
        for i in 0..SIMD_WIDTH {
            if Self::is_lane_invalid(
                core.xr0,
                core.xr1,
                core.tm0,
                core.tm1,
                core.weyl_lo,
                core.weyl_hi,
                core.inc_lo,
                core.inc_hi,
                i,
            ) {
                cold_path();
                return Err(D::Error::custom(format!("invalid core state in lane {i}")));
            }
        }
        if let Some(block_core) = BlockRng::reconstruct(core, &state.remaining_results) {
            Ok(TripleMixPrng {
                block_core,
                reproducibility: PhantomData,
            })
        } else {
            Ok(TripleMixPrng::from_core(core))
        }
    }
}

impl std::fmt::Debug for TripleMixSimdCore {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let x = self.inc_hi;
        let x1 = self.inc_lo;
        let x2 = self.weyl_hi;
        let x3 = self.weyl_lo;
        let x4 = self.tm1;
        let x5 = self.tm0;
        let x6 = self.xr1;
        let x7 = self.xr0;
        f.debug_struct("TripleMixSimdCore")
            .field("xr0", &x7.to_array())
            .field("xr1", &x6.to_array())
            .field("tm0", &x5.to_array())
            .field("tm1", &x4.to_array())
            .field("weyl_lo", &x3.to_array())
            .field("weyl_hi", &x2.to_array())
            .field("inc_lo", &x1.to_array())
            .field("inc_hi", &x.to_array())
            .finish()
    }
}

impl TripleMixSimdCore {
    const TINYMT_MAT1: u64 = 0xdaa51b54;
    const TINYMT_MAT2: u64 = 0xfed47fb5 << 32;
    const TINYMT_TMAT: u64 = 0xa853e7ffeffefffe;

    #[inline(always)]
    pub(crate) fn fill_blocks(&mut self, blocks: &mut [[u64; OUTPUT_LEN]]) {
        if blocks.is_empty() {
            return;
        }

        // These are the hexadecimal expansion of pi, except that the first digit is changed in the
        // first and last constant to increase low-bit rank and avalanche effect.
        const LANE_CONSTANTS: Simd64 = Simd64::from_array([
            0xd243_f6a8_885a_308d,
            0x3131_98a2_e037_0734,
            0xca40_9382_2299_f31d,
            0x7082_efa9_8ec4_e6c8,
        ]);

        let mut xr0 = self.xr0;
        let mut xr1 = self.xr1;
        let mut tm0 = self.tm0;
        let mut tm1 = self.tm1;
        let mut w_lo = self.weyl_lo;
        let mut w_hi = self.weyl_hi;
        let i_lo = self.inc_lo;
        let i_hi = self.inc_hi;

        for block in blocks {
            // === 1. Source Generation ===

            // 128-bit LCG: w = w * (lane_constant << 64 + 1) + inc
            let next_w_lo = w_lo + i_lo;
            let high_product = simd_mul(w_lo, LANE_CONSTANTS); // ← only AVX2-dispatched op
            let carry = next_w_lo
                .simd_lt(w_lo)
                .select(Simd::splat(1), Simd::splat(0));
            w_hi = w_hi + high_product + i_hi + carry;
            w_lo = next_w_lo;
            let w_lo_out = w_lo + LANE_CONSTANTS;

            // Xoroshiro update
            let x_out = xr0 + xr1;
            let t = xr0 ^ xr1;
            xr0 = rotl(xr0, 9) ^ t ^ (t << Simd::splat(14));
            xr1 = rotl(t, 36);

            // TinyMT64 update
            tm0 &= Simd::splat(TINYMT64_LANE_MASK);
            let mut x = tm0 ^ tm1;
            x ^= x << Simd::splat(12);
            x ^= x >> Simd::splat(32);
            x ^= x << Simd::splat(32);
            x ^= x << Simd::splat(11);

            let mask = (x & Simd::splat(1)).wrapping_neg();
            let next_tm0 = tm1 ^ (mask & Simd::splat(Self::TINYMT_MAT1));
            let next_tm1 = x ^ (mask & Simd::splat(Self::TINYMT_MAT2));
            tm0 = next_tm0;
            tm1 = next_tm1;

            let mut ty = tm0 + tm1;
            ty ^= tm0 >> Simd::splat(8);
            let t_out =
                ty ^ ((ty & Simd::splat(1)).wrapping_neg() & Simd::splat(Self::TINYMT_TMAT));

            // === 2. Mixing ===
            let (out0, out1) = mix(w_lo_out, x_out, t_out, w_hi, i_hi);
            out0.copy_to_slice(&mut block[0..SIMD_WIDTH]);
            out1.copy_to_slice(&mut block[SIMD_WIDTH..(2 * SIMD_WIDTH)]);
        }

        self.xr0 = xr0;
        self.xr1 = xr1;
        self.tm0 = tm0;
        self.tm1 = tm1;
        self.weyl_lo = w_lo;
        self.weyl_hi = w_hi;
    }
}

#[inline(always)]
fn rotl(x: Simd64, k: u64) -> Simd64 {
    (x << Simd::splat(k)) | (x >> Simd::splat(64 - k))
}

#[inline(always)]
fn mix(w_lo: Simd64, x_in: Simd64, t: Simd64, w_hi: Simd64, i_hi: Simd64) -> (Simd64, Simd64) {
    // Tracking all rotation/shift constants here helps ensure that none are used twice, and that
    // no pairs that sum to 64 are used.
    const MIXING_ROTATION_12: u64 = 7;
    const MIXING_ROTATION_10: u64 = 9;
    const MIXING_ROTATION_07: u64 = 11;
    const MIXING_ROTATION_19: u64 = 13;
    const MIXING_ROTATION_02: u64 = 14;
    const MIXING_ROTATION_14: u64 = 17;
    const MIXING_ROTATION_13: u64 = 19;
    const MIXING_ROTATION_00: u64 = 22;
    const MIXING_ROTATION_05: u64 = 23;
    const MIXING_ROTATION_16: u64 = 29;
    const MIXING_ROTATION_03: u64 = 31;
    const MIXING_ROTATION_23: u64 = 39;
    const MIXING_ROTATION_01: u64 = 41;
    const MIXING_ROTATION_21: u64 = 43;
    const MIXING_ROTATION_09: u64 = 44;
    const MIXING_ROTATION_22: u64 = 49;
    const MIXING_ROTATION_18: u64 = 54;

    // Words 1, 5, 9 and 13 of the fractional part of the Golden Ratio.
    const FEISTEL_CONSTANT_1: Simd64 = Simd::from_array([
        0x9E3779B97F4A7C15,
        0x2767f0b153d27b7f,
        0xf06ad7ae9717877e,
        0x626e33b8d04b4331,
    ]);
    // Words 2, 6, 10 and 14 of the fractional part of the Golden Ratio.
    const FEISTEL_CONSTANT_2: Simd64 = Simd::from_array([
        0xf39cc0605cedc834,
        0x0347045b5bf1827f,
        0x85839d6effbd7dc6,
        0xbbf73c790d94f79d,
    ]);

    // Mix i_hi into the mixing constants, because otherwise the top byte's avalanche effect is
    // too weak.
    let first_mix_with_i_hi = FEISTEL_CONSTANT_1 + rotl(i_hi, MIXING_ROTATION_00);
    let second_mix_with_i_hi = FEISTEL_CONSTANT_2 ^ i_hi;

    // Round 1 (ARX, local): 5 xor, 5 add, 3 rotl
    // ------------------------------------------
    let p = ((w_hi + rotl(t, MIXING_ROTATION_02)) ^ first_mix_with_i_hi) ^ w_lo;

    let l0_1 = ((w_lo ^ rotl(x_in, MIXING_ROTATION_03)) + second_mix_with_i_hi) + t;
    let l1_1 = x_in + p;
    let r0_1 = (t ^ rotl(w_hi, MIXING_ROTATION_01)) + x_in;
    let r1_1 = p;

    // Round 2 (cross-lane): 4 xor, 4 add, 3 rotl, 3 simd_swizzle
    // ----------------------------------------------------------
    let sr1_1 = simd_swizzle!(r1_1, [2, 3, 0, 1]);
    let sl0_1 = simd_swizzle!(l0_1, [3, 0, 1, 2]);
    let sl1_1 = simd_swizzle!(l1_1, [1, 2, 3, 0]);

    let l0_2 = l0_1 ^ rotl(r0_1 ^ sl1_1, MIXING_ROTATION_05);
    let l1_2 = l1_1 + (sr1_1 ^ sl0_1);
    let r0_2 = r0_1 ^ rotl(sl1_1 + sr1_1, MIXING_ROTATION_07);
    let r1_2 = r1_1 + rotl(sl0_1 + r0_2, MIXING_ROTATION_09);

    // Round 3 (nonlinear core): 5 xor, 4 add, 1 rotl, 4 shift, 1 simd_mul
    // -------------------------------------------------------------------
    let x = r0_2 ^ (r1_2 >> MIXING_ROTATION_10);
    let y = l0_2 + (l1_2 >> MIXING_ROTATION_12);
    let m = simd_mul(x, y);

    let m1 = rotl(m, MIXING_ROTATION_13);
    let m2 = m ^ (m >> MIXING_ROTATION_14);

    // asymmetric feedback (no duplicated structure)
    let l0_3 = r0_2 ^ m1;
    let l1_3 = r1_2 + m2;
    let r0_3 = l0_2 + m1 + (m2 >> MIXING_ROTATION_16); // carry injection
    let r1_3 = l1_2 ^ m1 ^ m2;

    // Round 4 (transport): 3 xor, 3 add, 1 rotl, 1 simd_swizzle
    // ---------------------------------------------------------
    let sl0_3 = simd_swizzle!(l0_3, [2, 3, 1, 0]);

    let tl0r1 = sl0_3 + r1_3;
    let tl1r0 = rotl(l1_3 ^ r0_3, MIXING_ROTATION_18);

    let l0_4 = r0_3 ^ tl0r1;
    let l1_4 = r1_3 + tl1r0;
    let r0_4 = tl0r1 + l1_4;
    let r1_4 = tl1r0 ^ l0_4;

    // Output finalizer: 5 add/sub, 4 xor, 1 rotl, 3 shift
    // ---------------------------------------------------
    let t0 = (r0_4 + l0_4) ^ (r1_4 - l1_4); // strong carry interaction
    let t1 = (l1_4 ^ r0_4) + (r1_4 << MIXING_ROTATION_19);
    let t2 = t0 + t1;
    let t3 = t1 ^ rotl(t0, MIXING_ROTATION_21);
    let out0 = t2 ^ (t3 >> MIXING_ROTATION_22);
    let out1 = t3 + (out0 << MIXING_ROTATION_23);

    (out0, out1)
}

/// Instances must not be used again after being zeroized.
#[derive(Clone, Debug)]
pub struct TripleMixPrng<Reproducibility: FillBytesReproducibility> {
    block_core: BlockRng<TripleMixSimdCore>,
    reproducibility: PhantomData<Reproducibility>,
}

pub const SEED_SIZE: usize = 64 * SIMD_WIDTH;
pub const TRIPLE_MIX_PRNG_OID: &str = "1.3.6.1.4.1.54392.5.3311";
const MAJOR_VERSION: &str = env!("CARGO_PKG_VERSION_MAJOR");
const MINOR_VERSION: &str = env!("CARGO_PKG_VERSION_MINOR");
const PATCH_VERSION: &str = env!("CARGO_PKG_VERSION_PATCH");
pub const VERSION_OID: &str = formatcp!("{TRIPLE_MIX_PRNG_OID}.{MAJOR_VERSION}.{MINOR_VERSION}.{PATCH_VERSION}");

const SEED_DOMAIN_STRING: &[u8] = formatcp!("{VERSION_OID}::Seed").as_bytes();
const FORK_DOMAIN_STRING: &[u8] = formatcp!("{VERSION_OID}::Fork").as_bytes();

impl<Reproducibility: FillBytesReproducibility, T: AsRef<[u8]>> From<T>
    for TripleMixPrng<Reproducibility>
{
    fn from(raw_seed: T) -> Self {
        let mut base_kmac = Kmac::v256(SEED_DOMAIN_STRING, &[]);
        base_kmac.update(raw_seed.as_ref());
        Self::from_core(Self::generate_valid(base_kmac))
    }
}
impl<Reproducibility: FillBytesReproducibility> TripleMixPrng<Reproducibility> {
    #[inline(always)]
    fn generate_valid(base: Kmac) -> TripleMixSimdCore {
        let mut attempt = 0u128;
        loop {
            let core = Self::permute(&base, attempt);
            if Self::is_valid(&core) { return core; }
            cold_path();
            attempt += 1;
        }
    }

    #[inline(always)]
    fn permute(base: &Kmac, tweak: u128) -> TripleMixSimdCore {
        let mut xr0 = Simd64::splat(0); let mut xr1 = Simd64::splat(0);
        let mut tm0 = Simd64::splat(0); let mut tm1 = Simd64::splat(0);
        let mut weyl_lo = Simd64::splat(0);
        let mut weyl_hi = Simd64::splat(0);
        let mut inc_lo = Simd64::splat(0);
        let mut inc_hi = Simd64::splat(0);
        for round in 0..4 {
            let mut round_kmac = base.clone();
            round_kmac.update(&tweak.to_le_bytes());
            round_kmac.update(&[round as u8]);

            Self::update_from_half(&mut round_kmac, &xr0, &xr1, &tm0, &tm1, &weyl_lo, &inc_lo, true);

            let mut reader = round_kmac.into_xof();
            let mut f_out = [0u8; 96]; // Squeeze out only what's needed for 2 lanes
            reader.squeeze(&mut f_out);

            Self::xor_into_half(&mut xr0, &mut xr1, &mut tm0, &mut tm1, &mut weyl_lo, &mut inc_lo, &f_out, false);

            // Swap: Lanes 0,1 <-> Lanes 2,3
            xr0 = xr0.rotate_elements_left::<2>();
            xr1 = xr1.rotate_elements_left::<2>();
            tm0 = tm0.rotate_elements_left::<2>();
            tm1 = tm1.rotate_elements_left::<2>();
            weyl_lo = weyl_lo.rotate_elements_left::<2>();
            weyl_hi = weyl_hi.rotate_elements_left::<2>();
            inc_lo = inc_lo.rotate_elements_left::<2>();
            inc_hi = inc_hi.rotate_elements_left::<2>();
        }

        inc_lo |= Simd::splat(1);
        tm0 &= Simd::splat(TINYMT64_LANE_MASK);
        TripleMixSimdCore { xr0, xr1, tm0, tm1, weyl_lo, weyl_hi, inc_lo, inc_hi }
    }

    #[inline(always)]
    fn is_distinct(a: &TripleMixSimdCore, b: &TripleMixSimdCore) -> bool {
        // Simple distinctness check: Child state != Parent state in any lane combination
        !((a.xr0.simd_eq(b.xr0) & a.xr1.simd_eq(b.xr1))
            | (a.tm0.simd_eq(b.tm0) & a.tm1.simd_eq(b.tm1))
            | (a.weyl_lo.simd_eq(b.weyl_lo) & a.weyl_hi.simd_eq(b.weyl_hi))
            | (a.inc_lo.simd_eq(b.inc_lo) & a.inc_hi.simd_eq(b.inc_hi))).any()
    }

    #[inline(always)]
    fn update_from_half(kmac: &mut Kmac, xr0: &Simd64, xr1: &Simd64, tm0: &Simd64, tm1: &Simd64, lcg_s: &Simd64, lcg_i: &Simd64, right: bool) {
        let range = if right { 2..4 } else { 0..2 };
        let x0 = xr0.as_array(); let x1 = xr1.as_array();
        let t0 = tm0.as_array(); let t1 = tm1.as_array();
        let ls = lcg_s.as_array(); let li = lcg_i.as_array();
        for i in range {
            kmac.update(&x0[i].to_le_bytes()); kmac.update(&x1[i].to_le_bytes());
            kmac.update(&t0[i].to_le_bytes()); kmac.update(&t1[i].to_le_bytes());
            kmac.update(&ls[i].to_le_bytes()); kmac.update(&li[i].to_le_bytes());
        }
    }

    #[inline(always)]
    fn xor_into_half(xr0: &mut Simd64, xr1: &mut Simd64, tm0: &mut Simd64, tm1: &mut Simd64, lcg_s: &mut Simd64, lcg_i: &mut Simd64, data: &[u8], right: bool) {
        let range = if right { 2..4 } else { 0..2 };
        let mut chunks = data.chunks_exact(8).map(|c| u64::from_le_bytes(c.try_into().unwrap()));
        let x0 = xr0.as_mut_array(); let x1 = xr1.as_mut_array();
        let t0 = tm0.as_mut_array(); let t1 = tm1.as_mut_array();
        let ls = lcg_s.as_mut_array(); let li = lcg_i.as_mut_array();
        for i in range {
            x0[i] ^= chunks.next().unwrap(); x1[i] ^= chunks.next().unwrap();
            t0[i] ^= chunks.next().unwrap(); t1[i] ^= chunks.next().unwrap();
            ls[i] ^= chunks.next().unwrap(); li[i] ^= chunks.next().unwrap();
        }
    }

    /// Returns a new instance derived from both this one and the provided domain-separation bytes.
    /// The returned instance has less than a 1 in 2<sup>500</sup> chance of sharing a state with
    /// any other instance obtained by fork_with_domain_separation, unless they're called on clones
    /// of the same instance *and* the domain bytes are identical across both calls.
    /// Also permutes the parent PRNG's state so that repeated calls, even with the same
    /// domain-separation bytes, will return statistically independent instances.
    pub fn fork_with_domain_separation(&mut self, domain_separation: impl AsRef<[u8]>) -> Self {
        loop {
            // 1. Generate 2040 bits of fresh entropy from the current PRNG state
            let mut entropy = [[0u64; OUTPUT_LEN]; 4];
            self.block_core.core.fill_blocks(&mut entropy);

            // 2. Use this entropy as a seed for the new PRNG
            let mut fork_kmac = Kmac::v256(FORK_DOMAIN_STRING, domain_separation.as_ref());
            fork_kmac.update(cast_slice(&entropy));
            let child = Self::generate_valid(fork_kmac);
            if Self::is_distinct(&self.block_core.core, &child) {
                return Self::from_core(child);
            }
            cold_path();
        }
    }

    /// Aggressive SIMD Reduction for Validity
    #[inline(always)]
    fn is_valid(c: &TripleMixSimdCore) -> bool {
        // Dead-state check
        if ((c.xr0 | c.xr1).simd_eq(Simd::splat(0)) |
            (c.tm0 | c.tm1).simd_eq(Simd::splat(0))).any() {
            return false;
        }

        // Duplicate Check via XOR Reduction
        // If Lane[i] == Lane[j], then (Lane[i] ^ Lane[j]) == 0.
        // We check all 3 possible shift-offsets (1, 2, 3).
        macro_rules! find_dupe {
            ($shift:expr) => {
                let diff_xr = (c.xr0 ^ c.xr0.rotate_elements_left::<$shift>()) |
                              (c.xr1 ^ c.xr1.rotate_elements_left::<$shift>());
                let diff_tm = (c.tm0 ^ c.tm0.rotate_elements_left::<$shift>()) |
                              (c.tm1 ^ c.tm1.rotate_elements_left::<$shift>());
                let diff_lcg = (c.weyl_hi ^ c.weyl_hi.rotate_elements_left::<$shift>()) |
                            (c.weyl_lo ^ c.weyl_lo.rotate_elements_left::<$shift>()) |
                            (c.inc_hi ^ c.inc_hi.rotate_elements_left::<$shift>()) |
                            (c.inc_lo ^ c.inc_lo.rotate_elements_left::<$shift>());

                // A lane is a duplicate if ALL sub-generators match the rotated version
                if (diff_xr.simd_eq(Simd::splat(0)) &
                    diff_tm.simd_eq(Simd::splat(0)) &
                    diff_lcg.simd_eq(Simd::splat(0))).any() {
                    return false;
                }
            };
        }

        find_dupe!(1);
        find_dupe!(2);
        // (Note: shift 3 is covered by shift 1 in a 4-lane circular buffer,
        // but we keep it for strict completeness if not circular)
        find_dupe!(3);

        true
    }

    #[inline(always)]
    pub(crate) fn from_core(core: TripleMixSimdCore) -> Self {
        Self {
            block_core: BlockRng::new(core),
            reproducibility: PhantomData,
        }
    }

    /// Creates an instance in a relatively predictable state. Idempotent. Intended only for
    /// testing.
    #[inline(always)]
    pub fn almost_all_zeroes_state() -> Self {
        const SMALLEST_DISTINCT_ODD: [u64; SIMD_WIDTH] = [1, 3, 5, 7];
        const SMALLEST_DISTINCT_POSITIVE: [u64; SIMD_WIDTH] = [1, 2, 3, 4];
        TripleMixPrng::from_core(TripleMixSimdCore {
            xr0: Simd::splat(0),
            xr1: Simd64::from_array(SMALLEST_DISTINCT_POSITIVE),
            tm0: Simd::splat(0),
            tm1: Simd64::from_array(SMALLEST_DISTINCT_POSITIVE),
            weyl_lo: Simd::splat(0),
            weyl_hi: Simd::splat(0),
            inc_lo: Simd64::from_array(SMALLEST_DISTINCT_ODD),
            inc_hi: Simd::splat(0),
        })
    }
}

impl<Reproducibility: FillBytesReproducibility> SeedableRng for TripleMixPrng<Reproducibility> {
    type Seed = GenericArray<u8, U<{ SEED_SIZE }>>;

    fn from_seed(seed: Self::Seed) -> Self {
        Self::from(&seed)
    }

    fn fork(&mut self) -> Self {
        self.fork_with_domain_separation([])
    }
}

/// Levels of reproducibility for output of [`TripleMixPrng::fill_bytes`] and output after
/// fill_bytes has been called.
pub trait FillBytesReproducibility: Clone + Copy {
    fn fill_bytes(core: &mut BlockRng<TripleMixSimdCore>, bytes: &mut [u8]);
}

/// Output of [`TripleMixPrng::fill_bytes`] and the state of the PRNG afterward may depend on the
/// address alignment where the byte slice starts and ends and the machine endianness.
#[derive(Copy, Clone, Default, Debug)]
pub struct NotReproducible;

impl FillBytesReproducibility for NotReproducible {
    #[inline(always)]
    fn fill_bytes(block_core: &mut BlockRng<TripleMixSimdCore>, bytes: &mut [u8]) {
        let (prefix, u64s, suffix) = unsafe { bytes.align_to_mut::<u64>() };
        if u64s.is_empty() {
            // There's no benefit to bypassing the buffer or consolidating
            // writes if we can't write at least one aligned u64.
            block_core.fill_bytes(bytes);
            return;
        }
        if !prefix.is_empty() {
            block_core.fill_bytes(prefix);
        }
        fill_bytes_inner(block_core, u64s, suffix);
    }
}

#[inline(always)]
fn fill_bytes_inner(
    block_core: &mut BlockRng<TripleMixSimdCore>,
    u64s: &mut [u64],
    suffix: &mut [u8],
) {
    let remaining = block_core.remaining_results();
    if u64s.len() <= remaining.len() {
        for word in u64s.iter_mut() {
            *word = block_core.next_word();
        }
    } else {
        u64s[0..remaining.len()].copy_from_slice(remaining);
        let (dst_blocks, tail) = u64s[remaining.len()..].as_chunks_mut();
        if !dst_blocks.is_empty() {
            block_core.core.fill_blocks(dst_blocks);
        }
        block_core.reset_and_skip(0); // mark the buffer contents as used
        for tail_u64 in tail {
            *tail_u64 = block_core.next_word();
        }
    }
    if !suffix.is_empty() {
        block_core.fill_bytes(suffix);
    }
}

/// Output of [`TripleMixPrng::fill_bytes`] and the state of the PRNG afterward may depend on the
/// machine's endianness, but not on any attribute of the byte slice itself except its length.
#[derive(Copy, Clone, Default, Debug)]
pub struct SameEndianness;

/// Output of the PRNG will be the same as for an instance created with the same seed and receiving
/// the same calls (counting two `fill_bytes` as the same when they write to slices of the same
/// length), as long as both instances are created on machines with the same endianness.
impl FillBytesReproducibility for SameEndianness {
    #[inline(always)]
    fn fill_bytes(block_core: &mut BlockRng<TripleMixSimdCore>, bytes: &mut [u8]) {
        let (prefix, u64s, suffix) = unsafe { bytes.align_to_mut::<u64>() };
        if !prefix.is_empty() {
            block_core.fill_bytes(bytes);
            return;
        }
        fill_bytes_inner(block_core, u64s, suffix);
    }
}

/// Output of the PRNG will be the same as for an instance created with the same seed and receiving
/// the same calls (counting two `fill_bytes` as the same when they write to slices of the same
/// length) on another machine, even if that machine has a different CPU architecture.
#[derive(Copy, Clone, Default, Debug)]
pub struct CrossPlatform;

impl FillBytesReproducibility for CrossPlatform {
    #[inline(always)]
    fn fill_bytes(block_core: &mut BlockRng<TripleMixSimdCore>, bytes: &mut [u8]) {
        if cfg!(target_endian = "big") {
            block_core.fill_bytes(bytes);
            return;
        }
        SameEndianness::fill_bytes(block_core, bytes);
    }
}

impl<Reproducibility: FillBytesReproducibility> TryRng for TripleMixPrng<Reproducibility> {
    type Error = Infallible;

    #[inline(always)]
    fn try_next_u32(&mut self) -> Result<u32, Self::Error> {
        let next_u64 = self.try_next_u64()?;
        Ok((next_u64 >> 32 ^ next_u64) as u32)
    }

    #[inline(always)]
    fn try_next_u64(&mut self) -> Result<u64, Self::Error> {
        Ok(self.block_core.next_word())
    }

    #[inline(always)]
    fn try_fill_bytes(&mut self, dst: &mut [u8]) -> Result<(), Self::Error> {
        Reproducibility::fill_bytes(&mut self.block_core, dst);
        Ok(())
    }
}

impl Generator for TripleMixSimdCore {
    type Output = [u64; OUTPUT_LEN];

    #[inline(always)]
    fn generate(&mut self, output: &mut Self::Output) {
        self.fill_blocks(from_mut(output))
    }
}

// ============================================================================
// Tests
// ============================================================================

#[cfg(test)]
mod tests {
    use super::*;
    use bytemuck::cast_slice_mut;
    use core::any::TypeId;
    use core::simd::cmp::SimdPartialEq;
    use gf2::{BitMatrix, BitStore};
    use hypors::chi_square::goodness_of_fit;
    use rand::rngs::SysRng;
    use rand::{RngExt, rng};
    use rand_core::{Rng, SeedableRng};
    use statrs::distribution::{Binomial, DiscreteCDF};
    use statrs::statistics::Distribution;

    #[test]
    pub fn test_mix_matrix() {
        let mut random_inputs = [Simd64::splat(0); 5];
        let mut seed_rng = rng();
        for cell in random_inputs.iter_mut() {
            seed_rng.fill(cell.as_mut_array());
        }
        let mix_inputs = [
            [Simd64::splat(0); 5],
            [Simd64::splat(u64::MAX); 5],
            random_inputs,
        ];
        for base_input in mix_inputs {
            let (base_out0, base_out1) = mix(
                base_input[0],
                base_input[1],
                base_input[2],
                base_input[3],
                base_input[4],
            );
            let mut xor_matrix = BitMatrix::<u64>::zeros(512, 1280);
            let mut i = 0;
            for variable_idx in 0..5 {
                for lane_idx in 0..SIMD_WIDTH {
                    for bit_idx in 0..64 {
                        let mut modified_input = base_input;
                        modified_input[variable_idx][lane_idx] ^= 1 << bit_idx;
                        let (mod_out0, mod_out1) = mix(
                            modified_input[0],
                            modified_input[1],
                            modified_input[2],
                            modified_input[3],
                            modified_input[4],
                        );
                        let (out_xor_0, out_xor_1) = (mod_out0 ^ base_out0, mod_out1 ^ base_out1);
                        let mut j = 0;
                        for out_lane_idx in 0..SIMD_WIDTH {
                            for out_bit_idx in 0..64 {
                                xor_matrix.set(
                                    j,
                                    i,
                                    (out_xor_0[out_lane_idx] >> out_bit_idx) & 1 != 0,
                                );
                                j += 1;
                            }
                            for out_bit_idx in 0..64 {
                                xor_matrix.set(
                                    j,
                                    i,
                                    (out_xor_1[out_lane_idx] >> out_bit_idx) & 1 != 0,
                                );
                                j += 1;
                            }
                        }
                        i += 1;
                    }
                }
            }
            let row_weights = (0..512)
                .map(|row| xor_matrix.row(row).count_ones())
                .collect::<Vec<_>>();
            let min_row_weight = row_weights.iter().copied().min().unwrap();
            let max_row_weight = row_weights.iter().copied().max().unwrap();
            let col_weights = (0..1280)
                .map(|col| xor_matrix.col(col).count_ones())
                .collect::<Vec<_>>();
            let min_col_weight = col_weights.iter().copied().min().unwrap();
            let max_col_weight = col_weights.iter().copied().max().unwrap();
            println!("min_row_weight={min_row_weight}, max_row_weight={max_row_weight}");
            println!("Row weights:");
            for row_chunk in row_weights.chunks_exact(64) {
                println!("{:>4?} = {:>6}", row_chunk, row_chunk.iter().sum::<usize>());
            }
            println!("min_col_weight={min_col_weight}, max_col_weight={max_col_weight}");
            println!("Column weights:");
            for col_chunk in col_weights.chunks_exact(64) {
                println!("{:>4?} = {:>6}", col_chunk, col_chunk.iter().sum::<usize>());
            }
            let total_weight = row_weights.into_iter().sum::<usize>();
            let sigma = ((512 * 1280) as f64 * 0.25).sqrt();
            let z = (total_weight as f64 - (0.5 * 512.0 * 1280.0)) / sigma;
            println!("Total weight: {total_weight} (z={z})");
            assert!(min_col_weight >= 200);
            assert!(min_row_weight >= 550);
            assert!(z >= -3.0, "Total weight too low");
            assert!(z <= 3.0, "Total weight too high");
            assert_eq!(xor_matrix.to_echelon_form().count_ones(), 512);
        }
    }

    #[test]
    pub fn test_second_order_derivative() {
        let mut random_inputs = [Simd64::splat(0); 5];
        let mut seed_rng = rng();
        for cell in random_inputs.iter_mut() {
            seed_rng.fill(cell.as_mut_array());
        }
        let mix_inputs = [
            [Simd64::splat(0); 5],
            [Simd64::splat(u64::MAX); 5],
            random_inputs,
        ];
        for base_input in mix_inputs {
            let (base_out0, base_out1) = mix(
                base_input[0],
                base_input[1],
                base_input[2],
                base_input[3],
                base_input[4],
            );
            let mut weights = Vec::new();
            for var_idx_1 in 0..5 {
                for var_idx_2 in var_idx_1..5 {
                    for lane_idx_1 in 0..SIMD_WIDTH {
                        for lane_idx_2 in lane_idx_1..SIMD_WIDTH {
                            if lane_idx_1 == lane_idx_2 && var_idx_1 == var_idx_2 {
                                for bit_idx_1 in 0..63 {
                                    for bit_idx_2 in bit_idx_1..64 {
                                        let mut modified_input = base_input;
                                        modified_input[var_idx_1][lane_idx_1] ^=
                                            1 << bit_idx_1 | 1 << bit_idx_2;
                                        let (mod_out0, mod_out1) = mix(
                                            modified_input[0],
                                            modified_input[1],
                                            modified_input[2],
                                            modified_input[3],
                                            modified_input[4],
                                        );
                                        let (out_xor_0, out_xor_1) =
                                            (mod_out0 ^ base_out0, mod_out1 ^ base_out1);
                                        weights.push(
                                            out_xor_0.count_ones().reduce_sum()
                                                + out_xor_1.count_ones().reduce_sum(),
                                        );
                                    }
                                }
                            } else {
                                for bit_idx in 0..64 {
                                    let mut modified_input = base_input;
                                    modified_input[var_idx_1][lane_idx_1] ^= 1 << bit_idx;
                                    modified_input[var_idx_2][lane_idx_2] ^= 1 << bit_idx;
                                    let (mod_out0, mod_out1) = mix(
                                        modified_input[0],
                                        modified_input[1],
                                        modified_input[2],
                                        modified_input[3],
                                        modified_input[4],
                                    );
                                    let (out_xor_0, out_xor_1) =
                                        (mod_out0 ^ base_out0, mod_out1 ^ base_out1);
                                    weights.push(
                                        out_xor_0.count_ones().reduce_sum()
                                            + out_xor_1.count_ones().reduce_sum(),
                                    );
                                }
                            }
                        }
                    }
                }
            }
            let sample_size = weights.len();
            let min_weight = weights.iter().copied().min().unwrap();
            let max_weight = weights.iter().copied().max().unwrap();
            let mean_weight =
                weights.iter().copied().map(u64::from).sum::<u64>() as f64 / sample_size as f64;
            let variance_weight = weights
                .iter()
                .copied()
                .map(|weight| weight as f64 - mean_weight)
                .map(|x| x * x)
                .sum::<f64>()
                / (sample_size - 1) as f64;
            let stdev_weight = variance_weight.sqrt();
            println!(
                "N={sample_size}, min={min_weight}, max={max_weight}, mean={mean_weight}, sd={stdev_weight}"
            );
            assert!(min_weight >= 150);
            assert!(max_weight <= 362);
            assert!(mean_weight >= 254.0);
            assert!(mean_weight <= 258.0);
            assert!(stdev_weight >= 11.0);
            assert!(stdev_weight <= 14.0);
        }
    }

    pub fn create_rngs<Reproducibility: FillBytesReproducibility>()
    -> [TripleMixPrng<Reproducibility>; 5] {
        const SMALLEST_DISTINCT_ODD_DESCENDING: Simd64 = Simd::from_array([7, 5, 3, 1]);
        const SMALLEST_DISTINCT_POSITIVE_DESCENDING: Simd64 = Simd::from_array([4, 3, 2, 1]);
        const LARGEST_DISTINCT_ODD: Simd64 =
            Simd::from_array([u64::MAX - 6, u64::MAX - 4, u64::MAX - 2, u64::MAX]);
        const LARGEST_DISTINCT: Simd64 =
            Simd::from_array([u64::MAX - 3, u64::MAX - 2, u64::MAX - 1, u64::MAX]);
        let rng1 = TripleMixPrng::almost_all_zeroes_state();
        let rng2 = TripleMixPrng::from_core(TripleMixSimdCore {
            xr0: Simd::splat(0),
            xr1: SMALLEST_DISTINCT_POSITIVE_DESCENDING,
            tm0: Simd::splat(0),
            tm1: SMALLEST_DISTINCT_POSITIVE_DESCENDING,
            weyl_lo: Simd::splat(0),
            weyl_hi: Simd::splat(0),
            inc_lo: SMALLEST_DISTINCT_ODD_DESCENDING,
            inc_hi: Simd::splat(0),
        });
        let rng3 = TripleMixPrng::from_core(TripleMixSimdCore {
            xr0: Simd::splat(u64::MAX),
            xr1: LARGEST_DISTINCT,
            tm0: Simd::splat(u64::MAX),
            tm1: LARGEST_DISTINCT,
            weyl_lo: Simd::splat(u64::MAX),
            weyl_hi: Simd::splat(u64::MAX),
            inc_lo: LARGEST_DISTINCT_ODD,
            inc_hi: Simd::splat(u64::MAX),
        });
        let mut seed = [0u8; SEED_SIZE];
        let rng4 = TripleMixPrng::from(&seed);
        SysRng.try_fill_bytes(&mut seed).unwrap();
        let rng5 = TripleMixPrng::from(&seed);
        [rng1, rng2, rng3, rng4, rng5]
    }

    #[test]
    fn test_byte_frequencies() {
        for mut prng in create_rngs::<NotReproducible>() {
            let mut frequencies = [0u32; u8::MAX as usize + 1];
            for _ in 0..(1 << 28) {
                let byte: u8 = prng.random();
                frequencies[byte as usize] += 1;
            }
            let chi_square = goodness_of_fit(
                frequencies.map(f64::from),
                std::iter::repeat_n((1 << 20) as f64, u8::MAX as usize + 1),
                0.01,
            )
            .unwrap();
            println!("{:?}", chi_square);
            assert!(!chi_square.reject_null);
        }
    }

    #[test]
    fn test_u16_frequencies() {
        for mut prng in create_rngs::<NotReproducible>() {
            let mut frequencies = vec![0u32; u16::MAX as usize + 1];
            for _ in 0..(1 << 28) {
                let word: u16 = prng.random();
                frequencies[word as usize] += 1;
            }
            let chi_square = goodness_of_fit(
                frequencies.into_iter().map(f64::from),
                std::iter::repeat_n((1 << 12) as f64, u16::MAX as usize + 1),
                0.01,
            )
            .unwrap();
            println!("{:?}", chi_square);
            assert!(!chi_square.reject_null);
        }
    }

    #[test]
    fn test_bit_correlations_and_transitions() {
        const SAMPLE_COUNT: usize = 1 << 24;
        const P_THRESHOLD: f64 = 1e-6; // 6112 total tests per prng
        let mut samples = vec![0u64; SAMPLE_COUNT];
        for mut prng in create_rngs::<NotReproducible>() {
            prng.fill(samples.as_mut());
            for i in 0..=62 {
                for j in (i + 1)..=63 {
                    let mut bins = [0u64; 4];
                    for sample in &samples {
                        bins[((sample >> i) & 1 | ((sample >> j) & 1) << 1) as usize] += 1;
                    }
                    let p = goodness_of_fit(
                        bins.map(|bin| bin as f64),
                        [SAMPLE_COUNT as f64 * 0.25; 4],
                        P_THRESHOLD,
                    )
                    .unwrap()
                    .p_value;
                    assert!(
                        p >= P_THRESHOLD,
                        "Chi-square test failed for bins: ({bins:?}, p={p:.10}) for i={i},j={j}"
                    );
                }
            }
            for i in 0..=63 {
                for j in 0..=63 {
                    let mut lagged_bins = [0u64; 4];
                    for pair in samples.windows(2) {
                        let first = pair[0];
                        let second = pair[1];
                        lagged_bins[((first >> i) & 1 | ((second >> j) & 1) << 1) as usize] += 1;
                    }
                    let p = goodness_of_fit(
                        lagged_bins.map(|bin| bin as f64),
                        [(SAMPLE_COUNT - 1) as f64 * 0.25; 4],
                        P_THRESHOLD,
                    )
                    .unwrap()
                    .p_value;
                    assert!(
                        p >= P_THRESHOLD,
                        "Chi-square test failed for lagged bins: ({lagged_bins:?}, p={p:.10}) for i={i},j={j}"
                    );
                }
            }
        }
    }

    fn test_equivalence_generic<Reproducibility: FillBytesReproducibility + 'static>() {
        let seed = [0u8; SEED_SIZE];
        let mut prng1 = TripleMixPrng::<Reproducibility>::from(&seed);
        let mut prng2 = TripleMixPrng::<Reproducibility>::from(&seed);
        for length in [1, 2, 4, 8, 16, 32, 64, 1024] {
            for misalignment in 0..size_of::<u64>() {
                // Force buffer edges to be aligned on 64 bits, so that written portion will be misaligned
                let mut buf1 = vec![0u64; (length + size_of::<u64>()) / size_of::<u64>() + 1];
                let buf1: &mut [u8] = cast_slice_mut(&mut buf1);
                let buf1 = &mut buf1[misalignment..(length + misalignment)];
                prng1.fill_bytes(buf1);
                let mut buf2 = vec![0u64; (length + size_of::<u64>()) / size_of::<u64>() + 1];
                let buf2: &mut [u8] = cast_slice_mut(&mut buf2);
                let buf2 = &mut buf2[0..length];
                if length.is_multiple_of(size_of::<u64>()) {
                    for chunk in buf2.chunks_exact_mut(size_of::<u64>()) {
                        let next_word = prng2.next_u64();
                        chunk.copy_from_slice(&if TypeId::of::<Reproducibility>()
                            == TypeId::of::<CrossPlatform>()
                        {
                            next_word.to_le_bytes()
                        } else {
                            next_word.to_ne_bytes()
                        });
                    }
                } else {
                    prng2.fill_bytes(buf2);
                }
                assert_eq!(&*buf1, &*buf2);
            }
        }
    }

    #[test]
    fn test_equivalence() {
        test_equivalence_generic::<SameEndianness>();
        test_equivalence_generic::<CrossPlatform>();
    }

    #[test]
    fn test_fork_independence_descendants() {
        const SAMPLES_PER_FORK: usize = OUTPUTS_PER_STEP * SIMD_WIDTH * 4;
        const FORKS: usize = 64;
        #[cfg(not(feature = "no_std"))]
        let mut previous_outputs =
            std::collections::HashSet::with_capacity(SAMPLES_PER_FORK * FORKS);
        #[cfg(feature = "no_std")]
        let mut previous_outputs = core::collections::BTreeSet::new();
        for mut prng in create_rngs::<NotReproducible>() {
            for _ in 0..FORKS {
                for _ in 0..SAMPLES_PER_FORK {
                    let next = prng.next_u64();
                    print!("{next:016X} ");
                    assert!(previous_outputs.insert(next));
                }
                println!();
                prng = prng.fork();
            }
        }
    }

    #[test]
    fn test_fork_independence_siblings() {
        const SAMPLES_PER_FORK: usize = 32;
        const FORKS: usize = 64;
        #[cfg(not(feature = "no_std"))]
        let mut previous_outputs =
            std::collections::HashSet::with_capacity(SAMPLES_PER_FORK * FORKS);
        #[cfg(feature = "no_std")]
        let mut previous_outputs = core::collections::BTreeSet::new();
        for mut parent_prng in create_rngs::<NotReproducible>() {
            for _ in 0..FORKS {
                let mut prng = parent_prng.fork();
                for _ in 0..SAMPLES_PER_FORK {
                    let next = prng.next_u64();
                    print!("{next:016X} ");
                    assert!(previous_outputs.insert(next));
                }
                println!();
            }
        }
    }

    #[test]
    fn test_avalanche() {
        for rng in create_rngs::<NotReproducible>() {
            let core = rng.block_core.core;

            const ITERATIONS: usize = 20;
            const LOW_AVALANCHE_THRESHOLD: u64 = 28 * OUTPUT_LEN as u64;

            let mut min_flips = u64::MAX;
            let mut max_flips = 0;
            let mut total_flips: u64 = 0;
            let mut count: u64 = 0;
            let mut flips_per_bit = [[[0; 64]; SIMD_WIDTH]; 8];
            let mut core1 = core;
            let mut output1 = [[Simd64::splat(0); OUTPUTS_PER_STEP]; ITERATIONS];
            core1.fill_blocks(cast_slice_mut(&mut output1));
            let mut min_field = 0;
            let mut min_lane = 0;
            let mut min_bit = 0;
            let mut min_iter = 0;
            let mut low_avalanches = 0;
            for (field_idx, flips_per_bit_for_field) in flips_per_bit.iter_mut().enumerate() {
                for (lane_idx, flips_per_bit_for_lane) in
                    flips_per_bit_for_field.iter_mut().enumerate()
                {
                    for (bit_idx, flips_for_bit) in flips_per_bit_for_lane.iter_mut().enumerate() {
                        if field_idx == 2 && bit_idx == 63 {
                            continue;
                        }
                        if field_idx == 6 && bit_idx == 0 {
                            continue;
                        }
                        //if field_idx == 7 && bit_idx >= 59 { continue; }
                        let mut core2 = core;
                        match field_idx {
                            0 => {
                                let x = core2.xr0;
                                let mut arr = x.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.xr0 = Simd64::from_array(arr);
                            }
                            1 => {
                                let x = core2.xr1;
                                let mut arr = x.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.xr1 = Simd64::from_array(arr);
                            }
                            2 => {
                                let x = core2.tm0;
                                let mut arr = x.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.tm0 = Simd64::from_array(arr);
                            }
                            3 => {
                                let x = core2.tm1;
                                let mut arr = x.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.tm1 = Simd64::from_array(arr);
                            }
                            4 => {
                                let x = core2.weyl_lo;
                                let mut arr = x.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.weyl_lo = Simd64::from_array(arr);
                            }
                            5 => {
                                let x = core2.weyl_hi;
                                let mut arr = x.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.weyl_hi = Simd64::from_array(arr);
                            }
                            6 => {
                                let x = core2.inc_lo;
                                let mut arr = x.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.inc_lo = Simd64::from_array(arr);
                            }
                            7 => {
                                let x = core2.inc_hi;
                                let mut arr = x.to_array();
                                arr[lane_idx] ^= 1 << bit_idx;
                                core2.inc_hi = Simd64::from_array(arr);
                            }
                            _ => unreachable!(),
                        }
                        let mut output2 = [[Simd64::splat(0); OUTPUTS_PER_STEP]; ITERATIONS];
                        core2.fill_blocks(cast_slice_mut(&mut output2));
                        for i in 0..ITERATIONS {
                            let mut flips = 0;
                            let first_output1 = Simd::splat(output1[i][0][0]);
                            let first_output2 = Simd::splat(output2[i][0][0]);
                            for vec_idx in 0..OUTPUTS_PER_STEP {
                                let xor = output1[i][vec_idx] ^ output2[i][vec_idx];
                                let sub_same = (output1[i][vec_idx] - output2[i][vec_idx])
                                    .simd_eq(first_output1 - first_output2);
                                let xor_same = xor.simd_eq(first_output1 ^ first_output2);
                                for cell in 0..SIMD_WIDTH {
                                    if vec_idx == 0 && cell == 0 {
                                        continue;
                                    }
                                    assert_eq!(
                                        sub_same.test(cell),
                                        false,
                                        "Field {field_idx}, lane {lane_idx}, bit {bit_idx}: Same difference between cells 0 and {cell} as before flipping"
                                    );
                                    assert_eq!(
                                        xor_same.test(cell),
                                        false,
                                        "Field {field_idx}, lane {lane_idx}, bit {bit_idx}: Same xor between cells 0 and {cell} as before flipping"
                                    );
                                }
                                flips += xor.count_ones().reduce_sum();
                            }
                            total_flips += flips;
                            if flips <= LOW_AVALANCHE_THRESHOLD {
                                low_avalanches += 1;
                            }
                            if flips < min_flips {
                                min_flips = flips;
                                min_iter = i;
                                min_field = field_idx;
                                min_lane = lane_idx;
                                min_bit = bit_idx;
                            }
                            max_flips = max_flips.max(flips);
                            count += 1;
                            *flips_for_bit += flips;
                        }
                    }
                }
            }
            for (field_idx, flips_per_bit_for_field) in flips_per_bit.iter().enumerate() {
                for (lane_idx, flips_per_bit_for_lane) in flips_per_bit_for_field.iter().enumerate()
                {
                    println!(
                        "Field {} lane {}: Flips: {:?}",
                        field_idx, lane_idx, flips_per_bit_for_lane
                    );
                }
            }
            let avg_flips = total_flips as f64 / count as f64;
            println!(
                "Avalanche stats ({} checks): Avg: {:.2}, Min: {}, Max: {}",
                count, avg_flips, min_flips, max_flips
            );

            const DEVIATION: f64 = 0.1;
            assert!(
                avg_flips >= 32.0 * (1.0 - DEVIATION) * (OUTPUT_LEN as f64),
                "Average diffusion too low"
            );
            assert!(
                avg_flips <= 32.0 * (1.0 + DEVIATION) * (OUTPUT_LEN as f64),
                "Average diffusion too high?"
            );
            let bit_flip_distribution = Binomial::new(0.5, (OUTPUT_LEN * 64) as u64).unwrap();
            let low_avalanche_probability = bit_flip_distribution.cdf(LOW_AVALANCHE_THRESHOLD);
            let low_avalanche_distribution =
                Binomial::new(low_avalanche_probability, count).unwrap();
            let mean = low_avalanche_distribution.mean().unwrap();
            let mirror = 2.0 * mean - low_avalanches as f64;
            let low_avalanche_p_value = if low_avalanches as f64 <= mean {
                1.0 - low_avalanche_distribution.cdf(mirror as u64 - 1)
                    + low_avalanche_distribution.cdf(low_avalanches as u64)
            } else {
                1.0 - low_avalanche_distribution.cdf(low_avalanches as u64 - 1)
                    + low_avalanche_distribution.cdf(mirror as u64)
            };
            println!(
                "Expected {:.4} low-avalanche checks, got {}; p={:.4}",
                low_avalanche_probability * count as f64,
                low_avalanches,
                low_avalanche_p_value
            );
            assert!(
                low_avalanche_p_value > 0.01,
                "Too many low-avalanche results"
            );
            assert!(
                min_flips as usize >= 16 * OUTPUT_LEN,
                "Minimum diffusion too low in field {min_field} lane {min_lane} bit {min_bit} on iteration {min_iter}, possible blind spot!"
            );
        }
    }

    #[test]
    fn test_seed_diffusion() {
        let seed = [0u8; SEED_SIZE];
        let mut rng1 = TripleMixPrng::<NotReproducible>::from_seed(GenericArray::from(seed));
        let start_val1 = rng1.try_next_u64().unwrap();

        for byte_index in 0..SEED_SIZE {
            for bit_index in 0..=7 {
                let mut seed = [0u8; SEED_SIZE];
                seed[byte_index] = 1 << bit_index;
                let mut rng2 =
                    TripleMixPrng::<NotReproducible>::from_seed(GenericArray::from(seed));
                let start_val2 = rng2.try_next_u64().unwrap();
                let flipped_bits = (start_val1 ^ start_val2).count_ones();
                assert!(
                    flipped_bits > 1,
                    "Changing byte {byte_index} bit {bit_index} of the seed did not affect the first output! Diffusion failure."
                );
                assert!(
                    flipped_bits < 63,
                    "Changing byte {byte_index} bit {bit_index} of the seed just inverted the first output! Diffusion failure."
                );
                assert_ne!(start_val1, 0, "Output shouldn't be zero");
            }
        }
    }

    const SAMPLES: usize = 1 << 22; // ~4M outputs
    const BLOCK: usize = 8; // 8x8 projection

    fn extract_bitplane(words: &[u64], bit: u32) -> Vec<i8> {
        words
            .iter()
            .map(|w| if ((w >> bit) & 1) != 0 { 1 } else { -1 })
            .collect()
    }

    fn xor_successive(words: &mut [u64]) {
        for i in 0..words.len() - 1 {
            words[i] ^= words[i + 1];
        }
    }

    fn random_projection_kernel() -> [[i8; BLOCK]; BLOCK] {
        // Fixed deterministic ±1 kernel
        let mut k = [[0i8; BLOCK]; BLOCK];
        let mut x: u64 = 0x12345678abcdef01;
        for row in k.iter_mut() {
            for cell in row.iter_mut() {
                x ^= x << 13;
                x ^= x >> 7;
                x ^= x << 17;
                *cell = if x & 1 == 0 { 1 } else { -1 };
            }
        }
        k
    }

    fn projection_test(data: &[i8]) -> f64 {
        let kernel = random_projection_kernel();
        let mut sum = 0f64;
        let mut sum_sq = 0f64;
        let mut count = 0f64;

        let side = (data.len() as f64).sqrt() as usize;
        for y in 0..side - BLOCK {
            for x in 0..side - BLOCK {
                let mut acc = 0i32;
                for (ky, kernel_row) in kernel.iter().enumerate() {
                    for (kx, kernel_entry) in kernel_row.iter().copied().enumerate() {
                        let idx = (y + ky) * side + (x + kx);
                        acc += data[idx] as i32 * kernel_entry as i32;
                    }
                }
                let val = acc as f64;
                sum += val;
                sum_sq += val * val;
                count += 1.0;
            }
        }

        let mean = sum / count;
        let var = (sum_sq / count) - mean * mean;
        mean.abs() + (var - 64.0).abs() // 64 expected variance for 8x8 ±1
    }

    #[test]
    fn test_bitplane_projection() {
        for mut rng in create_rngs::<NotReproducible>() {
            let mut buf = vec![0u64; SAMPLES];
            rng.fill_bytes(cast_slice_mut(&mut buf));

            xor_successive(&mut buf);

            for bit in 0..64 {
                let plane = extract_bitplane(&buf, bit);
                let score = projection_test(&plane);

                assert!(
                    score < 1.0,
                    "Projection deviation too large for bit {bit}: {}",
                    score
                );
            }
        }
    }

    #[test]
    fn test_lane_cross_correlation_bitplane() {
        for mut rng in create_rngs::<NotReproducible>() {
            const N: usize = 1 << 28;
            let mut lanes = [0u64; SIMD_WIDTH];
            for target_lane in 1..SIMD_WIDTH {
                let mut sums = [0i64; 64];
                for _ in 0..N {
                    rng.fill(&mut lanes);
                    for (bit, sum) in sums.iter_mut().enumerate() {
                        let a = if (lanes[0] >> bit) & 1 == 1 { 1 } else { -1 };
                        let b = if (lanes[target_lane] >> bit) & 1 == 1 {
                            1
                        } else {
                            -1
                        };

                        *sum += (a * b) as i64;
                    }
                }
                for (bit, sum) in sums.into_iter().enumerate() {
                    let corr = sum as f64 / N as f64;

                    // For the binomial distribution, stddev = sqrt(N * p * (1 - p))
                    // but its range is [0, N]; we've scaled it linearly to have the range [-1, 1]
                    // so sigma = sqrt(N * 0.25) * 2 / N
                    // = 1/sqrt(N)
                    let sigma = 1.0 / (N as f64).sqrt();

                    assert!(
                        corr.abs() < 5.0 * sigma,
                        "Lane bit correlation detected on bit {bit} betweeen lanes 0 and {target_lane}: {corr} (σ={sigma})",
                    );
                }
            }
        }
    }

    fn gf2_rank(mut rows: [u64; 64]) -> u32 {
        let mut rank = 0;
        for col in (0..64).rev() {
            if let Some(pivot) = (rank..64).find(|&r| (rows[r] >> col) & 1 == 1) {
                rows.swap(rank, pivot);
                for r in 0..64 {
                    if r != rank && ((rows[r] >> col) & 1) == 1 {
                        rows[r] ^= rows[rank];
                    }
                }
                rank += 1;
            }
        }
        rank.try_into().unwrap()
    }

    /// False positive rate for this test is about 1.2% per PRNG.
    #[test]
    fn test_lowbit_rank() {
        for mut rng in create_rngs::<NotReproducible>() {
            let mut rank60_count = 0;

            for _ in 0..10000 {
                let mut matrix = [0u64; 64];
                rng.fill(&mut matrix);
                let rank = gf2_rank(matrix);
                assert!(rank >= 60, "Low-bit rank deficiency: {}", rank);
                if rank == 60 {
                    rank60_count += 1;
                    assert!(
                        rank60_count <= 2,
                        "Too many low-bit rank deficiencies (rank 60)"
                    );
                }
            }
        }
    }

    #[test]
    fn test_double_differential() {
        for mut rng in create_rngs::<NotReproducible>() {
            const N: usize = 1 << 21;

            let mut x = vec![0u64; N];
            rng.fill(x.as_mut_slice());

            // first difference
            for i in 0..N - 1 {
                x[i] ^= x[i + 1];
            }

            // second difference
            for i in 0..N - 2 {
                x[i] ^= x[i + 2];
            }

            // check bit bias
            let ones = x.iter().map(|v| v.count_ones() as u64).sum::<u64>();
            let total_bits = (N as u64) * 64;
            let bias = (ones as f64 / total_bits as f64) - 0.5;

            assert!(bias.abs() < 1e-3, "Differential bias detected: {}", bias);
        }
    }

    #[test]
    fn test_fractional_spectral() {
        for mut rng in create_rngs::<NotReproducible>() {
            const N: usize = 1 << 21;

            let mut prev = rng.next_u64();
            let mut min_gap = f64::MAX;

            for _ in 0..N {
                let curr = rng.next_u64();
                let diff = (curr.wrapping_sub(prev) as f64).abs();
                if diff < min_gap {
                    min_gap = diff;
                }
                prev = curr;
            }

            assert!(min_gap > 1.0, "Spectral lattice behavior suspected");
        }
    }
}
