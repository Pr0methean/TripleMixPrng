window.BENCHMARK_DATA = {
  "lastUpdate": 1772601295719,
  "repoUrl": "https://github.com/Pr0methean/TripleMixPrng",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "name": "Pr0methean",
            "username": "Pr0methean"
          },
          "committer": {
            "name": "Pr0methean",
            "username": "Pr0methean"
          },
          "id": "6363cfb776ec34314b9cee97b4538acdfbe03820",
          "message": "Enable benchmarks in CI",
          "timestamp": "2026-03-03T22:00:33Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/9/commits/6363cfb776ec34314b9cee97b4538acdfbe03820"
        },
        "date": 1772601239501,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 367596,
            "range": "± 8675",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 386439,
            "range": "± 18718",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 360379,
            "range": "± 15386",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 356038,
            "range": "± 4391",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 386490,
            "range": "± 13606",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 375840,
            "range": "± 13570",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 356040,
            "range": "± 5412",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 385040,
            "range": "± 16411",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 374896,
            "range": "± 10328",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 376436,
            "range": "± 23929",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 375168,
            "range": "± 7277",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 359722,
            "range": "± 9112",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 375446,
            "range": "± 13063",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 372601,
            "range": "± 10726",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 376282,
            "range": "± 7092",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 356482,
            "range": "± 11120",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 374451,
            "range": "± 8937",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 380991,
            "range": "± 10764",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 373892,
            "range": "± 14058",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 361073,
            "range": "± 8590",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 387360,
            "range": "± 9835",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 386307,
            "range": "± 19740",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 357477,
            "range": "± 4551",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 386150,
            "range": "± 14625",
            "unit": "ns/iter"
          },
          {
            "name": "next_u64/TripleMixPrng",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/8",
            "value": 1925,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 1964,
            "range": "± 346",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 1940,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 1949,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 2814,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2172,
            "range": "± 47",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 2646,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 2325,
            "range": "± 33",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Pr0methean",
            "username": "Pr0methean"
          },
          "committer": {
            "name": "Pr0methean",
            "username": "Pr0methean"
          },
          "id": "6363cfb776ec34314b9cee97b4538acdfbe03820",
          "message": "Enable benchmarks in CI",
          "timestamp": "2026-03-03T22:00:33Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/9/commits/6363cfb776ec34314b9cee97b4538acdfbe03820"
        },
        "date": 1772601270771,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 635948,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 629567,
            "range": "± 1610",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 629712,
            "range": "± 3939",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 636059,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579505,
            "range": "± 768",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 578913,
            "range": "± 697",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 635936,
            "range": "± 526",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579456,
            "range": "± 801",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 578687,
            "range": "± 625",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 635990,
            "range": "± 442",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579781,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 578950,
            "range": "± 794",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 636258,
            "range": "± 620",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579853,
            "range": "± 680",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 579364,
            "range": "± 878",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 636115,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579496,
            "range": "± 585",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 578806,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 635946,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579529,
            "range": "± 575",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 578910,
            "range": "± 565",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 636036,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579745,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 578685,
            "range": "± 527",
            "unit": "ns/iter"
          },
          {
            "name": "next_u64/TripleMixPrng",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/8",
            "value": 2316,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 2293,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 2293,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 2288,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 3342,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2568,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 3098,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 2869,
            "range": "± 6",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Pr0methean",
            "username": "Pr0methean"
          },
          "committer": {
            "name": "Pr0methean",
            "username": "Pr0methean"
          },
          "id": "6363cfb776ec34314b9cee97b4538acdfbe03820",
          "message": "Enable benchmarks in CI",
          "timestamp": "2026-03-03T22:00:33Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/9/commits/6363cfb776ec34314b9cee97b4538acdfbe03820"
        },
        "date": 1772601295449,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 827391,
            "range": "± 2576",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 794788,
            "range": "± 1227",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 794786,
            "range": "± 8042",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 827960,
            "range": "± 634",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 851042,
            "range": "± 1787",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 850908,
            "range": "± 1356",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 828053,
            "range": "± 1515",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 851488,
            "range": "± 1673",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 851262,
            "range": "± 1699",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 827957,
            "range": "± 589",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 851421,
            "range": "± 1081",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 851374,
            "range": "± 1775",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 830258,
            "range": "± 3300",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 851425,
            "range": "± 1014",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 851388,
            "range": "± 3013",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 828061,
            "range": "± 579",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 851472,
            "range": "± 1213",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 851686,
            "range": "± 1642",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 828023,
            "range": "± 1470",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 851234,
            "range": "± 1176",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 850865,
            "range": "± 1072",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 827861,
            "range": "± 653",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 851122,
            "range": "± 1358",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 850977,
            "range": "± 2945",
            "unit": "cycles/iter"
          },
          {
            "name": "next_u64/TripleMixPrng",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/8",
            "value": 6796,
            "range": "± 17",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 6799,
            "range": "± 14",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 6799,
            "range": "± 72",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 6798,
            "range": "± 27",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 9843,
            "range": "± 23",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 7548,
            "range": "± 21",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 9168,
            "range": "± 152",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 8397,
            "range": "± 17",
            "unit": "cycles/iter"
          }
        ]
      }
    ]
  }
}