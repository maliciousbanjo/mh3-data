import type { MonsterLevelTypes } from '../monster-levels';
import type { ItemTypes } from '../items';
import type { MonsterTypes } from '../monsters';
import { MapLocation, StarLevelEnum } from './enum';

export type QuestRegion = 'Village' | 'City';
export type QuestRank = 'Low' | 'High';

export type QuestType =
  | 'gather'
  | 'hunt'
  | 'capture'
  | 'harvest'
  | 'escort'
  | 'multihunt'
  | 'repel'
  | 'slay';

export type QuestGoal =
  | 'gathering'
  | 'slay'
  | 'capture'
  | 'hunt'
  | 'break'
  | 'sever'
  | 'sonic'
  | 'repel'
  | 'other'
  | 'anthill';

/**
 * These properties were derived from the publicly-available MH3 Quest editor.
 * The values are incorrect/flawed. ZeSpyro
 */
interface BossInfo {
  monsterId: MonsterTypes.Monster['id'];
  startingArea: 0 | 1 | 2;
  level: MonsterLevelTypes.MonsterLevel;
  size: number;
  /** controls random distribution of monster's level */
  min: number;
  /** controls random distribution of monster's size */
  max: number;
}

/**
 * Base quest type
 */
export interface Quest {
  id: number;
  name: string;
  /** Village or City */
  region: QuestRegion;
  /** Low or High rank */
  rank: QuestRank;
  /** Gather, hunt, capture, repel, etc */
  type: QuestType;
  goal: QuestGoal;
  client: string;
  /** Cost to initiate quest in zenny */
  contract: number;
  /** Maximum quest time in minutes */
  time: number;
  location: MapLocation;
  /** If true, hunter will spawn in random location */
  randomspawn: boolean;
  /** Quest completion reward in zenny */
  reward: number;
  /** Amount of zenny taken from reward per faint */
  ko: number;
  /** Hunter Rank Points received for quest completion */
  hrp: number;
  secondaryRewards: ItemTypes.QuestReward[];
  /** Key will be an ID for an item or monster depending on the {@link QuestType} */
  targets: Record<number, number>;
  /** Large monsters that can spawn in this quest */
  bosses: BossInfo[];
  // TODO: Will need to create different subquests types with different target properties
  subquests?: object;
}

type NumberRequired = number;

export interface GatheringQuest extends Quest {
  type: 'gather';
  goal: 'gathering';
  targets: Record<ItemTypes.Item['id'], NumberRequired>;
}

export interface HarvestQuest extends Quest {
  type: 'harvest';
  goal: 'gathering';
  /** Harvest Ticket */
  targets: {
    396: 1;
  };
}

export interface HuntQuest extends Quest {
  type: 'hunt';
  goal: 'hunt' | 'slay';
  targets: Record<MonsterTypes.Monster['id'], NumberRequired>;
  bosses: BossInfo[];
}

export interface MultiHuntQuest extends Quest {
  type: 'multihunt';
  goal: 'hunt';
  targets: Record<MonsterTypes.Monster['id'], NumberRequired>;
}

export interface CaptureQuest extends Quest {
  type: 'capture';
  goal: 'capture';
  targets: Record<MonsterTypes.Monster['id'], NumberRequired>;
  bosses: BossInfo[];
}

export interface EscortQuest extends Quest {
  type: 'escort';
  goal: 'slay';
  targets: Record<MonsterTypes.Monster['id'], NumberRequired>;
}

/**
 * Typically used for Arena and Elder Dragon quests
 */
export interface SlayQuest extends Quest {
  type: 'slay';
  goal: 'hunt';
  targets: Record<MonsterTypes.Monster['id'], NumberRequired>;
  bosses: BossInfo[];
}

export interface RepelQuest extends Quest {
  type: 'repel';
  goal: 'repel' | 'other';
  bosses: BossInfo[];
}

export interface QuestMode {
  region: QuestRegion;
  starLevels: {
    [StarLevelEnum.OneStar]: Quest[];
    [StarLevelEnum.TwoStar]: Quest[];
    [StarLevelEnum.ThreeStar]: Quest[];
    [StarLevelEnum.FourStar]: Quest[];
    [StarLevelEnum.FiveStar]: Quest[];
    [StarLevelEnum.SixStar]: Quest[];
  };
  arena: SlayQuest[];
  events: Quest[];
}
