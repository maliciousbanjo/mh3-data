import { WeaponClass } from '../enum';
import type { WeaponDamageProperties } from '../types';
import type { Lance, LanceAttack } from './types';

export const LanceDamageProperties = Object.freeze<
  WeaponDamageProperties<WeaponClass.LANCE, LanceAttack>
>({
  type: WeaponClass.LANCE,
  classModifier: 2.3,
  attackModes: [
    {
      name: 'default',
      attacks: [
        { name: 'Unsheathe Attack', hits: [{ type: 'cut', power: 0.28 }] },
        {
          name: 'Low Stab Combo',
          hits: [
            { type: 'cut', power: 0.23 },
            { type: 'cut', power: 0.23 },
            { type: 'cut', power: 0.3 }
          ]
        },
        {
          name: 'High Stab Combo',
          hits: [
            { type: 'cut', power: 0.28 },
            { type: 'cut', power: 0.28 },
            { type: 'cut', power: 0.3 }
          ]
        },
        { name: 'Fast Counter', hits: [{ type: 'cut', power: 0.28 }] },
        { name: 'Charge Counter', hits: [{ type: 'cut', power: 0.3 }] },
        { name: 'Sweep', hits: [{ type: 'cut', power: 0.2 }] },
        {
          name: 'Charge',
          hits: [
            { type: 'cut', power: 0.2 },
            { type: 'cut', power: 0.16 }
          ]
        },
        { name: 'Charge Finisher', hits: [{ type: 'cut', power: 0.4 }] },
        { name: 'Guard Attack', hits: [{ type: 'cut', power: 0.2 }] },
        { name: 'Shield Bash', hits: [{ type: 'impact', power: 0.4, ko: 27 }] }
      ]
    }
  ]
});

/**
 * List of all available {@link Lance}s
 */
