import type { QuestMode } from './types';
import { StarLevelEnum, MapLocation } from './enum';

export const VillageQuestData = Object.freeze<QuestMode>({
  region: 'Village',
  starLevels: {
    [StarLevelEnum.OneStar]: [
      {
        id: 0x03e8,
        name: "Harvest 'Shroom",
        region: 'Village',
        rank: 'Low',
        client: 'Clan Matriarch',
        type: 'gather',
        goal: 'gathering',
        targets: { 141: 5 },
        contract: 0,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x03e9,
        name: 'Prescription Pick-up',
        region: 'Village',
        rank: 'Low',
        client: 'Medicine Man',
        type: 'gather',
        goal: 'gathering',
        targets: { 310: 2 },
        contract: 100,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x03ea,
        name: 'Goldenfish Opportunity',
        region: 'Village',
        rank: 'Low',
        client: 'Fish Fanboy',
        type: 'gather',
        goal: 'gathering',
        targets: { 203: 3 },
        contract: 150,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x03eb,
        name: 'Farm Aid',
        region: 'Village',
        rank: 'Low',
        client: 'Old Farmer',
        type: 'hunt',
        goal: 'slay',
        targets: { 11: 5 },
        contract: 100,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x03ec,
        name: "Guts: It's What's for Dinner",
        region: 'Village',
        rank: 'Low',
        client: 'Manor Cook',
        type: 'gather',
        goal: 'gathering',
        targets: { 397: 3 },
        contract: 100,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 800,
        ko: 270,
        hrp: 0,
        bosses: [
          {
            monsterId: 29,
            startingArea: 0,
            level: 9,
            size: 100,
            min: 0,
            max: 0
          }
        ],
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
        id: 0x03ed,
        name: 'Sunken Treasures',
        region: 'Village',
        rank: 'Low',
        client: 'Lovesick Kid',
        type: 'gather',
        goal: 'gathering',
        targets: { 398: 8 },
        contract: 100,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
    [StarLevelEnum.TwoStar]: [
      {
        id: 0x03f2,
        name: 'Bug Hunt',
        region: 'Village',
        rank: 'Low',
        client: 'Brainy Biologist',
        type: 'hunt',
        goal: 'slay',
        targets: { 5: 12 },
        contract: 100,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x03f3,
        name: 'Secret of the Crystal Bones',
        region: 'Village',
        rank: 'Low',
        client: 'Archeologist',
        type: 'gather',
        goal: 'gathering',
        targets: { 364: 4 },
        contract: 100,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
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
        id: 0x03f4,
        name: 'No Guts, No Glory',
        region: 'Village',
        rank: 'Low',
        client: 'Caravan Leader',
        type: 'gather',
        goal: 'gathering',
        targets: { 397: 3 },
        contract: 100,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
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
        id: 0x03f5,
        name: 'Big Game Hunting',
        region: 'Village',
        rank: 'Low',
        client: 'Head Village Guard',
        type: 'hunt',
        goal: 'hunt',
        targets: { 17: 1 },
        contract: 100,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 1000,
        ko: 340,
        hrp: 0,
        bosses: [
          {
            monsterId: 17,
            startingArea: 0,
            level: 3,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x03f6,
        name: "Who's the Boss?",
        region: 'Village',
        rank: 'Low',
        client: 'Brainy Biologist',
        type: 'capture',
        goal: 'capture',
        targets: { 17: 1 },
        contract: 100,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: false,
        reward: 2000,
        ko: 670,
        hrp: 0,
        bosses: [
          {
            monsterId: 17,
            startingArea: 0,
            level: 3,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x07d0,
        name: 'No Love for Ludroth',
        region: 'Village',
        rank: 'Low',
        client: 'Ex-Caravan Sentry',
        type: 'hunt',
        goal: 'slay',
        targets: { 13: 6 },
        contract: 100,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
    [StarLevelEnum.ThreeStar]: [
      {
        id: 0x03fc,
        name: 'Rhenoplos Rampage!',
        region: 'Village',
        rank: 'Low',
        client: 'Bandaged Boy',
        type: 'hunt',
        goal: 'slay',
        targets: { 16: 6 },
        contract: 100,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
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
        id: 0x03fd,
        name: 'Herbivore Egg Hunt!',
        region: 'Village',
        rank: 'Low',
        client: 'Newlywed Wife',
        type: 'gather',
        goal: 'gathering',
        targets: { 363: 2 },
        contract: 100,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
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
        id: 0x03fe,
        name: 'Pest Control',
        region: 'Village',
        rank: 'Low',
        client: 'Cattle Rancher',
        type: 'hunt',
        goal: 'slay',
        targets: { 4: 12 },
        contract: 100,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
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
        id: 0x03ff,
        name: 'The Deadliest Catch',
        region: 'Village',
        rank: 'Low',
        client: 'Flooded Forest Guardsman',
        type: 'hunt',
        goal: 'slay',
        targets: { 13: 7 },
        contract: 100,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
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
        id: 0x0400,
        name: 'Playing with Fire',
        region: 'Village',
        rank: 'Low',
        client: 'Red-cheeked Huntress',
        type: 'hunt',
        goal: 'hunt',
        targets: { 21: 1 },
        contract: 150,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: false,
        reward: 1800,
        ko: 600,
        hrp: 0,
        bosses: [
          {
            monsterId: 21,
            startingArea: 0,
            level: 5,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x0401,
        name: 'Trapping a Trickster',
        region: 'Village',
        rank: 'Low',
        client: 'Newbie Hunter',
        type: 'capture',
        goal: 'capture',
        targets: { 21: 1 },
        contract: 150,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 3600,
        ko: 1200,
        hrp: 0,
        bosses: [
          {
            monsterId: 21,
            startingArea: 0,
            level: 5,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x0402,
        name: 'Save Our Boat',
        region: 'Village',
        rank: 'Low',
        client: 'Fleet Captain',
        type: 'hunt',
        goal: 'hunt',
        targets: { 27: 1 },
        contract: 200,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: false,
        reward: 2000,
        ko: 670,
        hrp: 0,
        bosses: [
          {
            monsterId: 27,
            startingArea: 0,
            level: 5,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x0403,
        name: 'Leading the Charge',
        region: 'Village',
        rank: 'Low',
        client: 'Brainy Biologist',
        type: 'hunt',
        goal: 'hunt',
        targets: { 19: 1 },
        contract: 250,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: false,
        reward: 2600,
        ko: 870,
        hrp: 0,
        bosses: [
          {
            monsterId: 19,
            startingArea: 0,
            level: 5,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x0404,
        name: 'A Royal Pain',
        region: 'Village',
        rank: 'Low',
        client: "The Lord's Beloved Daughter",
        type: 'capture',
        goal: 'capture',
        targets: { 27: 1 },
        contract: 200,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 4000,
        ko: 1340,
        hrp: 0,
        bosses: [
          {
            monsterId: 27,
            startingArea: 0,
            level: 5,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x07d1,
        name: 'Shakalaka Savior!',
        region: 'Village',
        rank: 'Low',
        client: 'Carefree Lad',
        type: 'escort',
        goal: 'slay',
        targets: { 10: 8 },
        contract: 0,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
    [StarLevelEnum.FourStar]: [
      {
        id: 0x0406,
        name: 'Lost in Blue',
        region: 'Village',
        rank: 'Low',
        client: 'Tundra-expedition Member',
        type: 'slay',
        goal: 'slay',
        targets: { 12: 20 },
        contract: 100,
        time: 50,
        location: MapLocation.TUNDRA,
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
        id: 0x0407,
        name: 'Leader of the Icepack',
        region: 'Village',
        rank: 'Low',
        client: 'Tundra-expedition Leader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 18: 1 },
        contract: 100,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: false,
        reward: 1400,
        ko: 470,
        hrp: 0,
        bosses: [
          {
            monsterId: 18,
            startingArea: 0,
            level: 7,
            size: 100,
            min: 1,
            max: 8
          }
        ],
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
        id: 0x0408,
        name: 'Cold Stones',
        region: 'Village',
        rank: 'Low',
        client: 'Female Geologist',
        type: 'gather',
        goal: 'gathering',
        targets: { 395: 8 },
        contract: 100,
        time: 50,
        location: MapLocation.TUNDRA,
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
        id: 0x0409,
        name: 'Hunter Killer',
        region: 'Village',
        rank: 'Low',
        client: 'Wounded Hunter',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 19: 1, 17: 1 },
        contract: 350,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: false,
        reward: 3800,
        ko: 1270,
        hrp: 0,
        bosses: [
          {
            monsterId: 19,
            startingArea: 0,
            level: 7,
            size: 100,
            min: 1,
            max: 6
          },
          {
            monsterId: 17,
            startingArea: 0,
            level: 7,
            size: 100,
            min: 1,
            max: 6
          },
          {
            monsterId: 21,
            startingArea: 0,
            level: 7,
            size: 100,
            min: 1,
            max: 6
          }
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
        id: 0x040a,
        name: 'Harvest Tour: Sandy Plains',
        region: 'Village',
        rank: 'Low',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
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
        id: 0x040b,
        name: 'Harvest Tour: Flooded Forest',
        region: 'Village',
        rank: 'Low',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
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
        id: 0x040c,
        name: 'Dragon Lady',
        region: 'Village',
        rank: 'Low',
        client: 'Village Protector',
        type: 'hunt',
        goal: 'hunt',
        targets: { 22: 1 },
        contract: 250,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 2800,
        ko: 940,
        hrp: 0,
        bosses: [
          {
            monsterId: 22,
            startingArea: 0,
            level: 7,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x040d,
        name: 'The Creeping Venom',
        region: 'Village',
        rank: 'Low',
        client: 'Cocky Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 25: 1 },
        contract: 300,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: false,
        reward: 3400,
        ko: 1140,
        hrp: 0,
        bosses: [
          {
            monsterId: 25,
            startingArea: 0,
            level: 7,
            size: 100,
            min: 1,
            max: 7
          }
        ],
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
        id: 0x040e,
        name: 'A Royal Rumble',
        region: 'Village',
        rank: 'Low',
        client: 'Middle-aged Knight',
        type: 'capture',
        goal: 'capture',
        targets: { 22: 1 },
        contract: 250,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: false,
        reward: 5600,
        ko: 1870,
        hrp: 0,
        bosses: [
          {
            monsterId: 22,
            startingArea: 0,
            level: 7,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x040f,
        name: 'Poached Wyvern Eggs',
        region: 'Village',
        rank: 'Low',
        client: 'Royal Cook',
        type: 'gather',
        goal: 'gathering',
        targets: { 136: 2 },
        contract: 200,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x07d2,
        name: 'Accident Investigation',
        region: 'Village',
        rank: 'Low',
        client: 'Trader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 28: 1 },
        contract: 300,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: false,
        reward: 3000,
        ko: 1000,
        hrp: 0,
        bosses: [
          {
            monsterId: 28,
            startingArea: 0,
            level: 7,
            size: 100,
            min: 0,
            max: 6
          }
        ],
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
    [StarLevelEnum.FiveStar]: [
      {
        id: 0x0410,
        name: 'Best the Lava Beasts!',
        region: 'Village',
        rank: 'Low',
        client: 'Caravan Leader',
        type: 'slay',
        goal: 'slay',
        targets: { 14: 7 },
        contract: 100,
        time: 50,
        location: MapLocation.VOLCANO,
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
        id: 0x0411,
        name: 'Heat Exhaustion',
        region: 'Village',
        rank: 'Low',
        client: 'City Blacksmith',
        type: 'gather',
        goal: 'gathering',
        targets: { 350: 2 },
        contract: 250,
        time: 50,
        location: MapLocation.VOLCANO,
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
        id: 0x0412,
        name: 'The Lord of the Seas',
        region: 'Village',
        rank: 'Low',
        client: 'Oceanographer',
        type: 'capture',
        goal: 'capture',
        targets: { 29: 1 },
        contract: 400,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: false,
        reward: 7200,
        ko: 2400,
        hrp: 0,
        bosses: [
          {
            monsterId: 29,
            startingArea: 0,
            level: 9,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x0413,
        name: 'Harvest Tour: Tundra',
        region: 'Village',
        rank: 'Low',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: MapLocation.TUNDRA,
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
        id: 0x0414,
        name: 'The Wrath of Rathalos',
        region: 'Village',
        rank: 'Low',
        client: 'Princess of a Ruined Land',
        type: 'hunt',
        goal: 'hunt',
        targets: { 23: 1 },
        contract: 450,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: false,
        reward: 4800,
        ko: 1600,
        hrp: 0,
        bosses: [
          {
            monsterId: 23,
            startingArea: 0,
            level: 11,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x0415,
        name: "A Bard's Tale",
        region: 'Village',
        rank: 'Low',
        client: 'Wandering Bard',
        type: 'hunt',
        goal: 'hunt',
        targets: { 26: 1 },
        contract: 450,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: false,
        reward: 4800,
        ko: 1600,
        hrp: 0,
        bosses: [
          {
            monsterId: 26,
            startingArea: 0,
            level: 11,
            size: 100,
            min: 1,
            max: 7
          }
        ],
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
        id: 0x0416,
        name: 'The Horned Dragon',
        region: 'Village',
        rank: 'Low',
        client: 'Watchtower Sentinel',
        type: 'hunt',
        goal: 'hunt',
        targets: { 24: 1 },
        contract: 550,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: false,
        reward: 5600,
        ko: 1870,
        hrp: 0,
        bosses: [
          {
            monsterId: 24,
            startingArea: 0,
            level: 11,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x0417,
        name: 'The Omen',
        region: 'Village',
        rank: 'Low',
        client: 'Shipmaster',
        type: 'hunt',
        goal: 'hunt',
        targets: { 23: 1 },
        contract: 450,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 5200,
        ko: 1740,
        hrp: 0,
        bosses: [
          {
            monsterId: 23,
            startingArea: 0,
            level: 11,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x0418,
        name: 'Denizen of the Molten Deep',
        region: 'Village',
        rank: 'Low',
        client: 'Fire Country Chieftain',
        type: 'hunt',
        goal: 'hunt',
        targets: { 30: 1 },
        contract: 600,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: false,
        reward: 6000,
        ko: 2000,
        hrp: 0,
        bosses: [
          {
            monsterId: 30,
            startingArea: 0,
            level: 13,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x0419,
        name: "The Volcano's Fury",
        region: 'Village',
        rank: 'Low',
        client: 'Scarred Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 20: 1 },
        contract: 550,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: false,
        reward: 5600,
        ko: 1870,
        hrp: 0,
        bosses: [
          {
            monsterId: 20,
            startingArea: 0,
            level: 11,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x041a,
        name: "Uragaan's Trail",
        region: 'Village',
        rank: 'Low',
        client: 'Brainy Biologist',
        type: 'capture',
        goal: 'capture',
        targets: { 20: 1 },
        contract: 550,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: false,
        reward: 8600,
        ko: 2870,
        hrp: 0,
        bosses: [
          {
            monsterId: 20,
            startingArea: 0,
            level: 11,
            size: 100,
            min: 1,
            max: 6
          }
        ],
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
        id: 0x07d3,
        name: 'Trial of the Sea Dragon',
        region: 'Village',
        rank: 'Low',
        client: 'Moga Village Chief',
        type: 'repel',
        goal: 'repel',
        targets: { 29: 50 },
        contract: 200,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 2100,
        ko: 700,
        hrp: 0,
        bosses: [
          {
            monsterId: 29,
            startingArea: 2,
            level: 9,
            size: 100,
            min: 0,
            max: 6
          }
        ],
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
        id: 0x07d4,
        name: 'Fell the Lagiacrus!',
        region: 'Village',
        rank: 'Low',
        client: 'Moga Village Chief',
        type: 'hunt',
        goal: 'hunt',
        targets: { 29: 1 },
        contract: 400,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 4200,
        ko: 1400,
        hrp: 0,
        bosses: [
          {
            monsterId: 29,
            startingArea: 0,
            level: 9,
            size: 100,
            min: 0,
            max: 6
          }
        ],
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
    [StarLevelEnum.SixStar]: [
      {
        id: 0x0424,
        name: 'Mating Season',
        region: 'Village',
        rank: 'Low',
        client: 'Moga Village Chief',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 22: 1, 23: 1 },
        contract: 750,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 7600,
        ko: 2540,
        hrp: 0,
        bosses: [
          {
            monsterId: 22,
            startingArea: 0,
            level: 16,
            size: 100,
            min: 0,
            max: 9
          },
          {
            monsterId: 23,
            startingArea: 1,
            level: 16,
            size: 100,
            min: 0,
            max: 9
          }
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
        id: 0x0425,
        name: 'Four Horns',
        region: 'Village',
        rank: 'Low',
        client: 'Spoiled Princess',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 24: 2 },
        contract: 1100,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: false,
        reward: 11200,
        ko: 3740,
        hrp: 0,
        bosses: [
          {
            monsterId: 24,
            startingArea: 0,
            level: 16,
            size: 100,
            min: 0,
            max: 9
          },
          {
            monsterId: 24,
            startingArea: 1,
            level: 16,
            size: 100,
            min: 0,
            max: 9
          }
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
        id: 0x0426,
        name: 'Dangerous Waters',
        region: 'Village',
        rank: 'Low',
        client: 'Shipmaster',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 27: 1, 28: 1 },
        contract: 600,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: false,
        reward: 6000,
        ko: 2000,
        hrp: 0,
        bosses: [
          {
            monsterId: 27,
            startingArea: 1,
            level: 17,
            size: 100,
            min: 0,
            max: 9
          },
          {
            monsterId: 28,
            startingArea: 0,
            level: 18,
            size: 100,
            min: 0,
            max: 9
          }
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
        id: 0x0427,
        name: 'White Wind of the Tundra',
        region: 'Village',
        rank: 'Low',
        client: 'Troop Captain',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 26: 2 },
        contract: 950,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: false,
        reward: 9600,
        ko: 3200,
        hrp: 0,
        bosses: [
          {
            monsterId: 26,
            startingArea: 2,
            level: 16,
            size: 100,
            min: 0,
            max: 7
          },
          {
            monsterId: 26,
            startingArea: 1,
            level: 16,
            size: 100,
            min: 0,
            max: 7
          }
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
        id: 0x0428,
        name: 'The Death of Sky and Sea',
        region: 'Village',
        rank: 'Low',
        client: 'Imperial Envoy',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 29: 1, 23: 1 },
        contract: 900,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 9000,
        ko: 3000,
        hrp: 0,
        bosses: [
          {
            monsterId: 29,
            startingArea: 0,
            level: 18,
            size: 100,
            min: 0,
            max: 9
          },
          {
            monsterId: 23,
            startingArea: 1,
            level: 18,
            size: 100,
            min: 0,
            max: 9
          }
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
        id: 0x0429,
        name: 'A Burnt Offering',
        region: 'Village',
        rank: 'Low',
        client: 'Fire Country Princess',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 20: 1, 30: 1 },
        contract: 1100,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: false,
        reward: 11600,
        ko: 3870,
        hrp: 0,
        bosses: [
          {
            monsterId: 20,
            startingArea: 0,
            level: 17,
            size: 100,
            min: 0,
            max: 9
          },
          {
            monsterId: 30,
            startingArea: 1,
            level: 17,
            size: 100,
            min: 0,
            max: 9
          }
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
        id: 0x07d5,
        name: 'Save Moga Village!',
        region: 'Village',
        rank: 'Low',
        client: 'Moga Village Chief',
        type: 'repel',
        goal: 'other',
        targets: { 22: 0 },
        contract: 600,
        time: 35,
        location: MapLocation.UNDERWATER_RUIN,
        randomspawn: false,
        reward: 6000,
        ko: 2000,
        hrp: 0,
        bosses: [
          {
            monsterId: 31,
            startingArea: 0,
            level: 16,
            size: 100,
            min: 0,
            max: 0
          }
        ],
        secondaryRewards: []
      },
      {
        id: 0x07d6,
        name: 'The Decisive Battle',
        region: 'Village',
        rank: 'Low',
        client: 'Guild Headquarters',
        type: 'slay',
        goal: 'hunt',
        targets: { 31: 1 },
        contract: 1200,
        time: 30,
        location: MapLocation.UNDERWATER_RUIN,
        randomspawn: false,
        reward: 12000,
        ko: 4000,
        hrp: 0,
        bosses: [
          {
            monsterId: 31,
            startingArea: 0,
            level: 17,
            size: 100,
            min: 0,
            max: 0
          }
        ],
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
      id: 0x2328,
      name: 'Great Jaggi Team Takedown',
      region: 'Village',
      rank: 'Low',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 17: 1 },
      contract: 0,
      time: 50,
      location: MapLocation.LAND_ARENA,
      randomspawn: false,
      reward: 500,
      ko: 180,
      hrp: 0,
      bosses: [
        { monsterId: 17, startingArea: 0, level: 23, size: 100, min: 0, max: 0 }
      ],
      secondaryRewards: []
    },
    {
      id: 0x2329,
      name: 'Qurupeco Team Takedown',
      region: 'Village',
      rank: 'Low',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 21: 1 },
      contract: 0,
      time: 50,
      location: MapLocation.LAND_ARENA,
      randomspawn: false,
      reward: 500,
      ko: 180,
      hrp: 0,
      bosses: [
        { monsterId: 21, startingArea: 0, level: 23, size: 100, min: 0, max: 0 }
      ],
      secondaryRewards: []
    },
    {
      id: 0x232b,
      name: 'Barroth Team Takedown',
      region: 'Village',
      rank: 'Low',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 19: 1 },
      contract: 0,
      time: 50,
      location: MapLocation.LAND_ARENA,
      randomspawn: false,
      reward: 1000,
      ko: 200,
      hrp: 0,
      bosses: [
        { monsterId: 19, startingArea: 0, level: 23, size: 100, min: 0, max: 0 }
      ],
      secondaryRewards: []
    },
    {
      id: 0x232a,
      name: 'Royal Ludroth Team Takedown',
      region: 'Village',
      rank: 'Low',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 27: 1 },
      contract: 0,
      time: 50,
      location: MapLocation.WATER_ARENA,
      randomspawn: false,
      reward: 1000,
      ko: 200,
      hrp: 0,
      bosses: [
        { monsterId: 27, startingArea: 0, level: 23, size: 100, min: 0, max: 0 }
      ],
      secondaryRewards: []
    },
    {
      id: 0x232c,
      name: 'Rathian Team Takedown',
      region: 'Village',
      rank: 'Low',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 22: 1 },
      contract: 0,
      time: 50,
      location: MapLocation.LAND_ARENA,
      randomspawn: false,
      reward: 1000,
      ko: 200,
      hrp: 0,
      bosses: [
        { monsterId: 22, startingArea: 0, level: 26, size: 100, min: 0, max: 0 }
      ],
      secondaryRewards: []
    },
    {
      id: 0x232d,
      name: 'Lagiacrus Team Takedown',
      region: 'Village',
      rank: 'Low',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 29: 1 },
      contract: 0,
      time: 50,
      location: MapLocation.WATER_ARENA,
      randomspawn: false,
      reward: 1500,
      ko: 220,
      hrp: 0,
      bosses: [
        { monsterId: 29, startingArea: 0, level: 23, size: 100, min: 0, max: 0 }
      ],
      secondaryRewards: []
    },
    {
      id: 0x232e,
      name: 'Uragaan Team Takedown',
      region: 'Village',
      rank: 'Low',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 20: 1 },
      contract: 0,
      time: 50,
      location: MapLocation.LAND_ARENA,
      randomspawn: false,
      reward: 1500,
      ko: 220,
      hrp: 0,
      bosses: [
        { monsterId: 20, startingArea: 0, level: 23, size: 100, min: 0, max: 0 }
      ],
      secondaryRewards: []
    },
    {
      id: 0x232f,
      name: 'Wyvern Team Takedown',
      region: 'Village',
      rank: 'Low',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 22: 1 },
      contract: 0,
      time: 50,
      location: MapLocation.LAND_ARENA,
      randomspawn: false,
      reward: 2000,
      ko: 230,
      hrp: 0,
      bosses: [
        {
          monsterId: 22,
          startingArea: 0,
          level: 36,
          size: 100,
          min: 0,
          max: 0
        },
        { monsterId: 23, startingArea: 1, level: 37, size: 100, min: 0, max: 0 }
      ],
      secondaryRewards: []
    },
    {
      id: 0x2330,
      name: 'Water Arena Rumble',
      region: 'Village',
      rank: 'Low',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 28: 1 },
      contract: 0,
      time: 50,
      location: MapLocation.WATER_ARENA,
      randomspawn: false,
      reward: 2000,
      ko: 230,
      hrp: 0,
      bosses: [
        {
          monsterId: 28,
          startingArea: 0,
          level: 39,
          size: 100,
          min: 0,
          max: 0
        },
        { monsterId: 29, startingArea: 1, level: 36, size: 100, min: 0, max: 0 }
      ],
      secondaryRewards: []
    },
    {
      id: 0x2331,
      name: 'Arena Free-for-all',
      region: 'Village',
      rank: 'Low',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 19: 1 },
      contract: 0,
      time: 50,
      location: MapLocation.LAND_ARENA,
      randomspawn: false,
      reward: 3000,
      ko: 350,
      hrp: 0,
      bosses: [
        {
          monsterId: 19,
          startingArea: 1,
          level: 36,
          size: 100,
          min: 0,
          max: 0
        },
        {
          monsterId: 26,
          startingArea: 1,
          level: 36,
          size: 100,
          min: 0,
          max: 0
        },
        { monsterId: 23, startingArea: 0, level: 38, size: 115, min: 0, max: 0 }
      ],
      secondaryRewards: []
    }
  ],
  events: []
});
