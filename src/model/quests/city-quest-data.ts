import type { QuestMode } from './types';
import { StarLevelEnum, MapLocation } from './enum';
import { deepFreeze } from '../../utils';

export const CityQuestData = deepFreeze<QuestMode>({
  region: 'City',
  starLevels: {
    [StarLevelEnum.OneStar]: [
      {
        id: 0x2710,
        name: "Harvest 'Shroom",
        region: 'City',
        rank: 'Low',
        client: 'Apprentice Cook',
        type: 'gather',
        goal: 'gathering',
        targets: { 141: 14 },
        contract: 0,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x2711,
        name: 'Sunken Treasures',
        region: 'City',
        rank: 'Low',
        client: 'Trader',
        type: 'gather',
        goal: 'gathering',
        targets: { 398: 15 },
        contract: 100,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x2712,
        name: 'The Perfect Panacea',
        region: 'City',
        rank: 'Low',
        client: 'Nurse',
        type: 'gather',
        goal: 'gathering',
        targets: { 310: 5 },
        contract: 100,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x2713,
        name: 'The Jaggi Menace',
        region: 'City',
        rank: 'Low',
        client: 'Female Farmer',
        type: 'slay',
        goal: 'slay',
        targets: { 11: 8 },
        contract: 150,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x2714,
        name: 'Help the "Hunter"',
        region: 'City',
        rank: 'Low',
        client: 'Rich Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 17: 1 },
        contract: 200,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 2000,
        ko: 670,
        hrp: 220,
        bosses: [
          {
            monsterId: 17,
            startingArea: 0,
            level: 23,
            size: 100,
            min: 1,
            max: 3
          }
        ],
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
        id: 0x2715,
        name: 'Playing with Fire',
        region: 'City',
        rank: 'Low',
        client: 'Red-cheeked Huntress',
        type: 'hunt',
        goal: 'hunt',
        targets: { 21: 1 },
        contract: 350,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 3600,
        ko: 1200,
        hrp: 440,
        bosses: [
          {
            monsterId: 21,
            startingArea: 0,
            level: 23,
            size: 100,
            min: 1,
            max: 3
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
          { goal: 'gathering', targets: { 253: 1 }, reward: 1000, hrp: 30 },
          { goal: 'stun', targets: [21], reward: 600, hrp: 60 }
        ]
      },
      {
        id: 0x2716,
        name: "The Fisherman's Tale",
        region: 'City',
        rank: 'Low',
        client: 'Middle-aged Fisherman',
        type: 'capture',
        goal: 'capture',
        targets: { 27: 1 },
        contract: 400,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 5500,
        ko: 1840,
        hrp: 500,
        bosses: [
          {
            monsterId: 27,
            startingArea: 0,
            level: 23,
            size: 100,
            min: 1,
            max: 3
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
        subquests: [{ goal: 'slay', targets: { 13: 5 }, reward: 800, hrp: 70 }]
      },
      {
        id: 0x2716,
        name: 'Secret of the Crystal Bones',
        region: 'City',
        rank: 'Low',
        client: 'Archeologist',
        type: 'gather',
        goal: 'gathering',
        targets: { 364: 14 },
        contract: 100,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
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
        id: 0x2718,
        name: 'No Guts, No Glory',
        region: 'City',
        rank: 'Low',
        client: 'Caravan Leader',
        type: 'gather',
        goal: 'gathering',
        targets: { 397: 10 },
        contract: 150,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
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
        id: 0x2719,
        name: 'Jaggi Population Control',
        region: 'City',
        rank: 'Low',
        client: 'Influential Citizen',
        type: 'capture',
        goal: 'capture',
        targets: { 17: 1 },
        contract: 200,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: false,
        reward: 3000,
        ko: 1000,
        hrp: 240,
        bosses: [
          {
            monsterId: 17,
            startingArea: 0,
            level: 23,
            size: 100,
            min: 1,
            max: 3
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
          { goal: 'slay', targets: { 11: 6 }, reward: 1400, hrp: 70 },
          { goal: 'slay', targets: { 10: 10 }, reward: 1200, hrp: 60 }
        ]
      },
      {
        id: 0x271a,
        name: 'Tracking the Trickster',
        region: 'City',
        rank: 'Low',
        client: 'Newbie Hunter',
        type: 'capture',
        goal: 'capture',
        targets: { 21: 1 },
        contract: 350,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: false,
        reward: 5100,
        ko: 1700,
        hrp: 460,
        bosses: [
          {
            monsterId: 21,
            startingArea: 0,
            level: 23,
            size: 100,
            min: 1,
            max: 3
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
          { goal: 'break', targets: { 21: 0 }, reward: 600, hrp: 60 },
          { goal: 'break', targets: { 21: 1 }, reward: 600, hrp: 60 }
        ]
      },
      {
        id: 0x271b,
        name: 'Goldenfish Opportunity',
        region: 'City',
        rank: 'Low',
        client: 'Fish Fanboy',
        type: 'gather',
        goal: 'gathering',
        targets: { 203: 6 },
        contract: 350,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
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
        id: 0x271c,
        name: 'No Love for Ludroth',
        region: 'City',
        rank: 'Low',
        client: 'Ex-Caravan Sentry',
        type: 'slay',
        goal: 'slay',
        targets: { 13: 10 },
        contract: 150,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
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
        id: 0x271d,
        name: "The Fisherman's Tale",
        region: 'City',
        rank: 'Low',
        client: 'Middle-aged Fisherman',
        type: 'hunt',
        goal: 'hunt',
        targets: { 27: 1 },
        contract: 400,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: false,
        reward: 4000,
        ko: 1340,
        hrp: 480,
        bosses: [
          {
            monsterId: 27,
            startingArea: 0,
            level: 23,
            size: 100,
            min: 1,
            max: 3
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
          { goal: 'break', targets: { 27: 0 }, reward: 600, hrp: 60 },
          { goal: 'sever', targets: { 27: 1 }, reward: 600, hrp: 60 }
        ]
      }
    ],
    [StarLevelEnum.TwoStar]: [
      {
        id: 0x2742,
        name: 'Harvest Tour: Deserted Isle',
        region: 'City',
        rank: 'Low',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x2743,
        name: 'Bug Hunt',
        region: 'City',
        rank: 'Low',
        client: 'Brainy Biologist',
        type: 'slay',
        goal: 'slay',
        targets: { 5: 15 },
        contract: 100,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x2744,
        name: 'Wyvern Conservation',
        region: 'City',
        rank: 'Low',
        client: 'Wise Princess',
        type: 'gather',
        goal: 'gathering',
        targets: { 136: 3 },
        contract: 600,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x2745,
        name: 'A Royal Pain',
        region: 'City',
        rank: 'Low',
        client: 'Middle-aged Knight',
        type: 'capture',
        goal: 'capture',
        targets: { 22: 1 },
        contract: 500,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 7200,
        ko: 2400,
        hrp: 760,
        bosses: [
          {
            monsterId: 22,
            startingArea: 0,
            level: 27,
            size: 100,
            min: 1,
            max: 3
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
          { goal: 'break', targets: { 22: 0 }, reward: 800, hrp: 80 },
          { goal: 'sever', targets: { 22: 1 }, reward: 800, hrp: 80 }
        ]
      },
      {
        id: 0x2746,
        name: 'Harvest Tour: Sandy Plains',
        region: 'City',
        rank: 'Low',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
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
        id: 0x2747,
        name: 'Rhenoplos Rampage!',
        region: 'City',
        rank: 'Low',
        client: 'City Protector',
        type: 'slay',
        goal: 'slay',
        targets: { 16: 13 },
        contract: 1500,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
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
        id: 0x2748,
        name: 'Poached Herbivore Eggs',
        region: 'City',
        rank: 'Low',
        client: 'Newlywed Wife',
        type: 'gather',
        goal: 'gathering',
        targets: { 363: 3 },
        contract: 400,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
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
        id: 0x2749,
        name: 'Specimen Collection',
        region: 'City',
        rank: 'Low',
        client: 'Brainy Biologist',
        type: 'capture',
        goal: 'capture',
        targets: { 19: 1 },
        contract: 500,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: false,
        reward: 7200,
        ko: 2400,
        hrp: 780,
        bosses: [
          {
            monsterId: 19,
            startingArea: 0,
            level: 25,
            size: 100,
            min: 1,
            max: 3
          }
        ],
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
        id: 0x274a,
        name: 'Flooded Forest Extermination',
        region: 'City',
        rank: 'Low',
        client: 'Cattle Rancher',
        type: 'slay',
        goal: 'slay',
        targets: { 4: 20 },
        contract: 150,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
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
        id: 0x274b,
        name: 'Scene of the Crime',
        region: 'City',
        rank: 'Low',
        client: 'Trader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 28: 1 },
        contract: 550,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: false,
        reward: 5600,
        ko: 1870,
        hrp: 820,
        bosses: [
          {
            monsterId: 28,
            startingArea: 0,
            level: 27,
            size: 100,
            min: 1,
            max: 3
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
        subquests: [{ goal: 'fish', targets: [28], reward: 1200, hrp: 60 }]
      },
      {
        id: 0x274c,
        name: 'Lady and the Gobul',
        region: 'City',
        rank: 'Low',
        client: 'Spoiled Princess',
        type: 'capture',
        goal: 'capture',
        targets: { 28: 1 },
        contract: 550,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: false,
        reward: 7600,
        ko: 2540,
        hrp: 840,
        bosses: [
          {
            monsterId: 28,
            startingArea: 0,
            level: 27,
            size: 100,
            min: 1,
            max: 3
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
          { goal: 'break', targets: { 28: 0 }, reward: 800, hrp: 100 },
          { goal: 'sever', targets: { 28: 1 }, reward: 800, hrp: 100 }
        ]
      },
      {
        id: 0x274d,
        name: "The Merchant's Mission",
        region: 'City',
        rank: 'Low',
        client: 'Simple Fur Trader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 22: 1 },
        contract: 500,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: false,
        reward: 5200,
        ko: 1740,
        hrp: 740,
        bosses: [
          {
            monsterId: 22,
            startingArea: 0,
            level: 27,
            size: 100,
            min: 1,
            max: 3
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
          { goal: 'break', targets: { 22: 1 }, reward: 800, hrp: 80 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1200, hrp: 40 }
        ]
      },
      {
        id: 0x274e,
        name: 'Blood From a Stone',
        region: 'City',
        rank: 'Low',
        client: 'Female Geologist',
        type: 'gather',
        goal: 'gathering',
        targets: { 395: 13 },
        contract: 150,
        time: 50,
        location: MapLocation.TUNDRA,
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
        id: 0x274f,
        name: 'Leader of the Icepack',
        region: 'City',
        rank: 'Low',
        client: 'Tundra-expedition Leader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 18: 1 },
        contract: 250,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: false,
        reward: 2800,
        ko: 940,
        hrp: 380,
        bosses: [
          {
            monsterId: 18,
            startingArea: 0,
            level: 25,
            size: 100,
            min: 1,
            max: 5
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
          { goal: 'slay', targets: { 12: 8 }, reward: 1600, hrp: 100 }
        ]
      },
      {
        id: 0x2750,
        name: "The Butler's Great Baggi",
        region: 'City',
        rank: 'Low',
        client: 'White-clad Butler',
        type: 'capture',
        goal: 'capture',
        targets: { 18: 1 },
        contract: 250,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: false,
        reward: 3800,
        ko: 1270,
        hrp: 400,
        bosses: [
          {
            monsterId: 18,
            startingArea: 0,
            level: 25,
            size: 100,
            min: 1,
            max: 5
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
          { goal: 'break', targets: { 18: 0 }, reward: 600, hrp: 40 },
          { goal: 'stun', targets: [18], reward: 600, hrp: 40 }
        ]
      },
      {
        id: 0x36b0,
        name: 'Leading the Charge',
        region: 'City',
        rank: 'Low',
        client: 'Brainy Biologist',
        type: 'hunt',
        goal: 'hunt',
        targets: { 19: 1 },
        contract: 500,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: false,
        reward: 5200,
        ko: 1740,
        hrp: 760,
        bosses: [
          {
            monsterId: 19,
            startingArea: 0,
            level: 25,
            size: 100,
            min: 0,
            max: 3
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
          { goal: 'sever', targets: { 19: 1 }, reward: 700, hrp: 100 },
          { goal: 'anthill', count: 2, reward: 800, hrp: 40 }
        ]
      }
    ],
    [StarLevelEnum.ThreeStar]: [
      {
        id: 0x2774,
        name: 'Harvest Tour: Flooded Forest',
        region: 'City',
        rank: 'Low',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
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
        id: 0x2775,
        name: 'Harvest Tour: Tundra',
        region: 'City',
        rank: 'Low',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: MapLocation.TUNDRA,
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
        id: 0x2776,
        name: 'We Need a Hero',
        region: 'City',
        rank: 'Low',
        client: 'Princess of a Ruined Land',
        type: 'hunt',
        goal: 'hunt',
        targets: { 23: 1 },
        contract: 800,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 8000,
        ko: 2670,
        hrp: 1000,
        bosses: [
          {
            monsterId: 23,
            startingArea: 0,
            level: 29,
            size: 100,
            min: 1,
            max: 3
          }
        ],
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
        id: 0x2777,
        name: 'Into the Danger Zone',
        region: 'City',
        rank: 'Low',
        client: 'City Security Chief',
        type: 'hunt',
        goal: 'hunt',
        targets: { 24: 1 },
        contract: 850,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: false,
        reward: 8800,
        ko: 2940,
        hrp: 1100,
        bosses: [
          {
            monsterId: 24,
            startingArea: 0,
            level: 29,
            size: 100,
            min: 1,
            max: 3
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
          { goal: 'anthill', count: 2, reward: 800, hrp: 40 },
          { goal: 'stun', targets: [24], reward: 1000, hrp: 140 }
        ]
      },
      {
        id: 0x2778,
        name: 'Wanted Alive',
        region: 'City',
        rank: 'Low',
        client: 'Middle-aged Knight',
        type: 'capture',
        goal: 'capture',
        targets: { 24: 1 },
        contract: 850,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: false,
        reward: 12800,
        ko: 4270,
        hrp: 1120,
        bosses: [
          {
            monsterId: 24,
            startingArea: 0,
            level: 29,
            size: 100,
            min: 1,
            max: 3
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
          { goal: 'break', targets: { 24: 0 }, reward: 1200, hrp: 140 },
          { goal: 'sever', targets: { 24: 1 }, reward: 1200, hrp: 140 }
        ]
      },
      {
        id: 0x2779,
        name: 'Rotten Fish',
        region: 'City',
        rank: 'Low',
        client: 'Frontier Baron',
        type: 'capture',
        goal: 'capture',
        targets: { 29: 1 },
        contract: 750,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: false,
        reward: 10600,
        ko: 3540,
        hrp: 1020,
        bosses: [
          {
            monsterId: 29,
            startingArea: 0,
            level: 29,
            size: 100,
            min: 1,
            max: 3
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
          { goal: 'break', targets: { 29: 0 }, reward: 800, hrp: 120 },
          { goal: 'sever', targets: { 29: 1 }, reward: 800, hrp: 120 }
        ]
      },
      {
        id: 0x277a,
        name: 'The Creeping Venom',
        region: 'City',
        rank: 'Low',
        client: 'Cocky Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 25: 1 },
        contract: 600,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: false,
        reward: 6000,
        ko: 2000,
        hrp: 860,
        bosses: [
          {
            monsterId: 25,
            startingArea: 0,
            level: 27,
            size: 100,
            min: 1,
            max: 4
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
          { goal: 'slay', targets: { 9: 12 }, reward: 1200, hrp: 70 },
          { goal: 'eggs', count: 8, reward: 800, hrp: 55 }
        ]
      },
      {
        id: 0x277b,
        name: 'The Lost Expedition',
        region: 'City',
        rank: 'Low',
        client: 'Female Geologist',
        type: 'hunt',
        goal: 'hunt',
        targets: { 26: 1 },
        contract: 800,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: false,
        reward: 8000,
        ko: 2670,
        hrp: 1000,
        bosses: [
          {
            monsterId: 26,
            startingArea: 0,
            level: 29,
            size: 100,
            min: 1,
            max: 4
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
          { goal: 'pitfall', targets: [26], reward: 500, hrp: 60 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1600, hrp: 60 }
        ]
      },
      {
        id: 0x277c,
        name: "The Bard's Barioth",
        region: 'City',
        rank: 'Low',
        client: 'Wandering Bard',
        type: 'capture',
        goal: 'capture',
        targets: { 26: 1 },
        contract: 800,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: false,
        reward: 11100,
        ko: 3700,
        hrp: 1020,
        bosses: [
          {
            monsterId: 26,
            startingArea: 0,
            level: 29,
            size: 100,
            min: 1,
            max: 4
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
          { goal: 'break', targets: { 26: 1 }, reward: 1000, hrp: 120 },
          { goal: 'break', targets: { 26: 0 }, reward: 1000, hrp: 120 }
        ]
      },
      {
        id: 0x277d,
        name: 'Roll the Uroktor',
        region: 'City',
        rank: 'Low',
        client: 'Caravan Leader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 14: 15 },
        contract: 150,
        time: 50,
        location: MapLocation.VOLCANO,
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
        id: 0x277e,
        name: 'Powder Burns',
        region: 'City',
        rank: 'Low',
        client: 'City Armorer',
        type: 'gather',
        goal: 'gathering',
        targets: { 350: 3 },
        contract: 800,
        time: 50,
        location: MapLocation.VOLCANO,
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
        id: 0x277f,
        name: "The Volcano's Fury",
        region: 'City',
        rank: 'Low',
        client: 'Scarred Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 20: 1 },
        contract: 850,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: false,
        reward: 8800,
        ko: 2940,
        hrp: 1100,
        bosses: [
          {
            monsterId: 20,
            startingArea: 0,
            level: 29,
            size: 100,
            min: 1,
            max: 3
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
          { goal: 'gathering', targets: { 253: 3 }, reward: 3200, hrp: 140 },
          { goal: 'gathering', targets: { 253: 1 }, reward: 1600, hrp: 70 }
        ]
      },
      {
        id: 0x2780,
        name: 'To Catch an Uragaan',
        region: 'City',
        rank: 'Low',
        client: 'Brainy Biologist',
        type: 'capture',
        goal: 'capture',
        targets: { 20: 1 },
        contract: 850,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: false,
        reward: 12800,
        ko: 4270,
        hrp: 1120,
        bosses: [
          {
            monsterId: 20,
            startingArea: 0,
            level: 29,
            size: 100,
            min: 1,
            max: 3
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
          { goal: 'break', targets: { 20: 0 }, reward: 1200, hrp: 140 },
          { goal: 'sever', targets: { 20: 1 }, reward: 1200, hrp: 140 }
        ]
      },
      {
        id: 0x2781,
        name: '[Advanced] Double Trouble',
        region: 'City',
        rank: 'Low',
        client: 'Head of Island Guard',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 22: 1, 23: 1 },
        contract: 1550,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 15700,
        ko: 5240,
        hrp: 1820,
        bosses: [
          {
            monsterId: 22,
            startingArea: 0,
            level: 40,
            size: 100,
            min: 0,
            max: 3
          },
          {
            monsterId: 23,
            startingArea: 1,
            level: 40,
            size: 100,
            min: 0,
            max: 3
          }
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
        id: 0x2782,
        name: '[Advanced] Fort Gigginox',
        region: 'City',
        rank: 'Low',
        client: 'Ruler of the Frozen Lands',
        type: 'capture',
        goal: 'capture',
        targets: { 25: 1 },
        contract: 700,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: false,
        reward: 10200,
        ko: 3400,
        hrp: 1120,
        bosses: [
          {
            monsterId: 25,
            startingArea: 0,
            level: 32,
            size: 100,
            min: 2,
            max: 4
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
          { goal: 'break', targets: { 25: 0 }, reward: 1000, hrp: 140 },
          { goal: 'break', targets: { 25: 1 }, reward: 1000, hrp: 140 }
        ]
      },
      {
        id: 0x2783,
        name: '[Advanced] Rathalos Alert',
        region: 'City',
        rank: 'Low',
        client: 'Wyvern Observation Post',
        type: 'capture',
        goal: 'capture',
        targets: { 23: 1 },
        contract: 850,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: false,
        reward: 11600,
        ko: 3870,
        hrp: 1300,
        bosses: [
          {
            monsterId: 23,
            startingArea: 0,
            level: 32,
            size: 100,
            min: 2,
            max: 3
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
          { goal: 'break', targets: { 23: 0 }, reward: 1200, hrp: 140 },
          { goal: 'sever', targets: { 23: 1 }, reward: 1200, hrp: 140 }
        ]
      },
      {
        id: 0x2784,
        name: '[Advanced] Agnaktor Alert',
        region: 'City',
        rank: 'Low',
        client: 'Volcano Observation Post',
        type: 'hunt',
        goal: 'hunt',
        targets: { 30: 1 },
        contract: 1100,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: false,
        reward: 11000,
        ko: 3670,
        hrp: 1490,
        bosses: [
          {
            monsterId: 30,
            startingArea: 0,
            level: 32,
            size: 100,
            min: 2,
            max: 3
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
          { goal: 'break', targets: { 30: 0 }, reward: 1400, hrp: 160 },
          { goal: 'sever', targets: { 30: 1 }, reward: 1400, hrp: 160 }
        ]
      },
      {
        id: 0x36b1,
        name: "The Fisherman's Fiend",
        region: 'City',
        rank: 'Low',
        client: 'Frontier Baron',
        type: 'hunt',
        goal: 'hunt',
        targets: { 29: 1 },
        contract: 750,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: false,
        reward: 7600,
        ko: 2540,
        hrp: 1000,
        bosses: [
          {
            monsterId: 29,
            startingArea: 0,
            level: 27,
            size: 100,
            min: 0,
            max: 3
          }
        ],
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
        id: 0x36b2,
        name: 'The Festival of Fear',
        region: 'City',
        rank: 'Low',
        client: 'Desert Mayor',
        type: 'slay',
        goal: 'hunt',
        targets: { 33: 1 },
        contract: 1500,
        time: 30,
        location: MapLocation.GREAT_DESERT,
        randomspawn: false,
        reward: 15000,
        ko: 5000,
        hrp: 1200,
        bosses: [
          {
            monsterId: 33,
            startingArea: 0,
            level: 30,
            size: 100,
            min: 0,
            max: 0
          }
        ],
        secondaryRewards: [
          { itemId: 406, count: 1, chance: 35 },
          { itemId: 301, count: 1, chance: 25 },
          { itemId: 300, count: 1, chance: 20 },
          { itemId: 407, count: 1, chance: 15 },
          { itemId: 413, count: 1, chance: 5 }
        ]
      },
      {
        id: 0x3e80,
        name: 'The Festival of Fear',
        region: 'City',
        rank: 'Low',
        client: 'Guildmaster',
        type: 'repel',
        goal: 'repel',
        targets: { 33: 60 },
        contract: 750,
        time: 30,
        location: MapLocation.GREAT_DESERT,
        randomspawn: false,
        reward: 7500,
        ko: 2500,
        hrp: 600,
        bosses: [
          {
            monsterId: 33,
            startingArea: 0,
            level: 27,
            size: 100,
            min: 0,
            max: 0
          }
        ],
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
    [StarLevelEnum.FourStar]: [
      {
        id: 0x3a98,
        name: 'Harvest Tour: Deserted Isle',
        region: 'City',
        rank: 'High',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x3a99,
        name: 'Jump a Jaggi',
        region: 'City',
        rank: 'High',
        client: 'Head Village Guard',
        type: 'hunt',
        goal: 'hunt',
        targets: { 17: 1 },
        contract: 300,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: true,
        reward: 3000,
        ko: 1000,
        hrp: 320,
        bosses: [
          {
            monsterId: 17,
            startingArea: 0,
            level: 45,
            size: 100,
            min: 1,
            max: 10
          }
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
        id: 0x3a9a,
        name: 'Playing with Fire',
        region: 'City',
        rank: 'High',
        client: 'Red-cheeked Huntress',
        type: 'hunt',
        goal: 'hunt',
        targets: { 21: 1 },
        contract: 500,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: true,
        reward: 5400,
        ko: 1800,
        hrp: 540,
        bosses: [
          {
            monsterId: 21,
            startingArea: 0,
            level: 45,
            size: 100,
            min: 1,
            max: 10
          }
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
        id: 0x3a9b,
        name: 'Reel In a Rathian',
        region: 'City',
        rank: 'High',
        client: 'Village Protector',
        type: 'hunt',
        goal: 'hunt',
        targets: { 22: 1 },
        contract: 750,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: true,
        reward: 7800,
        ko: 2600,
        hrp: 840,
        bosses: [
          {
            monsterId: 22,
            startingArea: 0,
            level: 45,
            size: 100,
            min: 1,
            max: 10
          }
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
        id: 0x3a9c,
        name: 'Harvest Tour: Sandy Plains',
        region: 'City',
        rank: 'High',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
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
        id: 0x3a9d,
        name: 'No Guts, No Glory',
        region: 'City',
        rank: 'High',
        client: 'Caravan Leader',
        type: 'gather',
        goal: 'gathering',
        targets: { 397: 10 },
        contract: 200,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
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
        id: 0x3a9e,
        name: 'Jumping for Jaggi',
        region: 'City',
        rank: 'High',
        client: 'City Security Chief',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 17: 2 },
        contract: 600,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: true,
        reward: 6000,
        ko: 2000,
        hrp: 520,
        bosses: [
          {
            monsterId: 17,
            startingArea: 0,
            level: 45,
            size: 100,
            min: 1,
            max: 10
          },
          {
            monsterId: 17,
            startingArea: 1,
            level: 45,
            size: 100,
            min: 1,
            max: 10
          }
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
        id: 0x3a9f,
        name: 'The Mysterious Mimic',
        region: 'City',
        rank: 'High',
        client: 'Brainy Biologist',
        type: 'capture',
        goal: 'capture',
        targets: { 21: 1 },
        contract: 500,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: true,
        reward: 7900,
        ko: 2640,
        hrp: 560,
        bosses: [
          {
            monsterId: 21,
            startingArea: 0,
            level: 45,
            size: 100,
            min: 1,
            max: 10
          }
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
        id: 0x3aa0,
        name: 'Ambush the Ambusher',
        region: 'City',
        rank: 'High',
        client: 'Newbie Hunter',
        type: 'capture',
        goal: 'capture',
        targets: { 22: 1 },
        contract: 750,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: true,
        reward: 10800,
        ko: 3600,
        hrp: 860,
        bosses: [
          {
            monsterId: 22,
            startingArea: 0,
            level: 45,
            size: 100,
            min: 1,
            max: 10
          }
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
        id: 0x3aa1,
        name: 'Avenging the Fallen Hunter',
        region: 'City',
        rank: 'High',
        client: 'Wounded Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 19: 1 },
        contract: 750,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: true,
        reward: 7800,
        ko: 2600,
        hrp: 860,
        bosses: [
          {
            monsterId: 19,
            startingArea: 0,
            level: 45,
            size: 100,
            min: 1,
            max: 10
          }
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
        id: 0x3aa2,
        name: 'Neopteron Pest Control',
        region: 'City',
        rank: 'High',
        client: 'Cattle Rancher',
        type: 'slay',
        goal: 'slay',
        targets: { 4: 20 },
        contract: 200,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
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
        id: 0x3aa3,
        name: "A Ludroth Lickin'",
        region: 'City',
        rank: 'High',
        client: 'Ex-Caravan Sentry',
        type: 'slay',
        goal: 'slay',
        targets: { 13: 10 },
        contract: 250,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
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
        id: 0x3aa4,
        name: 'Fine Kettle of Fish',
        region: 'City',
        rank: 'High',
        client: 'Fish Fanboy',
        type: 'gather',
        goal: 'gathering',
        targets: { 203: 6 },
        contract: 400,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
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
        id: 0x3aa5,
        name: "The Fisherman's Tale",
        region: 'City',
        rank: 'High',
        client: 'Middle-aged Fisherman',
        type: 'capture',
        goal: 'capture',
        targets: { 27: 1 },
        contract: 600,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: true,
        reward: 8500,
        ko: 2840,
        hrp: 600,
        bosses: [
          {
            monsterId: 27,
            startingArea: 0,
            level: 45,
            size: 100,
            min: 1,
            max: 10
          }
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
        id: 0x3aa6,
        name: 'Grab a Gobul',
        region: 'City',
        rank: 'High',
        client: 'Trader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 28: 1 },
        contract: 800,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: true,
        reward: 8400,
        ko: 2800,
        hrp: 920,
        bosses: [
          {
            monsterId: 28,
            startingArea: 0,
            level: 45,
            size: 100,
            min: 1,
            max: 10
          }
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
        id: 0x3a7,
        name: '[Advanced] Fearsome Twosome',
        region: 'City',
        rank: 'High',
        client: 'Head Village Guard',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 27: 2 },
        contract: 1200,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: true,
        reward: 12000,
        ko: 4000,
        hrp: 1220,
        bosses: [
          {
            monsterId: 27,
            startingArea: 0,
            level: 44,
            size: 100,
            min: 2,
            max: 10
          },
          {
            monsterId: 27,
            startingArea: 1,
            level: 44,
            size: 100,
            min: 2,
            max: 10
          }
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
        id: 0x3aa8,
        name: '[Advanced] Barroth Buster',
        region: 'City',
        rank: 'High',
        client: 'Wounded Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 19: 1 },
        contract: 900,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: true,
        reward: 9400,
        ko: 3140,
        hrp: 1120,
        bosses: [
          {
            monsterId: 19,
            startingArea: 0,
            level: 48,
            size: 100,
            min: 2,
            max: 10
          }
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
        id: 0x3aa9,
        name: '[Advanced] Grab a Gobul',
        region: 'City',
        rank: 'High',
        client: 'Seafaring Trader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 28: 1 },
        contract: 1000,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: true,
        reward: 10000,
        ko: 3340,
        hrp: 1200,
        bosses: [
          {
            monsterId: 28,
            startingArea: 0,
            level: 48,
            size: 100,
            min: 2,
            max: 10
          }
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
        id: 0x3aaa,
        name: '[Advanced] The Jaggia Menace',
        region: 'City',
        rank: 'High',
        client: 'Female Farmer',
        type: 'slay',
        goal: 'slay',
        targets: { 11: 25 },
        contract: 600,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
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
        id: 0x3e81,
        name: 'Rumble in the Great Desert',
        region: 'City',
        rank: 'High',
        client: 'Guildmaster',
        type: 'slay',
        goal: 'hunt',
        targets: { 33: 1 },
        contract: 3600,
        time: 30,
        location: MapLocation.GREAT_DESERT,
        randomspawn: false,
        reward: 36000,
        ko: 12000,
        hrp: 2000,
        bosses: [
          {
            monsterId: 33,
            startingArea: 0,
            level: 52,
            size: 100,
            min: 0,
            max: 0
          }
        ],
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
    [StarLevelEnum.FiveStar]: [
      {
        id: 0x3aca,
        name: 'Rathalos Research',
        region: 'City',
        rank: 'High',
        client: 'Wyvern Researcher',
        type: 'capture',
        goal: 'capture',
        targets: { 23: 1 },
        contract: 1200,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: true,
        reward: 16000,
        ko: 5340,
        hrp: 1120,
        bosses: [
          {
            monsterId: 23,
            startingArea: 0,
            level: 48,
            size: 100,
            min: 2,
            max: 10
          }
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
        id: 0x3acb,
        name: 'Into the Danger Zone',
        region: 'City',
        rank: 'High',
        client: 'City Security Chief',
        type: 'hunt',
        goal: 'hunt',
        targets: { 24: 1 },
        contract: 1300,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: true,
        reward: 13200,
        ko: 4400,
        hrp: 1200,
        bosses: [
          {
            monsterId: 24,
            startingArea: 0,
            level: 48,
            size: 100,
            min: 2,
            max: 10
          }
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
        id: 0x3acc,
        name: 'Harvest Tour: Flooded Forest',
        region: 'City',
        rank: 'High',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
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
        id: 0x3acd,
        name: 'Rotten Fish',
        region: 'City',
        rank: 'High',
        client: 'Frontier Baron',
        type: 'capture',
        goal: 'capture',
        targets: { 29: 1 },
        contract: 1100,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: true,
        reward: 14900,
        ko: 4970,
        hrp: 1120,
        bosses: [
          {
            monsterId: 29,
            startingArea: 0,
            level: 48,
            size: 100,
            min: 2,
            max: 10
          }
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
        id: 0x3ace,
        name: 'Harvest Tour: Tundra',
        region: 'City',
        rank: 'High',
        client: 'Felyne Tour Guide',
        type: 'harvest',
        goal: 'gathering',
        targets: { 396: 1 },
        contract: 0,
        time: 50,
        location: MapLocation.TUNDRA,
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
        id: 0x3acf,
        name: 'Leader of the Icepack',
        region: 'City',
        rank: 'High',
        client: 'Tundra-expedition Leader',
        type: 'hunt',
        goal: 'hunt',
        targets: { 18: 1 },
        contract: 400,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: true,
        reward: 4200,
        ko: 1400,
        hrp: 480,
        bosses: [
          {
            monsterId: 18,
            startingArea: 0,
            level: 45,
            size: 100,
            min: 1,
            max: 12
          }
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
        id: 0x3ad0,
        name: 'The Creeping Venom',
        region: 'City',
        rank: 'High',
        client: 'Cocky Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 25: 1 },
        contract: 900,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: true,
        reward: 9000,
        ko: 3000,
        hrp: 960,
        bosses: [
          {
            monsterId: 25,
            startingArea: 0,
            level: 48,
            size: 100,
            min: 2,
            max: 11
          }
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
        id: 0x3ad1,
        name: 'Gigginox RX',
        region: 'City',
        rank: 'High',
        client: 'Researcher of Medicine',
        type: 'capture',
        goal: 'capture',
        targets: { 25: 1 },
        contract: 900,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: true,
        reward: 12500,
        ko: 4170,
        hrp: 980,
        bosses: [
          {
            monsterId: 25,
            startingArea: 0,
            level: 48,
            size: 100,
            min: 2,
            max: 11
          }
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
        id: 0x3ad2,
        name: 'The Lost Expedition',
        region: 'City',
        rank: 'High',
        client: 'Female Geologist',
        type: 'hunt',
        goal: 'hunt',
        targets: { 26: 1 },
        contract: 1200,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: true,
        reward: 12000,
        ko: 4000,
        hrp: 1100,
        bosses: [
          {
            monsterId: 26,
            startingArea: 0,
            level: 48,
            size: 100,
            min: 2,
            max: 11
          }
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
        id: 0x3ad3,
        name: 'Roll the Uroktor',
        region: 'City',
        rank: 'High',
        client: 'Caravan Leader',
        type: 'slay',
        goal: 'slay',
        targets: { 14: 20 },
        contract: 250,
        time: 50,
        location: MapLocation.VOLCANO,
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
        id: 0x3ad4,
        name: 'Run Down a Rathalos',
        region: 'City',
        rank: 'High',
        client: 'Princess of a Ruined Land',
        type: 'hunt',
        goal: 'hunt',
        targets: { 23: 1 },
        contract: 1200,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: true,
        reward: 12000,
        ko: 4000,
        hrp: 1100,
        bosses: [
          {
            monsterId: 23,
            startingArea: 0,
            level: 48,
            size: 100,
            min: 2,
            max: 10
          }
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
        id: 0x3ad5,
        name: 'The Thrill of the Hunt',
        region: 'City',
        rank: 'High',
        client: 'Scarred Hunter',
        type: 'hunt',
        goal: 'hunt',
        targets: { 20: 1 },
        contract: 1300,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: true,
        reward: 13200,
        ko: 4400,
        hrp: 1200,
        bosses: [
          {
            monsterId: 20,
            startingArea: 0,
            level: 48,
            size: 100,
            min: 2,
            max: 10
          }
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
        id: 0x3ad6,
        name: 'The Molten Monstrosity',
        region: 'City',
        rank: 'High',
        client: 'Fire Country Chieftain',
        type: 'hunt',
        goal: 'hunt',
        targets: { 30: 1 },
        contract: 1350,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: true,
        reward: 13800,
        ko: 4600,
        hrp: 1240,
        bosses: [
          {
            monsterId: 30,
            startingArea: 0,
            level: 48,
            size: 100,
            min: 2,
            max: 10
          }
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
        id: 0x3ad7,
        name: 'Agnaktor Alert',
        region: 'City',
        rank: 'High',
        client: 'Guild Observation Post',
        type: 'capture',
        goal: 'capture',
        targets: { 30: 1 },
        contract: 1350,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: true,
        reward: 17800,
        ko: 5940,
        hrp: 1260,
        bosses: [
          {
            monsterId: 30,
            startingArea: 0,
            level: 48,
            size: 100,
            min: 2,
            max: 10
          }
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
        id: 0x3ad8,
        name: '[Advanced] Run Down Rathalos',
        region: 'City',
        rank: 'High',
        client: 'Princess of a Ruined Land',
        type: 'hunt',
        goal: 'hunt',
        targets: { 23: 1 },
        contract: 1400,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: true,
        reward: 14000,
        ko: 4670,
        hrp: 1430,
        bosses: [
          {
            monsterId: 23,
            startingArea: 0,
            level: 50,
            size: 100,
            min: 2,
            max: 10
          }
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
        id: 0x3ad9,
        name: '[Advanced] Lick a Lagiacrus',
        region: 'City',
        rank: 'High',
        client: 'Frontier Baron',
        type: 'hunt',
        goal: 'hunt',
        targets: { 29: 1 },
        contract: 1300,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: true,
        reward: 13150,
        ko: 4390,
        hrp: 1430,
        bosses: [
          {
            monsterId: 29,
            startingArea: 0,
            level: 50,
            size: 100,
            min: 2,
            max: 10
          }
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
        id: 0x3ada,
        name: '[Advanced] Bump Off Barioth',
        region: 'City',
        rank: 'High',
        client: 'Spoiled Princess',
        type: 'hunt',
        goal: 'hunt',
        targets: { 26: 1 },
        contract: 1400,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: true,
        reward: 14000,
        ko: 4670,
        hrp: 1430,
        bosses: [
          {
            monsterId: 26,
            startingArea: 0,
            level: 50,
            size: 100,
            min: 2,
            max: 11
          }
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
        id: 0x3adb,
        name: '[Advanced] Heroes Wanted',
        region: 'City',
        rank: 'High',
        client: 'Fire Country Princess',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 20: 2 },
        contract: 3000,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: true,
        reward: 30000,
        ko: 10000,
        hrp: 2500,
        bosses: [
          {
            monsterId: 20,
            startingArea: 1,
            level: 58,
            size: 100,
            min: 0,
            max: 10
          },
          {
            monsterId: 20,
            startingArea: 2,
            level: 58,
            size: 100,
            min: 0,
            max: 10
          }
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
        id: 0x4a38,
        name: 'Double Trouble',
        region: 'City',
        rank: 'High',
        client: 'Head of Island Guard',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 22: 1, 23: 1 },
        contract: 1950,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: true,
        reward: 19800,
        ko: 6600,
        hrp: 1560,
        bosses: [
          {
            monsterId: 22,
            startingArea: 0,
            level: 54,
            size: 100,
            min: 0,
            max: 10
          },
          {
            monsterId: 23,
            startingArea: 1,
            level: 54,
            size: 100,
            min: 0,
            max: 10
          }
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
    [StarLevelEnum.SixStar]: [
      {
        id: 0x3afc,
        name: 'Deep-six a Deviljho',
        region: 'City',
        rank: 'High',
        client: 'Ex-Hunter Merchant',
        type: 'hunt',
        goal: 'hunt',
        targets: { 32: 1 },
        contract: 1800,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: true,
        reward: 18000,
        ko: 6000,
        hrp: 1800,
        bosses: [
          {
            monsterId: 32,
            startingArea: 0,
            level: 52,
            size: 100,
            min: 0,
            max: 13
          }
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
        id: 0x3afd,
        name: 'Bedevil a Deviljho',
        region: 'City',
        rank: 'High',
        client: 'Borderlands Sentry',
        type: 'hunt',
        goal: 'hunt',
        targets: { 32: 1 },
        contract: 1800,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: true,
        reward: 18000,
        ko: 6000,
        hrp: 1800,
        bosses: [
          {
            monsterId: 32,
            startingArea: 0,
            level: 52,
            size: 100,
            min: 0,
            max: 13
          }
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
        id: 0x3afe,
        name: 'Into the Fire',
        region: 'City',
        rank: 'High',
        client: 'Fire Country Chieftain',
        type: 'hunt',
        goal: 'hunt',
        targets: { 32: 1 },
        contract: 1800,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: true,
        reward: 18000,
        ko: 6000,
        hrp: 1800,
        bosses: [
          {
            monsterId: 32,
            startingArea: 0,
            level: 52,
            size: 100,
            min: 0,
            max: 13
          }
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
        id: 0x3aff,
        name: 'Double Trouble',
        region: 'City',
        rank: 'High',
        client: 'Head of Island Guard',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 22: 1, 23: 1 },
        contract: 2200,
        time: 50,
        location: MapLocation.DESERTED_ISLAND,
        randomspawn: true,
        reward: 22000,
        ko: 7340,
        hrp: 1940,
        bosses: [
          {
            monsterId: 22,
            startingArea: 0,
            level: 53,
            size: 100,
            min: 0,
            max: 10
          },
          {
            monsterId: 23,
            startingArea: 1,
            level: 53,
            size: 100,
            min: 0,
            max: 10
          }
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
        id: 0x3b01,
        name: "The Princess's Pride",
        region: 'City',
        rank: 'High',
        client: 'Spoiled Princess',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 24: 2 },
        contract: 2600,
        time: 50,
        location: MapLocation.SANDY_PLAINS,
        randomspawn: true,
        reward: 26000,
        ko: 8670,
        hrp: 2400,
        bosses: [
          {
            monsterId: 24,
            startingArea: 0,
            level: 53,
            size: 100,
            min: 0,
            max: 10
          },
          {
            monsterId: 24,
            startingArea: 1,
            level: 53,
            size: 100,
            min: 0,
            max: 10
          }
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
        id: 0x3b01,
        name: 'A Sea of Dragons',
        region: 'City',
        rank: 'High',
        client: 'City Guild Representative',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 29: 1, 28: 1 },
        contract: 1950,
        time: 50,
        location: MapLocation.FLOODED_FOREST,
        randomspawn: true,
        reward: 19800,
        ko: 6600,
        hrp: 2020,
        bosses: [
          {
            monsterId: 29,
            startingArea: 1,
            level: 53,
            size: 100,
            min: 0,
            max: 10
          },
          {
            monsterId: 28,
            startingArea: 1,
            level: 53,
            size: 100,
            min: 0,
            max: 10
          }
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
        id: 0x3b03,
        name: 'Tragedy on the Tundra',
        region: 'City',
        rank: 'High',
        client: 'Troop Captain',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 26: 2 },
        contract: 2400,
        time: 50,
        location: MapLocation.TUNDRA,
        randomspawn: true,
        reward: 24000,
        ko: 8000,
        hrp: 2200,
        bosses: [
          {
            monsterId: 26,
            startingArea: 1,
            level: 53,
            size: 100,
            min: 0,
            max: 11
          },
          {
            monsterId: 26,
            startingArea: 2,
            level: 53,
            size: 100,
            min: 0,
            max: 11
          }
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
        id: 0x3b04,
        name: 'A Burnt Offering',
        region: 'City',
        rank: 'High',
        client: 'Fire Country Princess',
        type: 'multihunt',
        goal: 'hunt',
        targets: { 30: 1, 20: 1 },
        contract: 2700,
        time: 50,
        location: MapLocation.VOLCANO,
        randomspawn: true,
        reward: 27000,
        ko: 9000,
        hrp: 2440,
        bosses: [
          {
            monsterId: 30,
            startingArea: 0,
            level: 53,
            size: 100,
            min: 0,
            max: 10
          },
          {
            monsterId: 20,
            startingArea: 1,
            level: 53,
            size: 100,
            min: 0,
            max: 10
          }
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
        id: 0x4a39,
        name: 'The Brilliant Darkness',
        region: 'City',
        rank: 'High',
        client: 'Desert Mayor',
        type: 'slay',
        goal: 'hunt',
        targets: { 34: 1 },
        contract: 3600,
        time: 50,
        location: MapLocation.SACRED_LAND,
        randomspawn: true,
        reward: 36000,
        ko: 12000,
        hrp: 2800,
        bosses: [
          {
            monsterId: 34,
            startingArea: 0,
            level: 52,
            size: 100,
            min: 0,
            max: 0
          }
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
      }
    ]
  },
  /**
   * ! Incomplete, @see http://mh3analysis.web.fc2.com/quest/
   */
  arena: [
    {
      id: 0xea61,
      name: 'Grudge Match: Royal Ludroth',
      region: 'City',
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
      id: 0xea62,
      name: 'Grudge Match: Rathian',
      region: 'City',
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
      id: 0xea64,
      name: 'Grudge Match: Uragaan',
      region: 'City',
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
      id: 0xea66,
      name: 'Grudge Match: Bird and Brute',
      region: 'City',
      rank: 'Low',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 21: 1, 19: 1 },
      contract: 0,
      time: 50,
      location: MapLocation.LAND_ARENA,
      randomspawn: false,
      reward: 1000,
      ko: 200,
      hrp: 0,
      bosses: [
        {
          monsterId: 21,
          startingArea: 0,
          level: 55,
          size: 100,
          min: 0,
          max: 0
        },
        { monsterId: 19, startingArea: 0, level: 55, size: 100, min: 0, max: 0 }
      ],
      secondaryRewards: []
    },
    {
      id: 0xea69,
      name: 'Grudge Match: Ice and Fire',
      region: 'City',
      rank: 'High',
      client: 'Announcer/Receptionist',
      type: 'slay',
      goal: 'hunt',
      targets: { 26: 1, 30: 1 },
      contract: 0,
      time: 50,
      location: MapLocation.LAND_ARENA,
      randomspawn: false,
      reward: 1500,
      ko: 220,
      hrp: 0,
      bosses: [
        {
          monsterId: 26,
          startingArea: 0,
          level: 55,
          size: 100,
          min: 0,
          max: 0
        },
        { monsterId: 30, startingArea: 0, level: 55, size: 100, min: 0, max: 0 }
      ],
      secondaryRewards: []
    }
  ],
  /**
   * ! Incomplete, @see http://mh3analysis.web.fc2.com/quest/
   */
  events: [
    {
      id: 0xee49,
      name: 'Jump Four Jaggi',
      region: 'City',
      rank: 'Low',
      client: 'Guild Subcontractor',
      type: 'hunt',
      goal: 'hunt',
      targets: { 17: 4 },
      contract: 400,
      time: 50,
      location: MapLocation.SANDY_PLAINS,
      randomspawn: false,
      reward: 4000,
      ko: 1340,
      hrp: 440,
      bosses: [
        { monsterId: 17, startingArea: 0, level: 23, size: 100, min: 1, max: 3 }
      ],
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
      id: 0xee50,
      name: 'Blood Sport',
      region: 'City',
      rank: 'Low',
      client: 'Spoiled Princess',
      type: 'multihunt',
      goal: 'hunt',
      targets: { 24: 1, 20: 1 },
      contract: 1750,
      time: 50,
      location: MapLocation.LAND_ARENA,
      randomspawn: false,
      reward: 17600,
      ko: 5870,
      hrp: 1760,
      bosses: [
        {
          monsterId: 24,
          startingArea: 0,
          level: 40,
          size: 100,
          min: 0,
          max: 9
        },
        { monsterId: 20, startingArea: 0, level: 40, size: 100, min: 0, max: 9 }
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
      id: 0xee55,
      name: 'Marine Warfare',
      region: 'City',
      rank: 'Low',
      client: 'Guild Weapons Development',
      type: 'multihunt',
      goal: 'hunt',
      targets: { 28: 2 },
      contract: 1650,
      time: 50,
      location: MapLocation.WATER_ARENA,
      randomspawn: false,
      reward: 16800,
      ko: 5600,
      hrp: 1480,
      bosses: [
        {
          monsterId: 28,
          startingArea: 0,
          level: 54,
          size: 100,
          min: 0,
          max: 10
        },
        {
          monsterId: 28,
          startingArea: 1,
          level: 54,
          size: 100,
          min: 0,
          max: 10
        }
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
      id: 0xee57,
      name: 'Hot Deal',
      region: 'City',
      rank: 'High',
      client: 'Shady Merchant',
      type: 'hunt',
      goal: 'hunt',
      targets: { 30: 2 },
      contract: 2750,
      time: 50,
      location: MapLocation.VOLCANO,
      randomspawn: true,
      reward: 13800,
      ko: 4600,
      hrp: 1240,
      bosses: [
        {
          monsterId: 30,
          startingArea: 0,
          level: 57,
          size: 100,
          min: 0,
          max: 10
        }
      ],
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
      id: 0xee5c, // TODO: This is likely wrong, but its ID is not listed on the JP analysis site
      name: 'Fiery Skies, Frozen Fields',
      region: 'City',
      rank: 'High',
      client: 'Deserted Island Maiden',
      type: 'multihunt',
      goal: 'hunt',
      targets: { 26: 1, 23: 1 },
      contract: 4200,
      time: 50,
      location: MapLocation.LAND_ARENA,
      randomspawn: false,
      reward: 42000,
      ko: 14000,
      hrp: 4290,
      bosses: [
        {
          monsterId: 26,
          startingArea: 0,
          level: 60,
          size: 100,
          min: 0,
          max: 11
        },
        {
          monsterId: 23,
          startingArea: 0,
          level: 59,
          size: 100,
          min: 0,
          max: 10
        }
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
