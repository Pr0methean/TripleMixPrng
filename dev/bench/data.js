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