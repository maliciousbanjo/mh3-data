import { WeaponDamageProperties, WeaponClass } from '../types';
import { SwordAndShield, SwordAndShieldAttack } from './types';

export const SwordAndShieldDamageProperties = Object.freeze<
  WeaponDamageProperties<WeaponClass.SWORD_AND_SHIELD, SwordAndShieldAttack>
>({
  type: WeaponClass.SWORD_AND_SHIELD,
  classModifier: 1.4,
  attackGroups: [
    {
      name: 'land',
      attacks: [
        { name: 'Unsheathe Attack', hits: [{ type: 'cut', power: 0.16 }] },
        { name: 'Jumping Slash', hits: [{ type: 'cut', power: 0.16 }] },
        { name: 'Rising Slash', hits: [{ type: 'cut', power: 0.14 }] },
        {
          name: 'Regular Combo',
          hits: [
            { type: 'cut', power: 0.13 },
            { type: 'cut', power: 0.11 },
            { type: 'impact', power: 0.08, ko: 15 },
            { type: 'cut', power: 0.12 }
          ]
        },
        {
          name: 'Horizontal Combo',
          hits: [
            { type: 'cut', power: 0.2 },
            { type: 'cut', power: 0.15 }
          ]
        },
        {
          name: 'Shield Combo',
          hits: [
            { type: 'impact', power: 0.08, ko: 15 },
            { type: 'impact', power: 0.12, ko: 15 }
          ]
        },
        { name: 'Revolving Slice', hits: [{ type: 'cut', power: 0.24 }] },
        { name: 'Guard Slice', hits: [{ type: 'cut', power: 0.14 }] }
      ]
    },
    {
      name: 'water',
      attacks: [
        { name: 'Unsheathe Attack', hits: [{ type: 'cut', power: 0.18 }] },
        { name: 'Forward Slash', hits: [{ type: 'cut', power: 0.18 }] },
        { name: 'Normal Slash', hits: [{ type: 'cut', power: 0.13 }] },
        { name: 'Upward Slash', hits: [{ type: 'cut', power: 0.11 }] },
        { name: 'Uppercut Slash', hits: [{ type: 'cut', power: 0.2 }] },
        { name: 'Horizontal Slash', hits: [{ type: 'cut', power: 0.2 }] },
        {
          name: 'Shield Bash',
          hits: [{ type: 'impact', power: 0.08, ko: 27 }]
        },
        { name: 'Rising Slice', hits: [{ type: 'cut', power: 0.22 }] },
        { name: 'Revolving Slice', hits: [{ type: 'cut', power: 0.24 }] },
        { name: 'Guard Slice', hits: [{ type: 'cut', power: 0.14 }] }
      ]
    }
  ]
});

/**
 * List of all available {@link SwordAndShield}s
 */
