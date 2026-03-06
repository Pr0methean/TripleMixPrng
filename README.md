TripleMixPrng
=============

This is a vectorized pseudorandom number generator that combines, in each of 4 SIMD lanes, an instance of xoroshiro128,
TinyMT64 and a 128-bit linear congruential generator (LCG) in each of 4 SIMD lanes. It has the following properties:

* The output block size is 64 bytes (8 u64's).
* The state size is 256 bytes: 508 bits of identity, 1532 bits of mutable state, 8 bits of overhead.
* The period is 2<sup>128</sup>(2<sup>128</sup> - 1)(2<sup>127</sup> - 1) blocks, because the period of the LCG is
  2<sup>128</sup>, the period of the TinyMT64 is 2<sup>127</sup> - 1, and the period of the xoroshiro is 
  2<sup>128</sup> - 1, and those three periods are coprime.
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
* Runs faster on AVX2 than ChaCha12Rng for both `fill_bytes` (measured on a 1MiB output) and `next_u64`.
* Byte-sequence entropy measurements (based on 16 GiB from an instance produced by 
  `TripleMixPrng::<NotReproducible>::almost_all_zeroes_state()` on an AVX2 CPU, calculated using 
  https://github.com/Pr0methean/EntroPy) are:
  | Entropy measure   | Value (bits/byte)     |
  |-------------------|-----------------------|
  | 0th-order H0      | 7.999 999 989 642 104 |
  | 1st-order H1\|0   | 7.999 997 261 713 890 |
  | 2nd-order H2\|1,0 | 7.999 298 354 885 777 |
* Passes PractRand 0.96 for at least 32 TiB (tested with 7 seeds) and with `-tf 2` option for at least 64 GiB (tested
  with 32 seeds).