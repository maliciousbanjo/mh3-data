import { WeaponClass } from '../enum';
import type { WeaponDamageProperties } from '../types';
import type { Hammer, HammerAttack } from './types';

export const HammerDamageProperties = Object.freeze<
  WeaponDamageProperties<WeaponClass.HAMMER, HammerAttack>
>({
  type: WeaponClass.HAMMER,
  classModifier: 5.2,
  attackGroups: [
    {
      name: 'default',
      attacks: [
        {
          name: 'Unsheathe Attack',
          hits: [{ type: 'impact', power: 0.15, ko: 0 }]
        },
        { name: 'Side Swing', hits: [{ type: 'impact', power: 0.15, ko: 0 }] },
        {
          name: 'Triple Pound',
          hits: [
            { type: 'impact', power: 0.52, ko: 15 },
            { type: 'impact', power: 0.2, ko: 15 },
            { type: 'impact', power: 0.65, ko: 27 }
          ]
        },
        {
          name: 'Short Charge',
          hits: [
            { type: 'impact', power: 0.22, ko: 15 },
            { type: 'impact', power: 0.15, ko: 0 }
          ]
        },
        { name: 'Uppercut', hits: [{ type: 'impact', power: 0.36, ko: 27 }] },
        {
          name: 'Superpound',
          hits: [
            { type: 'impact', power: 0.2, ko: 0 },
            { type: 'impact', power: 0.76, ko: 48 }
          ]
        },
        {
          name: 'Spin Attack',
          hits: [
            { type: 'impact', power: 0.2, ko: 0 },
            { type: 'impact', power: 0.1, ko: 0 },
            { type: 'impact', power: 0.1, ko: 0 },
            { type: 'impact', power: 0.1, ko: 0 },
            { type: 'impact', power: 0.1, ko: 0 },
            { type: 'impact', power: 0.1, ko: 0 }
          ]
        },
        {
          name: 'Spin Release',
          hits: [{ type: 'impact', power: 0.6, ko: 27 }]
        },
        {
          name: 'Spin Golfswing',
          hits: [{ type: 'impact', power: 0.9, ko: 48 }]
        },
        {
          name: 'Spin Finisher',
          hits: [{ type: 'impact', power: 0.4, ko: 27 }]
        }
      ]
    }
  ]
});

/**
 * List of all available {@link Hammer}s
 */
