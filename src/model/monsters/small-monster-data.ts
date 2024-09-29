import type { Monster } from './types';
import { MonsterType } from './enum';

export const Aptonoth = Object.freeze<Monster>({
  id: 0,
  name: 'Aptonoth',
  type: MonsterType.Herbvr,
  description:
    'Relatively docile herbivores with characteristic crest plates. They form herds and raise young communally, and have been used as pack animals for generations; their meat is tasty and nutritious. Very cautious around large monsters.',
  threat: 1,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 1.2,
          impact: 1.2,
          gun: 1.2,
          fire: 0.55,
          water: 0.55,
          thunder: 0.55,
          ice: 0.55,
          dragon: 0.1,
          stagger: 1
        }
      }
    }
  ],
  variants: [
    {
      name: 'Normal/Small',
      carves: [
        {
          name: 'Body',
          count: 2,
          low: [
            { itemId: 28, chance: 75 },
            { itemId: 149, chance: 25 }
          ],
          high: [
            { itemId: 28, chance: 75 },
            { itemId: 149, chance: 25 }
          ]
        }
      ]
    },
    {
      name: 'Huge',
      carves: [
        {
          name: 'Body',
          count: 3,
          low: [
            { itemId: 28, chance: 75 },
            { itemId: 149, chance: 25 }
          ],
          high: [
            { itemId: 28, chance: 75 },
            { itemId: 149, chance: 25 }
          ]
        }
      ]
    }
  ]
});
export const Kelbi = Object.freeze<Monster>({
  id: 1,
  name: 'Kelbi',
  type: MonsterType.Herbvr,
  description:
    'Small herbivores known for their gentle demeanor. Kelbi horns are effective against various diseases, but recent research has shown the animal must be kept alive to harvest quality material. Thus, they must be stunned first.',
  threat: 1,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 1,
          impact: 1,
          gun: 1,
          fire: 1,
          water: 1,
          thunder: 1,
          ice: 1,
          dragon: 0.1,
          stagger: 1
        }
      }
    }
  ],
  variants: [
    {
      name: 'Regular',
      carves: [
        {
          name: 'Dead',
          count: 1,
          low: [
            { itemId: 303, chance: 60 },
            { itemId: 28, chance: 35 },
            { itemId: 310, chance: 5 }
          ],
          high: [
            { itemId: 508, chance: 35 },
            { itemId: 28, chance: 35 },
            { itemId: 303, chance: 25 },
            { itemId: 310, chance: 5 }
          ]
        },
        {
          name: 'Stunned',
          count: 1,
          low: [
            { itemId: 310, chance: 58 },
            { itemId: 359, chance: 42 }
          ],
          high: [
            { itemId: 310, chance: 75 },
            { itemId: 311, chance: 25 }
          ]
        }
      ]
    },
    {
      name: 'Large',
      carves: [
        {
          name: 'Dead',
          count: 1,
          low: [
            { itemId: 303, chance: 50 },
            { itemId: 28, chance: 35 },
            { itemId: 311, chance: 15 }
          ]
        },
        {
          name: 'Stunned',
          count: 1,
          low: [
            { itemId: 311, chance: 65 },
            { itemId: 310, chance: 35 }
          ]
        }
      ]
    }
  ]
});
export const Epioth = Object.freeze<Monster>({
  id: 2,
  name: 'Epioth',
  type: MonsterType.Herbvr,
  description:
    'Submissive, water-dwelling herbivores that subsist on water grasses and moss. Epioth surface frequently to sunbathe. Extremely timid, they panic when danger is near, swimming about in haphazard fashion.',
  threat: 1,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 1.2,
          impact: 1.2,
          gun: 1.2,
          fire: 0.55,
          water: 0.15,
          thunder: 0.55,
          ice: 0.55,
          dragon: 0.1,
          stagger: 1
        }
      }
    }
  ],
  carves: [
    {
      name: 'Body',
      count: 2,
      low: [
        { itemId: 397, chance: 35 },
        { itemId: 149, chance: 30 },
        { itemId: 294, chance: 20 },
        { itemId: 28, chance: 15 }
      ],
      high: [
        { itemId: 397, chance: 35 },
        { itemId: 149, chance: 30 },
        { itemId: 294, chance: 20 },
        { itemId: 28, chance: 15 }
      ]
    }
  ]
});
export const Popo = Object.freeze<Monster>({
  id: 3,
  name: 'Popo',
  type: MonsterType.Herbvr,
  description:
    'Herd-forming herbivores. Covered in thick fur to endure the cold. Popo are gently, but known to use their massive tusks bravely when defending their young. Pop meat is very nutricious; the tongue is said to be especially palatable.',
  threat: 1,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 1.1,
          impact: 1.1,
          gun: 1.1,
          fire: 0.55,
          water: 0.1,
          thunder: 0.15,
          ice: 0.1,
          dragon: 0.1,
          stagger: 1
        }
      }
    }
  ],
  carves: [
    {
      name: 'Body',
      count: 2,
      low: [
        { itemId: 28, chance: 40 },
        { itemId: 303, chance: 35 },
        { itemId: 509, chance: 25 }
      ],
      high: [
        { itemId: 508, chance: 35 },
        { itemId: 28, chance: 25 },
        { itemId: 509, chance: 25 },
        { itemId: 303, chance: 15 }
      ]
    }
  ]
});
export const Bnahabra = Object.freeze<Monster>({
  id: 4,
  name: 'Bnahabra',
  type: MonsterType.Nptron,
  description:
    'Flying insects that inhabit most environments. They attack invaders with a paralyzing poison, and lay eggs in carrion together with a body fluid that hastens decomposition. Attracted to light, they will gather around any fire.',
  threat: 2,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 1.2,
          impact: 1.2,
          gun: 1.1,
          fire: 1,
          water: 0.5,
          thunder: 0.1,
          ice: 0.5,
          dragon: 0,
          stagger: 1
        }
      }
    }
  ],
  variants: [
    {
      name: 'Island/Forest habitat',
      carves: [
        {
          name: 'Body',
          count: 1,
          low: [
            { itemId: 312, chance: 47 },
            { itemId: 313, chance: 36 },
            { itemId: 314, chance: 17 }
          ],
          high: [
            { itemId: 313, chance: 32 },
            { itemId: 513, chance: 29 },
            { itemId: 514, chance: 23 },
            { itemId: 312, chance: 8 },
            { itemId: 314, chance: 8 }
          ]
        }
      ]
    },
    {
      name: 'Desert habitat',
      carves: [
        {
          name: 'Body',
          count: 1,
          low: [
            { itemId: 312, chance: 40 },
            { itemId: 313, chance: 36 },
            { itemId: 314, chance: 24 }
          ],
          high: [
            { itemId: 514, chance: 31 },
            { itemId: 513, chance: 26 },
            { itemId: 313, chance: 20 },
            { itemId: 314, chance: 14 },
            { itemId: 312, chance: 9 }
          ]
        }
      ]
    },
    {
      name: 'Tundra habitat',
      carves: [
        {
          name: 'Body',
          count: 1,
          low: [
            { itemId: 313, chance: 52 },
            { itemId: 312, chance: 31 },
            { itemId: 314, chance: 17 }
          ],
          high: [
            { itemId: 513, chance: 32 },
            { itemId: 514, chance: 28 },
            { itemId: 313, chance: 18 },
            { itemId: 314, chance: 12 },
            { itemId: 312, chance: 10 }
          ]
        }
      ]
    },
    {
      name: 'Volcano habitat',
      carves: [
        {
          name: 'Body',
          count: 1,
          low: [
            { itemId: 312, chance: 47 },
            { itemId: 314, chance: 35 },
            { itemId: 313, chance: 18 }
          ],
          high: [
            { itemId: 514, chance: 34 },
            { itemId: 513, chance: 31 },
            { itemId: 313, chance: 17 },
            { itemId: 312, chance: 9 },
            { itemId: 314, chance: 9 }
          ]
        }
      ]
    }
  ]
});
export const Altaroth = Object.freeze<Monster>({
  id: 5,
  name: 'Altaroth',
  type: MonsterType.Nptron,
  description:
    'Insects that widely inhabit many areas. Noted for absorbing fruit, mushrooms and honey, then carrying them back to the nest. Materials can thus be collected from their swolen abdomens, whose color is related to what is being carried.',
  threat: 1,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 1,
          impact: 1,
          gun: 1,
          fire: 1,
          water: 1,
          thunder: 1,
          ice: 1,
          dragon: 1,
          stagger: 1
        }
      }
    }
  ],
  carves: [
    {
      name: 'Body',
      count: 1,
      low: [
        { itemId: 314, chance: 50 },
        { itemId: 368, chance: 38 },
        { itemId: 369, chance: 12 }
      ],
      high: [
        { itemId: 514, chance: 35 },
        { itemId: 515, chance: 30 },
        { itemId: 368, chance: 20 },
        { itemId: 369, chance: 15 }
      ]
    }
  ],
  variants: [
    {
      name: 'Blue Sac',
      shiny: {
        action: 'something',
        low: [
          { itemId: 370, chance: 80 },
          { itemId: 314, chance: 20 }
        ],
        high: [
          { itemId: 370, chance: 80 },
          { itemId: 514, chance: 20 }
        ]
      }
    },
    {
      name: 'Yellow Sac',
      shiny: {
        action: 'something',
        low: [
          { itemId: 138, chance: 80 },
          { itemId: 314, chance: 20 }
        ],
        high: [
          { itemId: 138, chance: 80 },
          { itemId: 514, chance: 20 }
        ]
      }
    },
    {
      name: 'Green Sac',
      shiny: {
        action: 'something',
        low: [
          { itemId: 360, chance: 50 },
          { itemId: 131, chance: 30 },
          { itemId: 314, chance: 20 }
        ],
        high: [
          { itemId: 360, chance: 50 },
          { itemId: 131, chance: 30 },
          { itemId: 514, chance: 20 }
        ]
      }
    },
    {
      name: 'White Sac',
      shiny: {
        action: 'something',
        low: [
          { itemId: 181, chance: 78 },
          { itemId: 368, chance: 32 },
          { itemId: 314, chance: 20 }
        ],
        high: [
          { itemId: 181, chance: 46 },
          { itemId: 368, chance: 34 },
          { itemId: 514, chance: 20 }
        ]
      }
    }
  ]
});
export const Felyne = Object.freeze<Monster>({
  id: 6,
  name: 'Felyne',
  type: MonsterType.Lynian,
  description:
    'Bipedal creatures resembling cats, known for their light hair. Though usually docile, they will attack viciously if provoked. Naturally curious, some try to enter human soceity. Fond of Felvine, they will follow its scent anywhere.',
  threat: 1,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 1.1,
          impact: 1,
          gun: 1,
          fire: 1,
          water: 1,
          thunder: 1,
          ice: 1,
          dragon: 0.1,
          stagger: 1
        }
      }
    }
  ],
  shiny: {
    action: 'Kill it',
    low: [
      { itemId: 7, chance: 50 },
      { itemId: 43, chance: 42 },
      { itemId: 49, chance: 8 }
    ],
    high: [
      { itemId: 7, chance: 50 },
      { itemId: 43, chance: 42 },
      { itemId: 49, chance: 8 }
    ]
  }
});
export const Melynx = Object.freeze<Monster>({
  id: 7,
  name: 'Melynx',
  type: MonsterType.Lynian,
  description:
    'Bipedal creatures resembling cats, known for their dark hair. More curious than Felynes and possessed by kleptomania, Melynxes take what they steal back to their dens. Felvine intoxicates them, causing them to sometimes drop items.',
  threat: 2,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 1.1,
          impact: 1,
          gun: 1,
          fire: 1,
          water: 1,
          thunder: 1,
          ice: 1,
          dragon: 0.1,
          stagger: 1
        }
      }
    }
  ],
  shiny: {
    action: 'Kill it',
    low: [
      { itemId: 44, chance: 62 },
      { itemId: 45, chance: 35 },
      { itemId: 48, chance: 3 }
    ],
    high: [
      { itemId: 44, chance: 62 },
      { itemId: 45, chance: 35 },
      { itemId: 48, chance: 3 }
    ]
  }
});
export const Fish = Object.freeze<Monster>({
  id: 8,
  name: 'Fish',
  type: MonsterType.Fish,
  description:
    'This category includes carnivorous fish (Sharq, Catfish), migratory fish (Tuna, Arowanas), and natatorial fish (Molids, Perciformes). Fish often flee when attacked, so hunters prefer to use harpoons to obtain materials from them.',
  threat: 2,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 1,
          impact: 1,
          gun: 1,
          fire: 1,
          water: 1,
          thunder: 1,
          ice: 1,
          dragon: 1,
          stagger: 1
        }
      }
    }
  ],
  variants: [
    {
      name: 'Tuna',
      carves: [
        {
          name: 'Body',
          count: 1,
          low: [
            { itemId: 526, chance: 48 },
            { itemId: 28, chance: 32 },
            { itemId: 293, chance: 20 }
          ],
          high: [
            { itemId: 526, chance: 53 },
            { itemId: 293, chance: 24 },
            { itemId: 28, chance: 23 }
          ]
        }
      ]
    },
    {
      name: 'Arowana',
      carves: [
        {
          name: 'Body',
          count: 1,
          low: [
            { itemId: 528, chance: 50 },
            { itemId: 28, chance: 30 },
            { itemId: 308, chance: 20 }
          ],
          high: [
            { itemId: 528, chance: 51 },
            { itemId: 308, chance: 26 },
            { itemId: 28, chance: 23 }
          ]
        }
      ]
    },
    {
      name: 'Molids',
      carves: [
        {
          name: 'Body',
          count: 1,
          low: [
            { itemId: 526, chance: 46 },
            { itemId: 28, chance: 30 },
            { itemId: 331, chance: 24 }
          ],
          high: [
            { itemId: 526, chance: 48 },
            { itemId: 331, chance: 31 },
            { itemId: 28, chance: 21 }
          ]
        }
      ]
    },
    {
      name: 'Sharq',
      carves: [
        {
          name: 'Body',
          count: 1,
          low: [
            { itemId: 528, chance: 42 },
            { itemId: 568, chance: 22 },
            { itemId: 28, chance: 20 },
            { itemId: 307, chance: 16 }
          ],
          high: [
            { itemId: 528, chance: 39 },
            { itemId: 568, chance: 22 },
            { itemId: 307, chance: 21 },
            { itemId: 28, chance: 18 }
          ]
        }
      ]
    },
    {
      name: 'Catfish',
      carves: [
        {
          name: 'Body',
          count: 1,
          low: [
            { itemId: 397, chance: 41 },
            { itemId: 529, chance: 33 },
            { itemId: 28, chance: 26 }
          ],
          high: [
            { itemId: 397, chance: 46 },
            { itemId: 529, chance: 34 },
            { itemId: 28, chance: 20 }
          ]
        }
      ]
    },
    {
      name: 'Perciformes',
      carves: [
        {
          name: 'Body',
          count: 1,
          low: [
            { itemId: 529, chance: 52 },
            { itemId: 28, chance: 28 },
            { itemId: 309, chance: 20 }
          ],
          high: [
            { itemId: 529, chance: 53 },
            { itemId: 309, chance: 28 },
            { itemId: 28, chance: 19 }
          ]
        }
      ]
    }
  ]
});
export const Giggi = Object.freeze<Monster>({
  id: 9,
  name: 'Giggi',
  type: MonsterType.FlyWyv,
  description:
    'Wyvern larvae. Remarkably fecund, they can survive in any dark environment. Giggi are sensitive to light and heat, and hence will avoid torches. They are also known to leech blood from other animals, converting it into toxins.',
  threat: 2,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 0.85,
          impact: 0.8,
          gun: 0.9,
          fire: 0.6,
          water: 0.25,
          thunder: 0,
          ice: 0,
          dragon: 0.1,
          stagger: 1
        }
      }
    }
  ],
  carves: [
    {
      name: 'Body',
      count: 1,
      low: [
        { itemId: 530, chance: 65 },
        { itemId: 529, chance: 25 },
        { itemId: 314, chance: 10 }
      ],
      high: [
        { itemId: 530, chance: 45 },
        { itemId: 529, chance: 25 },
        { itemId: 264, chance: 20 },
        { itemId: 514, chance: 10 }
      ]
    }
  ]
});
export const Jaggi = Object.freeze<Monster>({
  id: 10,
  name: 'Jaggi',
  type: MonsterType.BrdWyv,
  description:
    'Highly social, carnivorous bird wyverns that live in large packs. Young Jaggi males hunt in groups, attacking much larger animals. Current research suggests they operate under orders from an alpha male. Aggressive but wary of fire.',
  threat: 2,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 1.15,
          impact: 1.15,
          gun: 1.2,
          fire: 0.7,
          water: 0.5,
          thunder: 0.5,
          ice: 0.5,
          dragon: 0.1,
          stagger: 1
        }
      }
    }
  ],
  carves: [
    {
      name: 'Body',
      count: 1,
      low: [
        { itemId: 277, chance: 40 },
        { itemId: 278, chance: 29 },
        { itemId: 279, chance: 23 },
        { itemId: 149, chance: 8 }
      ],
      high: [
        { itemId: 277, chance: 42 },
        { itemId: 525, chance: 23 },
        { itemId: 279, chance: 20 },
        { itemId: 278, chance: 15 }
      ]
    }
  ]
});
export const Jaggia = Object.freeze<Monster>({
  id: 11,
  name: 'Jaggia',
  type: MonsterType.BrdWyv,
  description:
    "Female Jaggi that stay in groups, Jaggia generally cluster around the nest to defend it and raise whelps. Smaller than mature male, but larger and tougher than the countless young males. Jaggia also operate under an alpha's orders.",
  threat: 2,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 0.85,
          impact: 0.85,
          gun: 0.9,
          fire: 0.75,
          water: 0.5,
          thunder: 0.5,
          ice: 0.5,
          dragon: 0.1,
          stagger: 1
        }
      }
    }
  ],
  carves: [
    {
      name: 'Body',
      count: 2,
      low: [
        { itemId: 278, chance: 43 },
        { itemId: 279, chance: 30 },
        { itemId: 277, chance: 18 },
        { itemId: 149, chance: 9 }
      ],
      high: [
        { itemId: 279, chance: 35 },
        { itemId: 525, chance: 25 },
        { itemId: 278, chance: 22 },
        { itemId: 277, chance: 18 }
      ]
    }
  ]
});
export const Baggi = Object.freeze<Monster>({
  id: 12,
  name: 'Baggi',
  type: MonsterType.BrdWyv,
  description:
    'Highly intelligent, carnivorous bird wyverns that hunt in packs. Noted for their blue scales and sharp glare. Baggi are feared for their ability to secrete a tranquilizing fluid, which can knock even a human out for a few seconds.',
  threat: 2,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 1.15,
          impact: 1.15,
          gun: 1.2,
          fire: 0.7,
          water: 0.5,
          thunder: 0.5,
          ice: 0.5,
          dragon: 0.1,
          stagger: 1
        }
      }
    }
  ],
  carves: [
    {
      name: 'Body',
      count: 1,
      low: [
        { itemId: 519, chance: 35 },
        { itemId: 277, chance: 30 },
        { itemId: 149, chance: 25 },
        { itemId: 518, chance: 10 }
      ],
      high: [
        { itemId: 525, chance: 30 },
        { itemId: 518, chance: 25 },
        { itemId: 519, chance: 20 },
        { itemId: 516, chance: 13 },
        { itemId: 277, chance: 12 }
      ]
    }
  ]
});
export const Ludroth = Object.freeze<Monster>({
  id: 13,
  name: 'Ludroth',
  type: MonsterType.Levthn,
  description:
    'Aquatic female monsters. Ludroth form "harems" around large males, gathering in territories designated as breeding grounds. They\'re known to be extremely aggressive towards outsiders; caution is advised.',
  threat: 2,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Head: {
          cut: 0.9,
          impact: 0.95,
          gun: 0.9,
          fire: 0.4,
          water: 0,
          thunder: 0.3,
          ice: 0.1,
          dragon: 0,
          stagger: 1
        },
        Body: {
          cut: 0.85,
          impact: 0.9,
          gun: 0.8,
          fire: 0.6,
          water: 0,
          thunder: 0.25,
          ice: 0.1,
          dragon: 0,
          stagger: 1
        }
      }
    }
  ],
  carves: [
    {
      name: 'Body',
      count: 1,
      low: [
        { itemId: 294, chance: 49 },
        { itemId: 295, chance: 32 },
        { itemId: 149, chance: 19 }
      ],
      high: [
        { itemId: 294, chance: 49 },
        { itemId: 295, chance: 32 },
        { itemId: 149, chance: 19 }
      ]
    }
  ]
});
export const Uroktor = Object.freeze<Monster>({
  id: 14,
  name: 'Uroktor',
  type: MonsterType.Levthn,
  description:
    "Leviathans that inhabit volcanoes. Noted for swarming around larger monsters' kills in order to feed. Uroktor rarely hunt for themselves, but stab upwards at pray from the ground when they do. Known for being highly aggressive.",
  threat: 2,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Head: {
          cut: 0.85,
          impact: 0.85,
          gun: 0.8,
          fire: 0,
          water: 0.4,
          thunder: 0.3,
          ice: 0.1,
          dragon: 0,
          stagger: 1
        },
        Body: {
          cut: 0.8,
          impact: 0.8,
          gun: 0.7,
          fire: 0,
          water: 0.6,
          thunder: 0.25,
          ice: 0.1,
          dragon: 0,
          stagger: 1
        }
      }
    }
  ],
  carves: [
    {
      name: 'Body',
      count: 1,
      low: [
        { itemId: 523, chance: 40 },
        { itemId: 150, chance: 35 },
        { itemId: 341, chance: 25 }
      ],
      high: [
        { itemId: 523, chance: 40 },
        { itemId: 150, chance: 35 },
        { itemId: 341, chance: 25 }
      ]
    }
  ]
});
export const Delex = Object.freeze<Monster>({
  id: 15,
  name: 'Delex',
  type: MonsterType.PscWyv,
  description:
    'Carnivorous monsters that inhabit deserts. Delex always travel in schools of five or six. When near large monsters on the hunt, they will attempt to surround the prey and scavenge food. Known to flee if other Delex are injured.',
  threat: 2,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Body: {
          cut: 0.9,
          impact: 0.9,
          gun: 0.9,
          fire: 0,
          water: 0.5,
          thunder: 0.3,
          ice: 0,
          dragon: 0,
          stagger: 1
        }
      }
    }
  ],
  carves: [
    {
      name: 'Body',
      count: 1,
      low: [
        { itemId: 528, chance: 40 },
        { itemId: 397, chance: 35 },
        { itemId: 526, chance: 25 }
      ],
      high: [
        { itemId: 527, chance: 40 },
        { itemId: 397, chance: 35 },
        { itemId: 528, chance: 25 }
      ]
    }
  ]
});
export const Rhenoplos = Object.freeze<Monster>({
  id: 16,
  name: 'Rhenoplos',
  type: MonsterType.Herbvr,
  description:
    'Extremely territorial herbivores with poor vision, but acute hearing. Rhenoplos will doggedly pursue any nearby target they sense. They often collide into boulders, perhaps because they cannot easily stop once they begin to run.',
  threat: 2,
  monsterStates: [
    {
      name: 'default',
      hitzones: {
        Head: {
          cut: 0.35,
          impact: 0.4,
          gun: 0.35,
          fire: 0,
          water: 0.45,
          thunder: 0.45,
          ice: 0.45,
          dragon: 0,
          stagger: 1
        },
        Body: {
          cut: 1,
          impact: 1.05,
          gun: 1,
          fire: 0.1,
          water: 0.5,
          thunder: 0.5,
          ice: 0.5,
          dragon: 0.1,
          stagger: 1
        }
      }
    }
  ],
  carves: [
    {
      name: 'Body',
      count: 1,
      low: [
        { itemId: 28, chance: 40 },
        { itemId: 510, chance: 25 },
        { itemId: 150, chance: 25 },
        { itemId: 511, chance: 10 }
      ],
      high: [
        { itemId: 28, chance: 25 },
        { itemId: 150, chance: 25 },
        { itemId: 512, chance: 20 },
        { itemId: 510, chance: 18 },
        { itemId: 511, chance: 12 }
      ]
    }
  ]
});
