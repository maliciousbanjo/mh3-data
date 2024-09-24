import { WeaponDamageProperties, WeaponType } from '../types';
import { Longsword, LongswordAttack } from './types';

export const LongswordDamageProperties = Object.freeze<
  WeaponDamageProperties<WeaponType.LONGSWORD, LongswordAttack>
>({
  type: WeaponType.LONGSWORD,
  classModifier: 3.3,
  attackGroups: [
    {
      name: 'default',
      attacks: [
        { name: 'Unsheathe Attack', hits: [{ type: 'cut', power: 0.28 }] },
        { name: 'Step Stash', hits: [{ type: 'cut', power: 0.28 }] },
        { name: 'Downward Slash', hits: [{ type: 'cut', power: 0.23 }] },
        { name: 'Stab', hits: [{ type: 'cut', power: 0.14 }] },
        { name: 'Upward Slash', hits: [{ type: 'cut', power: 0.18 }] },
        { name: 'Sweep', hits: [{ type: 'cut', power: 0.24 }] },
        { name: 'Empty Spirit', hits: [{ type: 'cut', power: 0.16 }] },
        { name: 'Spirit 1', hits: [{ type: 'cut', power: 0.3 }] },
        { name: 'Spirit 2', hits: [{ type: 'cut', power: 0.36 }] },
        {
          name: 'Spirit 3',
          hits: [
            { type: 'cut', power: 0.18 },
            { type: 'cut', power: 0.24 },
            { type: 'cut', power: 0.1 }
          ]
        },
        { name: 'Spirit Finisher', hits: [{ type: 'cut', power: 0.36 }] }
      ]
    }
  ]
});

/**
 * List of all available {@link Longsword}s
 */
