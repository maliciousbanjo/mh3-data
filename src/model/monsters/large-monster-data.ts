import { deepFreeze } from '../../utils';
import { MonsterType } from './enum';
import type { LargeMonster } from './types';

export const GreatJaggi = deepFreeze<LargeMonster>({
  id: 17,
  name: 'Great Jaggi',
  type: MonsterType.BrdWyv,
  threat: 3,
  description:
    'The commanding alpha male of Jaggi packs. Most males leave the group upon reaching maturity, returning later to compete with others. The dominant male then becomes a Great Jaggi. Apparently, they can issue fairly complex orders via howling.',
  hp: 2000,
  quests: {
    '0': {
      '2': [3, 4],
      '4': [3]
    },
    '1': {
      '1': [4, 9],
      '4': [2, 6],
      Arena: [],
      Events: [0]
    }
  },
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.85,
            impact: 0.85,
            gun: 0.65,
            fire: 0.6,
            water: 0.5,
            thunder: 0.5,
            ice: 0.5,
            dragon: 0.1,
            stagger: 120
          }
        },
        {
          name: 'Body',
          values: {
            cut: 0.65,
            impact: 0.63,
            gun: 0.58,
            fire: 0.6,
            water: 0.5,
            thunder: 0.5,
            ice: 0.5,
            dragon: 0.1,
            stagger: 120
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 15,
      damage: {
        initial: 5,
        total: 75
      },
      tolerance: {
        initial: 90,
        max: 210
      },
      recovery: {
        amount: 5,
        wait: 5
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 150,
        max: 230
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 30,
      tolerance: {
        initial: 150,
        max: 210
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 120,
        max: 210
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    exhaust: {
      tolerance: {
        initial: 150,
        max: 350
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 3,
      low: [
        {
          itemId: 281,
          chance: 43
        },
        {
          itemId: 280,
          chance: 30
        },
        {
          itemId: 282,
          chance: 19
        },
        {
          itemId: 279,
          chance: 8
        }
      ],
      high: [
        {
          itemId: 505,
          chance: 35
        },
        {
          itemId: 532,
          chance: 28
        },
        {
          itemId: 281,
          chance: 20
        },
        {
          itemId: 280,
          chance: 17
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Head',
      low: [
        {
          itemId: 282,
          chance: 65,
          count: 1
        },
        {
          itemId: 388,
          chance: 35,
          count: 1
        }
      ],
      high: [
        {
          itemId: 388,
          chance: 70,
          count: 1
        },
        {
          itemId: 282,
          chance: 20,
          count: 1
        },
        {
          itemId: 522,
          chance: 10,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    low: [
      {
        itemId: 253,
        chance: 58
      },
      {
        itemId: 279,
        chance: 42
      }
    ],
    high: [
      {
        itemId: 253,
        chance: 58
      },
      {
        itemId: 505,
        chance: 42
      }
    ]
  },
  capture: {
    health: 40,
    low: [
      {
        itemId: 282,
        chance: 46
      },
      {
        itemId: 281,
        chance: 36
      },
      {
        itemId: 280,
        chance: 18
      }
    ],
    high: [
      {
        itemId: 282,
        chance: 44
      },
      {
        itemId: 532,
        chance: 35
      },
      {
        itemId: 281,
        chance: 17
      },
      {
        itemId: 522,
        chance: 4
      }
    ]
  }
});
export const GreatBaggi = deepFreeze<LargeMonster>({
  id: 18,
  name: 'Great Baggi',
  type: MonsterType.BrdWyv,
  threat: 3,
  description:
    "Carnivorous bird wyverns like the Jaggi. Noted for their projecting cranial crests and bluish-white skin that's adapted to snow. Great Jaggi craftily command other Baggi to surround their prey and stun them with a tranquilizing fluid.",
  quests: {
    '0': {
      '4': [1]
    },
    '1': {
      '2': [13, 14],
      '5': [5],
      Arena: [],
      Events: []
    }
  },
  hp: 3000,
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.6,
            impact: 0.5,
            gun: 0.55,
            fire: 0.5,
            water: 0.2,
            thunder: 0.2,
            ice: 0,
            dragon: 0,
            stagger: 500
          }
        },
        {
          name: 'Body',
          values: {
            cut: 0.4,
            impact: 0.4,
            gun: 0.35,
            fire: 0.5,
            water: 0.2,
            thunder: 0.2,
            ice: 0,
            dragon: 0,
            stagger: 350
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 15,
      damage: {
        initial: 5,
        total: 75
      },
      tolerance: {
        initial: 90,
        max: 210
      },
      recovery: {
        amount: 5,
        wait: 5
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 150,
        max: 230
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 30,
      tolerance: {
        initial: 300,
        max: 500
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 250,
        max: 450
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    exhaust: {
      tolerance: {
        initial: 200,
        max: 400
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 3,
      low: [
        {
          itemId: 518,
          chance: 35
        },
        {
          itemId: 516,
          chance: 25
        },
        {
          itemId: 519,
          chance: 22
        },
        {
          itemId: 507,
          chance: 18
        }
      ],
      high: [
        {
          itemId: 520,
          chance: 32
        },
        {
          itemId: 532,
          chance: 25
        },
        {
          itemId: 517,
          chance: 18
        },
        {
          itemId: 519,
          chance: 15
        },
        {
          itemId: 518,
          chance: 10
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Head',
      low: [
        {
          itemId: 521,
          chance: 60,
          count: 1
        },
        {
          itemId: 516,
          chance: 40,
          count: 1
        }
      ],
      high: [
        {
          itemId: 521,
          chance: 58,
          count: 1
        },
        {
          itemId: 517,
          chance: 30,
          count: 1
        },
        {
          itemId: 522,
          chance: 12,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    low: [
      {
        itemId: 253,
        chance: 58
      },
      {
        itemId: 519,
        chance: 42
      }
    ],
    high: [
      {
        itemId: 253,
        chance: 62
      },
      {
        itemId: 520,
        chance: 38
      }
    ]
  },
  capture: {
    health: 40,
    low: [
      {
        itemId: 507,
        chance: 48
      },
      {
        itemId: 516,
        chance: 32
      },
      {
        itemId: 518,
        chance: 20
      }
    ],
    high: [
      {
        itemId: 532,
        chance: 55
      },
      {
        itemId: 517,
        chance: 26
      },
      {
        itemId: 518,
        chance: 14
      },
      {
        itemId: 522,
        chance: 5
      }
    ]
  }
});
export const Barroth = deepFreeze<LargeMonster>({
  id: 19,
  name: 'Barroth',
  type: MonsterType.BrtWyv,
  threat: 4,
  description:
    'Barroth usually remain beneath the mud, perhaps to shield themselves from heat; they are even known to attack by flinging mud. They will charge in a frenzy at anything that disturbs their bogs.',
  quests: {
    '0': {
      '3': [7],
      '4': [3]
    },
    '1': {
      '2': [7, 15],
      '4': [9, 16],
      Arena: [3],
      Events: []
    }
  },
  hp: 4000,
  monsterStates: [
    {
      name: 'Muddy',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.22,
            impact: 0.25,
            gun: 0.15,
            fire: 0,
            water: 0.5,
            thunder: 0,
            ice: 0.15,
            dragon: 0,
            stagger: 150
          }
        },
        {
          name: 'Body',
          values: {
            cut: 0.35,
            impact: 0.45,
            gun: 0.4,
            fire: 0,
            water: 0.3,
            thunder: 0,
            ice: 0.05,
            dragon: 0,
            stagger: 200
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.35,
            impact: 0.4,
            gun: 0.4,
            fire: 0,
            water: 0.3,
            thunder: 0,
            ice: 0.05,
            dragon: 0,
            stagger: 200
          }
        },
        {
          name: 'Arm',
          values: {
            cut: 0.45,
            impact: 0.5,
            gun: 0.45,
            fire: 0,
            water: 0.25,
            thunder: 0,
            ice: 0.05,
            dragon: 0,
            stagger: 100
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.4,
            impact: 0.4,
            gun: 0.5,
            fire: 0,
            water: 0.3,
            thunder: 0,
            ice: 0.15,
            dragon: 0,
            stagger: 150
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.35,
            impact: 0.3,
            gun: 0.35,
            fire: 0,
            water: 0.25,
            thunder: 0,
            ice: 0.05,
            dragon: 0,
            stagger: 100
          }
        }
      ]
    },
    {
      name: 'Dry',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.22,
            impact: 0.25,
            gun: 0.15,
            fire: 0.4,
            water: 0,
            thunder: 0,
            ice: 0.2,
            dragon: 0.1,
            stagger: 150
          }
        },
        {
          name: 'Body',
          values: {
            cut: 0.35,
            impact: 0.45,
            gun: 0.4,
            fire: 0.25,
            water: 0,
            thunder: 0,
            ice: 0.1,
            dragon: 0.05,
            stagger: 200
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.35,
            impact: 0.45,
            gun: 0.4,
            fire: 0.25,
            water: 0,
            thunder: 0,
            ice: 0.1,
            dragon: 0.05,
            stagger: 200
          }
        },
        {
          name: 'Arm',
          values: {
            cut: 0.45,
            impact: 0.5,
            gun: 0.45,
            fire: 0.2,
            water: 0,
            thunder: 0,
            ice: 0.1,
            dragon: 0.05,
            stagger: 100
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.4,
            impact: 0.4,
            gun: 0.5,
            fire: 0.25,
            water: 0,
            thunder: 0,
            ice: 0.2,
            dragon: 0.1,
            stagger: 150
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.35,
            impact: 0.3,
            gun: 0.35,
            fire: 0.2,
            water: 0,
            thunder: 0,
            ice: 0.1,
            dragon: 0.05,
            stagger: 100
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 40,
      damage: {
        initial: 10,
        total: 200
      },
      tolerance: {
        initial: 150,
        max: 750
      },
      recovery: {
        amount: 10,
        wait: 10
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 200,
        max: 600
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 30,
      tolerance: {
        initial: 150,
        max: 550
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 90,
        max: 490
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    exhaust: {
      tolerance: {
        initial: 150,
        max: 550
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 3,
      low: [
        {
          itemId: 272,
          chance: 46
        },
        {
          itemId: 273,
          chance: 29
        },
        {
          itemId: 276,
          chance: 15
        },
        {
          itemId: 274,
          chance: 10
        }
      ],
      high: [
        {
          itemId: 442,
          chance: 44
        },
        {
          itemId: 443,
          chance: 28
        },
        {
          itemId: 444,
          chance: 18
        },
        {
          itemId: 276,
          chance: 10
        }
      ]
    },
    {
      name: 'Tail',
      count: 1,
      low: [
        {
          itemId: 275,
          chance: 70
        },
        {
          itemId: 273,
          chance: 30
        }
      ],
      high: [
        {
          itemId: 275,
          chance: 45
        },
        {
          itemId: 443,
          chance: 32
        },
        {
          itemId: 273,
          chance: 20
        },
        {
          itemId: 169,
          chance: 3
        }
      ]
    },
    {
      name: 'Head Armor',
      count: 1,
      low: [
        {
          itemId: 276,
          chance: 80
        },
        {
          itemId: 273,
          chance: 20
        }
      ],
      high: [
        {
          itemId: 276,
          chance: 48
        },
        {
          itemId: 443,
          chance: 34
        },
        {
          itemId: 273,
          chance: 15
        },
        {
          itemId: 169,
          chance: 3
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Claws',
      low: [
        {
          itemId: 274,
          chance: 65,
          count: 1
        },
        {
          itemId: 272,
          chance: 35,
          count: 1
        }
      ],
      high: [
        {
          itemId: 444,
          chance: 58,
          count: 1
        },
        {
          itemId: 274,
          chance: 24,
          count: 1
        },
        {
          itemId: 442,
          chance: 18,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    low: [
      {
        itemId: 253,
        chance: 72
      },
      {
        itemId: 389,
        chance: 23
      },
      {
        itemId: 273,
        chance: 5
      }
    ],
    high: [
      {
        itemId: 253,
        chance: 62
      },
      {
        itemId: 389,
        chance: 26
      },
      {
        itemId: 273,
        chance: 12
      }
    ]
  },
  capture: {
    health: 25,
    low: [
      {
        itemId: 276,
        chance: 35
      },
      {
        itemId: 273,
        chance: 32
      },
      {
        itemId: 275,
        chance: 27
      },
      {
        itemId: 272,
        chance: 6
      }
    ],
    high: [
      {
        itemId: 443,
        chance: 28
      },
      {
        itemId: 276,
        chance: 25
      },
      {
        itemId: 275,
        chance: 24
      },
      {
        itemId: 442,
        chance: 15
      },
      {
        itemId: 272,
        chance: 5
      },
      {
        itemId: 169,
        chance: 3
      }
    ]
  }
});
export const Uragaan = deepFreeze<LargeMonster>({
  id: 20,
  name: 'Uragaan',
  type: MonsterType.BrtWyv,
  threat: 5,
  description:
    'Brute wyverns that feed on ore, using their mighty jaws to brush bedrock to powder. They cleverly affix rocks and ore to their hides with lava, then cast them about, using vibrations to make them explode. Will sometimes drop ore.',
  quests: {
    '0': {
      '5': [9, 10],
      '6': [5]
    },
    '1': {
      '3': [11, 12],
      '5': [11, 17],
      '6': [7],
      Arena: [2],
      Events: [1]
    }
  },
  hp: 4500,
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.1,
            impact: 0.2,
            gun: 0.1,
            fire: 0,
            water: 0.4,
            thunder: 0.05,
            ice: 0.2,
            dragon: 0.3,
            stagger: 300
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.25,
            impact: 0.3,
            gun: 0.5,
            fire: 0,
            water: 0.2,
            thunder: 0,
            ice: 0.1,
            dragon: 0.15,
            stagger: 200
          }
        },
        {
          name: 'Back',
          values: {
            cut: 0.25,
            impact: 0.3,
            gun: 0.5,
            fire: 0,
            water: 0.2,
            thunder: 0,
            ice: 0.1,
            dragon: 0.15,
            stagger: 200
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.55,
            impact: 0.4,
            gun: 0.6,
            fire: 0,
            water: 0.4,
            thunder: 0.05,
            ice: 0.15,
            dragon: 0.3,
            stagger: 500
          }
        },
        {
          name: 'Arm',
          values: {
            cut: 0.25,
            impact: 0.3,
            gun: 0.2,
            fire: 0,
            water: 0.15,
            thunder: 0,
            ice: 0.1,
            dragon: 0.15,
            stagger: 200
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.35,
            impact: 0.3,
            gun: 0.4,
            fire: 0,
            water: 0.25,
            thunder: 0,
            ice: 0.1,
            dragon: 0.2,
            stagger: 350
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.25,
            impact: 0.3,
            gun: 0.2,
            fire: 0,
            water: 0.15,
            thunder: 0,
            ice: 0.1,
            dragon: 0.15,
            stagger: 250
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 30,
      damage: {
        initial: 10,
        total: 300
      },
      tolerance: {
        initial: 150,
        max: 450
      },
      recovery: {
        amount: 10,
        wait: 10
      }
    },
    paralysis: {
      duration: 15,
      tolerance: {
        initial: 250,
        max: 650
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 30,
      tolerance: {
        initial: 250,
        max: 650
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 15,
      tolerance: {
        initial: 150,
        max: 450
      },
      recovery: {
        amount: 10,
        wait: 15
      }
    },
    exhaust: {
      tolerance: {
        initial: 300,
        max: 700
      },
      recovery: {
        amount: 10,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 4,
      low: [
        {
          itemId: 445,
          chance: 46
        },
        {
          itemId: 378,
          chance: 34
        },
        {
          itemId: 381,
          chance: 12
        },
        {
          itemId: 379,
          chance: 8
        }
      ],
      high: [
        {
          itemId: 446,
          chance: 39
        },
        {
          itemId: 448,
          chance: 28
        },
        {
          itemId: 379,
          chance: 15
        },
        {
          itemId: 381,
          chance: 10
        },
        {
          itemId: 380,
          chance: 8
        }
      ]
    },
    {
      name: 'Tail',
      count: 1,
      low: [
        {
          itemId: 445,
          chance: 58
        },
        {
          itemId: 379,
          chance: 32
        },
        {
          itemId: 380,
          chance: 10
        }
      ],
      high: [
        {
          itemId: 446,
          chance: 71
        },
        {
          itemId: 379,
          chance: 14
        },
        {
          itemId: 380,
          chance: 10
        },
        {
          itemId: 447,
          chance: 5
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Jaw',
      low: [
        {
          itemId: 381,
          chance: 74,
          count: 1
        },
        {
          itemId: 378,
          chance: 16,
          count: 1
        },
        {
          itemId: 379,
          chance: 10,
          count: 1
        }
      ],
      high: [
        {
          itemId: 381,
          chance: 56,
          count: 1
        },
        {
          itemId: 448,
          chance: 27,
          count: 1
        },
        {
          itemId: 446,
          chance: 14,
          count: 1
        },
        {
          itemId: 447,
          chance: 3,
          count: 1
        }
      ]
    },
    {
      name: 'Tail',
      low: [
        {
          itemId: 445,
          chance: 86,
          count: 1
        },
        {
          itemId: 379,
          chance: 9,
          count: 1
        },
        {
          itemId: 380,
          chance: 5,
          count: 1
        }
      ],
      high: [
        {
          itemId: 446,
          chance: 73,
          count: 1
        },
        {
          itemId: 379,
          chance: 20,
          count: 1
        },
        {
          itemId: 380,
          chance: 7,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    low: [
      {
        itemId: 253,
        chance: 74
      },
      {
        itemId: 378,
        chance: 18
      },
      {
        itemId: 380,
        chance: 8
      }
    ],
    high: [
      {
        itemId: 253,
        chance: 64
      },
      {
        itemId: 378,
        chance: 24
      },
      {
        itemId: 380,
        chance: 12
      }
    ]
  },
  capture: {
    health: 23,
    low: [
      {
        itemId: 378,
        chance: 32
      },
      {
        itemId: 445,
        chance: 26
      },
      {
        itemId: 381,
        chance: 20
      },
      {
        itemId: 379,
        chance: 12
      },
      {
        itemId: 380,
        chance: 10
      }
    ],
    high: [
      {
        itemId: 448,
        chance: 31
      },
      {
        itemId: 381,
        chance: 29
      },
      {
        itemId: 380,
        chance: 17
      },
      {
        itemId: 446,
        chance: 10
      },
      {
        itemId: 379,
        chance: 10
      },
      {
        itemId: 447,
        chance: 3
      }
    ]
  }
});
export const Qurupeco = deepFreeze<LargeMonster>({
  id: 21,
  name: 'Qurupeco',
  type: MonsterType.BrdWyv,
  threat: 3,
  description:
    "Bird wyverns with unique plumage. Well known for using their thoracic vocal organs to imitate other monsters' calls, first summoning them, then using the distraction to flee. Spits a dangerous combustible bodily fluid.",
  quests: {
    '0': {
      '3': [4, 5],
      '4': [3]
    },
    '1': {
      '1': [5, 10],
      '4': [3, 7],
      Arena: [3],
      Events: []
    }
  },
  hp: 3200,
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.8,
            impact: 0.9,
            gun: 0.5,
            fire: 0.1,
            water: 0.3,
            thunder: 0.2,
            ice: 0.4,
            dragon: 0.05,
            stagger: 150
          }
        },
        {
          name: 'Body',
          values: {
            cut: 0.6,
            impact: 0.4,
            gun: 0.7,
            fire: 0.05,
            water: 0.15,
            thunder: 0.2,
            ice: 0.1,
            dragon: 0,
            stagger: 150
          }
        },
        {
          name: 'Pouch',
          values: {
            cut: 0.6,
            impact: 0.4,
            gun: 0.8,
            fire: 0.05,
            water: 0.15,
            thunder: 0.2,
            ice: 0.2,
            dragon: 0,
            stagger: 50
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.4,
            impact: 0.3,
            gun: 0.3,
            fire: 0.1,
            water: 0.25,
            thunder: 0.2,
            ice: 0.3,
            dragon: 0.2,
            stagger: 120
          }
        },
        {
          name: 'Wing',
          values: {
            cut: 0.25,
            impact: 0.25,
            gun: 0.3,
            fire: 0.1,
            water: 0.3,
            thunder: 0.2,
            ice: 0.4,
            dragon: 0,
            stagger: 100
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.4,
            impact: 0.4,
            gun: 0.4,
            fire: 0.05,
            water: 0.15,
            thunder: 0.1,
            ice: 0.2,
            dragon: 0,
            stagger: 130
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 60,
      damage: {
        initial: 5,
        total: 150
      },
      tolerance: {
        initial: 150,
        max: 550
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 150,
        max: 550
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 30,
      tolerance: {
        initial: 150,
        max: 550
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 130,
        max: 530
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    exhaust: {
      tolerance: {
        initial: 150,
        max: 450
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 3,
      low: [
        {
          itemId: 260,
          chance: 45
        },
        {
          itemId: 261,
          chance: 32
        },
        {
          itemId: 150,
          chance: 12
        },
        {
          itemId: 262,
          chance: 9
        },
        {
          itemId: 263,
          chance: 2
        }
      ],
      high: [
        {
          itemId: 165,
          chance: 40
        },
        {
          itemId: 504,
          chance: 32
        },
        {
          itemId: 262,
          chance: 16
        },
        {
          itemId: 150,
          chance: 10
        },
        {
          itemId: 166,
          chance: 2
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Beak',
      low: [
        {
          itemId: 263,
          chance: 60,
          count: 1
        },
        {
          itemId: 150,
          chance: 40,
          count: 1
        }
      ],
      high: [
        {
          itemId: 263,
          chance: 47,
          count: 1
        },
        {
          itemId: 166,
          chance: 30,
          count: 1
        },
        {
          itemId: 150,
          chance: 23,
          count: 1
        }
      ]
    },
    {
      name: 'Wings',
      low: [
        {
          itemId: 261,
          chance: 55,
          count: 1
        },
        {
          itemId: 393,
          chance: 35,
          count: 1
        },
        {
          itemId: 262,
          chance: 10,
          count: 1
        }
      ],
      high: [
        {
          itemId: 504,
          chance: 48,
          count: 1
        },
        {
          itemId: 393,
          chance: 30,
          count: 1
        },
        {
          itemId: 262,
          chance: 19,
          count: 1
        },
        {
          itemId: 169,
          chance: 3,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    low: [
      {
        itemId: 253,
        chance: 64
      },
      {
        itemId: 260,
        chance: 24
      },
      {
        itemId: 261,
        chance: 12
      }
    ],
    high: [
      {
        itemId: 253,
        chance: 64
      },
      {
        itemId: 260,
        chance: 20
      },
      {
        itemId: 261,
        chance: 16
      }
    ]
  },
  capture: {
    health: 40,
    low: [
      {
        itemId: 261,
        chance: 35
      },
      {
        itemId: 282,
        chance: 28
      },
      {
        itemId: 393,
        chance: 20
      },
      {
        itemId: 262,
        chance: 12
      },
      {
        itemId: 263,
        chance: 5
      }
    ],
    high: [
      {
        itemId: 504,
        chance: 35
      },
      {
        itemId: 165,
        chance: 23
      },
      {
        itemId: 282,
        chance: 18
      },
      {
        itemId: 393,
        chance: 13
      },
      {
        itemId: 166,
        chance: 9
      },
      {
        itemId: 169,
        chance: 2
      }
    ]
  }
});
export const Rathian = deepFreeze<LargeMonster>({
  id: 22,
  name: 'Rathian',
  type: MonsterType.FlyWyv,
  threat: 4,
  description:
    'Fire-breathing female wyverns, also known as "Queens of the Land". With powerful legs and [Status.POISON]-secreting tails, they hunt mainly on the ground. Sometimes seen preying as a couple, Rathian cooperate well with Rathalos.',
  quests: {
    '0': {
      '4': [6, 8],
      '6': [0]
    },
    '1': {
      '2': [4, 11],
      '3': [13],
      '4': [4, 8],
      '5': [18],
      '6': [3],
      Arena: [1],
      Events: []
    }
  },
  hp: 4500,
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.9,
            impact: 0.8,
            gun: 0.7,
            fire: 0,
            water: 0.15,
            thunder: 0.2,
            ice: 0.15,
            dragon: 0.35,
            stagger: 200
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.5,
            impact: 0.4,
            gun: 0.4,
            fire: 0,
            water: 0.1,
            thunder: 0.15,
            ice: 0.1,
            dragon: 0.2,
            stagger: 90
          }
        },
        {
          name: 'Back',
          values: {
            cut: 0.25,
            impact: 0.3,
            gun: 0.3,
            fire: 0.15,
            water: 0.1,
            thunder: 0.15,
            ice: 0.1,
            dragon: 0.25,
            stagger: 150
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.6,
            impact: 0.55,
            gun: 0.9,
            fire: 0,
            water: 0.05,
            thunder: 0.2,
            ice: 0.05,
            dragon: 0.1,
            stagger: 150
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.3,
            impact: 0.3,
            gun: 0.25,
            fire: 0,
            water: 0.05,
            thunder: 0.1,
            ice: 0.05,
            dragon: 0.25,
            stagger: 140
          }
        },
        {
          name: 'Wing',
          values: {
            cut: 0.25,
            impact: 0.2,
            gun: 0.25,
            fire: 0,
            water: 0.1,
            thunder: 0.15,
            ice: 0.1,
            dragon: 0.2,
            stagger: 100
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.45,
            impact: 0.4,
            gun: 0.5,
            fire: 0,
            water: 0.05,
            thunder: 0.1,
            ice: 0.05,
            dragon: 0.1,
            stagger: 180
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 60,
      damage: {
        initial: 5,
        total: 150
      },
      tolerance: {
        initial: 180,
        max: 580
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 180,
        max: 620
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 30,
      tolerance: {
        initial: 180,
        max: 580
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 150,
        max: 550
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    exhaust: {
      tolerance: {
        initial: 180,
        max: 480
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 3,
      low: [
        {
          itemId: 247,
          chance: 41
        },
        {
          itemId: 248,
          chance: 30
        },
        {
          itemId: 249,
          chance: 18
        },
        {
          itemId: 252,
          chance: 8
        },
        {
          itemId: 250,
          chance: 3
        }
      ],
      high: [
        {
          itemId: 156,
          chance: 31
        },
        {
          itemId: 157,
          chance: 25
        },
        {
          itemId: 249,
          chance: 18
        },
        {
          itemId: 162,
          chance: 12
        },
        {
          itemId: 250,
          chance: 10
        },
        {
          itemId: 159,
          chance: 4
        }
      ]
    },
    {
      name: 'Tail',
      count: 1,
      low: [
        {
          itemId: 247,
          chance: 73
        },
        {
          itemId: 257,
          chance: 15
        },
        {
          itemId: 250,
          chance: 9
        },
        {
          itemId: 251,
          chance: 3
        }
      ],
      high: [
        {
          itemId: 156,
          chance: 50
        },
        {
          itemId: 158,
          chance: 22
        },
        {
          itemId: 250,
          chance: 15
        },
        {
          itemId: 251,
          chance: 10
        },
        {
          itemId: 160,
          chance: 3
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Head',
      low: [
        {
          itemId: 248,
          chance: 71,
          count: 1
        },
        {
          itemId: 247,
          chance: 26,
          count: 1
        },
        {
          itemId: 251,
          chance: 3,
          count: 1
        }
      ],
      high: [
        {
          itemId: 157,
          chance: 71,
          count: 1
        },
        {
          itemId: 156,
          chance: 26,
          count: 1
        },
        {
          itemId: 160,
          chance: 3,
          count: 1
        }
      ]
    },
    {
      name: 'Wings',
      low: [
        {
          itemId: 353,
          chance: 70,
          count: 1
        },
        {
          itemId: 332,
          chance: 22,
          count: 1
        },
        {
          itemId: 249,
          chance: 8,
          count: 1
        }
      ],
      high: [
        {
          itemId: 353,
          chance: 60,
          count: 1
        },
        {
          itemId: 332,
          chance: 22,
          count: 1
        },
        {
          itemId: 156,
          chance: 18,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    low: [
      {
        itemId: 253,
        chance: 74
      },
      {
        itemId: 247,
        chance: 25
      },
      {
        itemId: 251,
        chance: 1
      }
    ],
    high: [
      {
        itemId: 253,
        chance: 74
      },
      {
        itemId: 247,
        chance: 24
      },
      {
        itemId: 251,
        chance: 2
      }
    ]
  },
  capture: {
    health: 25,
    low: [
      {
        itemId: 247,
        chance: 40
      },
      {
        itemId: 248,
        chance: 30
      },
      {
        itemId: 257,
        chance: 18
      },
      {
        itemId: 250,
        chance: 10
      },
      {
        itemId: 251,
        chance: 2
      }
    ],
    high: [
      {
        itemId: 157,
        chance: 33
      },
      {
        itemId: 156,
        chance: 22
      },
      {
        itemId: 257,
        chance: 16
      },
      {
        itemId: 159,
        chance: 13
      },
      {
        itemId: 158,
        chance: 9
      },
      {
        itemId: 251,
        chance: 4
      },
      {
        itemId: 160,
        chance: 3
      }
    ]
  }
});
export const Rathalos = deepFreeze<LargeMonster>({
  id: 23,
  name: 'Rathalos',
  type: MonsterType.FlyWyv,
  threat: 5,
  description:
    'Terrible wyverns called the "Kings of the Skies". Together with Rathian, they stake wide territories centered around their nests. Rathalos descend on invaders from the sky, attacking with [Status.POISON] claws and breath of fire.',
  quests: {
    '0': {
      '5': [4, 7],
      '6': [0, 4]
    },
    '1': {
      '3': [2, 13, 15],
      '5': [2, 10, 14, 18],
      '6': [3],
      Arena: [],
      Events: [4]
    }
  },
  hp: 4500,
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.75,
            impact: 0.7,
            gun: 0.6,
            fire: 0,
            water: 0.15,
            thunder: 0.2,
            ice: 0.15,
            dragon: 0.35,
            stagger: 200
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.45,
            impact: 0.4,
            gun: 0.4,
            fire: 0,
            water: 0.1,
            thunder: 0.15,
            ice: 0.1,
            dragon: 0.2,
            stagger: 90
          }
        },
        {
          name: 'Back',
          values: {
            cut: 0.25,
            impact: 0.3,
            gun: 0.3,
            fire: 0.15,
            water: 0.1,
            thunder: 0.15,
            ice: 0.1,
            dragon: 0.25,
            stagger: 150
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.45,
            impact: 0.4,
            gun: 0.7,
            fire: 0,
            water: 0.05,
            thunder: 0.2,
            ice: 0.05,
            dragon: 0.1,
            stagger: 150
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.3,
            impact: 0.3,
            gun: 0.25,
            fire: 0,
            water: 0.05,
            thunder: 0.1,
            ice: 0.05,
            dragon: 0.25,
            stagger: 140
          }
        },
        {
          name: 'Wing',
          values: {
            cut: 0.25,
            impact: 0.2,
            gun: 0.25,
            fire: 0,
            water: 0.1,
            thunder: 0.15,
            ice: 0.1,
            dragon: 0.2,
            stagger: 100
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.3,
            impact: 0.25,
            gun: 0.35,
            fire: 0,
            water: 0.05,
            thunder: 0.1,
            ice: 0.05,
            dragon: 0.1,
            stagger: 180
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 60,
      damage: {
        initial: 5,
        total: 150
      },
      tolerance: {
        initial: 180,
        max: 580
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 180,
        max: 620
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 30,
      tolerance: {
        initial: 180,
        max: 580
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 150,
        max: 550
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    exhaust: {
      tolerance: {
        initial: 180,
        max: 480
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 3,
      low: [
        {
          itemId: 254,
          chance: 40
        },
        {
          itemId: 255,
          chance: 28
        },
        {
          itemId: 256,
          chance: 19
        },
        {
          itemId: 252,
          chance: 8
        },
        {
          itemId: 257,
          chance: 5
        }
      ],
      high: [
        {
          itemId: 163,
          chance: 38
        },
        {
          itemId: 164,
          chance: 29
        },
        {
          itemId: 256,
          chance: 18
        },
        {
          itemId: 162,
          chance: 10
        },
        {
          itemId: 158,
          chance: 5
        }
      ]
    },
    {
      name: 'Tail',
      count: 1,
      low: [
        {
          itemId: 259,
          chance: 57
        },
        {
          itemId: 254,
          chance: 23
        },
        {
          itemId: 257,
          chance: 17
        },
        {
          itemId: 258,
          chance: 3
        }
      ],
      high: [
        {
          itemId: 163,
          chance: 38
        },
        {
          itemId: 259,
          chance: 28
        },
        {
          itemId: 158,
          chance: 20
        },
        {
          itemId: 258,
          chance: 12
        },
        {
          itemId: 161,
          chance: 2
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'hitzones: {Head',
      low: [
        {
          itemId: 254,
          chance: 66,
          count: 1
        },
        {
          itemId: 255,
          chance: 31,
          count: 1
        },
        {
          itemId: 258,
          chance: 3,
          count: 1
        }
      ],
      high: [
        {
          itemId: 163,
          chance: 65,
          count: 1
        },
        {
          itemId: 164,
          chance: 31,
          count: 1
        },
        {
          itemId: 161,
          chance: 4,
          count: 1
        }
      ]
    },
    {
      name: 'Wings',
      low: [
        {
          itemId: 353,
          chance: 70,
          count: 1
        },
        {
          itemId: 332,
          chance: 22,
          count: 1
        },
        {
          itemId: 256,
          chance: 8,
          count: 1
        }
      ],
      high: [
        {
          itemId: 353,
          chance: 60,
          count: 1
        },
        {
          itemId: 332,
          chance: 22,
          count: 1
        },
        {
          itemId: 163,
          chance: 18,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    low: [
      {
        itemId: 253,
        chance: 74
      },
      {
        itemId: 254,
        chance: 24
      },
      {
        itemId: 258,
        chance: 2
      }
    ],
    high: [
      {
        itemId: 253,
        chance: 74
      },
      {
        itemId: 254,
        chance: 23
      },
      {
        itemId: 258,
        chance: 3
      }
    ]
  },
  capture: {
    health: 23,
    low: [
      {
        itemId: 255,
        chance: 42
      },
      {
        itemId: 256,
        chance: 29
      },
      {
        itemId: 257,
        chance: 18
      },
      {
        itemId: 259,
        chance: 9
      },
      {
        itemId: 258,
        chance: 2
      }
    ],
    high: [
      {
        itemId: 164,
        chance: 34
      },
      {
        itemId: 163,
        chance: 23
      },
      {
        itemId: 257,
        chance: 15
      },
      {
        itemId: 259,
        chance: 12
      },
      {
        itemId: 158,
        chance: 10
      },
      {
        itemId: 258,
        chance: 3
      },
      {
        itemId: 161,
        chance: 3
      }
    ]
  }
});
export const Diablos = deepFreeze<LargeMonster>({
  id: 24,
  name: 'Diablos',
  type: MonsterType.FlyWyv,
  threat: 5,
  description:
    'Wyverns feared as desert tyrants. Extremely territorial, Diablos attack invaders with blind aggression. Highly sensitive to sound, perhaps because they frequently travel beneath the sand. Known to feed on cacti.',
  quests: {
    '0': {
      '5': [6],
      '6': [1]
    },
    '1': {
      '3': [3, 4],
      '5': [3],
      '6': [4],
      Arena: [],
      Events: [1]
    }
  },
  hp: 5000,
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.25,
            impact: 0.1,
            gun: 0.2,
            fire: 0,
            water: 0.15,
            thunder: 0.15,
            ice: 0.3,
            dragon: 0.15,
            stagger: 250
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.45,
            impact: 0.45,
            gun: 0.3,
            fire: 0,
            water: 0.1,
            thunder: 0.1,
            ice: 0.2,
            dragon: 0.1,
            stagger: 150
          }
        },
        {
          name: 'Back',
          values: {
            cut: 0.23,
            impact: 0.35,
            gun: 0.2,
            fire: 0.1,
            water: 0.15,
            thunder: 0.15,
            ice: 0.3,
            dragon: 0.15,
            stagger: 350
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.68,
            impact: 0.77,
            gun: 0.4,
            fire: 0,
            water: 0.1,
            thunder: 0.1,
            ice: 0.2,
            dragon: 0.1,
            stagger: 150
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.5,
            impact: 0.25,
            gun: 0.6,
            fire: 0,
            water: 0.1,
            thunder: 0.1,
            ice: 0.2,
            dragon: 0.1,
            stagger: 250
          }
        },
        {
          name: 'Tail (top)',
          values: {
            cut: 0.22,
            impact: 0.35,
            gun: 0.1,
            fire: 0.1,
            water: 0.15,
            thunder: 0.15,
            ice: 0.3,
            dragon: 0.15,
            stagger: 250
          }
        },
        {
          name: 'Wing',
          values: {
            cut: 0.4,
            impact: 0.3,
            gun: 0.45,
            fire: 0,
            water: 0.1,
            thunder: 0.1,
            ice: 0.2,
            dragon: 0.1,
            stagger: 150
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.3,
            impact: 0.35,
            gun: 0.35,
            fire: 0,
            water: 0.05,
            thunder: 0.05,
            ice: 0.1,
            dragon: 0.05,
            stagger: 250
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 50,
      damage: {
        initial: 5,
        total: 250
      },
      tolerance: {
        initial: 200,
        max: 400
      },
      recovery: {
        amount: 10,
        wait: 5
      }
    },
    paralysis: {
      duration: 15,
      tolerance: {
        initial: 200,
        max: 600
      },
      recovery: {
        amount: 5,
        wait: 15
      }
    },
    sleep: {
      duration: 40,
      tolerance: {
        initial: 150,
        max: 350
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 150,
        max: 550
      },
      recovery: {
        amount: 5,
        wait: 15
      }
    },
    exhaust: {
      tolerance: {
        initial: 300,
        max: 700
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 3,
      low: [
        {
          itemId: 269,
          chance: 63
        },
        {
          itemId: 268,
          chance: 30
        },
        {
          itemId: 270,
          chance: 7
        }
      ],
      high: [
        {
          itemId: 422,
          chance: 56
        },
        {
          itemId: 268,
          chance: 25
        },
        {
          itemId: 269,
          chance: 12
        },
        {
          itemId: 423,
          chance: 7
        }
      ]
    },
    {
      name: 'Tail',
      count: 1,
      low: [
        {
          itemId: 269,
          chance: 52
        },
        {
          itemId: 271,
          chance: 40
        },
        {
          itemId: 421,
          chance: 8
        }
      ],
      high: [
        {
          itemId: 271,
          chance: 48
        },
        {
          itemId: 422,
          chance: 26
        },
        {
          itemId: 421,
          chance: 12
        },
        {
          itemId: 269,
          chance: 10
        },
        {
          itemId: 169,
          chance: 4
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Horns',
      low: [
        {
          itemId: 354,
          chance: 92,
          count: 1
        },
        {
          itemId: 355,
          chance: 8,
          count: 1
        }
      ],
      high: [
        {
          itemId: 354,
          chance: 64,
          count: 1
        },
        {
          itemId: 355,
          chance: 24,
          count: 1
        },
        {
          itemId: 424,
          chance: 12,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    low: [
      {
        itemId: 253,
        chance: 95
      },
      {
        itemId: 270,
        chance: 5
      }
    ],
    high: [
      {
        itemId: 253,
        chance: 85
      },
      {
        itemId: 270,
        chance: 15
      }
    ]
  },
  capture: {
    health: 23,
    low: [
      {
        itemId: 268,
        chance: 32
      },
      {
        itemId: 269,
        chance: 25
      },
      {
        itemId: 271,
        chance: 20
      },
      {
        itemId: 270,
        chance: 13
      },
      {
        itemId: 421,
        chance: 10
      }
    ],
    high: [
      {
        itemId: 268,
        chance: 30
      },
      {
        itemId: 271,
        chance: 19
      },
      {
        itemId: 270,
        chance: 15
      },
      {
        itemId: 421,
        chance: 14
      },
      {
        itemId: 423,
        chance: 10
      },
      {
        itemId: 422,
        chance: 8
      },
      {
        itemId: 169,
        chance: 4
      }
    ]
  }
});
export const Gigginox = deepFreeze<LargeMonster>({
  id: 25,
  name: 'Gigginox',
  type: MonsterType.FlyWyv,
  threat: 4,
  description:
    'Wyverns that inhabit the Tundra. Known to stun prey with [Status.POISON], then freeze the meat in caves. Gigginox live in darkness and thus have degraded vision; they detect prey through body heat. Extremely fertile, laying innumerable eggs.',
  quests: {
    '0': {
      '4': [7]
    },
    '1': {
      '3': [6, 14],
      '5': [6, 7],
      Arena: [],
      Events: []
    }
  },
  hp: 4500,
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.45,
            impact: 0.6,
            gun: 0.5,
            fire: 0.3,
            water: 0.2,
            thunder: 0,
            ice: 0,
            dragon: 0.05,
            stagger: 200
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.4,
            impact: 0.45,
            gun: 0.35,
            fire: 0.25,
            water: 0.1,
            thunder: 0,
            ice: 0,
            dragon: 0.05,
            stagger: 220
          }
        },
        {
          name: 'Back',
          values: {
            cut: 0.35,
            impact: 0.3,
            gun: 0.25,
            fire: 0.2,
            water: 0.05,
            thunder: 0,
            ice: 0,
            dragon: 0.05,
            stagger: 220
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.55,
            impact: 0.45,
            gun: 0.5,
            fire: 0.3,
            water: 0.15,
            thunder: 0,
            ice: 0,
            dragon: 0.05,
            stagger: 180
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.4,
            impact: 0.35,
            gun: 0.4,
            fire: 0.2,
            water: 0.15,
            thunder: 0,
            ice: 0,
            dragon: 0.05,
            stagger: 150
          }
        },
        {
          name: 'Wing',
          values: {
            cut: 0.3,
            impact: 0.3,
            gun: 0.1,
            fire: 0.1,
            water: 0.1,
            thunder: 0,
            ice: 0,
            dragon: 0.05,
            stagger: 180
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.45,
            impact: 0.45,
            gun: 0.15,
            fire: 0.1,
            water: 0.1,
            thunder: 0,
            ice: 0,
            dragon: 0.05,
            stagger: 140
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 30,
      damage: {
        initial: 5,
        total: 75
      },
      tolerance: {
        initial: 240,
        max: 800
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 180,
        max: 660
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 40,
      tolerance: {
        initial: 200,
        max: 680
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 180,
        max: 580
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    exhaust: {
      tolerance: {
        initial: 180,
        max: 580
      },
      recovery: {
        amount: 10,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 3,
      low: [
        {
          itemId: 264,
          chance: 38
        },
        {
          itemId: 267,
          chance: 24
        },
        {
          itemId: 167,
          chance: 17
        },
        {
          itemId: 266,
          chance: 12
        },
        {
          itemId: 265,
          chance: 9
        }
      ],
      high: [
        {
          itemId: 173,
          chance: 28
        },
        {
          itemId: 176,
          chance: 20
        },
        {
          itemId: 267,
          chance: 15
        },
        {
          itemId: 265,
          chance: 13
        },
        {
          itemId: 168,
          chance: 10
        },
        {
          itemId: 175,
          chance: 9
        },
        {
          itemId: 174,
          chance: 5
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'hitzones: {Head & Belly',
      low: [
        {
          itemId: 264,
          chance: 44,
          count: 1
        },
        {
          itemId: 267,
          chance: 32,
          count: 1
        },
        {
          itemId: 168,
          chance: 12,
          count: 1
        },
        {
          itemId: 265,
          chance: 12,
          count: 1
        }
      ],
      high: [
        {
          itemId: 265,
          chance: 45,
          count: 1
        },
        {
          itemId: 267,
          chance: 28,
          count: 1
        },
        {
          itemId: 168,
          chance: 14,
          count: 1
        },
        {
          itemId: 174,
          chance: 13,
          count: 1
        }
      ]
    },
    {
      name: 'Tail',
      low: [
        {
          itemId: 264,
          chance: 40,
          count: 1
        },
        {
          itemId: 266,
          chance: 36,
          count: 1
        },
        {
          itemId: 265,
          chance: 24,
          count: 1
        }
      ],
      high: [
        {
          itemId: 265,
          chance: 44,
          count: 1
        },
        {
          itemId: 175,
          chance: 28,
          count: 1
        },
        {
          itemId: 173,
          chance: 16,
          count: 1
        },
        {
          itemId: 174,
          chance: 8,
          count: 1
        },
        {
          itemId: 169,
          chance: 4,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    low: [
      {
        itemId: 253,
        chance: 80
      },
      {
        itemId: 267,
        chance: 20
      }
    ],
    high: [
      {
        itemId: 253,
        chance: 60
      },
      {
        itemId: 267,
        chance: 40
      }
    ]
  },
  capture: {
    health: 25,
    low: [
      {
        itemId: 267,
        chance: 40
      },
      {
        itemId: 266,
        chance: 27
      },
      {
        itemId: 167,
        chance: 20
      },
      {
        itemId: 265,
        chance: 13
      }
    ],
    high: [
      {
        itemId: 267,
        chance: 30
      },
      {
        itemId: 175,
        chance: 25
      },
      {
        itemId: 167,
        chance: 19
      },
      {
        itemId: 265,
        chance: 15
      },
      {
        itemId: 174,
        chance: 8
      },
      {
        itemId: 169,
        chance: 3
      }
    ]
  }
});
export const Barioth = deepFreeze<LargeMonster>({
  id: 26,
  name: 'Barioth',
  type: MonsterType.FlyWyv,
  threat: 5,
  description:
    'Wyverns that rule the eternally frozen Tundra. Barioth use their huge tusks and spiked scales to move freely atop the slippery ice; this ability makes them very difficult to keep up with.',
  quests: {
    '0': {
      '5': [5],
      '6': [3]
    },
    '1': {
      '3': [7, 8],
      '5': [8, 16],
      '6': [6],
      Arena: [4],
      Events: [4]
    }
  },
  hp: 4000,
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.55,
            impact: 0.6,
            gun: 0.6,
            fire: 0.35,
            water: 0.1,
            thunder: 0.3,
            ice: 0,
            dragon: 0.15,
            stagger: 180
          }
        },
        {
          name: 'Body',
          values: {
            cut: 0.3,
            impact: 0.25,
            gun: 0.25,
            fire: 0.25,
            water: 0.05,
            thunder: 0.2,
            ice: 0,
            dragon: 0.1,
            stagger: 200
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.45,
            impact: 0.25,
            gun: 0.4,
            fire: 0.15,
            water: 0,
            thunder: 0.1,
            ice: 0,
            dragon: 0.05,
            stagger: 200
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.4,
            impact: 0.4,
            gun: 0.35,
            fire: 0.15,
            water: 0,
            thunder: 0.1,
            ice: 0,
            dragon: 0.05,
            stagger: 230
          }
        },
        {
          name: 'Arm',
          values: {
            cut: 0.3,
            impact: 0.3,
            gun: 0.3,
            fire: 0.15,
            water: 0,
            thunder: 0.1,
            ice: 0,
            dragon: 0.05,
            stagger: 200
          }
        },
        {
          name: 'Wing',
          values: {
            cut: 0.25,
            impact: 0.3,
            gun: 0.2,
            fire: 0.2,
            water: 0.05,
            thunder: 0.25,
            ice: 0,
            dragon: 0.05,
            stagger: 180
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.3,
            impact: 0.3,
            gun: 0.3,
            fire: 0.1,
            water: 0.05,
            thunder: 0.05,
            ice: 0,
            dragon: 0,
            stagger: 180
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 60,
      damage: {
        initial: 5,
        total: 150
      },
      tolerance: {
        initial: 180,
        max: 780
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 180,
        max: 780
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 30,
      tolerance: {
        initial: 180,
        max: 780
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 130,
        max: 650
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    exhaust: {
      tolerance: {
        initial: 180,
        max: 480
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 3,
      low: [
        {
          itemId: 372,
          chance: 43
        },
        {
          itemId: 377,
          chance: 28
        },
        {
          itemId: 373,
          chance: 19
        },
        {
          itemId: 374,
          chance: 10
        }
      ],
      high: [
        {
          itemId: 417,
          chance: 35
        },
        {
          itemId: 170,
          chance: 25
        },
        {
          itemId: 418,
          chance: 18
        },
        {
          itemId: 419,
          chance: 12
        },
        {
          itemId: 373,
          chance: 10
        }
      ]
    },
    {
      name: 'Tail',
      count: 1,
      low: [
        {
          itemId: 394,
          chance: 54
        },
        {
          itemId: 372,
          chance: 30
        },
        {
          itemId: 376,
          chance: 15
        }
      ],
      high: [
        {
          itemId: 394,
          chance: 42
        },
        {
          itemId: 417,
          chance: 36
        },
        {
          itemId: 376,
          chance: 18
        },
        {
          itemId: 169,
          chance: 4
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Tusks',
      low: [
        {
          itemId: 372,
          chance: 45,
          count: 1
        },
        {
          itemId: 374,
          chance: 37,
          count: 1
        },
        {
          itemId: 377,
          chance: 18,
          count: 1
        }
      ],
      high: [
        {
          itemId: 419,
          chance: 45,
          count: 1
        },
        {
          itemId: 417,
          chance: 35,
          count: 1
        },
        {
          itemId: 170,
          chance: 20,
          count: 1
        }
      ]
    },
    {
      name: 'Wings',
      low: [
        {
          itemId: 373,
          chance: 47,
          count: 1
        },
        {
          itemId: 375,
          chance: 38,
          count: 1
        },
        {
          itemId: 376,
          chance: 15,
          count: 1
        }
      ],
      high: [
        {
          itemId: 418,
          chance: 47,
          count: 1
        },
        {
          itemId: 420,
          chance: 35,
          count: 1
        },
        {
          itemId: 376,
          chance: 18,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    low: [
      {
        itemId: 253,
        chance: 60
      },
      {
        itemId: 376,
        chance: 24
      },
      {
        itemId: 377,
        chance: 16
      }
    ],
    high: [
      {
        itemId: 253,
        chance: 50
      },
      {
        itemId: 376,
        chance: 32
      },
      {
        itemId: 377,
        chance: 18
      }
    ]
  },
  capture: {
    health: 23,
    low: [
      {
        itemId: 374,
        chance: 31
      },
      {
        itemId: 375,
        chance: 25
      },
      {
        itemId: 377,
        chance: 20
      },
      {
        itemId: 376,
        chance: 15
      },
      {
        itemId: 373,
        chance: 9
      }
    ],
    high: [
      {
        itemId: 419,
        chance: 22
      },
      {
        itemId: 170,
        chance: 22
      },
      {
        itemId: 420,
        chance: 20
      },
      {
        itemId: 376,
        chance: 18
      },
      {
        itemId: 418,
        chance: 14
      },
      {
        itemId: 169,
        chance: 4
      }
    ]
  }
});
export const RoyalLudroth = deepFreeze<LargeMonster>({
  id: 27,
  name: 'Royal Ludroth',
  type: MonsterType.Levthn,
  threat: 3,
  description:
    'Royal Ludroth use their sponge-like neck scales to absorb water and prevent drying out on land. Once the sponge loses moisture, they attempt to re-enter the water. They also spew mucus to trip up their prey.',
  quests: {
    '0': {
      '3': [6, 8],
      '6': [2]
    },
    '1': {
      '1': [6, 13],
      '4': [13, 15],
      Arena: [0],
      Events: []
    }
  },
  hp: 3800,
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.5,
            impact: 0.8,
            gun: 0.65,
            fire: 0.3,
            water: 0,
            thunder: 0.05,
            ice: 0.05,
            dragon: 0.05,
            stagger: 130
          }
        },
        {
          name: 'Mane',
          values: {
            cut: 0.75,
            impact: 0.5,
            gun: 0.4,
            fire: 0.4,
            water: 0,
            thunder: 0.15,
            ice: 0.1,
            dragon: 0,
            stagger: 200
          }
        },
        {
          name: 'Back',
          values: {
            cut: 0.3,
            impact: 0.45,
            gun: 0.35,
            fire: 0.3,
            water: 0,
            thunder: 0.1,
            ice: 0.05,
            dragon: 0.05,
            stagger: 150
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.65,
            impact: 0.55,
            gun: 0.45,
            fire: 0.35,
            water: 0,
            thunder: 0.1,
            ice: 0.1,
            dragon: 0,
            stagger: 150
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.65,
            impact: 0.65,
            gun: 0.4,
            fire: 0.25,
            water: 0,
            thunder: 0.05,
            ice: 0.05,
            dragon: 0,
            stagger: 150
          }
        },
        {
          name: 'Front Leg',
          values: {
            cut: 0.3,
            impact: 0.4,
            gun: 0.25,
            fire: 0.2,
            water: 0,
            thunder: 0.1,
            ice: 0.1,
            dragon: 0,
            stagger: 140
          }
        },
        {
          name: 'Back Leg',
          values: {
            cut: 0.4,
            impact: 0.35,
            gun: 0.3,
            fire: 0.2,
            water: 0,
            thunder: 0.1,
            ice: 0.05,
            dragon: 0,
            stagger: 140
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 60,
      damage: {
        initial: 5,
        total: 150
      },
      tolerance: {
        initial: 180,
        max: 660
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 180,
        max: 780
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 60,
      tolerance: {
        initial: 180,
        max: 660
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 200,
        max: 600
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    exhaust: {
      tolerance: {
        initial: 180,
        max: 780
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 3,
      low: [
        {
          itemId: 290,
          chance: 32
        },
        {
          itemId: 289,
          chance: 26
        },
        {
          itemId: 291,
          chance: 19
        },
        {
          itemId: 293,
          chance: 15
        },
        {
          itemId: 456,
          chance: 8
        }
      ],
      high: [
        {
          itemId: 458,
          chance: 35
        },
        {
          itemId: 457,
          chance: 24
        },
        {
          itemId: 459,
          chance: 16
        },
        {
          itemId: 293,
          chance: 15
        },
        {
          itemId: 456,
          chance: 10
        }
      ]
    },
    {
      name: 'Tail',
      count: 1,
      low: [
        {
          itemId: 292,
          chance: 65
        },
        {
          itemId: 290,
          chance: 35
        }
      ],
      high: [
        {
          itemId: 458,
          chance: 56
        },
        {
          itemId: 292,
          chance: 42
        },
        {
          itemId: 169,
          chance: 2
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Crest',
      low: [
        {
          itemId: 371,
          chance: 80,
          count: 1
        },
        {
          itemId: 290,
          chance: 20,
          count: 1
        }
      ],
      high: [
        {
          itemId: 371,
          chance: 50,
          count: 1
        },
        {
          itemId: 458,
          chance: 35,
          count: 1
        },
        {
          itemId: 460,
          chance: 15,
          count: 1
        }
      ]
    },
    {
      name: 'Mane',
      low: [
        {
          itemId: 289,
          chance: 43,
          count: 1
        },
        {
          itemId: 456,
          chance: 37,
          count: 1
        },
        {
          itemId: 293,
          chance: 20,
          count: 1
        }
      ],
      high: [
        {
          itemId: 456,
          chance: 40,
          count: 1
        },
        {
          itemId: 457,
          chance: 28,
          count: 1
        },
        {
          itemId: 293,
          chance: 20,
          count: 1
        },
        {
          itemId: 289,
          chance: 12,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    low: [
      {
        itemId: 253,
        chance: 62
      },
      {
        itemId: 293,
        chance: 28
      },
      {
        itemId: 290,
        chance: 10
      }
    ],
    high: [
      {
        itemId: 253,
        chance: 62
      },
      {
        itemId: 293,
        chance: 26
      },
      {
        itemId: 290,
        chance: 12
      }
    ]
  },
  capture: {
    health: 40,
    low: [
      {
        itemId: 293,
        chance: 32
      },
      {
        itemId: 289,
        chance: 30
      },
      {
        itemId: 456,
        chance: 25
      },
      {
        itemId: 290,
        chance: 13
      }
    ],
    high: [
      {
        itemId: 457,
        chance: 32
      },
      {
        itemId: 456,
        chance: 22
      },
      {
        itemId: 460,
        chance: 18
      },
      {
        itemId: 293,
        chance: 15
      },
      {
        itemId: 289,
        chance: 10
      },
      {
        itemId: 169,
        chance: 3
      }
    ]
  }
});
export const Gobul = deepFreeze<LargeMonster>({
  id: 28,
  name: 'Gobul',
  type: MonsterType.Levthn,
  threat: 4,
  description:
    'Monsters with strong camouflage skills and powerful neurotoxins. Poor swimmers, Gobul conceal themselves and lure prey by imitating plants with their barbels. Can reportedly swallow Epioth whole. They love frogs.',
  quests: {
    '0': {
      '4': [10],
      '6': [2]
    },
    '1': {
      '2': [9, 10],
      '4': [14, 17],
      '6': [5],
      Arena: [],
      Events: [2]
    }
  },
  hp: 4000,
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.45,
            impact: 0.4,
            gun: 0.4,
            fire: 0.15,
            water: 0,
            thunder: 0.2,
            ice: 0.05,
            dragon: 0,
            stagger: 240
          }
        },
        {
          name: 'Lantern',
          values: {
            cut: 0.65,
            impact: 0.7,
            gun: 0.5,
            fire: 0.1,
            water: 0,
            thunder: 0.25,
            ice: 0.05,
            dragon: 0,
            stagger: 80
          }
        },
        {
          name: 'Body',
          values: {
            cut: 0.4,
            impact: 0.35,
            gun: 0.4,
            fire: 0.05,
            water: 0,
            thunder: 0.15,
            ice: 0,
            dragon: 0,
            stagger: 280
          }
        },
        {
          name: 'Chest',
          values: {
            cut: 0.55,
            impact: 0.4,
            gun: 0.6,
            fire: 0,
            water: 0,
            thunder: 0.05,
            ice: 0.05,
            dragon: 0,
            stagger: 280
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.5,
            impact: 0.25,
            gun: 0.35,
            fire: 0,
            water: 0,
            thunder: 0.2,
            ice: 0,
            dragon: 0,
            stagger: 280
          }
        },
        {
          name: 'Back',
          values: {
            cut: 0.2,
            impact: 0.5,
            gun: 0.2,
            fire: 0.15,
            water: 0,
            thunder: 0.3,
            ice: 0.05,
            dragon: 0,
            stagger: 280
          }
        },
        {
          name: 'Fin',
          values: {
            cut: 0.25,
            impact: 0.35,
            gun: 0.4,
            fire: 0.1,
            water: 0,
            thunder: 0.05,
            ice: 0,
            dragon: 0,
            stagger: 120
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.35,
            impact: 0.4,
            gun: 0.35,
            fire: 0.05,
            water: 0,
            thunder: 0.15,
            ice: 0,
            dragon: 0,
            stagger: 200
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 120,
      damage: {
        initial: 5,
        total: 150
      },
      tolerance: {
        initial: 180,
        max: 620
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 200,
        max: 840
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 30,
      tolerance: {
        initial: 180,
        max: 660
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 200,
        max: 600
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    exhaust: {
      tolerance: {
        initial: 180,
        max: 580
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 3,
      low: [
        {
          itemId: 297,
          chance: 38
        },
        {
          itemId: 296,
          chance: 27
        },
        {
          itemId: 298,
          chance: 17
        },
        {
          itemId: 299,
          chance: 10
        },
        {
          itemId: 390,
          chance: 8
        }
      ],
      high: [
        {
          itemId: 462,
          chance: 38
        },
        {
          itemId: 298,
          chance: 20
        },
        {
          itemId: 461,
          chance: 18
        },
        {
          itemId: 390,
          chance: 10
        },
        {
          itemId: 299,
          chance: 9
        },
        {
          itemId: 296,
          chance: 5
        }
      ]
    },
    {
      name: 'Tail',
      count: 1,
      low: [
        {
          itemId: 296,
          chance: 44
        },
        {
          itemId: 299,
          chance: 32
        },
        {
          itemId: 297,
          chance: 24
        }
      ],
      high: [
        {
          itemId: 464,
          chance: 38
        },
        {
          itemId: 461,
          chance: 28
        },
        {
          itemId: 296,
          chance: 22
        },
        {
          itemId: 297,
          chance: 12
        }
      ]
    },
    {
      name: 'Whisker',
      count: 3,
      low: [
        {
          itemId: 390,
          chance: 65
        },
        {
          itemId: 296,
          chance: 24
        },
        {
          itemId: 297,
          chance: 11
        }
      ],
      high: [
        {
          itemId: 390,
          chance: 65
        },
        {
          itemId: 296,
          chance: 24
        },
        {
          itemId: 297,
          chance: 11
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Lantern',
      low: [
        {
          itemId: 302,
          chance: 100,
          count: 1
        }
      ],
      high: [
        {
          itemId: 302,
          chance: 86,
          count: 1
        },
        {
          itemId: 463,
          chance: 14,
          count: 1
        }
      ]
    }
  ],
  capture: {
    health: 25,
    low: [
      {
        itemId: 297,
        chance: 38
      },
      {
        itemId: 296,
        chance: 27
      },
      {
        itemId: 298,
        chance: 20
      },
      {
        itemId: 390,
        chance: 15
      }
    ],
    high: [
      {
        itemId: 462,
        chance: 29
      },
      {
        itemId: 461,
        chance: 24
      },
      {
        itemId: 298,
        chance: 20
      },
      {
        itemId: 390,
        chance: 10
      },
      {
        itemId: 464,
        chance: 8
      },
      {
        itemId: 297,
        chance: 7
      },
      {
        itemId: 169,
        chance: 2
      }
    ]
  }
});
export const Lagiacrus = deepFreeze<LargeMonster>({
  id: 29,
  name: 'Lagiacrus',
  type: MonsterType.Levthn,
  threat: 5,
  description:
    'Known as sea wyverns, Lagiacrus are at the top of the aquatic food chain. Feared by sailors as the "Lords of the Seas", they store enough electricity in their spinal organs to make the oceans surge. Occasionally seen resting on land.',
  quests: {
    '0': {
      '1': [4],
      '5': [2, 11, 12],
      '6': [4]
    },
    '1': {
      '3': [5, 17],
      '5': [4, 15],
      '6': [5],
      Arena: [],
      Events: []
    }
  },
  hp: 4300,
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.4,
            impact: 0.4,
            gun: 0.4,
            fire: 0.15,
            water: 0,
            thunder: 0,
            ice: 0.05,
            dragon: 0.05,
            stagger: 230
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.35,
            impact: 0.35,
            gun: 0.2,
            fire: 0.15,
            water: 0,
            thunder: 0,
            ice: 0.05,
            dragon: 0.05,
            stagger: 150
          }
        },
        {
          name: 'Back',
          values: {
            cut: 0.25,
            impact: 0.4,
            gun: 0.15,
            fire: 0.25,
            water: 0,
            thunder: 0,
            ice: 0.15,
            dragon: 0.15,
            stagger: 100
          }
        },
        {
          name: 'Body',
          values: {
            cut: 0.45,
            impact: 0.4,
            gun: 0.35,
            fire: 0.2,
            water: 0,
            thunder: 0,
            ice: 0.1,
            dragon: 0.1,
            stagger: 200
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.3,
            impact: 0.35,
            gun: 0.15,
            fire: 0.15,
            water: 0,
            thunder: 0,
            ice: 0.05,
            dragon: 0.05,
            stagger: 200
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.27,
            impact: 0.25,
            gun: 0.1,
            fire: 0.15,
            water: 0,
            thunder: 0,
            ice: 0.05,
            dragon: 0.05,
            stagger: 180
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 60,
      damage: {
        initial: 5,
        total: 150
      },
      tolerance: {
        initial: 180,
        max: 700
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 180,
        max: 780
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 30,
      tolerance: {
        initial: 180,
        max: 700
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 150,
        max: 750
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    exhaust: {
      tolerance: {
        initial: 180,
        max: 660
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 3,
      low: [
        {
          itemId: 283,
          chance: 41
        },
        {
          itemId: 284,
          chance: 29
        },
        {
          itemId: 285,
          chance: 20
        },
        {
          itemId: 391,
          chance: 10
        }
      ],
      high: [
        {
          itemId: 465,
          chance: 38
        },
        {
          itemId: 466,
          chance: 27
        },
        {
          itemId: 391,
          chance: 15
        },
        {
          itemId: 467,
          chance: 12
        },
        {
          itemId: 286,
          chance: 8
        }
      ]
    },
    {
      name: 'Tail',
      count: 1,
      low: [
        {
          itemId: 287,
          chance: 63
        },
        {
          itemId: 284,
          chance: 33
        },
        {
          itemId: 288,
          chance: 4
        }
      ],
      high: [
        {
          itemId: 287,
          chance: 58
        },
        {
          itemId: 466,
          chance: 29
        },
        {
          itemId: 288,
          chance: 10
        },
        {
          itemId: 469,
          chance: 3
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Horn',
      low: [
        {
          itemId: 392,
          chance: 64,
          count: 1
        },
        {
          itemId: 284,
          chance: 33,
          count: 1
        },
        {
          itemId: 288,
          chance: 3,
          count: 1
        }
      ],
      high: [
        {
          itemId: 468,
          chance: 42,
          count: 1
        },
        {
          itemId: 466,
          chance: 33,
          count: 1
        },
        {
          itemId: 392,
          chance: 20,
          count: 1
        },
        {
          itemId: 288,
          chance: 5,
          count: 1
        }
      ]
    },
    {
      name: 'Chest',
      low: [
        {
          itemId: 283,
          chance: 70,
          count: 1
        },
        {
          itemId: 284,
          chance: 30,
          count: 1
        }
      ],
      high: [
        {
          itemId: 465,
          chance: 50,
          count: 1
        },
        {
          itemId: 283,
          chance: 32,
          count: 1
        },
        {
          itemId: 466,
          chance: 18,
          count: 1
        }
      ]
    },
    {
      name: 'Back',
      low: [
        {
          itemId: 391,
          chance: 65,
          count: 1
        },
        {
          itemId: 284,
          chance: 35,
          count: 1
        }
      ],
      high: [
        {
          itemId: 286,
          chance: 48,
          count: 1
        },
        {
          itemId: 391,
          chance: 30,
          count: 1
        },
        {
          itemId: 466,
          chance: 22,
          count: 1
        }
      ]
    },
    {
      name: 'Claws',
      low: [
        {
          itemId: 285,
          chance: 43,
          count: 1
        },
        {
          itemId: 284,
          chance: 32,
          count: 1
        },
        {
          itemId: 332,
          chance: 25,
          count: 1
        }
      ],
      high: [
        {
          itemId: 467,
          chance: 37,
          count: 1
        },
        {
          itemId: 466,
          chance: 28,
          count: 1
        },
        {
          itemId: 285,
          chance: 20,
          count: 1
        },
        {
          itemId: 332,
          chance: 15,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    low: [
      {
        itemId: 253,
        chance: 74
      },
      {
        itemId: 284,
        chance: 24
      },
      {
        itemId: 288,
        chance: 2
      }
    ],
    high: [
      {
        itemId: 253,
        chance: 64
      },
      {
        itemId: 284,
        chance: 33
      },
      {
        itemId: 288,
        chance: 3
      }
    ]
  },
  capture: {
    health: 23,
    low: [
      {
        itemId: 283,
        chance: 40
      },
      {
        itemId: 391,
        chance: 34
      },
      {
        itemId: 151,
        chance: 20
      },
      {
        itemId: 288,
        chance: 6
      }
    ],
    high: [
      {
        itemId: 286,
        chance: 34
      },
      {
        itemId: 465,
        chance: 25
      },
      {
        itemId: 283,
        chance: 17
      },
      {
        itemId: 151,
        chance: 12
      },
      {
        itemId: 288,
        chance: 8
      },
      {
        itemId: 469,
        chance: 4
      }
    ]
  }
});
export const Agnaktor = deepFreeze<LargeMonster>({
  id: 30,
  name: 'Agnaktor',
  type: MonsterType.Levthn,
  threat: 5,
  description:
    'Also known as fire-pike wyverns, Agnaktor use their tough beaks and great strength to burrow through rock, and sometimes even cave ceilings. Encrusted with hardened lava that can soften from the heat when they burrow or spit magma.',
  quests: {
    '0': {
      '5': [8],
      '6': [5]
    },
    '1': {
      '3': [16],
      '5': [12, 13],
      '6': [7],
      Arena: [4],
      Events: [3]
    }
  },
  hp: 5000,
  monsterStates: [
    {
      name: 'Hot',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.4,
            impact: 0.5,
            gun: 0.45,
            fire: 0,
            water: 0.25,
            thunder: 0.1,
            ice: 0.15,
            dragon: 0.05,
            stagger: 120
          }
        },
        {
          name: 'Chest',
          values: {
            cut: 0.5,
            impact: 0.45,
            gun: 0.45,
            fire: 0,
            water: 0.25,
            thunder: 0,
            ice: 0.1,
            dragon: 0.1,
            stagger: 200
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.4,
            impact: 0.3,
            gun: 0.3,
            fire: 0,
            water: 0.15,
            thunder: 0.05,
            ice: 0.1,
            dragon: 0.05,
            stagger: 400
          }
        },
        {
          name: 'Dorsal Fin',
          values: {
            cut: 0.2,
            impact: 0.24,
            gun: 0.2,
            fire: 0,
            water: 0.2,
            thunder: 0.05,
            ice: 0.1,
            dragon: 0.15,
            stagger: 400
          }
        },
        {
          name: 'Body',
          values: {
            cut: 0.4,
            impact: 0.5,
            gun: 0.35,
            fire: 0,
            water: 0.2,
            thunder: 0,
            ice: 0.15,
            dragon: 0.05,
            stagger: 400
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.3,
            impact: 0.3,
            gun: 0.25,
            fire: 0,
            water: 0.15,
            thunder: 0.05,
            ice: 0.2,
            dragon: 0.05,
            stagger: 160
          }
        },
        {
          name: 'Front Leg',
          values: {
            cut: 0.28,
            impact: 0.3,
            gun: 0.25,
            fire: 0,
            water: 0.05,
            thunder: 0,
            ice: 0.15,
            dragon: 0.05,
            stagger: 160
          }
        },
        {
          name: 'Back Leg',
          values: {
            cut: 0.3,
            impact: 0.4,
            gun: 0.25,
            fire: 0,
            water: 0.2,
            thunder: 0,
            ice: 0.1,
            dragon: 0.05,
            stagger: 180
          }
        }
      ]
    },
    {
      name: 'Cool',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.15,
            impact: 0.15,
            gun: 0.1,
            fire: 0,
            water: 0.25,
            thunder: 0.1,
            ice: 0.15,
            dragon: 0.05,
            stagger: 120
          }
        },
        {
          name: 'Chest',
          values: {
            cut: 0.15,
            impact: 0.15,
            gun: 0.15,
            fire: 0,
            water: 0.25,
            thunder: 0,
            ice: 0.1,
            dragon: 0.1,
            stagger: 200
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.15,
            impact: 0.1,
            gun: 0.15,
            fire: 0,
            water: 0.15,
            thunder: 0.05,
            ice: 0.1,
            dragon: 0.05,
            stagger: 400
          }
        },
        {
          name: 'Dorsal Fin',
          values: {
            cut: 0.2,
            impact: 0.24,
            gun: 0.2,
            fire: 0,
            water: 0.2,
            thunder: 0.05,
            ice: 0.1,
            dragon: 0.15,
            stagger: 400
          }
        },
        {
          name: 'Body',
          values: {
            cut: 0.15,
            impact: 0.15,
            gun: 0.15,
            fire: 0,
            water: 0.2,
            thunder: 0,
            ice: 0.15,
            dragon: 0.05,
            stagger: 400
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.15,
            impact: 0.15,
            gun: 0.1,
            fire: 0,
            water: 0.15,
            thunder: 0.05,
            ice: 0.2,
            dragon: 0.05,
            stagger: 160
          }
        },
        {
          name: 'Front Leg',
          values: {
            cut: 0.1,
            impact: 0.15,
            gun: 0.15,
            fire: 0,
            water: 0.05,
            thunder: 0,
            ice: 0.15,
            dragon: 0.05,
            stagger: 160
          }
        },
        {
          name: 'Back Leg',
          values: {
            cut: 0.1,
            impact: 0.15,
            gun: 0.15,
            fire: 0,
            water: 0.2,
            thunder: 0,
            ice: 0.1,
            dragon: 0.05,
            stagger: 180
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 60,
      damage: {
        initial: 5,
        total: 150
      },
      tolerance: {
        initial: 180,
        max: 660
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 200,
        max: 600
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 30,
      tolerance: {
        initial: 180,
        max: 660
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 200,
        max: 600
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    exhaust: {
      tolerance: {
        initial: 180,
        max: 480
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 3,
      low: [
        {
          itemId: 382,
          chance: 40
        },
        {
          itemId: 383,
          chance: 27
        },
        {
          itemId: 386,
          chance: 20
        },
        {
          itemId: 385,
          chance: 8
        },
        {
          itemId: 104,
          chance: 5
        }
      ],
      high: [
        {
          itemId: 471,
          chance: 38
        },
        {
          itemId: 472,
          chance: 25
        },
        {
          itemId: 386,
          chance: 20
        },
        {
          itemId: 474,
          chance: 9
        },
        {
          itemId: 475,
          chance: 5
        },
        {
          itemId: 104,
          chance: 3
        }
      ]
    },
    {
      name: 'Tail',
      count: 1,
      low: [
        {
          itemId: 470,
          chance: 65
        },
        {
          itemId: 384,
          chance: 27
        },
        {
          itemId: 104,
          chance: 8
        }
      ],
      high: [
        {
          itemId: 470,
          chance: 65
        },
        {
          itemId: 473,
          chance: 25
        },
        {
          itemId: 475,
          chance: 10
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Beak',
      low: [
        {
          itemId: 387,
          chance: 64,
          count: 1
        },
        {
          itemId: 382,
          chance: 31,
          count: 1
        },
        {
          itemId: 151,
          chance: 5,
          count: 1
        }
      ],
      high: [
        {
          itemId: 471,
          chance: 52,
          count: 1
        },
        {
          itemId: 387,
          chance: 42,
          count: 1
        },
        {
          itemId: 169,
          chance: 6,
          count: 1
        }
      ]
    },
    {
      name: 'Claws',
      low: [
        {
          itemId: 385,
          chance: 54,
          count: 1
        },
        {
          itemId: 386,
          chance: 37,
          count: 1
        },
        {
          itemId: 104,
          chance: 9,
          count: 1
        }
      ],
      high: [
        {
          itemId: 474,
          chance: 51,
          count: 1
        },
        {
          itemId: 386,
          chance: 19,
          count: 1
        },
        {
          itemId: 385,
          chance: 18,
          count: 1
        },
        {
          itemId: 475,
          chance: 12,
          count: 1
        }
      ]
    },
    {
      name: 'Chest',
      low: [
        {
          itemId: 383,
          chance: 58,
          count: 1
        },
        {
          itemId: 386,
          chance: 33,
          count: 1
        },
        {
          itemId: 104,
          chance: 9,
          count: 1
        }
      ],
      high: [
        {
          itemId: 472,
          chance: 46,
          count: 1
        },
        {
          itemId: 386,
          chance: 26,
          count: 1
        },
        {
          itemId: 383,
          chance: 18,
          count: 1
        },
        {
          itemId: 475,
          chance: 10,
          count: 1
        }
      ]
    },
    {
      name: 'Back',
      low: [
        {
          itemId: 384,
          chance: 50,
          count: 1
        },
        {
          itemId: 383,
          chance: 32,
          count: 1
        },
        {
          itemId: 386,
          chance: 18,
          count: 1
        }
      ],
      high: [
        {
          itemId: 473,
          chance: 49,
          count: 1
        },
        {
          itemId: 384,
          chance: 32,
          count: 1
        },
        {
          itemId: 386,
          chance: 15,
          count: 1
        },
        {
          itemId: 169,
          chance: 4,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    low: [
      {
        itemId: 253,
        chance: 72
      },
      {
        itemId: 386,
        chance: 20
      },
      {
        itemId: 104,
        chance: 8
      }
    ],
    high: [
      {
        itemId: 253,
        chance: 72
      },
      {
        itemId: 386,
        chance: 20
      },
      {
        itemId: 104,
        chance: 8
      }
    ]
  },
  capture: {
    health: 23,
    low: [
      {
        itemId: 383,
        chance: 32
      },
      {
        itemId: 384,
        chance: 27
      },
      {
        itemId: 386,
        chance: 20
      },
      {
        itemId: 385,
        chance: 12
      },
      {
        itemId: 104,
        chance: 9
      }
    ],
    high: [
      {
        itemId: 472,
        chance: 30
      },
      {
        itemId: 473,
        chance: 24
      },
      {
        itemId: 386,
        chance: 18
      },
      {
        itemId: 474,
        chance: 12
      },
      {
        itemId: 475,
        chance: 7
      },
      {
        itemId: 384,
        chance: 6
      },
      {
        itemId: 169,
        chance: 3
      }
    ]
  }
});
export const Ceadeus = deepFreeze<LargeMonster>({
  id: 31,
  name: 'Ceadeus',
  type: MonsterType.EldDrg,
  threat: 6,
  description:
    'Legendary elder dragons known as both "shining giants of the depths" and "great sea dragons." Not confirmed to exist until recently. The Moga quakes were due to a Ceadeus butting its abnormally long horns into the earth.',
  quests: {
    '0': {
      '6': [6, 7]
    },
    '1': {
      Arena: [],
      Events: []
    }
  },
  hp: 15000,
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Face',
          values: {
            cut: 0.26,
            impact: 0.3,
            gun: 0.35,
            fire: 0.05,
            water: 0,
            thunder: 0.2,
            ice: 0.05,
            dragon: 0.25,
            stagger: 600
          }
        },
        {
          name: 'Horn',
          values: {
            cut: 0.18,
            impact: 0.33,
            gun: 0.2,
            fire: 0.1,
            water: 0,
            thunder: 0.25,
            ice: 0,
            dragon: 0.35,
            stagger: 600
          }
        },
        {
          name: 'Beard (Lg)',
          values: {
            cut: 0.6,
            impact: 0.55,
            gun: 0.4,
            fire: 0.1,
            water: 0,
            thunder: 0.1,
            ice: 0,
            dragon: 0.2,
            stagger: 600
          }
        },
        {
          name: 'Beard (Sm)',
          values: {
            cut: 0.4,
            impact: 0.35,
            gun: 0.35,
            fire: 0.15,
            water: 0,
            thunder: 0.05,
            ice: 0,
            dragon: 0.15,
            stagger: 500
          }
        },
        {
          name: 'Back',
          values: {
            cut: 0.25,
            impact: 0.4,
            gun: 0.25,
            fire: 0.05,
            water: 0,
            thunder: 0.15,
            ice: 0.05,
            dragon: 0.2,
            stagger: 600
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.32,
            impact: 0.2,
            gun: 0.45,
            fire: 0.05,
            water: 0,
            thunder: 0.15,
            ice: 0,
            dragon: 0.3,
            stagger: 800
          }
        },
        {
          name: 'Fin',
          values: {
            cut: 0.28,
            impact: 0.3,
            gun: 0.2,
            fire: 0.05,
            water: 0,
            thunder: 0.2,
            ice: 0,
            dragon: 0.2,
            stagger: 200
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.35,
            impact: 0.28,
            gun: 0.25,
            fire: 0.1,
            water: 0,
            thunder: 0.25,
            ice: 0.05,
            dragon: 0.2,
            stagger: 450
          }
        }
      ]
    }
  ],
  carves: [
    {
      name: 'Body',
      count: 6,
      low: [
        {
          itemId: 431,
          chance: 53
        },
        {
          itemId: 426,
          chance: 30
        },
        {
          itemId: 425,
          chance: 17
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Beard',
      low: [
        {
          itemId: 427,
          chance: 68,
          count: 1
        },
        {
          itemId: 426,
          chance: 18,
          count: 1
        },
        {
          itemId: 429,
          chance: 14,
          count: 1
        }
      ]
    },
    {
      name: 'Back',
      low: [
        {
          itemId: 425,
          chance: 52,
          count: 1
        },
        {
          itemId: 426,
          chance: 32,
          count: 1
        },
        {
          itemId: 429,
          chance: 16,
          count: 1
        }
      ]
    },
    {
      name: 'Tail',
      low: [
        {
          itemId: 428,
          chance: 78,
          count: 1
        },
        {
          itemId: 429,
          chance: 22,
          count: 1
        }
      ]
    }
  ]
});
export const Deviljho = deepFreeze<LargeMonster>({
  id: 32,
  name: 'Deviljho',
  type: MonsterType.BrtWyv,
  threat: 6,
  description:
    'The dreaded, nomadic Deviljho have no specific territory of their own. Their muscles swell if provoked, revealing old wounds. Needing to feed constantly due to high body heat, they can hunt nearby animals to extinction.',
  quests: {
    '0': {},
    '1': {
      '6': [0, 1, 2],
      Arena: [],
      Events: []
    }
  },
  hp: 12078,
  monsterStates: [
    {
      name: 'Calm',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.5,
            impact: 0.6,
            gun: 0.6,
            fire: 0.1,
            water: 0.1,
            thunder: 0.15,
            ice: 0.05,
            dragon: 0.15,
            stagger: 400
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.5,
            impact: 0.45,
            gun: 0.45,
            fire: 0.15,
            water: 0.15,
            thunder: 0.25,
            ice: 0.1,
            dragon: 0.25,
            stagger: 150
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.25,
            impact: 0.2,
            gun: 0.25,
            fire: 0,
            water: 0,
            thunder: 0.05,
            ice: 0,
            dragon: 0,
            stagger: 200
          }
        },
        {
          name: 'Back',
          values: {
            cut: 0.25,
            impact: 0.2,
            gun: 0.25,
            fire: 0,
            water: 0,
            thunder: 0.05,
            ice: 0,
            dragon: 0,
            stagger: 200
          }
        },
        {
          name: 'Arm',
          values: {
            cut: 0.3,
            impact: 0.3,
            gun: 0.3,
            fire: 0.1,
            water: 0.1,
            thunder: 0.15,
            ice: 0,
            dragon: 0.15,
            stagger: 150
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.3,
            impact: 0.35,
            gun: 0.4,
            fire: 0,
            water: 0,
            thunder: 0.05,
            ice: 0,
            dragon: 0,
            stagger: 200
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.35,
            impact: 0.3,
            gun: 0.3,
            fire: 0.05,
            water: 0.05,
            thunder: 0.1,
            ice: 0,
            dragon: 0.1,
            stagger: 300
          }
        }
      ]
    },
    {
      name: 'Enraged',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.4,
            impact: 0.45,
            gun: 0.4,
            fire: 0.15,
            water: 0.15,
            thunder: 0.2,
            ice: 0.1,
            dragon: 0.2,
            stagger: 400
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.8,
            impact: 0.8,
            gun: 0.75,
            fire: 0.2,
            water: 0.2,
            thunder: 0.35,
            ice: 0.15,
            dragon: 0.35,
            stagger: 150
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.21,
            impact: 0.15,
            gun: 0.2,
            fire: 0,
            water: 0,
            thunder: 0.05,
            ice: 0,
            dragon: 0.05,
            stagger: 200
          }
        },
        {
          name: 'Back',
          values: {
            cut: 0.21,
            impact: 0.15,
            gun: 0.2,
            fire: 0,
            water: 0,
            thunder: 0.05,
            ice: 0,
            dragon: 0.05,
            stagger: 200
          }
        },
        {
          name: 'Arm',
          values: {
            cut: 0.3,
            impact: 0.3,
            gun: 0.3,
            fire: 0.15,
            water: 0.15,
            thunder: 0.2,
            ice: 0,
            dragon: 0.2,
            stagger: 150
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.3,
            impact: 0.35,
            gun: 0.35,
            fire: 0,
            water: 0,
            thunder: 0.05,
            ice: 0,
            dragon: 0.05,
            stagger: 200
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.25,
            impact: 0.25,
            gun: 0.25,
            fire: 0.1,
            water: 0.1,
            thunder: 0.15,
            ice: 0,
            dragon: 0.15,
            stagger: 300
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 10,
      damage: {
        initial: 5,
        total: 50
      },
      tolerance: {
        initial: 180,
        max: 980
      },
      recovery: {
        amount: 10,
        wait: 10
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 180,
        max: 980
      },
      recovery: {
        amount: 10,
        wait: 10
      }
    },
    sleep: {
      duration: 60,
      tolerance: {
        initial: 180,
        max: 980
      },
      recovery: {
        amount: 10,
        wait: 10
      }
    },
    stun: {
      duration: 10,
      tolerance: {
        initial: 180,
        max: 780
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    exhaust: {
      tolerance: {
        initial: 180,
        max: 780
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 4,
      high: [
        {
          itemId: 450,
          chance: 39
        },
        {
          itemId: 449,
          chance: 28
        },
        {
          itemId: 451,
          chance: 20
        },
        {
          itemId: 452,
          chance: 11
        },
        {
          itemId: 453,
          chance: 2
        }
      ]
    },
    {
      name: 'Tail',
      count: 2,
      high: [
        {
          itemId: 455,
          chance: 59
        },
        {
          itemId: 450,
          chance: 39
        },
        {
          itemId: 453,
          chance: 2
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Head',
      high: [
        {
          itemId: 452,
          chance: 65,
          count: 1
        },
        {
          itemId: 454,
          chance: 35,
          count: 1
        }
      ]
    }
  ],
  shiny: {
    action: 'Something',
    high: [
      {
        itemId: 253,
        chance: 65
      },
      {
        itemId: 451,
        chance: 34
      },
      {
        itemId: 453,
        chance: 1
      }
    ]
  },
  capture: {
    health: 20,
    high: [
      {
        itemId: 454,
        chance: 40
      },
      {
        itemId: 451,
        chance: 30
      },
      {
        itemId: 449,
        chance: 26
      },
      {
        itemId: 453,
        chance: 4
      }
    ]
  }
});
export const JhenMohran = deepFreeze<LargeMonster>({
  id: 33,
  name: 'Jhen Mohran',
  type: MonsterType.EldDrg,
  threat: 6,
  description:
    "Rare ore can be mined from these enormous dragons' backs; thus they are considered prosperity symbols. They swallow vast amounts of organic material and are always surrounded by scavenging Delex, which sailors use to locate them.",
  quests: {
    '0': {},
    '1': {
      '3': [18, 19],
      '4': [19],
      Arena: [],
      Events: []
    }
  },
  hp: 27750,
  monsterStates: [
    {
      name: 'default',
      hitzones: [
        {
          name: 'Tusk',
          values: {
            cut: 0.18,
            impact: 0.18,
            gun: 0.18,
            fire: 0,
            water: 0.05,
            thunder: 0.05,
            ice: 0.15,
            dragon: 0.15,
            stagger: 1200
          }
        },
        {
          name: 'Body',
          values: {
            cut: 0.21,
            impact: 0.21,
            gun: 0.2,
            fire: 0,
            water: 0.05,
            thunder: 0.05,
            ice: 0,
            dragon: 0,
            stagger: 2000
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.33,
            impact: 0.33,
            gun: 0.25,
            fire: 0,
            water: 0,
            thunder: 0,
            ice: 0.15,
            dragon: 0.15,
            stagger: 2000
          }
        },
        {
          name: 'Mouth Int',
          values: {
            cut: 0.9,
            impact: 0.8,
            gun: 0.5,
            fire: 0,
            water: 0.2,
            thunder: 0.2,
            ice: 0.3,
            dragon: 0.25,
            stagger: 2000
          }
        },
        {
          name: 'Mouth Ext',
          values: {
            cut: 0.33,
            impact: 0.33,
            gun: 0.25,
            fire: 0,
            water: 0,
            thunder: 0,
            ice: 0.15,
            dragon: 0.15,
            stagger: 1800
          }
        },
        {
          name: 'Chin',
          values: {
            cut: 0.6,
            impact: 0.55,
            gun: 0.38,
            fire: 0,
            water: 0.12,
            thunder: 0.12,
            ice: 0.22,
            dragon: 0.22,
            stagger: 1800
          }
        },
        {
          name: 'Arm',
          values: {
            cut: 0.33,
            impact: 0.33,
            gun: 0.25,
            fire: 0,
            water: 0,
            thunder: 0,
            ice: 0.15,
            dragon: 0.15,
            stagger: 1500
          }
        },
        {
          name: 'Back (1)',
          values: {
            cut: 0.68,
            impact: 0.78,
            gun: 0.48,
            fire: 0,
            water: 0.15,
            thunder: 0.15,
            ice: 0.22,
            dragon: 0.22,
            stagger: 1500
          }
        },
        {
          name: 'Back (2)',
          values: {
            cut: 0.68,
            impact: 0.78,
            gun: 0.48,
            fire: 0,
            water: 0.15,
            thunder: 0.15,
            ice: 0.22,
            dragon: 0.22,
            stagger: 1000
          }
        }
      ]
    }
  ],
  carves: [
    {
      name: 'Body',
      count: 8,
      low: [
        {
          itemId: 433,
          chance: 52
        },
        {
          itemId: 435,
          chance: 31
        },
        {
          itemId: 436,
          chance: 15
        },
        {
          itemId: 437,
          chance: 2
        }
      ],
      high: [
        {
          itemId: 438,
          chance: 40
        },
        {
          itemId: 439,
          chance: 31
        },
        {
          itemId: 435,
          chance: 15
        },
        {
          itemId: 440,
          chance: 10
        },
        {
          itemId: 437,
          chance: 4
        }
      ]
    },
    {
      name: 'Mouth',
      count: 2,
      low: [
        {
          itemId: 526,
          chance: 47
        },
        {
          itemId: 435,
          chance: 32
        },
        {
          itemId: 397,
          chance: 20
        },
        {
          itemId: 437,
          chance: 1
        }
      ],
      high: [
        {
          itemId: 527,
          chance: 45
        },
        {
          itemId: 439,
          chance: 24
        },
        {
          itemId: 397,
          chance: 20
        },
        {
          itemId: 435,
          chance: 10
        },
        {
          itemId: 437,
          chance: 1
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Tusks',
      low: [
        {
          itemId: 436,
          chance: 75,
          count: 1
        },
        {
          itemId: 435,
          chance: 25,
          count: 1
        }
      ],
      high: [
        {
          itemId: 440,
          chance: 58,
          count: 1
        },
        {
          itemId: 436,
          chance: 34,
          count: 1
        },
        {
          itemId: 435,
          chance: 8,
          count: 1
        }
      ]
    },
    {
      name: 'Spine Cracks',
      low: [
        {
          itemId: 433,
          chance: 58,
          count: 1
        },
        {
          itemId: 435,
          chance: 26,
          count: 1
        },
        {
          itemId: 102,
          chance: 16,
          count: 1
        }
      ],
      high: [
        {
          itemId: 433,
          chance: 38,
          count: 1
        },
        {
          itemId: 438,
          chance: 28,
          count: 1
        },
        {
          itemId: 435,
          chance: 20,
          count: 1
        },
        {
          itemId: 103,
          chance: 14,
          count: 1
        }
      ]
    },
    {
      name: 'Arms',
      low: [
        {
          itemId: 434,
          chance: 15,
          count: 1
        },
        {
          itemId: 435,
          chance: 20,
          count: 1
        }
      ],
      high: [
        {
          itemId: 441,
          chance: 65,
          count: 1
        },
        {
          itemId: 435,
          chance: 20,
          count: 1
        },
        {
          itemId: 434,
          chance: 15,
          count: 1
        }
      ]
    }
  ]
});
export const Alatreon = deepFreeze<LargeMonster>({
  id: 34,
  name: 'Alatreon',
  type: MonsterType.EldDrg,
  threat: 6,
  description:
    'Blazing black dragons, so named for resembling both lightning and darkness. They mercilessly tear apart whoever touches their sharp scales. Elementally unstable, their actions can affect the very weather. Living natural disasters.',
  quests: {
    '0': {},
    '1': {
      '6': [8],
      Arena: [],
      Events: []
    }
  },
  hp: 10000,
  monsterStates: [
    {
      name: 'Regular',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.45,
            impact: 0.5,
            gun: 0.25,
            fire: 0,
            water: 0.15,
            thunder: 0.05,
            ice: 0.2,
            dragon: 0.05,
            stagger: 700
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.4,
            impact: 0.35,
            gun: 0.2,
            fire: 0,
            water: 0.1,
            thunder: 0.05,
            ice: 0.15,
            dragon: 0.05,
            stagger: 350
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.35,
            impact: 0.3,
            gun: 0.15,
            fire: 0,
            water: 0.1,
            thunder: 0.05,
            ice: 0.15,
            dragon: 0.05,
            stagger: 350
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.3,
            impact: 0.3,
            gun: 0.2,
            fire: 0,
            water: 0.1,
            thunder: 0.05,
            ice: 0.15,
            dragon: 0.05,
            stagger: 400
          }
        },
        {
          name: 'Wing',
          values: {
            cut: 0.18,
            impact: 0.18,
            gun: 0.1,
            fire: 0,
            water: 0.1,
            thunder: 0.05,
            ice: 0.15,
            dragon: 0.05,
            stagger: 300
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.25,
            impact: 0.25,
            gun: 0.15,
            fire: 0,
            water: 0.1,
            thunder: 0.05,
            ice: 0.15,
            dragon: 0.05,
            stagger: 250
          }
        }
      ]
    },
    {
      name: 'Flight',
      hitzones: [
        {
          name: 'Head',
          values: {
            cut: 0.45,
            impact: 0.5,
            gun: 0.25,
            fire: 0.2,
            water: 0.05,
            thunder: 0,
            ice: 0,
            dragon: 0.25,
            stagger: 700
          }
        },
        {
          name: 'Neck',
          values: {
            cut: 0.4,
            impact: 0.35,
            gun: 0.2,
            fire: 0.15,
            water: 0.05,
            thunder: 0,
            ice: 0,
            dragon: 0.2,
            stagger: 350
          }
        },
        {
          name: 'Stomach',
          values: {
            cut: 0.35,
            impact: 0.3,
            gun: 0.15,
            fire: 0.15,
            water: 0.05,
            thunder: 0,
            ice: 0,
            dragon: 0.2,
            stagger: 350
          }
        },
        {
          name: 'Tail',
          values: {
            cut: 0.3,
            impact: 0.3,
            gun: 0.2,
            fire: 0.15,
            water: 0.05,
            thunder: 0,
            ice: 0,
            dragon: 0.2,
            stagger: 400
          }
        },
        {
          name: 'Wing',
          values: {
            cut: 0.18,
            impact: 0.18,
            gun: 0.1,
            fire: 0.15,
            water: 0.05,
            thunder: 0,
            ice: 0,
            dragon: 0.15,
            stagger: 300
          }
        },
        {
          name: 'Foot',
          values: {
            cut: 0.25,
            impact: 0.25,
            gun: 0.15,
            fire: 0.15,
            water: 0.05,
            thunder: 0,
            ice: 0,
            dragon: 0.2,
            stagger: 250
          }
        }
      ]
    }
  ],
  status: {
    poison: {
      duration: 10,
      damage: {
        initial: 5,
        total: 55
      },
      tolerance: {
        initial: 180,
        max: 780
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    paralysis: {
      duration: 10,
      tolerance: {
        initial: 200,
        max: 1800
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    sleep: {
      duration: 60,
      tolerance: {
        initial: 180,
        max: 860
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    },
    stun: {
      duration: 15,
      tolerance: {
        initial: 120,
        max: 600
      },
      recovery: {
        amount: 5,
        wait: 10
      }
    }
  },
  carves: [
    {
      name: 'Body',
      count: 6,
      high: [
        {
          itemId: 401,
          chance: 33
        },
        {
          itemId: 402,
          chance: 29
        },
        {
          itemId: 403,
          chance: 17
        },
        {
          itemId: 476,
          chance: 10
        },
        {
          itemId: 432,
          chance: 8
        },
        {
          itemId: 404,
          chance: 3
        }
      ]
    },
    {
      name: 'Tail',
      count: 2,
      high: [
        {
          itemId: 477,
          chance: 58
        },
        {
          itemId: 402,
          chance: 38
        },
        {
          itemId: 404,
          chance: 4
        }
      ]
    }
  ],
  breakables: [
    {
      name: 'Horns',
      high: [
        {
          itemId: 476,
          chance: 57,
          count: 1
        },
        {
          itemId: 402,
          chance: 28,
          count: 1
        },
        {
          itemId: 405,
          chance: 15,
          count: 1
        }
      ]
    },
    {
      name: 'Claws',
      high: [
        {
          itemId: 403,
          chance: 62,
          count: 1
        },
        {
          itemId: 402,
          chance: 5,
          count: 1
        }
      ]
    },
    {
      name: 'Wings',
      high: [
        {
          itemId: 478,
          chance: 53,
          count: 1
        },
        {
          itemId: 401,
          chance: 30,
          count: 1
        },
        {
          itemId: 402,
          chance: 17,
          count: 1
        }
      ]
    }
  ]
});
