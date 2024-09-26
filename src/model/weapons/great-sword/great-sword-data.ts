import { WeaponDamageProperties, WeaponClass } from '../types';
import { GreatSword, GreatSwordAttack } from './types';

export const GreatSwordDamageProperties = Object.freeze<
  WeaponDamageProperties<WeaponClass.GREAT_SWORD, GreatSwordAttack>
>({
  type: WeaponClass.GREAT_SWORD,
  classModifier: 4.8,
  attackGroups: [
    {
      name: 'default',
      attacks: [
        {
          name: 'Unsheathe Attack',
          hits: [{ type: 'cut', power: 0.48 }]
        },
        {
          name: 'Regular Slice',
          hits: [{ type: 'cut', power: 0.48 }]
        },
        {
          name: 'Sideways Slash',
          hits: [{ type: 'cut', power: 0.36 }]
        },
        {
          name: 'Upswing',
          hits: [{ type: 'cut', power: 0.46 }]
        },
        {
          name: 'L1 Charge',
          hits: [{ type: 'cut', power: 0.65 }]
        },
        {
          name: 'L2 Charge',
          hits: [{ type: 'cut', power: 0.8 }]
        },
        {
          name: 'L3 Charge',
          hits: [{ type: 'cut', power: 1.1 }]
        },
        {
          name: 'Overcharge',
          hits: [{ type: 'cut', power: 0.8 }]
        },
        {
          name: 'Slap',
          hits: [{ type: 'impact', power: 0.18, ko: 27 }]
        },
        {
          name: 'Overhead Smash',
          hits: [{ type: 'cut', power: 0.52 }]
        },
        {
          name: 'L1 Smash Charge',
          hits: [{ type: 'cut', power: 0.72 }]
        },
        {
          name: 'L2 Smash Charge',
          hits: [{ type: 'cut', power: 0.9 }]
        },
        {
          name: 'L3 Smash Charge',
          hits: [{ type: 'cut', power: 1.15 }]
        },
        {
          name: 'Smash Overcharge',
          hits: [{ type: 'cut', power: 0.9 }]
        }
      ]
    }
  ]
});

/**
 * List of all available {@link GreatSword}s
 */
