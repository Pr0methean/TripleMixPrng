TripleMixPrng
=============

This is a vectorized pseudorandom number generator that combines xoroshiro128, TinyMT64 and a 
128-bit Weyl sequence. It has the following properties:

* The output block size is 1024 bits (16 u64's).
* The state size is 2048 bits: 508 bits of identity, 1532 bits of mutable state, 8 bits of overhead.
* The period is `(u128::MAX.into() * i128::MAX.into()) << 128` blocks. Within each lane, the mutable-state bits form a
  single cycle.
* Created using a 2048-bit seed; seeding uses SHAKE256 with multiple absorbs/squeezes to maximize the chance that
  every valid state corresponds to at least one seed.
* Speed is about 500 GiB/hour on one performance core of an Intel Core i9-14900K.
* Passes PractRand 0.96 for at least 4 TiB.