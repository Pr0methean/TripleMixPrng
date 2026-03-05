window.BENCHMARK_DATA = {
  "lastUpdate": 1772683251815,
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
          "id": "13f4b62844364796a88c0d5e97c14b976578b916",
          "message": "Include OS and arch in benchmark group names, so that incomparable results won't be merged (#14)",
          "timestamp": "2026-03-03T22:49:34-08:00",
          "tree_id": "820254006d29386250568c09eefc58fc5420def8",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/13f4b62844364796a88c0d5e97c14b976578b916"
        },
        "date": 1772607451649,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 645855,
            "range": "± 774",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 629861,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 629914,
            "range": "± 532",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 645798,
            "range": "± 451",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580503,
            "range": "± 580",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581124,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 645922,
            "range": "± 611",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581195,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580492,
            "range": "± 549",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 645878,
            "range": "± 401",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581316,
            "range": "± 433",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581208,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 645997,
            "range": "± 388",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581163,
            "range": "± 767",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581284,
            "range": "± 376",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 645880,
            "range": "± 496",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581360,
            "range": "± 439",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581184,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 645983,
            "range": "± 733",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581429,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581444,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 645914,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581270,
            "range": "± 431",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581414,
            "range": "± 634",
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
            "value": 2294,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/32",
            "value": 2294,
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
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/fork",
            "value": 2879,
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
          "id": "13f4b62844364796a88c0d5e97c14b976578b916",
          "message": "Include OS and arch in benchmark group names, so that incomparable results won't be merged (#14)",
          "timestamp": "2026-03-03T22:49:34-08:00",
          "tree_id": "820254006d29386250568c09eefc58fc5420def8",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/13f4b62844364796a88c0d5e97c14b976578b916"
        },
        "date": 1772607464969,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 827624,
            "range": "± 2777",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 796734,
            "range": "± 1633",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 796874,
            "range": "± 13763",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 828152,
            "range": "± 962",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 842730,
            "range": "± 27707",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 842478,
            "range": "± 1076",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 828150,
            "range": "± 1120",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 842469,
            "range": "± 1347",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 842322,
            "range": "± 1549",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 828289,
            "range": "± 1315",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 842408,
            "range": "± 1590",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 842393,
            "range": "± 879",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 828212,
            "range": "± 1545",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 842145,
            "range": "± 12028",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 842388,
            "range": "± 13052",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 828582,
            "range": "± 3948",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 842173,
            "range": "± 1379",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 842336,
            "range": "± 1134",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 828171,
            "range": "± 1426",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 842360,
            "range": "± 1146",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 842233,
            "range": "± 1442",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 828114,
            "range": "± 703",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 841994,
            "range": "± 1053",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 842312,
            "range": "± 1124",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/8",
            "value": 6798,
            "range": "± 160",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/16",
            "value": 6798,
            "range": "± 21",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/32",
            "value": 6797,
            "range": "± 17",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/64",
            "value": 6824,
            "range": "± 24",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/128",
            "value": 9879,
            "range": "± 50",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/256",
            "value": 7607,
            "range": "± 60",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/512",
            "value": 9163,
            "range": "± 96",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/fork",
            "value": 8490,
            "range": "± 51",
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
          "id": "13f4b62844364796a88c0d5e97c14b976578b916",
          "message": "Include OS and arch in benchmark group names, so that incomparable results won't be merged (#14)",
          "timestamp": "2026-03-03T22:49:34-08:00",
          "tree_id": "820254006d29386250568c09eefc58fc5420def8",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/13f4b62844364796a88c0d5e97c14b976578b916"
        },
        "date": 1772607482077,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 474322,
            "range": "± 113037",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 519797,
            "range": "± 124455",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 413945,
            "range": "± 114279",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 449618,
            "range": "± 86439",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 461278,
            "range": "± 63810",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 406931,
            "range": "± 34881",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 442795,
            "range": "± 74954",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 442305,
            "range": "± 70308",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 419902,
            "range": "± 50454",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 446800,
            "range": "± 100562",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 413564,
            "range": "± 163346",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 421110,
            "range": "± 78431",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 479237,
            "range": "± 60891",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 388741,
            "range": "± 22112",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 462983,
            "range": "± 78133",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 446619,
            "range": "± 58098",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 409621,
            "range": "± 59469",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 426911,
            "range": "± 60165",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 404490,
            "range": "± 34818",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 469299,
            "range": "± 62513",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 388463,
            "range": "± 29081",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 431009,
            "range": "± 68358",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 393684,
            "range": "± 60923",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 391585,
            "range": "± 78570",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: next_u64/TripleMixPrng",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 3,
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
            "value": 2011,
            "range": "± 169",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/16",
            "value": 1954,
            "range": "± 171",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/32",
            "value": 1930,
            "range": "± 61",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/64",
            "value": 2135,
            "range": "± 245",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/128",
            "value": 2737,
            "range": "± 211",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/256",
            "value": 2556,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/512",
            "value": 2703,
            "range": "± 257",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/fork",
            "value": 2643,
            "range": "± 371",
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
          "id": "13f4b62844364796a88c0d5e97c14b976578b916",
          "message": "Include OS and arch in benchmark group names, so that incomparable results won't be merged (#14)",
          "timestamp": "2026-03-03T22:49:34-08:00",
          "tree_id": "820254006d29386250568c09eefc58fc5420def8",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/13f4b62844364796a88c0d5e97c14b976578b916"
        },
        "date": 1772607514952,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 645282,
            "range": "± 10711",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 629451,
            "range": "± 12288",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 629755,
            "range": "± 10869",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 645882,
            "range": "± 28368",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580210,
            "range": "± 1118",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580302,
            "range": "± 1070",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 647174,
            "range": "± 9282",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580867,
            "range": "± 9557",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580823,
            "range": "± 12679",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 645420,
            "range": "± 8043",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580727,
            "range": "± 9007",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580077,
            "range": "± 359",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 644836,
            "range": "± 611",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580372,
            "range": "± 45185",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580984,
            "range": "± 18313",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 645403,
            "range": "± 10780",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580650,
            "range": "± 11576",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580940,
            "range": "± 12913",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 644919,
            "range": "± 32332",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580160,
            "range": "± 696",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580229,
            "range": "± 1217",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 647768,
            "range": "± 9782",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580522,
            "range": "± 10120",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580722,
            "range": "± 14398",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: next_u64/TripleMixPrng",
            "value": 4,
            "range": "± 0",
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
            "value": 2317,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/16",
            "value": 2327,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/32",
            "value": 2326,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/64",
            "value": 2310,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/128",
            "value": 3363,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/256",
            "value": 2574,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/512",
            "value": 3120,
            "range": "± 53",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/fork",
            "value": 2892,
            "range": "± 76",
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
          "id": "13f4b62844364796a88c0d5e97c14b976578b916",
          "message": "Include OS and arch in benchmark group names, so that incomparable results won't be merged (#14)",
          "timestamp": "2026-03-03T22:49:34-08:00",
          "tree_id": "820254006d29386250568c09eefc58fc5420def8",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/13f4b62844364796a88c0d5e97c14b976578b916"
        },
        "date": 1772607579933,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 831748,
            "range": "± 9268",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 799805,
            "range": "± 6889",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 799764,
            "range": "± 7813",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 844450,
            "range": "± 446046",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 847375,
            "range": "± 7245",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 847145,
            "range": "± 4851",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 832126,
            "range": "± 14049",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 846335,
            "range": "± 13027",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 846409,
            "range": "± 10097",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 833083,
            "range": "± 6193",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 845902,
            "range": "± 7049",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 845726,
            "range": "± 8806",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 832271,
            "range": "± 11081",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 845641,
            "range": "± 12071",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 845410,
            "range": "± 12234",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 831912,
            "range": "± 8588",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 848039,
            "range": "± 14412",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 845817,
            "range": "± 5116",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 832487,
            "range": "± 6973",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 845762,
            "range": "± 9269",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 845648,
            "range": "± 8346",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 832788,
            "range": "± 8381",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 845819,
            "range": "± 15341",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 846546,
            "range": "± 15893",
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
            "value": 6951,
            "range": "± 520",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/16",
            "value": 7538,
            "range": "± 798",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/32",
            "value": 8649,
            "range": "± 1824",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/64",
            "value": 8695,
            "range": "± 663",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/128",
            "value": 11909,
            "range": "± 1417",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/256",
            "value": 7672,
            "range": "± 431",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/512",
            "value": 9302,
            "range": "± 996",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/fork",
            "value": 8545,
            "range": "± 47",
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
          "id": "13f4b62844364796a88c0d5e97c14b976578b916",
          "message": "Include OS and arch in benchmark group names, so that incomparable results won't be merged (#14)",
          "timestamp": "2026-03-03T22:49:34-08:00",
          "tree_id": "820254006d29386250568c09eefc58fc5420def8",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/13f4b62844364796a88c0d5e97c14b976578b916"
        },
        "date": 1772607592486,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 913513,
            "range": "± 55381",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 863983,
            "range": "± 717038",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 856876,
            "range": "± 98619",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 868261,
            "range": "± 78740",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 956653,
            "range": "± 29437",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 954979,
            "range": "± 15459",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 860701,
            "range": "± 12431",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 953507,
            "range": "± 8588",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 954209,
            "range": "± 7035",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 856664,
            "range": "± 41356",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 956453,
            "range": "± 22554",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 952679,
            "range": "± 53913",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 860892,
            "range": "± 75786",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 953267,
            "range": "± 11022",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 953816,
            "range": "± 40706",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 858412,
            "range": "± 110404",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 954860,
            "range": "± 9088",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 954610,
            "range": "± 10519",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 863277,
            "range": "± 22706",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 957664,
            "range": "± 20258",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 953473,
            "range": "± 33970",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 856807,
            "range": "± 12173",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 956067,
            "range": "± 45162",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 954654,
            "range": "± 17023",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: next_u64/TripleMixPrng",
            "value": 7,
            "range": "± 1",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 7,
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
            "value": 8821,
            "range": "± 127",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/16",
            "value": 8827,
            "range": "± 200",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/32",
            "value": 8829,
            "range": "± 198",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/64",
            "value": 8975,
            "range": "± 223",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/128",
            "value": 12839,
            "range": "± 267",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/256",
            "value": 9752,
            "range": "± 113",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/512",
            "value": 11922,
            "range": "± 124",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/fork",
            "value": 10914,
            "range": "± 1196",
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
          "id": "3879be4b6e6c557b4c291dee9e57390756a8f1c5",
          "message": "Disable results upload to Pages from PRs, and enable job summary (#15)",
          "timestamp": "2026-03-03T23:53:03-08:00",
          "tree_id": "d6527f5539d7a4963d0e8f651025cc12b8d381de",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/3879be4b6e6c557b4c291dee9e57390756a8f1c5"
        },
        "date": 1772611215519,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 382140,
            "range": "± 11184",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 382439,
            "range": "± 6909",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 382202,
            "range": "± 10119",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 381946,
            "range": "± 7669",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 385464,
            "range": "± 8219",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 383242,
            "range": "± 4036",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 388317,
            "range": "± 7103",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 382387,
            "range": "± 11942",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 378681,
            "range": "± 42089",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 357527,
            "range": "± 9465",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 378243,
            "range": "± 12877",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 385461,
            "range": "± 6762",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 356893,
            "range": "± 5289",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 385440,
            "range": "± 8163",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 367957,
            "range": "± 13413",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 356993,
            "range": "± 5826",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 385540,
            "range": "± 14553",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 381461,
            "range": "± 18804",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 358737,
            "range": "± 13269",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 386098,
            "range": "± 7130",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 369322,
            "range": "± 13341",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 368149,
            "range": "± 12937",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 378994,
            "range": "± 8726",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 359204,
            "range": "± 18268",
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
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/8",
            "value": 1944,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/16",
            "value": 1950,
            "range": "± 66",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/32",
            "value": 1945,
            "range": "± 50",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/64",
            "value": 1936,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/128",
            "value": 2845,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/256",
            "value": 2166,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/512",
            "value": 2642,
            "range": "± 164",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/fork",
            "value": 2453,
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
          "id": "65e303cef4529a59931cabd2334184c5f08cb551",
          "message": "More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP)",
          "timestamp": "2026-03-04T06:49:38Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/16/commits/65e303cef4529a59931cabd2334184c5f08cb551"
        },
        "date": 1772611222570,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 552452,
            "range": "± 1454",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 552894,
            "range": "± 1598",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 552998,
            "range": "± 623",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 552673,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 568835,
            "range": "± 500",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 568838,
            "range": "± 402",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 552465,
            "range": "± 578",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 568588,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 568479,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 552762,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 568532,
            "range": "± 653",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 568593,
            "range": "± 550",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 553048,
            "range": "± 1615",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 568609,
            "range": "± 405",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 568633,
            "range": "± 432",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 552777,
            "range": "± 675",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 568670,
            "range": "± 441",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 568603,
            "range": "± 1038",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 552944,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 568697,
            "range": "± 644",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 569039,
            "range": "± 592",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 552758,
            "range": "± 539",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 568594,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 568854,
            "range": "± 579",
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
            "value": 2314,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/16",
            "value": 2294,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/32",
            "value": 2295,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/64",
            "value": 2286,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/128",
            "value": 3350,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/256",
            "value": 2562,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/512",
            "value": 3096,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/fork",
            "value": 2882,
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
          "id": "3879be4b6e6c557b4c291dee9e57390756a8f1c5",
          "message": "Disable results upload to Pages from PRs, and enable job summary (#15)",
          "timestamp": "2026-03-03T23:53:03-08:00",
          "tree_id": "d6527f5539d7a4963d0e8f651025cc12b8d381de",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/3879be4b6e6c557b4c291dee9e57390756a8f1c5"
        },
        "date": 1772611258556,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 645668,
            "range": "± 1498",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 629621,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 629629,
            "range": "± 1046",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 645538,
            "range": "± 518",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580950,
            "range": "± 601",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580955,
            "range": "± 598",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 645377,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580977,
            "range": "± 560",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581009,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 645549,
            "range": "± 444",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581053,
            "range": "± 437",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581138,
            "range": "± 435",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 645574,
            "range": "± 387",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579963,
            "range": "± 992",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580979,
            "range": "± 490",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 646366,
            "range": "± 682",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581341,
            "range": "± 541",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581064,
            "range": "± 460",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 645566,
            "range": "± 479",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581098,
            "range": "± 493",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581205,
            "range": "± 423",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 645606,
            "range": "± 377",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581076,
            "range": "± 683",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 581075,
            "range": "± 456",
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
            "value": 2316,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/16",
            "value": 2296,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/32",
            "value": 2294,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/64",
            "value": 2290,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/128",
            "value": 3344,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/256",
            "value": 2570,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/512",
            "value": 3099,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/fork",
            "value": 2868,
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
          "id": "65e303cef4529a59931cabd2334184c5f08cb551",
          "message": "More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP)",
          "timestamp": "2026-03-04T06:49:38Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/16/commits/65e303cef4529a59931cabd2334184c5f08cb551"
        },
        "date": 1772611259164,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 456521,
            "range": "± 38794",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 418744,
            "range": "± 30673",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 469910,
            "range": "± 48905",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 414274,
            "range": "± 23446",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 453082,
            "range": "± 59001",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 410970,
            "range": "± 52323",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 417886,
            "range": "± 63539",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 469355,
            "range": "± 42543",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 398903,
            "range": "± 16608",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 453978,
            "range": "± 41663",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 407306,
            "range": "± 30807",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 423635,
            "range": "± 48106",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 441730,
            "range": "± 43488",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 412663,
            "range": "± 24566",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 466412,
            "range": "± 51216",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 407676,
            "range": "± 21403",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 453172,
            "range": "± 46825",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 420166,
            "range": "± 83142",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 409697,
            "range": "± 16394",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 459861,
            "range": "± 39411",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 399580,
            "range": "± 29902",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 462868,
            "range": "± 59675",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 403527,
            "range": "± 30374",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 445004,
            "range": "± 48188",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: next_u64/TripleMixPrng",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 3,
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
            "value": 2178,
            "range": "± 121",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/16",
            "value": 2589,
            "range": "± 328",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/32",
            "value": 2168,
            "range": "± 167",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/64",
            "value": 2464,
            "range": "± 417",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/128",
            "value": 3163,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/256",
            "value": 2624,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/512",
            "value": 2948,
            "range": "± 179",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/fork",
            "value": 3021,
            "range": "± 291",
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
          "id": "65e303cef4529a59931cabd2334184c5f08cb551",
          "message": "More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP)",
          "timestamp": "2026-03-04T06:49:38Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/16/commits/65e303cef4529a59931cabd2334184c5f08cb551"
        },
        "date": 1772611261409,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 708034,
            "range": "± 2607",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 727500,
            "range": "± 2651",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 723262,
            "range": "± 8383",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 708689,
            "range": "± 2233",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 817945,
            "range": "± 1294",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 817987,
            "range": "± 1745",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 709279,
            "range": "± 1456",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 817832,
            "range": "± 1012",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 817972,
            "range": "± 11107",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 708799,
            "range": "± 3649",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 818048,
            "range": "± 1685",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 819135,
            "range": "± 1652",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 710994,
            "range": "± 1268",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 819296,
            "range": "± 964",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 819237,
            "range": "± 4162",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 711200,
            "range": "± 1585",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 819638,
            "range": "± 1582",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 819796,
            "range": "± 1172",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 711853,
            "range": "± 1554",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 818009,
            "range": "± 2227",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 817728,
            "range": "± 2995",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 709063,
            "range": "± 1384",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 817946,
            "range": "± 919",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 817829,
            "range": "± 9071",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/8",
            "value": 6798,
            "range": "± 17",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/16",
            "value": 6806,
            "range": "± 287",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/32",
            "value": 6796,
            "range": "± 28",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/64",
            "value": 6798,
            "range": "± 12",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/128",
            "value": 9848,
            "range": "± 73",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/256",
            "value": 7549,
            "range": "± 79",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/512",
            "value": 9174,
            "range": "± 54",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/fork",
            "value": 8394,
            "range": "± 36",
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
          "id": "3879be4b6e6c557b4c291dee9e57390756a8f1c5",
          "message": "Disable results upload to Pages from PRs, and enable job summary (#15)",
          "timestamp": "2026-03-03T23:53:03-08:00",
          "tree_id": "d6527f5539d7a4963d0e8f651025cc12b8d381de",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/3879be4b6e6c557b4c291dee9e57390756a8f1c5"
        },
        "date": 1772611319316,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 644542,
            "range": "± 2706",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 631545,
            "range": "± 11952",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 629204,
            "range": "± 11520",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 645403,
            "range": "± 12780",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580322,
            "range": "± 29973",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580185,
            "range": "± 10494",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 644520,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579854,
            "range": "± 705",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580939,
            "range": "± 57328",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 645076,
            "range": "± 11006",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580206,
            "range": "± 19624",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580058,
            "range": "± 8399",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 644667,
            "range": "± 9647",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580261,
            "range": "± 42997",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 579904,
            "range": "± 1216",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 644538,
            "range": "± 636",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 581832,
            "range": "± 12922",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580494,
            "range": "± 23999",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 644826,
            "range": "± 8264",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 580293,
            "range": "± 8893",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580077,
            "range": "± 10080",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 644376,
            "range": "± 471",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 579783,
            "range": "± 573",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 580852,
            "range": "± 48169",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: next_u64/TripleMixPrng",
            "value": 4,
            "range": "± 0",
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
            "value": 2317,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/16",
            "value": 2327,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/32",
            "value": 2318,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/64",
            "value": 2309,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/128",
            "value": 3349,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/256",
            "value": 2575,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/512",
            "value": 3118,
            "range": "± 100",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/fork",
            "value": 2891,
            "range": "± 47",
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
          "id": "65e303cef4529a59931cabd2334184c5f08cb551",
          "message": "More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP)",
          "timestamp": "2026-03-04T06:49:38Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/16/commits/65e303cef4529a59931cabd2334184c5f08cb551"
        },
        "date": 1772611329954,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 553324,
            "range": "± 9278",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 554392,
            "range": "± 16916",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 553542,
            "range": "± 15683",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 554355,
            "range": "± 8896",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 566040,
            "range": "± 3262",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 564319,
            "range": "± 2769",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 552460,
            "range": "± 46188",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 567086,
            "range": "± 13613",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 565487,
            "range": "± 14179",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 554070,
            "range": "± 10099",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 564918,
            "range": "± 12856",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 564750,
            "range": "± 10944",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 552279,
            "range": "± 8059",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 563886,
            "range": "± 1331",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 564050,
            "range": "± 40876",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 552552,
            "range": "± 8814",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 564169,
            "range": "± 16204",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 564532,
            "range": "± 10578",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 552400,
            "range": "± 8392",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 564282,
            "range": "± 10376",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 563969,
            "range": "± 627",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 552212,
            "range": "± 821",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 563961,
            "range": "± 51153",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 564276,
            "range": "± 9385",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: next_u64/TripleMixPrng",
            "value": 4,
            "range": "± 0",
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
            "value": 2342,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/16",
            "value": 2322,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/32",
            "value": 2319,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/64",
            "value": 2312,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/128",
            "value": 3374,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/256",
            "value": 2583,
            "range": "± 1132",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/512",
            "value": 3223,
            "range": "± 3202",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/fork",
            "value": 2897,
            "range": "± 980",
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
          "id": "65e303cef4529a59931cabd2334184c5f08cb551",
          "message": "More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP)",
          "timestamp": "2026-03-04T06:49:38Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/16/commits/65e303cef4529a59931cabd2334184c5f08cb551"
        },
        "date": 1772611349835,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 784976,
            "range": "± 4258",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 774089,
            "range": "± 8465",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 773980,
            "range": "± 2705",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 786099,
            "range": "± 2855",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 819522,
            "range": "± 4082",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 819331,
            "range": "± 20871",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 786522,
            "range": "± 31307",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 819070,
            "range": "± 5413",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 820168,
            "range": "± 3265",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 786069,
            "range": "± 2939",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 819167,
            "range": "± 3066",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 819309,
            "range": "± 2862",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 790034,
            "range": "± 6503",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 829465,
            "range": "± 179292",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 828807,
            "range": "± 36831",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 787233,
            "range": "± 4368",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 818833,
            "range": "± 5850",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 820763,
            "range": "± 3004",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 788683,
            "range": "± 9137",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 825357,
            "range": "± 6712",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 824764,
            "range": "± 20736",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 791978,
            "range": "± 5431",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 823436,
            "range": "± 6860",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 852583,
            "range": "± 50775",
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
            "range": "± 2",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/8",
            "value": 8011,
            "range": "± 156",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/16",
            "value": 8028,
            "range": "± 195",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/32",
            "value": 8036,
            "range": "± 126",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/64",
            "value": 8033,
            "range": "± 940",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/128",
            "value": 11574,
            "range": "± 136",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/256",
            "value": 8968,
            "range": "± 230",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/512",
            "value": 10762,
            "range": "± 623",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/fork",
            "value": 9844,
            "range": "± 681",
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
          "id": "65e303cef4529a59931cabd2334184c5f08cb551",
          "message": "More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP)",
          "timestamp": "2026-03-04T06:49:38Z",
          "url": "https://github.com/Pr0methean/TripleMixPrng/pull/16/commits/65e303cef4529a59931cabd2334184c5f08cb551"
        },
        "date": 1772611357217,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 1060867,
            "range": "± 66209",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1048739,
            "range": "± 34420",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1066903,
            "range": "± 62045",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 1096773,
            "range": "± 57248",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1236813,
            "range": "± 119715",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1179069,
            "range": "± 80059",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 1033577,
            "range": "± 55173",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1237884,
            "range": "± 306519",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1344946,
            "range": "± 170653",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 1018287,
            "range": "± 62128",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1121268,
            "range": "± 50031",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1136858,
            "range": "± 47555",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 1008512,
            "range": "± 64212",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1109104,
            "range": "± 74370",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1109247,
            "range": "± 116567",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 998395,
            "range": "± 43972",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1114646,
            "range": "± 42182",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1159655,
            "range": "± 79886",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 972068,
            "range": "± 30339",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1117590,
            "range": "± 51884",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1213045,
            "range": "± 73602",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 1134288,
            "range": "± 36664",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 1213485,
            "range": "± 42174",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 1227817,
            "range": "± 74153",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: next_u64/TripleMixPrng",
            "value": 10,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 9,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 9,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/8",
            "value": 12216,
            "range": "± 581",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/16",
            "value": 12648,
            "range": "± 664",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/32",
            "value": 12283,
            "range": "± 437",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/64",
            "value": 12278,
            "range": "± 732",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/128",
            "value": 17779,
            "range": "± 435",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/256",
            "value": 13251,
            "range": "± 752",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/512",
            "value": 18886,
            "range": "± 2038",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/fork",
            "value": 15991,
            "range": "± 518",
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
          "id": "3879be4b6e6c557b4c291dee9e57390756a8f1c5",
          "message": "Disable results upload to Pages from PRs, and enable job summary (#15)",
          "timestamp": "2026-03-03T23:53:03-08:00",
          "tree_id": "d6527f5539d7a4963d0e8f651025cc12b8d381de",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/3879be4b6e6c557b4c291dee9e57390756a8f1c5"
        },
        "date": 1772611361335,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 829381,
            "range": "± 6272",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 797885,
            "range": "± 4805",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 797910,
            "range": "± 4942",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 831842,
            "range": "± 9389",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 846686,
            "range": "± 8032",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 845887,
            "range": "± 4366",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 831447,
            "range": "± 4103",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 849784,
            "range": "± 161522",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 864129,
            "range": "± 109530",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 831295,
            "range": "± 4670",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 847398,
            "range": "± 4618",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 847006,
            "range": "± 5945",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 834963,
            "range": "± 8382",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 849743,
            "range": "± 8020",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 850826,
            "range": "± 5959",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 833867,
            "range": "± 4416",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 849818,
            "range": "± 5776",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 849562,
            "range": "± 7285",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 838638,
            "range": "± 10575",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 861171,
            "range": "± 18292",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 861251,
            "range": "± 21246",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 838969,
            "range": "± 15127",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 850010,
            "range": "± 4945",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 853365,
            "range": "± 12089",
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
            "value": 6958,
            "range": "± 127",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/16",
            "value": 6964,
            "range": "± 771",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/32",
            "value": 7876,
            "range": "± 1534",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/64",
            "value": 7162,
            "range": "± 808",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/128",
            "value": 11781,
            "range": "± 1725",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/256",
            "value": 9422,
            "range": "± 2298",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/512",
            "value": 9338,
            "range": "± 462",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/fork",
            "value": 8586,
            "range": "± 789",
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
          "id": "3879be4b6e6c557b4c291dee9e57390756a8f1c5",
          "message": "Disable results upload to Pages from PRs, and enable job summary (#15)",
          "timestamp": "2026-03-03T23:53:03-08:00",
          "tree_id": "d6527f5539d7a4963d0e8f651025cc12b8d381de",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/3879be4b6e6c557b4c291dee9e57390756a8f1c5"
        },
        "date": 1772611363912,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 874785,
            "range": "± 19533",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 901417,
            "range": "± 139667",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 863035,
            "range": "± 23480",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 857168,
            "range": "± 13882",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 974410,
            "range": "± 38529",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 963448,
            "range": "± 36551",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 859489,
            "range": "± 17160",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 975316,
            "range": "± 50143",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 959838,
            "range": "± 27611",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 921877,
            "range": "± 400888",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 964546,
            "range": "± 47998",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 984037,
            "range": "± 45784",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 863486,
            "range": "± 27339",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 969746,
            "range": "± 64455",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 958958,
            "range": "± 24235",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 873246,
            "range": "± 32060",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 969802,
            "range": "± 27197",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 959656,
            "range": "± 28734",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 858271,
            "range": "± 106373",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 960669,
            "range": "± 38796",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 959988,
            "range": "± 28109",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 861638,
            "range": "± 23073",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 976703,
            "range": "± 49135",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 974861,
            "range": "± 38641",
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
            "value": 7,
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
            "value": 8831,
            "range": "± 227",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/16",
            "value": 9918,
            "range": "± 747",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/32",
            "value": 9617,
            "range": "± 1200",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/64",
            "value": 9683,
            "range": "± 1043",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/128",
            "value": 13911,
            "range": "± 1038",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/256",
            "value": 10178,
            "range": "± 614",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/512",
            "value": 12355,
            "range": "± 632",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/fork",
            "value": 11746,
            "range": "± 703",
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
          "id": "3879be4b6e6c557b4c291dee9e57390756a8f1c5",
          "message": "Disable results upload to Pages from PRs, and enable job summary (#15)",
          "timestamp": "2026-03-03T23:53:03-08:00",
          "tree_id": "d6527f5539d7a4963d0e8f651025cc12b8d381de",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/3879be4b6e6c557b4c291dee9e57390756a8f1c5"
        },
        "date": 1772611374597,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 613208,
            "range": "± 2253",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 610435,
            "range": "± 886",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 610339,
            "range": "± 2337",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 613806,
            "range": "± 9502",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 639778,
            "range": "± 7691",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 642588,
            "range": "± 3576",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 613724,
            "range": "± 617",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 639403,
            "range": "± 5111",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 642326,
            "range": "± 1557",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 613519,
            "range": "± 657",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 639605,
            "range": "± 2947",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 642387,
            "range": "± 1707",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 613852,
            "range": "± 8669",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 639344,
            "range": "± 2805",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 642203,
            "range": "± 2915",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 613876,
            "range": "± 1707",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 639245,
            "range": "± 8557",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 642291,
            "range": "± 2512",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 613569,
            "range": "± 2532",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 640802,
            "range": "± 7434",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 642426,
            "range": "± 2228",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 613540,
            "range": "± 9323",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 639800,
            "range": "± 812",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 642426,
            "range": "± 1646",
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
            "range": "± 22",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/16",
            "value": 22783,
            "range": "± 15",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/32",
            "value": 22773,
            "range": "± 55",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/64",
            "value": 22797,
            "range": "± 29",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/128",
            "value": 33862,
            "range": "± 1117",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/256",
            "value": 25467,
            "range": "± 22",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/512",
            "value": 31088,
            "range": "± 33",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/fork",
            "value": 28437,
            "range": "± 18",
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
          "id": "2f530eda6913fb96158940d99df31c1f6820de49",
          "message": "More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP) (#16)\n\n* More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP)\n\n* Switch to an in-place LCG update and a mid-update read of the LCG state",
          "timestamp": "2026-03-04T14:36:37-08:00",
          "tree_id": "d6e8c7fa51334c485489c553a31b38a94dce3045",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/2f530eda6913fb96158940d99df31c1f6820de49"
        },
        "date": 1772664266642,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 550051,
            "range": "± 551",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 547480,
            "range": "± 515",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 547282,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 551120,
            "range": "± 901",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 550179,
            "range": "± 574",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 550285,
            "range": "± 785",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 550833,
            "range": "± 392",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 549448,
            "range": "± 765",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 550168,
            "range": "± 819",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 550795,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 549556,
            "range": "± 745",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 550046,
            "range": "± 732",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 550743,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 549833,
            "range": "± 555",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 550051,
            "range": "± 639",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 550786,
            "range": "± 438",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 549656,
            "range": "± 799",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 550075,
            "range": "± 605",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 550916,
            "range": "± 446",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 549563,
            "range": "± 720",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 550085,
            "range": "± 589",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 550834,
            "range": "± 498",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 549518,
            "range": "± 743",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 550468,
            "range": "± 779",
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
            "value": 2291,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/32",
            "value": 2293,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/64",
            "value": 2285,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/128",
            "value": 3350,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/256",
            "value": 2561,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/512",
            "value": 3096,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/fork",
            "value": 2872,
            "range": "± 3",
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
          "id": "2f530eda6913fb96158940d99df31c1f6820de49",
          "message": "More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP) (#16)\n\n* More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP)\n\n* Switch to an in-place LCG update and a mid-update read of the LCG state",
          "timestamp": "2026-03-04T14:36:37-08:00",
          "tree_id": "d6e8c7fa51334c485489c553a31b38a94dce3045",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/2f530eda6913fb96158940d99df31c1f6820de49"
        },
        "date": 1772664265310,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 378979,
            "range": "± 43565",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 363137,
            "range": "± 34888",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 374806,
            "range": "± 129602",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 395038,
            "range": "± 58372",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 378201,
            "range": "± 78837",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 380080,
            "range": "± 21404",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 457558,
            "range": "± 100590",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 379670,
            "range": "± 60742",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 420078,
            "range": "± 85439",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 386065,
            "range": "± 38705",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 385597,
            "range": "± 62112",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 405598,
            "range": "± 54978",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 387180,
            "range": "± 64157",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 377998,
            "range": "± 49345",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 376622,
            "range": "± 64958",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 395269,
            "range": "± 81055",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 410888,
            "range": "± 77478",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 385245,
            "range": "± 67714",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 391771,
            "range": "± 46801",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 378165,
            "range": "± 82531",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 434118,
            "range": "± 61341",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 495163,
            "range": "± 100530",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 436374,
            "range": "± 72926",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 459176,
            "range": "± 99635",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: next_u64/TripleMixPrng",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 3,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 3,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/8",
            "value": 2488,
            "range": "± 531",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/16",
            "value": 2385,
            "range": "± 766",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/32",
            "value": 2314,
            "range": "± 680",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/64",
            "value": 2486,
            "range": "± 481",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/128",
            "value": 3548,
            "range": "± 723",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/256",
            "value": 2578,
            "range": "± 399",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/512",
            "value": 3210,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/fork",
            "value": 3091,
            "range": "± 982",
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
          "id": "2f530eda6913fb96158940d99df31c1f6820de49",
          "message": "More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP) (#16)\n\n* More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP)\n\n* Switch to an in-place LCG update and a mid-update read of the LCG state",
          "timestamp": "2026-03-04T14:36:37-08:00",
          "tree_id": "d6e8c7fa51334c485489c553a31b38a94dce3045",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/2f530eda6913fb96158940d99df31c1f6820de49"
        },
        "date": 1772664299049,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 676791,
            "range": "± 950",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 691994,
            "range": "± 1236",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 692012,
            "range": "± 2766",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 678122,
            "range": "± 2539",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 770704,
            "range": "± 2209",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 770767,
            "range": "± 1352",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 677571,
            "range": "± 869",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 770616,
            "range": "± 942",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 770999,
            "range": "± 1121",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 678854,
            "range": "± 1382",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 770910,
            "range": "± 1175",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 770618,
            "range": "± 1434",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 678293,
            "range": "± 720",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 770975,
            "range": "± 919",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 770768,
            "range": "± 1244",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 678039,
            "range": "± 3040",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 772967,
            "range": "± 2473",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 771349,
            "range": "± 2483",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 678351,
            "range": "± 1041",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 770730,
            "range": "± 981",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 770783,
            "range": "± 1073",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 678128,
            "range": "± 898",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 771053,
            "range": "± 9963",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 772455,
            "range": "± 2582",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/8",
            "value": 6917,
            "range": "± 40",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/16",
            "value": 6907,
            "range": "± 33",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/32",
            "value": 6881,
            "range": "± 158",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/64",
            "value": 6883,
            "range": "± 24",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/128",
            "value": 9967,
            "range": "± 18",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/256",
            "value": 7665,
            "range": "± 21",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/512",
            "value": 9281,
            "range": "± 40",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/fork",
            "value": 8396,
            "range": "± 27",
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
          "id": "2f530eda6913fb96158940d99df31c1f6820de49",
          "message": "More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP) (#16)\n\n* More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP)\n\n* Switch to an in-place LCG update and a mid-update read of the LCG state",
          "timestamp": "2026-03-04T14:36:37-08:00",
          "tree_id": "d6e8c7fa51334c485489c553a31b38a94dce3045",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/2f530eda6913fb96158940d99df31c1f6820de49"
        },
        "date": 1772664310711,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 782449,
            "range": "± 21688",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 797146,
            "range": "± 398117",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 796174,
            "range": "± 181949",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 799848,
            "range": "± 136119",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 888188,
            "range": "± 72783",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 889151,
            "range": "± 58845",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 796584,
            "range": "± 29976",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 883264,
            "range": "± 68096",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 893732,
            "range": "± 43831",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 822455,
            "range": "± 117141",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 895246,
            "range": "± 53485",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 891264,
            "range": "± 34813",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 791073,
            "range": "± 155791",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 894029,
            "range": "± 146862",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 881717,
            "range": "± 28615",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 793439,
            "range": "± 44850",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 883327,
            "range": "± 35023",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 900797,
            "range": "± 262213",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 947248,
            "range": "± 154548",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 935938,
            "range": "± 144776",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 908086,
            "range": "± 68184",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 783831,
            "range": "± 18763",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 873483,
            "range": "± 16203",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 875743,
            "range": "± 18691",
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
            "value": 7,
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
            "value": 9223,
            "range": "± 214",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/16",
            "value": 9321,
            "range": "± 752",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/32",
            "value": 9330,
            "range": "± 209",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/64",
            "value": 9340,
            "range": "± 203",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/128",
            "value": 13508,
            "range": "± 614",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/256",
            "value": 10283,
            "range": "± 238",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/512",
            "value": 12615,
            "range": "± 293",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/fork",
            "value": 11294,
            "range": "± 257",
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
          "id": "2f530eda6913fb96158940d99df31c1f6820de49",
          "message": "More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP) (#16)\n\n* More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP)\n\n* Switch to an in-place LCG update and a mid-update read of the LCG state",
          "timestamp": "2026-03-04T14:36:37-08:00",
          "tree_id": "d6e8c7fa51334c485489c553a31b38a94dce3045",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/2f530eda6913fb96158940d99df31c1f6820de49"
        },
        "date": 1772664304651,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 550116,
            "range": "± 2445",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 554528,
            "range": "± 17354",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 549499,
            "range": "± 7787",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 551507,
            "range": "± 9758",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 548371,
            "range": "± 14377",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 547950,
            "range": "± 17096",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 551053,
            "range": "± 7768",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 547755,
            "range": "± 27666",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 547277,
            "range": "± 1253",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 550071,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 550515,
            "range": "± 10548",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 548006,
            "range": "± 10384",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 551052,
            "range": "± 14292",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 549082,
            "range": "± 14659",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 547694,
            "range": "± 10567",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 550838,
            "range": "± 29662",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 547408,
            "range": "± 12894",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 547229,
            "range": "± 1603",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 552575,
            "range": "± 8454",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 547799,
            "range": "± 8920",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 547515,
            "range": "± 9070",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 550840,
            "range": "± 10770",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 547849,
            "range": "± 13934",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 547789,
            "range": "± 27239",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: next_u64/TripleMixPrng",
            "value": 4,
            "range": "± 0",
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
            "value": 2342,
            "range": "± 133",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/16",
            "value": 2323,
            "range": "± 58",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/32",
            "value": 2320,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/64",
            "value": 2313,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/128",
            "value": 3373,
            "range": "± 68",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/256",
            "value": 2578,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/from_seed/512",
            "value": 3120,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:windows: Initialization/fork",
            "value": 2887,
            "range": "± 18",
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
          "id": "2f530eda6913fb96158940d99df31c1f6820de49",
          "message": "More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP) (#16)\n\n* More tweaks to mix(), and move state update after mixing as much as possible (should improve ILP)\n\n* Switch to an in-place LCG update and a mid-update read of the LCG state",
          "timestamp": "2026-03-04T14:36:37-08:00",
          "tree_id": "d6e8c7fa51334c485489c553a31b38a94dce3045",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/2f530eda6913fb96158940d99df31c1f6820de49"
        },
        "date": 1772664381622,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 676503,
            "range": "± 3823",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 692151,
            "range": "± 3085",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 692631,
            "range": "± 2826",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 677360,
            "range": "± 4127",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 788751,
            "range": "± 14289",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 780946,
            "range": "± 42139",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 677015,
            "range": "± 5192",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 777693,
            "range": "± 7454",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 778753,
            "range": "± 4060",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 677128,
            "range": "± 3716",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 778002,
            "range": "± 6341",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 777647,
            "range": "± 2650",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 680603,
            "range": "± 8379",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 805977,
            "range": "± 30274",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 789758,
            "range": "± 15823",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 678019,
            "range": "± 25004",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 778990,
            "range": "± 3375",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 779160,
            "range": "± 5697",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 677665,
            "range": "± 4693",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 779064,
            "range": "± 4144",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 778362,
            "range": "± 4879",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 677871,
            "range": "± 3660",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 778687,
            "range": "± 3226",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 777699,
            "range": "± 7647",
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
            "value": 6912,
            "range": "± 55",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/16",
            "value": 6905,
            "range": "± 48",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/32",
            "value": 6893,
            "range": "± 52",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/64",
            "value": 6990,
            "range": "± 59",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/128",
            "value": 10076,
            "range": "± 123",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/256",
            "value": 7646,
            "range": "± 37",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/from_seed/512",
            "value": 9276,
            "range": "± 83",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:windows: Initialization/fork",
            "value": 8518,
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
          "id": "381a49dc5da60739bf177de2ccd523d53a581e32",
          "message": "Provide `advance` methods, and fix bugs that were lowering period (#18)\n\n* Implement jump-ahead\n\n* Partial bug fix\n\n* Partial bug fix\n\n* WIP: switch to a standard LCG\n\n* Fix jump-ahead calculation for standard LCG\n\n* Fix: replace `i_hi` with `i_lo + i_hi` to restore quality of mix",
          "timestamp": "2026-03-05T03:52:22Z",
          "tree_id": "c9e9452c3663d48521961b26b9eb88c896908ab2",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/381a49dc5da60739bf177de2ccd523d53a581e32"
        },
        "date": 1772683190542,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 561590,
            "range": "± 496",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 564946,
            "range": "± 816",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 565199,
            "range": "± 716",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 562140,
            "range": "± 631",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 542569,
            "range": "± 523",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 541617,
            "range": "± 566",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 562014,
            "range": "± 386",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 541428,
            "range": "± 623",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 542967,
            "range": "± 1348",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 562079,
            "range": "± 746",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 541808,
            "range": "± 787",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 541946,
            "range": "± 854",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 562107,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 542717,
            "range": "± 528",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 543044,
            "range": "± 698",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 562035,
            "range": "± 368",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 543187,
            "range": "± 611",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 543312,
            "range": "± 783",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 562088,
            "range": "± 348",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 541585,
            "range": "± 641",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 541638,
            "range": "± 788",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 561998,
            "range": "± 559",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 543067,
            "range": "± 773",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 542770,
            "range": "± 661",
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
            "value": 2293,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/32",
            "value": 2294,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/64",
            "value": 2286,
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
            "value": 2562,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/from_seed/512",
            "value": 3097,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:linux: Initialization/fork",
            "value": 2877,
            "range": "± 2",
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
          "id": "381a49dc5da60739bf177de2ccd523d53a581e32",
          "message": "Provide `advance` methods, and fix bugs that were lowering period (#18)\n\n* Implement jump-ahead\n\n* Partial bug fix\n\n* Partial bug fix\n\n* WIP: switch to a standard LCG\n\n* Fix jump-ahead calculation for standard LCG\n\n* Fix: replace `i_hi` with `i_lo + i_hi` to restore quality of mix",
          "timestamp": "2026-03-05T03:52:22Z",
          "tree_id": "c9e9452c3663d48521961b26b9eb88c896908ab2",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/381a49dc5da60739bf177de2ccd523d53a581e32"
        },
        "date": 1772683195324,
        "tool": "cargo",
        "benches": [
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 430677,
            "range": "± 130734",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 433475,
            "range": "± 89543",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 404801,
            "range": "± 53073",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 400163,
            "range": "± 46036",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 406076,
            "range": "± 57725",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 394394,
            "range": "± 42010",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 389982,
            "range": "± 39215",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 387863,
            "range": "± 48175",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 394655,
            "range": "± 131627",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 407632,
            "range": "± 54587",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 381501,
            "range": "± 32405",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 412744,
            "range": "± 107288",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 423893,
            "range": "± 73699",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 379822,
            "range": "± 33702",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 379635,
            "range": "± 53210",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 451603,
            "range": "± 64916",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 409967,
            "range": "± 52197",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 506615,
            "range": "± 108141",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 468454,
            "range": "± 94483",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 408601,
            "range": "± 45152",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 485457,
            "range": "± 81196",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 477880,
            "range": "± 75977",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 405186,
            "range": "± 129191",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 385846,
            "range": "± 32131",
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
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 2,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/8",
            "value": 2029,
            "range": "± 151",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/16",
            "value": 2053,
            "range": "± 253",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/32",
            "value": 2067,
            "range": "± 266",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/64",
            "value": 2382,
            "range": "± 458",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/128",
            "value": 3139,
            "range": "± 332",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/256",
            "value": 2561,
            "range": "± 400",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/from_seed/512",
            "value": 2806,
            "range": "± 370",
            "unit": "ns/iter"
          },
          {
            "name": "aarch64:macos: Initialization/fork",
            "value": 2644,
            "range": "± 312",
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
          "id": "381a49dc5da60739bf177de2ccd523d53a581e32",
          "message": "Provide `advance` methods, and fix bugs that were lowering period (#18)\n\n* Implement jump-ahead\n\n* Partial bug fix\n\n* Partial bug fix\n\n* WIP: switch to a standard LCG\n\n* Fix jump-ahead calculation for standard LCG\n\n* Fix: replace `i_hi` with `i_lo + i_hi` to restore quality of mix",
          "timestamp": "2026-03-05T03:52:22Z",
          "tree_id": "c9e9452c3663d48521961b26b9eb88c896908ab2",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/381a49dc5da60739bf177de2ccd523d53a581e32"
        },
        "date": 1772683244668,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 833271,
            "range": "± 24024",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 816565,
            "range": "± 20105",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 819116,
            "range": "± 23674",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 830548,
            "range": "± 18982",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 917866,
            "range": "± 33100",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 927856,
            "range": "± 37793",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 830847,
            "range": "± 19447",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 920081,
            "range": "± 25635",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 923610,
            "range": "± 33531",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 827799,
            "range": "± 23096",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 914322,
            "range": "± 23991",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 923307,
            "range": "± 26208",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 825350,
            "range": "± 18893",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 917214,
            "range": "± 31132",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 916121,
            "range": "± 65744",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 824368,
            "range": "± 23704",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 915435,
            "range": "± 28231",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 916912,
            "range": "± 37480",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 823286,
            "range": "± 25925",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 937548,
            "range": "± 70608",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 912384,
            "range": "± 21954",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 820914,
            "range": "± 18306",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 924304,
            "range": "± 155131",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 924384,
            "range": "± 29358",
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
            "value": 7,
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
            "value": 9073,
            "range": "± 1412",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/16",
            "value": 9081,
            "range": "± 320",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/32",
            "value": 9079,
            "range": "± 275",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/64",
            "value": 9131,
            "range": "± 292",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/128",
            "value": 13249,
            "range": "± 399",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/256",
            "value": 10122,
            "range": "± 549",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/from_seed/512",
            "value": 12462,
            "range": "± 621",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:macos: Initialization/fork",
            "value": 11325,
            "range": "± 475",
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
          "id": "381a49dc5da60739bf177de2ccd523d53a581e32",
          "message": "Provide `advance` methods, and fix bugs that were lowering period (#18)\n\n* Implement jump-ahead\n\n* Partial bug fix\n\n* Partial bug fix\n\n* WIP: switch to a standard LCG\n\n* Fix jump-ahead calculation for standard LCG\n\n* Fix: replace `i_hi` with `i_lo + i_hi` to restore quality of mix",
          "timestamp": "2026-03-05T03:52:22Z",
          "tree_id": "c9e9452c3663d48521961b26b9eb88c896908ab2",
          "url": "https://github.com/Pr0methean/TripleMixPrng/commit/381a49dc5da60739bf177de2ccd523d53a581e32"
        },
        "date": 1772683251313,
        "tool": "cargo",
        "benches": [
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng",
            "value": 698050,
            "range": "± 2139",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with SameEndianness reproducibility",
            "value": 688093,
            "range": "± 2054",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 0)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 689399,
            "range": "± 5490",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng",
            "value": 709020,
            "range": "± 12936",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with SameEndianness reproducibility",
            "value": 793703,
            "range": "± 15006",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 1)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 793235,
            "range": "± 4956",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng",
            "value": 708687,
            "range": "± 12148",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with SameEndianness reproducibility",
            "value": 793066,
            "range": "± 9802",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 2)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 793041,
            "range": "± 1797",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng",
            "value": 718864,
            "range": "± 13753",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with SameEndianness reproducibility",
            "value": 793135,
            "range": "± 2245",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 3)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 793289,
            "range": "± 15059",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng",
            "value": 709987,
            "range": "± 11841",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with SameEndianness reproducibility",
            "value": 793110,
            "range": "± 2654",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 4)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 793261,
            "range": "± 8390",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng",
            "value": 708499,
            "range": "± 11992",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with SameEndianness reproducibility",
            "value": 793127,
            "range": "± 2422",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 5)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 793157,
            "range": "± 9847",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng",
            "value": 725039,
            "range": "± 14361",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with SameEndianness reproducibility",
            "value": 793140,
            "range": "± 1808",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 6)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 793246,
            "range": "± 1868",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng",
            "value": 715307,
            "range": "± 16554",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with SameEndianness reproducibility",
            "value": 793084,
            "range": "± 2176",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: fill_bytes 1MB (misalignment: 7)/TripleMixPrng with CrossPlatform reproducibility",
            "value": 793066,
            "range": "± 5047",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng with SameEndianness reproducibility",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: next_u64/TripleMixPrng with CrossPlatform reproducibility",
            "value": 6,
            "range": "± 0",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/8",
            "value": 6799,
            "range": "± 21",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/16",
            "value": 6803,
            "range": "± 14",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/32",
            "value": 6803,
            "range": "± 118",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/64",
            "value": 6797,
            "range": "± 19",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/128",
            "value": 9832,
            "range": "± 151",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/256",
            "value": 7551,
            "range": "± 125",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/from_seed/512",
            "value": 9157,
            "range": "± 20",
            "unit": "cycles/iter"
          },
          {
            "name": "x86_64:linux: Initialization/fork",
            "value": 8376,
            "range": "± 33",
            "unit": "cycles/iter"
          }
        ]
      }
    ]
  }
}