export const GreatSwords = Object.freeze<GreatSword[]>([
  {
    id: 0,
    type: WeaponClass.GREAT_SWORD,
    name: 'Iron Sword',
    description:
      'A weapon that even novice hunters can use. Charge up for a more powerful slash.',
    attack: 288,
    secondaryDamageType: 'ice',
    secondaryAttack: 50,
    awaken: true,
    sharpness: [7, 3, 5],
    sharpnessUp: [7, 3, 10],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 500,
    create: [{ itemId: 97, amount: 3 }],
    upgradesTo: [1]
  },
  {
    id: 1,
    type: WeaponClass.GREAT_SWORD,
    name: 'Iron Sword+',
    description:
      'A weapon that even novice hunters can use. Charge up for a more powerful slash.',
    attack: 336,
    secondaryDamageType: 'ice',
    secondaryAttack: 80,
    awaken: true,
    sharpness: [5, 3, 7],
    sharpnessUp: [5, 3, 9, 3],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 1950,
    upgradesFrom: { weaponId: [0], materials: [{ itemId: 97, amount: 5 }] },
    upgradesTo: [2, 11]
  },
  {
    id: 2,
    type: WeaponClass.GREAT_SWORD,
    name: 'Buster Sword',
    description:
      'A strong blade made from high-purity steel, good for confronting huge monsters.',
    attack: 384,
    secondaryDamageType: 'ice',
    secondaryAttack: 100,
    awaken: true,
    sharpness: [7, 3, 10],
    sharpnessUp: [7, 3, 12, 3],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 3030,
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
    type: WeaponClass.GREAT_SWORD,
    name: 'Buster Sword+',
    description:
      'A strong blade made from high-purity steel, good for confronting huge monsters.',
    attack: 528,
    secondaryDamageType: 'ice',
    secondaryAttack: 120,
    awaken: true,
    sharpness: [5, 3, 9, 3],
    sharpnessUp: [5, 3, 9, 8],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 7870,
    upgradesFrom: {
      weaponId: [2],
      materials: [
        { itemId: 102, amount: 3 },
        { itemId: 99, amount: 5 },
        { itemId: 97, amount: 15 }
      ]
    },
    upgradesTo: [4]
  },
  {
    id: 4,
    type: WeaponClass.GREAT_SWORD,
    name: 'Buster Blade',
    description:
      'The final iteration of the Buster Sword. Essential for fighting large monsters.',
    attack: 624,
    secondaryDamageType: 'ice',
    secondaryAttack: 150,
    awaken: true,
    sharpness: [13, 1, 8, 3],
    sharpnessUp: [13, 1, 8, 8],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 10450,
    upgradesFrom: {
      weaponId: [3],
      materials: [
        { itemId: 110, amount: 6 },
        { itemId: 102, amount: 5 },
        { itemId: 98, amount: 15 }
      ]
    },
    upgradesTo: [5]
  },
  {
    id: 5,
    type: WeaponClass.GREAT_SWORD,
    name: 'Ravager Blade',
    description:
      'A sharpness steel blade. Its giant spikes give it a fearsome appearance.',
    attack: 720,
    secondaryDamageType: 'ice',
    secondaryAttack: 200,
    awaken: true,
    defense: 12,
    sharpness: [7, 3, 12, 8],
    sharpnessUp: [7, 3, 12, 10, 3],
    affinity: 5,
    slots: 1,
    rarity: 3,
    price: 20170,
    upgradesFrom: {
      weaponId: [4],
      materials: [
        { itemId: 100, amount: 10 },
        { itemId: 99, amount: 20 },
        { itemId: 394, amount: 1 }
      ]
    },
    upgradesTo: [6]
  },
  {
    id: 6,
    type: WeaponClass.GREAT_SWORD,
    name: 'Ravager Blade+',
    description:
      'A sharpness steel blade. Its giant spikes give it a fearsome appearance.',
    attack: 816,
    secondaryDamageType: 'ice',
    secondaryAttack: 220,
    awaken: true,
    defense: 16,
    sharpness: [13, 1, 8, 8],
    sharpnessUp: [13, 1, 8, 11, 2],
    affinity: 5,
    slots: 1,
    rarity: 4,
    price: 29470,
    upgradesFrom: {
      weaponId: [5],
      materials: [
        { itemId: 101, amount: 10 },
        { itemId: 100, amount: 15 },
        { itemId: 102, amount: 10 }
      ]
    },
    upgradesTo: [7, 9]
  },
  {
    id: 7,
    type: WeaponClass.GREAT_SWORD,
    name: 'Lacerator Blade',
    description:
      'A sharpness steel blade. It is capable of peerless blows due to its multi-ore alloy.',
    attack: 864,
    secondaryDamageType: 'ice',
    secondaryAttack: 260,
    awaken: true,
    defense: 18,
    sharpness: [17, 2, 8, 7, 1],
    sharpnessUp: [17, 2, 8, 7, 6],
    affinity: 5,
    slots: 2,
    rarity: 4,
    price: 34100,
    upgradesFrom: {
      weaponId: [6],
      materials: [
        { itemId: 103, amount: 10 },
        { itemId: 101, amount: 15 },
        { itemId: 443, amount: 3 }
      ]
    },
    upgradesTo: [8]
  },
  {
    id: 8,
    type: WeaponClass.GREAT_SWORD,
    name: 'Mutilator Blade',
    description:
      'The best blade of its class. Its slashes are as deadly as those of a dragon.',
    attack: 912,
    secondaryDamageType: 'ice',
    secondaryAttack: 300,
    awaken: true,
    defense: 20,
    sharpness: [13, 1, 8, 11, 2],
    sharpnessUp: [13, 1, 8, 11, 6, 1],
    affinity: 10,
    slots: 2,
    rarity: 5,
    price: 49000,
    upgradesFrom: {
      weaponId: [7],
      materials: [
        { itemId: 111, amount: 5 },
        { itemId: 101, amount: 20 },
        { itemId: 420, amount: 2 }
      ]
    }
  },
  {
    id: 9,
    type: WeaponClass.GREAT_SWORD,
    name: 'Brazenwall',
    description:
      'A shining gold blade. Its super-hard edge makes it versatile but hard to wield.',
    attack: 1008,
    secondaryDamageType: 'fire',
    secondaryAttack: 200,
    awaken: true,
    defense: 30,
    sharpness: [9, 4, 11, 1],
    sharpnessUp: [9, 4, 11, 6],
    affinity: 0,
    slots: 0,
    rarity: 4,
    price: 35200,
    upgradesFrom: {
      weaponId: [6],
      materials: [
        { itemId: 101, amount: 10 },
        { itemId: 379, amount: 5 },
        { itemId: 378, amount: 10 }
      ]
    },
    upgradesTo: [10]
  },
  {
    id: 10,
    type: WeaponClass.GREAT_SWORD,
    name: 'Crimsonwall',
    description:
      'A shining gold blade. Its super-hard edge makes it versatile but hard to wield.',
    attack: 1104,
    secondaryDamageType: 'fire',
    secondaryAttack: 250,
    awaken: true,
    defense: 40,
    sharpness: [7, 3, 12, 3],
    sharpnessUp: [7, 3, 12, 8],
    affinity: 0,
    slots: 0,
    rarity: 6,
    price: 54100,
    upgradesFrom: {
      weaponId: [9],
      materials: [
        { itemId: 448, amount: 8 },
        { itemId: 447, amount: 2 },
        { itemId: 475, amount: 5 }
      ]
    }
  },
  {
    id: 11,
    type: WeaponClass.GREAT_SWORD,
    name: 'Rugged Great Sword',
    description:
      'A blade made from colorful Jaggi hides. A common weapon among local hunters.',
    attack: 480,
    secondaryDamageType: 'sleep',
    secondaryAttack: 110,
    awaken: true,
    sharpness: [7, 3, 12, 3],
    sharpnessUp: [7, 3, 12, 8],
    affinity: 0,
    slots: 1,
    rarity: 1,
    price: 4210,
    create: [
      { itemId: 280, amount: 6 },
      { itemId: 281, amount: 3 },
      { itemId: 99, amount: 6 }
    ],
    upgradesFrom: {
      weaponId: [1],
      materials: [
        { itemId: 280, amount: 4 },
        { itemId: 278, amount: 8 },
        { itemId: 99, amount: 3 }
      ]
    },
    upgradesTo: [12, 21]
  },
  {
    id: 12,
    type: WeaponClass.GREAT_SWORD,
    name: "Chieftain's Grt Swd",
    description:
      'A blade made from colorful Jaggi hides. A common weapon among local hunters.',
    attack: 624,
    secondaryDamageType: 'sleep',
    secondaryAttack: 170,
    awaken: true,
    sharpness: [9, 4, 11, 6],
    sharpnessUp: [9, 4, 11, 7, 4],
    affinity: 0,
    slots: 2,
    rarity: 2,
    price: 10240,
    upgradesFrom: {
      weaponId: [11],
      materials: [
        { itemId: 507, amount: 4 },
        { itemId: 281, amount: 5 },
        { itemId: 110, amount: 2 }
      ]
    },
    upgradesTo: [13, 14]
  },
  {
    id: 13,
    type: WeaponClass.GREAT_SWORD,
    name: "High Chief's Grt Swd",
    description:
      'A memento of a courageous foray into a well-guarded Jaggi nest.',
    attack: 864,
    secondaryDamageType: 'sleep',
    secondaryAttack: 220,
    awaken: true,
    sharpness: [15, 3, 3, 9],
    sharpnessUp: [15, 3, 3, 9, 5],
    affinity: 0,
    slots: 3,
    rarity: 4,
    price: 35400,
    upgradesFrom: {
      weaponId: [12],
      materials: [
        { itemId: 532, amount: 10 },
        { itemId: 505, amount: 10 },
        { itemId: 522, amount: 5 }
      ]
    }
  },
  {
    id: 14,
    type: WeaponClass.GREAT_SWORD,
    name: 'Lagiacrus Blade',
    description:
      'An electric blade made using Lagiacrus materials. Danger: high voltage!',
    attack: 672,
    secondaryDamageType: 'thunder',
    secondaryAttack: 180,
    awaken: false,
    sharpness: [15, 3, 3, 4],
    sharpnessUp: [15, 3, 3, 9],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 17200,
    upgradesFrom: {
      weaponId: [12],
      materials: [
        { itemId: 287, amount: 2 },
        { itemId: 285, amount: 2 },
        { itemId: 284, amount: 4 }
      ]
    },
    upgradesTo: [15, 17, 19]
  },
  {
    id: 15,
    type: WeaponClass.GREAT_SWORD,
    name: 'Lagia Lightning (R)',
    description:
      'An electric blade made using Lagiacrus materials. Danger: high voltage!',
    attack: 768,
    secondaryDamageType: 'thunder',
    secondaryAttack: 230,
    awaken: false,
    sharpness: [13, 1, 8, 8],
    sharpnessUp: [13, 1, 8, 11, 2],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 23300,
    upgradesFrom: {
      weaponId: [14],
      materials: [
        { itemId: 391, amount: 3 },
        { itemId: 285, amount: 8 },
        { itemId: 429, amount: 1 }
      ]
    },
    upgradesTo: [16]
  },
  {
    id: 16,
    type: WeaponClass.GREAT_SWORD,
    name: 'Lagia Bluebolt (P)',
    description:
      'An electric blade made using Lagiacrus materials. Danger: high voltage!',
    attack: 864,
    secondaryDamageType: 'thunder',
    secondaryAttack: 330,
    awaken: false,
    sharpness: [13, 1, 8, 11, 2],
    sharpnessUp: [13, 1, 8, 11, 6, 1],
    affinity: 0,
    slots: 2,
    rarity: 5,
    price: 51100,
    upgradesFrom: {
      weaponId: [15],
      materials: [
        { itemId: 468, amount: 3 },
        { itemId: 561, amount: 10 },
        { itemId: 466, amount: 7 }
      ]
    }
  },
  {
    id: 17,
    type: WeaponClass.GREAT_SWORD,
    name: 'Lagia Lightning (Y)',
    description:
      'An electric blade made using Lagiacrus materials. Danger: high voltage!',
    attack: 720,
    secondaryDamageType: 'thunder',
    secondaryAttack: 230,
    awaken: false,
    sharpness: [13, 1, 8, 8],
    sharpnessUp: [13, 1, 8, 11, 2],
    affinity: 15,
    slots: 1,
    rarity: 3,
    price: 23300,
    upgradesFrom: {
      weaponId: [14],
      materials: [
        { itemId: 288, amount: 1 },
        { itemId: 392, amount: 5 },
        { itemId: 470, amount: 2 }
      ]
    },
    upgradesTo: [18]
  },
  {
    id: 18,
    type: WeaponClass.GREAT_SWORD,
    name: 'Lagia Bluebolt (G)',
    description:
      'An electric blade made using Lagiacrus materials. Danger: high voltage!',
    attack: 816,
    secondaryDamageType: 'thunder',
    secondaryAttack: 330,
    awaken: false,
    sharpness: [13, 1, 8, 11, 2],
    sharpnessUp: [13, 1, 8, 11, 6, 1],
    affinity: 15,
    slots: 2,
    rarity: 5,
    price: 51100,
    upgradesFrom: {
      weaponId: [17],
      materials: [
        { itemId: 468, amount: 3 },
        { itemId: 561, amount: 10 },
        { itemId: 465, amount: 7 }
      ]
    }
  },
  {
    id: 19,
    type: WeaponClass.GREAT_SWORD,
    name: 'High Lagia Blade',
    description:
      "A Lagiacrus embodied in a blade. Its streaking lightning devours foes' souls.",
    attack: 816,
    secondaryDamageType: 'thunder',
    secondaryAttack: 280,
    awaken: false,
    sharpness: [7, 3, 12, 8],
    sharpnessUp: [7, 3, 12, 10, 3],
    affinity: 0,
    slots: 0,
    rarity: 4,
    price: 31700,
    upgradesFrom: {
      weaponId: [14],
      materials: [
        { itemId: 288, amount: 1 },
        { itemId: 392, amount: 5 },
        { itemId: 459, amount: 3 }
      ]
    },
    upgradesTo: [20]
  },
  {
    id: 20,
    type: WeaponClass.GREAT_SWORD,
    name: 'Lagia Wildfire (P)',
    description:
      "A Lagiacrus embodied in a blade. Its streaking lightning devours foes' souls.",
    attack: 912,
    secondaryDamageType: 'thunder',
    secondaryAttack: 360,
    awaken: false,
    sharpness: [7, 3, 12, 10, 3],
    sharpnessUp: [7, 3, 12, 10, 6, 2],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 54400,
    upgradesFrom: {
      weaponId: [19],
      materials: [
        { itemId: 286, amount: 3 },
        { itemId: 467, amount: 3 },
        { itemId: 469, amount: 1 }
      ]
    }
  },
  {
    id: 21,
    type: WeaponClass.GREAT_SWORD,
    name: 'Carapace Sword',
    description:
      "A blade shaped like a Barroth's head; it packs nearly as much punch.",
    attack: 672,
    secondaryDamageType: 'water',
    secondaryAttack: 180,
    awaken: true,
    sharpness: [9, 4, 11, 1],
    sharpnessUp: [9, 4, 11, 6],
    affinity: -30,
    slots: 0,
    rarity: 2,
    price: 8900,
    upgradesFrom: {
      weaponId: [11],
      materials: [
        { itemId: 274, amount: 2 },
        { itemId: 273, amount: 3 },
        { itemId: 117, amount: 5 }
      ]
    },
    upgradesTo: [22]
  },
  {
    id: 22,
    type: WeaponClass.GREAT_SWORD,
    name: 'Carapace Blade',
    description:
      "A blade shaped like a Barroth's head; it packs nearly as much punch.",
    attack: 768,
    secondaryDamageType: 'water',
    secondaryAttack: 250,
    awaken: true,
    sharpness: [7, 3, 12, 3],
    sharpnessUp: [7, 3, 12, 8],
    affinity: -30,
    slots: 0,
    rarity: 3,
    price: 19800,
    upgradesFrom: {
      weaponId: [21],
      materials: [
        { itemId: 276, amount: 2 },
        { itemId: 275, amount: 3 },
        { itemId: 378, amount: 3 }
      ]
    },
    upgradesTo: [23]
  },
  {
    id: 23,
    type: WeaponClass.GREAT_SWORD,
    name: 'Barroth Wedge',
    description:
      'A blade made from the thick shell of a Barroth. It can crush even wyvern scales.',
    attack: 912,
    secondaryDamageType: 'water',
    secondaryAttack: 270,
    awaken: true,
    sharpness: [9, 4, 11, 6],
    sharpnessUp: [9, 4, 11, 7, 4],
    affinity: -30,
    slots: 0,
    rarity: 4,
    price: 32900,
    upgradesFrom: {
      weaponId: [22],
      materials: [
        { itemId: 442, amount: 5 },
        { itemId: 444, amount: 5 },
        { itemId: 169, amount: 2 }
      ]
    },
    upgradesTo: [24]
  },
  {
    id: 24,
    type: WeaponClass.GREAT_SWORD,
    name: 'Barroth Smasher',
    description:
      'Just like its namesake, this weapon can pulverize its targets into dust.',
    attack: 1056,
    secondaryDamageType: 'water',
    secondaryAttack: 330,
    awaken: true,
    sharpness: [17, 2, 8, 7, 1],
    sharpnessUp: [17, 2, 8, 7, 6],
    affinity: -50,
    slots: 0,
    rarity: 6,
    price: 51000,
    upgradesFrom: {
      weaponId: [23],
      materials: [
        { itemId: 443, amount: 8 },
        { itemId: 380, amount: 5 },
        { itemId: 447, amount: 1 }
      ]
    }
  },
  {
    id: 25,
    type: WeaponClass.GREAT_SWORD,
    name: 'Bone Blade',
    description:
      'A Great Sword forged from monster bone. It can fend off many monsters at once.',
    attack: 336,
    secondaryDamageType: 'poison',
    secondaryAttack: 100,
    awaken: true,
    sharpness: [9, 4, 2],
    sharpnessUp: [9, 4, 7],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 480,
    create: [{ itemId: 149, amount: 2 }],
    upgradesTo: [26]
  },
  {
    id: 26,
    type: WeaponClass.GREAT_SWORD,
    name: 'Bone Blade+',
    description:
      'A Great Sword forged from monster bone. It can fend off many monsters at once.',
    attack: 384,
    secondaryDamageType: 'poison',
    secondaryAttack: 130,
    awaken: true,
    sharpness: [7, 3, 5],
    sharpnessUp: [7, 3, 10],
    affinity: 0,
    slots: 0,
    rarity: 1,
    price: 1660,
    upgradesFrom: {
      weaponId: [25],
      materials: [
        { itemId: 149, amount: 2 },
        { itemId: 277, amount: 3 }
      ]
    },
    upgradesTo: [27, 44]
  },
  {
    id: 27,
    type: WeaponClass.GREAT_SWORD,
    name: 'Jawblade',
    description:
      "A traditional bone blade. Named for its resemblance to a carnivore's jaw.",
    attack: 480,
    secondaryDamageType: 'poison',
    secondaryAttack: 150,
    awaken: true,
    sharpness: [9, 4, 7],
    sharpnessUp: [9, 4, 11, 1],
    affinity: 0,
    slots: 1,
    rarity: 1,
    price: 2980,
    upgradesFrom: {
      weaponId: [26],
      materials: [
        { itemId: 149, amount: 5 },
        { itemId: 526, amount: 3 },
        { itemId: 311, amount: 3 }
      ]
    },
    upgradesTo: [28]
  },
  {
    id: 28,
    type: WeaponClass.GREAT_SWORD,
    name: 'Giant Jawblade',
    description:
      "A traditional bone blade. Named for its resemblance to a carnivore's jaw.",
    attack: 576,
    secondaryDamageType: 'poison',
    secondaryAttack: 190,
    awaken: true,
    sharpness: [9, 4, 11, 1],
    sharpnessUp: [9, 4, 11, 6],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 6930,
    create: [
      { itemId: 151, amount: 2 },
      { itemId: 272, amount: 3 },
      { itemId: 510, amount: 8 }
    ],
    upgradesFrom: {
      weaponId: [27],
      materials: [
        { itemId: 150, amount: 3 },
        { itemId: 263, amount: 2 },
        { itemId: 510, amount: 5 }
      ]
    },
    upgradesTo: [29, 38, 41]
  },
  {
    id: 29,
    type: WeaponClass.GREAT_SWORD,
    name: 'Golem Blade',
    description:
      'A Great Sword formed from a giant bone; its powerful, hefty blade is deadly.',
    attack: 624,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 150,
    awaken: true,
    sharpness: [7, 3, 12, 3],
    sharpnessUp: [7, 3, 12, 8],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 10500,
    upgradesFrom: {
      weaponId: [28],
      materials: [
        { itemId: 151, amount: 1 },
        { itemId: 511, amount: 3 },
        { itemId: 297, amount: 3 }
      ]
    },
    upgradesTo: [30, 32]
  },
  {
    id: 30,
    type: WeaponClass.GREAT_SWORD,
    name: 'Golem Blade+',
    description:
      'A Great Sword formed from a giant bone; its powerful, hefty blade is deadly.',
    attack: 768,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 180,
    awaken: true,
    sharpness: [12, 11, 5, 2],
    sharpnessUp: [12, 11, 5, 5, 2],
    affinity: 0,
    slots: 2,
    rarity: 3,
    price: 19450,
    upgradesFrom: {
      weaponId: [29],
      materials: [
        { itemId: 268, amount: 2 },
        { itemId: 354, amount: 1 },
        { itemId: 314, amount: 5 }
      ]
    },
    upgradesTo: [31]
  },
  {
    id: 31,
    type: WeaponClass.GREAT_SWORD,
    name: 'Blade of Talos',
    description:
      'A weapon said to be wielded by a giant. Its large weight gives it unusual power.',
    attack: 912,
    secondaryDamageType: 'paralysis',
    secondaryAttack: 220,
    awaken: true,
    sharpness: [17, 2, 8, 7, 1],
    sharpnessUp: [17, 2, 8, 7, 6],
    affinity: 0,
    slots: 2,
    rarity: 5,
    price: 33000,
    upgradesFrom: {
      weaponId: [30],
      materials: [
        { itemId: 434, amount: 3 },
        { itemId: 169, amount: 5 },
        { itemId: 561, amount: 5 }
      ]
    }
  },
  {
    id: 32,
    type: WeaponClass.GREAT_SWORD,
    name: 'Valkyrie Blade',
    description:
      'A Great Sword forged by upgrading a Golem Blade with Rathian materials.',
    attack: 672,
    secondaryDamageType: 'poison',
    secondaryAttack: 230,
    awaken: true,
    sharpness: [17, 2, 8, 3],
    sharpnessUp: [17, 2, 8, 7, 1],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 11950,
    upgradesFrom: {
      weaponId: [29],
      materials: [
        { itemId: 247, amount: 6 },
        { itemId: 248, amount: 5 },
        { itemId: 249, amount: 1 }
      ]
    },
    upgradesTo: [33, 36]
  },
  {
    id: 33,
    type: WeaponClass.GREAT_SWORD,
    name: 'Sieglinde',
    description:
      'A green blade named for a lovely queen, it kills prey with sweet-smelling poison.',
    attack: 720,
    secondaryDamageType: 'poison',
    secondaryAttack: 320,
    awaken: false,
    sharpness: [9, 4, 11, 6],
    sharpnessUp: [9, 4, 11, 7, 4],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 22100,
    upgradesFrom: {
      weaponId: [32],
      materials: [
        { itemId: 251, amount: 1 },
        { itemId: 250, amount: 2 },
        { itemId: 118, amount: 5 }
      ]
    },
    upgradesTo: [34, 35]
  },
  {
    id: 34,
    type: WeaponClass.GREAT_SWORD,
    name: 'High Sieglinde (P)',
    description:
      'A blade fashioned after a queen clad in purple. It fells foes with elegance.',
    attack: 960,
    secondaryDamageType: 'poison',
    secondaryAttack: 440,
    awaken: false,
    sharpness: [9, 4, 11, 7, 4],
    sharpnessUp: [9, 4, 11, 7, 6, 3],
    affinity: 0,
    slots: 2,
    rarity: 5,
    price: 41400,
    upgradesFrom: {
      weaponId: [33],
      materials: [
        { itemId: 159, amount: 4 },
        { itemId: 160, amount: 1 },
        { itemId: 156, amount: 5 }
      ]
    }
  },
  {
    id: 35,
    type: WeaponClass.GREAT_SWORD,
    name: 'High Sieglinde (G)',
    description:
      'A blade fashioned after a queen clad in deep green. It fells foes with elegance.',
    attack: 912,
    secondaryDamageType: 'poison',
    secondaryAttack: 440,
    awaken: false,
    sharpness: [9, 4, 11, 7, 4],
    sharpnessUp: [9, 4, 11, 7, 6, 3],
    affinity: 15,
    slots: 2,
    rarity: 5,
    price: 41400,
    upgradesFrom: {
      weaponId: [33],
      materials: [
        { itemId: 159, amount: 4 },
        { itemId: 160, amount: 1 },
        { itemId: 157, amount: 5 }
      ]
    }
  },
  {
    id: 36,
    type: WeaponClass.GREAT_SWORD,
    name: 'Siegmund',
    description:
      'The crimson blade of a brave king. He who uses it justly will win a hundred battles.',
    attack: 768,
    secondaryDamageType: 'fire',
    secondaryAttack: 150,
    awaken: true,
    sharpness: [9, 4, 11, 6],
    sharpnessUp: [9, 4, 11, 7, 4],
    affinity: 15,
    slots: 1,
    rarity: 3,
    price: 24000,
    upgradesFrom: {
      weaponId: [32],
      materials: [
        { itemId: 258, amount: 1 },
        { itemId: 270, amount: 3 },
        { itemId: 18, amount: 3 }
      ]
    },
    upgradesTo: [37]
  },
  {
    id: 37,
    type: WeaponClass.GREAT_SWORD,
    name: 'High Siegmund',
    description:
      "A king's spirit dwells in this fierce blade that cowards cannot touch.",
    attack: 960,
    secondaryDamageType: 'fire',
    secondaryAttack: 240,
    awaken: true,
    sharpness: [12, 11, 5, 5, 2],
    sharpnessUp: [12, 11, 5, 5, 4, 4],
    affinity: 30,
    slots: 1,
    rarity: 6,
    price: 63000,
    upgradesFrom: {
      weaponId: [36],
      materials: [
        { itemId: 164, amount: 5 },
        { itemId: 161, amount: 2 },
        { itemId: 423, amount: 3 }
      ]
    }
  },
  {
    id: 38,
    type: WeaponClass.GREAT_SWORD,
    name: 'Red Wing',
    description:
      'A blade inspired by Rathalos wings. Incendiaries turn its slashes to arcs of flame.',
    attack: 624,
    secondaryDamageType: 'fire',
    secondaryAttack: 210,
    awaken: false,
    sharpness: [17, 2, 8, 3],
    sharpnessUp: [17, 2, 8, 7, 1],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 14600,
    upgradesFrom: {
      weaponId: [28],
      materials: [
        { itemId: 254, amount: 3 },
        { itemId: 353, amount: 3 },
        { itemId: 252, amount: 2 }
      ]
    },
    upgradesTo: [39]
  },
  {
    id: 39,
    type: WeaponClass.GREAT_SWORD,
    name: 'Rathalos Firesword',
    description:
      'A blade inspired by Rathalos wings. Incendiaries turn its slashes to arcs of flame.',
    attack: 672,
    secondaryDamageType: 'fire',
    secondaryAttack: 420,
    awaken: false,
    sharpness: [13, 1, 8, 8],
    sharpnessUp: [13, 1, 8, 11, 2],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 22400,
    upgradesFrom: {
      weaponId: [38],
      materials: [
        { itemId: 255, amount: 8 },
        { itemId: 257, amount: 2 },
        { itemId: 259, amount: 3 }
      ]
    },
    upgradesTo: [40]
  },
  {
    id: 40,
    type: WeaponClass.GREAT_SWORD,
    name: 'Rathalos Flamesword',
    description:
      'A blade of sparkling, crimson flame. Its entranced victims soon meet their end.',
    attack: 816,
    secondaryDamageType: 'fire',
    secondaryAttack: 560,
    awaken: false,
    sharpness: [13, 1, 8, 11, 2],
    sharpnessUp: [13, 1, 8, 11, 6, 1],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 55500,
    upgradesFrom: {
      weaponId: [39],
      materials: [
        { itemId: 258, amount: 3 },
        { itemId: 158, amount: 3 },
        { itemId: 475, amount: 5 }
      ]
    }
  },
  {
    id: 41,
    type: WeaponClass.GREAT_SWORD,
    name: 'Wyvern Jawblade',
    description:
      'A blade forged from claws and fangs. Can tear through a wyvern carapace.',
    attack: 720,
    secondaryDamageType: 'poison',
    secondaryAttack: 250,
    awaken: true,
    sharpness: [5, 3, 9, 13],
    sharpnessUp: [5, 3, 9, 14, 4],
    affinity: 0,
    slots: 2,
    rarity: 3,
    price: 22300,
    upgradesFrom: {
      weaponId: [28],
      materials: [
        { itemId: 330, amount: 50 },
        { itemId: 332, amount: 50 },
        { itemId: 251, amount: 1 }
      ]
    },
    upgradesTo: [42]
  },
  {
    id: 42,
    type: WeaponClass.GREAT_SWORD,
    name: 'Quarrel Hornsword',
    description: 'A wild-looking blade made from Diablos horns. Very powerful.',
    attack: 912,
    secondaryDamageType: 'water',
    secondaryAttack: 50,
    awaken: true,
    defense: 8,
    sharpness: [9, 4, 11, 6],
    sharpnessUp: [9, 4, 11, 7, 4],
    affinity: -20,
    slots: 0,
    rarity: 4,
    price: 33000,
    upgradesFrom: {
      weaponId: [41],
      materials: [
        { itemId: 355, amount: 2 },
        { itemId: 271, amount: 4 },
        { itemId: 153, amount: 5 }
      ]
    },
    upgradesTo: [43]
  },
  {
    id: 43,
    type: WeaponClass.GREAT_SWORD,
    name: 'Diablos Hornsword',
    description:
      'An upgraded Hornsword. It has the demon-like ability to mow down foes.',
    attack: 1008,
    secondaryDamageType: 'water',
    secondaryAttack: 110,
    awaken: true,
    defense: 16,
    sharpness: [15, 3, 3, 9, 5],
    sharpnessUp: [15, 3, 3, 9, 7, 3],
    affinity: -20,
    slots: 0,
    rarity: 6,
    price: 66000,
    upgradesFrom: {
      weaponId: [42],
      materials: [
        { itemId: 424, amount: 2 },
        { itemId: 423, amount: 3 },
        { itemId: 421, amount: 5 }
      ]
    }
  },
  {
    id: 44,
    type: WeaponClass.GREAT_SWORD,
    name: 'Ludroth Bone Sword',
    description:
      'A bone blade reinforced with Ludroth parts. A good base level for further upgrading.',
    attack: 480,
    secondaryDamageType: 'water',
    secondaryAttack: 150,
    awaken: true,
    sharpness: [3, 7, 10],
    sharpnessUp: [3, 7, 15],
    affinity: 0,
    slots: 0,
    rarity: 2,
    price: 3540,
    upgradesFrom: {
      weaponId: [26],
      materials: [
        { itemId: 295, amount: 4 },
        { itemId: 294, amount: 5 },
        { itemId: 116, amount: 2 }
      ]
    },
    upgradesTo: [45]
  },
  {
    id: 45,
    type: WeaponClass.GREAT_SWORD,
    name: 'Ludroth Bone Sword+',
    description:
      'A blade of absorbent sponge. Its pressurized water can break through tough shells.',
    attack: 528,
    secondaryDamageType: 'water',
    secondaryAttack: 210,
    awaken: false,
    sharpness: [7, 3, 12, 3],
    sharpnessUp: [7, 3, 12, 8],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 7710,
    upgradesFrom: {
      weaponId: [44],
      materials: [
        { itemId: 289, amount: 5 },
        { itemId: 291, amount: 2 },
        { itemId: 371, amount: 2 }
      ]
    },
    upgradesTo: [46]
  },
  {
    id: 46,
    type: WeaponClass.GREAT_SWORD,
    name: 'Cataclysm Sword',
    description:
      'A blade of absorbent sponge. Its pressurized water can break through tough shells.',
    attack: 624,
    secondaryDamageType: 'water',
    secondaryAttack: 320,
    awaken: false,
    sharpness: [9, 4, 11, 6],
    sharpnessUp: [9, 4, 11, 7, 4],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 12500,
    upgradesFrom: {
      weaponId: [45],
      materials: [
        { itemId: 456, amount: 1 },
        { itemId: 299, amount: 2 },
        { itemId: 151, amount: 5 }
      ]
    },
    upgradesTo: [47]
  },
  {
    id: 47,
    type: WeaponClass.GREAT_SWORD,
    name: 'Cataclysm Blade',
    description:
      'The ultimate Ludroth blade. The water that issues from it leaves rainbow trails.',
    attack: 768,
    secondaryDamageType: 'water',
    secondaryAttack: 450,
    awaken: false,
    sharpness: [5, 3, 9, 14, 4],
    sharpnessUp: [5, 3, 9, 14, 7, 2],
    affinity: 0,
    slots: 2,
    rarity: 5,
    price: 37700,
    upgradesFrom: {
      weaponId: [46],
      materials: [
        { itemId: 459, amount: 3 },
        { itemId: 457, amount: 8 },
        { itemId: 460, amount: 2 }
      ]
    }
  },
  {
    id: 48,
    type: WeaponClass.GREAT_SWORD,
    name: 'Vulcanis',
    description:
      'A blade made from ore mined in polar climes. Upgradeable in more ways than one.',
    attack: 624,
    secondaryDamageType: 'fire',
    secondaryAttack: 190,
    awaken: true,
    sharpness: [5, 3, 9, 3],
    sharpnessUp: [5, 3, 9, 8],
    affinity: 0,
    slots: 1,
    rarity: 2,
    price: 9800,
    create: [
      { itemId: 106, amount: 2 },
      { itemId: 102, amount: 10 },
      { itemId: 146, amount: 1 }
    ],
    upgradesTo: [49, 51, 53]
  },
  {
    id: 49,
    type: WeaponClass.GREAT_SWORD,
    name: 'Vulcanvil (R)',
    description:
      'A strangely-shaped blade which took this form naturally when crafted.',
    attack: 720,
    secondaryDamageType: 'fire',
    secondaryAttack: 260,
    awaken: true,
    sharpness: [5, 3, 9, 8],
    sharpnessUp: [5, 3, 9, 13],
    affinity: 0,
    slots: 2,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [48],
      materials: [
        { itemId: 104, amount: 4 },
        { itemId: 100, amount: 8 },
        { itemId: 285, amount: 3 }
      ]
    },
    upgradesTo: [50]
  },
  {
    id: 50,
    type: WeaponClass.GREAT_SWORD,
    name: 'Vulcamagnon (P)',
    description:
      'An ancient volcanic eruption in blade form. A great life force sleeps within.',
    attack: 912,
    secondaryDamageType: 'fire',
    secondaryAttack: 350,
    awaken: true,
    sharpness: [5, 3, 9, 14, 4],
    sharpnessUp: [5, 3, 9, 14, 7, 2],
    affinity: 0,
    slots: 3,
    rarity: 6,
    price: 43500,
    upgradesFrom: {
      weaponId: [49, 51],
      materials: [
        { itemId: 103, amount: 10 },
        { itemId: 101, amount: 10 },
        { itemId: 169, amount: 3 }
      ]
    }
  },
  {
    id: 51,
    type: WeaponClass.GREAT_SWORD,
    name: 'Vulcanvil (B)',
    description:
      'A strangely-shaped blade which took this form naturally when crafted.',
    attack: 672,
    secondaryDamageType: 'fire',
    secondaryAttack: 260,
    awaken: true,
    sharpness: [5, 3, 9, 8],
    sharpnessUp: [5, 3, 9, 13],
    affinity: 0,
    slots: 3,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [48],
      materials: [
        { itemId: 104, amount: 4 },
        { itemId: 100, amount: 8 },
        { itemId: 507, amount: 5 }
      ]
    },
    upgradesTo: [50, 52]
  },
  {
    id: 52,
    type: WeaponClass.GREAT_SWORD,
    name: 'Vulcamagnon (G)',
    description:
      'An ancient volcanic eruption in blade form. A great life force sleeps within.',
    attack: 864,
    secondaryDamageType: 'fire',
    secondaryAttack: 350,
    awaken: true,
    sharpness: [5, 3, 9, 14, 4],
    sharpnessUp: [5, 3, 9, 14, 7, 2],
    affinity: 15,
    slots: 3,
    rarity: 6,
    price: 43500,
    upgradesFrom: {
      weaponId: [51, 53],
      materials: [
        { itemId: 103, amount: 10 },
        { itemId: 148, amount: 7 },
        { itemId: 169, amount: 2 }
      ]
    }
  },
  {
    id: 53,
    type: WeaponClass.GREAT_SWORD,
    name: 'Vulcanvil (Y)',
    description:
      'A strangely-shaped blade which took this form naturally when crafted.',
    attack: 672,
    secondaryDamageType: 'fire',
    secondaryAttack: 260,
    awaken: true,
    sharpness: [5, 3, 9, 8],
    sharpnessUp: [5, 3, 9, 13],
    affinity: 15,
    slots: 2,
    rarity: 3,
    price: 21000,
    upgradesFrom: {
      weaponId: [48],
      materials: [
        { itemId: 104, amount: 4 },
        { itemId: 100, amount: 8 },
        { itemId: 167, amount: 3 }
      ]
    },
    upgradesTo: [52]
  },
  {
    id: 54,
    type: WeaponClass.GREAT_SWORD,
    name: 'Viking Hornsword',
    description:
      "A blade crafted from a giant horn, Ceadeus's pride. It shines with foes' blood.",
    attack: 672,
    secondaryDamageType: 'water',
    secondaryAttack: 440,
    awaken: false,
    sharpness: [3, 7, 16, 4],
    sharpnessUp: [3, 7, 16, 7, 1, 1],
    affinity: 0,
    slots: 1,
    rarity: 3,
    price: 25200,
    create: [
      { itemId: 431, amount: 2 },
      { itemId: 428, amount: 2 },
      { itemId: 429, amount: 2 }
    ],
    upgradesTo: [55]
  },
  {
    id: 55,
    type: WeaponClass.GREAT_SWORD,
    name: 'Ancharius Sword',
    description:
      "A blade once wielded by an ancient king. In its light dwells a sea-god's soul...",
    attack: 816,
    secondaryDamageType: 'water',
    secondaryAttack: 500,
    awaken: false,
    sharpness: [3, 7, 16, 7, 1, 1],
    sharpnessUp: [3, 7, 16, 7, 1, 6],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 64200,
    upgradesFrom: {
      weaponId: [54],
      materials: [
        { itemId: 431, amount: 3 },
        { itemId: 430, amount: 1 },
        { itemId: 467, amount: 4 }
      ]
    }
  },
  {
    id: 56,
    type: WeaponClass.GREAT_SWORD,
    name: 'Berserker Sword',
    description:
      "A very heavy blade that channels a Deviljho's power, reducing foes to splinters.",
    attack: 864,
    secondaryDamageType: 'dragon',
    secondaryAttack: 100,
    awaken: false,
    sharpness: [13, 1, 8, 11, 2],
    sharpnessUp: [13, 1, 8, 11, 6, 1],
    affinity: 5,
    slots: 0,
    rarity: 5,
    price: 66666,
    create: [
      { itemId: 452, amount: 5 },
      { itemId: 451, amount: 3 },
      { itemId: 455, amount: 3 }
    ],
    upgradesTo: [57, 58]
  },
  {
    id: 57,
    type: WeaponClass.GREAT_SWORD,
    name: 'Anguish (P)',
    description: 'A dark blade filled with the soul of a blood-thirsty wyvern.',
    attack: 960,
    secondaryDamageType: 'dragon',
    secondaryAttack: 150,
    awaken: false,
    sharpness: [13, 1, 8, 11, 6, 1],
    sharpnessUp: [13, 1, 8, 11, 6, 4, 2],
    affinity: 5,
    slots: 1,
    rarity: 7,
    price: 83300,
    upgradesFrom: {
      weaponId: [56],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 455, amount: 5 },
        { itemId: 453, amount: 2 }
      ]
    }
  },
  {
    id: 58,
    type: WeaponClass.GREAT_SWORD,
    name: 'Anguish (G)',
    description: 'A dark blade filled with the soul of a blood-thirsty wyvern.',
    attack: 912,
    secondaryDamageType: 'dragon',
    secondaryAttack: 150,
    awaken: false,
    sharpness: [13, 1, 8, 11, 6, 1],
    sharpnessUp: [13, 1, 8, 11, 6, 4, 2],
    affinity: 20,
    slots: 1,
    rarity: 7,
    price: 83300,
    upgradesFrom: {
      weaponId: [56],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 455, amount: 5 },
        { itemId: 453, amount: 2 }
      ]
    }
  },
  {
    id: 59,
    type: WeaponClass.GREAT_SWORD,
    name: 'Alatreon Great Sword',
    description:
      "An unsettling blade with a sinister light and the power to steal creatures' souls.",
    attack: 816,
    secondaryDamageType: 'dragon',
    secondaryAttack: 350,
    awaken: false,
    sharpness: [3, 7, 16, 7, 1, 1],
    sharpnessUp: [3, 7, 16, 7, 1, 6],
    affinity: 0,
    slots: 1,
    rarity: 6,
    price: 77777,
    create: [
      { itemId: 476, amount: 3 },
      { itemId: 403, amount: 5 },
      { itemId: 432, amount: 3 }
    ],
    upgradesTo: [60]
  },
  {
    id: 60,
    type: WeaponClass.GREAT_SWORD,
    name: 'Alatreon Revolution',
    description:
      'A blade of purple light. The bearer must cease being human and choose dragonhood.',
    attack: 864,
    secondaryDamageType: 'dragon',
    secondaryAttack: 400,
    awaken: false,
    sharpness: [3, 7, 16, 7, 1, 6],
    sharpnessUp: [3, 7, 16, 7, 1, 6, 5],
    affinity: 0,
    slots: 2,
    rarity: 7,
    price: 100000,
    upgradesFrom: {
      weaponId: [59],
      materials: [
        { itemId: 569, amount: 3 },
        { itemId: 405, amount: 3 },
        { itemId: 404, amount: 1 }
      ]
    }
  },
  {
    id: 61,
    type: WeaponClass.GREAT_SWORD,
    name: 'Proto Razor',
    description:
      'A traditional, poison-edged blade; a dangerous weapon in the right hands.',
    attack: 720,
    secondaryDamageType: 'poison',
    secondaryAttack: 300,
    awaken: true,
    sharpness: [7, 3, 12, 8],
    sharpnessUp: [7, 3, 12, 10, 3],
    affinity: 0,
    slots: 2,
    rarity: 3,
    price: 30000,
    create: [
      { itemId: 581, amount: 3 },
      { itemId: 576, amount: 5 },
      { itemId: 104, amount: 5 }
    ],
    upgradesTo: [62]
  },
  {
    id: 62,
    type: WeaponClass.GREAT_SWORD,
    name: 'Chrome Razor',
    description:
      'A strong, razor-sharpness edge (hence the name), this blade hides a secret poison.',
    attack: 864,
    secondaryDamageType: 'poison',
    secondaryAttack: 450,
    awaken: true,
    sharpness: [7, 3, 12, 10, 3],
    sharpnessUp: [7, 3, 12, 10, 6, 2],
    affinity: 0,
    slots: 3,
    rarity: 5,
    price: 50000,
    upgradesFrom: {
      weaponId: [61],
      materials: [
        { itemId: 553, amount: 3 },
        { itemId: 347, amount: 5 },
        { itemId: 159, amount: 3 }
      ]
    }
  },
  {
    id: 63,
    type: WeaponClass.GREAT_SWORD,
    name: "Lion's Bane",
    description:
      'The fang of the king of beasts. Its wielder gains hundredfold power.',
    attack: 960,
    secondaryDamageType: 'dragon',
    secondaryAttack: 300,
    awaken: true,
    sharpness: [13, 1, 8, 11, 2],
    sharpnessUp: [13, 1, 8, 11, 6, 1],
    affinity: 0,
    slots: 2,
    rarity: 6,
    price: 50000,
    create: [
      { itemId: 559, amount: 5 },
      { itemId: 101, amount: 15 },
      { itemId: 452, amount: 3 }
    ]
  },
  {
    id: 64,
    type: WeaponClass.GREAT_SWORD,
    name: 'Rusted Great Sword',
    description:
      'A Great Sword with unrealized potential. It could perhaps be polished...',
    attack: 480,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [12, 8],
    sharpnessUp: [12, 11, 2],
    affinity: -70,
    slots: 0,
    rarity: 1,
    price: 0,
    create: [{ itemId: 108, amount: 1 }],
    upgradesTo: [65]
  },
  {
    id: 65,
    type: WeaponClass.GREAT_SWORD,
    name: 'Tarnished Great Swd',
    description:
      'A Great Sword with unrealized potential. It could perhaps be polished...',
    attack: 480,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [12, 11, 2],
    sharpnessUp: [12, 11, 5, 2],
    affinity: -70,
    slots: 0,
    rarity: 1,
    price: 5000,
    upgradesFrom: {
      weaponId: [64],
      materials: [
        { itemId: 98, amount: 22 },
        { itemId: 314, amount: 5 },
        { itemId: 531, amount: 2 }
      ]
    },
    upgradesTo: [66]
  },
  {
    id: 66,
    type: WeaponClass.GREAT_SWORD,
    name: 'Ancient Blade',
    description:
      'Beneath the rust lay a blade forged of metal that no modern smith can reproduce.',
    attack: 720,
    secondaryDamageType: 'dragon',
    secondaryAttack: 330,
    awaken: false,
    sharpness: [15, 3, 3, 9],
    sharpnessUp: [15, 3, 3, 9, 5],
    affinity: 0,
    slots: 0,
    rarity: 3,
    price: 22222,
    upgradesFrom: {
      weaponId: [65],
      materials: [
        { itemId: 98, amount: 44 },
        { itemId: 377, amount: 2 },
        { itemId: 252, amount: 2 }
      ]
    },
    upgradesTo: [67]
  },
  {
    id: 67,
    type: WeaponClass.GREAT_SWORD,
    name: 'Elder Monument',
    description:
      'Beneath the rust lay a blade forged of metal that no modern smith can reproduce.',
    attack: 864,
    secondaryDamageType: 'dragon',
    secondaryAttack: 350,
    awaken: false,
    sharpness: [15, 3, 3, 9, 5],
    sharpnessUp: [15, 3, 3, 9, 7, 3],
    affinity: 0,
    slots: 0,
    rarity: 5,
    price: 44444,
    upgradesFrom: {
      weaponId: [66],
      materials: [
        { itemId: 98, amount: 66 },
        { itemId: 432, amount: 2 },
        { itemId: 160, amount: 1 }
      ]
    }
  },
  {
    id: 68,
    type: WeaponClass.GREAT_SWORD,
    name: 'Worn Great Sword',
    description:
      'A Great Sword with unrealized potential. It could perhaps be restored...',
    attack: 528,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [15],
    sharpnessUp: [15, 3, 2],
    affinity: -70,
    slots: 0,
    rarity: 4,
    price: 0,
    create: [{ itemId: 109, amount: 1 }],
    upgradesTo: [69]
  },
  {
    id: 69,
    type: WeaponClass.GREAT_SWORD,
    name: 'Weathered Grt Sword',
    description:
      'A Great Sword with unrealized potential. It could perhaps be restored...',
    attack: 528,
    secondaryDamageType: 'dragon',
    secondaryAttack: 10,
    awaken: true,
    sharpness: [15, 3, 2],
    sharpnessUp: [15, 3, 3, 4],
    affinity: -70,
    slots: 0,
    rarity: 4,
    price: 5000,
    upgradesFrom: {
      weaponId: [68],
      materials: [
        { itemId: 98, amount: 33 },
        { itemId: 514, amount: 5 },
        { itemId: 531, amount: 2 }
      ]
    },
    upgradesTo: [70]
  },
  {
    id: 70,
    type: WeaponClass.GREAT_SWORD,
    name: 'Epitaph Blade',
    description:
      'A blade of unknown origins. It has an inscription, but what could it mean?',
    attack: 912,
    secondaryDamageType: 'dragon',
    secondaryAttack: 380,
    awaken: false,
    sharpness: [3, 7, 16, 7, 1, 1],
    sharpnessUp: [3, 7, 16, 7, 1, 6],
    affinity: 0,
    slots: 0,
    rarity: 6,
    price: 55555,
    upgradesFrom: {
      weaponId: [69],
      materials: [
        { itemId: 98, amount: 77 },
        { itemId: 148, amount: 5 },
        { itemId: 469, amount: 1 }
      ]
    }
  }
]);
