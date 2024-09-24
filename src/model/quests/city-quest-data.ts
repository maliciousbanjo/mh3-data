import { QuestRegion, Location, StarLevel } from './types';

export const CityQuestData = Object.freeze<QuestRegion>({
  name: 'City',
  starLevels: {
    [StarLevel.OneStar]: [
      {
        name: "Harvest 'Shroom",
        client: 'Apprentice Cook',
        type: 'gather',
        goal: 'gathering',
        targets: { 141: 14 },
        contract: 0,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 1000,
        ko: 340,
        hrp: 50,
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 370: 4 }, reward: 1000, hrp: 60 },
          { goal: 'gathering', targets: { 140: 2 }, reward: 1000, hrp: 40 }
        ],
        bosses: []
      },
      {
        name: 'Sunken Treasures',
        client: 'Trader',
        type: 'gather',
        goal: 'gathering',
        targets: { 398: 15 },
        contract: 100,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 1200,
        ko: 400,
        hrp: 55,
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'slay', targets: { 8: 6 }, reward: 1200, hrp: 90 },
          { goal: 'gathering', targets: { 397: 6 }, reward: 900, hrp: 50 }
        ],
        bosses: []
      },
      {
        name: 'The Perfect Panacea',
        client: 'Nurse',
        type: 'gather',
        goal: 'gathering',
        targets: { 310: 5 },
        contract: 100,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 1000,
        ko: 340,
        hrp: 55,
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'slay', targets: { 1: 10 }, reward: 1200, hrp: 55 }
        ],
        bosses: []
      },
      {
        name: 'The Jaggi Menace',
        client: 'Female Farmer',
        type: 'slay',
        goal: 'slay',
        targets: { 11: 8 },
        contract: 150,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 1600,
        ko: 540,
        hrp: 100,
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'slay', targets: { 10: 12 }, reward: 1200, hrp: 80 }
        ],
        bosses: []
      },
      {
        name: 'Help the "Hunter"',
        client: 'Rich Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 17: 1 },
        contract: 200,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 2000,
        ko: 670,
        hrp: 220,
        bosses: [{ type1: 17, type2: 0, level: 23, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 277, count: 1, chance: 20 },
          { itemId: 149, count: 1, chance: 20 },
          { itemId: 279, count: 1, chance: 16 },
          { itemId: 278, count: 1, chance: 15 },
          { itemId: 277, count: 2, chance: 12 },
          { itemId: 279, count: 2, chance: 9 },
          { itemId: 413, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'break', targets: { 17: 0 }, reward: 400, hrp: 40 },
          { goal: 'stun', targets: [17], reward: 400, hrp: 40 }
        ]
      },
      {
        name: 'Playing with Fire',
        client: 'Red-cheeked Huntress',
        type: 'hunt',
        goal: 'hunt',
        targets: { 21: 1 },
        contract: 350,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 3600,
        ko: 1200,
        hrp: 440,
        bosses: [{ type1: 21, type2: 0, level: 23, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 253: 1 }, reward: 1000, hrp: 30 },
          { goal: 'stun', targets: [21], reward: 600, hrp: 60 }
        ]
      },
      {
        name: "The Fisherman's Tale",
        client: 'Middle-aged Fisherman',
        type: 'capture',
        goal: 'capture',
        targets: { 27: 1 },
        contract: 400,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 5500,
        ko: 1840,
        hrp: 500,
        bosses: [{ type1: 27, type2: 0, level: 23, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [{ goal: 'slay', targets: { 13: 5 }, reward: 800, hrp: 70 }]
      },
      {
        name: 'Secret of the Crystal Bones',
        client: 'Archeologist',
        type: 'gather',
        goal: 'gathering',
        targets: { 364: 14 },
        contract: 100,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 1400,
        ko: 470,
        hrp: 70,
        secondaryRewards: [
          { itemId: 150, count: 1, chance: 20 },
          { itemId: 316, count: 8, chance: 18 },
          { itemId: 315, count: 12, chance: 18 },
          { itemId: 149, count: 2, chance: 17 },
          { itemId: 300, count: 1, chance: 12 },
          { itemId: 182, count: 4, chance: 10 },
          { itemId: 406, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'slay', targets: { 9: 12 }, reward: 1200, hrp: 70 }
        ],
        bosses: []
      },
      {
        name: 'No Guts, No Glory',
        client: 'Caravan Leader',
        type: 'gather',
        goal: 'gathering',
        targets: { 397: 10 },
        contract: 150,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 1500,
        ko: 500,
        hrp: 70,
        secondaryRewards: [
          { itemId: 123, count: 2, chance: 26 },
          { itemId: 131, count: 2, chance: 22 },
          { itemId: 144, count: 1, chance: 14 },
          { itemId: 361, count: 1, chance: 12 },
          { itemId: 137, count: 1, chance: 10 },
          { itemId: 116, count: 1, chance: 8 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'slay', targets: { 15: 14 }, reward: 1600, hrp: 100 }
        ],
        bosses: []
      },
      {
        name: 'Jaggi Population Control',
        client: 'Influential Citizen',
        type: 'capture',
        goal: 'capture',
        targets: { 17: 1 },
        contract: 200,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 3000,
        ko: 1000,
        hrp: 240,
        bosses: [{ type1: 17, type2: 0, level: 23, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 123, count: 2, chance: 26 },
          { itemId: 131, count: 2, chance: 22 },
          { itemId: 144, count: 1, chance: 14 },
          { itemId: 361, count: 1, chance: 12 },
          { itemId: 137, count: 1, chance: 10 },
          { itemId: 116, count: 1, chance: 8 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'slay', targets: { 11: 6 }, reward: 1400, hrp: 70 },
          { goal: 'slay', targets: { 10: 10 }, reward: 1200, hrp: 60 }
        ]
      },
      {
        name: 'Tracking the Trickster',
        client: 'Newbie Hunter',
        type: 'capture',
        goal: 'capture',
        targets: { 21: 1 },
        contract: 350,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 5100,
        ko: 1700,
        hrp: 460,
        bosses: [{ type1: 21, type2: 0, level: 23, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 123, count: 2, chance: 26 },
          { itemId: 131, count: 2, chance: 22 },
          { itemId: 144, count: 1, chance: 14 },
          { itemId: 361, count: 1, chance: 12 },
          { itemId: 137, count: 1, chance: 10 },
          { itemId: 116, count: 1, chance: 8 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'break', targets: { 21: 0 }, reward: 600, hrp: 60 },
          { goal: 'break', targets: { 21: 1 }, reward: 600, hrp: 60 }
        ]
      },
      {
        name: 'Goldenfish Opportunity',
        client: 'Fish Fanboy',
        type: 'gather',
        goal: 'gathering',
        targets: { 203: 6 },
        contract: 350,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 3600,
        ko: 1200,
        hrp: 70,
        secondaryRewards: [
          { itemId: 114, count: 1, chance: 24 },
          { itemId: 132, count: 2, chance: 20 },
          { itemId: 360, count: 1, chance: 18 },
          { itemId: 190, count: 2, chance: 14 },
          { itemId: 300, count: 1, chance: 12 },
          { itemId: 117, count: 1, chance: 8 },
          { itemId: 406, count: 1, chance: 4 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 202: 5 }, reward: 800, hrp: 25 },
          { goal: 'gathering', targets: { 202: 3 }, reward: 1200, hrp: 45 }
        ],
        bosses: []
      },
      {
        name: 'No Love for Ludroth',
        client: 'Ex-Caravan Sentry',
        type: 'slay',
        goal: 'slay',
        targets: { 13: 10 },
        contract: 150,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 1800,
        ko: 600,
        hrp: 100,
        secondaryRewards: [
          { itemId: 114, count: 1, chance: 24 },
          { itemId: 132, count: 2, chance: 20 },
          { itemId: 360, count: 1, chance: 18 },
          { itemId: 190, count: 2, chance: 14 },
          { itemId: 300, count: 1, chance: 12 },
          { itemId: 117, count: 1, chance: 8 },
          { itemId: 406, count: 1, chance: 4 }
        ],
        subquests: [{ goal: 'slay', targets: { 8: 7 }, reward: 1400, hrp: 90 }],
        bosses: []
      },
      {
        name: "The Fisherman's Tale",
        client: 'Middle-aged Fisherman',
        type: 'hunt',
        goal: 'hunt',
        targets: { 27: 1 },
        contract: 400,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 4000,
        ko: 1340,
        hrp: 480,
        bosses: [{ type1: 27, type2: 0, level: 23, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 114, count: 1, chance: 24 },
          { itemId: 132, count: 2, chance: 20 },
          { itemId: 360, count: 1, chance: 18 },
          { itemId: 190, count: 2, chance: 14 },
          { itemId: 300, count: 1, chance: 12 },
          { itemId: 117, count: 1, chance: 8 },
          { itemId: 406, count: 1, chance: 4 }
        ],
        subquests: [
          { goal: 'break', targets: { 27: 0 }, reward: 600, hrp: 60 },
          { goal: 'sever', targets: { 27: 1 }, reward: 600, hrp: 60 }
        ]
      }
    ],
    [StarLevel.TwoStar]: [
      {
        name: 'Harvest Tour: Deserted Isle',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 20,
        ko: 7,
        hrp: 5,
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        bosses: []
      },
      {
        name: 'Harvest Tour: Sandy Plains',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 20,
        ko: 7,
        hrp: 5,
        secondaryRewards: [
          { itemId: 123, count: 2, chance: 26 },
          { itemId: 131, count: 2, chance: 22 },
          { itemId: 144, count: 1, chance: 14 },
          { itemId: 361, count: 1, chance: 12 },
          { itemId: 137, count: 1, chance: 10 },
          { itemId: 116, count: 1, chance: 8 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        bosses: []
      },
      {
        name: 'Bug Hunt',
        client: 'Brainy Biologist',
        type: 'slay',
        goal: 'slay',
        targets: { 5: 15 },
        contract: 100,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 1200,
        ko: 400,
        hrp: 70,
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 370: 4 }, reward: 1100, hrp: 60 },
          { goal: 'gathering', targets: { 140: 2 }, reward: 1100, hrp: 40 }
        ],
        bosses: []
      },
      {
        name: 'Wyvern Conservation',
        client: 'Wise Princess',
        type: 'gather',
        goal: 'gathering',
        targets: { 136: 3 },
        contract: 600,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 6000,
        ko: 2000,
        hrp: 200,
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 136: 1 }, reward: 3000, hrp: 100 },
          { goal: 'slay', targets: { 10: 12 }, reward: 1500, hrp: 80 }
        ],
        bosses: []
      },
      {
        name: 'A Royal Pain',
        client: 'Middle-aged Knight',
        type: 'capture',
        goal: 'capture',
        targets: { 22: 1 },
        contract: 500,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 7200,
        ko: 2400,
        hrp: 760,
        bosses: [{ type1: 22, type2: 0, level: 27, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'break', targets: { 22: 0 }, reward: 800, hrp: 80 },
          { goal: 'sever', targets: { 22: 1 }, reward: 800, hrp: 80 }
        ]
      },
      {
        name: 'Rhenoplos Rampage!',
        client: 'City Protector',
        type: 'slay',
        goal: 'slay',
        targets: { 16: 13 },
        contract: 1500,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 1800,
        ko: 600,
        hrp: 120,
        secondaryRewards: [
          { itemId: 123, count: 2, chance: 26 },
          { itemId: 131, count: 2, chance: 22 },
          { itemId: 144, count: 1, chance: 14 },
          { itemId: 361, count: 1, chance: 12 },
          { itemId: 137, count: 1, chance: 10 },
          { itemId: 116, count: 1, chance: 8 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [{ goal: 'slay', targets: { 0: 6 }, reward: 600, hrp: 55 }],
        bosses: []
      },
      {
        name: 'Poached Herbivore Eggs',
        client: 'Newlywed Wife',
        type: 'gather',
        goal: 'gathering',
        targets: { 363: 3 },
        contract: 400,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 4000,
        ko: 1340,
        hrp: 160,
        secondaryRewards: [
          { itemId: 123, count: 2, chance: 26 },
          { itemId: 131, count: 2, chance: 22 },
          { itemId: 144, count: 1, chance: 14 },
          { itemId: 361, count: 1, chance: 12 },
          { itemId: 137, count: 1, chance: 10 },
          { itemId: 116, count: 1, chance: 8 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 363: 1 }, reward: 2000, hrp: 80 },
          { goal: 'slay', targets: { 11: 8 }, reward: 1700, hrp: 100 }
        ],
        bosses: []
      },
      {
        name: 'Specimen Collection',
        client: 'Brainy Biologist',
        type: 'capture',
        goal: 'capture',
        targets: { 19: 1 },
        contract: 500,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 7200,
        ko: 2400,
        hrp: 780,
        bosses: [{ type1: 19, type2: 0, level: 25, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 413, count: 1, chance: 35 },
          { itemId: 300, count: 2, chance: 28 },
          { itemId: 301, count: 1, chance: 14 },
          { itemId: 414, count: 3, chance: 10 },
          { itemId: 409, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'sever', targets: { 19: 2 }, reward: 700, hrp: 100 },
          { goal: 'break', targets: { 19: 0 }, reward: 700, hrp: 100 }
        ]
      },
      {
        name: 'Flooded Forest Extermination',
        client: 'Cattle Rancher',
        type: 'slay',
        goal: 'slay',
        targets: { 4: 20 },
        contract: 150,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 1600,
        ko: 540,
        hrp: 90,
        secondaryRewards: [
          { itemId: 114, count: 1, chance: 24 },
          { itemId: 132, count: 2, chance: 20 },
          { itemId: 360, count: 1, chance: 18 },
          { itemId: 190, count: 2, chance: 14 },
          { itemId: 300, count: 1, chance: 12 },
          { itemId: 117, count: 1, chance: 8 },
          { itemId: 406, count: 1, chance: 4 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 119: 6 }, reward: 1600, hrp: 55 }
        ],
        bosses: []
      },
      {
        name: 'Scene of the Crime',
        client: 'Trader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 28: 1 },
        contract: 550,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 5600,
        ko: 1870,
        hrp: 820,
        bosses: [{ type1: 28, type2: 0, level: 27, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 114, count: 1, chance: 24 },
          { itemId: 132, count: 2, chance: 20 },
          { itemId: 360, count: 1, chance: 18 },
          { itemId: 190, count: 2, chance: 14 },
          { itemId: 300, count: 1, chance: 12 },
          { itemId: 117, count: 1, chance: 8 },
          { itemId: 406, count: 1, chance: 4 }
        ],
        subquests: [{ goal: 'fish', targets: [28], reward: 1200, hrp: 60 }]
      },
      {
        name: 'Lady and the Gobul',
        client: 'Spoiled Princess',
        type: 'capture',
        goal: 'capture',
        targets: { 28: 1 },
        contract: 550,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 7600,
        ko: 2540,
        hrp: 840,
        bosses: [{ type1: 28, type2: 0, level: 27, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 114, count: 1, chance: 24 },
          { itemId: 132, count: 2, chance: 20 },
          { itemId: 360, count: 1, chance: 18 },
          { itemId: 190, count: 2, chance: 14 },
          { itemId: 300, count: 1, chance: 12 },
          { itemId: 117, count: 1, chance: 8 },
          { itemId: 406, count: 1, chance: 4 }
        ],
        subquests: [
          { goal: 'break', targets: { 28: 0 }, reward: 800, hrp: 100 },
          { goal: 'sever', targets: { 28: 1 }, reward: 800, hrp: 100 }
        ]
      },
      {
        name: "The Merchant's Mission",
        client: 'Simple Fur Trader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 22: 1 },
        contract: 500,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 5200,
        ko: 1740,
        hrp: 740,
        bosses: [{ type1: 22, type2: 0, level: 27, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 114, count: 1, chance: 24 },
          { itemId: 132, count: 2, chance: 20 },
          { itemId: 360, count: 1, chance: 18 },
          { itemId: 190, count: 2, chance: 14 },
          { itemId: 300, count: 1, chance: 12 },
          { itemId: 117, count: 1, chance: 8 },
          { itemId: 406, count: 1, chance: 4 }
        ],
        subquests: [
          { goal: 'break', targets: { 22: 1 }, reward: 800, hrp: 80 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1200, hrp: 40 }
        ]
      },
      {
        name: 'Blood From a Stone',
        client: 'Female Geologist',
        type: 'gather',
        goal: 'gathering',
        targets: { 395: 13 },
        contract: 150,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 1800,
        ko: 600,
        hrp: 80,
        secondaryRewards: [
          { itemId: 133, count: 2, chance: 26 },
          { itemId: 112, count: 2, chance: 22 },
          { itemId: 362, count: 1, chance: 20 },
          { itemId: 414, count: 1, chance: 12 },
          { itemId: 301, count: 1, chance: 10 },
          { itemId: 106, count: 1, chance: 5 },
          { itemId: 406, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 509: 3 }, reward: 1200, hrp: 55 },
          { goal: 'light', targets: [5], reward: 500, hrp: 40 }
        ],
        bosses: []
      },
      {
        name: 'Leader of the Icepack',
        client: 'Tundra-expedition Leader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 18: 1 },
        contract: 250,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 2800,
        ko: 940,
        hrp: 380,
        bosses: [{ type1: 18, type2: 0, level: 25, size: 100, min: 1, max: 5 }],
        secondaryRewards: [
          { itemId: 133, count: 2, chance: 26 },
          { itemId: 112, count: 2, chance: 22 },
          { itemId: 362, count: 1, chance: 20 },
          { itemId: 414, count: 1, chance: 12 },
          { itemId: 301, count: 1, chance: 10 },
          { itemId: 106, count: 1, chance: 5 },
          { itemId: 406, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'slay', targets: { 12: 8 }, reward: 1600, hrp: 100 }
        ]
      },
      {
        name: "The Butler's Great Baggi",
        client: 'White-clad Butler',
        type: 'capture',
        goal: 'capture',
        targets: { 18: 1 },
        contract: 250,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 3800,
        ko: 1270,
        hrp: 400,
        bosses: [{ type1: 18, type2: 0, level: 25, size: 100, min: 1, max: 5 }],
        secondaryRewards: [
          { itemId: 149, count: 2, chance: 32 },
          { itemId: 315, count: 8, chance: 27 },
          { itemId: 182, count: 3, chance: 18 },
          { itemId: 406, count: 1, chance: 10 },
          { itemId: 301, count: 1, chance: 8 },
          { itemId: 300, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 18: 0 }, reward: 600, hrp: 40 },
          { goal: 'stun', targets: [18], reward: 600, hrp: 40 }
        ]
      },
      {
        name: 'Leading the Charge',
        client: 'Brainy Biologist',
        type: 'hunt',
        goal: 'hunt',
        targets: { 19: 1 },
        contract: 500,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 5200,
        ko: 1740,
        hrp: 760,
        bosses: [{ type1: 19, type2: 0, level: 25, size: 100, min: 0, max: 3 }],
        secondaryRewards: [
          { itemId: 123, count: 2, chance: 26 },
          { itemId: 131, count: 2, chance: 22 },
          { itemId: 144, count: 1, chance: 14 },
          { itemId: 361, count: 1, chance: 12 },
          { itemId: 137, count: 1, chance: 10 },
          { itemId: 116, count: 1, chance: 8 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'sever', targets: { 19: 1 }, reward: 700, hrp: 100 },
          { goal: 'anthill', count: 2, reward: 800, hrp: 40 }
        ]
      }
    ],
    [StarLevel.ThreeStar]: [
      {
        name: 'Harvest Tour: Flooded Forest',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 20,
        ko: 7,
        hrp: 5,
        secondaryRewards: [
          { itemId: 114, count: 1, chance: 24 },
          { itemId: 132, count: 2, chance: 20 },
          { itemId: 360, count: 1, chance: 18 },
          { itemId: 190, count: 2, chance: 14 },
          { itemId: 300, count: 1, chance: 12 },
          { itemId: 117, count: 1, chance: 8 },
          { itemId: 406, count: 1, chance: 4 }
        ],
        bosses: []
      },
      {
        name: 'Harvest Tour: Tundra',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 20,
        ko: 7,
        hrp: 5,
        secondaryRewards: [
          { itemId: 133, count: 2, chance: 26 },
          { itemId: 112, count: 2, chance: 22 },
          { itemId: 362, count: 1, chance: 20 },
          { itemId: 414, count: 1, chance: 12 },
          { itemId: 301, count: 1, chance: 10 },
          { itemId: 106, count: 1, chance: 5 },
          { itemId: 406, count: 1, chance: 5 }
        ],
        bosses: []
      },
      {
        name: 'We Need a Hero',
        client: 'Princess of a Ruined Land',
        type: 'hunt',
        goal: 'hunt',
        targets: { 23: 1 },
        contract: 800,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 8000,
        ko: 2670,
        hrp: 1000,
        bosses: [{ type1: 23, type2: 0, level: 29, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 130, count: 1, chance: 20 },
          { itemId: 125, count: 2, chance: 18 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 406, count: 1, chance: 12 },
          { itemId: 120, count: 2, chance: 10 },
          { itemId: 413, count: 1, chance: 10 },
          { itemId: 407, count: 1, chance: 8 },
          { itemId: 301, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'sever', targets: { 23: 1 }, reward: 1000, hrp: 120 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1600, hrp: 60 }
        ]
      },
      {
        name: 'Into the Danger Zone',
        client: 'City Security Chief',
        type: 'hunt',
        goal: 'hunt',
        targets: { 24: 1 },
        contract: 850,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 8800,
        ko: 2940,
        hrp: 1100,
        bosses: [{ type1: 24, type2: 0, level: 29, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 316, count: 16, chance: 25 },
          { itemId: 406, count: 1, chance: 24 },
          { itemId: 315, count: 28, chance: 20 },
          { itemId: 407, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 8 },
          { itemId: 409, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'anthill', count: 2, reward: 800, hrp: 40 },
          { goal: 'stun', targets: [24], reward: 1000, hrp: 140 }
        ]
      },
      {
        name: 'Wanted Alive',
        client: 'Middle-aged Knight',
        type: 'capture',
        goal: 'capture',
        targets: { 24: 1 },
        contract: 850,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 12800,
        ko: 4270,
        hrp: 1120,
        bosses: [{ type1: 24, type2: 0, level: 29, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 406, count: 1, chance: 35 },
          { itemId: 301, count: 1, chance: 25 },
          { itemId: 300, count: 1, chance: 20 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 413, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 24: 0 }, reward: 1200, hrp: 140 },
          { goal: 'sever', targets: { 24: 1 }, reward: 1200, hrp: 140 }
        ]
      },
      {
        name: 'Rotten Fish',
        client: 'Frontier Baron',
        type: 'capture',
        goal: 'capture',
        targets: { 29: 1 },
        contract: 750,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 10600,
        ko: 3540,
        hrp: 1020,
        bosses: [{ type1: 29, type2: 0, level: 29, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 406, count: 1, chance: 35 },
          { itemId: 301, count: 1, chance: 25 },
          { itemId: 300, count: 1, chance: 20 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 413, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 29: 0 }, reward: 800, hrp: 120 },
          { goal: 'sever', targets: { 29: 1 }, reward: 800, hrp: 120 }
        ]
      },
      {
        name: 'The Creeping Venom',
        client: 'Cocky Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 25: 1 },
        contract: 600,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 6000,
        ko: 2000,
        hrp: 860,
        bosses: [{ type1: 25, type2: 0, level: 27, size: 100, min: 1, max: 4 }],
        secondaryRewards: [
          { itemId: 133, count: 2, chance: 26 },
          { itemId: 112, count: 2, chance: 22 },
          { itemId: 362, count: 1, chance: 20 },
          { itemId: 414, count: 1, chance: 12 },
          { itemId: 301, count: 1, chance: 10 },
          { itemId: 106, count: 1, chance: 5 },
          { itemId: 406, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'slay', targets: { 9: 12 }, reward: 1200, hrp: 70 },
          { goal: 'eggs', count: 8, reward: 800, hrp: 55 }
        ]
      },
      {
        name: 'The Lost Expedition',
        client: 'Female Geologist',
        type: 'hunt',
        goal: 'hunt',
        targets: { 26: 1 },
        contract: 800,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 8000,
        ko: 2670,
        hrp: 1000,
        bosses: [{ type1: 26, type2: 0, level: 29, size: 100, min: 1, max: 4 }],
        secondaryRewards: [
          { itemId: 151, count: 1, chance: 16 },
          { itemId: 316, count: 12, chance: 12 },
          { itemId: 315, count: 24, chance: 12 },
          { itemId: 406, count: 1, chance: 12 },
          { itemId: 332, count: 5, chance: 10 },
          { itemId: 330, count: 5, chance: 10 },
          { itemId: 150, count: 1, chance: 8 },
          { itemId: 301, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 7 },
          { itemId: 410, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'pitfall', targets: [26], reward: 500, hrp: 60 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1600, hrp: 60 }
        ]
      },
      {
        name: "The Bard's Barioth",
        client: 'Wandering Bard',
        type: 'capture',
        goal: 'capture',
        targets: { 26: 1 },
        contract: 800,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 11100,
        ko: 3700,
        hrp: 1020,
        bosses: [{ type1: 26, type2: 0, level: 29, size: 100, min: 1, max: 4 }],
        secondaryRewards: [
          { itemId: 406, count: 1, chance: 35 },
          { itemId: 301, count: 1, chance: 25 },
          { itemId: 300, count: 1, chance: 20 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 413, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 26: 1 }, reward: 1000, hrp: 120 },
          { goal: 'break', targets: { 26: 0 }, reward: 1000, hrp: 120 }
        ]
      },
      {
        name: 'Roll the Uroktor',
        client: 'Caravan Leader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 14: 15 },
        contract: 150,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: false,
        reward: 1900,
        ko: 640,
        hrp: 120,
        secondaryRewards: [
          { itemId: 306, count: 1, chance: 29 },
          { itemId: 341, count: 1, chance: 24 },
          { itemId: 118, count: 1, chance: 12 },
          { itemId: 301, count: 1, chance: 12 },
          { itemId: 410, count: 1, chance: 8 },
          { itemId: 104, count: 1, chance: 6 },
          { itemId: 406, count: 1, chance: 6 },
          { itemId: 407, count: 1, chance: 3 }
        ],
        subquests: [
          { goal: 'slay', targets: { 16: 8 }, reward: 1400, hrp: 120 }
        ],
        bosses: []
      },
      {
        name: 'Powder Burns',
        client: 'City Armorer',
        type: 'gather',
        goal: 'gathering',
        targets: { 350: 3 },
        contract: 800,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: false,
        reward: 8000,
        ko: 2670,
        hrp: 300,
        secondaryRewards: [
          { itemId: 306, count: 1, chance: 29 },
          { itemId: 341, count: 1, chance: 24 },
          { itemId: 118, count: 1, chance: 12 },
          { itemId: 301, count: 1, chance: 12 },
          { itemId: 410, count: 1, chance: 8 },
          { itemId: 104, count: 1, chance: 6 },
          { itemId: 406, count: 1, chance: 6 },
          { itemId: 407, count: 1, chance: 3 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 350: 1 }, reward: 4000, hrp: 150 }
        ],
        bosses: []
      },
      {
        name: "The Volcano's Fury",
        client: 'Scarred Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 20: 1 },
        contract: 850,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: false,
        reward: 8800,
        ko: 2940,
        hrp: 1100,
        bosses: [{ type1: 20, type2: 0, level: 29, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 316, count: 16, chance: 25 },
          { itemId: 406, count: 1, chance: 24 },
          { itemId: 315, count: 28, chance: 20 },
          { itemId: 407, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 8 },
          { itemId: 409, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 253: 3 }, reward: 3200, hrp: 140 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1600, hrp: 70 }
        ]
      },
      {
        name: 'To Catch an Uragaan',
        client: 'Brainy Biologist',
        type: 'capture',
        goal: 'capture',
        targets: { 20: 1 },
        contract: 850,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: false,
        reward: 12800,
        ko: 4270,
        hrp: 1120,
        bosses: [{ type1: 20, type2: 0, level: 29, size: 100, min: 1, max: 3 }],
        secondaryRewards: [
          { itemId: 406, count: 1, chance: 35 },
          { itemId: 301, count: 1, chance: 25 },
          { itemId: 300, count: 1, chance: 20 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 413, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 20: 0 }, reward: 1200, hrp: 140 },
          { goal: 'sever', targets: { 20: 1 }, reward: 1200, hrp: 140 }
        ]
      },
      {
        name: '[Advanced] Double Trouble',
        client: 'Head of Island Guard',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 22: 1, 23: 1 },
        contract: 1550,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 15700,
        ko: 5240,
        hrp: 1820,
        bosses: [
          { type1: 22, type2: 0, level: 40, size: 100, min: 0, max: 3 },
          { type1: 23, type2: 1, level: 40, size: 100, min: 0, max: 3 }
        ],
        secondaryRewards: [
          { itemId: 255, count: 1, chance: 28 },
          { itemId: 254, count: 1, chance: 20 },
          { itemId: 256, count: 1, chance: 18 },
          { itemId: 330, count: 5, chance: 12 },
          { itemId: 252, count: 1, chance: 9 },
          { itemId: 257, count: 1, chance: 8 },
          { itemId: 151, count: 1, chance: 5 }
        ]
      },
      {
        name: '[Advanced] Fort Gigginox',
        client: 'Ruler of the Frozen Lands',
        type: 'capture',
        goal: 'capture',
        targets: { 25: 1 },
        contract: 700,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 10200,
        ko: 3400,
        hrp: 1120,
        bosses: [{ type1: 25, type2: 0, level: 32, size: 100, min: 2, max: 4 }],
        secondaryRewards: [
          { itemId: 316, count: 16, chance: 25 },
          { itemId: 406, count: 1, chance: 24 },
          { itemId: 315, count: 28, chance: 20 },
          { itemId: 407, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 8 },
          { itemId: 409, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 25: 0 }, reward: 1000, hrp: 140 },
          { goal: 'break', targets: { 25: 1 }, reward: 1000, hrp: 140 }
        ]
      },
      {
        name: '[Advanced] Rathalos Alert',
        client: 'Wyvern Observation Post',
        type: 'capture',
        goal: 'capture',
        targets: { 23: 1 },
        contract: 850,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: false,
        reward: 11600,
        ko: 3870,
        hrp: 1300,
        bosses: [{ type1: 23, type2: 0, level: 32, size: 100, min: 2, max: 3 }],
        secondaryRewards: [
          { itemId: 316, count: 16, chance: 25 },
          { itemId: 406, count: 1, chance: 24 },
          { itemId: 315, count: 28, chance: 20 },
          { itemId: 407, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 8 },
          { itemId: 409, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 23: 0 }, reward: 1200, hrp: 140 },
          { goal: 'sever', targets: { 23: 1 }, reward: 1200, hrp: 140 }
        ]
      },
      {
        name: '[Advanced] Agnaktor Alert',
        client: 'Volcano Observation Post',
        type: 'hunt',
        goal: 'hunt',
        targets: { 30: 1 },
        contract: 1100,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: false,
        reward: 11000,
        ko: 3670,
        hrp: 1490,
        bosses: [{ type1: 30, type2: 0, level: 32, size: 100, min: 2, max: 3 }],
        secondaryRewards: [
          { itemId: 306, count: 1, chance: 29 },
          { itemId: 341, count: 1, chance: 24 },
          { itemId: 118, count: 1, chance: 12 },
          { itemId: 301, count: 1, chance: 12 },
          { itemId: 410, count: 1, chance: 8 },
          { itemId: 104, count: 1, chance: 6 },
          { itemId: 406, count: 1, chance: 6 },
          { itemId: 407, count: 1, chance: 3 }
        ],
        subquests: [
          { goal: 'break', targets: { 30: 0 }, reward: 1400, hrp: 160 },
          { goal: 'sever', targets: { 30: 1 }, reward: 1400, hrp: 160 }
        ]
      },
      {
        name: "The Fisherman's Fiend",
        client: 'Frontier Baron',
        type: 'hunt',
        goal: 'hunt',
        targets: { 29: 1 },
        contract: 750,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 7600,
        ko: 2540,
        hrp: 1000,
        bosses: [{ type1: 29, type2: 0, level: 27, size: 100, min: 0, max: 3 }],
        secondaryRewards: [
          { itemId: 130, count: 1, chance: 20 },
          { itemId: 125, count: 2, chance: 18 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 406, count: 1, chance: 12 },
          { itemId: 120, count: 2, chance: 10 },
          { itemId: 413, count: 1, chance: 10 },
          { itemId: 407, count: 1, chance: 8 },
          { itemId: 301, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'break', targets: { 29: 1 }, reward: 800, hrp: 120 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1200, hrp: 60 }
        ]
      },
      {
        name: 'The Festival of Fear',
        client: 'Desert Mayor',
        type: 'slay',
        goal: 'hunt',
        targets: { 33: 1 },
        contract: 1500,
        time: 30,
        location: Location.GREAT_DESERT,
        randomspawn: false,
        reward: 15000,
        ko: 5000,
        hrp: 1200,
        bosses: [{ type1: 33, type2: 0, level: 30, size: 100, min: 0, max: 0 }],
        secondaryRewards: [
          { itemId: 406, count: 1, chance: 35 },
          { itemId: 301, count: 1, chance: 25 },
          { itemId: 300, count: 1, chance: 20 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 413, count: 1, chance: 5 }
        ]
      },
      {
        name: 'The Festival of Fear',
        client: 'Guildmaster',
        type: 'repel',
        goal: 'repel',
        targets: { 33: 60 },
        contract: 750,
        time: 30,
        location: Location.GREAT_DESERT,
        randomspawn: false,
        reward: 7500,
        ko: 2500,
        hrp: 600,
        bosses: [{ type1: 33, type2: 0, level: 27, size: 100, min: 0, max: 0 }],
        secondaryRewards: [
          { itemId: 433, count: 1, chance: 32 },
          { itemId: 435, count: 1, chance: 20 },
          { itemId: 535, count: 1, chance: 16 },
          { itemId: 300, count: 1, chance: 12 },
          { itemId: 434, count: 1, chance: 10 },
          { itemId: 436, count: 1, chance: 5 },
          { itemId: 432, count: 1, chance: 4 },
          { itemId: 437, count: 1, chance: 1 }
        ]
      }
    ],
    [StarLevel.FourStar]: [
      {
        name: 'Harvest Tour: Deserted Isle',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 20,
        ko: 7,
        hrp: 5,
        secondaryRewards: [
          { itemId: 120, count: 2, chance: 26 },
          { itemId: 138, count: 2, chance: 20 },
          { itemId: 115, count: 1, chance: 18 },
          { itemId: 414, count: 1, chance: 13 },
          { itemId: 410, count: 1, chance: 10 },
          { itemId: 406, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 5 }
        ],
        bosses: []
      },
      {
        name: 'Harvest Tour: Sandy Plains',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 20,
        ko: 7,
        hrp: 5,
        secondaryRewards: [
          { itemId: 361, count: 2, chance: 27 },
          { itemId: 116, count: 1, chance: 20 },
          { itemId: 137, count: 1, chance: 18 },
          { itemId: 414, count: 1, chance: 12 },
          { itemId: 410, count: 1, chance: 10 },
          { itemId: 406, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 5 }
        ],
        bosses: []
      },
      {
        name: 'Jump a Jaggi',
        client: 'Head Village Guard',
        type: 'hunt',
        goal: 'hunt',
        targets: { 17: 1 },
        contract: 300,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: true,
        reward: 3000,
        ko: 1000,
        hrp: 320,
        bosses: [
          { type1: 17, type2: 0, level: 45, size: 100, min: 1, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 149, count: 2, chance: 30 },
          { itemId: 315, count: 16, chance: 22 },
          { itemId: 182, count: 4, chance: 20 },
          { itemId: 245, count: 5, chance: 15 },
          { itemId: 406, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'slay', targets: { 11: 6 }, reward: 2400, hrp: 130 },
          { goal: 'slay', targets: { 10: 10 }, reward: 1800, hrp: 110 }
        ]
      },
      {
        name: 'Playing with Fire',
        client: 'Red-cheeked Huntress',
        type: 'hunt',
        goal: 'hunt',
        targets: { 21: 1 },
        contract: 500,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: true,
        reward: 5400,
        ko: 1800,
        hrp: 540,
        bosses: [
          { type1: 21, type2: 0, level: 45, size: 100, min: 1, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 316, count: 15, chance: 18 },
          { itemId: 315, count: 24, chance: 18 },
          { itemId: 150, count: 2, chance: 15 },
          { itemId: 406, count: 1, chance: 12 },
          { itemId: 182, count: 5, chance: 10 },
          { itemId: 410, count: 1, chance: 10 },
          { itemId: 149, count: 3, chance: 9 },
          { itemId: 407, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'slay', targets: { 10: 5 }, reward: 900, hrp: 60 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1400, hrp: 30 }
        ]
      },
      {
        name: 'Reel In a Rathian',
        client: 'Village Protector',
        type: 'hunt',
        goal: 'hunt',
        targets: { 22: 1 },
        contract: 750,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: true,
        reward: 7800,
        ko: 2600,
        hrp: 840,
        bosses: [
          { type1: 22, type2: 0, level: 45, size: 100, min: 1, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 120, count: 2, chance: 26 },
          { itemId: 138, count: 2, chance: 20 },
          { itemId: 115, count: 1, chance: 18 },
          { itemId: 414, count: 1, chance: 13 },
          { itemId: 410, count: 1, chance: 10 },
          { itemId: 406, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 136: 1 }, reward: 4000, hrp: 100 }
        ]
      },
      {
        name: 'No Guts, No Glory',
        client: 'Caravan Leader',
        type: 'gather',
        goal: 'gathering',
        targets: { 397: 10 },
        contract: 200,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: true,
        reward: 2400,
        ko: 800,
        hrp: 100,
        secondaryRewards: [
          { itemId: 361, count: 2, chance: 27 },
          { itemId: 116, count: 1, chance: 20 },
          { itemId: 137, count: 1, chance: 18 },
          { itemId: 414, count: 1, chance: 12 },
          { itemId: 410, count: 1, chance: 10 },
          { itemId: 406, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'slay', targets: { 15: 14 }, reward: 2700, hrp: 150 },
          { goal: 'gathering', targets: { 364: 10 }, reward: 2100, hrp: 70 }
        ],
        bosses: []
      },
      {
        name: 'Jumping for Jaggi',
        client: 'City Security Chief',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 17: 2 },
        contract: 600,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: true,
        reward: 6000,
        ko: 2000,
        hrp: 520,
        bosses: [
          { type1: 17, type2: 0, level: 45, size: 100, min: 1, max: 10 },
          { type1: 17, type2: 1, level: 45, size: 100, min: 1, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 281, count: 1, chance: 28 },
          { itemId: 505, count: 1, chance: 21 },
          { itemId: 532, count: 1, chance: 15 },
          { itemId: 282, count: 2, chance: 10 },
          { itemId: 149, count: 3, chance: 10 },
          { itemId: 279, count: 3, chance: 8 },
          { itemId: 315, count: 10, chance: 8 }
        ]
      },
      {
        name: 'The Mysterious Mimic',
        client: 'Brainy Biologist',
        type: 'capture',
        goal: 'capture',
        targets: { 21: 1 },
        contract: 500,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: true,
        reward: 7900,
        ko: 2640,
        hrp: 560,
        bosses: [
          { type1: 21, type2: 0, level: 45, size: 100, min: 1, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 361, count: 2, chance: 27 },
          { itemId: 116, count: 1, chance: 20 },
          { itemId: 137, count: 1, chance: 18 },
          { itemId: 414, count: 1, chance: 12 },
          { itemId: 410, count: 1, chance: 10 },
          { itemId: 406, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 21: 0 }, reward: 900, hrp: 60 },
          { goal: 'break', targets: { 21: 1 }, reward: 900, hrp: 60 }
        ]
      },
      {
        name: 'Ambush the Ambusher',
        client: 'Newbie Hunter',
        type: 'capture',
        goal: 'capture',
        targets: { 22: 1 },
        contract: 750,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: true,
        reward: 10800,
        ko: 3600,
        hrp: 860,
        bosses: [
          { type1: 22, type2: 0, level: 45, size: 100, min: 1, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 561, count: 1, chance: 23 },
          { itemId: 406, count: 1, chance: 15 },
          { itemId: 151, count: 2, chance: 10 },
          { itemId: 316, count: 20, chance: 10 },
          { itemId: 315, count: 32, chance: 10 },
          { itemId: 407, count: 1, chance: 10 },
          { itemId: 411, count: 1, chance: 8 },
          { itemId: 332, count: 8, chance: 7 },
          { itemId: 330, count: 8, chance: 7 }
        ],
        subquests: [
          { goal: 'anthill', count: 2, reward: 1000, hrp: 40 },
          { goal: 'break', targets: { 22: 0 }, reward: 1200, hrp: 80 }
        ]
      },
      {
        name: 'Avenging the Fallen Hunter',
        client: 'Wounded Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 19: 1 },
        contract: 750,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: true,
        reward: 7800,
        ko: 2600,
        hrp: 860,
        bosses: [
          { type1: 19, type2: 0, level: 45, size: 100, min: 1, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 316, count: 15, chance: 18 },
          { itemId: 315, count: 24, chance: 18 },
          { itemId: 150, count: 2, chance: 15 },
          { itemId: 406, count: 1, chance: 12 },
          { itemId: 182, count: 5, chance: 10 },
          { itemId: 410, count: 1, chance: 10 },
          { itemId: 149, count: 3, chance: 9 },
          { itemId: 407, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 363: 1 }, reward: 3000, hrp: 80 },
          { goal: 'slay', targets: { 16: 6 }, reward: 1500, hrp: 70 }
        ]
      },
      {
        name: 'Neopteron Pest Control',
        client: 'Cattle Rancher',
        type: 'slay',
        goal: 'slay',
        targets: { 4: 20 },
        contract: 200,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: true,
        reward: 2400,
        ko: 800,
        hrp: 120,
        secondaryRewards: [
          { itemId: 360, count: 2, chance: 24 },
          { itemId: 103, count: 1, chance: 18 },
          { itemId: 414, count: 1, chance: 18 },
          { itemId: 114, count: 2, chance: 12 },
          { itemId: 117, count: 2, chance: 10 },
          { itemId: 411, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 5 },
          { itemId: 132, count: 3, chance: 5 }
        ],
        subquests: [
          { goal: 'slay', targets: { 5: 15 }, reward: 1800, hrp: 100 },
          { goal: 'gathering', targets: { 119: 6 }, reward: 2400, hrp: 55 }
        ],
        bosses: []
      },
      {
        name: "A Ludroth Lickin'",
        client: 'Ex-Caravan Sentry',
        type: 'slay',
        goal: 'slay',
        targets: { 13: 10 },
        contract: 250,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: true,
        reward: 2700,
        ko: 900,
        hrp: 130,
        secondaryRewards: [
          { itemId: 360, count: 2, chance: 24 },
          { itemId: 103, count: 1, chance: 18 },
          { itemId: 414, count: 1, chance: 18 },
          { itemId: 114, count: 2, chance: 12 },
          { itemId: 117, count: 2, chance: 10 },
          { itemId: 411, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 5 },
          { itemId: 132, count: 3, chance: 5 }
        ],
        subquests: [
          { goal: 'slay', targets: { 8: 7 }, reward: 2100, hrp: 120 }
        ],
        bosses: []
      },
      {
        name: 'Fine Kettle of Fish',
        client: 'Fish Fanboy',
        type: 'gather',
        goal: 'gathering',
        targets: { 203: 6 },
        contract: 400,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: true,
        reward: 4200,
        ko: 1400,
        hrp: 70,
        secondaryRewards: [
          { itemId: 202, count: 1, chance: 35 },
          { itemId: 193, count: 4, chance: 16 },
          { itemId: 196, count: 3, chance: 15 },
          { itemId: 191, count: 2, chance: 12 },
          { itemId: 200, count: 3, chance: 10 },
          { itemId: 195, count: 4, chance: 10 },
          { itemId: 324, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 202: 5 }, reward: 1000, hrp: 25 },
          { goal: 'gathering', targets: { 202: 3 }, reward: 1500, hrp: 45 }
        ],
        bosses: []
      },
      {
        name: "The Fisherman's Tale",
        client: 'Middle-aged Fisherman',
        type: 'capture',
        goal: 'capture',
        targets: { 27: 1 },
        contract: 600,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: true,
        reward: 8500,
        ko: 2840,
        hrp: 600,
        bosses: [
          { type1: 27, type2: 0, level: 45, size: 100, min: 1, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 406, count: 1, chance: 25 },
          { itemId: 410, count: 1, chance: 23 },
          { itemId: 301, count: 1, chance: 17 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 411, count: 1, chance: 15 },
          { itemId: 300, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 27: 0 }, reward: 900, hrp: 60 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1400, hrp: 30 }
        ]
      },
      {
        name: 'Grab a Gobul',
        client: 'Trader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 28: 1 },
        contract: 800,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: true,
        reward: 8400,
        ko: 2800,
        hrp: 920,
        bosses: [
          { type1: 28, type2: 0, level: 45, size: 100, min: 1, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 360, count: 2, chance: 24 },
          { itemId: 103, count: 1, chance: 18 },
          { itemId: 414, count: 1, chance: 18 },
          { itemId: 114, count: 2, chance: 12 },
          { itemId: 117, count: 2, chance: 10 },
          { itemId: 411, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 5 },
          { itemId: 132, count: 3, chance: 5 }
        ],
        subquests: [{ goal: 'fish', targets: [28], reward: 1600, hrp: 60 }]
      },
      {
        name: '[Advanced] Fearsome Twosome',
        client: 'Head Village Guard',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 27: 2 },
        contract: 1200,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: true,
        reward: 12000,
        ko: 4000,
        hrp: 1220,
        bosses: [
          { type1: 27, type2: 0, level: 44, size: 100, min: 2, max: 10 },
          { type1: 27, type2: 1, level: 44, size: 100, min: 2, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 316, count: 15, chance: 18 },
          { itemId: 315, count: 24, chance: 18 },
          { itemId: 150, count: 2, chance: 15 },
          { itemId: 406, count: 1, chance: 12 },
          { itemId: 182, count: 5, chance: 10 },
          { itemId: 410, count: 1, chance: 10 },
          { itemId: 149, count: 3, chance: 9 },
          { itemId: 407, count: 1, chance: 8 }
        ]
      },
      {
        name: '[Advanced] Barroth Buster',
        client: 'Wounded Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 19: 1 },
        contract: 900,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: true,
        reward: 9400,
        ko: 3140,
        hrp: 1120,
        bosses: [
          { type1: 19, type2: 0, level: 48, size: 100, min: 2, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 561, count: 1, chance: 23 },
          { itemId: 406, count: 1, chance: 15 },
          { itemId: 151, count: 2, chance: 10 },
          { itemId: 316, count: 20, chance: 10 },
          { itemId: 315, count: 32, chance: 10 },
          { itemId: 407, count: 1, chance: 10 },
          { itemId: 411, count: 1, chance: 8 },
          { itemId: 332, count: 8, chance: 7 },
          { itemId: 330, count: 8, chance: 7 }
        ],
        subquests: [
          { goal: 'sever', targets: { 19: 2 }, reward: 1300, hrp: 120 },
          { goal: 'sever', targets: { 19: 1 }, reward: 1300, hrp: 120 }
        ]
      },
      {
        name: '[Advanced] Grab a Gobul',
        client: 'Seafaring Trader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 28: 1 },
        contract: 1000,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: true,
        reward: 10000,
        ko: 3340,
        hrp: 1200,
        bosses: [
          { type1: 28, type2: 0, level: 48, size: 100, min: 2, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 561, count: 1, chance: 23 },
          { itemId: 406, count: 1, chance: 15 },
          { itemId: 151, count: 2, chance: 10 },
          { itemId: 316, count: 20, chance: 10 },
          { itemId: 315, count: 32, chance: 10 },
          { itemId: 407, count: 1, chance: 10 },
          { itemId: 411, count: 1, chance: 8 },
          { itemId: 332, count: 8, chance: 7 },
          { itemId: 330, count: 8, chance: 7 }
        ]
      },
      {
        name: '[Advanced] The Jaggia Menace',
        client: 'Female Farmer',
        type: 'slay',
        goal: 'slay',
        targets: { 11: 25 },
        contract: 600,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: true,
        reward: 6000,
        ko: 2000,
        hrp: 260,
        secondaryRewards: [
          { itemId: 120, count: 2, chance: 26 },
          { itemId: 138, count: 2, chance: 20 },
          { itemId: 115, count: 1, chance: 18 },
          { itemId: 414, count: 1, chance: 13 },
          { itemId: 410, count: 1, chance: 10 },
          { itemId: 406, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'slay', targets: { 10: 10 }, reward: 2400, hrp: 200 }
        ],
        bosses: []
      },
      {
        name: 'Rumble in the Great Desert',
        client: 'Guildmaster',
        type: 'slay',
        goal: 'hunt',
        targets: { 33: 1 },
        contract: 3600,
        time: 30,
        location: Location.GREAT_DESERT,
        randomspawn: false,
        reward: 36000,
        ko: 12000,
        hrp: 2000,
        bosses: [{ type1: 33, type2: 0, level: 52, size: 100, min: 0, max: 0 }],
        secondaryRewards: [
          { itemId: 438, count: 1, chance: 25 },
          { itemId: 435, count: 1, chance: 20 },
          { itemId: 441, count: 1, chance: 14 },
          { itemId: 440, count: 1, chance: 12 },
          { itemId: 439, count: 1, chance: 10 },
          { itemId: 432, count: 1, chance: 8 },
          { itemId: 410, count: 1, chance: 7 },
          { itemId: 437, count: 1, chance: 4 }
        ]
      }
    ],
    [StarLevel.FiveStar]: [
      {
        name: 'Harvest Tour: Flooded Forest',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 20,
        ko: 7,
        hrp: 5,
        secondaryRewards: [
          { itemId: 360, count: 2, chance: 24 },
          { itemId: 103, count: 1, chance: 18 },
          { itemId: 414, count: 1, chance: 18 },
          { itemId: 114, count: 2, chance: 12 },
          { itemId: 117, count: 2, chance: 10 },
          { itemId: 411, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 5 },
          { itemId: 132, count: 3, chance: 5 }
        ],
        bosses: []
      },
      {
        name: 'Harvest Tour: Tundra',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 20,
        ko: 7,
        hrp: 5,
        secondaryRewards: [
          { itemId: 362, count: 2, chance: 27 },
          { itemId: 110, count: 1, chance: 23 },
          { itemId: 111, count: 1, chance: 15 },
          { itemId: 106, count: 1, chance: 10 },
          { itemId: 415, count: 1, chance: 10 },
          { itemId: 407, count: 1, chance: 7 },
          { itemId: 411, count: 1, chance: 5 },
          { itemId: 408, count: 1, chance: 3 }
        ],
        bosses: []
      },
      {
        name: 'Rathalos Research',
        client: 'Wyvern Researcher',
        type: 'capture',
        goal: 'capture',
        targets: { 23: 1 },
        contract: 1200,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: true,
        reward: 16000,
        ko: 5340,
        hrp: 1120,
        bosses: [
          { type1: 23, type2: 0, level: 48, size: 100, min: 2, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 407, count: 1, chance: 25 },
          { itemId: 411, count: 1, chance: 20 },
          { itemId: 406, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 14 },
          { itemId: 410, count: 1, chance: 12 },
          { itemId: 412, count: 1, chance: 6 },
          { itemId: 408, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 253: 1 }, reward: 1800, hrp: 60 },
          { goal: 'stun', targets: [23], reward: 1400, hrp: 120 }
        ]
      },
      {
        name: 'Into the Danger Zone',
        client: 'City Security Chief',
        type: 'hunt',
        goal: 'hunt',
        targets: { 24: 1 },
        contract: 1300,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: true,
        reward: 13200,
        ko: 4400,
        hrp: 1200,
        bosses: [
          { type1: 24, type2: 0, level: 48, size: 100, min: 2, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 150, count: 2, chance: 23 },
          { itemId: 149, count: 3, chance: 20 },
          { itemId: 406, count: 1, chance: 16 },
          { itemId: 316, count: 10, chance: 14 },
          { itemId: 315, count: 18, chance: 14 },
          { itemId: 407, count: 1, chance: 10 },
          { itemId: 408, count: 1, chance: 3 }
        ],
        subquests: [
          { goal: 'break', targets: { 24: 0 }, reward: 1800, hrp: 140 },
          { goal: 'sever', targets: { 24: 1 }, reward: 1800, hrp: 140 }
        ]
      },
      {
        name: 'Rotten Fish',
        client: 'Frontier Baron',
        type: 'capture',
        goal: 'capture',
        targets: { 29: 1 },
        contract: 1100,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: true,
        reward: 14900,
        ko: 4970,
        hrp: 1120,
        bosses: [
          { type1: 29, type2: 0, level: 48, size: 100, min: 2, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 407, count: 1, chance: 25 },
          { itemId: 411, count: 1, chance: 20 },
          { itemId: 406, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 14 },
          { itemId: 410, count: 1, chance: 12 },
          { itemId: 412, count: 1, chance: 6 },
          { itemId: 408, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 29: 2 }, reward: 1400, hrp: 120 },
          { goal: 'break', targets: { 29: 1 }, reward: 1400, hrp: 120 }
        ]
      },
      {
        name: 'Leader of the Icepack',
        client: 'Tundra-expedition Leader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 18: 1 },
        contract: 400,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: true,
        reward: 4200,
        ko: 1400,
        hrp: 480,
        bosses: [
          { type1: 18, type2: 0, level: 45, size: 100, min: 1, max: 12 }
        ],
        secondaryRewards: [
          { itemId: 362, count: 2, chance: 27 },
          { itemId: 110, count: 1, chance: 23 },
          { itemId: 111, count: 1, chance: 15 },
          { itemId: 106, count: 1, chance: 10 },
          { itemId: 415, count: 1, chance: 10 },
          { itemId: 407, count: 1, chance: 7 },
          { itemId: 411, count: 1, chance: 5 },
          { itemId: 408, count: 1, chance: 3 }
        ],
        subquests: [
          { goal: 'slay', targets: { 12: 10 }, reward: 2400, hrp: 150 }
        ]
      },
      {
        name: 'The Creeping Venom',
        client: 'Cocky Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 25: 1 },
        contract: 900,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: true,
        reward: 9000,
        ko: 3000,
        hrp: 960,
        bosses: [
          { type1: 25, type2: 0, level: 48, size: 100, min: 2, max: 11 }
        ],
        secondaryRewards: [
          { itemId: 561, count: 1, chance: 23 },
          { itemId: 406, count: 1, chance: 15 },
          { itemId: 151, count: 2, chance: 10 },
          { itemId: 316, count: 20, chance: 10 },
          { itemId: 315, count: 32, chance: 10 },
          { itemId: 407, count: 1, chance: 10 },
          { itemId: 411, count: 1, chance: 8 },
          { itemId: 332, count: 8, chance: 7 },
          { itemId: 330, count: 8, chance: 7 }
        ],
        subquests: [
          { goal: 'hunt', targets: { 9: 12 }, reward: 1500, hrp: 100 },
          { goal: 'eggs', count: 8, reward: 1000, hrp: 55 }
        ]
      },
      {
        name: 'Gigginox RX',
        client: 'Researcher of Medicine',
        type: 'capture',
        goal: 'capture',
        targets: { 25: 1 },
        contract: 900,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: true,
        reward: 12500,
        ko: 4170,
        hrp: 980,
        bosses: [
          { type1: 25, type2: 0, level: 48, size: 100, min: 2, max: 11 }
        ],
        secondaryRewards: [
          { itemId: 407, count: 1, chance: 25 },
          { itemId: 411, count: 1, chance: 20 },
          { itemId: 406, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 14 },
          { itemId: 410, count: 1, chance: 12 },
          { itemId: 412, count: 1, chance: 6 },
          { itemId: 408, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 25: 0 }, reward: 1400, hrp: 100 },
          { goal: 'stun', targets: [25], reward: 1400, hrp: 100 }
        ]
      },
      {
        name: 'The Lost Expedition',
        client: 'Female Geologist',
        type: 'hunt',
        goal: 'hunt',
        targets: { 26: 1 },
        contract: 1200,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: true,
        reward: 12000,
        ko: 4000,
        hrp: 1100,
        bosses: [
          { type1: 26, type2: 0, level: 48, size: 100, min: 2, max: 11 }
        ],
        secondaryRewards: [
          { itemId: 561, count: 1, chance: 23 },
          { itemId: 406, count: 1, chance: 15 },
          { itemId: 151, count: 2, chance: 10 },
          { itemId: 316, count: 20, chance: 10 },
          { itemId: 315, count: 32, chance: 10 },
          { itemId: 407, count: 1, chance: 10 },
          { itemId: 411, count: 1, chance: 8 },
          { itemId: 332, count: 8, chance: 7 },
          { itemId: 330, count: 8, chance: 7 }
        ],
        subquests: [
          { goal: 'break', targets: { 26: 1 }, reward: 1400, hrp: 120 },
          { goal: 'pitfall', targets: [26], reward: 800, hrp: 60 }
        ]
      },
      {
        name: 'Roll the Uroktor',
        client: 'Caravan Leader',
        type: 'slay',
        goal: 'slay',
        targets: { 14: 20 },
        contract: 250,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: true,
        reward: 2800,
        ko: 940,
        hrp: 150,
        secondaryRewards: [
          { itemId: 341, count: 2, chance: 25 },
          { itemId: 118, count: 1, chance: 17 },
          { itemId: 100, count: 2, chance: 15 },
          { itemId: 415, count: 2, chance: 12 },
          { itemId: 108, count: 1, chance: 10 },
          { itemId: 411, count: 1, chance: 10 },
          { itemId: 475, count: 1, chance: 8 },
          { itemId: 408, count: 1, chance: 3 }
        ],
        subquests: [
          { goal: 'slay', targets: { 16: 8 }, reward: 2400, hrp: 150 },
          { goal: 'gathering', targets: { 350: 1 }, reward: 5000, hrp: 150 }
        ],
        bosses: []
      },
      {
        name: 'Run Down a Rathalos',
        client: 'Princess of a Ruined Land',
        type: 'hunt',
        goal: 'hunt',
        targets: { 23: 1 },
        contract: 1200,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: true,
        reward: 12000,
        ko: 4000,
        hrp: 1100,
        bosses: [
          { type1: 23, type2: 0, level: 48, size: 100, min: 2, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 341, count: 2, chance: 25 },
          { itemId: 118, count: 1, chance: 17 },
          { itemId: 100, count: 2, chance: 15 },
          { itemId: 415, count: 2, chance: 12 },
          { itemId: 108, count: 1, chance: 10 },
          { itemId: 411, count: 1, chance: 10 },
          { itemId: 475, count: 1, chance: 8 },
          { itemId: 408, count: 1, chance: 3 }
        ],
        subquests: [
          { goal: 'break', targets: { 23: 0 }, reward: 1400, hrp: 120 },
          { goal: 'sever', targets: { 23: 1 }, reward: 1400, hrp: 120 }
        ]
      },
      {
        name: 'The Thrill of the Hunt',
        client: 'Scarred Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 20: 1 },
        contract: 1300,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: true,
        reward: 13200,
        ko: 4400,
        hrp: 1200,
        bosses: [
          { type1: 20, type2: 0, level: 48, size: 100, min: 2, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 561, count: 1, chance: 23 },
          { itemId: 406, count: 1, chance: 15 },
          { itemId: 151, count: 2, chance: 10 },
          { itemId: 316, count: 20, chance: 10 },
          { itemId: 315, count: 32, chance: 10 },
          { itemId: 407, count: 1, chance: 10 },
          { itemId: 411, count: 1, chance: 8 },
          { itemId: 332, count: 8, chance: 7 },
          { itemId: 330, count: 8, chance: 7 }
        ],
        subquests: [
          { goal: 'sever', targets: { 20: 1 }, reward: 1800, hrp: 140 }
        ]
      },
      {
        name: 'The Molten Monstrosity',
        client: 'Fire Country Chieftain',
        type: 'hunt',
        goal: 'hunt',
        targets: { 30: 1 },
        contract: 1350,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: true,
        reward: 13800,
        ko: 4600,
        hrp: 1240,
        bosses: [
          { type1: 30, type2: 0, level: 48, size: 100, min: 2, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 561, count: 1, chance: 23 },
          { itemId: 406, count: 1, chance: 15 },
          { itemId: 151, count: 2, chance: 10 },
          { itemId: 316, count: 20, chance: 10 },
          { itemId: 315, count: 32, chance: 10 },
          { itemId: 407, count: 1, chance: 10 },
          { itemId: 411, count: 1, chance: 8 },
          { itemId: 332, count: 8, chance: 7 },
          { itemId: 330, count: 8, chance: 7 }
        ],
        subquests: [
          { goal: 'break', targets: { 30: 2 }, reward: 1800, hrp: 140 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 2700, hrp: 70 }
        ]
      },
      {
        name: 'Agnaktor Alert',
        client: 'Guild Observation Post',
        type: 'capture',
        goal: 'capture',
        targets: { 30: 1 },
        contract: 1350,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: true,
        reward: 17800,
        ko: 5940,
        hrp: 1260,
        bosses: [
          { type1: 30, type2: 0, level: 48, size: 100, min: 2, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 407, count: 1, chance: 25 },
          { itemId: 411, count: 1, chance: 20 },
          { itemId: 406, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 14 },
          { itemId: 410, count: 1, chance: 12 },
          { itemId: 412, count: 1, chance: 6 },
          { itemId: 408, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 30: 3 }, reward: 1800, hrp: 140 },
          { goal: 'sever', targets: { 30: 1 }, reward: 1800, hrp: 140 }
        ]
      },
      {
        name: '[Advanced] Run Down Rathalos',
        client: 'Princess of a Ruined Land',
        type: 'hunt',
        goal: 'hunt',
        targets: { 23: 1 },
        contract: 1400,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: true,
        reward: 14000,
        ko: 4670,
        hrp: 1430,
        bosses: [
          { type1: 23, type2: 0, level: 50, size: 100, min: 2, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 561, count: 1, chance: 24 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 109, count: 1, chance: 13 },
          { itemId: 408, count: 1, chance: 12 },
          { itemId: 411, count: 1, chance: 10 },
          { itemId: 108, count: 1, chance: 10 },
          { itemId: 406, count: 1, chance: 8 },
          { itemId: 412, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'break', targets: { 23: 0 }, reward: 1800, hrp: 140 },
          { goal: 'sever', targets: { 23: 1 }, reward: 1800, hrp: 140 }
        ]
      },
      {
        name: '[Advanced] Lick a Lagiacrus',
        client: 'Frontier Baron',
        type: 'hunt',
        goal: 'hunt',
        targets: { 29: 1 },
        contract: 1300,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: true,
        reward: 13150,
        ko: 4390,
        hrp: 1430,
        bosses: [
          { type1: 29, type2: 0, level: 50, size: 100, min: 2, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 561, count: 1, chance: 24 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 109, count: 1, chance: 13 },
          { itemId: 408, count: 1, chance: 12 },
          { itemId: 411, count: 1, chance: 10 },
          { itemId: 108, count: 1, chance: 10 },
          { itemId: 406, count: 1, chance: 8 },
          { itemId: 412, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'break', targets: { 29: 0 }, reward: 1800, hrp: 140 },
          { goal: 'break', targets: { 29: 2 }, reward: 1800, hrp: 140 }
        ]
      },
      {
        name: '[Advanced] Bump Off Barioth',
        client: 'Spoiled Princess',
        type: 'hunt',
        goal: 'hunt',
        targets: { 26: 1 },
        contract: 1400,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: true,
        reward: 14000,
        ko: 4670,
        hrp: 1430,
        bosses: [
          { type1: 26, type2: 0, level: 50, size: 100, min: 2, max: 11 }
        ],
        secondaryRewards: [
          { itemId: 561, count: 1, chance: 24 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 109, count: 1, chance: 13 },
          { itemId: 408, count: 1, chance: 12 },
          { itemId: 411, count: 1, chance: 10 },
          { itemId: 108, count: 1, chance: 10 },
          { itemId: 406, count: 1, chance: 8 },
          { itemId: 412, count: 1, chance: 8 }
        ]
      },
      {
        name: '[Advanced] Heroes Wanted',
        client: 'Fire Country Princess',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 20: 2 },
        contract: 3000,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: true,
        reward: 30000,
        ko: 10000,
        hrp: 2500,
        bosses: [
          { type1: 20, type2: 1, level: 58, size: 100, min: 0, max: 10 },
          { type1: 20, type2: 2, level: 58, size: 100, min: 0, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 561, count: 1, chance: 24 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 109, count: 1, chance: 13 },
          { itemId: 408, count: 1, chance: 12 },
          { itemId: 411, count: 1, chance: 10 },
          { itemId: 108, count: 1, chance: 10 },
          { itemId: 406, count: 1, chance: 8 },
          { itemId: 412, count: 1, chance: 8 }
        ]
      },
      {
        name: 'Double Trouble',
        client: 'Head of Island Guard',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 22: 1, 23: 1 },
        contract: 1950,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: true,
        reward: 19800,
        ko: 6600,
        hrp: 1560,
        bosses: [
          { type1: 22, type2: 0, level: 54, size: 100, min: 0, max: 10 },
          { type1: 23, type2: 1, level: 54, size: 100, min: 0, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 164, count: 1, chance: 24 },
          { itemId: 163, count: 1, chance: 20 },
          { itemId: 256, count: 1, chance: 18 },
          { itemId: 162, count: 1, chance: 9 },
          { itemId: 330, count: 5, chance: 8 },
          { itemId: 158, count: 1, chance: 8 },
          { itemId: 408, count: 1, chance: 8 },
          { itemId: 561, count: 1, chance: 5 }
        ]
      }
    ],
    [StarLevel.SixStar]: [
      {
        name: 'Deep-six a Deviljho',
        client: 'Ex-Hunter Merchant',
        type: 'hunt',
        goal: 'hunt',
        targets: { 32: 1 },
        contract: 1800,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: true,
        reward: 18000,
        ko: 6000,
        hrp: 1800,
        bosses: [
          { type1: 32, type2: 0, level: 52, size: 100, min: 0, max: 13 }
        ],
        secondaryRewards: [
          { itemId: 361, count: 2, chance: 27 },
          { itemId: 116, count: 1, chance: 20 },
          { itemId: 137, count: 1, chance: 18 },
          { itemId: 414, count: 1, chance: 12 },
          { itemId: 410, count: 1, chance: 10 },
          { itemId: 406, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 5 }
        ]
      },
      {
        name: 'Bedevil a Deviljho',
        client: 'Borderlands Sentry',
        type: 'hunt',
        goal: 'hunt',
        targets: { 32: 1 },
        contract: 1800,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: true,
        reward: 18000,
        ko: 6000,
        hrp: 1800,
        bosses: [
          { type1: 32, type2: 0, level: 52, size: 100, min: 0, max: 13 }
        ],
        secondaryRewards: [
          { itemId: 360, count: 2, chance: 24 },
          { itemId: 103, count: 1, chance: 18 },
          { itemId: 414, count: 1, chance: 18 },
          { itemId: 114, count: 2, chance: 12 },
          { itemId: 117, count: 2, chance: 10 },
          { itemId: 411, count: 1, chance: 8 },
          { itemId: 407, count: 1, chance: 5 },
          { itemId: 132, count: 3, chance: 5 }
        ]
      },
      {
        name: 'Into the Fire',
        client: 'Fire Country Chieftain',
        type: 'hunt',
        goal: 'hunt',
        targets: { 32: 1 },
        contract: 1800,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: true,
        reward: 18000,
        ko: 6000,
        hrp: 1800,
        bosses: [
          { type1: 32, type2: 0, level: 52, size: 100, min: 0, max: 13 }
        ],
        secondaryRewards: [
          { itemId: 341, count: 2, chance: 25 },
          { itemId: 118, count: 1, chance: 17 },
          { itemId: 100, count: 2, chance: 15 },
          { itemId: 415, count: 2, chance: 12 },
          { itemId: 108, count: 1, chance: 10 },
          { itemId: 411, count: 1, chance: 10 },
          { itemId: 475, count: 1, chance: 8 },
          { itemId: 408, count: 1, chance: 3 }
        ]
      },
      {
        name: 'Double Trouble',
        client: 'Head of Island Guard',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 22: 1, 23: 1 },
        contract: 2200,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: true,
        reward: 22000,
        ko: 7340,
        hrp: 1940,
        bosses: [
          { type1: 22, type2: 0, level: 53, size: 100, min: 0, max: 10 },
          { type1: 23, type2: 1, level: 53, size: 100, min: 0, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 157, count: 1, chance: 22 },
          { itemId: 164, count: 1, chance: 18 },
          { itemId: 158, count: 1, chance: 12 },
          { itemId: 569, count: 1, chance: 10 },
          { itemId: 159, count: 1, chance: 10 },
          { itemId: 408, count: 1, chance: 10 },
          { itemId: 412, count: 1, chance: 8 },
          { itemId: 161, count: 1, chance: 5 },
          { itemId: 160, count: 1, chance: 5 }
        ]
      },
      {
        name: "The Princess's Pride",
        client: 'Spoiled Princess',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 24: 2 },
        contract: 2600,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: true,
        reward: 26000,
        ko: 8670,
        hrp: 2400,
        bosses: [
          { type1: 24, type2: 0, level: 53, size: 100, min: 0, max: 10 },
          { type1: 24, type2: 1, level: 53, size: 100, min: 0, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 422, count: 1, chance: 24 },
          { itemId: 561, count: 3, chance: 20 },
          { itemId: 423, count: 1, chance: 16 },
          { itemId: 408, count: 1, chance: 12 },
          { itemId: 412, count: 1, chance: 10 },
          { itemId: 169, count: 1, chance: 9 },
          { itemId: 421, count: 1, chance: 8 },
          { itemId: 569, count: 1, chance: 1 }
        ]
      },
      {
        name: 'A Sea of Dragons',
        client: 'City Guild Representative',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 29: 1, 28: 1 },
        contract: 1950,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: true,
        reward: 19800,
        ko: 6600,
        hrp: 2020,
        bosses: [
          { type1: 29, type2: 1, level: 53, size: 100, min: 0, max: 10 },
          { type1: 28, type2: 1, level: 53, size: 100, min: 0, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 465, count: 1, chance: 20 },
          { itemId: 464, count: 1, chance: 17 },
          { itemId: 286, count: 1, chance: 15 },
          { itemId: 390, count: 1, chance: 12 },
          { itemId: 408, count: 1, chance: 12 },
          { itemId: 561, count: 3, chance: 10 },
          { itemId: 412, count: 1, chance: 8 },
          { itemId: 469, count: 1, chance: 5 },
          { itemId: 569, count: 1, chance: 1 }
        ]
      },
      {
        name: 'Tragedy on the Tundra',
        client: 'Troop Captain',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 26: 2 },
        contract: 2400,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: true,
        reward: 24000,
        ko: 8000,
        hrp: 2200,
        bosses: [
          { type1: 26, type2: 1, level: 53, size: 100, min: 0, max: 11 },
          { type1: 26, type2: 2, level: 53, size: 100, min: 0, max: 11 }
        ],
        secondaryRewards: [
          { itemId: 418, count: 2, chance: 22 },
          { itemId: 417, count: 1, chance: 18 },
          { itemId: 420, count: 1, chance: 15 },
          { itemId: 561, count: 3, chance: 12 },
          { itemId: 376, count: 1, chance: 10 },
          { itemId: 408, count: 1, chance: 10 },
          { itemId: 412, count: 1, chance: 7 },
          { itemId: 169, count: 1, chance: 5 },
          { itemId: 569, count: 1, chance: 1 }
        ]
      },
      {
        name: 'A Burnt Offering',
        client: 'Fire Country Princess',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 30: 1, 20: 1 },
        contract: 2700,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: true,
        reward: 27000,
        ko: 9000,
        hrp: 2440,
        bosses: [
          { type1: 30, type2: 0, level: 53, size: 100, min: 0, max: 10 },
          { type1: 20, type2: 1, level: 53, size: 100, min: 0, max: 10 }
        ],
        secondaryRewards: [
          { itemId: 386, count: 2, chance: 20 },
          { itemId: 380, count: 1, chance: 18 },
          { itemId: 379, count: 1, chance: 14 },
          { itemId: 408, count: 1, chance: 12 },
          { itemId: 561, count: 3, chance: 10 },
          { itemId: 412, count: 1, chance: 10 },
          { itemId: 447, count: 1, chance: 8 },
          { itemId: 169, count: 1, chance: 7 },
          { itemId: 569, count: 1, chance: 1 }
        ]
      },
      {
        name: 'The Brilliant Darkness',
        client: 'Desert Mayor',
        type: 'slay',
        goal: 'hunt',
        targets: { 34: 1 },
        contract: 3600,
        time: 50,
        location: Location.SACRED_LAND,
        randomspawn: true,
        reward: 36000,
        ko: 12000,
        hrp: 2800,
        bosses: [{ type1: 34, type2: 0, level: 52, size: 100, min: 0, max: 0 }],
        secondaryRewards: [
          { itemId: 561, count: 1, chance: 24 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 109, count: 1, chance: 13 },
          { itemId: 408, count: 1, chance: 12 },
          { itemId: 411, count: 1, chance: 10 },
          { itemId: 108, count: 1, chance: 10 },
          { itemId: 406, count: 1, chance: 8 },
          { itemId: 412, count: 1, chance: 8 }
        ]
      }
    ]
  },
  /**
   * ! Incomplete
   */
  arena: [
    {
      name: 'Grudge Match: Royal Ludroth',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 27: 1 },
      contract: 0,
      time: 50,
      location: Location.WATER_ARENA,
      randomspawn: false,
      reward: 1000,
      ko: 200,
      hrp: 0,
      bosses: [{ type1: 27, type2: 0, level: 23, size: 100, min: 0, max: 0 }]
    },
    {
      name: 'Grudge Match: Rathian',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 22: 1 },
      contract: 0,
      time: 50,
      location: Location.LAND_ARENA,
      randomspawn: false,
      reward: 1000,
      ko: 200,
      hrp: 0,
      bosses: [{ type1: 22, type2: 0, level: 26, size: 100, min: 0, max: 0 }]
    },
    {
      name: 'Grudge Match: Uragaan',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 20: 1 },
      contract: 0,
      time: 50,
      location: Location.LAND_ARENA,
      randomspawn: false,
      reward: 1500,
      ko: 220,
      hrp: 0,
      bosses: [{ type1: 20, type2: 0, level: 23, size: 100, min: 0, max: 0 }]
    },
    {
      name: 'Grudge Match: Bird and Brute',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 21: 1, 19: 1 },
      contract: 0,
      time: 50,
      location: Location.LAND_ARENA,
      randomspawn: false,
      reward: 1000,
      ko: 200,
      hrp: 0,
      bosses: [
        { type1: 21, type2: 0, level: 55, size: 100, min: 0, max: 0 },
        { type1: 19, type2: 0, level: 55, size: 100, min: 0, max: 0 }
      ]
    },
    {
      name: 'Grudge Match: Ice and Fire',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 26: 1, 30: 1 },
      contract: 0,
      time: 50,
      location: Location.LAND_ARENA,
      randomspawn: false,
      reward: 1500,
      ko: 220,
      hrp: 0,
      bosses: [
        { type1: 26, type2: 0, level: 55, size: 100, min: 0, max: 0 },
        { type1: 30, type2: 0, level: 55, size: 100, min: 0, max: 0 }
      ]
    }
  ],
  /**
   * ! Incomplete
   */
  events: [
    {
      name: 'Jump Four Jaggi',
      client: 'Guild Subcontractor',
      type: 'hunt',
      goal: 'hunt',
      targets: { 17: 4 },
      contract: 400,
      time: 50,
      location: Location.SANDY_PLAINS,
      randomspawn: false,
      reward: 4000,
      ko: 1340,
      hrp: 440,
      bosses: [{ type1: 17, type2: 0, level: 23, size: 100, min: 1, max: 3 }],
      secondaryRewards: [
        { itemId: 406, count: 1, chance: 35 },
        { itemId: 301, count: 1, chance: 25 },
        { itemId: 300, count: 1, chance: 20 },
        { itemId: 407, count: 1, chance: 15 },
        { itemId: 413, count: 1, chance: 5 }
      ],
      subquests: [{ goal: 'hunt', targets: { 17: 2 }, reward: 4000, hrp: 440 }]
    },
    {
      name: 'Blood Sport',
      client: 'Spoiled Princess',
      type: 'multihunt',
      goal: 'hunt',
      targets: { 24: 1, 20: 1 },
      contract: 1750,
      time: 50,
      location: Location.LAND_ARENA,
      randomspawn: false,
      reward: 17600,
      ko: 5870,
      hrp: 1760,
      bosses: [
        { type1: 24, type2: 0, level: 40, size: 100, min: 0, max: 9 },
        { type1: 20, type2: 0, level: 40, size: 100, min: 0, max: 9 }
      ],
      secondaryRewards: [
        { itemId: 558, count: 1, chance: 25 },
        { itemId: 269, count: 1, chance: 20 },
        { itemId: 270, count: 1, chance: 14 },
        { itemId: 354, count: 1, chance: 12 },
        { itemId: 378, count: 1, chance: 10 },
        { itemId: 421, count: 1, chance: 9 },
        { itemId: 380, count: 1, chance: 9 },
        { itemId: 445, count: 1, chance: 1 }
      ]
    },
    {
      name: 'Marine Warfare',
      client: 'Guild Weapons Development',
      type: 'multihunt',
      goal: 'hunt',
      targets: { 28: 2 },
      contract: 1650,
      time: 50,
      location: Location.WATER_ARENA,
      randomspawn: false,
      reward: 16800,
      ko: 5600,
      hrp: 1480,
      bosses: [
        { type1: 28, type2: 0, level: 54, size: 100, min: 0, max: 10 },
        { type1: 28, type2: 1, level: 54, size: 100, min: 0, max: 10 }
      ],
      secondaryRewards: [
        { itemId: 150, count: 2, chance: 23 },
        { itemId: 149, count: 3, chance: 20 },
        { itemId: 406, count: 1, chance: 16 },
        { itemId: 316, count: 10, chance: 14 },
        { itemId: 315, count: 18, chance: 14 },
        { itemId: 407, count: 1, chance: 10 },
        { itemId: 408, count: 1, chance: 3 }
      ]
    },
    {
      name: 'Hot Deal',
      client: 'Shady Merchant',
      type: 'hunt',
      goal: 'hunt',
      targets: { 30: 2 },
      contract: 2750,
      time: 50,
      location: Location.VOLCANO,
      randomspawn: true,
      reward: 13800,
      ko: 4600,
      hrp: 1240,
      bosses: [{ type1: 30, type2: 0, level: 57, size: 100, min: 0, max: 10 }],
      secondaryRewards: [
        { itemId: 524, count: 1, chance: 25 },
        { itemId: 472, count: 1, chance: 20 },
        { itemId: 386, count: 1, chance: 18 },
        { itemId: 561, count: 1, chance: 12 },
        { itemId: 473, count: 1, chance: 12 },
        { itemId: 471, count: 1, chance: 8 },
        { itemId: 475, count: 1, chance: 5 }
      ],
      subquests: [
        { goal: 'hunt', targets: { 30: 1 }, reward: 13800, hrp: 1240 }
      ]
    },
    {
      name: 'Fiery Skies, Frozen Fields',
      client: 'Deserted Island Maiden',
      type: 'multihunt',
      goal: 'hunt',
      targets: { 26: 1, 23: 1 },
      contract: 4200,
      time: 50,
      location: Location.LAND_ARENA,
      randomspawn: false,
      reward: 42000,
      ko: 14000,
      hrp: 4290,
      bosses: [
        { type1: 26, type2: 0, level: 60, size: 100, min: 0, max: 11 },
        { type1: 23, type2: 0, level: 59, size: 100, min: 0, max: 10 }
      ],
      secondaryRewards: [
        { itemId: 164, count: 2, chance: 25 },
        { itemId: 417, count: 2, chance: 24 },
        { itemId: 411, count: 2, chance: 17 },
        { itemId: 412, count: 1, chance: 15 },
        { itemId: 161, count: 1, chance: 10 },
        { itemId: 169, count: 1, chance: 9 }
      ]
    }
  ]
});