export const Lances = Object.freeze<Lance[]>([
  {
    id: 0,
    type: WeaponClass.LANCE,
    name: 'Iron Lance',
    description:
      'A basic Lance for beginning hunters. Provides all-round defense and offense.',
    attack: 138,
    secondaryDamageType: 'fire',
    secondaryAttack: 50,
    awaken: true,
    sharpness: [7, 4, 4],
    sharpnessUp: [7, 4, 9],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 550,
    create: [{ itemId: 97, amount: 3 }],
    upgradesTo: [1]
  },
  {
    id: 1,
    type: WeaponClass.LANCE,
    name: 'Iron Lance+',
    description:
      'A basic Lance for beginning hunters. Provides all-round defense and offense.',
    attack: 161,
    secondaryDamageType: 'fire',
    secondaryAttack: 80,
    awaken: true,
    sharpness: [7, 3, 10],
    sharpnessUp: [7, 3, 15],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 2010,
    upgradesFrom: { weaponId: [0], materials: [{ itemId: 97, amount: 5 }] },
    upgradesTo: [2]
  },
  {
    id: 2,
    type: WeaponClass.LANCE,
    name: 'Thane Lance',
    description:
      'A large Lance forged of hard ore. Traditionally used as an official arm by knights.',
    attack: 207,
    secondaryDamageType: 'fire',
    secondaryAttack: 100,
    awaken: true,
    sharpness: [2, 4, 14],
    sharpnessUp: [2, 4, 16, 3],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 3580,
    upgradesFrom: {
      weaponId: [1],
      materials: [
        { itemId: 99, amount: 2 },
        { itemId: 98, amount: 3 },
        { itemId: 97, amount: 8 }
      ]
    },
    upgradesTo: [3]
  },
  {
    id: 3,
    type: WeaponClass.LANCE,
    name: 'Knight Lance',
    description:
      'A large Lance forged of hard ore. Traditionally used as an official arm by knights.',
    attack: 253,
    secondaryDamageType: 'fire',
    secondaryAttack: 120,
    awaken: true,
    sharpness: [4, 5, 10, 1],
    sharpnessUp: [4, 5, 10, 6],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 7540,
    create: [
      { itemId: 100, amount: 5 },
      { itemId: 102, amount: 8 },
      { itemId: 98, amount: 15 }
    ],
    upgradesFrom: {
      weaponId: [2],
      materials: [
        { itemId: 102, amount: 6 },
        { itemId: 99, amount: 7 },
        { itemId: 97, amount: 10 }
      ]
    },
    upgradesTo: [4, 12]
  },
  {
    id: 4,
    type: WeaponClass.LANCE,
    name: 'Rampart',
    description:
      'A Lance given to a battle-hardened knight. Notable for its large shield.',
    attack: 299,
    secondaryDamageType: 'fire',
    secondaryAttack: 150,
    awaken: true,
    sharpness: [4, 8, 6, 2],
    sharpnessUp: [4, 8, 6, 7],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 11010,
    upgradesFrom: {
      weaponId: [3],
      materials: [
        { itemId: 110, amount: 4 },
        { itemId: 99, amount: 15 },
        { itemId: 97, amount: 15 }
      ]
    },
    upgradesTo: [5, 9]
  },
  {
    id: 5,
    type: WeaponClass.LANCE,
    name: 'Rampart+',
    description:
      'A Lance given to a battle-hardened knight. Notable for its large shield.',
    attack: 322,
    secondaryDamageType: 'fire',
    secondaryAttack: 180,
    awaken: true,
    defense: 12,
    sharpness: [4, 5, 10, 6],
    sharpnessUp: [4, 5, 10, 11],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 16200,
    upgradesFrom: {
      weaponId: [4],
      materials: [
        { itemId: 104, amount: 3 },
        { itemId: 100, amount: 10 },
        { itemId: 118, amount: 5 }
      ]
    },
    upgradesTo: [6]
  },
  {
    id: 6,
    type: WeaponClass.LANCE,
    name: 'Babel Spear',
    description:
      'A golden Lance as stately as its tower namesake with both good offense and defense.',
    attack: 368,
    secondaryDamageType: 'fire',
    secondaryAttack: 200,
    awaken: true,
    defense: 16,
    sharpness: [4, 5, 10, 11],
    sharpnessUp: [4, 5, 10, 13, 3],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 27000,
    upgradesFrom: {
      weaponId: [5],
      materials: [
        { itemId: 378, amount: 5 },
        { itemId: 379, amount: 2 },
        { itemId: 100, amount: 15 }
      ]
    },
    upgradesTo: [7]
  },
  {
    id: 7,
    type: WeaponClass.LANCE,
    name: 'Babel Spear+',
    description:
      'A golden Lance as stately as its tower namesake with both good offense and defense.',
    attack: 391,
    secondaryDamageType: 'fire',
    secondaryAttack: 250,
    awaken: true,
    defense: 20,
    sharpness: [9, 5, 7, 12, 2],
    sharpnessUp: [9, 5, 7, 12, 6, 1],
    affinity: 0,
    slots: 2,
    rarity: 4,
    price: 33800,
    upgradesFrom: {
      weaponId: [6],
      materials: [
        { itemId: 101, amount: 10 },
        { itemId: 104, amount: 10 },
        { itemId: 106, amount: 5 }
      ]
    },
    upgradesTo: [8]
  },
  {
    id: 8,
    type: WeaponClass.LANCE,
    name: 'Elder Babel Spr (R)',
    description:
      'Lance wielded by a knight of old against the gods in an attempt to protect mankind.',
    attack: 437,
    secondaryDamageType: 'fire',
    secondaryAttack: 300,
    awaken: true,
    defense: 24,
    sharpness: [5, 5, 9, 13, 3],
    sharpnessUp: [5, 5, 9, 13, 6, 2],
    affinity: 0,
    slots: 2,
    rarity: 5,
    price: 51000,
    upgradesFrom: {
      weaponId: [7],
      materials: [
        { itemId: 101, amount: 20 },
        { itemId: 447, amount: 1 },
        { itemId: 475, amount: 5 }
      ]
    }
  },
  {
    id: 9,
    type: WeaponClass.LANCE,
    name: 'Tusk Lance',
    description:
      'An icy Lance made from a Barioth tusk. Cold enough to freeze vapor in the air.',
    attack: 299,
    secondaryDamageType: 'ice',
    secondaryAttack: 200,
    awaken: false,
    sharpness: [9, 5, 7, 4],
    sharpnessUp: [9, 5, 7, 9],
    affinity: 30,
    slots: 0,
    rarity: 2,
    price: 15700,
    upgradesFrom: {
      weaponId: [4],
      materials: [
        { itemId: 374, amount: 1 },
        { itemId: 375, amount: 3 },
        { itemId: 372, amount: 5 }
      ]
    },
    upgradesTo: [10]
  },
  {
    id: 10,
    type: WeaponClass.LANCE,
    name: 'Tusk Lance+',
    description:
      'An icy Lance made from a Barioth tusk. Cold enough to freeze vapor in the air.',
    attack: 322,
    secondaryDamageType: 'ice',
    secondaryAttack: 310,
    awaken: false,
    sharpness: [10, 8, 5, 7],
    sharpnessUp: [10, 8, 5, 9, 3],
    affinity: 40,
    slots: 1,
    rarity: 3,
    price: 28390,
    upgradesFrom: {
      weaponId: [9],
      materials: [
        { itemId: 374, amount: 3 },
        { itemId: 376, amount: 2 },
        { itemId: 377, amount: 4 }
      ]
    },
    upgradesTo: [11]
  },
  {
    id: 11,
    type: WeaponClass.LANCE,
    name: 'Sabertooth (G)',
    description:
      'An icy Lance from a frozen land. sharpness and cold, just like the Tundra.',
    attack: 368,
    secondaryDamageType: 'ice',
    secondaryAttack: 420,
    awaken: false,
    sharpness: [7, 3, 15, 5, 5],
    sharpnessUp: [7, 3, 15, 5, 5, 5],
    affinity: 55,
    slots: 2,
    rarity: 6,
    price: 54500,
    upgradesFrom: {
      weaponId: [10],
      materials: [
        { itemId: 419, amount: 3 },
        { itemId: 170, amount: 4 },
        { itemId: 420, amount: 2 }
      ]
    }
  },
  {
    id: 12,
    type: WeaponClass.LANCE,
    name: 'Acrus Lance',
    description:
      'A fearsome Lance made from Lagiacrus materials. Jolts prey with electricity.',
    attack: 322,
    secondaryDamageType: 'thunder',
    secondaryAttack: 180,
    awaken: false,
    sharpness: [2, 4, 16, 3],
    sharpnessUp: [2, 4, 16, 7, 1],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 17010,
    upgradesFrom: {
      weaponId: [3],
      materials: [
        { itemId: 392, amount: 1 },
        { itemId: 284, amount: 7 },
        { itemId: 100, amount: 9 }
      ]
    },
    upgradesTo: [13, 15, 17]
  },
  {
    id: 13,
    type: WeaponClass.LANCE,
    name: 'Doris Spear (R)',
    description:
      'A fearsome Lance made from Lagiacrus materials. Jolts prey with electricity.',
    attack: 368,
    secondaryDamageType: 'thunder',
    secondaryAttack: 240,
    awaken: false,
    sharpness: [9, 5, 7, 9],
    sharpnessUp: [9, 5, 7, 12, 2],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 21100,
    upgradesFrom: {
      weaponId: [12],
      materials: [
        { itemId: 391, amount: 3 },
        { itemId: 287, amount: 3 },
        { itemId: 429, amount: 1 }
      ]
    },
    upgradesTo: [14]
  },
  {
    id: 14,
    type: WeaponClass.LANCE,
    name: 'Doris Fellspear (P)',
    description:
      'A fearsome Lance made from Lagiacrus materials. Jolts prey with electricity.',
    attack: 414,
    secondaryDamageType: 'thunder',
    secondaryAttack: 380,
    awaken: false,
    sharpness: [9, 5, 7, 12, 2],
    sharpnessUp: [9, 5, 7, 12, 6, 1],
    affinity: 0,
    slots: 2,
    rarity: 5,
    price: 51100,
    upgradesFrom: {
      weaponId: [13],
      materials: [
        { itemId: 467, amount: 8 },
        { itemId: 561, amount: 10 },
        { itemId: 164, amount: 5 }
      ]
    }
  },
  {
    id: 15,
    type: WeaponClass.LANCE,
    name: 'Doris Spear (Y)',
    description:
      'A fearsome Lance made from Lagiacrus materials. Jolts prey with electricity.',
    attack: 345,
    secondaryDamageType: 'thunder',
    secondaryAttack: 240,
    awaken: false,
    sharpness: [9, 5, 7, 9],
    sharpnessUp: [9, 5, 7, 12, 2],
    affinity: 15,
    slots: 1,
    rarity: 3,
    price: 21100,
    upgradesFrom: {
      weaponId: [12],
      materials: [
        { itemId: 288, amount: 1 },
        { itemId: 392, amount: 3 },
        { itemId: 268, amount: 4 }
      ]
    },
    upgradesTo: [16]
  },
  {
    id: 16,
    type: WeaponClass.LANCE,
    name: 'Doris Fellspear (G)',
    description:
      'A fearsome Lance made from Lagiacrus materials. Jolts prey with electricity.',
    attack: 391,
    secondaryDamageType: 'thunder',
    secondaryAttack: 380,
    awaken: false,
    sharpness: [9, 5, 7, 12, 2],
    sharpnessUp: [9, 5, 7, 12, 6, 1],
    affinity: 15,
    slots: 2,
    rarity: 5,
    price: 51100,
    upgradesFrom: {
      weaponId: [15],
      materials: [
        { itemId: 467, amount: 8 },
        { itemId: 561, amount: 10 },
        { itemId: 163, amount: 5 }
      ]
    }
  },
  {
    id: 17,
    type: WeaponClass.LANCE,
    name: 'High Acrus Lance',
    description:
      "Lagiacrus' lightning in Lance form. Those it touches are reduced to sea foam.",
    attack: 368,
    secondaryDamageType: 'thunder',
    secondaryAttack: 320,
    awaken: false,
    sharpness: [2, 4, 16, 7, 1],
    sharpnessUp: [2, 4, 16, 7, 6],
    affinity: 0,
    slots: 0,
    rarity: 4,
    price: 43700,
    upgradesFrom: {
      weaponId: [12],
      materials: [
        { itemId: 392, amount: 4 },
        { itemId: 287, amount: 4 },
        { itemId: 169, amount: 2 }
      ]
    },
    upgradesTo: [18]
  },
  {
    id: 18,
    type: WeaponClass.LANCE,
    name: 'Amphitrite (P)',
    description:
      "Lagiacrus' lightning in Lance form. Those it touches are reduced to sea foam.",
    attack: 414,
    secondaryDamageType: 'thunder',
    secondaryAttack: 440,
    awaken: false,
    sharpness: [2, 4, 16, 7, 6],
    sharpnessUp: [2, 4, 16, 7, 8, 3],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 53400,
    upgradesFrom: {
      weaponId: [17],
      materials: [
        { itemId: 468, amount: 4 },
        { itemId: 286, amount: 3 },
        { itemId: 288, amount: 5 }
      ]
    }
  },
  {
    id: 19,
    type: WeaponClass.LANCE,
    name: 'Bone Lance',
    description:
      'A Lance notable for its exceptional blocking and Finishing Blow.',
    attack: 161,
    secondaryDamageType: 'poison',
    secondaryAttack: 80,
    awaken: true,
    sharpness: [9, 5, 1],
    sharpnessUp: [9, 5, 6],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 540,
    create: [
      { itemId: 149, amount: 1 },
      { itemId: 182, amount: 2 }
    ],
    upgradesTo: [20]
  },
  {
    id: 20,
    type: WeaponClass.LANCE,
    name: 'Bone Lance+',
    description:
      'A Lance notable for its exceptional blocking and Finishing Blow.',
    attack: 184,
    secondaryDamageType: 'poison',
    secondaryAttack: 110,
    awaken: true,
    sharpness: [4, 8, 3],
    sharpnessUp: [4, 8, 6, 2],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 1810,
    upgradesFrom: {
      weaponId: [19],
      materials: [
        { itemId: 149, amount: 3 },
        { itemId: 277, amount: 2 }
      ]
    },
    upgradesTo: [21]
  },
  {
    id: 21,
    type: WeaponClass.LANCE,
    name: 'Ploshasta',
    description:
      'A Lance made from Rhenoplos parts. Pairs good Defense with a strong Dash Attack.',
    attack: 230,
    secondaryDamageType: 'poison',
    secondaryAttack: 130,
    awaken: true,
    sharpness: [9, 5, 6],
    sharpnessUp: [9, 5, 7, 4],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 2790,
    upgradesFrom: {
      weaponId: [20],
      materials: [
        { itemId: 149, amount: 5 },
        { itemId: 510, amount: 2 },
        { itemId: 280, amount: 2 }
      ]
    },
    upgradesTo: [22, 35]
  },
  {
    id: 22,
    type: WeaponClass.LANCE,
    name: 'Rhenohasta',
    description:
      'A Lance made from Rhenoplos parts. Pairs good Defense with a strong Dash Attack.',
    attack: 299,
    secondaryDamageType: 'poison',
    secondaryAttack: 150,
    awaken: true,
    sharpness: [4, 5, 10, 1],
    sharpnessUp: [4, 5, 10, 6],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 6100,
    create: [
      { itemId: 151, amount: 2 },
      { itemId: 272, amount: 4 },
      { itemId: 510, amount: 5 }
    ],
    upgradesFrom: {
      weaponId: [21],
      materials: [
        { itemId: 150, amount: 3 },
        { itemId: 511, amount: 2 },
        { itemId: 263, amount: 2 }
      ]
    },
    upgradesTo: [23, 26, 32]
  },
  {
    id: 23,
    type: WeaponClass.LANCE,
    name: 'Azure Crest',
    description:
      'A Lance made from Baggi materials. The tip contains tranquilizing fluid.',
    attack: 299,
    secondaryDamageType: 'sleep',
    secondaryAttack: 150,
    awaken: false,
    sharpness: [4, 5, 10, 6],
    sharpnessUp: [4, 5, 10, 11],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 13200,
    upgradesFrom: {
      weaponId: [22],
      materials: [
        { itemId: 521, amount: 3 },
        { itemId: 518, amount: 10 },
        { itemId: 151, amount: 2 }
      ]
    },
    upgradesTo: [24]
  },
  {
    id: 24,
    type: WeaponClass.LANCE,
    name: 'Azure Crest+',
    description:
      'A Lance made from Baggi materials. The tip contains tranquilizing fluid.',
    attack: 322,
    secondaryDamageType: 'sleep',
    secondaryAttack: 200,
    awaken: false,
    sharpness: [4, 5, 10, 11],
    sharpnessUp: [4, 5, 10, 13, 3],
    affinity: 0,
    slots: 0,
    rarity: 3,
    price: 18300,
    upgradesFrom: {
      weaponId: [23],
      materials: [
        { itemId: 516, amount: 3 },
        { itemId: 394, amount: 3 },
        { itemId: 118, amount: 5 }
      ]
    },
    upgradesTo: [25]
  },
  {
    id: 25,
    type: WeaponClass.LANCE,
    name: 'Great Azure',
    description:
      'A Lance that gives prey a few moments of rest followed by an eternity of slumber.',
    attack: 391,
    secondaryDamageType: 'sleep',
    secondaryAttack: 250,
    awaken: false,
    sharpness: [5, 5, 9, 13, 3],
    sharpnessUp: [5, 5, 9, 13, 6, 2],
    affinity: 0,
    slots: 0,
    rarity: 5,
    price: 33300,
    upgradesFrom: {
      weaponId: [24],
      materials: [
        { itemId: 517, amount: 5 },
        { itemId: 525, amount: 10 },
        { itemId: 522, amount: 5 }
      ]
    }
  },
  {
    id: 26,
    type: WeaponClass.LANCE,
    name: 'Rugged Lance',
    description:
      'A Lance as solid as a Barroth. Better for sweeping than thrusting.',
    attack: 345,
    secondaryDamageType: 'poison',
    secondaryAttack: 170,
    awaken: true,
    sharpness: [2, 4, 16, 3],
    sharpnessUp: [2, 4, 16, 7, 1],
    affinity: -15,
    slots: 1,
    rarity: 2,
    price: 10100,
    upgradesFrom: {
      weaponId: [22],
      materials: [
        { itemId: 272, amount: 5 },
        { itemId: 274, amount: 2 },
        { itemId: 110, amount: 8 }
      ]
    },
    upgradesTo: [27, 28, 30]
  },
  {
    id: 27,
    type: WeaponClass.LANCE,
    name: 'Rugged Lance+',
    description:
      'A Lance as solid as a Barroth. Better for sweeping than thrusting.',
    attack: 391,
    secondaryDamageType: 'poison',
    secondaryAttack: 200,
    awaken: true,
    sharpness: [2, 4, 16, 7, 1],
    sharpnessUp: [2, 4, 16, 7, 6],
    affinity: -25,
    slots: 2,
    rarity: 3,
    price: 23900,
    upgradesFrom: {
      weaponId: [26],
      materials: [
        { itemId: 276, amount: 2 },
        { itemId: 273, amount: 5 },
        { itemId: 355, amount: 1 }
      ]
    }
  },
  {
    id: 28,
    type: WeaponClass.LANCE,
    name: 'Diablos Lance',
    description:
      'A Lance made from the thick, sharpness horn of the Diablos, the dignified desert king.',
    attack: 437,
    secondaryDamageType: 'water',
    secondaryAttack: 200,
    awaken: true,
    sharpness: [15, 5, 3, 7],
    sharpnessUp: [15, 5, 3, 10, 2],
    affinity: -20,
    slots: 1,
    rarity: 4,
    price: 30500,
    upgradesFrom: {
      weaponId: [26],
      materials: [
        { itemId: 355, amount: 2 },
        { itemId: 271, amount: 4 },
        { itemId: 561, amount: 5 }
      ]
    },
    upgradesTo: [29]
  },
  {
    id: 29,
    type: WeaponClass.LANCE,
    name: 'Diablos Spear',
    description:
      'A Lance holding the spirit of the king of the desert. It can pierce anything.',
    attack: 506,
    secondaryDamageType: 'water',
    secondaryAttack: 250,
    awaken: true,
    sharpness: [16, 5, 2, 10, 2],
    sharpnessUp: [16, 5, 2, 10, 6, 1],
    affinity: -30,
    slots: 1,
    rarity: 6,
    price: 58600,
    upgradesFrom: {
      weaponId: [28],
      materials: [
        { itemId: 424, amount: 2 },
        { itemId: 423, amount: 3 },
        { itemId: 421, amount: 3 }
      ]
    }
  },
  {
    id: 30,
    type: WeaponClass.LANCE,
    name: 'Spiral Heat',
    description:
      'A Lance made from the beak of the Agnaktor. Capable of piercing solid rock.',
    attack: 345,
    secondaryDamageType: 'fire',
    secondaryAttack: 220,
    awaken: false,
    sharpness: [4, 8, 6, 12],
    sharpnessUp: [4, 8, 6, 16, 1],
    affinity: 15,
    slots: 0,
    rarity: 3,
    price: 24600,
    upgradesFrom: {
      weaponId: [26],
      materials: [
        { itemId: 387, amount: 2 },
        { itemId: 382, amount: 5 },
        { itemId: 384, amount: 3 }
      ]
    },
    upgradesTo: [31]
  },
  {
    id: 31,
    type: WeaponClass.LANCE,
    name: 'Agnaktor Firelance',
    description:
      'A Lance of crimson flame. Its fiery whirlwinds turn everything to ash.',
    attack: 391,
    secondaryDamageType: 'fire',
    secondaryAttack: 350,
    awaken: false,
    sharpness: [5, 7, 5, 17, 1],
    sharpnessUp: [5, 7, 5, 17, 4, 2],
    affinity: 20,
    slots: 0,
    rarity: 6,
    price: 57990,
    upgradesFrom: {
      weaponId: [30],
      materials: [
        { itemId: 387, amount: 5 },
        { itemId: 474, amount: 5 },
        { itemId: 473, amount: 5 }
      ]
    }
  },
  {
    id: 32,
    type: WeaponClass.LANCE,
    name: 'Gobulu Muruka',
    description:
      'A Lance made from Gobul spines. Paralyzes its prey with neurotoxins.',
    attack: 299,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 120,
    awaken: false,
    sharpness: [9, 5, 7, 4],
    sharpnessUp: [9, 5, 7, 9],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 12300,
    upgradesFrom: {
      weaponId: [22],
      materials: [
        { itemId: 296, amount: 2 },
        { itemId: 297, amount: 3 },
        { itemId: 302, amount: 1 }
      ]
    },
    upgradesTo: [33]
  },
  {
    id: 33,
    type: WeaponClass.LANCE,
    name: 'Gobulu Muruka+',
    description:
      'A Lance made from Gobul spines. Paralyzes its prey with neurotoxins.',
    attack: 322,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 180,
    awaken: false,
    sharpness: [9, 5, 7, 9],
    sharpnessUp: [9, 5, 7, 12, 2],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 17770,
    upgradesFrom: {
      weaponId: [32],
      materials: [
        { itemId: 298, amount: 3 },
        { itemId: 376, amount: 1 },
        { itemId: 168, amount: 1 }
      ]
    },
    upgradesTo: [34]
  },
  {
    id: 34,
    type: WeaponClass.LANCE,
    name: 'Gobulu Muraaka',
    description:
      'A Lance with the power to paralyze the bodies of monsters it wounds.',
    attack: 368,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 230,
    awaken: false,
    sharpness: [9, 5, 7, 12, 2],
    sharpnessUp: [9, 5, 7, 12, 6, 1],
    affinity: 0,
    slots: 1,
    rarity: 5,
    price: 39500,
    upgradesFrom: {
      weaponId: [33],
      materials: [
        { itemId: 461, amount: 7 },
        { itemId: 464, amount: 4 },
        { itemId: 103, amount: 10 }
      ]
    }
  },
  {
    id: 35,
    type: WeaponClass.LANCE,
    name: 'Ludroth Bone Spear',
    description:
      'A drill-like shape enhances the piercing power of this Lance made of Ludroth bone.',
    attack: 253,
    secondaryDamageType: 'water',
    secondaryAttack: 90,
    awaken: true,
    sharpness: [2, 4, 14],
    sharpnessUp: [2, 4, 16, 3],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 4110,
    upgradesFrom: {
      weaponId: [21],
      materials: [
        { itemId: 295, amount: 2 },
        { itemId: 294, amount: 6 },
        { itemId: 116, amount: 2 }
      ]
    },
    upgradesTo: [36]
  },
  {
    id: 36,
    type: WeaponClass.LANCE,
    name: 'Spiral Lance',
    description:
      'A Water-filled Lance made of Royal Ludroth bone. Shoots pressurized water into prey.',
    attack: 276,
    secondaryDamageType: 'water',
    secondaryAttack: 110,
    awaken: false,
    sharpness: [9, 5, 7, 4],
    sharpnessUp: [9, 5, 7, 9],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 8960,
    create: [
      { itemId: 456, amount: 1 },
      { itemId: 289, amount: 3 },
      { itemId: 151, amount: 2 }
    ],
    upgradesFrom: {
      weaponId: [35],
      materials: [
        { itemId: 289, amount: 3 },
        { itemId: 291, amount: 2 },
        { itemId: 371, amount: 2 }
      ]
    },
    upgradesTo: [37, 40]
  },
  {
    id: 37,
    type: WeaponClass.LANCE,
    name: 'Spiral Lance+',
    description:
      'A Water-filled Lance made of Royal Ludroth bone. Shoots pressurized water into prey.',
    attack: 322,
    secondaryDamageType: 'water',
    secondaryAttack: 240,
    awaken: false,
    sharpness: [15, 5, 3, 7],
    sharpnessUp: [15, 5, 3, 10, 2],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 18450,
    upgradesFrom: {
      weaponId: [36],
      materials: [
        { itemId: 456, amount: 4 },
        { itemId: 297, amount: 3 },
        { itemId: 287, amount: 3 }
      ]
    },
    upgradesTo: [38, 39]
  },
  {
    id: 38,
    type: WeaponClass.LANCE,
    name: 'Spiral Splash (B)',
    description:
      'A Royal Ludroth Lance that resembles a waterspout. Hits prey with a deluge of blows.',
    attack: 391,
    secondaryDamageType: 'water',
    secondaryAttack: 300,
    awaken: false,
    sharpness: [11, 8, 5, 8, 3],
    sharpnessUp: [11, 8, 5, 8, 6, 2],
    affinity: 0,
    slots: 2,
    rarity: 5,
    price: 29500,
    upgradesFrom: {
      weaponId: [37],
      materials: [
        { itemId: 457, amount: 5 },
        { itemId: 460, amount: 2 },
        { itemId: 459, amount: 3 }
      ]
    }
  },
  {
    id: 39,
    type: WeaponClass.LANCE,
    name: 'Spiral Splash (G)',
    description:
      'A Royal Ludroth Lance that resembles a waterspout. Hits prey with a deluge of blows.',
    attack: 391,
    secondaryDamageType: 'water',
    secondaryAttack: 300,
    awaken: false,
    sharpness: [11, 8, 5, 8, 3],
    sharpnessUp: [11, 8, 5, 8, 6, 2],
    affinity: 15,
    slots: 2,
    rarity: 5,
    price: 31500,
    upgradesFrom: {
      weaponId: [37],
      materials: [
        { itemId: 457, amount: 5 },
        { itemId: 460, amount: 2 },
        { itemId: 467, amount: 3 }
      ]
    }
  },
  {
    id: 40,
    type: WeaponClass.LANCE,
    name: 'Shadow Javelin',
    description:
      'A Lance made with the toxins of the Gigginox. Violently poisons any monster it hits.',
    attack: 414,
    secondaryDamageType: 'poison',
    secondaryAttack: 240,
    awaken: false,
    sharpness: [4, 5, 10, 11],
    sharpnessUp: [4, 5, 10, 13, 3],
    affinity: 0,
    slots: 1,
    rarity: 4,
    price: 33300,
    upgradesFrom: {
      weaponId: [36],
      materials: [
        { itemId: 167, amount: 3 },
        { itemId: 266, amount: 3 },
        { itemId: 169, amount: 2 }
      ]
    },
    upgradesTo: [41]
  },
  {
    id: 41,
    type: WeaponClass.LANCE,
    name: 'Toxic Javelin',
    description:
      'A Lance with a poisoned tip. A knowledge of poison is required to use it safely.',
    attack: 437,
    secondaryDamageType: 'poison',
    secondaryAttack: 290,
    awaken: false,
    sharpness: [9, 5, 7, 12, 2],
    sharpnessUp: [9, 5, 7, 12, 6, 1],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 51200,
    upgradesFrom: {
      weaponId: [40],
      materials: [
        { itemId: 176, amount: 3 },
        { itemId: 175, amount: 3 },
        { itemId: 174, amount: 3 }
      ]
    }
  },
  {
    id: 42,
    type: WeaponClass.LANCE,
    name: 'Blue Crater',
    description:
      'A Lance made from ore mined in polar climes. Upgradeable in more ways than one.',
    attack: 299,
    secondaryDamageType: 'water',
    secondaryAttack: 150,
    awaken: true,
    sharpness: [4, 8, 6, 2],
    sharpnessUp: [4, 8, 6, 6],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 9800,
    create: [
      { itemId: 106, amount: 2 },
      { itemId: 102, amount: 10 },
      { itemId: 146, amount: 1 }
    ],
    upgradesTo: [43, 45, 47]
  },
  {
    id: 43,
    type: WeaponClass.LANCE,
    name: 'Smalt Crater (R)',
    description:
      'A Lance whose ore holds ancient memories. Impressive in its natural greatness.',
    attack: 345,
    secondaryDamageType: 'water',
    secondaryAttack: 190,
    awaken: true,
    sharpness: [4, 8, 6, 7],
    sharpnessUp: [4, 8, 6, 12],
    affinity: 0,
    slots: 2,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [42],
      materials: [
        { itemId: 118, amount: 5 },
        { itemId: 100, amount: 5 },
        { itemId: 269, amount: 3 }
      ]
    },
    upgradesTo: [44]
  },
  {
    id: 44,
    type: WeaponClass.LANCE,
    name: 'Doom Crown (P)',
    description:
      'An ancient stone Lance whose thrusts are as unstoppable as the march of time.',
    attack: 437,
    secondaryDamageType: 'water',
    secondaryAttack: 280,
    awaken: true,
    sharpness: [5, 5, 9, 13, 3],
    sharpnessUp: [5, 5, 9, 13, 6, 2],
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
    type: WeaponClass.LANCE,
    name: 'Smalt Crater (B)',
    description:
      'A Lance whose ore holds ancient memories. Impressive in its natural greatness.',
    attack: 322,
    secondaryDamageType: 'water',
    secondaryAttack: 190,
    awaken: true,
    sharpness: [4, 8, 6, 7],
    sharpnessUp: [4, 8, 6, 12],
    affinity: 0,
    slots: 3,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [42],
      materials: [
        { itemId: 118, amount: 5 },
        { itemId: 100, amount: 5 },
        { itemId: 292, amount: 3 }
      ]
    },
    upgradesTo: [44, 46]
  },
  {
    id: 46,
    type: WeaponClass.LANCE,
    name: 'Doom Crown (G)',
    description:
      'An ancient stone Lance whose thrusts are as unstoppable as the march of time.',
    attack: 414,
    secondaryDamageType: 'water',
    secondaryAttack: 280,
    awaken: true,
    sharpness: [5, 5, 9, 13, 3],
    sharpnessUp: [5, 5, 9, 13, 6, 2],
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
    type: WeaponClass.LANCE,
    name: 'Smalt Crater (Y)',
    description:
      'A Lance whose ore holds ancient memories. Impressive in its natural greatness.',
    attack: 322,
    secondaryDamageType: 'water',
    secondaryAttack: 190,
    awaken: true,
    sharpness: [4, 8, 6, 7],
    sharpnessUp: [4, 8, 6, 12],
    affinity: 15,
    slots: 2,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [42],
      materials: [
        { itemId: 118, amount: 5 },
        { itemId: 100, amount: 5 },
        { itemId: 247, amount: 3 }
      ]
    },
    upgradesTo: [46]
  },
  {
    id: 48,
    type: WeaponClass.LANCE,
    name: 'Grief Lance',
    description:
      'The muscular force of a Deviljho has been channeled into this Lance.',
    attack: 414,
    secondaryDamageType: 'dragon',
    secondaryAttack: 100,
    awaken: false,
    sharpness: [9, 5, 7, 12, 2],
    sharpnessUp: [9, 5, 7, 12, 6, 1],
    affinity: 5,
    slots: 0,
    rarity: 5,
    price: 66666,
    create: [
      { itemId: 455, amount: 3 },
      { itemId: 452, amount: 5 },
      { itemId: 450, amount: 8 }
    ],
    upgradesTo: [49, 50]
  },
  {
    id: 49,
    type: WeaponClass.LANCE,
    name: 'Fiendish Tower (P)',
    description:
      "This Lance channels a Deviljho's power to split dragon scales like steel.",
    attack: 460,
    secondaryDamageType: 'dragon',
    secondaryAttack: 150,
    awaken: false,
    sharpness: [9, 5, 7, 12, 6, 1],
    sharpnessUp: [9, 5, 7, 12, 6, 5, 1],
    affinity: 5,
    slots: 1,
    rarity: 7,
    price: 83400,
    upgradesFrom: {
      weaponId: [48],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 454, amount: 3 },
        { itemId: 453, amount: 1 }
      ]
    }
  },
  {
    id: 50,
    type: WeaponClass.LANCE,
    name: 'Fiendish Tower (G)',
    description:
      "This Lance channels a Deviljho's power to split dragon scales like steel.",
    attack: 437,
    secondaryDamageType: 'dragon',
    secondaryAttack: 150,
    awaken: false,
    sharpness: [9, 5, 7, 12, 6, 1],
    sharpnessUp: [9, 5, 7, 12, 6, 5, 1],
    affinity: 20,
    slots: 1,
    rarity: 7,
    price: 83400,
    upgradesFrom: {
      weaponId: [48],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 454, amount: 3 },
        { itemId: 453, amount: 1 }
      ]
    }
  },
  {
    id: 51,
    type: WeaponClass.LANCE,
    name: 'Alatreon Lance',
    description:
      "A Lance fashioned after the Alatreon's horns. Some say it's a key to another world.",
    attack: 391,
    secondaryDamageType: 'dragon',
    secondaryAttack: 400,
    awaken: false,
    sharpness: [7, 3, 15, 5, 5],
    sharpnessUp: [7, 3, 15, 5, 5, 5],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 77777,
    create: [
      { itemId: 476, amount: 3 },
      { itemId: 477, amount: 4 },
      { itemId: 432, amount: 3 }
    ],
    upgradesTo: [52]
  },
  {
    id: 52,
    type: WeaponClass.LANCE,
    name: 'Alatreon Gleam',
    description:
      'A terrible Lance that issues a dim light. Owners are said to go missing, or worse...',
    attack: 414,
    secondaryDamageType: 'dragon',
    secondaryAttack: 450,
    awaken: false,
    sharpness: [7, 3, 15, 5, 5],
    sharpnessUp: [7, 3, 15, 5, 5, 6, 4],
    affinity: 0,
    slots: 1,
    rarity: 7,
    price: 100000,
    upgradesFrom: {
      weaponId: [51],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 477, amount: 5 },
        { itemId: 404, amount: 1 }
      ]
    }
  },
  {
    id: 53,
    type: WeaponClass.LANCE,
    name: "Warrior's Lance",
    description:
      'An ordinary-looking Lance that, with continued use, outranks many others.',
    attack: 345,
    secondaryDamageType: 'thunder',
    secondaryAttack: 250,
    awaken: true,
    sharpness: [4, 5, 10, 11],
    sharpnessUp: [4, 5, 10, 13, 3],
    affinity: 0,
    slots: 2,
    rarity: 3,
    price: 30000,
    create: [
      { itemId: 581, amount: 3 },
      { itemId: 577, amount: 4 },
      { itemId: 104, amount: 5 }
    ],
    upgradesTo: [54]
  },
  {
    id: 54,
    type: WeaponClass.LANCE,
    name: 'Millennium',
    description:
      'A Lance carried by a knight who faced certain death to rescue his princess.',
    attack: 414,
    secondaryDamageType: 'thunder',
    secondaryAttack: 300,
    awaken: true,
    sharpness: [5, 5, 9, 13, 3],
    sharpnessUp: [5, 5, 9, 13, 6, 2],
    affinity: 0,
    slots: 3,
    rarity: 5,
    price: 50000,
    upgradesFrom: {
      weaponId: [53],
      materials: [
        { itemId: 553, amount: 3 },
        { itemId: 347, amount: 5 },
        { itemId: 168, amount: 2 }
      ]
    }
  },
  {
    id: 55,
    type: WeaponClass.LANCE,
    name: 'Sharq Attack',
    description:
      "Depicts the terror of Moga's shores. Just watch out for other hunters' harpoons!",
    attack: 230,
    secondaryDamageType: 'water',
    secondaryAttack: 450,
    awaken: false,
    sharpness: [7, 4, 15, 5, 4],
    sharpnessUp: [7, 4, 15, 5, 5, 4],
    affinity: 15,
    slots: 2,
    rarity: 3,
    price: 9999,
    create: [
      { itemId: 107, amount: 5 },
      { itemId: 575, amount: 5 },
      { itemId: 102, amount: 20 }
    ]
  },
  {
    id: 56,
    type: WeaponClass.LANCE,
    name: 'ML001: Baltzenger',
    description:
      'Prototype of a weapon being developed in a distant land, for now it works as a Lance.',
    attack: 345,
    secondaryDamageType: 'fire',
    secondaryAttack: 250,
    awaken: false,
    sharpness: [9, 5, 7, 9],
    sharpnessUp: [9, 5, 7, 12, 2],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 30000,
    create: [
      { itemId: 558, amount: 5 },
      { itemId: 104, amount: 5 },
      { itemId: 257, amount: 2 }
    ],
    upgradesTo: [57]
  },
  {
    id: 57,
    type: WeaponClass.LANCE,
    name: 'Banderlance "Byakko"',
    description:
      'Prototype of a weapon being developed in a distance land, for now it works as a Lance.',
    attack: 414,
    secondaryDamageType: 'fire',
    secondaryAttack: 280,
    awaken: false,
    sharpness: [2, 4, 16, 7, 6],
    sharpnessUp: [2, 4, 16, 7, 8, 3],
    affinity: 0,
    slots: 2,
    rarity: 6,
    price: 50000,
    upgradesFrom: {
      weaponId: [56],
      materials: [
        { itemId: 558, amount: 6 },
        { itemId: 475, amount: 7 },
        { itemId: 158, amount: 2 }
      ]
    }
  },
  {
    id: 58,
    type: WeaponClass.LANCE,
    name: 'Rusted Lance',
    description:
      'A Lance with unrealized potential. It could perhaps be polished...',
    attack: 230,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [15],
    sharpnessUp: [15, 5],
    affinity: -70,
    slots: 0,
    rarity: 1,
    price: 0,
    create: [{ itemId: 108, amount: 1 }],
    upgradesTo: [59]
  },
  {
    id: 59,
    type: WeaponClass.LANCE,
    name: 'Tarnished Lance',
    description:
      'A Lance with unrealized potential. It could perhaps be polished...',
    attack: 230,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [4, 8, 3],
    sharpnessUp: [4, 8, 6, 2],
    affinity: -70,
    slots: 0,
    rarity: 1,
    price: 5000,
    upgradesFrom: {
      weaponId: [58],
      materials: [
        { itemId: 98, amount: 22 },
        { itemId: 314, amount: 5 },
        { itemId: 531, amount: 2 }
      ]
    },
    upgradesTo: [60]
  },
  {
    id: 60,
    type: WeaponClass.LANCE,
    name: 'Undertaker',
    description:
      'A mechanical spear of ancient metal. No modern smith can restore its tip.',
    attack: 368,
    secondaryDamageType: 'dragon',
    secondaryAttack: 250,
    awaken: false,
    sharpness: [3, 7, 4, 11],
    sharpnessUp: [3, 7, 4, 14, 2],
    affinity: 0,
    slots: 0,
    rarity: 3,
    price: 22222,
    upgradesFrom: {
      weaponId: [59],
      materials: [
        { itemId: 98, amount: 44 },
        { itemId: 377, amount: 2 },
        { itemId: 252, amount: 2 }
      ]
    },
    upgradesTo: [61]
  },
  {
    id: 61,
    type: WeaponClass.LANCE,
    name: 'High Undertaker',
    description:
      'A mechanical spear of ancient metal. No modern smith can restore its tip.',
    attack: 414,
    secondaryDamageType: 'dragon',
    secondaryAttack: 300,
    awaken: false,
    sharpness: [3, 7, 4, 14, 2],
    sharpnessUp: [3, 7, 4, 14, 7],
    affinity: 0,
    slots: 0,
    rarity: 5,
    price: 44444,
    upgradesFrom: {
      weaponId: [60],
      materials: [
        { itemId: 98, amount: 66 },
        { itemId: 432, amount: 2 },
        { itemId: 463, amount: 2 }
      ]
    }
  },
  {
    id: 62,
    type: WeaponClass.LANCE,
    name: 'Worn Spear',
    description:
      'A Lance with unrealized potential. Perhaps it could be restored...',
    attack: 253,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [10, 5],
    sharpnessUp: [10, 8, 2],
    affinity: -70,
    slots: 0,
    rarity: 4,
    price: 0,
    create: [{ itemId: 109, amount: 1 }],
    upgradesTo: [63]
  },
  {
    id: 63,
    type: WeaponClass.LANCE,
    name: 'Weathered Spear',
    description:
      'A Lance with unrealized potential. Perhaps it could be restored...',
    attack: 253,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [10, 8, 2],
    sharpnessUp: [10, 8, 5, 2],
    affinity: -70,
    slots: 0,
    rarity: 4,
    price: 5000,
    upgradesFrom: {
      weaponId: [62],
      materials: [
        { itemId: 98, amount: 33 },
        { itemId: 514, amount: 5 },
        { itemId: 531, amount: 2 }
      ]
    },
    upgradesTo: [64]
  },
  {
    id: 64,
    type: WeaponClass.LANCE,
    name: 'Skyscraper',
    description:
      'An ancient Lance discovered unused. It towers high, as if to pierce the heavens.',
    attack: 437,
    secondaryDamageType: 'dragon',
    secondaryAttack: 330,
    awaken: false,
    sharpness: [3, 7, 4, 14, 7],
    sharpnessUp: [3, 7, 4, 14, 9, 3],
    affinity: 0,
    slots: 0,
    rarity: 6,
    price: 55555,
    upgradesFrom: {
      weaponId: [63],
      materials: [
        { itemId: 98, amount: 77 },
        { itemId: 148, amount: 5 },
        { itemId: 469, amount: 1 }
      ]
    }
  }
]);