export const Longswords = Object.freeze<Longsword[]>([
  {
    id: 0,
    type: WeaponType.LONGSWORD,
    name: 'Thunderclap',
    description:
      'A blade made with Eastern methods. Blue-white sparks run down its blade.',
    attack: 429,
    element: 'THUNDER',
    elemAttack: 230,
    awaken: false,
    sharpness: [13, 1, 8, 3],
    sharpnessUp: [13, 1, 8, 8],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 15490,
    create: [
      { itemId: 391, amount: 2 },
      { itemId: 100, amount: 10 },
      { itemId: 115, amount: 10 }
    ],
    upgradesTo: [1]
  },
  {
    id: 1,
    type: WeaponType.LONGSWORD,
    name: 'Thunderclap+',
    description:
      'A blade made with Eastern methods. Blue-white sparks run down its blade.',
    attack: 462,
    element: 'THUNDER',
    elemAttack: 430,
    awaken: false,
    sharpness: [13, 1, 8, 8],
    sharpnessUp: [13, 1, 8, 11, 2],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 22450,
    upgradesFrom: {
      weaponId: [0],
      materials: [
        { itemId: 392, amount: 2 },
        { itemId: 391, amount: 3 },
        { itemId: 268, amount: 2 }
      ]
    },
    upgradesTo: [2, 3]
  },
  {
    id: 2,
    type: WeaponType.LONGSWORD,
    name: "Heaven's Thunder (R)",
    description:
      'A fulgurous blade forged by a master. Its thunderous blows can slay huge wyverns.',
    attack: 594,
    element: 'THUNDER',
    elemAttack: 520,
    awaken: false,
    sharpness: [9, 4, 11, 7, 4],
    sharpnessUp: [9, 4, 11, 7, 6, 3],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 53300,
    upgradesFrom: {
      weaponId: [1],
      materials: [
        { itemId: 288, amount: 5 },
        { itemId: 286, amount: 3 },
        { itemId: 474, amount: 3 }
      ]
    }
  },
  {
    id: 3,
    type: WeaponType.LONGSWORD,
    name: "Heaven's Thunder (Y)",
    description:
      'A fulgurous blade forged by a master. Its thunderous blows can slay huge wyverns.',
    attack: 561,
    element: 'THUNDER',
    elemAttack: 520,
    awaken: false,
    sharpness: [9, 4, 11, 7, 4],
    sharpnessUp: [9, 4, 11, 7, 6, 3],
    affinity: 15,
    slots: 1,
    rarity: 6,
    price: 53300,
    upgradesFrom: {
      weaponId: [1],
      materials: [
        { itemId: 288, amount: 5 },
        { itemId: 286, amount: 3 },
        { itemId: 467, amount: 3 }
      ]
    }
  },
  {
    id: 4,
    type: WeaponType.LONGSWORD,
    name: 'Ananta Boneblade',
    description:
      'A Long Sword coated in paralytic toxins that penetrate monster defenses.',
    attack: 363,
    element: 'PARALYSIS',
    elemAttack: 150,
    awaken: false,
    sharpness: [7, 3, 12, 3],
    sharpnessUp: [7, 3, 12, 8],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 12100,
    create: [
      { itemId: 296, amount: 3 },
      { itemId: 518, amount: 10 },
      { itemId: 99, amount: 10 }
    ],
    upgradesTo: [5, 8]
  },
  {
    id: 5,
    type: WeaponType.LONGSWORD,
    name: 'Ananta Boneblade+',
    description:
      'A Long Sword coated in paralytic toxins that penetrate monster defenses.',
    attack: 429,
    element: 'PARALYSIS',
    elemAttack: 210,
    awaken: false,
    sharpness: [15, 3, 3, 4],
    sharpnessUp: [15, 3, 3, 9],
    affinity: 0,
    slots: 0,
    rarity: 3,
    price: 17200,
    upgradesFrom: {
      weaponId: [4],
      materials: [
        { itemId: 100, amount: 15 },
        { itemId: 298, amount: 3 },
        { itemId: 376, amount: 2 }
      ]
    },
    upgradesTo: [6, 7]
  },
  {
    id: 6,
    type: WeaponType.LONGSWORD,
    name: 'Shadowbinder (P)',
    description:
      'A Long Sword that paralyzes monsters, a tactic Eastern hunters regard as improper.',
    attack: 561,
    element: 'PARALYSIS',
    elemAttack: 280,
    awaken: false,
    sharpness: [13, 1, 8, 11, 2],
    sharpnessUp: [13, 1, 8, 11, 6, 1],
    affinity: 0,
    slots: 1,
    rarity: 5,
    price: 35500,
    upgradesFrom: {
      weaponId: [5],
      materials: [
        { itemId: 461, amount: 5 },
        { itemId: 464, amount: 2 },
        { itemId: 520, amount: 8 }
      ]
    }
  },
  {
    id: 7,
    type: WeaponType.LONGSWORD,
    name: 'Shadowbinder (G)',
    description:
      'A Long Sword that paralyzes monsters, a tactic Eastern hunters regard as improper.',
    attack: 528,
    element: 'PARALYSIS',
    elemAttack: 280,
    awaken: false,
    sharpness: [13, 1, 8, 11, 2],
    sharpnessUp: [13, 1, 8, 11, 6, 1],
    affinity: 15,
    slots: 1,
    rarity: 5,
    price: 35500,
    upgradesFrom: {
      weaponId: [5],
      materials: [
        { itemId: 461, amount: 5 },
        { itemId: 464, amount: 2 },
        { itemId: 522, amount: 3 }
      ]
    }
  },
  {
    id: 8,
    type: WeaponType.LONGSWORD,
    name: 'Dancing Flames',
    description:
      "A refined blade of crimson flame. The heat it emits can vaporize a foe's blood.",
    attack: 429,
    element: 'FIRE',
    elemAttack: 350,
    awaken: false,
    sharpness: [17, 2, 8, 7, 1],
    sharpnessUp: [17, 2, 8, 7, 6],
    affinity: 15,
    slots: 0,
    rarity: 3,
    price: 23000,
    upgradesFrom: {
      weaponId: [4],
      materials: [
        { itemId: 384, amount: 2 },
        { itemId: 385, amount: 3 },
        { itemId: 470, amount: 2 }
      ]
    },
    upgradesTo: [9]
  },
  {
    id: 9,
    type: WeaponType.LONGSWORD,
    name: 'Dancing Hellfire',
    description:
      "A refined blade of crimson flame. The heat it emits can vaporize a foe's blood.",
    attack: 561,
    element: 'FIRE',
    elemAttack: 480,
    awaken: false,
    sharpness: [3, 7, 16, 7, 1, 1],
    sharpnessUp: [3, 7, 16, 7, 1, 6],
    affinity: 20,
    slots: 0,
    rarity: 6,
    price: 58000,
    upgradesFrom: {
      weaponId: [8],
      materials: [
        { itemId: 473, amount: 3 },
        { itemId: 474, amount: 6 },
        { itemId: 475, amount: 5 }
      ]
    }
  },
  {
    id: 10,
    type: WeaponType.LONGSWORD,
    name: 'Wyvern Blade "FIRE"',
    description:
      'Made from both Rathian and Rathalos parts, this blade channels both land and sky.',
    attack: 495,
    element: 'FIRE',
    elemAttack: 290,
    awaken: false,
    sharpness: [7, 3, 12, 8],
    sharpnessUp: [7, 3, 12, 10, 3],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 21500,
    create: [
      { itemId: 255, amount: 5 },
      { itemId: 248, amount: 5 },
      { itemId: 252, amount: 3 }
    ],
    upgradesTo: [11]
  },
  {
    id: 11,
    type: WeaponType.LONGSWORD,
    name: 'Wyvern Blade "Flame"',
    description:
      'Made from both Rathian and Rathalos parts, this blade channels both land and sky.',
    attack: 528,
    element: 'FIRE',
    elemAttack: 320,
    awaken: false,
    sharpness: [15, 3, 3, 9],
    sharpnessUp: [15, 3, 3, 9, 5],
    affinity: 0,
    slots: 1,
    rarity: 4,
    price: 33600,
    upgradesFrom: {
      weaponId: [10],
      materials: [
        { itemId: 258, amount: 1 },
        { itemId: 157, amount: 5 },
        { itemId: 162, amount: 2 }
      ]
    },
    upgradesTo: [12]
  },
  {
    id: 12,
    type: WeaponType.LONGSWORD,
    name: 'Wyvern Blade "Flare"',
    description:
      'A blade with the blood and soul of two wyverns. Crimson flames pour from the blade.',
    attack: 627,
    element: 'FIRE',
    elemAttack: 360,
    awaken: false,
    sharpness: [7, 3, 12, 10, 3],
    sharpnessUp: [7, 3, 12, 10, 6, 2],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 57000,
    upgradesFrom: {
      weaponId: [11],
      materials: [
        { itemId: 160, amount: 2 },
        { itemId: 164, amount: 5 },
        { itemId: 158, amount: 3 }
      ]
    }
  },
  {
    id: 13,
    type: WeaponType.LONGSWORD,
    name: 'Guan Dao',
    description:
      'A bizarre blade from the East. Its long hilt allows anyone to swing with force.',
    attack: 528,
    element: 'DRAGON',
    elemAttack: 110,
    awaken: false,
    defense: 8,
    sharpness: [5, 3, 9, 13],
    sharpnessUp: [5, 3, 9, 14, 4],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 30300,
    create: [
      { itemId: 436, amount: 4 },
      { itemId: 433, amount: 5 },
      { itemId: 432, amount: 1 }
    ],
    upgradesTo: [14, 15]
  },
  {
    id: 14,
    type: WeaponType.LONGSWORD,
    name: 'Yan Yue Dao (P)',
    description:
      'In Eastern legend, a princess married a dragon and brought this blade back.',
    attack: 660,
    element: 'DRAGON',
    elemAttack: 180,
    awaken: false,
    defense: 16,
    sharpness: [5, 3, 9, 14, 4],
    sharpnessUp: [5, 3, 9, 14, 7, 2],
    affinity: 0,
    slots: 2,
    rarity: 6,
    price: 63400,
    upgradesFrom: {
      weaponId: [13],
      materials: [
        { itemId: 440, amount: 3 },
        { itemId: 441, amount: 2 },
        { itemId: 448, amount: 7 }
      ]
    }
  },
  {
    id: 15,
    type: WeaponType.LONGSWORD,
    name: 'Yan Yue Dao (G)',
    description:
      'In Eastern legend, a princess married a dragon and brought this blade back.',
    attack: 627,
    element: 'DRAGON',
    elemAttack: 180,
    awaken: false,
    defense: 16,
    sharpness: [5, 3, 9, 14, 4],
    sharpnessUp: [5, 3, 9, 14, 7, 2],
    affinity: 15,
    slots: 2,
    rarity: 6,
    price: 63400,
    upgradesFrom: {
      weaponId: [13],
      materials: [
        { itemId: 440, amount: 3 },
        { itemId: 437, amount: 2 },
        { itemId: 448, amount: 7 }
      ]
    }
  },
  {
    id: 16,
    type: WeaponType.LONGSWORD,
    name: 'Reaver "Cruelty"',
    description:
      'A living blade made from Deviljho meat and bone and possessing a ruthless bite.',
    attack: 627,
    element: 'DRAGON',
    elemAttack: 150,
    awaken: true,
    sharpness: [12, 11, 5, 5, 2],
    sharpnessUp: [12, 11, 5, 5, 4, 3],
    affinity: 5,
    slots: 1,
    rarity: 5,
    price: 66666,
    create: [
      { itemId: 452, amount: 5 },
      { itemId: 454, amount: 2 },
      { itemId: 449, amount: 3 }
    ],
    upgradesTo: [17]
  },
  {
    id: 17,
    type: WeaponType.LONGSWORD,
    name: 'Reaver "Calamity"',
    description:
      'A blade of insanity. None are spared from its insatiable bloodlust.',
    attack: 693,
    element: 'DRAGON',
    elemAttack: 200,
    awaken: true,
    sharpness: [12, 11, 5, 5, 4, 3],
    sharpnessUp: [12, 11, 5, 5, 4, 7, 1],
    affinity: 5,
    slots: 1,
    rarity: 7,
    price: 80000,
    upgradesFrom: {
      weaponId: [16],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 451, amount: 8 },
        { itemId: 453, amount: 1 }
      ]
    }
  },
  {
    id: 18,
    type: WeaponType.LONGSWORD,
    name: 'Dark Claw',
    description: 'A large, black scythe resembling Alatreon talons.',
    attack: 561,
    element: 'DRAGON',
    elemAttack: 380,
    awaken: false,
    sharpness: [3, 7, 16, 7, 1, 1],
    sharpnessUp: [3, 7, 16, 7, 1, 6],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 77777,
    create: [
      { itemId: 403, amount: 5 },
      { itemId: 477, amount: 3 },
      { itemId: 432, amount: 3 }
    ],
    upgradesTo: [19]
  },
  {
    id: 19,
    type: WeaponType.LONGSWORD,
    name: 'Dark Claw "Demise"',
    description:
      'A demonic scythe that tempts its bearer towards dark, monstrous deeds.',
    attack: 594,
    element: 'DRAGON',
    elemAttack: 470,
    awaken: false,
    sharpness: [3, 7, 16, 7, 1, 6],
    sharpnessUp: [3, 7, 16, 7, 1, 6, 5],
    affinity: 0,
    slots: 2,
    rarity: 7,
    price: 100000,
    upgradesFrom: {
      weaponId: [18],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 405, amount: 2 },
        { itemId: 404, amount: 1 }
      ]
    }
  },
  {
    id: 20,
    type: WeaponType.LONGSWORD,
    name: 'Tenebra',
    description:
      'A dark blade that pulses with the lifeforce it saps from any who wield it...',
    attack: 462,
    element: 'ICE',
    elemAttack: 300,
    awaken: true,
    sharpness: [5, 3, 9, 13],
    sharpnessUp: [5, 3, 9, 15, 3],
    affinity: 0,
    slots: 3,
    rarity: 3,
    price: 30000,
    create: [
      { itemId: 557, amount: 1 },
      { itemId: 110, amount: 5 },
      { itemId: 374, amount: 3 }
    ],
    upgradesTo: [21]
  },
  {
    id: 21,
    type: WeaponType.LONGSWORD,
    name: 'Tenebra D',
    description:
      'A dark blade that pulses with the lifeforce it saps from any who wield it...',
    attack: 561,
    element: 'ICE',
    elemAttack: 560,
    awaken: true,
    sharpness: [5, 3, 9, 15, 3],
    sharpnessUp: [5, 3, 9, 15, 7, 1],
    affinity: 0,
    slots: 3,
    rarity: 6,
    price: 50000,
    upgradesFrom: {
      weaponId: [20],
      materials: [
        { itemId: 557, amount: 6 },
        { itemId: 440, amount: 2 },
        { itemId: 419, amount: 4 }
      ]
    }
  },
  {
    id: 22,
    type: WeaponType.LONGSWORD,
    name: 'Rising Soul',
    description:
      "Some say lightning fills the soul of any who wield this, the thunder god's own blade.",
    attack: 594,
    element: 'THUNDER',
    elemAttack: 440,
    awaken: false,
    sharpness: [9, 4, 11, 7, 4],
    sharpnessUp: [9, 4, 11, 7, 6, 3],
    affinity: 0,
    slots: 2,
    rarity: 6,
    price: 50000,
    create: [
      { itemId: 506, amount: 5 },
      { itemId: 106, amount: 10 },
      { itemId: 286, amount: 8 }
    ]
  },
  {
    id: 23,
    type: WeaponType.LONGSWORD,
    name: 'Barbarian Blade',
    description:
      'A masterful blade forged in a faraway land and tested in many a heated battle.',
    attack: 495,
    element: 'WATER',
    elemAttack: 250,
    awaken: false,
    sharpness: [15, 3, 3, 4],
    sharpnessUp: [15, 3, 3, 9],
    affinity: 10,
    slots: 0,
    rarity: 3,
    price: 0,
    upgradesTo: [24]
  },
  {
    id: 24,
    type: WeaponType.LONGSWORD,
    name: 'Barbarian Blade+',
    description:
      'A masterful blade forged in a faraway land and tested in many a heated battle.',
    attack: 561,
    element: 'WATER',
    elemAttack: 280,
    awaken: false,
    sharpness: [3, 7, 16, 4],
    sharpnessUp: [3, 7, 16, 7, 1, 1],
    affinity: 15,
    slots: 1,
    rarity: 4,
    price: 34700,
    upgradesFrom: {
      weaponId: [23],
      materials: [
        { itemId: 425, amount: 5 },
        { itemId: 428, amount: 2 },
        { itemId: 169, amount: 3 }
      ]
    },
    upgradesTo: [25]
  },
  {
    id: 25,
    type: WeaponType.LONGSWORD,
    name: 'Barbarian "Sharq" (P)',
    description:
      'One of the "three great blades." It snaps from the sheath like a hungry Sharq.',
    attack: 627,
    element: 'WATER',
    elemAttack: 400,
    awaken: false,
    sharpness: [15, 3, 3, 9, 5],
    sharpnessUp: [15, 3, 3, 9, 7, 3],
    affinity: 25,
    slots: 2,
    rarity: 6,
    price: 62400,
    upgradesFrom: {
      weaponId: [24],
      materials: [
        { itemId: 569, amount: 5 },
        { itemId: 431, amount: 3 },
        { itemId: 430, amount: 2 }
      ]
    }
  }
]);
