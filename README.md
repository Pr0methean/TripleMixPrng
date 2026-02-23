TripleMixPrng
=============

This is a vectorized pseudorandom number generator that combines xoroshiro128, TinyMT64 and a 
128-bit Weyl sequence. It has the following properties:

* The output block size is 1024 bits (16 u64's).
* The state size is 2048 bits: 508 bits of identity, 1532 bits of mutable state, 8 bits of overhead.
* The period is `(u128::MAX.into() * i128::MAX.into()) << 128` blocks, because it combines the following sequences and
  their periods are coprime:
  * A Weyl sequence with period 1<<128.
  * TinyMT64 with period 2^127-1.
  * Xoroshiro128 with period 2^128-1.
* 64-bit outputs are exactly uniformly distributed: each possible output will occur `(u128::MAX.into() * i128::MAX.into()) << 64`
  times in each SIMD lane during the period.
* Within each lane, the mutable-state bits form a single cycle.
* The mixing function uses SIMD-lane-specific constants, so it will not generate closely related output in different 
  lanes even when those lanes have the same internal state.
* Created using a 2048-bit seed; seeding uses SHAKE256 with multiple absorbs/squeezes to maximize the chance that
  every valid state corresponds to at least one seed.
* Runs faster than ChaCha12Rng for both 1MiB fill_bytes and next_u64.
* next_u64 takes about 2 ns.
* Byte-sequence entropy measurements (based on 16 GiB) are:
  H0:     7.999 999 990 249 275 bits/byte
  H1|0:   7.999 997 258 397 972 bits/byte
  H2|1,0: 7.999 298 556 343 092 bits/byte
  Hurst exponent: 0.502 072 493 667 979
* Passes PractRand 0.96 for at least 32 TiB (tested with 4 seeds) and with `-tf 2` option for at least 64 GiB (tested
  with 32 seeds).