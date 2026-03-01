TripleMixPrng
=============

This is a vectorized pseudorandom number generator that combines an instance of xoroshiro128, TinyMT64 and a 
128-bit linear congruential generator (LCG) in each of 4 SIMD lanes. It has the following properties:

* The output block size is 64 bytes (8 u64's).
* The state size is 256 bytes: 508 bits of identity, 1532 bits of mutable state, 8 bits of overhead.
* The period is 2<sup>128</sup>(2<sup>128</sup> - 1)(2<sup>127</sup> - 1) blocks, because the period of the LCG is
  2<sup>128</sup>, the period of the TinyMT64 is 2<sup>127</sup> - 1, and the period of the xoroshiro is 
  2<sup>128</sup> - 1, and those three periods are coprime.
* 64-bit outputs are exactly uniformly distributed: each possible output will occur 
  2<sup>64</sup>(2<sup>128</sup> - 1)(2<sup>127</sup> - 1) times in each SIMD lane during a full cycle.
* Within each lane, the mutable-state bits form a single cycle.
* The mixing function uses SIMD-lane-specific constants, so it will not generate closely related output in different 
  lanes even when those lanes have a similar internal state.
* Seeding uses SHA3-512 with TripleMixPrng-specific and lane-specific constant inputs and a seed that is ideally 256
  bytes but can be any length.
* The seeding function ensures no sub-generator will have the same state in two different SIMD lanes.
* Runs faster on AVX2 than ChaCha12Rng for both `fill_bytes` (measured on a 1MiB output) and `next_u64`.
* Byte-sequence entropy measurements (based on 16 GiB from the instance produced by 
  `TripleMixPrng::<CrossPlatform>::almost_all_zeroes_state()`) are:
  | Metric                           | Value                           |
  |----------------------------------|---------------------------------|
  | 0th-order Shannon entropy H0     | 7.999 999 988 300 997 bits/byte |
  | 1st-order Shannon entropy H1|0   | 7.999 997 273 867 576 bits/byte |
  | 2nd-order Shannon entropy H2|1,0 | 7.999 297 833 265 533 bits/byte |
  | Hurst exponent                   | 0.501 811 043 428 000           |
* Passes PractRand 0.96 for at least 32 TiB (tested with 4 seeds) and with `-tf 2` option for at least 64 GiB (tested
  with 32 seeds).