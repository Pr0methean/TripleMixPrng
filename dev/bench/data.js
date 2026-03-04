window.BENCHMARK_DATA = {
  "lastUpdate": 1772603068984,
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
        "date": 1772601341931,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 615343,
            "range": "± 14279",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 615552,
            "range": "± 180711",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 616652,
            "range": "± 28983",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 617277,
            "range": "± 21431",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 636572,
            "range": "± 7777",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 642303,
            "range": "± 51710",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 619992,
            "range": "± 18661",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 636803,
            "range": "± 21370",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 654494,
            "range": "± 46076",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 621912,
            "range": "± 31801",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 634961,
            "range": "± 23650",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 635584,
            "range": "± 7973",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 621023,
            "range": "± 24793",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 637868,
            "range": "± 11486",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 638738,
            "range": "± 18442",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 633163,
            "range": "± 57234",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 668550,
            "range": "± 64847",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 668189,
            "range": "± 48053",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 645187,
            "range": "± 35639",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 636370,
            "range": "± 8840",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 636448,
            "range": "± 28561",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 619784,
            "range": "± 20511",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 637249,
            "range": "± 8264",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 636172,
            "range": "± 10806",
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
            "value": 5,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 5,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/8",
            "value": 23136,
            "range": "± 1291",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 23691,
            "range": "± 2127",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 23071,
            "range": "± 183",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 23087,
            "range": "± 108",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 34342,
            "range": "± 333",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 25728,
            "range": "± 177",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 31513,
            "range": "± 485",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 28843,
            "range": "± 595",
            "unit": "cycles/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4961925+Pr0methean@users.noreply.github.com",
            "name": "Chris Hennick",
            "username": "Pr0methean"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35d5bbf8ff049a498ae4ad2d46a03cfeff55f54e",
          "message": "Enable benchmarks in CI (#9)\n\n* Set up benchmarks in CI, using `criterion-hypothesis`\n\n* Fix criterion-hypothesis invocation\n\n* Fix: add baseline fetch, and separate unit tests and benchmarks as different workflows\n\n* Fix: remove explicit build since criterion-hypothesis rebuilds it\n\n* Fix? Fewer warmup_iterations, smaller sample_size, longer harness_timeout_ms\n\n* Enable verbose output to diagnose failure\n\n* Enable benchmarking on all OSs\n\n* Fix? Try a different network port\n\n* Fix: criterion-cycles-per-byte doesn't work on MacOS aarch64\n\n* Enable aarch64 Linux and Windows benchmarking\n\n* Fix: drop `criterion-cycles-per-byte` dep on targets where we can't use it\n\n* Fix line continuation on Windows, disable fail-fast\n\n* Fix? Increase harness-start timeout to 10 minutes\n\n* Temporarily disable builds on MacOS/aarch64 & Win/aarch64\n\n* Enable harness-output to diagnose failure\n\n* Increase harness timeout to 1 hour\n\nMay be taking longer due to the large test matrix.\n\n* Fix? Restore ThreadRng benchmarks so we can't time out waiting for them\n\n* Make config explicit for non-cpb targets\n\n* Fix: revert a branch exclusion that won't help\n\n* Fix: \"git fetch origin HEAD~1\" doesn't work, so use fetch-depth instead\n\n* Fix? Use `github-action-benchmark` instead of `criterion-hypothesis`\n\n* Fix: checkout step was missing\n\n* Fix? May need output-format bencher\n\n* Enable all OSs, since we no longer fail without a working baseline\n\n* Fix: work around https://github.com/rust-lang/rust/issues/47241\n\n* Fix: can't use cpb on aarch64, even on Linux, without access to install a custom kernel module\n\n* Delete .criterion-hypothesis.toml\n\n* Revert \"Fix? Restore ThreadRng benchmarks so we can't time out waiting for them\"\n\nThis reverts commit 1bd770c779f870e0de84380f972a0df6c783a0c1.\n\n* Fix: benchmark job needs extra permissions to upload results",
          "timestamp": "2026-03-03T21:20:50-08:00",
          "tree_id": "a03d1fa46ce6a5cfde3a6ba9669c7125ecb29da5",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/35d5bbf8ff049a498ae4ad2d46a03cfeff55f54e"
        },
        "date": 1772602106251,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 405259,
            "range": "± 67855",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 384501,
            "range": "± 25328",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 391285,
            "range": "± 49380",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 387043,
            "range": "± 91671",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 418163,
            "range": "± 111848",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 387155,
            "range": "± 33442",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 404426,
            "range": "± 61549",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 385542,
            "range": "± 76826",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 386893,
            "range": "± 30520",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 391687,
            "range": "± 72375",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 407623,
            "range": "± 68705",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 449650,
            "range": "± 88348",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 383773,
            "range": "± 33723",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 384853,
            "range": "± 19942",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 401159,
            "range": "± 37568",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 385420,
            "range": "± 59382",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 388109,
            "range": "± 29465",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 385339,
            "range": "± 18452",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 430279,
            "range": "± 62799",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 388859,
            "range": "± 32271",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 384553,
            "range": "± 5853",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 437600,
            "range": "± 52846",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 384536,
            "range": "± 8977",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 396288,
            "range": "± 30003",
            "unit": "ns/iter"
          },
          {
            "name": "next_u64/TripleMixPrng",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/8",
            "value": 2013,
            "range": "± 279",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 2184,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 2010,
            "range": "± 86",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 2292,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 2941,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2338,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 2720,
            "range": "± 330",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 2628,
            "range": "± 619",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4961925+Pr0methean@users.noreply.github.com",
            "name": "Chris Hennick",
            "username": "Pr0methean"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35d5bbf8ff049a498ae4ad2d46a03cfeff55f54e",
          "message": "Enable benchmarks in CI (#9)\n\n* Set up benchmarks in CI, using `criterion-hypothesis`\n\n* Fix criterion-hypothesis invocation\n\n* Fix: add baseline fetch, and separate unit tests and benchmarks as different workflows\n\n* Fix: remove explicit build since criterion-hypothesis rebuilds it\n\n* Fix? Fewer warmup_iterations, smaller sample_size, longer harness_timeout_ms\n\n* Enable verbose output to diagnose failure\n\n* Enable benchmarking on all OSs\n\n* Fix? Try a different network port\n\n* Fix: criterion-cycles-per-byte doesn't work on MacOS aarch64\n\n* Enable aarch64 Linux and Windows benchmarking\n\n* Fix: drop `criterion-cycles-per-byte` dep on targets where we can't use it\n\n* Fix line continuation on Windows, disable fail-fast\n\n* Fix? Increase harness-start timeout to 10 minutes\n\n* Temporarily disable builds on MacOS/aarch64 & Win/aarch64\n\n* Enable harness-output to diagnose failure\n\n* Increase harness timeout to 1 hour\n\nMay be taking longer due to the large test matrix.\n\n* Fix? Restore ThreadRng benchmarks so we can't time out waiting for them\n\n* Make config explicit for non-cpb targets\n\n* Fix: revert a branch exclusion that won't help\n\n* Fix: \"git fetch origin HEAD~1\" doesn't work, so use fetch-depth instead\n\n* Fix? Use `github-action-benchmark` instead of `criterion-hypothesis`\n\n* Fix: checkout step was missing\n\n* Fix? May need output-format bencher\n\n* Enable all OSs, since we no longer fail without a working baseline\n\n* Fix: work around https://github.com/rust-lang/rust/issues/47241\n\n* Fix: can't use cpb on aarch64, even on Linux, without access to install a custom kernel module\n\n* Delete .criterion-hypothesis.toml\n\n* Revert \"Fix? Restore ThreadRng benchmarks so we can't time out waiting for them\"\n\nThis reverts commit 1bd770c779f870e0de84380f972a0df6c783a0c1.\n\n* Fix: benchmark job needs extra permissions to upload results",
          "timestamp": "2026-03-03T21:20:50-08:00",
          "tree_id": "a03d1fa46ce6a5cfde3a6ba9669c7125ecb29da5",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/35d5bbf8ff049a498ae4ad2d46a03cfeff55f54e"
        },
        "date": 1772602126726,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 636435,
            "range": "± 765",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 630066,
            "range": "± 831",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 630249,
            "range": "± 649",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 636357,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 578965,
            "range": "± 788",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 578223,
            "range": "± 736",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 636289,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579118,
            "range": "± 610",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 578934,
            "range": "± 586",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 636383,
            "range": "± 645",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579054,
            "range": "± 757",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 578145,
            "range": "± 638",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 636227,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579274,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 578989,
            "range": "± 701",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 636323,
            "range": "± 522",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579267,
            "range": "± 631",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 578504,
            "range": "± 637",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 636306,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579229,
            "range": "± 644",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 579073,
            "range": "± 606",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 636361,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580266,
            "range": "± 517",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 579178,
            "range": "± 603",
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 2294,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 2289,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 3343,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2567,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 3097,
            "range": "± 0",
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
            "email": "4961925+Pr0methean@users.noreply.github.com",
            "name": "Chris Hennick",
            "username": "Pr0methean"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35d5bbf8ff049a498ae4ad2d46a03cfeff55f54e",
          "message": "Enable benchmarks in CI (#9)\n\n* Set up benchmarks in CI, using `criterion-hypothesis`\n\n* Fix criterion-hypothesis invocation\n\n* Fix: add baseline fetch, and separate unit tests and benchmarks as different workflows\n\n* Fix: remove explicit build since criterion-hypothesis rebuilds it\n\n* Fix? Fewer warmup_iterations, smaller sample_size, longer harness_timeout_ms\n\n* Enable verbose output to diagnose failure\n\n* Enable benchmarking on all OSs\n\n* Fix? Try a different network port\n\n* Fix: criterion-cycles-per-byte doesn't work on MacOS aarch64\n\n* Enable aarch64 Linux and Windows benchmarking\n\n* Fix: drop `criterion-cycles-per-byte` dep on targets where we can't use it\n\n* Fix line continuation on Windows, disable fail-fast\n\n* Fix? Increase harness-start timeout to 10 minutes\n\n* Temporarily disable builds on MacOS/aarch64 & Win/aarch64\n\n* Enable harness-output to diagnose failure\n\n* Increase harness timeout to 1 hour\n\nMay be taking longer due to the large test matrix.\n\n* Fix? Restore ThreadRng benchmarks so we can't time out waiting for them\n\n* Make config explicit for non-cpb targets\n\n* Fix: revert a branch exclusion that won't help\n\n* Fix: \"git fetch origin HEAD~1\" doesn't work, so use fetch-depth instead\n\n* Fix? Use `github-action-benchmark` instead of `criterion-hypothesis`\n\n* Fix: checkout step was missing\n\n* Fix? May need output-format bencher\n\n* Enable all OSs, since we no longer fail without a working baseline\n\n* Fix: work around https://github.com/rust-lang/rust/issues/47241\n\n* Fix: can't use cpb on aarch64, even on Linux, without access to install a custom kernel module\n\n* Delete .criterion-hypothesis.toml\n\n* Revert \"Fix? Restore ThreadRng benchmarks so we can't time out waiting for them\"\n\nThis reverts commit 1bd770c779f870e0de84380f972a0df6c783a0c1.\n\n* Fix: benchmark job needs extra permissions to upload results",
          "timestamp": "2026-03-03T21:20:50-08:00",
          "tree_id": "a03d1fa46ce6a5cfde3a6ba9669c7125ecb29da5",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/35d5bbf8ff049a498ae4ad2d46a03cfeff55f54e"
        },
        "date": 1772602154207,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 828278,
            "range": "± 966",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 795810,
            "range": "± 1225",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 795753,
            "range": "± 6619",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 829089,
            "range": "± 26078",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 852201,
            "range": "± 1580",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 852191,
            "range": "± 1834",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 829129,
            "range": "± 12275",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 852257,
            "range": "± 1659",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 852170,
            "range": "± 1394",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 829157,
            "range": "± 1915",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 851853,
            "range": "± 1185",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 852190,
            "range": "± 2041",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 829087,
            "range": "± 1380",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 852253,
            "range": "± 9681",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 852245,
            "range": "± 1100",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 829329,
            "range": "± 8827",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 852925,
            "range": "± 4857",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 851932,
            "range": "± 18963",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 828936,
            "range": "± 1312",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 851843,
            "range": "± 13993",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 852017,
            "range": "± 5560",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 828379,
            "range": "± 1628",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 851304,
            "range": "± 2610",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 851694,
            "range": "± 1190",
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
            "value": 6804,
            "range": "± 15",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 6797,
            "range": "± 28",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 6796,
            "range": "± 211",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 6799,
            "range": "± 22",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 9850,
            "range": "± 109",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 7550,
            "range": "± 17",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 9165,
            "range": "± 24",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 8402,
            "range": "± 998",
            "unit": "cycles/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4961925+Pr0methean@users.noreply.github.com",
            "name": "Chris Hennick",
            "username": "Pr0methean"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35d5bbf8ff049a498ae4ad2d46a03cfeff55f54e",
          "message": "Enable benchmarks in CI (#9)\n\n* Set up benchmarks in CI, using `criterion-hypothesis`\n\n* Fix criterion-hypothesis invocation\n\n* Fix: add baseline fetch, and separate unit tests and benchmarks as different workflows\n\n* Fix: remove explicit build since criterion-hypothesis rebuilds it\n\n* Fix? Fewer warmup_iterations, smaller sample_size, longer harness_timeout_ms\n\n* Enable verbose output to diagnose failure\n\n* Enable benchmarking on all OSs\n\n* Fix? Try a different network port\n\n* Fix: criterion-cycles-per-byte doesn't work on MacOS aarch64\n\n* Enable aarch64 Linux and Windows benchmarking\n\n* Fix: drop `criterion-cycles-per-byte` dep on targets where we can't use it\n\n* Fix line continuation on Windows, disable fail-fast\n\n* Fix? Increase harness-start timeout to 10 minutes\n\n* Temporarily disable builds on MacOS/aarch64 & Win/aarch64\n\n* Enable harness-output to diagnose failure\n\n* Increase harness timeout to 1 hour\n\nMay be taking longer due to the large test matrix.\n\n* Fix? Restore ThreadRng benchmarks so we can't time out waiting for them\n\n* Make config explicit for non-cpb targets\n\n* Fix: revert a branch exclusion that won't help\n\n* Fix: \"git fetch origin HEAD~1\" doesn't work, so use fetch-depth instead\n\n* Fix? Use `github-action-benchmark` instead of `criterion-hypothesis`\n\n* Fix: checkout step was missing\n\n* Fix? May need output-format bencher\n\n* Enable all OSs, since we no longer fail without a working baseline\n\n* Fix: work around https://github.com/rust-lang/rust/issues/47241\n\n* Fix: can't use cpb on aarch64, even on Linux, without access to install a custom kernel module\n\n* Delete .criterion-hypothesis.toml\n\n* Revert \"Fix? Restore ThreadRng benchmarks so we can't time out waiting for them\"\n\nThis reverts commit 1bd770c779f870e0de84380f972a0df6c783a0c1.\n\n* Fix: benchmark job needs extra permissions to upload results",
          "timestamp": "2026-03-03T21:20:50-08:00",
          "tree_id": "a03d1fa46ce6a5cfde3a6ba9669c7125ecb29da5",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/35d5bbf8ff049a498ae4ad2d46a03cfeff55f54e"
        },
        "date": 1772602184038,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 840070,
            "range": "± 95336",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 837274,
            "range": "± 35115",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 847982,
            "range": "± 38892",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 850917,
            "range": "± 86800",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 971825,
            "range": "± 156119",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 981749,
            "range": "± 219137",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 843588,
            "range": "± 25870",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1002344,
            "range": "± 54653",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 969208,
            "range": "± 43361",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 834627,
            "range": "± 24783",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 972226,
            "range": "± 107234",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 966256,
            "range": "± 28743",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 833603,
            "range": "± 13923",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 968566,
            "range": "± 83657",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 976810,
            "range": "± 46850",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 836120,
            "range": "± 29002",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 970457,
            "range": "± 54937",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 972663,
            "range": "± 89947",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 839702,
            "range": "± 27145",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 966223,
            "range": "± 35767",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 965435,
            "range": "± 36440",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 832920,
            "range": "± 17695",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 967812,
            "range": "± 34884",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 968598,
            "range": "± 33115",
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
            "value": 9044,
            "range": "± 337",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 8973,
            "range": "± 255",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 8996,
            "range": "± 386",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 9122,
            "range": "± 1188",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 13146,
            "range": "± 666",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 10355,
            "range": "± 500",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 12361,
            "range": "± 1520",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 11201,
            "range": "± 424",
            "unit": "cycles/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4961925+Pr0methean@users.noreply.github.com",
            "name": "Chris Hennick",
            "username": "Pr0methean"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35d5bbf8ff049a498ae4ad2d46a03cfeff55f54e",
          "message": "Enable benchmarks in CI (#9)\n\n* Set up benchmarks in CI, using `criterion-hypothesis`\n\n* Fix criterion-hypothesis invocation\n\n* Fix: add baseline fetch, and separate unit tests and benchmarks as different workflows\n\n* Fix: remove explicit build since criterion-hypothesis rebuilds it\n\n* Fix? Fewer warmup_iterations, smaller sample_size, longer harness_timeout_ms\n\n* Enable verbose output to diagnose failure\n\n* Enable benchmarking on all OSs\n\n* Fix? Try a different network port\n\n* Fix: criterion-cycles-per-byte doesn't work on MacOS aarch64\n\n* Enable aarch64 Linux and Windows benchmarking\n\n* Fix: drop `criterion-cycles-per-byte` dep on targets where we can't use it\n\n* Fix line continuation on Windows, disable fail-fast\n\n* Fix? Increase harness-start timeout to 10 minutes\n\n* Temporarily disable builds on MacOS/aarch64 & Win/aarch64\n\n* Enable harness-output to diagnose failure\n\n* Increase harness timeout to 1 hour\n\nMay be taking longer due to the large test matrix.\n\n* Fix? Restore ThreadRng benchmarks so we can't time out waiting for them\n\n* Make config explicit for non-cpb targets\n\n* Fix: revert a branch exclusion that won't help\n\n* Fix: \"git fetch origin HEAD~1\" doesn't work, so use fetch-depth instead\n\n* Fix? Use `github-action-benchmark` instead of `criterion-hypothesis`\n\n* Fix: checkout step was missing\n\n* Fix? May need output-format bencher\n\n* Enable all OSs, since we no longer fail without a working baseline\n\n* Fix: work around https://github.com/rust-lang/rust/issues/47241\n\n* Fix: can't use cpb on aarch64, even on Linux, without access to install a custom kernel module\n\n* Delete .criterion-hypothesis.toml\n\n* Revert \"Fix? Restore ThreadRng benchmarks so we can't time out waiting for them\"\n\nThis reverts commit 1bd770c779f870e0de84380f972a0df6c783a0c1.\n\n* Fix: benchmark job needs extra permissions to upload results",
          "timestamp": "2026-03-03T21:20:50-08:00",
          "tree_id": "a03d1fa46ce6a5cfde3a6ba9669c7125ecb29da5",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/35d5bbf8ff049a498ae4ad2d46a03cfeff55f54e"
        },
        "date": 1772602190854,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 642268,
            "range": "± 2481",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 629144,
            "range": "± 3914",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 632575,
            "range": "± 9083",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 642607,
            "range": "± 9920",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 582656,
            "range": "± 17539",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 582585,
            "range": "± 15015",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 641997,
            "range": "± 10025",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581592,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581525,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 642155,
            "range": "± 58836",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 582702,
            "range": "± 15631",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581941,
            "range": "± 12199",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 642194,
            "range": "± 16051",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581411,
            "range": "± 10955",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581954,
            "range": "± 35331",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 641665,
            "range": "± 1034",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581442,
            "range": "± 685",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 583948,
            "range": "± 10972",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 642095,
            "range": "± 16739",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581945,
            "range": "± 10038",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 582216,
            "range": "± 10022",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 641898,
            "range": "± 12604",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581309,
            "range": "± 833",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581971,
            "range": "± 648",
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
            "value": 2341,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 2328,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 2318,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 2304,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 3368,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2571,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 3126,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 2888,
            "range": "± 75",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "4961925+Pr0methean@users.noreply.github.com",
            "name": "Chris Hennick",
            "username": "Pr0methean"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35d5bbf8ff049a498ae4ad2d46a03cfeff55f54e",
          "message": "Enable benchmarks in CI (#9)\n\n* Set up benchmarks in CI, using `criterion-hypothesis`\n\n* Fix criterion-hypothesis invocation\n\n* Fix: add baseline fetch, and separate unit tests and benchmarks as different workflows\n\n* Fix: remove explicit build since criterion-hypothesis rebuilds it\n\n* Fix? Fewer warmup_iterations, smaller sample_size, longer harness_timeout_ms\n\n* Enable verbose output to diagnose failure\n\n* Enable benchmarking on all OSs\n\n* Fix? Try a different network port\n\n* Fix: criterion-cycles-per-byte doesn't work on MacOS aarch64\n\n* Enable aarch64 Linux and Windows benchmarking\n\n* Fix: drop `criterion-cycles-per-byte` dep on targets where we can't use it\n\n* Fix line continuation on Windows, disable fail-fast\n\n* Fix? Increase harness-start timeout to 10 minutes\n\n* Temporarily disable builds on MacOS/aarch64 & Win/aarch64\n\n* Enable harness-output to diagnose failure\n\n* Increase harness timeout to 1 hour\n\nMay be taking longer due to the large test matrix.\n\n* Fix? Restore ThreadRng benchmarks so we can't time out waiting for them\n\n* Make config explicit for non-cpb targets\n\n* Fix: revert a branch exclusion that won't help\n\n* Fix: \"git fetch origin HEAD~1\" doesn't work, so use fetch-depth instead\n\n* Fix? Use `github-action-benchmark` instead of `criterion-hypothesis`\n\n* Fix: checkout step was missing\n\n* Fix? May need output-format bencher\n\n* Enable all OSs, since we no longer fail without a working baseline\n\n* Fix: work around https://github.com/rust-lang/rust/issues/47241\n\n* Fix: can't use cpb on aarch64, even on Linux, without access to install a custom kernel module\n\n* Delete .criterion-hypothesis.toml\n\n* Revert \"Fix? Restore ThreadRng benchmarks so we can't time out waiting for them\"\n\nThis reverts commit 1bd770c779f870e0de84380f972a0df6c783a0c1.\n\n* Fix: benchmark job needs extra permissions to upload results",
          "timestamp": "2026-03-03T21:20:50-08:00",
          "tree_id": "a03d1fa46ce6a5cfde3a6ba9669c7125ecb29da5",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/35d5bbf8ff049a498ae4ad2d46a03cfeff55f54e"
        },
        "date": 1772602224446,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 829333,
            "range": "± 4226",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 796224,
            "range": "± 3167",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 796527,
            "range": "± 3122",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 830196,
            "range": "± 4563",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 851386,
            "range": "± 4316",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 850629,
            "range": "± 5597",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 829881,
            "range": "± 3131",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 850962,
            "range": "± 4584",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 850861,
            "range": "± 4344",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 829971,
            "range": "± 5212",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 850439,
            "range": "± 6069",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 850751,
            "range": "± 5856",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 829912,
            "range": "± 3692",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 850897,
            "range": "± 6668",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 852452,
            "range": "± 13819",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 830978,
            "range": "± 5812",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 854318,
            "range": "± 6792",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 854615,
            "range": "± 153797",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 843066,
            "range": "± 66139",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 852860,
            "range": "± 6755",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 855916,
            "range": "± 4126",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 838941,
            "range": "± 13293",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 860734,
            "range": "± 19827",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 862662,
            "range": "± 30445",
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
            "value": 7033,
            "range": "± 95",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 6974,
            "range": "± 136",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 6944,
            "range": "± 522",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 6993,
            "range": "± 492",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 10059,
            "range": "± 158",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 8334,
            "range": "± 2393",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 10847,
            "range": "± 1830",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 10041,
            "range": "± 1725",
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
          "id": "6ec4fb613bf05e050199ed2c7d1cd15592869d31",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably",
          "timestamp": "2026-03-04T05:20:54Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/13/commits/6ec4fb613bf05e050199ed2c7d1cd15592869d31"
        },
        "date": 1772602257231,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 385833,
            "range": "± 8795",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 363981,
            "range": "± 12680",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 355731,
            "range": "± 10398",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 387931,
            "range": "± 17001",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 360595,
            "range": "± 15950",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 356584,
            "range": "± 4383",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 386868,
            "range": "± 11940",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 377966,
            "range": "± 10756",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 356761,
            "range": "± 3963",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 386488,
            "range": "± 10265",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 373191,
            "range": "± 6922",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 374010,
            "range": "± 11348",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 375444,
            "range": "± 5412",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 358147,
            "range": "± 10830",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 375893,
            "range": "± 8166",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 373609,
            "range": "± 7911",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 374199,
            "range": "± 9358",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 357511,
            "range": "± 10907",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 374378,
            "range": "± 10505",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 376111,
            "range": "± 21165",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 357229,
            "range": "± 6926",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 375935,
            "range": "± 9181",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 374826,
            "range": "± 12062",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 359381,
            "range": "± 8195",
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
            "value": 1855,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 2006,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 1862,
            "range": "± 79",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 1854,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 2921,
            "range": "± 131",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2079,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 2550,
            "range": "± 83",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 2504,
            "range": "± 44",
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
          "id": "6ec4fb613bf05e050199ed2c7d1cd15592869d31",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably",
          "timestamp": "2026-03-04T05:20:54Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/13/commits/6ec4fb613bf05e050199ed2c7d1cd15592869d31"
        },
        "date": 1772602273554,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 612911,
            "range": "± 5152",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 610303,
            "range": "± 2371",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 610228,
            "range": "± 2035",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 613248,
            "range": "± 1237",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 639141,
            "range": "± 2013",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 642064,
            "range": "± 2651",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 613304,
            "range": "± 1068",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 640452,
            "range": "± 3262",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 643391,
            "range": "± 4218",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 613869,
            "range": "± 745",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 640450,
            "range": "± 10468",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 643440,
            "range": "± 1258",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 614021,
            "range": "± 2706",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 639944,
            "range": "± 2764",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 643089,
            "range": "± 2348",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 613266,
            "range": "± 926",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 640205,
            "range": "± 1717",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 642214,
            "range": "± 2327",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 613046,
            "range": "± 5841",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 642210,
            "range": "± 2073",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 645768,
            "range": "± 2159",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 613414,
            "range": "± 1834",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 640273,
            "range": "± 2857",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 643030,
            "range": "± 2569",
            "unit": "cycles/iter"
          },
          {
            "name": "next_u64/TripleMixPrng",
            "value": 5,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 5,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 5,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/8",
            "value": 22780,
            "range": "± 20",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 22788,
            "range": "± 19",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 22774,
            "range": "± 18",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 22797,
            "range": "± 21",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 33869,
            "range": "± 42",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 25461,
            "range": "± 16",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 31087,
            "range": "± 23",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 28437,
            "range": "± 19",
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
          "id": "6ec4fb613bf05e050199ed2c7d1cd15592869d31",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably",
          "timestamp": "2026-03-04T05:20:54Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/13/commits/6ec4fb613bf05e050199ed2c7d1cd15592869d31"
        },
        "date": 1772602334854,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 645675,
            "range": "± 456",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 629628,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 629874,
            "range": "± 4586",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 645701,
            "range": "± 433",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581174,
            "range": "± 549",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581168,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 645889,
            "range": "± 358",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581144,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581390,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 645963,
            "range": "± 1045",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581166,
            "range": "± 412",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581189,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 645826,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581207,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581185,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 646077,
            "range": "± 1111",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581024,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581269,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 645808,
            "range": "± 350",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581295,
            "range": "± 590",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581364,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 645931,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581202,
            "range": "± 537",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581320,
            "range": "± 728",
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
            "value": 2297,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 2296,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 2290,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 3345,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2571,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 3099,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 2870,
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
          "id": "6ec4fb613bf05e050199ed2c7d1cd15592869d31",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably",
          "timestamp": "2026-03-04T05:20:54Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/13/commits/6ec4fb613bf05e050199ed2c7d1cd15592869d31"
        },
        "date": 1772602406386,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 833158,
            "range": "± 5977",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 802893,
            "range": "± 10958",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 802233,
            "range": "± 14198",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 831632,
            "range": "± 5393",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 845416,
            "range": "± 14513",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 845434,
            "range": "± 3266",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 836912,
            "range": "± 8275",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 850121,
            "range": "± 8379",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 852837,
            "range": "± 7719",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 836614,
            "range": "± 19990",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 849754,
            "range": "± 5093",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 859190,
            "range": "± 21125",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 839443,
            "range": "± 16761",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 850883,
            "range": "± 15901",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 855467,
            "range": "± 19131",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 837077,
            "range": "± 9501",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 851379,
            "range": "± 10047",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 854779,
            "range": "± 8793",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 855949,
            "range": "± 37640",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 861979,
            "range": "± 18135",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 864967,
            "range": "± 19608",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 851822,
            "range": "± 287701",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 850177,
            "range": "± 11709",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 851747,
            "range": "± 77805",
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
            "value": 7030,
            "range": "± 813",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 6916,
            "range": "± 35",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 6912,
            "range": "± 49",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 6999,
            "range": "± 437",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 10098,
            "range": "± 735",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 7734,
            "range": "± 214",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 9313,
            "range": "± 663",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 8545,
            "range": "± 55",
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
          "id": "6ec4fb613bf05e050199ed2c7d1cd15592869d31",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably",
          "timestamp": "2026-03-04T05:20:54Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/13/commits/6ec4fb613bf05e050199ed2c7d1cd15592869d31"
        },
        "date": 1772602451173,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 644862,
            "range": "± 2803",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 630687,
            "range": "± 8701",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 629000,
            "range": "± 8181",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 645235,
            "range": "± 8645",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580102,
            "range": "± 8761",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580376,
            "range": "± 26566",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 644727,
            "range": "± 9051",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579795,
            "range": "± 1459",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 582156,
            "range": "± 9674",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 644850,
            "range": "± 10746",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580152,
            "range": "± 11209",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580227,
            "range": "± 12139",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 644893,
            "range": "± 13596",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580018,
            "range": "± 737",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 579846,
            "range": "± 684",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 644523,
            "range": "± 31685",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580801,
            "range": "± 10779",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580171,
            "range": "± 13483",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 644797,
            "range": "± 15398",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580071,
            "range": "± 8396",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580363,
            "range": "± 23966",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 644389,
            "range": "± 801",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579684,
            "range": "± 1280",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 582847,
            "range": "± 10164",
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
            "value": 2319,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 2330,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 2321,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 2309,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 3365,
            "range": "± 360",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2574,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 3120,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 2891,
            "range": "± 51",
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
          "id": "6ec4fb613bf05e050199ed2c7d1cd15592869d31",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably",
          "timestamp": "2026-03-04T05:20:54Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/13/commits/6ec4fb613bf05e050199ed2c7d1cd15592869d31"
        },
        "date": 1772602495310,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 1163587,
            "range": "± 337334",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1101396,
            "range": "± 614629",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1063749,
            "range": "± 311143",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 1136279,
            "range": "± 447291",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1219584,
            "range": "± 375271",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1378828,
            "range": "± 954410",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 1309830,
            "range": "± 1695075",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1485167,
            "range": "± 621588",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1192595,
            "range": "± 1492622",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 1202244,
            "range": "± 592096",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1243676,
            "range": "± 985779",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1091297,
            "range": "± 138006",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 1027884,
            "range": "± 75249",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1039274,
            "range": "± 131311",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1037263,
            "range": "± 50013",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 872042,
            "range": "± 33966",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 964822,
            "range": "± 64175",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 954921,
            "range": "± 19058",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 860863,
            "range": "± 163509",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 953571,
            "range": "± 542391",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 954182,
            "range": "± 29862",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 856765,
            "range": "± 93704",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 953698,
            "range": "± 35414",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 952648,
            "range": "± 15753",
            "unit": "cycles/iter"
          },
          {
            "name": "next_u64/TripleMixPrng",
            "value": 7,
            "range": "± 1",
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
            "value": 8984,
            "range": "± 1592",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 8938,
            "range": "± 192",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 8954,
            "range": "± 210",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 9052,
            "range": "± 1025",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 12994,
            "range": "± 149",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 10097,
            "range": "± 3103",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 12295,
            "range": "± 567",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 10886,
            "range": "± 212",
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
          "id": "7d617ad28f4154845d78d8335781a50766807dc0",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably",
          "timestamp": "2026-03-04T05:20:54Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/13/commits/7d617ad28f4154845d78d8335781a50766807dc0"
        },
        "date": 1772603026957,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 385821,
            "range": "± 13316",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 368591,
            "range": "± 11740",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 386980,
            "range": "± 45044",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 378888,
            "range": "± 14123",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 387881,
            "range": "± 40056",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 372551,
            "range": "± 14206",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 375705,
            "range": "± 11725",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 385894,
            "range": "± 17302",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 382270,
            "range": "± 21087",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 368656,
            "range": "± 21218",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 376439,
            "range": "± 10948",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 374808,
            "range": "± 8608",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 378500,
            "range": "± 11820",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 376029,
            "range": "± 15544",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 359229,
            "range": "± 10363",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 388150,
            "range": "± 20517",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 374647,
            "range": "± 11649",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 373032,
            "range": "± 50175",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 364257,
            "range": "± 22911",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 406704,
            "range": "± 23761",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 508602,
            "range": "± 67647",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 396441,
            "range": "± 69644",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 396594,
            "range": "± 37512",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 383151,
            "range": "± 29714",
            "unit": "ns/iter"
          },
          {
            "name": "next_u64/TripleMixPrng",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/8",
            "value": 2107,
            "range": "± 293",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 2037,
            "range": "± 194",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 2267,
            "range": "± 336",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 1994,
            "range": "± 119",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 2957,
            "range": "± 231",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2255,
            "range": "± 110",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 2868,
            "range": "± 322",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 2515,
            "range": "± 925",
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
          "id": "7d617ad28f4154845d78d8335781a50766807dc0",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably",
          "timestamp": "2026-03-04T05:20:54Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/13/commits/7d617ad28f4154845d78d8335781a50766807dc0"
        },
        "date": 1772603047222,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 645601,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 629812,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 629782,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 645587,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581183,
            "range": "± 540",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581096,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 645552,
            "range": "± 597",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581177,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581215,
            "range": "± 594",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 645554,
            "range": "± 535",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581035,
            "range": "± 562",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581161,
            "range": "± 469",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 645876,
            "range": "± 956",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581319,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581416,
            "range": "± 506",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 645850,
            "range": "± 584",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581233,
            "range": "± 488",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581171,
            "range": "± 430",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 645832,
            "range": "± 547",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581268,
            "range": "± 525",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581274,
            "range": "± 424",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 645890,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581229,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581286,
            "range": "± 520",
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
            "value": 2314,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 2296,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 2296,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 2289,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 3353,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2565,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 3099,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 2881,
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
          "id": "7d617ad28f4154845d78d8335781a50766807dc0",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably",
          "timestamp": "2026-03-04T05:20:54Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/13/commits/7d617ad28f4154845d78d8335781a50766807dc0"
        },
        "date": 1772603067918,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 828021,
            "range": "± 1031",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 797457,
            "range": "± 958",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 797421,
            "range": "± 1526",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 828672,
            "range": "± 1121",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 843745,
            "range": "± 726",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 843715,
            "range": "± 862",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 828845,
            "range": "± 885",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 843909,
            "range": "± 2882",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 843316,
            "range": "± 959",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 828737,
            "range": "± 784",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 843564,
            "range": "± 1383",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 843751,
            "range": "± 1260",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 828803,
            "range": "± 802",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 843570,
            "range": "± 1758",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 843300,
            "range": "± 1326",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 828900,
            "range": "± 5506",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 843334,
            "range": "± 823",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 843277,
            "range": "± 953",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 828832,
            "range": "± 933",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 843415,
            "range": "± 16894",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 843260,
            "range": "± 6881",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 828864,
            "range": "± 887",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 843879,
            "range": "± 880",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 843581,
            "range": "± 759",
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
            "value": 6795,
            "range": "± 11",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 6797,
            "range": "± 18",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 6798,
            "range": "± 23",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 6792,
            "range": "± 56",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 9828,
            "range": "± 19",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 7553,
            "range": "± 32",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 9161,
            "range": "± 211",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 8668,
            "range": "± 153",
            "unit": "cycles/iter"
          }
        ]
      }
    ]
  }
}