import { deepFreeze } from '../../../utils';
import { WeaponClass } from '../enum';
import type { WeaponDamageProperties } from '../types';
import type { SwitchAxe, SwitchAxeAttack } from './types';

export const SwitchAxeDamageProperties = deepFreeze<
  WeaponDamageProperties<WeaponClass.SWITCH_AXE, SwitchAxeAttack>
>({
  type: WeaponClass.SWITCH_AXE,
  classModifier: 5.4,
  attackModes: [
    {
      name: 'axe',
      attacks: [
        { name: 'Unsheathe Attack', hits: [{ type: 'cut', power: 0.25 }] },
        { name: 'Overhead Slash', hits: [{ type: 'cut', power: 0.54 }] },
        { name: 'Forward Slash', hits: [{ type: 'cut', power: 0.2 }] },
        { name: 'Side Slash', hits: [{ type: 'cut', power: 0.25 }] },
        { name: 'Rising Slash', hits: [{ type: 'cut', power: 0.38 }] },
        {
          name: 'Slash Combo',
          hits: [
            { type: 'cut', power: 0.1 },
            { type: 'cut', power: 0.1 }
          ]
        },
        { name: 'Switch to Sword', hits: [{ type: 'cut', power: 0.34 }] }
      ]
    },
    {
      name: 'sword',
      attacks: [
        { name: 'Unsheathe Attack', hits: [{ type: 'cut', power: 0.34 }] },
        { name: 'Side Slash', hits: [{ type: 'cut', power: 0.22 }] },
        { name: 'Rising Slash', hits: [{ type: 'cut', power: 0.3 }] },
        { name: 'Overhead Slash', hits: [{ type: 'cut', power: 0.34 }] },
        { name: 'Discharge Thrust', hits: [{ type: 'cut', power: 0.3 }] },
        {
          name: 'Discharge Combo',
          hits: [
            { type: 'cut', power: 0.15 },
            { type: 'cut', power: 0.15 },
            { type: 'cut', power: 0.15 },
            { type: 'cut', power: 0.15 },
            { type: 'cut', power: 0.15 },
            { type: 'cut', power: 0.15 }
          ]
        },
        { name: 'Discharge Finisher', hits: [{ type: 'cut', power: 0.6 }] },
        { name: 'Switch to Axe', hits: [{ type: 'cut', power: 0.25 }] }
      ]
    }
  ]
});

/**
 * List of all available {@link SwitchAxe}s
 */
