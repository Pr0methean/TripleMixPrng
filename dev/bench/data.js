window.BENCHMARK_DATA = {
  "lastUpdate": 1772601337390,
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
        "date": 1772601332775,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 849499,
            "range": "± 25045",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 845517,
            "range": "± 20842",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 850633,
            "range": "± 15038",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 856121,
            "range": "± 25742",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 986170,
            "range": "± 29151",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 986388,
            "range": "± 27832",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 847429,
            "range": "± 8129",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 987465,
            "range": "± 21575",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 986030,
            "range": "± 24583",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 849958,
            "range": "± 23374",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 985476,
            "range": "± 17136",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 986230,
            "range": "± 29976",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 847734,
            "range": "± 18425",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 986189,
            "range": "± 12459",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 989312,
            "range": "± 33631",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 847393,
            "range": "± 8192",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 992367,
            "range": "± 29327",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 986015,
            "range": "± 21029",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 854249,
            "range": "± 26779",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 987327,
            "range": "± 43568",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 998129,
            "range": "± 35408",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 850387,
            "range": "± 80429",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 986551,
            "range": "± 24330",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 985275,
            "range": "± 12883",
            "unit": "cycles/iter"
          },
          {
            "name": "next_u64/TripleMixPrng",
            "value": 7,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 7,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 7,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/8",
            "value": 9354,
            "range": "± 422",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 9285,
            "range": "± 346",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 9313,
            "range": "± 397",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 9299,
            "range": "± 332",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 13553,
            "range": "± 631",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 10316,
            "range": "± 342",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 12634,
            "range": "± 540",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 11316,
            "range": "± 291",
            "unit": "cycles/iter"
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
        "date": 1772601330176,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 643201,
            "range": "± 13084",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 629215,
            "range": "± 15392",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 629430,
            "range": "± 10269",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 641914,
            "range": "± 8777",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581770,
            "range": "± 2411",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 582000,
            "range": "± 46371",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 642426,
            "range": "± 10324",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581895,
            "range": "± 11632",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581710,
            "range": "± 13920",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 641968,
            "range": "± 18432",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 582167,
            "range": "± 29188",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581514,
            "range": "± 1147",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 641615,
            "range": "± 1325",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 584519,
            "range": "± 10741",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 582104,
            "range": "± 13248",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 642026,
            "range": "± 22108",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581825,
            "range": "± 8975",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581796,
            "range": "± 9839",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 641644,
            "range": "± 846",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581577,
            "range": "± 1215",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581496,
            "range": "± 27035",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 642206,
            "range": "± 21329",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 582021,
            "range": "± 8357",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581919,
            "range": "± 9767",
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
            "value": 2340,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 2335,
            "range": "± 202",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 2319,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 2308,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 3369,
            "range": "± 63",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2573,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 3121,
            "range": "± 274",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 2888,
            "range": "± 155",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}