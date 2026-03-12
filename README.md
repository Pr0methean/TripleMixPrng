rand_triplemix
==============

This is a vectorized pseudorandom number generator (PRNG) that combines, in each of 4 SIMD lanes, an instance of 
xoroshiro128, TinyMT64 and a 128-bit linear congruential generator (LCG) in each of 4 SIMD lanes. This PRNG has not been 
evaluated for cryptographic use.

Requires the `portable_simd` feature, which is currently nightly-only.

The PRNG has the following properties:

* The output block size is 64 bytes (8 u64's).
* The state size is 256 bytes: 508 bits of identity, 1532 bits of mutable state, 8 bits of overhead.
* The period is 2<sup>128</sup>(2<sup>128</sup> - 1)(2<sup>127</sup> - 1) blocks, because the period of the LCG is
  2<sup>128</sup>, the period of the TinyMT64 is 2<sup>127</sup> - 1, and the period of the xoroshiro is 
  2<sup>128</sup> - 1, and those three periods are coprime.
* The 3-step output mapping achieves an average linear rank of 1531.94, with standard deviation less than 0.3.
* The generator is exactly 2-equidistributed for 64-bit outputs. This means that
  over its full period, every possible sequence of 4 consecutive 64-bit values occurs exactly the same number of times.
* It is approximately 3-, 4- and 5-equidistributed for 64-bit outputs. This means that over its full period for any 
  given seed, every possible sequence of 3, 4 or 5 consecutive 64-bit values occurs, and no sequence occurs fewer than 
  1 - 2<sup>-64</sup> times as often as any other.
* 64-bit outputs are exactly uniformly distributed: each possible output will occur 
  2<sup>64</sup>(2<sup>128</sup> - 1)(2<sup>127</sup> - 1) times in each SIMD lane during a full cycle.
* Can be created with a seed of any length.
* The initial identity and state are derived from the seed using a Feistel permutation. A 2048-bit seed should make all
  but one in 10<sup>111</sup> valid states possible, and a 2100-bit seed should make all valid states possible.
* The seeding function ensures no sub-generator will have the same state in two different SIMD lanes.
* `fork()` and `fork_with_domain_separation()` derive a statistically independent state from the current state and then
  update the parent PRNG's state.
* Within each lane, the mutable-state bits form a single cycle.
* The mixing function uses SIMD-lane-specific constants, so it will not generate closely related output in different 
  lanes even when those lanes have a similar internal state.
* Runs in 0.6 cycles per byte on Ubuntu with AVX2, faster than ChaCha12Rng.
* Byte-sequence entropy measurements (based on 16 GiB from an instance produced by 
  `TripleMixPrng::<NotReproducible>::almost_all_zeroes_state()` on an AVX2 CPU, calculated using 
  https://github.com/Pr0methean/EntroPy) are:
  | Entropy measure   | Value (bits/byte)     |
  |-------------------|-----------------------|
  | 0th-order H0      | 7.999 999 989 499 129 |
  | 1st-order H1\|0   | 7.999 997 311 401 072 |
  | 2nd-order H2\|1,0 | 7.999 298 213 959 470 |
* Passes PractRand 0.96 for at least 32 TiB (tested with 10 seeds).