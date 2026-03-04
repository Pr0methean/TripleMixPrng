window.BENCHMARK_DATA = {
  "lastUpdate": 1772606265061,
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
        "date": 1772603126058,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 873331,
            "range": "± 29540",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 871855,
            "range": "± 37833",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 874578,
            "range": "± 70744",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 927811,
            "range": "± 158113",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1001030,
            "range": "± 50684",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 993491,
            "range": "± 73424",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 864906,
            "range": "± 29629",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1025624,
            "range": "± 725808",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 978269,
            "range": "± 68777",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 866672,
            "range": "± 39859",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 970965,
            "range": "± 45637",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 981696,
            "range": "± 41922",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 886115,
            "range": "± 40493",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 981097,
            "range": "± 51433",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 979564,
            "range": "± 39696",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 868319,
            "range": "± 30313",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 966130,
            "range": "± 37357",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 985263,
            "range": "± 46390",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 977514,
            "range": "± 181781",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 987207,
            "range": "± 70339",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1048599,
            "range": "± 67620",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 872671,
            "range": "± 181225",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 993689,
            "range": "± 76100",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 985361,
            "range": "± 45339",
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
            "value": 8,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/8",
            "value": 9250,
            "range": "± 1040",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 9335,
            "range": "± 668",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 9133,
            "range": "± 323",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 9270,
            "range": "± 611",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 13500,
            "range": "± 624",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 10439,
            "range": "± 702",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 13571,
            "range": "± 1184",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 11447,
            "range": "± 650",
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
        "date": 1772603141897,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 647821,
            "range": "± 29439",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 632407,
            "range": "± 13249",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 630509,
            "range": "± 57571",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 647716,
            "range": "± 37513",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580587,
            "range": "± 5965",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580604,
            "range": "± 5336",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 650330,
            "range": "± 10120",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581173,
            "range": "± 11723",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581938,
            "range": "± 9754",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 645706,
            "range": "± 10805",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581050,
            "range": "± 9684",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580275,
            "range": "± 2774",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 645308,
            "range": "± 1254",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581744,
            "range": "± 66469",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581485,
            "range": "± 180970",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 649262,
            "range": "± 62574",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581623,
            "range": "± 17233",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581314,
            "range": "± 10550",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 645809,
            "range": "± 52193",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581108,
            "range": "± 2073",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580593,
            "range": "± 976",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 646563,
            "range": "± 11291",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581204,
            "range": "± 29756",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580930,
            "range": "± 8673",
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
            "value": 2336,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 2315,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 2322,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 2309,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 3369,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2573,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 3120,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 2892,
            "range": "± 112",
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
        "date": 1772603152693,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 831601,
            "range": "± 12381",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 798632,
            "range": "± 12224",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 801340,
            "range": "± 19358",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 831461,
            "range": "± 7165",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 845566,
            "range": "± 4548",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 846299,
            "range": "± 4134",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 831649,
            "range": "± 33374",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 845981,
            "range": "± 4765",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 845510,
            "range": "± 6261",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 831751,
            "range": "± 8550",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 846186,
            "range": "± 5170",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 846092,
            "range": "± 4860",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 831652,
            "range": "± 9551",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 845034,
            "range": "± 5896",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 845194,
            "range": "± 5882",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 831227,
            "range": "± 18231",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 850086,
            "range": "± 7536",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 845230,
            "range": "± 3958",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 831087,
            "range": "± 3354",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 845278,
            "range": "± 14120",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 846737,
            "range": "± 9913",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 832330,
            "range": "± 5633",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 846105,
            "range": "± 11967",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 845297,
            "range": "± 16391",
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
            "value": 7176,
            "range": "± 427",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 7000,
            "range": "± 667",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 7803,
            "range": "± 1378",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 7732,
            "range": "± 902",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 10519,
            "range": "± 2805",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 7745,
            "range": "± 2243",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 9423,
            "range": "± 189",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 8593,
            "range": "± 246",
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
          "id": "89ab16cb9e72a2703368e70f6306a1408a46aa84",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably (#13)\n\n* Improve round 1 to pass test_mix_matrix more consistently\n\n* Tweak to use same operation count as the previous version\n\n* Tweak to reduce data dependencies within round 1\n\n* Tweak to further improve scores by changing some +'s to -'s\n\n* Reformat\n\n* Fix: benchmark workflow needs PR write permission to send results",
          "timestamp": "2026-03-03T21:47:38-08:00",
          "tree_id": "bd677f90268cdff4eea3eba2adfc6331af366f0d",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/89ab16cb9e72a2703368e70f6306a1408a46aa84"
        },
        "date": 1772603699968,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 390800,
            "range": "± 52067",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 400166,
            "range": "± 45070",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 392832,
            "range": "± 33071",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 403981,
            "range": "± 56769",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 431993,
            "range": "± 73631",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 438646,
            "range": "± 67280",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 382563,
            "range": "± 38680",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 382796,
            "range": "± 30619",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 385172,
            "range": "± 21746",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 374236,
            "range": "± 28138",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 385884,
            "range": "± 70099",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 393466,
            "range": "± 32880",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 387208,
            "range": "± 91688",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 396904,
            "range": "± 57870",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 390766,
            "range": "± 19096",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 402106,
            "range": "± 48103",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 386282,
            "range": "± 14999",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 382113,
            "range": "± 64448",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 387459,
            "range": "± 32322",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 387606,
            "range": "± 38567",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 395250,
            "range": "± 46670",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 384932,
            "range": "± 32260",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 435542,
            "range": "± 60792",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 385394,
            "range": "± 14016",
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
            "value": 1951,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 1973,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 1968,
            "range": "± 150",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 1860,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 2845,
            "range": "± 189",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2072,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 2572,
            "range": "± 104",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 2530,
            "range": "± 109",
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
          "id": "89ab16cb9e72a2703368e70f6306a1408a46aa84",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably (#13)\n\n* Improve round 1 to pass test_mix_matrix more consistently\n\n* Tweak to use same operation count as the previous version\n\n* Tweak to reduce data dependencies within round 1\n\n* Tweak to further improve scores by changing some +'s to -'s\n\n* Reformat\n\n* Fix: benchmark workflow needs PR write permission to send results",
          "timestamp": "2026-03-03T21:47:38-08:00",
          "tree_id": "bd677f90268cdff4eea3eba2adfc6331af366f0d",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/89ab16cb9e72a2703368e70f6306a1408a46aa84"
        },
        "date": 1772603730326,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 645504,
            "range": "± 579",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 629421,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 629838,
            "range": "± 3549",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 645599,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580700,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580940,
            "range": "± 426",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 645655,
            "range": "± 528",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581017,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581099,
            "range": "± 782",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 645689,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581069,
            "range": "± 651",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581129,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 645700,
            "range": "± 496",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581294,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581370,
            "range": "± 548",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 646053,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581383,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581339,
            "range": "± 628",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 645940,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581396,
            "range": "± 496",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581351,
            "range": "± 614",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 645906,
            "range": "± 621",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581275,
            "range": "± 518",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581192,
            "range": "± 923",
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
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 2296,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 2291,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 3344,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2570,
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
            "value": 2879,
            "range": "± 9",
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
          "id": "89ab16cb9e72a2703368e70f6306a1408a46aa84",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably (#13)\n\n* Improve round 1 to pass test_mix_matrix more consistently\n\n* Tweak to use same operation count as the previous version\n\n* Tweak to reduce data dependencies within round 1\n\n* Tweak to further improve scores by changing some +'s to -'s\n\n* Reformat\n\n* Fix: benchmark workflow needs PR write permission to send results",
          "timestamp": "2026-03-03T21:47:38-08:00",
          "tree_id": "bd677f90268cdff4eea3eba2adfc6331af366f0d",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/89ab16cb9e72a2703368e70f6306a1408a46aa84"
        },
        "date": 1772603756674,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 829166,
            "range": "± 2386",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 796745,
            "range": "± 1466",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 796531,
            "range": "± 4146",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 829148,
            "range": "± 988",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 842355,
            "range": "± 985",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 841833,
            "range": "± 1302",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 829061,
            "range": "± 1302",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 842244,
            "range": "± 3568",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 842478,
            "range": "± 1053",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 829273,
            "range": "± 1121",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 842450,
            "range": "± 26722",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 842348,
            "range": "± 1678",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 829280,
            "range": "± 1673",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 842441,
            "range": "± 1032",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 842402,
            "range": "± 946",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 829073,
            "range": "± 864",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 842379,
            "range": "± 1523",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 841810,
            "range": "± 803",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 828807,
            "range": "± 37604",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 841497,
            "range": "± 38409",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 842199,
            "range": "± 1041",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 829456,
            "range": "± 537",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 842608,
            "range": "± 922",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 842349,
            "range": "± 962",
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
            "value": 6801,
            "range": "± 69",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 6846,
            "range": "± 32",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 6802,
            "range": "± 29",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 6795,
            "range": "± 313",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 9831,
            "range": "± 163",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 7556,
            "range": "± 32",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 9163,
            "range": "± 31",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 8417,
            "range": "± 39",
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
          "id": "89ab16cb9e72a2703368e70f6306a1408a46aa84",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably (#13)\n\n* Improve round 1 to pass test_mix_matrix more consistently\n\n* Tweak to use same operation count as the previous version\n\n* Tweak to reduce data dependencies within round 1\n\n* Tweak to further improve scores by changing some +'s to -'s\n\n* Reformat\n\n* Fix: benchmark workflow needs PR write permission to send results",
          "timestamp": "2026-03-03T21:47:38-08:00",
          "tree_id": "bd677f90268cdff4eea3eba2adfc6331af366f0d",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/89ab16cb9e72a2703368e70f6306a1408a46aa84"
        },
        "date": 1772603790443,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 858351,
            "range": "± 10080",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 855734,
            "range": "± 20196",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 856807,
            "range": "± 33302",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 859325,
            "range": "± 18741",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 958241,
            "range": "± 9800",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 957093,
            "range": "± 11252",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 860502,
            "range": "± 9519",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 961229,
            "range": "± 12709",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 959592,
            "range": "± 9409",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 859471,
            "range": "± 8693",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 959495,
            "range": "± 21472",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 960227,
            "range": "± 12203",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 859333,
            "range": "± 7896",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 960034,
            "range": "± 10787",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 958428,
            "range": "± 11023",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 859344,
            "range": "± 10772",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 957864,
            "range": "± 26289",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 963297,
            "range": "± 36103",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 859834,
            "range": "± 10779",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 957621,
            "range": "± 8807",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 958521,
            "range": "± 13638",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 860456,
            "range": "± 10819",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 958013,
            "range": "± 10580",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 957901,
            "range": "± 11512",
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
            "value": 9069,
            "range": "± 593",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 8974,
            "range": "± 181",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 8985,
            "range": "± 144",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 9108,
            "range": "± 147",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 13105,
            "range": "± 270",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 9957,
            "range": "± 274",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 12224,
            "range": "± 298",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 10948,
            "range": "± 228",
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
          "id": "89ab16cb9e72a2703368e70f6306a1408a46aa84",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably (#13)\n\n* Improve round 1 to pass test_mix_matrix more consistently\n\n* Tweak to use same operation count as the previous version\n\n* Tweak to reduce data dependencies within round 1\n\n* Tweak to further improve scores by changing some +'s to -'s\n\n* Reformat\n\n* Fix: benchmark workflow needs PR write permission to send results",
          "timestamp": "2026-03-03T21:47:38-08:00",
          "tree_id": "bd677f90268cdff4eea3eba2adfc6331af366f0d",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/89ab16cb9e72a2703368e70f6306a1408a46aa84"
        },
        "date": 1772603796661,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 646025,
            "range": "± 11701",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 629638,
            "range": "± 12050",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 629530,
            "range": "± 4662",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 645145,
            "range": "± 1052",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 584889,
            "range": "± 140801",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580985,
            "range": "± 22285",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 645800,
            "range": "± 8945",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581079,
            "range": "± 11090",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580673,
            "range": "± 22726",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 645046,
            "range": "± 115422",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580140,
            "range": "± 1845",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580396,
            "range": "± 4731",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 646397,
            "range": "± 9624",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580879,
            "range": "± 11272",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580933,
            "range": "± 28378",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 645505,
            "range": "± 8590",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580757,
            "range": "± 33476",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580387,
            "range": "± 964",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 644940,
            "range": "± 1159",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 583040,
            "range": "± 18229",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580692,
            "range": "± 10444",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 645567,
            "range": "± 11369",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580656,
            "range": "± 15703",
            "unit": "ns/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580776,
            "range": "± 9674",
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
            "value": 2339,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 2320,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 2317,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 2311,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 3371,
            "range": "± 193",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 2598,
            "range": "± 210",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 3120,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 2890,
            "range": "± 7",
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
          "id": "89ab16cb9e72a2703368e70f6306a1408a46aa84",
          "message": "Improve mixing round 1 so test_mix_matrix and test_avalanche pass more reliably (#13)\n\n* Improve round 1 to pass test_mix_matrix more consistently\n\n* Tweak to use same operation count as the previous version\n\n* Tweak to reduce data dependencies within round 1\n\n* Tweak to further improve scores by changing some +'s to -'s\n\n* Reformat\n\n* Fix: benchmark workflow needs PR write permission to send results",
          "timestamp": "2026-03-03T21:47:38-08:00",
          "tree_id": "bd677f90268cdff4eea3eba2adfc6331af366f0d",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/89ab16cb9e72a2703368e70f6306a1408a46aa84"
        },
        "date": 1772603850164,
        "tool": "cargo",
        "benches": [
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 831392,
            "range": "± 7186",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 797971,
            "range": "± 17813",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 798227,
            "range": "± 13295",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 831752,
            "range": "± 11139",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 845695,
            "range": "± 7557",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 848417,
            "range": "± 9133",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 834419,
            "range": "± 6824",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 850036,
            "range": "± 6859",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 849625,
            "range": "± 28168",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 835218,
            "range": "± 5443",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 855128,
            "range": "± 11712",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 856386,
            "range": "± 57845",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 834013,
            "range": "± 8466",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 852050,
            "range": "± 11409",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 848590,
            "range": "± 7734",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 835580,
            "range": "± 6738",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 851065,
            "range": "± 7181",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 864919,
            "range": "± 81039",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 874331,
            "range": "± 18820",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 864882,
            "range": "± 18187",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 863753,
            "range": "± 229398",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 832580,
            "range": "± 6288",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 859600,
            "range": "± 82423",
            "unit": "cycles/iter"
          },
          {
            "name": "fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 847042,
            "range": "± 24893",
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
            "value": 6929,
            "range": "± 101",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/16",
            "value": 6918,
            "range": "± 61",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/32",
            "value": 6968,
            "range": "± 645",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/64",
            "value": 6943,
            "range": "± 154",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/128",
            "value": 10142,
            "range": "± 124",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/256",
            "value": 7687,
            "range": "± 533",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/from_seed/512",
            "value": 9288,
            "range": "± 48",
            "unit": "cycles/iter"
          },
          {
            "name": "Initialization/fork",
            "value": 8548,
            "range": "± 54",
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
          "id": "e5c96b2f05e82a75c4e273927e57ada7aefeb0ab",
          "message": "Include OS and arch in benchmark group names, so that incomparable results won't be merged",
          "timestamp": "2026-03-04T05:47:44Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/14/commits/e5c96b2f05e82a75c4e273927e57ada7aefeb0ab"
        },
        "date": 1772606112909,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 388575,
            "range": "± 26414",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 419623,
            "range": "± 96422",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 378763,
            "range": "± 42303",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 388563,
            "range": "± 54134",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 396122,
            "range": "± 40665",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 395272,
            "range": "± 86100",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 377974,
            "range": "± 28837",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 384822,
            "range": "± 23262",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 386411,
            "range": "± 24013",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 378507,
            "range": "± 15312",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 385863,
            "range": "± 22123",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 376528,
            "range": "± 24907",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 369500,
            "range": "± 12607",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 375305,
            "range": "± 8039",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 365617,
            "range": "± 11199",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 384434,
            "range": "± 58245",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 356883,
            "range": "± 10047",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 371620,
            "range": "± 14221",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 387391,
            "range": "± 9673",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 372832,
            "range": "± 12249",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 372151,
            "range": "± 11173",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 371768,
            "range": "± 13877",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 372940,
            "range": "± 8262",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 378048,
            "range": "± 16587",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: next_u64/TripleMixPrng",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/8",
            "value": 1976,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/16",
            "value": 2022,
            "range": "± 87",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/32",
            "value": 2010,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/64",
            "value": 2001,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/128",
            "value": 2843,
            "range": "± 59",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/256",
            "value": 2079,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/512",
            "value": 2651,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/fork",
            "value": 2507,
            "range": "± 98",
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
          "id": "e5c96b2f05e82a75c4e273927e57ada7aefeb0ab",
          "message": "Include OS and arch in benchmark group names, so that incomparable results won't be merged",
          "timestamp": "2026-03-04T05:47:44Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/14/commits/e5c96b2f05e82a75c4e273927e57ada7aefeb0ab"
        },
        "date": 1772606122472,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 613361,
            "range": "± 1164",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 610374,
            "range": "± 3326",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 610269,
            "range": "± 644",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 613495,
            "range": "± 976",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 640347,
            "range": "± 1418",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 640122,
            "range": "± 6969",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 613543,
            "range": "± 867",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 640043,
            "range": "± 1644",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 640606,
            "range": "± 2047",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 613956,
            "range": "± 1171",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 640377,
            "range": "± 2074",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 639779,
            "range": "± 1599",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 613943,
            "range": "± 1150",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 641225,
            "range": "± 5583",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 640354,
            "range": "± 4776",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 613802,
            "range": "± 2338",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 640132,
            "range": "± 3108",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 640493,
            "range": "± 3027",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 613975,
            "range": "± 1080",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 640344,
            "range": "± 1486",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 640043,
            "range": "± 2686",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 613846,
            "range": "± 759",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 640232,
            "range": "± 1981",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 640094,
            "range": "± 2684",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng",
            "value": 5,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 5,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 5,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/8",
            "value": 22787,
            "range": "± 13",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/16",
            "value": 22784,
            "range": "± 50",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/32",
            "value": 22789,
            "range": "± 22",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/64",
            "value": 22808,
            "range": "± 28",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/128",
            "value": 33878,
            "range": "± 27",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/256",
            "value": 25485,
            "range": "± 87",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/512",
            "value": 31109,
            "range": "± 22",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/fork",
            "value": 28429,
            "range": "± 21",
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
          "id": "e5c96b2f05e82a75c4e273927e57ada7aefeb0ab",
          "message": "Include OS and arch in benchmark group names, so that incomparable results won't be merged",
          "timestamp": "2026-03-04T05:47:44Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/14/commits/e5c96b2f05e82a75c4e273927e57ada7aefeb0ab"
        },
        "date": 1772606137433,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 645889,
            "range": "± 635",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 629952,
            "range": "± 544",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 629833,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 645918,
            "range": "± 553",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581197,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581122,
            "range": "± 1269",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 645531,
            "range": "± 436",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580994,
            "range": "± 484",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580972,
            "range": "± 1175",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 645811,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580982,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581071,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 645733,
            "range": "± 418",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581271,
            "range": "± 617",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581247,
            "range": "± 477",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 646114,
            "range": "± 1506",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581058,
            "range": "± 384",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580898,
            "range": "± 480",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 645638,
            "range": "± 478",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581171,
            "range": "± 865",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581093,
            "range": "± 1432",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 645682,
            "range": "± 1736",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580937,
            "range": "± 406",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581062,
            "range": "± 531",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: next_u64/TripleMixPrng",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/8",
            "value": 2313,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/16",
            "value": 2295,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/32",
            "value": 2295,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/64",
            "value": 2287,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/128",
            "value": 3352,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/256",
            "value": 2564,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/512",
            "value": 3098,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/fork",
            "value": 2878,
            "range": "± 5",
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
          "id": "e5c96b2f05e82a75c4e273927e57ada7aefeb0ab",
          "message": "Include OS and arch in benchmark group names, so that incomparable results won't be merged",
          "timestamp": "2026-03-04T05:47:44Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/14/commits/e5c96b2f05e82a75c4e273927e57ada7aefeb0ab"
        },
        "date": 1772606192021,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 644840,
            "range": "± 2339",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 628902,
            "range": "± 3396",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 630312,
            "range": "± 25297",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 645449,
            "range": "± 8690",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580549,
            "range": "± 9757",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580457,
            "range": "± 10217",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 645119,
            "range": "± 11960",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580055,
            "range": "± 483",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580111,
            "range": "± 799",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 648919,
            "range": "± 77122",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580711,
            "range": "± 9415",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580650,
            "range": "± 10716",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 645029,
            "range": "± 11705",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580362,
            "range": "± 8047",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580252,
            "range": "± 68609",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 644722,
            "range": "± 883",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580121,
            "range": "± 20253",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581803,
            "range": "± 11671",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 645042,
            "range": "± 15432",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580521,
            "range": "± 9919",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580362,
            "range": "± 10838",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 645007,
            "range": "± 34797",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580024,
            "range": "± 1093",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 579951,
            "range": "± 737",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: next_u64/TripleMixPrng",
            "value": 4,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 4,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/8",
            "value": 2337,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/16",
            "value": 2318,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/32",
            "value": 2316,
            "range": "± 45",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/64",
            "value": 2305,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/128",
            "value": 3369,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/256",
            "value": 2576,
            "range": "± 203",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/512",
            "value": 3127,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/fork",
            "value": 2891,
            "range": "± 43",
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
          "id": "e5c96b2f05e82a75c4e273927e57ada7aefeb0ab",
          "message": "Include OS and arch in benchmark group names, so that incomparable results won't be merged",
          "timestamp": "2026-03-04T05:47:44Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/14/commits/e5c96b2f05e82a75c4e273927e57ada7aefeb0ab"
        },
        "date": 1772606250975,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 830094,
            "range": "± 3966",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 803373,
            "range": "± 9583",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 800248,
            "range": "± 15016",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 834544,
            "range": "± 12426",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 847241,
            "range": "± 8086",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 844964,
            "range": "± 4278",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 831570,
            "range": "± 4228",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 845577,
            "range": "± 14458",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 856116,
            "range": "± 22591",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 835171,
            "range": "± 34974",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 844604,
            "range": "± 15009",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 845396,
            "range": "± 7715",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 831050,
            "range": "± 3183",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 844407,
            "range": "± 24366",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 844524,
            "range": "± 6641",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 831618,
            "range": "± 5512",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 850721,
            "range": "± 12887",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 863898,
            "range": "± 31338",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 840292,
            "range": "± 11683",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 846068,
            "range": "± 129444",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 847393,
            "range": "± 13598",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 834000,
            "range": "± 11327",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 848467,
            "range": "± 6732",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 847159,
            "range": "± 4406",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: next_u64/TripleMixPrng",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/8",
            "value": 6962,
            "range": "± 104",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/16",
            "value": 6947,
            "range": "± 51",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/32",
            "value": 6909,
            "range": "± 304",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/64",
            "value": 6966,
            "range": "± 1596",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/128",
            "value": 10052,
            "range": "± 217",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/256",
            "value": 7690,
            "range": "± 100",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/512",
            "value": 9339,
            "range": "± 1072",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/fork",
            "value": 8582,
            "range": "± 529",
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
          "id": "e5c96b2f05e82a75c4e273927e57ada7aefeb0ab",
          "message": "Include OS and arch in benchmark group names, so that incomparable results won't be merged",
          "timestamp": "2026-03-04T05:47:44Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/14/commits/e5c96b2f05e82a75c4e273927e57ada7aefeb0ab"
        },
        "date": 1772606263673,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 907439,
            "range": "± 60465",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 866108,
            "range": "± 34060",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 954099,
            "range": "± 69677",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 870534,
            "range": "± 38736",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 970643,
            "range": "± 45823",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 971949,
            "range": "± 53057",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 895040,
            "range": "± 43925",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 975733,
            "range": "± 78772",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1043551,
            "range": "± 79776",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 889650,
            "range": "± 53097",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 981206,
            "range": "± 65377",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 991136,
            "range": "± 77908",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 876457,
            "range": "± 38364",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 970245,
            "range": "± 71326",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 981299,
            "range": "± 46236",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 885946,
            "range": "± 40785",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 998033,
            "range": "± 55955",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1019619,
            "range": "± 59003",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 868225,
            "range": "± 51147",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1027552,
            "range": "± 92175",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 990265,
            "range": "± 77675",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 887077,
            "range": "± 177627",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1014366,
            "range": "± 53547",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 996515,
            "range": "± 49784",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: next_u64/TripleMixPrng",
            "value": 7,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 8,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 7,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/8",
            "value": 9299,
            "range": "± 748",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/16",
            "value": 9881,
            "range": "± 1029",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/32",
            "value": 9648,
            "range": "± 878",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/64",
            "value": 9324,
            "range": "± 617",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/128",
            "value": 13282,
            "range": "± 578",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/256",
            "value": 10770,
            "range": "± 1620",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/512",
            "value": 12615,
            "range": "± 934",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/fork",
            "value": 12015,
            "range": "± 891",
            "unit": "cycles/iter"
          }
        ]
      }
    ]
  }
}