export const SwitchAxes = deepFreeze<SwitchAxe[]>([
  {
    id: 0,
    type: WeaponClass.SWITCH_AXE,
    name: 'Bone Axe',
    description:
      'The newest in weapons, a desert creation. Users must master both axe and sword.',
    attack: 540,
    secondaryDamageType: 'fire',
    secondaryAttack: 100,
    awaken: true,
    phial: 'power',
    sharpness: [7, 4, 9],
    sharpnessUp: [7, 4, 11, 3],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 3210,
    create: [
      { itemId: 149, amount: 10 },
      { itemId: 97, amount: 10 },
      { itemId: 314, amount: 2 }
    ],
    upgradesTo: [1]
  },
  {
    id: 1,
    type: WeaponClass.SWITCH_AXE,
    name: 'Bone Axe+',
    description:
      'The newest in weapons, a desert creation. Users must master both axe and sword.',
    attack: 648,
    secondaryDamageType: 'fire',
    secondaryAttack: 150,
    awaken: true,
    phial: 'power',
    sharpness: [8, 1, 10, 1],
    sharpnessUp: [8, 1, 10, 6],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 5200,
    upgradesFrom: {
      weaponId: [0],
      materials: [
        { itemId: 150, amount: 5 },
        { itemId: 99, amount: 15 },
        { itemId: 117, amount: 5 }
      ]
    },
    upgradesTo: [2, 7]
  },
  {
    id: 2,
    type: WeaponClass.SWITCH_AXE,
    name: 'Assault Axe',
    description:
      'A versatile hunting axe. In Sword mode, it pumps paralyzing agents into targets.',
    attack: 702,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 150,
    awaken: true,
    phial: 'paralysis',
    sharpness: [12, 2, 4, 2],
    sharpnessUp: [12, 2, 4, 7],
    affinity: -20,
    slots: 0,
    rarity: 2,
    price: 6430,
    upgradesFrom: {
      weaponId: [1],
      materials: [
        { itemId: 272, amount: 5 },
        { itemId: 274, amount: 3 },
        { itemId: 115, amount: 5 }
      ]
    },
    upgradesTo: [3]
  },
  {
    id: 3,
    type: WeaponClass.SWITCH_AXE,
    name: 'Assault Axe+',
    description:
      'A versatile hunting axe. In Sword mode, it pumps paralyzing agents into targets.',
    attack: 810,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 180,
    awaken: true,
    phial: 'paralysis',
    sharpness: [12, 3, 5, 5],
    sharpnessUp: [12, 3, 5, 10],
    affinity: -20,
    slots: 1,
    rarity: 2,
    price: 11500,
    upgradesFrom: {
      weaponId: [2],
      materials: [
        { itemId: 276, amount: 3 },
        { itemId: 273, amount: 2 },
        { itemId: 298, amount: 2 }
      ]
    },
    upgradesTo: [4, 6]
  },
  {
    id: 4,
    type: WeaponClass.SWITCH_AXE,
    name: 'Blitzkrieg (R)',
    description:
      'A versatile hunting axe. In Sword mode, it pumps paralyzing agents into targets.',
    attack: 918,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 200,
    awaken: true,
    phial: 'paralysis',
    sharpness: [12, 2, 4, 7],
    sharpnessUp: [12, 2, 4, 9, 3],
    affinity: -20,
    slots: 1,
    rarity: 3,
    price: 22200,
    upgradesFrom: {
      weaponId: [3],
      materials: [
        { itemId: 378, amount: 5 },
        { itemId: 381, amount: 1 },
        { itemId: 104, amount: 3 }
      ]
    },
    upgradesTo: [5]
  },
  {
    id: 5,
    type: WeaponClass.SWITCH_AXE,
    name: 'Bastion Blitz (P)',
    description:
      "A symbol of the brute wyvern's tenacity; no prey escapes domination.",
    attack: 1026,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 230,
    awaken: true,
    phial: 'paralysis',
    sharpness: [12, 3, 5, 10],
    sharpnessUp: [12, 3, 5, 11, 4],
    affinity: -25,
    slots: 2,
    rarity: 5,
    price: 33400,
    upgradesFrom: {
      weaponId: [4, 6],
      materials: [
        { itemId: 442, amount: 5 },
        { itemId: 443, amount: 5 },
        { itemId: 444, amount: 8 }
      ]
    }
  },
  {
    id: 6,
    type: WeaponClass.SWITCH_AXE,
    name: 'Blitzkrieg (B)',
    description:
      'A versatile hunting axe. In Sword mode, it pumps paralyzing agents into targets.',
    attack: 864,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 200,
    awaken: true,
    phial: 'paralysis',
    sharpness: [12, 2, 4, 7],
    sharpnessUp: [12, 2, 4, 9, 3],
    affinity: -20,
    slots: 2,
    rarity: 3,
    price: 22200,
    upgradesFrom: {
      weaponId: [3],
      materials: [
        { itemId: 378, amount: 5 },
        { itemId: 381, amount: 1 },
        { itemId: 102, amount: 5 }
      ]
    },
    upgradesTo: [5]
  },
  {
    id: 7,
    type: WeaponClass.SWITCH_AXE,
    name: 'Bolt Axe',
    description:
      "An axe that channels the Lagiacrus's power. With each slash, azure light blooms.",
    attack: 756,
    secondaryDamageType: 'thunder',
    secondaryAttack: 150,
    awaken: false,
    phial: 'element',
    sharpness: [7, 4, 11, 3],
    sharpnessUp: [7, 4, 11, 8],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 15600,
    create: [
      { itemId: 391, amount: 3 },
      { itemId: 392, amount: 3 },
      { itemId: 104, amount: 5 }
    ],
    upgradesFrom: {
      weaponId: [1],
      materials: [
        { itemId: 287, amount: 2 },
        { itemId: 285, amount: 4 },
        { itemId: 118, amount: 3 }
      ]
    },
    upgradesTo: [8, 10, 12]
  },
  {
    id: 8,
    type: WeaponClass.SWITCH_AXE,
    name: 'Volt Axe (R)',
    description:
      "An axe that channels the Lagiacrus's power. With each slash, azure light blooms.",
    attack: 864,
    secondaryDamageType: 'thunder',
    secondaryAttack: 210,
    awaken: false,
    phial: 'element',
    sharpness: [8, 1, 10, 6],
    sharpnessUp: [8, 1, 10, 10, 1],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 24100,
    upgradesFrom: {
      weaponId: [7],
      materials: [
        { itemId: 391, amount: 3 },
        { itemId: 284, amount: 7 },
        { itemId: 432, amount: 1 }
      ]
    },
    upgradesTo: [9]
  },
  {
    id: 9,
    type: WeaponClass.SWITCH_AXE,
    name: 'Megavolt Axe (P)',
    description:
      "An axe that channels the Lagiacrus's power. With each slash, azure light blooms.",
    attack: 918,
    secondaryDamageType: 'thunder',
    secondaryAttack: 290,
    awaken: false,
    phial: 'element',
    sharpness: [7, 4, 11, 10, 3],
    sharpnessUp: [7, 4, 11, 10, 7, 1],
    affinity: 0,
    slots: 2,
    rarity: 5,
    price: 49500,
    upgradesFrom: {
      weaponId: [8],
      materials: [
        { itemId: 286, amount: 6 },
        { itemId: 561, amount: 10 },
        { itemId: 270, amount: 4 }
      ]
    }
  },
  {
    id: 10,
    type: WeaponClass.SWITCH_AXE,
    name: 'Volt Axe (Y)',
    description:
      "An axe that channels the Lagiacrus's power. With each slash, azure light blooms.",
    attack: 810,
    secondaryDamageType: 'thunder',
    secondaryAttack: 210,
    awaken: false,
    phial: 'element',
    sharpness: [8, 1, 10, 6],
    sharpnessUp: [8, 1, 10, 10, 1],
    affinity: 15,
    slots: 1,
    rarity: 3,
    price: 24100,
    upgradesFrom: {
      weaponId: [7],
      materials: [
        { itemId: 288, amount: 1 },
        { itemId: 392, amount: 3 },
        { itemId: 259, amount: 3 }
      ]
    },
    upgradesTo: [11]
  },
  {
    id: 11,
    type: WeaponClass.SWITCH_AXE,
    name: 'Megavolt Axe (G)',
    description:
      "An axe that channels the Lagiacrus's power. With each slash, azure light blooms.",
    attack: 864,
    secondaryDamageType: 'thunder',
    secondaryAttack: 290,
    awaken: false,
    phial: 'element',
    sharpness: [7, 4, 11, 10, 3],
    sharpnessUp: [7, 4, 11, 10, 7, 1],
    affinity: 15,
    slots: 2,
    rarity: 5,
    price: 49500,
    upgradesFrom: {
      weaponId: [10],
      materials: [
        { itemId: 286, amount: 6 },
        { itemId: 561, amount: 10 },
        { itemId: 422, amount: 4 }
      ]
    }
  },
  {
    id: 12,
    type: WeaponClass.SWITCH_AXE,
    name: 'High Bolt Axe',
    description:
      'An axe mantled in lightning. A weapon worthy of the Lord of the Seas.',
    attack: 864,
    secondaryDamageType: 'thunder',
    secondaryAttack: 250,
    awaken: false,
    phial: 'power',
    sharpness: [7, 4, 11, 8],
    sharpnessUp: [7, 4, 11, 10, 3],
    affinity: 0,
    slots: 0,
    rarity: 4,
    price: 34600,
    upgradesFrom: {
      weaponId: [7],
      materials: [
        { itemId: 391, amount: 5 },
        { itemId: 287, amount: 3 },
        { itemId: 561, amount: 5 }
      ]
    },
    upgradesTo: [13, 14]
  },
  {
    id: 13,
    type: WeaponClass.SWITCH_AXE,
    name: 'Thunderstrike (P)',
    description:
      'An axe mantled in lightning. A weapon worthy of the Lord of the Seas.',
    attack: 972,
    secondaryDamageType: 'thunder',
    secondaryAttack: 310,
    awaken: false,
    phial: 'power',
    sharpness: [13, 3, 4, 11, 4],
    sharpnessUp: [13, 3, 4, 11, 7, 2],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 51500,
    upgradesFrom: {
      weaponId: [12],
      materials: [
        { itemId: 468, amount: 3 },
        { itemId: 467, amount: 5 },
        { itemId: 469, amount: 2 }
      ]
    }
  },
  {
    id: 14,
    type: WeaponClass.SWITCH_AXE,
    name: 'Thunderstrike (G)',
    description:
      'An axe mantled in lightning. A weapon worthy of the Lord of the Seas.',
    attack: 918,
    secondaryDamageType: 'thunder',
    secondaryAttack: 310,
    awaken: false,
    phial: 'power',
    sharpness: [13, 3, 4, 11, 4],
    sharpnessUp: [13, 3, 4, 11, 7, 2],
    affinity: 15,
    slots: 1,
    rarity: 6,
    price: 51500,
    upgradesFrom: {
      weaponId: [12],
      materials: [
        { itemId: 468, amount: 3 },
        { itemId: 467, amount: 5 },
        { itemId: 288, amount: 5 }
      ]
    }
  },
  {
    id: 15,
    type: WeaponClass.SWITCH_AXE,
    name: 'Fire Tempest',
    description:
      'A Switch Axe made with the flaming beak of the magma-dwelling Agnaktor.',
    attack: 864,
    secondaryDamageType: 'fire',
    secondaryAttack: 220,
    awaken: false,
    phial: 'power',
    sharpness: [8, 2, 5, 15],
    sharpnessUp: [8, 2, 5, 15, 5],
    affinity: 10,
    slots: 1,
    rarity: 5,
    price: 41700,
    create: [
      { itemId: 475, amount: 3 },
      { itemId: 387, amount: 3 },
      { itemId: 470, amount: 3 }
    ],
    upgradesTo: [16]
  },
  {
    id: 16,
    type: WeaponClass.SWITCH_AXE,
    name: 'Flame Tempest',
    description:
      'A scarlet axe that houses an Agnaktor soul. Reduces prey to ash in a stroke.',
    attack: 918,
    secondaryDamageType: 'fire',
    secondaryAttack: 330,
    awaken: false,
    phial: 'power',
    sharpness: [8, 2, 5, 15, 5],
    sharpnessUp: [8, 2, 5, 15, 10],
    affinity: 20,
    slots: 1,
    rarity: 6,
    price: 52000,
    upgradesFrom: {
      weaponId: [15],
      materials: [
        { itemId: 474, amount: 5 },
        { itemId: 473, amount: 4 },
        { itemId: 447, amount: 1 }
      ]
    }
  },
  {
    id: 17,
    type: WeaponClass.SWITCH_AXE,
    name: 'Amber Slash',
    description:
      'A lovely hunting axe made from the tri-color Barioth. Cold enough to freeze blood.',
    attack: 810,
    secondaryDamageType: 'ice',
    secondaryAttack: 230,
    awaken: false,
    phial: 'element',
    sharpness: [4, 1, 18, 2],
    sharpnessUp: [4, 1, 18, 7],
    affinity: 0,
    slots: 0,
    rarity: 4,
    price: 30100,
    create: [
      { itemId: 101, amount: 5 },
      { itemId: 374, amount: 3 },
      { itemId: 376, amount: 3 }
    ],
    upgradesTo: [18]
  },
  {
    id: 18,
    type: WeaponClass.SWITCH_AXE,
    name: 'Amber Slash+',
    description:
      'A lovely hunting axe made from the tri-color Barioth. Cold enough to freeze blood.',
    attack: 864,
    secondaryDamageType: 'ice',
    secondaryAttack: 290,
    awaken: false,
    phial: 'element',
    sharpness: [18, 2, 6, 4],
    sharpnessUp: [18, 2, 6, 4, 5],
    affinity: 30,
    slots: 0,
    rarity: 5,
    price: 43800,
    upgradesFrom: {
      weaponId: [17],
      materials: [
        { itemId: 419, amount: 4 },
        { itemId: 394, amount: 5 },
        { itemId: 377, amount: 3 }
      ]
    },
    upgradesTo: [19]
  },
  {
    id: 19,
    type: WeaponClass.SWITCH_AXE,
    name: 'Amber Hoarfrost',
    description:
      'An axe born in the permafrost that summons the north winds and heralds death.',
    attack: 918,
    secondaryDamageType: 'ice',
    secondaryAttack: 330,
    awaken: false,
    phial: 'element',
    sharpness: [18, 2, 6, 4, 5],
    sharpnessUp: [18, 2, 6, 4, 5, 5],
    affinity: 40,
    slots: 0,
    rarity: 6,
    price: 61200,
    upgradesFrom: {
      weaponId: [18],
      materials: [
        { itemId: 420, amount: 5 },
        { itemId: 417, amount: 5 },
        { itemId: 170, amount: 3 }
      ]
    }
  },
  {
    id: 20,
    type: WeaponClass.SWITCH_AXE,
    name: 'Inceadeus',
    description:
      'A legendary Switch Axe carved from a Ceadeus horn. It glows white from within.',
    attack: 810,
    secondaryDamageType: 'water',
    secondaryAttack: 190,
    awaken: false,
    phial: 'power',
    sharpness: [12, 2, 4, 7],
    sharpnessUp: [12, 2, 4, 9, 3],
    affinity: 0,
    slots: 0,
    rarity: 3,
    price: 25500,
    create: [
      { itemId: 431, amount: 2 },
      { itemId: 427, amount: 2 },
      { itemId: 429, amount: 2 }
    ],
    upgradesTo: [21]
  },
  {
    id: 21,
    type: WeaponClass.SWITCH_AXE,
    name: 'Inceadeus+',
    description:
      'A legendary Switch Axe carved from a Ceadeus horn. It glows white from within.',
    attack: 918,
    secondaryDamageType: 'water',
    secondaryAttack: 240,
    awaken: false,
    phial: 'power',
    sharpness: [8, 1, 10, 10, 1],
    sharpnessUp: [8, 1, 10, 10, 6],
    affinity: 0,
    slots: 0,
    rarity: 5,
    price: 46900,
    upgradesFrom: {
      weaponId: [20],
      materials: [
        { itemId: 428, amount: 3 },
        { itemId: 430, amount: 1 },
        { itemId: 466, amount: 5 }
      ]
    },
    upgradesTo: [22]
  },
  {
    id: 22,
    type: WeaponClass.SWITCH_AXE,
    name: 'Great Inceadeus',
    description:
      "Ceadeus's rage in weapon form. It can part the sea and rattle the earth.",
    attack: 1026,
    secondaryDamageType: 'water',
    secondaryAttack: 280,
    awaken: false,
    phial: 'power',
    sharpness: [13, 3, 4, 11, 4],
    sharpnessUp: [13, 3, 4, 11, 7, 2],
    affinity: 0,
    slots: 0,
    rarity: 6,
    price: 68530,
    upgradesFrom: {
      weaponId: [21],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 431, amount: 3 },
        { itemId: 469, amount: 2 }
      ]
    }
  },
  {
    id: 23,
    type: WeaponClass.SWITCH_AXE,
    name: 'Demonbind',
    description:
      'A bulky hunting axe of Eastern design. sharpness enough to cleave wyvern scales.',
    attack: 864,
    secondaryDamageType: 'water',
    secondaryAttack: 250,
    awaken: false,
    phial: 'element',
    defense: 8,
    sharpness: [8, 2, 5, 15],
    sharpnessUp: [8, 2, 5, 15, 5],
    affinity: 5,
    slots: 0,
    rarity: 4,
    price: 36900,
    create: [
      { itemId: 103, amount: 8 },
      { itemId: 436, amount: 3 },
      { itemId: 433, amount: 6 }
    ],
    upgradesTo: [24, 25]
  },
  {
    id: 24,
    type: WeaponClass.SWITCH_AXE,
    name: 'Great Demonbind (P)',
    description:
      'A mighty weapon for proven warriors. Modeled after an axe used by an Eastern king.',
    attack: 1026,
    secondaryDamageType: 'water',
    secondaryAttack: 300,
    awaken: false,
    phial: 'element',
    defense: 16,
    sharpness: [12, 2, 4, 9, 8],
    sharpnessUp: [12, 2, 4, 9, 10, 3],
    affinity: 15,
    slots: 1,
    rarity: 6,
    price: 53900,
    upgradesFrom: {
      weaponId: [23],
      materials: [
        { itemId: 441, amount: 3 },
        { itemId: 440, amount: 2 },
        { itemId: 424, amount: 2 }
      ]
    }
  },
  {
    id: 25,
    type: WeaponClass.SWITCH_AXE,
    name: 'Great Demonbind (G)',
    description:
      'A mighty weapon for proven warriors. Modeled after an axe used by an Eastern king.',
    attack: 972,
    secondaryDamageType: 'water',
    secondaryAttack: 300,
    awaken: false,
    phial: 'element',
    defense: 16,
    sharpness: [12, 2, 4, 9, 8],
    sharpnessUp: [12, 2, 4, 9, 10, 3],
    affinity: 30,
    slots: 1,
    rarity: 6,
    price: 53900,
    upgradesFrom: {
      weaponId: [23],
      materials: [
        { itemId: 441, amount: 3 },
        { itemId: 437, amount: 2 },
        { itemId: 424, amount: 2 }
      ]
    }
  },
  {
    id: 26,
    type: WeaponClass.SWITCH_AXE,
    name: 'Rough Edge',
    description:
      'An axe made from ore mined in polar climes. Upgradeable in more ways than one.',
    attack: 702,
    secondaryDamageType: 'dragon',
    secondaryAttack: 150,
    awaken: true,
    phial: 'dragon',
    sharpness: [12, 2, 4, 2],
    sharpnessUp: [12, 2, 4, 7],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 9800,
    create: [
      { itemId: 106, amount: 2 },
      { itemId: 102, amount: 8 },
      { itemId: 146, amount: 1 }
    ],
    upgradesTo: [27, 29, 31]
  },
  {
    id: 27,
    type: WeaponClass.SWITCH_AXE,
    name: 'Tough Break (R)',
    description:
      'A stone axe made of ancient ore, and an embodiment of the unyielding human spirit.',
    attack: 810,
    secondaryDamageType: 'dragon',
    secondaryAttack: 220,
    awaken: true,
    phial: 'dragon',
    sharpness: [12, 3, 5, 5],
    sharpnessUp: [12, 3, 5, 10],
    affinity: 0,
    slots: 2,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [26],
      materials: [
        { itemId: 104, amount: 5 },
        { itemId: 100, amount: 10 },
        { itemId: 269, amount: 4 }
      ]
    },
    upgradesTo: [28]
  },
  {
    id: 28,
    type: WeaponClass.SWITCH_AXE,
    name: 'Soulbreaker (P)',
    description:
      'A weapon of stone housing an ancient soul. Eons have whetted it to a fine point.',
    attack: 1026,
    secondaryDamageType: 'dragon',
    secondaryAttack: 280,
    awaken: true,
    phial: 'dragon',
    sharpness: [8, 1, 10, 10, 6],
    sharpnessUp: [8, 1, 10, 10, 10, 1],
    affinity: 0,
    slots: 3,
    rarity: 6,
    price: 43500,
    upgradesFrom: {
      weaponId: [27, 29],
      materials: [
        { itemId: 103, amount: 10 },
        { itemId: 101, amount: 10 },
        { itemId: 169, amount: 4 }
      ]
    }
  },
  {
    id: 29,
    type: WeaponClass.SWITCH_AXE,
    name: 'Tough Break (B)',
    description:
      'A stone axe made of ancient ore, and an embodiment of the unyielding human spirit.',
    attack: 756,
    secondaryDamageType: 'dragon',
    secondaryAttack: 220,
    awaken: true,
    phial: 'dragon',
    sharpness: [12, 3, 5, 5],
    sharpnessUp: [12, 3, 5, 10],
    affinity: 0,
    slots: 3,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [26],
      materials: [
        { itemId: 104, amount: 5 },
        { itemId: 100, amount: 10 },
        { itemId: 297, amount: 4 }
      ]
    },
    upgradesTo: [28, 30]
  },
  {
    id: 30,
    type: WeaponClass.SWITCH_AXE,
    name: 'Soulbreaker (G)',
    description:
      'A weapon of stone housing an ancient soul. Eons have whetted it to a fine point.',
    attack: 972,
    secondaryDamageType: 'dragon',
    secondaryAttack: 280,
    awaken: true,
    phial: 'dragon',
    sharpness: [8, 1, 10, 10, 6],
    sharpnessUp: [8, 1, 10, 10, 10, 1],
    affinity: 15,
    slots: 3,
    rarity: 6,
    price: 43500,
    upgradesFrom: {
      weaponId: [29, 31],
      materials: [
        { itemId: 103, amount: 10 },
        { itemId: 148, amount: 7 },
        { itemId: 169, amount: 3 }
      ]
    }
  },
  {
    id: 31,
    type: WeaponClass.SWITCH_AXE,
    name: 'Tough Break (Y)',
    description:
      'A stone axe made of ancient ore, and an embodiment of the unyielding human spirit.',
    attack: 756,
    secondaryDamageType: 'dragon',
    secondaryAttack: 220,
    awaken: true,
    phial: 'dragon',
    sharpness: [12, 3, 5, 5],
    sharpnessUp: [12, 3, 5, 10],
    affinity: 15,
    slots: 2,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [26],
      materials: [
        { itemId: 104, amount: 5 },
        { itemId: 100, amount: 10 },
        { itemId: 248, amount: 4 }
      ]
    },
    upgradesTo: [30]
  },
  {
    id: 32,
    type: WeaponClass.SWITCH_AXE,
    name: 'Dark Switch Axe',
    description:
      'A dreadful Switch Axe shaped after an Alatreon horn, dark as the primordial dawn.',
    attack: 918,
    secondaryDamageType: 'dragon',
    secondaryAttack: 300,
    awaken: false,
    phial: 'element',
    sharpness: [18, 2, 6, 4, 5],
    sharpnessUp: [18, 2, 6, 4, 5, 5],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 77777,
    create: [
      { itemId: 403, amount: 4 },
      { itemId: 476, amount: 4 },
      { itemId: 432, amount: 3 }
    ],
    upgradesTo: [33]
  },
  {
    id: 33,
    type: WeaponClass.SWITCH_AXE,
    name: 'Black Harvest',
    description:
      "A weapon for reaping souls, it heralds mankind's fall and the rise of the dragons.",
    attack: 972,
    secondaryDamageType: 'dragon',
    secondaryAttack: 360,
    awaken: false,
    phial: 'element',
    sharpness: [18, 2, 6, 4, 5, 5],
    sharpnessUp: [18, 2, 6, 4, 5, 5, 5],
    affinity: 0,
    slots: 1,
    rarity: 7,
    price: 100000,
    upgradesFrom: {
      weaponId: [32],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 405, amount: 3 },
        { itemId: 404, amount: 1 }
      ]
    }
  },
  {
    id: 34,
    type: WeaponClass.SWITCH_AXE,
    name: 'Sinister Saints',
    description:
      'Swaying between light and darkness, this troubled blade can work good or evil.',
    attack: 864,
    secondaryDamageType: 'fire',
    secondaryAttack: 500,
    awaken: true,
    phial: 'power',
    sharpness: [2, 3, 18, 8, 4],
    sharpnessUp: [2, 3, 18, 8, 7, 2],
    affinity: 0,
    slots: 3,
    rarity: 6,
    price: 50000,
    create: [
      { itemId: 524, amount: 5 },
      { itemId: 103, amount: 10 },
      { itemId: 169, amount: 4 }
    ]
  }
]);