export const Hammers = Object.freeze<Hammer[]>([
  {
    id: 0,
    type: WeaponClass.HAMMER,
    name: 'Iron Hammer',
    description:
      'A Hammer of tremendous power. Its heavy blows wear down and knock out prey.',
    attack: 312,
    secondaryDamageType: 'ice',
    secondaryAttack: 50,
    awaken: true,
    sharpness: [5, 4, 6],
    sharpnessUp: [5, 4, 11],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 530,
    create: [{ itemId: 97, amount: 2 }],
    upgradesTo: [1]
  },
  {
    id: 1,
    type: WeaponClass.HAMMER,
    name: 'Iron Hammer+',
    description:
      'A Hammer of tremendous power. Its heavy blows wear down and knock out prey.',
    attack: 364,
    secondaryDamageType: 'ice',
    secondaryAttack: 80,
    awaken: true,
    sharpness: [3, 2, 10],
    sharpnessUp: [3, 2, 15],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 2020,
    upgradesFrom: {
      weaponId: [0],
      materials: [
        { itemId: 98, amount: 1 },
        { itemId: 97, amount: 4 }
      ]
    },
    upgradesTo: [2]
  },
  {
    id: 2,
    type: WeaponClass.HAMMER,
    name: 'War Hammer',
    description:
      'An Iron Hammer with a sharpness tip to increase deadliness. An easy weapon to obtain.',
    attack: 468,
    secondaryDamageType: 'ice',
    secondaryAttack: 100,
    awaken: true,
    sharpness: [5, 4, 11],
    sharpnessUp: [5, 4, 14, 2],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 3300,
    upgradesFrom: {
      weaponId: [1],
      materials: [
        { itemId: 99, amount: 3 },
        { itemId: 98, amount: 5 },
        { itemId: 97, amount: 7 }
      ]
    },
    upgradesTo: [3]
  },
  {
    id: 3,
    type: WeaponClass.HAMMER,
    name: 'War Hammer+',
    description:
      'An Iron Hammer with a sharpness tip to increase deadliness. An easy weapon to obtain.',
    attack: 572,
    secondaryDamageType: 'ice',
    secondaryAttack: 130,
    awaken: true,
    sharpness: [6, 4, 8, 2],
    sharpnessUp: [6, 4, 8, 7],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 6870,
    upgradesFrom: {
      weaponId: [2],
      materials: [
        { itemId: 102, amount: 5 },
        { itemId: 99, amount: 8 },
        { itemId: 98, amount: 10 }
      ]
    },
    upgradesTo: [4]
  },
  {
    id: 4,
    type: WeaponClass.HAMMER,
    name: 'War Mace',
    description:
      'An upgraded version of the War Hammer. Similar in appearance, but stronger.',
    attack: 676,
    secondaryDamageType: 'ice',
    secondaryAttack: 150,
    awaken: true,
    sharpness: [5, 4, 14, 2],
    sharpnessUp: [5, 4, 14, 7],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 10890,
    create: [
      { itemId: 104, amount: 3 },
      { itemId: 100, amount: 10 },
      { itemId: 99, amount: 15 }
    ],
    upgradesFrom: {
      weaponId: [3],
      materials: [
        { itemId: 110, amount: 7 },
        { itemId: 102, amount: 8 },
        { itemId: 99, amount: 15 }
      ]
    },
    upgradesTo: [5, 7, 10]
  },
  {
    id: 5,
    type: WeaponClass.HAMMER,
    name: 'Iron Striker',
    description:
      'A giant, super-powerful Hammer that is one incredible hunk of metal.',
    attack: 884,
    secondaryDamageType: 'ice',
    secondaryAttack: 240,
    awaken: true,
    sharpness: [6, 4, 8, 11, 1],
    sharpnessUp: [6, 4, 8, 11, 6],
    affinity: 0,
    slots: 2,
    rarity: 4,
    price: 33000,
    upgradesFrom: {
      weaponId: [4],
      materials: [
        { itemId: 101, amount: 15 },
        { itemId: 100, amount: 20 },
        { itemId: 376, amount: 3 }
      ]
    },
    upgradesTo: [6]
  },
  {
    id: 6,
    type: WeaponClass.HAMMER,
    name: 'Iron Impact',
    description:
      'A heavy Hammer made from hard metal. One blow crushes bones and scales alike.',
    attack: 988,
    secondaryDamageType: 'ice',
    secondaryAttack: 270,
    awaken: true,
    sharpness: [5, 4, 14, 10, 2],
    sharpnessUp: [5, 4, 14, 10, 5, 2],
    affinity: 0,
    slots: 3,
    rarity: 5,
    price: 43700,
    upgradesFrom: {
      weaponId: [5],
      materials: [
        { itemId: 111, amount: 10 },
        { itemId: 101, amount: 20 },
        { itemId: 97, amount: 99 }
      ]
    }
  },
  {
    id: 7,
    type: WeaponClass.HAMMER,
    name: 'Gun Hammer',
    description:
      'A testament to modern tech. Powder in a revolving magazine explodes on impact.',
    attack: 728,
    secondaryDamageType: 'fire',
    secondaryAttack: 220,
    awaken: false,
    sharpness: [10, 5, 6, 4],
    sharpnessUp: [10, 5, 6, 8, 1],
    affinity: 10,
    slots: 1,
    rarity: 3,
    price: 17800,
    upgradesFrom: {
      weaponId: [4],
      materials: [
        { itemId: 104, amount: 5 },
        { itemId: 100, amount: 15 },
        { itemId: 386, amount: 5 }
      ]
    },
    upgradesTo: [8]
  },
  {
    id: 8,
    type: WeaponClass.HAMMER,
    name: 'Gun Hammer+',
    description:
      'A testament to modern tech. Powder in a revolving magazine explodes on impact.',
    attack: 832,
    secondaryDamageType: 'fire',
    secondaryAttack: 250,
    awaken: false,
    sharpness: [6, 5, 11, 8],
    sharpnessUp: [6, 5, 11, 8, 5],
    affinity: 10,
    slots: 1,
    rarity: 4,
    price: 35300,
    upgradesFrom: {
      weaponId: [7],
      materials: [
        { itemId: 104, amount: 10 },
        { itemId: 101, amount: 10 },
        { itemId: 385, amount: 5 }
      ]
    },
    upgradesTo: [9]
  },
  {
    id: 9,
    type: WeaponClass.HAMMER,
    name: 'Deadeye Revolver',
    description:
      'A powerful Hammer for the true seeker of freedom. No walls can hold its wielder.',
    attack: 936,
    secondaryDamageType: 'fire',
    secondaryAttack: 300,
    awaken: false,
    sharpness: [10, 5, 5, 12, 3],
    sharpnessUp: [10, 5, 5, 12, 6, 2],
    affinity: 15,
    slots: 1,
    rarity: 5,
    price: 45500,
    upgradesFrom: {
      weaponId: [8],
      materials: [
        { itemId: 475, amount: 8 },
        { itemId: 474, amount: 5 },
        { itemId: 158, amount: 3 }
      ]
    }
  },
  {
    id: 10,
    type: WeaponClass.HAMMER,
    name: 'Vortex Hammer',
    description:
      'An electric Hammer inspired by the whirlpools Lagiacrus use to destroy prey.',
    attack: 676,
    secondaryDamageType: 'thunder',
    secondaryAttack: 230,
    awaken: false,
    sharpness: [6, 5, 12, 3],
    sharpnessUp: [6, 5, 12, 8],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 15200,
    upgradesFrom: {
      weaponId: [4],
      materials: [
        { itemId: 392, amount: 2 },
        { itemId: 285, amount: 2 },
        { itemId: 283, amount: 3 }
      ]
    },
    upgradesTo: [11, 13, 15]
  },
  {
    id: 11,
    type: WeaponClass.HAMMER,
    name: 'Vortical Hammer (R)',
    description:
      'An electric Hammer inspired by the whirlpools Lagiacrus use to destroy prey.',
    attack: 780,
    secondaryDamageType: 'thunder',
    secondaryAttack: 210,
    awaken: false,
    sharpness: [6, 4, 8, 7],
    sharpnessUp: [6, 4, 8, 11, 1],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 22300,
    upgradesFrom: {
      weaponId: [10],
      materials: [
        { itemId: 392, amount: 3 },
        { itemId: 391, amount: 3 },
        { itemId: 431, amount: 2 }
      ]
    },
    upgradesTo: [12]
  },
  {
    id: 12,
    type: WeaponClass.HAMMER,
    name: 'Vortiginous Hmr (P)',
    description:
      'An electric Hammer inspired by the whirlpools Lagiacrus use to destroy prey.',
    attack: 884,
    secondaryDamageType: 'thunder',
    secondaryAttack: 360,
    awaken: false,
    sharpness: [18, 2, 6, 8],
    sharpnessUp: [18, 2, 6, 8, 4, 1],
    affinity: 0,
    slots: 2,
    rarity: 5,
    price: 49900,
    upgradesFrom: {
      weaponId: [11],
      materials: [
        { itemId: 286, amount: 5 },
        { itemId: 561, amount: 10 },
        { itemId: 473, amount: 3 }
      ]
    }
  },
  {
    id: 13,
    type: WeaponClass.HAMMER,
    name: 'Vortical Hammer (Y)',
    description:
      'An electric Hammer inspired by the whirlpools Lagiacrus use to destroy prey.',
    attack: 728,
    secondaryDamageType: 'thunder',
    secondaryAttack: 210,
    awaken: false,
    sharpness: [6, 4, 8, 7],
    sharpnessUp: [6, 4, 8, 11, 1],
    affinity: 15,
    slots: 1,
    rarity: 3,
    price: 22300,
    upgradesFrom: {
      weaponId: [10],
      materials: [
        { itemId: 288, amount: 1 },
        { itemId: 391, amount: 4 },
        { itemId: 270, amount: 3 }
      ]
    },
    upgradesTo: [14]
  },
  {
    id: 14,
    type: WeaponClass.HAMMER,
    name: 'Vortiginous Hmr (G)',
    description:
      'An electric Hammer inspired by the whirlpools Lagiacrus use to destroy prey.',
    attack: 832,
    secondaryDamageType: 'thunder',
    secondaryAttack: 360,
    awaken: false,
    sharpness: [19, 2, 6, 8],
    sharpnessUp: [19, 2, 6, 8, 4, 1],
    affinity: 15,
    slots: 2,
    rarity: 5,
    price: 49900,
    upgradesFrom: {
      weaponId: [13],
      materials: [
        { itemId: 286, amount: 5 },
        { itemId: 561, amount: 10 },
        { itemId: 474, amount: 3 }
      ]
    }
  },
  {
    id: 15,
    type: WeaponClass.HAMMER,
    name: 'High Vortex Hammer',
    description:
      'An electric Hammer that resembles a giant whirlpool and devours all life.',
    attack: 780,
    secondaryDamageType: 'thunder',
    secondaryAttack: 330,
    awaken: false,
    sharpness: [10, 5, 5, 10],
    sharpnessUp: [10, 5, 5, 12, 3],
    affinity: 0,
    slots: 0,
    rarity: 4,
    price: 38350,
    upgradesFrom: {
      weaponId: [10],
      materials: [
        { itemId: 391, amount: 5 },
        { itemId: 285, amount: 5 },
        { itemId: 169, amount: 2 }
      ]
    },
    upgradesTo: [16]
  },
  {
    id: 16,
    type: WeaponClass.HAMMER,
    name: 'Vortastrophe (G)',
    description:
      'An electric Hammer that resembles a giant whirlpool and devours all life.',
    attack: 884,
    secondaryDamageType: 'thunder',
    secondaryAttack: 390,
    awaken: false,
    sharpness: [10, 5, 5, 12, 3],
    sharpnessUp: [10, 5, 5, 12, 6, 2],
    affinity: 15,
    slots: 1,
    rarity: 6,
    price: 51500,
    upgradesFrom: {
      weaponId: [15],
      materials: [
        { itemId: 467, amount: 4 },
        { itemId: 468, amount: 4 },
        { itemId: 288, amount: 5 }
      ]
    }
  },
  {
    id: 17,
    type: WeaponClass.HAMMER,
    name: 'Bone Hammer',
    description:
      'A Hammer crafted from bone, with powerful Windup Smashes but no means of blocking.',
    attack: 416,
    secondaryDamageType: 'poison',
    secondaryAttack: 50,
    awaken: true,
    sharpness: [10, 5],
    sharpnessUp: [10, 5, 5],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 520,
    create: [
      { itemId: 245, amount: 2 },
      { itemId: 182, amount: 2 }
    ],
    upgradesTo: [18]
  },
  {
    id: 18,
    type: WeaponClass.HAMMER,
    name: 'Bone Hammer+',
    description:
      'A Hammer crafted from bone, with powerful Windup Smashes but no means of blocking.',
    attack: 468,
    secondaryDamageType: 'poison',
    secondaryAttack: 70,
    awaken: true,
    sharpness: [6, 5, 4],
    sharpnessUp: [6, 5, 9],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 1710,
    upgradesFrom: { weaponId: [17], materials: [{ itemId: 149, amount: 5 }] },
    upgradesTo: [19, 21]
  },
  {
    id: 19,
    type: WeaponClass.HAMMER,
    name: 'Bone Bludgeon',
    description:
      'A rough-hewn Hammer of high-quality bone. Grows handier with use.',
    attack: 676,
    secondaryDamageType: 'poison',
    secondaryAttack: 160,
    awaken: true,
    sharpness: [8, 2, 4, 1],
    sharpnessUp: [8, 2, 4, 6],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 5500,
    upgradesFrom: {
      weaponId: [18],
      materials: [
        { itemId: 150, amount: 5 },
        { itemId: 510, amount: 5 },
        { itemId: 117, amount: 3 }
      ]
    },
    upgradesTo: [20]
  },
  {
    id: 20,
    type: WeaponClass.HAMMER,
    name: 'Bone Bludgeon+',
    description:
      'A rough-hewn Hammer of high-quality bone. Grows handier with use.',
    attack: 780,
    secondaryDamageType: 'poison',
    secondaryAttack: 200,
    awaken: true,
    sharpness: [6, 4, 8, 2],
    sharpnessUp: [6, 4, 8, 7],
    affinity: 0,
    slots: 2,
    rarity: 2,
    price: 12100,
    upgradesFrom: {
      weaponId: [19],
      materials: [
        { itemId: 151, amount: 2 },
        { itemId: 511, amount: 3 },
        { itemId: 521, amount: 2 }
      ]
    }
  },
  {
    id: 21,
    type: WeaponClass.HAMMER,
    name: 'Ludroth Bone Mace',
    description:
      'A Hammer covered in Ludroth skin. The bone construction makes it light and sturdy.',
    attack: 520,
    secondaryDamageType: 'water',
    secondaryAttack: 80,
    awaken: true,
    sharpness: [10, 5, 5],
    sharpnessUp: [10, 5, 6, 4],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 2980,
    upgradesFrom: {
      weaponId: [18],
      materials: [
        { itemId: 295, amount: 2 },
        { itemId: 294, amount: 3 },
        { itemId: 116, amount: 3 }
      ]
    },
    upgradesTo: [22]
  },
  {
    id: 22,
    type: WeaponClass.HAMMER,
    name: 'Ludroth Bone Maul',
    description:
      'A Hammer covered in Ludroth skin. The bone construction makes it light and sturdy.',
    attack: 572,
    secondaryDamageType: 'water',
    secondaryAttack: 100,
    awaken: true,
    sharpness: [14, 4, 6, 1],
    sharpnessUp: [14, 4, 6, 6],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 4230,
    create: [
      { itemId: 151, amount: 2 },
      { itemId: 295, amount: 10 },
      { itemId: 290, amount: 3 }
    ],
    upgradesFrom: {
      weaponId: [21],
      materials: [
        { itemId: 150, amount: 4 },
        { itemId: 295, amount: 5 },
        { itemId: 388, amount: 2 }
      ]
    },
    upgradesTo: [23, 28]
  },
  {
    id: 23,
    type: WeaponClass.HAMMER,
    name: 'Ludroth Splashhammer',
    description:
      'A hammer of Ludroth sponge. The water inside explodes onto the target on impact.',
    attack: 624,
    secondaryDamageType: 'water',
    secondaryAttack: 120,
    awaken: false,
    sharpness: [5, 4, 14, 2],
    sharpnessUp: [5, 4, 14, 7],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 6370,
    upgradesFrom: {
      weaponId: [22],
      materials: [
        { itemId: 289, amount: 3 },
        { itemId: 291, amount: 2 },
        { itemId: 371, amount: 2 }
      ]
    },
    upgradesTo: [24]
  },
  {
    id: 24,
    type: WeaponClass.HAMMER,
    name: 'Vodyanoy Hammer',
    description:
      'A hammer of Ludroth sponge. The water inside explodes onto the target on impact.',
    attack: 676,
    secondaryDamageType: 'water',
    secondaryAttack: 210,
    awaken: false,
    sharpness: [10, 5, 6, 4],
    sharpnessUp: [10, 5, 6, 8, 1],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 10090,
    upgradesFrom: {
      weaponId: [23],
      materials: [
        { itemId: 456, amount: 3 },
        { itemId: 297, amount: 2 },
        { itemId: 110, amount: 5 }
      ]
    },
    upgradesTo: [25]
  },
  {
    id: 25,
    type: WeaponClass.HAMMER,
    name: 'Fang Hammer "Echo"',
    description:
      'A Hammer made from a Jhen Mohran fang. Peerless power and durability.',
    attack: 780,
    secondaryDamageType: 'water',
    secondaryAttack: 250,
    awaken: false,
    sharpness: [6, 4, 8, 7],
    sharpnessUp: [6, 4, 8, 11, 1],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 22400,
    upgradesFrom: {
      weaponId: [24],
      materials: [
        { itemId: 436, amount: 1 },
        { itemId: 433, amount: 5 },
        { itemId: 102, amount: 10 }
      ]
    },
    upgradesTo: [26]
  },
  {
    id: 26,
    type: WeaponClass.HAMMER,
    name: 'Fang Hammer "Ruin"',
    description:
      'A Hammer made from a Jhen Mohran fang. Peerless power and durability.',
    attack: 884,
    secondaryDamageType: 'water',
    secondaryAttack: 330,
    awaken: false,
    sharpness: [6, 4, 8, 11, 1],
    sharpnessUp: [6, 4, 8, 11, 6],
    affinity: 0,
    slots: 1,
    rarity: 5,
    price: 49570,
    upgradesFrom: {
      weaponId: [25],
      materials: [
        { itemId: 434, amount: 2 },
        { itemId: 103, amount: 10 },
        { itemId: 467, amount: 3 }
      ]
    },
    upgradesTo: [27]
  },
  {
    id: 27,
    type: WeaponClass.HAMMER,
    name: 'Jhen Mohran Hammer',
    description:
      'A sacred item that summons the waters to improve the harvest and save the land.',
    attack: 936,
    secondaryDamageType: 'water',
    secondaryAttack: 380,
    awaken: false,
    sharpness: [6, 4, 8, 11, 6],
    sharpnessUp: [6, 4, 8, 11, 7, 4],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 68450,
    upgradesFrom: {
      weaponId: [26],
      materials: [
        { itemId: 440, amount: 3 },
        { itemId: 441, amount: 3 },
        { itemId: 437, amount: 3 }
      ]
    }
  },
  {
    id: 28,
    type: WeaponClass.HAMMER,
    name: 'Carapace Hammer',
    description:
      'A Hammer resembling Barroth head armor. Strong enough to crush steel.',
    attack: 728,
    secondaryDamageType: 'poison',
    secondaryAttack: 150,
    awaken: true,
    defense: 8,
    sharpness: [8, 2, 4, 6],
    sharpnessUp: [8, 2, 4, 11],
    affinity: -10,
    slots: 0,
    rarity: 2,
    price: 11340,
    upgradesFrom: {
      weaponId: [22],
      materials: [
        { itemId: 276, amount: 2 },
        { itemId: 272, amount: 5 },
        { itemId: 18, amount: 1 }
      ]
    },
    upgradesTo: [29, 31]
  },
  {
    id: 29,
    type: WeaponClass.HAMMER,
    name: 'Carapace Hammer+',
    description:
      'A Hammer resembling Barroth head armor. Strong enough to crush steel.',
    attack: 780,
    secondaryDamageType: 'poison',
    secondaryAttack: 180,
    awaken: true,
    defense: 16,
    sharpness: [8, 2, 4, 11],
    sharpnessUp: [8, 2, 4, 16],
    affinity: -10,
    slots: 1,
    rarity: 3,
    price: 18200,
    upgradesFrom: {
      weaponId: [28],
      materials: [
        { itemId: 273, amount: 3 },
        { itemId: 379, amount: 2 },
        { itemId: 268, amount: 2 }
      ]
    },
    upgradesTo: [30]
  },
  {
    id: 30,
    type: WeaponClass.HAMMER,
    name: 'Barroth Hammer',
    description:
      'A Hammer forged from a tough shell. Forget about being delicate; just swing away!',
    attack: 988,
    secondaryDamageType: 'poison',
    secondaryAttack: 240,
    awaken: true,
    defense: 20,
    sharpness: [8, 2, 4, 16],
    sharpnessUp: [8, 2, 4, 18, 3],
    affinity: -30,
    slots: 1,
    rarity: 5,
    price: 40100,
    upgradesFrom: {
      weaponId: [29],
      materials: [
        { itemId: 442, amount: 8 },
        { itemId: 443, amount: 5 },
        { itemId: 444, amount: 4 }
      ]
    }
  },
  {
    id: 31,
    type: WeaponClass.HAMMER,
    name: 'Brazenclout',
    description:
      "A Hammer that awakens the earth's rage. Heaviest and hardest of all Hammers.",
    attack: 884,
    secondaryDamageType: 'fire',
    secondaryAttack: 120,
    awaken: true,
    sharpness: [14, 4, 2],
    sharpnessUp: [14, 4, 6, 1],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 13900,
    upgradesFrom: {
      weaponId: [28],
      materials: [
        { itemId: 378, amount: 2 },
        { itemId: 445, amount: 5 },
        { itemId: 100, amount: 5 }
      ]
    },
    upgradesTo: [32]
  },
  {
    id: 32,
    type: WeaponClass.HAMMER,
    name: 'Crimsonclout',
    description:
      "A Hammer that awakens the earth's rage. Heaviest and hardest of all Hammers.",
    attack: 988,
    secondaryDamageType: 'fire',
    secondaryAttack: 150,
    awaken: true,
    sharpness: [18, 2, 5],
    sharpnessUp: [18, 2, 7, 3],
    affinity: 0,
    slots: 0,
    rarity: 3,
    price: 19980,
    upgradesFrom: {
      weaponId: [31],
      materials: [
        { itemId: 381, amount: 2 },
        { itemId: 379, amount: 2 },
        { itemId: 104, amount: 3 }
      ]
    },
    upgradesTo: [33]
  },
  {
    id: 33,
    type: WeaponClass.HAMMER,
    name: 'Gigas Hammer',
    description:
      'A bulky Hammer made from the bulky Uragaan. Requires great strength to wield.',
    attack: 1144,
    secondaryDamageType: 'fire',
    secondaryAttack: 300,
    awaken: true,
    sharpness: [18, 2, 7, 3],
    sharpnessUp: [18, 2, 7, 8],
    affinity: 0,
    slots: 0,
    rarity: 6,
    price: 51000,
    upgradesFrom: {
      weaponId: [32],
      materials: [
        { itemId: 448, amount: 6 },
        { itemId: 381, amount: 3 },
        { itemId: 447, amount: 2 }
      ]
    }
  },
  {
    id: 34,
    type: WeaponClass.HAMMER,
    name: 'Plume Flint',
    description:
      'A Hammer that uses a built-in flint mechanism to expel flames on impact.',
    attack: 520,
    secondaryDamageType: 'fire',
    secondaryAttack: 250,
    awaken: false,
    sharpness: [14, 4, 6, 1],
    sharpnessUp: [14, 4, 6, 6],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 5610,
    create: [
      { itemId: 261, amount: 3 },
      { itemId: 393, amount: 1 },
      { itemId: 150, amount: 5 }
    ],
    upgradesTo: [35, 39]
  },
  {
    id: 35,
    type: WeaponClass.HAMMER,
    name: 'Peco Flint',
    description:
      'A Hammer that uses a built-in flint mechanism to expel flames on impact.',
    attack: 624,
    secondaryDamageType: 'fire',
    secondaryAttack: 320,
    awaken: false,
    sharpness: [3, 2, 16, 4],
    sharpnessUp: [3, 2, 16, 9],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 9800,
    upgradesFrom: {
      weaponId: [34],
      materials: [
        { itemId: 262, amount: 2 },
        { itemId: 393, amount: 3 },
        { itemId: 252, amount: 1 }
      ]
    },
    upgradesTo: [36]
  },
  {
    id: 36,
    type: WeaponClass.HAMMER,
    name: 'Red Bludgeon',
    description:
      'A superb article made from a Rathalos head. Only the bravest can wield it.',
    attack: 676,
    secondaryDamageType: 'fire',
    secondaryAttack: 410,
    awaken: false,
    sharpness: [8, 2, 4, 11],
    sharpnessUp: [8, 2, 4, 16],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 19400,
    upgradesFrom: {
      weaponId: [35],
      materials: [
        { itemId: 255, amount: 8 },
        { itemId: 257, amount: 2 },
        { itemId: 104, amount: 3 }
      ]
    },
    upgradesTo: [37]
  },
  {
    id: 37,
    type: WeaponClass.HAMMER,
    name: 'Red Bludgeon+',
    description:
      'A superb article made from a Rathalos head. Only the bravest can wield it.',
    attack: 780,
    secondaryDamageType: 'fire',
    secondaryAttack: 450,
    awaken: false,
    sharpness: [8, 2, 4, 16],
    sharpnessUp: [8, 2, 4, 18, 3],
    affinity: 0,
    slots: 1,
    rarity: 4,
    price: 39900,
    upgradesFrom: {
      weaponId: [36],
      materials: [
        { itemId: 163, amount: 5 },
        { itemId: 162, amount: 2 },
        { itemId: 251, amount: 2 }
      ]
    },
    upgradesTo: [38]
  },
  {
    id: 38,
    type: WeaponClass.HAMMER,
    name: 'Huracan Hammer (P)',
    description:
      'A Hammer of raging fire containing the unruly spirit of Rathalos.',
    attack: 884,
    secondaryDamageType: 'fire',
    secondaryAttack: 520,
    awaken: false,
    sharpness: [9, 2, 3, 17, 4],
    sharpnessUp: [9, 2, 3, 17, 8, 1],
    affinity: 0,
    slots: 2,
    rarity: 6,
    price: 51400,
    upgradesFrom: {
      weaponId: [37],
      materials: [
        { itemId: 164, amount: 5 },
        { itemId: 162, amount: 3 },
        { itemId: 161, amount: 1 }
      ]
    }
  },
  {
    id: 39,
    type: WeaponClass.HAMMER,
    name: 'Numbingbird',
    description:
      'A lovely Hammer wreathed in a plume of feathers that conceals paralyzing thorns.',
    attack: 676,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 110,
    awaken: false,
    sharpness: [6, 5, 11, 3],
    sharpnessUp: [6, 5, 11, 8],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 8560,
    upgradesFrom: {
      weaponId: [34],
      materials: [
        { itemId: 261, amount: 8 },
        { itemId: 296, amount: 1 },
        { itemId: 302, amount: 1 }
      ]
    },
    upgradesTo: [40]
  },
  {
    id: 40,
    type: WeaponClass.HAMMER,
    name: 'Paralykeet',
    description:
      'A lovely Hammer wreathed in a plume of feathers that conceals paralyzing thorns.',
    attack: 728,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 170,
    awaken: false,
    sharpness: [3, 2, 16, 4],
    sharpnessUp: [3, 2, 16, 9],
    affinity: 5,
    slots: 0,
    rarity: 3,
    price: 16800,
    upgradesFrom: {
      weaponId: [39],
      materials: [
        { itemId: 262, amount: 3 },
        { itemId: 298, amount: 3 },
        { itemId: 118, amount: 5 }
      ]
    },
    upgradesTo: [41]
  },
  {
    id: 41,
    type: WeaponClass.HAMMER,
    name: 'Alluring Lotus',
    description:
      'A beautiful Hammer like a lethal flower; it paralyzes prey with its thorns.',
    attack: 832,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 230,
    awaken: false,
    sharpness: [18, 2, 7, 8],
    sharpnessUp: [18, 2, 7, 9, 4],
    affinity: 15,
    slots: 0,
    rarity: 5,
    price: 45200,
    upgradesFrom: {
      weaponId: [40],
      materials: [
        { itemId: 504, amount: 6 },
        { itemId: 461, amount: 3 },
        { itemId: 463, amount: 2 }
      ]
    }
  },
  {
    id: 42,
    type: WeaponClass.HAMMER,
    name: 'Gaiasp',
    description:
      'A Hammer made from ore mined in polar climes. Upgradeable in more ways than one.',
    attack: 676,
    secondaryDamageType: 'thunder',
    secondaryAttack: 180,
    awaken: true,
    sharpness: [5, 4, 14, 2],
    sharpnessUp: [5, 4, 14, 7],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 9800,
    create: [
      { itemId: 106, amount: 2 },
      { itemId: 102, amount: 12 },
      { itemId: 146, amount: 1 }
    ],
    upgradesTo: [43, 45, 47]
  },
  {
    id: 43,
    type: WeaponClass.HAMMER,
    name: 'Gaiarch (R)',
    description:
      'A Hammer overflowing with history, imbued with the soul of an ancient wyvern.',
    attack: 780,
    secondaryDamageType: 'thunder',
    secondaryAttack: 230,
    awaken: true,
    sharpness: [10, 5, 6, 4],
    sharpnessUp: [10, 5, 6, 8, 1],
    affinity: 0,
    slots: 2,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [42],
      materials: [
        { itemId: 104, amount: 4 },
        { itemId: 100, amount: 10 },
        { itemId: 386, amount: 3 }
      ]
    },
    upgradesTo: [44]
  },
  {
    id: 44,
    type: WeaponClass.HAMMER,
    name: 'Great Gaiarch (P)',
    description:
      "A Hammer sealed within the earth long ago. It pulsates with a wyvern's life force.",
    attack: 988,
    secondaryDamageType: 'thunder',
    secondaryAttack: 340,
    awaken: true,
    sharpness: [5, 4, 14, 10, 2],
    sharpnessUp: [5, 4, 14, 10, 5, 2],
    affinity: 0,
    slots: 3,
    rarity: 6,
    price: 43500,
    upgradesFrom: {
      weaponId: [43, 45],
      materials: [
        { itemId: 103, amount: 10 },
        { itemId: 101, amount: 10 },
        { itemId: 169, amount: 3 }
      ]
    }
  },
  {
    id: 45,
    type: WeaponClass.HAMMER,
    name: 'Gaiarch (B)',
    description:
      'A Hammer overflowing with history, imbued with the soul of an ancient wyvern.',
    attack: 728,
    secondaryDamageType: 'thunder',
    secondaryAttack: 230,
    awaken: true,
    sharpness: [10, 5, 6, 4],
    sharpnessUp: [10, 5, 6, 8, 1],
    affinity: 0,
    slots: 3,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [42],
      materials: [
        { itemId: 104, amount: 4 },
        { itemId: 100, amount: 10 },
        { itemId: 297, amount: 3 }
      ]
    },
    upgradesTo: [44, 46]
  },
  {
    id: 46,
    type: WeaponClass.HAMMER,
    name: 'Great Gaiarch (G)',
    description:
      "A Hammer sealed within the earth long ago. It pulsates with a wyvern's life force.",
    attack: 936,
    secondaryDamageType: 'thunder',
    secondaryAttack: 340,
    awaken: true,
    sharpness: [5, 4, 14, 10, 2],
    sharpnessUp: [5, 4, 14, 10, 5, 2],
    affinity: 15,
    slots: 3,
    rarity: 6,
    price: 43500,
    upgradesFrom: {
      weaponId: [45, 47],
      materials: [
        { itemId: 103, amount: 10 },
        { itemId: 148, amount: 7 },
        { itemId: 169, amount: 2 }
      ]
    }
  },
  {
    id: 47,
    type: WeaponClass.HAMMER,
    name: 'Gaiarch (Y)',
    description:
      'A Hammer overflowing with history, imbued with the soul of an ancient wyvern.',
    attack: 728,
    secondaryDamageType: 'thunder',
    secondaryAttack: 230,
    awaken: true,
    sharpness: [10, 5, 6, 4],
    sharpnessUp: [10, 5, 6, 8, 1],
    affinity: 15,
    slots: 2,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [42],
      materials: [
        { itemId: 104, amount: 4 },
        { itemId: 100, amount: 10 },
        { itemId: 248, amount: 3 }
      ]
    },
    upgradesTo: [46]
  },
  {
    id: 48,
    type: WeaponClass.HAMMER,
    name: "Devil's Due",
    description:
      "This Hammer, oozing with a Deviljho's power, hungers for living sacrifices.",
    attack: 936,
    secondaryDamageType: 'dragon',
    secondaryAttack: 100,
    awaken: false,
    sharpness: [19, 2, 6, 8],
    sharpnessUp: [19, 2, 6, 8, 4, 1],
    affinity: 5,
    slots: 0,
    rarity: 5,
    price: 66666,
    create: [
      { itemId: 452, amount: 6 },
      { itemId: 451, amount: 3 },
      { itemId: 449, amount: 4 }
    ],
    upgradesTo: [49, 50]
  },
  {
    id: 49,
    type: WeaponClass.HAMMER,
    name: "Devil's Crush (P)",
    description:
      'A large Hammer containing the savage, inexhaustiable energy of the Deviljho.',
    attack: 1040,
    secondaryDamageType: 'dragon',
    secondaryAttack: 150,
    awaken: false,
    sharpness: [19, 2, 6, 8, 4, 1],
    sharpnessUp: [19, 2, 6, 8, 4, 4, 2],
    affinity: 5,
    slots: 1,
    rarity: 7,
    price: 83500,
    upgradesFrom: {
      weaponId: [48],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 452, amount: 8 },
        { itemId: 453, amount: 1 }
      ]
    }
  },
  {
    id: 50,
    type: WeaponClass.HAMMER,
    name: "Devil's Crush (G)",
    description:
      'A large Hammer containing the savage, inexhaustiable energy of the Deviljho.',
    attack: 988,
    secondaryDamageType: 'dragon',
    secondaryAttack: 150,
    awaken: false,
    sharpness: [19, 2, 6, 8, 4, 1],
    sharpnessUp: [19, 2, 6, 8, 4, 4, 2],
    affinity: 20,
    slots: 1,
    rarity: 7,
    price: 83500,
    upgradesFrom: {
      weaponId: [48],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 452, amount: 8 },
        { itemId: 453, amount: 1 }
      ]
    }
  },
  {
    id: 51,
    type: WeaponClass.HAMMER,
    name: 'Alatreon Hammer',
    description:
      'A Hammer made from Alatreon talons, it protects dragons and destroys humans.',
    attack: 884,
    secondaryDamageType: 'dragon',
    secondaryAttack: 330,
    awaken: false,
    sharpness: [6, 5, 11, 8, 5],
    sharpnessUp: [6, 5, 11, 8, 6, 4],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 77777,
    create: [
      { itemId: 403, amount: 6 },
      { itemId: 401, amount: 4 },
      { itemId: 432, amount: 3 }
    ],
    upgradesTo: [52]
  },
  {
    id: 52,
    type: WeaponClass.HAMMER,
    name: 'Alatreon Metamorph',
    description:
      "A Hammer of madness. Its soul-sucking light can consume the bearer's identity.",
    attack: 936,
    secondaryDamageType: 'dragon',
    secondaryAttack: 400,
    awaken: false,
    sharpness: [6, 5, 11, 8, 6, 4],
    sharpnessUp: [6, 5, 11, 8, 6, 5, 4],
    affinity: 0,
    slots: 1,
    rarity: 7,
    price: 100000,
    upgradesFrom: {
      weaponId: [51],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 403, amount: 8 },
        { itemId: 404, amount: 1 }
      ]
    }
  },
  {
    id: 53,
    type: WeaponClass.HAMMER,
    name: 'Kurogane',
    description:
      'A simple-looking Hammer with paralyzing powers. Few know how to craft it.',
    attack: 780,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 200,
    awaken: true,
    sharpness: [6, 5, 11, 8],
    sharpnessUp: [6, 5, 11, 8, 5],
    affinity: 0,
    slots: 2,
    rarity: 3,
    price: 30000,
    create: [
      { itemId: 581, amount: 3 },
      { itemId: 574, amount: 5 },
      { itemId: 381, amount: 2 }
    ],
    upgradesTo: [54]
  },
  {
    id: 54,
    type: WeaponClass.HAMMER,
    name: 'Iron Devil',
    description:
      'Long ago, before Hammers were popular in use, an old hunter wielded this weapon.',
    attack: 936,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 220,
    awaken: true,
    sharpness: [6, 5, 11, 8, 5],
    sharpnessUp: [6, 5, 11, 8, 6, 4],
    affinity: 0,
    slots: 3,
    rarity: 5,
    price: 50000,
    upgradesFrom: {
      weaponId: [53],
      materials: [
        { itemId: 553, amount: 3 },
        { itemId: 554, amount: 5 },
        { itemId: 461, amount: 3 }
      ]
    }
  },
  {
    id: 55,
    type: WeaponClass.HAMMER,
    name: 'Rusted Hammer',
    description:
      'A Hammer with unrealized potential. It could perhaps be polished...',
    attack: 520,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [14, 1],
    sharpnessUp: [14, 4, 1],
    affinity: -70,
    slots: 0,
    rarity: 1,
    price: 0,
    create: [{ itemId: 108, amount: 1 }],
    upgradesTo: [56]
  },
  {
    id: 56,
    type: WeaponClass.HAMMER,
    name: 'Tarnished Hammer',
    description:
      'A Hammer with unrealized potential. It could perhaps be polished...',
    attack: 520,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [14, 4, 2],
    sharpnessUp: [14, 4, 6, 1],
    affinity: -70,
    slots: 0,
    rarity: 1,
    price: 5000,
    upgradesFrom: {
      weaponId: [55],
      materials: [
        { itemId: 98, amount: 22 },
        { itemId: 314, amount: 5 },
        { itemId: 531, amount: 2 }
      ]
    },
    upgradesTo: [57]
  },
  {
    id: 57,
    type: WeaponClass.HAMMER,
    name: 'Breath Core Hammer',
    description:
      "An ancient military Hammer, restored. Its inner core of dragon's breath still burns.",
    attack: 832,
    secondaryDamageType: 'dragon',
    secondaryAttack: 280,
    awaken: false,
    sharpness: [8, 2, 4, 11],
    sharpnessUp: [8, 2, 4, 16],
    affinity: 0,
    slots: 0,
    rarity: 3,
    price: 22222,
    upgradesFrom: {
      weaponId: [56],
      materials: [
        { itemId: 98, amount: 44 },
        { itemId: 377, amount: 2 },
        { itemId: 252, amount: 2 }
      ]
    },
    upgradesTo: [58]
  },
  {
    id: 58,
    type: WeaponClass.HAMMER,
    name: 'Lava Core Hammer',
    description:
      "An ancient military Hammer, restored. Its inner core of dragon's breath still burns.",
    attack: 936,
    secondaryDamageType: 'dragon',
    secondaryAttack: 330,
    awaken: false,
    sharpness: [8, 2, 4, 16],
    sharpnessUp: [8, 2, 4, 18, 3],
    affinity: 0,
    slots: 0,
    rarity: 5,
    price: 44444,
    upgradesFrom: {
      weaponId: [57],
      materials: [
        { itemId: 98, amount: 66 },
        { itemId: 432, amount: 2 },
        { itemId: 160, amount: 1 }
      ]
    }
  },
  {
    id: 59,
    type: WeaponClass.HAMMER,
    name: 'Worn Hammer',
    description:
      'A Hammer with unrealized potential. It could perhaps be restored...',
    attack: 572,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [6, 5, 4],
    sharpnessUp: [6, 5, 9],
    affinity: -70,
    slots: 0,
    rarity: 4,
    price: 0,
    create: [{ itemId: 109, amount: 1 }],
    upgradesTo: [60]
  },
  {
    id: 60,
    type: WeaponClass.HAMMER,
    name: 'Weathered Hammer',
    description:
      'A Hammer with unrealized potential. It could perhaps be restored...',
    attack: 572,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [6, 5, 9],
    sharpnessUp: [6, 5, 11, 2],
    affinity: -70,
    slots: 0,
    rarity: 4,
    price: 5000,
    upgradesFrom: {
      weaponId: [59],
      materials: [
        { itemId: 98, amount: 33 },
        { itemId: 514, amount: 5 },
        { itemId: 531, amount: 2 }
      ]
    },
    upgradesTo: [61]
  },
  {
    id: 61,
    type: WeaponClass.HAMMER,
    name: 'Pulsating Core',
    description:
      'A Hammer from a lost civilization that crushes targets using powerful vibrations.',
    attack: 988,
    secondaryDamageType: 'dragon',
    secondaryAttack: 350,
    awaken: false,
    sharpness: [10, 5, 6, 8, 6],
    sharpnessUp: [10, 5, 6, 8, 9, 2],
    affinity: 0,
    slots: 0,
    rarity: 6,
    price: 55555,
    upgradesFrom: {
      weaponId: [60],
      materials: [
        { itemId: 98, amount: 77 },
        { itemId: 148, amount: 5 },
        { itemId: 447, amount: 1 }
      ]
    }
  }
]);
