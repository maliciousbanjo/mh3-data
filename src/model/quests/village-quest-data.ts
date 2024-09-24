import { QuestRegion, Location, StarLevel } from './types';

export const VillageQuestData = Object.freeze<QuestRegion>({
  name: 'Village',
  starLevels: {
    [StarLevel.OneStar]: [
      {
        name: "Harvest 'Shroom",
        client: 'Clan Matriarch',
        type: 'gather',
        goal: 'gathering',
        targets: { 141: 5 },
        contract: 0,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 500,
        ko: 170,
        hrp: 0,
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
          { goal: 'gathering', targets: { 370: 2 }, reward: 500, hrp: 0 },
          { goal: 'gathering', targets: { 140: 1 }, reward: 500, hrp: 0 }
        ],
        bosses: []
      },
      {
        name: 'Prescription Pick-up',
        client: 'Medicine Man',
        type: 'gather',
        goal: 'gathering',
        targets: { 310: 2 },
        contract: 100,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 600,
        ko: 200,
        hrp: 0,
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [{ goal: 'slay', targets: { 1: 5 }, reward: 500, hrp: 0 }],
        bosses: []
      },
      {
        name: 'Goldenfish Opportunity',
        client: 'Fish Fanboy',
        type: 'gather',
        goal: 'gathering',
        targets: { 203: 3 },
        contract: 150,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 1500,
        ko: 500,
        hrp: 0,
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
          { goal: 'gathering', targets: { 202: 2 }, reward: 600, hrp: 0 }
        ],
        bosses: []
      },
      {
        name: 'Farm Aid',
        client: 'Old Farmer',
        type: 'hunt',
        goal: 'slay',
        targets: { 11: 5 },
        contract: 100,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 800,
        ko: 270,
        hrp: 0,
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [{ goal: 'slay', targets: { 10: 10 }, reward: 600, hrp: 0 }],
        bosses: []
      },
      {
        name: "Guts: It's What's for Dinner",
        client: 'Manor Cook',
        type: 'gather',
        goal: 'gathering',
        targets: { 397: 3 },
        contract: 100,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 800,
        ko: 270,
        hrp: 0,
        bosses: [{ type1: 29, type2: 0, level: 9, size: 100, min: 0, max: 0 }],
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ]
      },
      {
        name: 'Sunken Treasures',
        client: 'Lovesick Kid',
        type: 'gather',
        goal: 'gathering',
        targets: { 398: 8 },
        contract: 100,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 600,
        ko: 200,
        hrp: 0,
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [{ goal: 'slay', targets: { 8: 3 }, reward: 600, hrp: 0 }],
        bosses: []
      }
    ],
    [StarLevel.TwoStar]: [
      {
        name: 'Bug Hunt',
        client: 'Brainy Biologist',
        type: 'hunt',
        goal: 'slay',
        targets: { 5: 12 },
        contract: 100,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 600,
        ko: 200,
        hrp: 0,
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
          { goal: 'gathering', targets: { 370: 2 }, reward: 550, hrp: 0 },
          { goal: 'gathering', targets: { 140: 1 }, reward: 550, hrp: 0 }
        ],
        bosses: []
      },
      {
        name: 'Secret of the Crystal Bones',
        client: 'Archeologist',
        type: 'gather',
        goal: 'gathering',
        targets: { 364: 4 },
        contract: 100,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 600,
        ko: 200,
        hrp: 0,
        secondaryRewards: [
          { itemId: 150, count: 1, chance: 20 },
          { itemId: 316, count: 8, chance: 18 },
          { itemId: 315, count: 12, chance: 18 },
          { itemId: 149, count: 2, chance: 17 },
          { itemId: 300, count: 1, chance: 12 },
          { itemId: 182, count: 4, chance: 10 },
          { itemId: 406, count: 1, chance: 5 }
        ],
        subquests: [{ goal: 'slay', targets: { 0: 4 }, reward: 200, hrp: 0 }],
        bosses: []
      },
      {
        name: 'No Guts, No Glory',
        client: 'Caravan Leader',
        type: 'gather',
        goal: 'gathering',
        targets: { 397: 3 },
        contract: 100,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 800,
        ko: 270,
        hrp: 0,
        secondaryRewards: [
          { itemId: 123, count: 2, chance: 26 },
          { itemId: 131, count: 2, chance: 22 },
          { itemId: 144, count: 1, chance: 14 },
          { itemId: 361, count: 1, chance: 12 },
          { itemId: 137, count: 1, chance: 10 },
          { itemId: 116, count: 1, chance: 8 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [{ goal: 'slay', targets: { 15: 8 }, reward: 800, hrp: 0 }],
        bosses: []
      },
      {
        name: 'Big Game Hunting',
        client: 'Head Village Guard',
        type: 'hunt',
        goal: 'hunt',
        targets: { 17: 1 },
        contract: 100,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 1000,
        ko: 340,
        hrp: 0,
        bosses: [{ type1: 17, type2: 0, level: 3, size: 100, min: 1, max: 6 }],
        secondaryRewards: [
          { itemId: 149, count: 1, chance: 30 },
          { itemId: 315, count: 8, chance: 26 },
          { itemId: 182, count: 2, chance: 20 },
          { itemId: 245, count: 3, chance: 16 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'break', targets: { 17: 0 }, reward: 300, hrp: 0 },
          { goal: 'stun', targets: [17], reward: 300, hrp: 0 }
        ]
      },
      {
        name: "Who's the Boss?",
        client: 'Brainy Biologist',
        type: 'capture',
        goal: 'capture',
        targets: { 17: 1 },
        contract: 100,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 2000,
        ko: 670,
        hrp: 0,
        bosses: [{ type1: 17, type2: 0, level: 3, size: 100, min: 1, max: 6 }],
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
          { goal: 'slay', targets: { 11: 3 }, reward: 550, hrp: 0 },
          { goal: 'slay', targets: { 10: 10 }, reward: 650, hrp: 0 }
        ]
      },
      {
        name: 'No Love for Ludroth',
        client: 'Ex-Caravan Sentry',
        type: 'hunt',
        goal: 'slay',
        targets: { 13: 6 },
        contract: 100,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 700,
        ko: 240,
        hrp: 0,
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
      }
    ],
    [StarLevel.ThreeStar]: [
      {
        name: 'Rhenoplos Rampage!',
        client: 'Bandaged Boy',
        type: 'hunt',
        goal: 'slay',
        targets: { 16: 6 },
        contract: 100,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 900,
        ko: 300,
        hrp: 0,
        secondaryRewards: [
          { itemId: 149, count: 1, chance: 30 },
          { itemId: 315, count: 8, chance: 26 },
          { itemId: 182, count: 2, chance: 20 },
          { itemId: 245, count: 3, chance: 16 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'gathering', targets: { 364: 4 }, reward: 800, hrp: 0 }
        ],
        bosses: []
      },
      {
        name: 'Herbivore Egg Hunt!',
        client: 'Newlywed Wife',
        type: 'gather',
        goal: 'gathering',
        targets: { 363: 2 },
        contract: 100,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 1000,
        ko: 340,
        hrp: 0,
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
          { goal: 'gathering', targets: { 363: 1 }, reward: 1000, hrp: 0 },
          { goal: 'slay', targets: { 11: 5 }, reward: 900, hrp: 0 }
        ],
        bosses: []
      },
      {
        name: 'Pest Control',
        client: 'Cattle Rancher',
        type: 'hunt',
        goal: 'slay',
        targets: { 4: 12 },
        contract: 100,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 800,
        ko: 270,
        hrp: 0,
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
          { goal: 'gathering', targets: { 119: 3 }, reward: 800, hrp: 0 }
        ],
        bosses: []
      },
      {
        name: 'The Deadliest Catch',
        client: 'Flooded Forest Guardsman',
        type: 'hunt',
        goal: 'slay',
        targets: { 13: 7 },
        contract: 100,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 800,
        ko: 270,
        hrp: 0,
        secondaryRewards: [
          { itemId: 114, count: 1, chance: 24 },
          { itemId: 132, count: 2, chance: 20 },
          { itemId: 360, count: 1, chance: 18 },
          { itemId: 190, count: 2, chance: 14 },
          { itemId: 300, count: 1, chance: 12 },
          { itemId: 117, count: 1, chance: 8 },
          { itemId: 406, count: 1, chance: 4 }
        ],
        subquests: [{ goal: 'slay', targets: { 8: 3 }, reward: 600, hrp: 0 }],
        bosses: []
      },
      {
        name: 'Playing with Fire',
        client: 'Red-cheeked Huntress',
        type: 'hunt',
        goal: 'hunt',
        targets: { 21: 1 },
        contract: 150,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 1800,
        ko: 600,
        hrp: 0,
        bosses: [{ type1: 21, type2: 0, level: 5, size: 100, min: 1, max: 6 }],
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
          { goal: 'pitfall', targets: [21], reward: 200, hrp: 0 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 800, hrp: 0 }
        ]
      },
      {
        name: 'Trapping a Trickster',
        client: 'Newbie Hunter',
        type: 'capture',
        goal: 'capture',
        targets: { 21: 1 },
        contract: 150,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 3600,
        ko: 1200,
        hrp: 0,
        bosses: [{ type1: 21, type2: 0, level: 5, size: 100, min: 1, max: 6 }],
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
          { goal: 'break', targets: { 21: 0 }, reward: 400, hrp: 0 },
          { goal: 'break', targets: { 21: 1 }, reward: 400, hrp: 0 }
        ]
      },
      {
        name: 'Save Our Boat',
        client: 'Fleet Captain',
        type: 'hunt',
        goal: 'hunt',
        targets: { 27: 1 },
        contract: 200,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 2000,
        ko: 670,
        hrp: 0,
        bosses: [{ type1: 27, type2: 0, level: 5, size: 100, min: 1, max: 6 }],
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
          { goal: 'gathering', targets: { 253: 1 }, reward: 800, hrp: 0 },
          { goal: 'slay', targets: { 13: 5 }, reward: 600, hrp: 0 }
        ]
      },
      {
        name: 'Leading the Charge',
        client: 'Brainy Biologist',
        type: 'hunt',
        goal: 'hunt',
        targets: { 19: 1 },
        contract: 250,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 2600,
        ko: 870,
        hrp: 0,
        bosses: [{ type1: 19, type2: 0, level: 5, size: 100, min: 1, max: 6 }],
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
          { goal: 'sever', targets: { 19: 1 }, reward: 500, hrp: 0 },
          { goal: 'anthill', count: 2, reward: 500, hrp: 0 }
        ]
      },
      {
        name: 'A Royal Pain',
        client: "The Lord's Beloved Daughter",
        type: 'capture',
        goal: 'capture',
        targets: { 27: 1 },
        contract: 200,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 4000,
        ko: 1340,
        hrp: 0,
        bosses: [{ type1: 27, type2: 0, level: 5, size: 100, min: 1, max: 6 }],
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
          { goal: 'break', targets: { 27: 1 }, reward: 400, hrp: 0 },
          { goal: 'sever', targets: { 27: 1 }, reward: 400, hrp: 0 }
        ]
      },
      {
        name: 'Shakalaka Savior!',
        client: 'Carefree Lad',
        type: 'escort',
        goal: 'slay',
        targets: { 10: 8 },
        contract: 0,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 60,
        ko: 20,
        hrp: 0,
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
          { goal: 'slay', targets: { 13: 3 }, reward: 0, hrp: 0 },
          { goal: 'slay', targets: { 11: 4 }, reward: 0, hrp: 0 }
        ],
        bosses: []
      }
    ],
    [StarLevel.FourStar]: [
      {
        name: 'Lost in Blue',
        client: 'Tundra-expedition Member',
        type: 'slay',
        goal: 'slay',
        targets: { 12: 20 },
        contract: 100,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 900,
        ko: 300,
        hrp: 0,
        secondaryRewards: [
          { itemId: 149, count: 1, chance: 30 },
          { itemId: 315, count: 8, chance: 26 },
          { itemId: 182, count: 2, chance: 20 },
          { itemId: 245, count: 3, chance: 16 },
          { itemId: 300, count: 1, chance: 8 }
        ],
        bosses: []
      },
      {
        name: 'Leader of the Icepack',
        client: 'Tundra-expedition Leader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 18: 1 },
        contract: 100,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 1400,
        ko: 470,
        hrp: 0,
        bosses: [{ type1: 18, type2: 0, level: 7, size: 100, min: 1, max: 8 }],
        secondaryRewards: [
          { itemId: 149, count: 2, chance: 32 },
          { itemId: 315, count: 8, chance: 27 },
          { itemId: 182, count: 3, chance: 18 },
          { itemId: 406, count: 1, chance: 10 },
          { itemId: 301, count: 1, chance: 8 },
          { itemId: 300, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 18: 0 }, reward: 400, hrp: 0 },
          { goal: 'stun', targets: [18], reward: 400, hrp: 0 }
        ]
      },
      {
        name: 'Cold Stones',
        client: 'Female Geologist',
        type: 'gather',
        goal: 'gathering',
        targets: { 395: 8 },
        contract: 100,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 900,
        ko: 300,
        hrp: 0,
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
          { goal: 'gathering', targets: { 509: 3 }, reward: 600, hrp: 0 },
          { goal: 'light', targets: [5], reward: 300, hrp: 0 }
        ],
        bosses: []
      },
      {
        name: 'Hunter Killer',
        client: 'Wounded Hunter',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 19: 1, 17: 1 },
        contract: 350,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 3800,
        ko: 1270,
        hrp: 0,
        bosses: [
          { type1: 19, type2: 0, level: 7, size: 100, min: 1, max: 6 },
          { type1: 17, type2: 0, level: 7, size: 100, min: 1, max: 6 },
          { type1: 21, type2: 0, level: 7, size: 100, min: 1, max: 6 }
        ],
        secondaryRewards: [
          { itemId: 131, count: 1, chance: 20 },
          { itemId: 116, count: 1, chance: 16 },
          { itemId: 406, count: 1, chance: 14 },
          { itemId: 359, count: 1, chance: 12 },
          { itemId: 301, count: 1, chance: 12 },
          { itemId: 407, count: 1, chance: 10 },
          { itemId: 137, count: 1, chance: 8 },
          { itemId: 413, count: 1, chance: 8 }
        ]
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
        reward: 15,
        ko: 5,
        hrp: 0,
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
        name: 'Harvest Tour: Flooded Forest',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 15,
        ko: 5,
        hrp: 0,
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
        name: 'Dragon Lady',
        client: 'Village Protector',
        type: 'hunt',
        goal: 'hunt',
        targets: { 22: 1 },
        contract: 250,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 2800,
        ko: 940,
        hrp: 0,
        bosses: [{ type1: 22, type2: 0, level: 7, size: 100, min: 1, max: 6 }],
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
          { goal: 'sever', targets: { 22: 1 }, reward: 600, hrp: 0 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1000, hrp: 0 }
        ]
      },
      {
        name: 'The Creeping Venom',
        client: 'Cocky Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 25: 1 },
        contract: 300,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 3400,
        ko: 1140,
        hrp: 0,
        bosses: [{ type1: 25, type2: 0, level: 7, size: 100, min: 1, max: 7 }],
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
          { goal: 'slay', targets: { 9: 10 }, reward: 500, hrp: 0 },
          { goal: 'eggs', count: 5, reward: 500, hrp: 0 }
        ]
      },
      {
        name: 'A Royal Rumble',
        client: 'Middle-aged Knight',
        type: 'capture',
        goal: 'capture',
        targets: { 22: 1 },
        contract: 250,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 5600,
        ko: 1870,
        hrp: 0,
        bosses: [{ type1: 22, type2: 0, level: 7, size: 100, min: 1, max: 6 }],
        secondaryRewards: [
          { itemId: 406, count: 1, chance: 35 },
          { itemId: 301, count: 1, chance: 25 },
          { itemId: 300, count: 1, chance: 20 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 413, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 22: 0 }, reward: 600, hrp: 0 },
          { goal: 'sever', targets: { 22: 1 }, reward: 600, hrp: 0 }
        ]
      },
      {
        name: 'Poached Wyvern Eggs',
        client: 'Royal Cook',
        type: 'gather',
        goal: 'gathering',
        targets: { 136: 2 },
        contract: 200,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 2000,
        ko: 670,
        hrp: 0,
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
          { goal: 'gathering', targets: { 136: 1 }, reward: 2000, hrp: 0 }
        ],
        bosses: []
      },
      {
        name: 'Accident Investigation',
        client: 'Trader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 28: 1 },
        contract: 300,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 3000,
        ko: 1000,
        hrp: 0,
        bosses: [{ type1: 28, type2: 0, level: 7, size: 100, min: 0, max: 6 }],
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
          { goal: 'break', targets: { 28: 0 }, reward: 600, hrp: 0 },
          { goal: 'fish', targets: [28], reward: 800, hrp: 0 }
        ]
      }
    ],
    [StarLevel.FiveStar]: [
      {
        name: 'Best the Lava Beasts!',
        client: 'Caravan Leader',
        type: 'slay',
        goal: 'slay',
        targets: { 14: 7 },
        contract: 100,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: false,
        reward: 900,
        ko: 300,
        hrp: 0,
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
        subquests: [{ goal: 'slay', targets: { 16: 5 }, reward: 600, hrp: 0 }],
        bosses: []
      },
      {
        name: 'Heat Exhaustion',
        client: 'City Blacksmith',
        type: 'gather',
        goal: 'gathering',
        targets: { 350: 2 },
        contract: 250,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: false,
        reward: 2500,
        ko: 840,
        hrp: 0,
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
          { goal: 'gathering', targets: { 350: 1 }, reward: 2500, hrp: 0 }
        ],
        bosses: []
      },
      {
        name: 'The Lord of the Seas',
        client: 'Oceanographer',
        type: 'capture',
        goal: 'capture',
        targets: { 29: 1 },
        contract: 400,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 7200,
        ko: 2400,
        hrp: 0,
        bosses: [{ type1: 29, type2: 0, level: 9, size: 100, min: 1, max: 6 }],
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
          { goal: 'break', targets: { 29: 1 }, reward: 600, hrp: 0 },
          { goal: 'sever', targets: { 29: 1 }, reward: 600, hrp: 0 }
        ]
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
        reward: 15,
        ko: 5,
        hrp: 0,
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
        name: 'The Wrath of Rathalos',
        client: 'Princess of a Ruined Land',
        type: 'hunt',
        goal: 'hunt',
        targets: { 23: 1 },
        contract: 450,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: false,
        reward: 4800,
        ko: 1600,
        hrp: 0,
        bosses: [{ type1: 23, type2: 0, level: 11, size: 100, min: 1, max: 6 }],
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
          { goal: 'sever', targets: { 23: 1 }, reward: 800, hrp: 0 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1200, hrp: 0 }
        ]
      },
      {
        name: "A Bard's Tale",
        client: 'Wandering Bard',
        type: 'hunt',
        goal: 'hunt',
        targets: { 26: 1 },
        contract: 450,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 4800,
        ko: 1600,
        hrp: 0,
        bosses: [{ type1: 26, type2: 0, level: 11, size: 100, min: 1, max: 7 }],
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
          { goal: 'break', targets: { 26: 1 }, reward: 800, hrp: 0 },
          { goal: 'pitfall', targets: [26], reward: 400, hrp: 0 }
        ]
      },
      {
        name: 'The Horned Dragon',
        client: 'Watchtower Sentinel',
        type: 'hunt',
        goal: 'hunt',
        targets: { 24: 1 },
        contract: 550,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 5600,
        ko: 1870,
        hrp: 0,
        bosses: [{ type1: 24, type2: 0, level: 11, size: 100, min: 1, max: 6 }],
        secondaryRewards: [
          { itemId: 316, count: 16, chance: 25 },
          { itemId: 406, count: 1, chance: 24 },
          { itemId: 315, count: 28, chance: 20 },
          { itemId: 407, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 8 },
          { itemId: 409, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 24: 0 }, reward: 1000, hrp: 0 },
          { goal: 'sonic', targets: [24], reward: 500, hrp: 0 }
        ]
      },
      {
        name: 'The Omen',
        client: 'Shipmaster',
        type: 'hunt',
        goal: 'hunt',
        targets: { 23: 1 },
        contract: 450,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 5200,
        ko: 1740,
        hrp: 0,
        bosses: [{ type1: 23, type2: 0, level: 11, size: 100, min: 1, max: 6 }],
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
          { goal: 'break', targets: { 23: 0 }, reward: 800, hrp: 0 },
          { goal: 'sever', targets: { 23: 1 }, reward: 800, hrp: 0 }
        ]
      },
      {
        name: 'Denizen of the Molten Deep',
        client: 'Fire Country Chieftain',
        type: 'hunt',
        goal: 'hunt',
        targets: { 30: 1 },
        contract: 600,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: false,
        reward: 6000,
        ko: 2000,
        hrp: 0,
        bosses: [{ type1: 30, type2: 0, level: 13, size: 100, min: 1, max: 6 }],
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
          { goal: 'break', targets: { 30: 0 }, reward: 1000, hrp: 0 },
          { goal: 'sever', targets: { 30: 1 }, reward: 1000, hrp: 0 }
        ]
      },
      {
        name: "The Volcano's Fury",
        client: 'Scarred Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 20: 1 },
        contract: 550,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: false,
        reward: 5600,
        ko: 1870,
        hrp: 0,
        bosses: [{ type1: 20, type2: 0, level: 11, size: 100, min: 1, max: 6 }],
        secondaryRewards: [
          { itemId: 316, count: 16, chance: 25 },
          { itemId: 406, count: 1, chance: 24 },
          { itemId: 315, count: 28, chance: 20 },
          { itemId: 407, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 8 },
          { itemId: 409, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'break', targets: { 20: 0 }, reward: 1000, hrp: 0 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1400, hrp: 0 }
        ]
      },
      {
        name: "Uragaan's Trail",
        client: 'Brainy Biologist',
        type: 'capture',
        goal: 'capture',
        targets: { 20: 1 },
        contract: 550,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: false,
        reward: 8600,
        ko: 2870,
        hrp: 0,
        bosses: [{ type1: 20, type2: 0, level: 11, size: 100, min: 1, max: 6 }],
        secondaryRewards: [
          { itemId: 406, count: 1, chance: 35 },
          { itemId: 301, count: 1, chance: 25 },
          { itemId: 300, count: 1, chance: 20 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 413, count: 1, chance: 5 }
        ],
        subquests: [
          { goal: 'sever', targets: { 20: 1 }, reward: 1000, hrp: 0 },
          { goal: 'stun', targets: [20], reward: 1000, hrp: 0 }
        ]
      },
      {
        name: 'Trial of the Sea Dragon',
        client: 'Moga Village Chief',
        type: 'repel',
        goal: 'repel',
        targets: { 29: 50 },
        contract: 200,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 2100,
        ko: 700,
        hrp: 0,
        bosses: [{ type1: 29, type2: 2, level: 9, size: 100, min: 0, max: 6 }],
        secondaryRewards: [
          { itemId: 125, count: 2, chance: 24 },
          { itemId: 120, count: 2, chance: 20 },
          { itemId: 138, count: 1, chance: 14 },
          { itemId: 139, count: 1, chance: 14 },
          { itemId: 359, count: 2, chance: 10 },
          { itemId: 130, count: 1, chance: 10 },
          { itemId: 300, count: 1, chance: 8 }
        ]
      },
      {
        name: 'Fell the Lagiacrus!',
        client: 'Moga Village Chief',
        type: 'hunt',
        goal: 'hunt',
        targets: { 29: 1 },
        contract: 400,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 4200,
        ko: 1400,
        hrp: 0,
        bosses: [{ type1: 29, type2: 0, level: 9, size: 100, min: 0, max: 6 }],
        secondaryRewards: [
          { itemId: 284, count: 1, chance: 28 },
          { itemId: 151, count: 1, chance: 23 },
          { itemId: 300, count: 1, chance: 18 },
          { itemId: 301, count: 1, chance: 13 },
          { itemId: 283, count: 1, chance: 10 },
          { itemId: 285, count: 1, chance: 8 }
        ],
        subquests: [
          { goal: 'break', targets: { 29: 1 }, reward: 600, hrp: 0 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1200, hrp: 0 }
        ]
      }
    ],
    [StarLevel.SixStar]: [
      {
        name: 'Mating Season',
        client: 'Moga Village Chief',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 22: 1, 23: 1 },
        contract: 750,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 7600,
        ko: 2540,
        hrp: 0,
        bosses: [
          { type1: 22, type2: 0, level: 16, size: 100, min: 0, max: 9 },
          { type1: 23, type2: 1, level: 16, size: 100, min: 0, max: 9 }
        ],
        secondaryRewards: [
          { itemId: 316, count: 16, chance: 25 },
          { itemId: 406, count: 1, chance: 24 },
          { itemId: 315, count: 28, chance: 20 },
          { itemId: 407, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 8 },
          { itemId: 409, count: 1, chance: 5 }
        ]
      },
      {
        name: 'Four Horns',
        client: 'Spoiled Princess',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 24: 2 },
        contract: 1100,
        time: 50,
        location: Location.SANDY_PLAINS,
        randomspawn: false,
        reward: 11200,
        ko: 3740,
        hrp: 0,
        bosses: [
          { type1: 24, type2: 0, level: 16, size: 100, min: 0, max: 9 },
          { type1: 24, type2: 1, level: 16, size: 100, min: 0, max: 9 }
        ],
        secondaryRewards: [
          { itemId: 316, count: 16, chance: 25 },
          { itemId: 406, count: 1, chance: 24 },
          { itemId: 315, count: 28, chance: 20 },
          { itemId: 407, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 8 },
          { itemId: 409, count: 1, chance: 5 }
        ]
      },
      {
        name: 'Dangerous Waters',
        client: 'Shipmaster',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 27: 1, 28: 1 },
        contract: 600,
        time: 50,
        location: Location.FLOODED_FOREST,
        randomspawn: false,
        reward: 6000,
        ko: 2000,
        hrp: 0,
        bosses: [
          { type1: 27, type2: 1, level: 17, size: 100, min: 0, max: 9 },
          { type1: 28, type2: 0, level: 18, size: 100, min: 0, max: 9 }
        ],
        secondaryRewards: [
          { itemId: 316, count: 16, chance: 25 },
          { itemId: 406, count: 1, chance: 24 },
          { itemId: 315, count: 28, chance: 20 },
          { itemId: 407, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 8 },
          { itemId: 409, count: 1, chance: 5 }
        ]
      },
      {
        name: 'White Wind of the Tundra',
        client: 'Troop Captain',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 26: 2 },
        contract: 950,
        time: 50,
        location: Location.TUNDRA,
        randomspawn: false,
        reward: 9600,
        ko: 3200,
        hrp: 0,
        bosses: [
          { type1: 26, type2: 2, level: 16, size: 100, min: 0, max: 7 },
          { type1: 26, type2: 1, level: 16, size: 100, min: 0, max: 7 }
        ],
        secondaryRewards: [
          { itemId: 316, count: 16, chance: 25 },
          { itemId: 406, count: 1, chance: 24 },
          { itemId: 315, count: 28, chance: 20 },
          { itemId: 407, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 8 },
          { itemId: 409, count: 1, chance: 5 }
        ]
      },
      {
        name: 'The Death of Sky and Sea',
        client: 'Imperial Envoy',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 29: 1, 23: 1 },
        contract: 900,
        time: 50,
        location: Location.DESERTED_ISLAND,
        randomspawn: false,
        reward: 9000,
        ko: 3000,
        hrp: 0,
        bosses: [
          { type1: 29, type2: 0, level: 18, size: 100, min: 0, max: 9 },
          { type1: 23, type2: 1, level: 18, size: 100, min: 0, max: 9 }
        ],
        secondaryRewards: [
          { itemId: 316, count: 16, chance: 25 },
          { itemId: 406, count: 1, chance: 24 },
          { itemId: 315, count: 28, chance: 20 },
          { itemId: 407, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 8 },
          { itemId: 409, count: 1, chance: 5 }
        ]
      },
      {
        name: 'A Burnt Offering',
        client: 'Fire Country Princess',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 20: 1, 30: 1 },
        contract: 1100,
        time: 50,
        location: Location.VOLCANO,
        randomspawn: false,
        reward: 11600,
        ko: 3870,
        hrp: 0,
        bosses: [
          { type1: 20, type2: 0, level: 17, size: 100, min: 0, max: 9 },
          { type1: 30, type2: 1, level: 17, size: 100, min: 0, max: 9 }
        ],
        secondaryRewards: [
          { itemId: 316, count: 16, chance: 25 },
          { itemId: 406, count: 1, chance: 24 },
          { itemId: 315, count: 28, chance: 20 },
          { itemId: 407, count: 1, chance: 18 },
          { itemId: 108, count: 1, chance: 8 },
          { itemId: 409, count: 1, chance: 5 }
        ]
      },
      {
        name: 'Save Moga Village!',
        client: 'Moga Village Chief',
        type: 'repel',
        goal: 'other',
        targets: { 22: 0 },
        contract: 600,
        time: 35,
        location: Location.UNDERWATER_RUIN,
        randomspawn: false,
        reward: 6000,
        ko: 2000,
        hrp: 0,
        bosses: [{ type1: 31, type2: 0, level: 16, size: 100, min: 0, max: 0 }],
        secondaryRewards: []
      },
      {
        name: 'The Decisive Battle',
        client: 'Guild Headquarters',
        type: 'slay',
        goal: 'hunt',
        targets: { 31: 1 },
        contract: 1200,
        time: 30,
        location: Location.UNDERWATER_RUIN,
        randomspawn: false,
        reward: 12000,
        ko: 4000,
        hrp: 0,
        bosses: [{ type1: 31, type2: 0, level: 17, size: 100, min: 0, max: 0 }],
        secondaryRewards: [
          { itemId: 426, count: 1, chance: 30 },
          { itemId: 413, count: 2, chance: 25 },
          { itemId: 425, count: 1, chance: 18 },
          { itemId: 151, count: 1, chance: 15 },
          { itemId: 414, count: 1, chance: 12 }
        ]
      }
    ]
  },
  arena: [
    {
      name: 'Great Jaggi Team Takedown',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 17: 1 },
      contract: 0,
      time: 50,
      location: Location.LAND_ARENA,
      randomspawn: false,
      reward: 500,
      ko: 180,
      hrp: 0,
      bosses: [{ type1: 17, type2: 0, level: 23, size: 100, min: 0, max: 0 }]
    },
    {
      name: 'Qurupeco Team Takedown',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 21: 1 },
      contract: 0,
      time: 50,
      location: Location.LAND_ARENA,
      randomspawn: false,
      reward: 500,
      ko: 180,
      hrp: 0,
      bosses: [{ type1: 21, type2: 0, level: 23, size: 100, min: 0, max: 0 }]
    },
    {
      name: 'Barroth Team Takedown',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 19: 1 },
      contract: 0,
      time: 50,
      location: Location.LAND_ARENA,
      randomspawn: false,
      reward: 1000,
      ko: 200,
      hrp: 0,
      bosses: [{ type1: 19, type2: 0, level: 23, size: 100, min: 0, max: 0 }]
    },
    {
      name: 'Royal Ludroth Team Takedown',
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
      name: 'Rathian Team Takedown',
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
      name: 'Lagiacrus Team Takedown',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 29: 1 },
      contract: 0,
      time: 50,
      location: Location.WATER_ARENA,
      randomspawn: false,
      reward: 1500,
      ko: 220,
      hrp: 0,
      bosses: [{ type1: 29, type2: 0, level: 23, size: 100, min: 0, max: 0 }]
    },
    {
      name: 'Uragaan Team Takedown',
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
      name: 'Wyvern Team Takedown',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 22: 1 },
      contract: 0,
      time: 50,
      location: Location.LAND_ARENA,
      randomspawn: false,
      reward: 2000,
      ko: 230,
      hrp: 0,
      bosses: [
        { type1: 22, type2: 0, level: 36, size: 100, min: 0, max: 0 },
        { type1: 23, type2: 1, level: 37, size: 100, min: 0, max: 0 }
      ]
    },
    {
      name: 'Water Arena Rumble',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 28: 1 },
      contract: 0,
      time: 50,
      location: Location.WATER_ARENA,
      randomspawn: false,
      reward: 2000,
      ko: 230,
      hrp: 0,
      bosses: [
        { type1: 28, type2: 0, level: 39, size: 100, min: 0, max: 0 },
        { type1: 29, type2: 1, level: 36, size: 100, min: 0, max: 0 }
      ]
    },
    {
      name: 'Arena Free-for-all',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 19: 1 },
      contract: 0,
      time: 50,
      location: Location.LAND_ARENA,
      randomspawn: false,
      reward: 3000,
      ko: 350,
      hrp: 0,
      bosses: [
        { type1: 19, type2: 1, level: 36, size: 100, min: 0, max: 0 },
        { type1: 26, type2: 1, level: 36, size: 100, min: 0, max: 0 },
        { type1: 23, type2: 0, level: 38, size: 115, min: 0, max: 0 }
      ]
    }
  ],
  events: []
});