export const SwordAndShields = Object.freeze<SwordAndShield[]>([
  {
    id: 0,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: "Hunter's Knife",
    description:
      'A one-handed, easy-to-wield Sword. Not too powerful; combo attacks are its forte.',
    attack: 84,
    secondaryDamageType: 'ice',
    secondaryAttack: 50,
    awaken: true,
    sharpness: [7, 5, 3],
    sharpnessUp: [7, 5, 8],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 480,
    create: [{ itemId: 97, amount: 3 }],
    upgradesTo: [1]
  },
  {
    id: 1,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: "Hunter's Knife+",
    description:
      'A one-handed, easy-to-wield Sword. Not too powerful; combo attacks are its forte.',
    attack: 98,
    secondaryDamageType: 'ice',
    secondaryAttack: 80,
    awaken: true,
    sharpness: [5, 3, 7],
    sharpnessUp: [5, 3, 12],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 1560,
    upgradesFrom: { weaponId: [0], materials: [{ itemId: 97, amount: 2 }] },
    upgradesTo: [2, 10]
  },
  {
    id: 2,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: "Hunter's Dagger",
    description:
      'An iron Sword with a curved, durable blade. It can be upgraded further as well.',
    attack: 112,
    secondaryDamageType: 'ice',
    secondaryAttack: 120,
    awaken: true,
    sharpness: [5, 3, 12],
    sharpnessUp: [5, 3, 13, 4],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 3150,
    upgradesFrom: {
      weaponId: [1],
      materials: [
        { itemId: 98, amount: 3 },
        { itemId: 97, amount: 5 }
      ]
    },
    upgradesTo: [3]
  },
  {
    id: 3,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: "Assassin's Dagger",
    description:
      'An iron Sword with a curved, durable blade. It can be upgraded further as well.',
    attack: 154,
    secondaryDamageType: 'ice',
    secondaryAttack: 150,
    awaken: true,
    sharpness: [13, 1, 4, 2],
    sharpnessUp: [13, 1, 4, 7],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 6270,
    create: [
      { itemId: 100, amount: 3 },
      { itemId: 99, amount: 6 },
      { itemId: 98, amount: 8 }
    ],
    upgradesFrom: {
      weaponId: [2],
      materials: [
        { itemId: 102, amount: 5 },
        { itemId: 99, amount: 5 },
        { itemId: 97, amount: 10 }
      ]
    },
    upgradesTo: [4, 7]
  },
  {
    id: 4,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Shadow Saber',
    description:
      "A royal knight's weapon, adapted for hunting. Handle the poison blade with care.",
    attack: 182,
    secondaryDamageType: 'poison',
    secondaryAttack: 190,
    awaken: false,
    sharpness: [4, 6, 9, 6],
    sharpnessUp: [4, 6, 9, 10, 1],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 9700,
    upgradesFrom: {
      weaponId: [3],
      materials: [
        { itemId: 266, amount: 3 },
        { itemId: 264, amount: 5 },
        { itemId: 110, amount: 4 }
      ]
    },
    upgradesTo: [5]
  },
  {
    id: 5,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Shadow Saber+',
    description:
      "A royal knight's weapon, adapted for hunting. Handle the poison blade with care.",
    attack: 196,
    secondaryDamageType: 'poison',
    secondaryAttack: 270,
    awaken: false,
    sharpness: [5, 3, 13, 9],
    sharpnessUp: [5, 3, 13, 12, 2],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 15780,
    upgradesFrom: {
      weaponId: [4],
      materials: [
        { itemId: 266, amount: 5 },
        { itemId: 265, amount: 3 },
        { itemId: 118, amount: 5 }
      ]
    },
    upgradesTo: [6]
  },
  {
    id: 6,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Toxic Fang',
    description:
      'A brutal Sword infused with poison. It causes rot and decay on contact.',
    attack: 252,
    secondaryDamageType: 'poison',
    secondaryAttack: 390,
    awaken: false,
    sharpness: [7, 5, 10, 10, 3],
    sharpnessUp: [7, 5, 10, 10, 6, 2],
    affinity: 0,
    slots: 1,
    rarity: 5,
    price: 31400,
    upgradesFrom: {
      weaponId: [5],
      materials: [
        { itemId: 175, amount: 4 },
        { itemId: 174, amount: 4 },
        { itemId: 168, amount: 3 }
      ]
    }
  },
  {
    id: 7,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Icicle Spike',
    description:
      'A Sword of extreme cold. The blade can pierce shells to freeze prey from the inside.',
    attack: 168,
    secondaryDamageType: 'ice',
    secondaryAttack: 220,
    awaken: false,
    sharpness: [7, 5, 10, 3],
    sharpnessUp: [7, 5, 10, 8],
    affinity: 20,
    slots: 1,
    rarity: 2,
    price: 11990,
    upgradesFrom: {
      weaponId: [3],
      materials: [
        { itemId: 376, amount: 1 },
        { itemId: 372, amount: 3 },
        { itemId: 105, amount: 10 }
      ]
    },
    upgradesTo: [8]
  },
  {
    id: 8,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Icicle Spike+',
    description:
      'A Sword of extreme cold. The blade can pierce shells to freeze prey from the inside.',
    attack: 182,
    secondaryDamageType: 'ice',
    secondaryAttack: 330,
    awaken: false,
    sharpness: [2, 5, 17, 6],
    sharpnessUp: [2, 5, 17, 6, 5],
    affinity: 30,
    slots: 1,
    rarity: 3,
    price: 17700,
    upgradesFrom: {
      weaponId: [7],
      materials: [
        { itemId: 376, amount: 3 },
        { itemId: 375, amount: 2 },
        { itemId: 377, amount: 3 }
      ]
    },
    upgradesTo: [9]
  },
  {
    id: 9,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Nardebosche',
    description:
      'A Sword of Barioth material that can freeze flames, earth, water and even air.',
    attack: 238,
    secondaryDamageType: 'ice',
    secondaryAttack: 420,
    awaken: false,
    sharpness: [2, 5, 17, 6, 5],
    sharpnessUp: [2, 5, 17, 6, 6, 4],
    affinity: 40,
    slots: 1,
    rarity: 6,
    price: 38670,
    upgradesFrom: {
      weaponId: [8],
      materials: [
        { itemId: 420, amount: 4 },
        { itemId: 417, amount: 5 },
        { itemId: 170, amount: 3 }
      ]
    }
  },
  {
    id: 10,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: "Soldier's Dagger",
    description:
      'A light Sword crafted from Jaggi materials. Easy to use and widely available.',
    attack: 126,
    secondaryDamageType: 'poison',
    secondaryAttack: 100,
    awaken: true,
    sharpness: [4, 6, 5],
    sharpnessUp: [4, 6, 9, 1],
    affinity: 0,
    slots: 1,
    rarity: 1,
    price: 2030,
    upgradesFrom: {
      weaponId: [1],
      materials: [
        { itemId: 278, amount: 3 },
        { itemId: 279, amount: 3 },
        { itemId: 98, amount: 5 }
      ]
    },
    upgradesTo: [11]
  },
  {
    id: 11,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: "Commander's Dagger",
    description:
      'A light Sword crafted from Jaggi materials. Easy to use and widely available.',
    attack: 154,
    secondaryDamageType: 'poison',
    secondaryAttack: 130,
    awaken: true,
    sharpness: [4, 6, 9, 1],
    sharpnessUp: [4, 6, 9, 6],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 4530,
    upgradesFrom: {
      weaponId: [10],
      materials: [
        { itemId: 280, amount: 2 },
        { itemId: 281, amount: 3 },
        { itemId: 99, amount: 5 }
      ]
    },
    upgradesTo: [12, 16]
  },
  {
    id: 12,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Hydra Knife',
    description:
      'A very easy-to-use Sword made from Great Jaggi skin. It really grows on you.',
    attack: 168,
    secondaryDamageType: 'poison',
    secondaryAttack: 150,
    awaken: true,
    sharpness: [7, 5, 10, 3],
    sharpnessUp: [7, 5, 10, 8],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 5730,
    upgradesFrom: {
      weaponId: [11],
      materials: [
        { itemId: 388, amount: 3 },
        { itemId: 272, amount: 2 },
        { itemId: 102, amount: 5 }
      ]
    },
    upgradesTo: [13, 14]
  },
  {
    id: 13,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Deadly Knife',
    description:
      'A very easy-to-use Sword made from Great Jaggi skin. It really grows on you.',
    attack: 224,
    secondaryDamageType: 'poison',
    secondaryAttack: 230,
    awaken: true,
    sharpness: [10, 9, 6, 4],
    sharpnessUp: [10, 9, 6, 4, 5, 1],
    affinity: 0,
    slots: 2,
    rarity: 3,
    price: 12980,
    upgradesFrom: {
      weaponId: [12],
      materials: [
        { itemId: 521, amount: 3 },
        { itemId: 268, amount: 2 },
        { itemId: 100, amount: 10 }
      ]
    }
  },
  {
    id: 14,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Hypnos Knife',
    description:
      'Clever hunters prefer this Sword, which uses sedatives extracted from a Baggi.',
    attack: 196,
    secondaryDamageType: 'sleep',
    secondaryAttack: 190,
    awaken: false,
    sharpness: [4, 6, 9, 6],
    sharpnessUp: [4, 6, 9, 10, 1],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 10500,
    upgradesFrom: {
      weaponId: [12],
      materials: [
        { itemId: 507, amount: 4 },
        { itemId: 516, amount: 3 },
        { itemId: 110, amount: 5 }
      ]
    },
    upgradesTo: [15]
  },
  {
    id: 15,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Morpheus Knife',
    description:
      "This Sword's prey succumbs to a quiet slumber, followed by a violent awakening.",
    attack: 266,
    secondaryDamageType: 'sleep',
    secondaryAttack: 240,
    awaken: false,
    sharpness: [4, 6, 9, 10, 1],
    sharpnessUp: [4, 6, 9, 10, 6],
    affinity: 0,
    slots: 2,
    rarity: 5,
    price: 29600,
    upgradesFrom: {
      weaponId: [14],
      materials: [
        { itemId: 520, amount: 5 },
        { itemId: 517, amount: 3 },
        { itemId: 522, amount: 5 }
      ]
    }
  },
  {
    id: 16,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Azi Dahaka',
    description:
      "A Sword made from Gobul's tail barbs. Contains a strong nerve toxin.",
    attack: 182,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 160,
    awaken: false,
    sharpness: [5, 3, 13, 4],
    sharpnessUp: [5, 3, 13, 9],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 8800,
    upgradesFrom: {
      weaponId: [11],
      materials: [
        { itemId: 296, amount: 2 },
        { itemId: 297, amount: 3 },
        { itemId: 102, amount: 10 }
      ]
    },
    upgradesTo: [17]
  },
  {
    id: 17,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Azi Dahaka+',
    description:
      "A Sword made from Gobul's tail barbs. Contains a strong nerve toxin.",
    attack: 196,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 180,
    awaken: false,
    sharpness: [7, 5, 10, 8],
    sharpnessUp: [7, 5, 10, 10, 3],
    affinity: 0,
    slots: 0,
    rarity: 3,
    price: 16300,
    upgradesFrom: {
      weaponId: [16],
      materials: [
        { itemId: 298, amount: 3 },
        { itemId: 299, amount: 3 },
        { itemId: 421, amount: 1 }
      ]
    },
    upgradesTo: [18]
  },
  {
    id: 18,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Almighty Dahaka (P)',
    description:
      "A paralytic Sword. Once monsters see the crest on this blade, it's too late.",
    attack: 224,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 210,
    awaken: false,
    sharpness: [5, 3, 13, 12, 2],
    sharpnessUp: [5, 3, 13, 12, 6, 1],
    affinity: 0,
    slots: 1,
    rarity: 5,
    price: 32400,
    upgradesFrom: {
      weaponId: [17],
      materials: [
        { itemId: 461, amount: 7 },
        { itemId: 464, amount: 4 },
        { itemId: 390, amount: 5 }
      ]
    }
  },
  {
    id: 19,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Bone Kris',
    description:
      'A simple and dependable bone dagger. The shield can also be used for attacking.',
    attack: 112,
    secondaryDamageType: 'poison',
    secondaryAttack: 50,
    awaken: true,
    sharpness: [10, 5],
    sharpnessUp: [10, 9, 1],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 430,
    create: [{ itemId: 149, amount: 3 }],
    upgradesTo: [20]
  },
  {
    id: 20,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Bone Kris+',
    description:
      'A simple and dependable bone dagger. The shield can also be used for attacking.',
    attack: 140,
    secondaryDamageType: 'poison',
    secondaryAttack: 80,
    awaken: true,
    sharpness: [10, 9, 1],
    sharpnessUp: [10, 9, 6],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 1310,
    upgradesFrom: { weaponId: [19], materials: [{ itemId: 149, amount: 2 }] },
    upgradesTo: [21, 32]
  },
  {
    id: 21,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: "Ludroth's Nail",
    description:
      'A Sword made using Ludroth skin. It begs for further upgrades.',
    attack: 154,
    secondaryDamageType: 'water',
    secondaryAttack: 100,
    awaken: true,
    sharpness: [7, 5, 8],
    sharpnessUp: [7, 5, 10, 3],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 3300,
    create: [
      { itemId: 294, amount: 3 },
      { itemId: 295, amount: 4 },
      { itemId: 280, amount: 1 }
    ],
    upgradesFrom: {
      weaponId: [20],
      materials: [
        { itemId: 295, amount: 2 },
        { itemId: 294, amount: 2 },
        { itemId: 277, amount: 3 }
      ]
    },
    upgradesTo: [22, 25, 30]
  },
  {
    id: 22,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Royal Claw',
    description:
      'A Sword made from Ludroth materials. Its sprays of water mesmerize monsters.',
    attack: 168,
    secondaryDamageType: 'water',
    secondaryAttack: 120,
    awaken: false,
    sharpness: [13, 1, 4, 2],
    sharpnessUp: [13, 1, 4, 7],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 6820,
    upgradesFrom: {
      weaponId: [21],
      materials: [
        { itemId: 289, amount: 3 },
        { itemId: 291, amount: 2 },
        { itemId: 292, amount: 1 }
      ]
    },
    upgradesTo: [23]
  },
  {
    id: 23,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Royal Claw+',
    description:
      'A Sword made from Ludroth materials. Its sprays of water mesmerize monsters.',
    attack: 196,
    secondaryDamageType: 'water',
    secondaryAttack: 210,
    awaken: false,
    sharpness: [5, 3, 13, 4],
    sharpnessUp: [5, 3, 13, 9],
    affinity: 0,
    slots: 0,
    rarity: 3,
    price: 11450,
    upgradesFrom: {
      weaponId: [22],
      materials: [
        { itemId: 456, amount: 3 },
        { itemId: 290, amount: 8 },
        { itemId: 299, amount: 2 }
      ]
    },
    upgradesTo: [24]
  },
  {
    id: 24,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Royal Ludroth Claw',
    description:
      'A Sword covered in an aqueous membrane. Uses water to cut down monsters.',
    attack: 238,
    secondaryDamageType: 'water',
    secondaryAttack: 350,
    awaken: false,
    sharpness: [7, 5, 10, 10, 3],
    sharpnessUp: [7, 5, 10, 10, 6, 2],
    affinity: 0,
    slots: 0,
    rarity: 5,
    price: 30550,
    upgradesFrom: {
      weaponId: [23],
      materials: [
        { itemId: 457, amount: 5 },
        { itemId: 459, amount: 3 },
        { itemId: 460, amount: 2 }
      ]
    }
  },
  {
    id: 25,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Carapace Mace',
    description:
      "A grim, cudgel-like Sword made from a Barroth's shell. It can shatter bone.",
    attack: 210,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 50,
    awaken: true,
    sharpness: [13, 1, 4, 7],
    sharpnessUp: [13, 1, 4, 12],
    affinity: -30,
    slots: 1,
    rarity: 2,
    price: 9540,
    upgradesFrom: {
      weaponId: [21],
      materials: [
        { itemId: 272, amount: 5 },
        { itemId: 274, amount: 3 },
        { itemId: 106, amount: 2 }
      ]
    },
    upgradesTo: [26]
  },
  {
    id: 26,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Carapace Mace+',
    description:
      "A grim, cudgel-like Sword made from a Barroth's shell. It can shatter bone.",
    attack: 238,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 100,
    awaken: true,
    sharpness: [13, 1, 4, 12],
    sharpnessUp: [13, 1, 4, 14, 2],
    affinity: -30,
    slots: 1,
    rarity: 3,
    price: 16300,
    upgradesFrom: {
      weaponId: [25],
      materials: [
        { itemId: 276, amount: 3 },
        { itemId: 273, amount: 5 },
        { itemId: 104, amount: 3 }
      ]
    },
    upgradesTo: [27, 28]
  },
  {
    id: 27,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Barroth Club',
    description:
      'A monster carapace further condensed to produce a sharpness and destructive edge.',
    attack: 294,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 150,
    awaken: true,
    sharpness: [13, 1, 4, 14, 2],
    sharpnessUp: [13, 1, 4, 14, 7],
    affinity: -40,
    slots: 2,
    rarity: 5,
    price: 30100,
    upgradesFrom: {
      weaponId: [26],
      materials: [
        { itemId: 443, amount: 4 },
        { itemId: 444, amount: 4 },
        { itemId: 169, amount: 3 }
      ]
    }
  },
  {
    id: 28,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Gigas Club',
    description:
      'A blunt weapon whose heavy blows hit harder than most Swords.',
    attack: 322,
    secondaryDamageType: 'fire',
    secondaryAttack: 210,
    awaken: true,
    defense: 16,
    sharpness: [5, 3, 12],
    sharpnessUp: [5, 3, 13, 4],
    affinity: 0,
    slots: 0,
    rarity: 4,
    price: 25470,
    upgradesFrom: {
      weaponId: [26],
      materials: [
        { itemId: 101, amount: 8 },
        { itemId: 379, amount: 3 },
        { itemId: 380, amount: 2 }
      ]
    },
    upgradesTo: [29]
  },
  {
    id: 29,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Gigas Crusher',
    description: 'A blunt weapn whose heavy blows hit harder than most Swords.',
    attack: 336,
    secondaryDamageType: 'fire',
    secondaryAttack: 280,
    awaken: true,
    defense: 24,
    sharpness: [10, 9, 6],
    sharpnessUp: [10, 9, 6, 4, 1],
    affinity: 0,
    slots: 0,
    rarity: 6,
    price: 37400,
    upgradesFrom: {
      weaponId: [28],
      materials: [
        { itemId: 448, amount: 5 },
        { itemId: 471, amount: 5 },
        { itemId: 447, amount: 1 }
      ]
    }
  },
  {
    id: 30,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Blood Tabar',
    description:
      'A double-edged axe with a sharpness, poisoned blade. Extremely lethal.',
    attack: 252,
    secondaryDamageType: 'poison',
    secondaryAttack: 180,
    awaken: false,
    sharpness: [3, 1, 4, 7],
    sharpnessUp: [3, 1, 4, 12],
    affinity: 0,
    slots: 2,
    rarity: 4,
    price: 27900,
    upgradesFrom: {
      weaponId: [21],
      materials: [
        { itemId: 264, amount: 5 },
        { itemId: 167, amount: 3 },
        { itemId: 166, amount: 2 }
      ]
    },
    upgradesTo: [31]
  },
  {
    id: 31,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Plague Tabar',
    description:
      'A double-edged axe with a sharpness, poisoned blade. Extremely lethal.',
    attack: 280,
    secondaryDamageType: 'poison',
    secondaryAttack: 240,
    awaken: false,
    sharpness: [3, 1, 4, 12],
    sharpnessUp: [3, 1, 4, 15, 2],
    affinity: 0,
    slots: 2,
    rarity: 6,
    price: 33100,
    upgradesFrom: {
      weaponId: [30],
      materials: [
        { itemId: 173, amount: 5 },
        { itemId: 176, amount: 4 },
        { itemId: 514, amount: 10 }
      ]
    }
  },
  {
    id: 32,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Bone Tomahawk',
    description:
      'A handaxe made from Qurupeco materials, modeled after an axe used by Western hunters.',
    attack: 192,
    secondaryDamageType: 'fire',
    secondaryAttack: 120,
    awaken: true,
    sharpness: [15, 2, 6, 2],
    sharpnessUp: [15, 2, 6, 7],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 5210,
    create: [
      { itemId: 263, amount: 1 },
      { itemId: 150, amount: 4 },
      { itemId: 262, amount: 3 }
    ],
    upgradesFrom: {
      weaponId: [20],
      materials: [
        { itemId: 150, amount: 3 },
        { itemId: 261, amount: 2 },
        { itemId: 116, amount: 3 }
      ]
    },
    upgradesTo: [33, 36]
  },
  {
    id: 33,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Qurupeco Chopper',
    description:
      'A handaxe made from Qurupeco materials, modeled after an axe used by Western hunters.',
    attack: 182,
    secondaryDamageType: 'fire',
    secondaryAttack: 220,
    awaken: false,
    sharpness: [7, 5, 10, 3],
    sharpnessUp: [7, 5, 10, 8],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 9910,
    upgradesFrom: {
      weaponId: [32],
      materials: [
        { itemId: 393, amount: 3 },
        { itemId: 262, amount: 2 },
        { itemId: 18, amount: 1 }
      ]
    },
    upgradesTo: [34]
  },
  {
    id: 34,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Djinn',
    description:
      'A Sword with a red-hot blade wrapped in the scorching flames of a wyvern.',
    attack: 196,
    secondaryDamageType: 'fire',
    secondaryAttack: 330,
    awaken: false,
    sharpness: [7, 5, 10, 8],
    sharpnessUp: [7, 5, 10, 10, 3],
    affinity: 0,
    slots: 0,
    rarity: 3,
    price: 17240,
    upgradesFrom: {
      weaponId: [33],
      materials: [
        { itemId: 255, amount: 5 },
        { itemId: 252, amount: 3 },
        { itemId: 257, amount: 7 }
      ]
    },
    upgradesTo: [35]
  },
  {
    id: 35,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Blazing Falchion',
    description:
      'A stronger form of the Djinn, made from incendiary materials. As hot as magma.',
    attack: 238,
    secondaryDamageType: 'fire',
    secondaryAttack: 440,
    awaken: false,
    sharpness: [7, 5, 10, 10, 3],
    sharpnessUp: [7, 5, 10, 10, 6, 2],
    affinity: 0,
    slots: 0,
    rarity: 6,
    price: 38500,
    upgradesFrom: {
      weaponId: [34],
      materials: [
        { itemId: 164, amount: 5 },
        { itemId: 158, amount: 2 },
        { itemId: 161, amount: 1 }
      ]
    }
  },
  {
    id: 36,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Lagia Sword',
    description:
      'A Thunder Sword. Through its blade flows lightning to multiply the pain.',
    attack: 182,
    secondaryDamageType: 'thunder',
    secondaryAttack: 220,
    awaken: false,
    sharpness: [5, 3, 13, 4],
    sharpnessUp: [5, 3, 13, 9],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 12430,
    upgradesFrom: {
      weaponId: [32],
      materials: [
        { itemId: 392, amount: 2 },
        { itemId: 284, amount: 5 },
        { itemId: 106, amount: 3 }
      ]
    },
    upgradesTo: [37, 39, 41]
  },
  {
    id: 37,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Storm Sword (R)',
    description:
      'A Thunder Sword. Through its blade flows lightning to multiply the pain.',
    attack: 210,
    secondaryDamageType: 'thunder',
    secondaryAttack: 270,
    awaken: false,
    sharpness: [5, 3, 13, 12, 2],
    sharpnessUp: [5, 3, 13, 12, 6, 1],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 18000,
    upgradesFrom: {
      weaponId: [36],
      materials: [
        { itemId: 391, amount: 2 },
        { itemId: 285, amount: 5 },
        { itemId: 432, amount: 1 }
      ]
    },
    upgradesTo: [38]
  },
  {
    id: 38,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Maelstrom Sword (P)',
    description:
      'A Thunder Sword. Through its blade flows lightning to multiply the pain.',
    attack: 252,
    secondaryDamageType: 'thunder',
    secondaryAttack: 330,
    awaken: false,
    sharpness: [5, 3, 13, 4],
    sharpnessUp: [5, 3, 13, 9],
    affinity: 0,
    slots: 2,
    rarity: 5,
    price: 39000,
    upgradesFrom: {
      weaponId: [37],
      materials: [
        { itemId: 465, amount: 5 },
        { itemId: 561, amount: 10 },
        { itemId: 468, amount: 3 }
      ]
    }
  },
  {
    id: 39,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Storm Sword (Y)',
    description:
      'A Thunder Sword. Through its blade flows lightning to multiply the pain.',
    attack: 196,
    secondaryDamageType: 'thunder',
    secondaryAttack: 270,
    awaken: false,
    sharpness: [5, 3, 13, 12, 2],
    sharpnessUp: [5, 3, 13, 12, 6, 1],
    affinity: 15,
    slots: 1,
    rarity: 3,
    price: 18000,
    upgradesFrom: {
      weaponId: [36],
      materials: [
        { itemId: 288, amount: 1 },
        { itemId: 287, amount: 3 },
        { itemId: 379, amount: 2 }
      ]
    },
    upgradesTo: [40]
  },
  {
    id: 40,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Maelstrom Sword (G)',
    description:
      'A Thunder Sword. Through its blade flows lightning to multiply the pain.',
    attack: 238,
    secondaryDamageType: 'thunder',
    secondaryAttack: 330,
    awaken: false,
    sharpness: [5, 3, 13, 4],
    sharpnessUp: [5, 3, 13, 9],
    affinity: 15,
    slots: 2,
    rarity: 5,
    price: 39000,
    upgradesFrom: {
      weaponId: [39],
      materials: [
        { itemId: 465, amount: 5 },
        { itemId: 561, amount: 10 },
        { itemId: 286, amount: 3 }
      ]
    }
  },
  {
    id: 41,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'High Lagia Sword',
    description:
      'An azure Sword charged with Lightning; its bearer becomes a raging maelstrom.',
    attack: 238,
    secondaryDamageType: 'thunder',
    secondaryAttack: 310,
    awaken: false,
    sharpness: [4, 6, 9, 10, 1],
    sharpnessUp: [4, 6, 9, 10, 6],
    affinity: 0,
    slots: 0,
    rarity: 4,
    price: 31560,
    upgradesFrom: {
      weaponId: [36],
      materials: [
        { itemId: 288, amount: 2 },
        { itemId: 391, amount: 3 },
        { itemId: 169, amount: 2 }
      ]
    },
    upgradesTo: [42]
  },
  {
    id: 42,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Takemikazuchi (G)',
    description:
      'An azure Sword charged with Lightning; its bearer becomes a raging maelstrom.',
    attack: 252,
    secondaryDamageType: 'thunder',
    secondaryAttack: 350,
    awaken: false,
    sharpness: [4, 6, 9, 10, 6],
    sharpnessUp: [4, 6, 9, 10, 8, 3],
    affinity: 15,
    slots: 1,
    rarity: 6,
    price: 42000,
    upgradesFrom: {
      weaponId: [41],
      materials: [
        { itemId: 466, amount: 5 },
        { itemId: 467, amount: 3 },
        { itemId: 469, amount: 1 }
      ]
    }
  },
  {
    id: 43,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Tusk Gear',
    description:
      'A Sword made from ore mined in polar climes. Upgradeable in more ways than one.',
    attack: 182,
    secondaryDamageType: 'ice',
    secondaryAttack: 110,
    awaken: true,
    sharpness: [13, 1, 4, 2],
    sharpnessUp: [13, 1, 4, 7],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 9800,
    create: [
      { itemId: 106, amount: 2 },
      { itemId: 102, amount: 11 },
      { itemId: 146, amount: 1 }
    ],
    upgradesTo: [44, 46, 48]
  },
  {
    id: 44,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Fossil Gear (R)',
    description:
      "A Sword and shield that, when united, resemble a wyvern's head.",
    attack: 210,
    secondaryDamageType: 'ice',
    secondaryAttack: 210,
    awaken: true,
    sharpness: [4, 6, 9, 6],
    sharpnessUp: [4, 6, 9, 10, 1],
    affinity: 0,
    slots: 2,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [43],
      materials: [
        { itemId: 118, amount: 5 },
        { itemId: 100, amount: 5 },
        { itemId: 470, amount: 2 }
      ]
    },
    upgradesTo: [45]
  },
  {
    id: 45,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: "Skull's Wrath (P)",
    description:
      'A Sword of ancient memories. The wyvern bares its teeth, sharpnessened over centuries.',
    attack: 280,
    secondaryDamageType: 'ice',
    secondaryAttack: 290,
    awaken: true,
    sharpness: [4, 6, 9, 10, 6],
    sharpnessUp: [4, 6, 9, 10, 8, 3],
    affinity: 0,
    slots: 3,
    rarity: 6,
    price: 43500,
    upgradesFrom: {
      weaponId: [44, 46],
      materials: [
        { itemId: 103, amount: 10 },
        { itemId: 101, amount: 10 },
        { itemId: 169, amount: 2 }
      ]
    }
  },
  {
    id: 46,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Fossil Gear (B)',
    description:
      "A Sword and shield that, when united, resemble a wyvern's head.",
    attack: 196,
    secondaryDamageType: 'ice',
    secondaryAttack: 210,
    awaken: true,
    sharpness: [4, 6, 9, 6],
    sharpnessUp: [4, 6, 9, 10, 1],
    affinity: 0,
    slots: 3,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [43],
      materials: [
        { itemId: 118, amount: 5 },
        { itemId: 100, amount: 5 },
        { itemId: 280, amount: 5 }
      ]
    },
    upgradesTo: [45, 47]
  },
  {
    id: 47,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: "Skull's Wrath (G)",
    description:
      'A Sword of ancient memories. The wyvern bares its teeth, sharpnessened over centuries.',
    attack: 266,
    secondaryDamageType: 'ice',
    secondaryAttack: 290,
    awaken: true,
    sharpness: [4, 6, 9, 10, 6],
    sharpnessUp: [4, 6, 9, 10, 8, 3],
    affinity: 15,
    slots: 3,
    rarity: 6,
    price: 43500,
    upgradesFrom: {
      weaponId: [46, 48],
      materials: [
        { itemId: 103, amount: 10 },
        { itemId: 148, amount: 5 },
        { itemId: 169, amount: 1 }
      ]
    }
  },
  {
    id: 48,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Fossil Gear (Y)',
    description:
      "A Sword and shield that, when united, resemble a wyvern's head.",
    attack: 196,
    secondaryDamageType: 'ice',
    secondaryAttack: 210,
    awaken: true,
    sharpness: [4, 6, 9, 6],
    sharpnessUp: [4, 6, 9, 10, 1],
    affinity: 15,
    slots: 2,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [43],
      materials: [
        { itemId: 118, amount: 5 },
        { itemId: 100, amount: 5 },
        { itemId: 167, amount: 3 }
      ]
    },
    upgradesTo: [47]
  },
  {
    id: 49,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Sea Striker',
    description:
      'A Sword made from Ceadeus horns. They say only a hero can wield it...',
    attack: 210,
    secondaryDamageType: 'water',
    secondaryAttack: 270,
    awaken: false,
    sharpness: [15, 2, 6, 7],
    sharpnessUp: [15, 2, 6, 11, 1],
    affinity: 5,
    slots: 1,
    rarity: 3,
    price: 22900,
    create: [
      { itemId: 431, amount: 2 },
      { itemId: 425, amount: 5 },
      { itemId: 429, amount: 1 }
    ],
    upgradesTo: [50]
  },
  {
    id: 50,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Abyssal Striker',
    description:
      "A symbol of the Ceadeus's pride. It can fell 10,000 monsters in a single blow.",
    attack: 252,
    secondaryDamageType: 'water',
    secondaryAttack: 340,
    awaken: false,
    sharpness: [15, 2, 6, 11, 1],
    sharpnessUp: [15, 2, 6, 11, 5, 1],
    affinity: 10,
    slots: 2,
    rarity: 6,
    price: 39500,
    upgradesFrom: {
      weaponId: [49],
      materials: [
        { itemId: 431, amount: 4 },
        { itemId: 430, amount: 1 },
        { itemId: 469, amount: 2 }
      ]
    }
  },
  {
    id: 51,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Jhen Kodachi',
    description:
      'An Eastern Sword used to cut down enemies, armor and all. Marvelously sharpness.',
    attack: 210,
    secondaryDamageType: 'dragon',
    secondaryAttack: 150,
    awaken: false,
    sharpness: [1, 2, 3, 19],
    sharpnessUp: [1, 2, 3, 24],
    affinity: 10,
    slots: 1,
    rarity: 3,
    price: 24700,
    create: [
      { itemId: 435, amount: 8 },
      { itemId: 436, amount: 2 },
      { itemId: 434, amount: 2 }
    ],
    upgradesTo: [52, 53]
  },
  {
    id: 52,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Calm Sands (P)',
    description:
      'A Sword spoken of in legend. A god of war was said to use it to slay countless foes.',
    attack: 280,
    secondaryDamageType: 'dragon',
    secondaryAttack: 150,
    awaken: false,
    sharpness: [1, 2, 3, 25, 4],
    sharpnessUp: [1, 2, 3, 25, 8, 1],
    affinity: 10,
    slots: 2,
    rarity: 6,
    price: 45400,
    upgradesFrom: {
      weaponId: [51],
      materials: [
        { itemId: 440, amount: 3 },
        { itemId: 441, amount: 3 },
        { itemId: 454, amount: 2 }
      ]
    }
  },
  {
    id: 53,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Calm Sands (G)',
    description:
      'A Sword spoken of in legend. A god of war was said to use it to slay countless foes.',
    attack: 266,
    secondaryDamageType: 'dragon',
    secondaryAttack: 150,
    awaken: false,
    sharpness: [1, 2, 3, 25, 4],
    sharpnessUp: [1, 2, 3, 25, 8, 1],
    affinity: 25,
    slots: 2,
    rarity: 6,
    price: 45400,
    upgradesFrom: {
      weaponId: [51],
      materials: [
        { itemId: 440, amount: 3 },
        { itemId: 441, amount: 3 },
        { itemId: 452, amount: 3 }
      ]
    }
  },
  {
    id: 54,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Alatreon Sword',
    description:
      'An Alatreon horn Sword. They say its holder can hear a mysterious voice...',
    attack: 238,
    secondaryDamageType: 'dragon',
    secondaryAttack: 250,
    awaken: false,
    sharpness: [10, 9, 6, 4, 5, 1],
    sharpnessUp: [10, 9, 6, 4, 5, 6],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 77777,
    create: [
      { itemId: 401, amount: 5 },
      { itemId: 478, amount: 2 },
      { itemId: 432, amount: 3 }
    ],
    upgradesTo: [55]
  },
  {
    id: 55,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Alatreon Star',
    description:
      'A bewitching Sword whose holder is lured into darkness by a ghostly voice.',
    attack: 252,
    secondaryDamageType: 'dragon',
    secondaryAttack: 370,
    awaken: false,
    sharpness: [10, 9, 6, 4, 5, 6],
    sharpnessUp: [10, 9, 6, 4, 5, 6, 5],
    affinity: 0,
    slots: 1,
    rarity: 7,
    price: 100000,
    upgradesFrom: {
      weaponId: [54],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 478, amount: 3 },
        { itemId: 404, amount: 1 }
      ]
    }
  },
  {
    id: 56,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: "Warrior's Sword",
    description:
      'A traditional-looking Sword whose abilities put it far ahead of the pack.',
    attack: 210,
    secondaryDamageType: 'water',
    secondaryAttack: 300,
    awaken: true,
    sharpness: [4, 6, 9, 10, 1],
    sharpnessUp: [4, 6, 9, 10, 6],
    affinity: 0,
    slots: 2,
    rarity: 3,
    price: 30000,
    create: [
      { itemId: 581, amount: 3 },
      { itemId: 575, amount: 6 },
      { itemId: 118, amount: 5 }
    ],
    upgradesTo: [57]
  },
  {
    id: 57,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Odyssey',
    description:
      'A Sword with Water crafted into it. Given to a brave adventurer for great acts.',
    attack: 252,
    secondaryDamageType: 'water',
    secondaryAttack: 350,
    awaken: true,
    sharpness: [4, 6, 9, 10, 6],
    sharpnessUp: [4, 6, 9, 10, 8, 3],
    affinity: 0,
    slots: 3,
    rarity: 5,
    price: 50000,
    upgradesFrom: {
      weaponId: [56],
      materials: [
        { itemId: 553, amount: 3 },
        { itemId: 554, amount: 5 },
        { itemId: 169, amount: 3 }
      ]
    }
  },
  {
    id: 58,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Chak Chak',
    description:
      'A weapon used by foreign hunters. Notable for its strange shape and colors.',
    attack: 224,
    secondaryDamageType: 'thunder',
    secondaryAttack: 130,
    awaken: true,
    sharpness: [13, 1, 4, 7],
    sharpnessUp: [13, 1, 4, 12],
    affinity: 5,
    slots: 0,
    rarity: 3,
    price: 19800,
    create: [
      { itemId: 582, amount: 1 },
      { itemId: 102, amount: 6 },
      { itemId: 106, amount: 3 },
      { itemId: 233, amount: 6 }
    ],
    upgradesTo: [59]
  },
  {
    id: 59,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Chak Chak+',
    description:
      'A weapon used by foreign hunters. Notable for its strange shape and colors.',
    attack: 238,
    secondaryDamageType: 'thunder',
    secondaryAttack: 170,
    awaken: true,
    sharpness: [7, 5, 10, 8],
    sharpnessUp: [7, 5, 10, 10, 3],
    affinity: 10,
    slots: 1,
    rarity: 3,
    price: 23500,
    upgradesFrom: {
      weaponId: [58],
      materials: [
        { itemId: 302, amount: 3 },
        { itemId: 421, amount: 1 },
        { itemId: 104, amount: 5 }
      ]
    },
    upgradesTo: [60]
  },
  {
    id: 60,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Wagga Wagga',
    description:
      'A rare foreign weapon that, when paired with a shield, can work as a Sword.',
    attack: 294,
    secondaryDamageType: 'thunder',
    secondaryAttack: 200,
    awaken: true,
    sharpness: [7, 5, 10, 10, 3],
    sharpnessUp: [7, 5, 10, 10, 6, 2],
    affinity: 15,
    slots: 1,
    rarity: 6,
    price: 42900,
    upgradesFrom: {
      weaponId: [59],
      materials: [
        { itemId: 469, amount: 1 },
        { itemId: 451, amount: 3 },
        { itemId: 514, amount: 9 }
      ]
    }
  },
  {
    id: 61,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Rusted Sword',
    description:
      'A Sword with unrealized potential. It could perhaps be polished...',
    attack: 98,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [15],
    sharpnessUp: [15, 2, 3],
    affinity: -70,
    slots: 0,
    rarity: 1,
    price: 0,
    create: [{ itemId: 108, amount: 1 }],
    upgradesTo: [62]
  },
  {
    id: 62,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Tarnished Sword',
    description:
      'A Sword with unrealized potential. It could perhaps be polished...',
    attack: 98,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [13, 1, 1],
    sharpnessUp: [13, 1, 4, 2],
    affinity: -70,
    slots: 0,
    rarity: 1,
    price: 5000,
    upgradesFrom: {
      weaponId: [61],
      materials: [
        { itemId: 98, amount: 22 },
        { itemId: 314, amount: 5 },
        { itemId: 531, amount: 2 }
      ]
    },
    upgradesTo: [63]
  },
  {
    id: 63,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Eternal Strife',
    description:
      'The ultimate dragon slayer, this Sword was hammered by blacksmiths for 108 days.',
    attack: 126,
    secondaryDamageType: 'dragon',
    secondaryAttack: 410,
    awaken: false,
    sharpness: [13, 1, 4, 12],
    sharpnessUp: [13, 1, 4, 15, 2],
    affinity: 0,
    slots: 0,
    rarity: 3,
    price: 22222,
    upgradesFrom: {
      weaponId: [62],
      materials: [
        { itemId: 98, amount: 44 },
        { itemId: 377, amount: 2 },
        { itemId: 252, amount: 2 }
      ]
    },
    upgradesTo: [64]
  },
  {
    id: 64,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Eternal Hate',
    description:
      'The ultimate dragon slayer, this Sword was hammered by blacksmiths for 108 days.',
    attack: 140,
    secondaryDamageType: 'dragon',
    secondaryAttack: 660,
    awaken: false,
    sharpness: [13, 1, 4, 15, 2],
    sharpnessUp: [13, 1, 4, 15, 7],
    affinity: 0,
    slots: 0,
    rarity: 6,
    price: 44444,
    upgradesFrom: {
      weaponId: [63],
      materials: [
        { itemId: 98, amount: 66 },
        { itemId: 432, amount: 5 },
        { itemId: 161, amount: 1 }
      ]
    }
  },
  {
    id: 65,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Worn Sword',
    description:
      'A Sword with unrealized potential. It could perhaps be restored.',
    attack: 70,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [15],
    sharpnessUp: [15, 2, 3],
    affinity: -70,
    slots: 0,
    rarity: 4,
    price: 0,
    create: [{ itemId: 109, amount: 1 }],
    upgradesTo: [66]
  },
  {
    id: 66,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Weathered Sword',
    description:
      'A Sword with unrealized potential. It could perhaps be restored.',
    attack: 70,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [10, 5],
    sharpnessUp: [10, 9, 1],
    affinity: -70,
    slots: 0,
    rarity: 4,
    price: 5000,
    upgradesFrom: {
      weaponId: [65],
      materials: [
        { itemId: 98, amount: 33 },
        { itemId: 514, amount: 5 },
        { itemId: 531, amount: 2 }
      ]
    },
    upgradesTo: [67]
  },
  {
    id: 67,
    type: WeaponClass.SWORD_AND_SHIELD,
    name: 'Divine Exodus',
    description:
      "A strange Sword. They say the polished shield shows one's future self.",
    attack: 84,
    secondaryDamageType: 'dragon',
    secondaryAttack: 720,
    awaken: false,
    sharpness: [2, 5, 17, 6, 5],
    sharpnessUp: [2, 5, 17, 6, 6, 4],
    affinity: 0,
    slots: 0,
    rarity: 6,
    price: 55555,
    upgradesFrom: {
      weaponId: [66],
      materials: [
        { itemId: 98, amount: 77 },
        { itemId: 148, amount: 5 },
        { itemId: 453, amount: 1 }
      ]
    }
  }
]);
