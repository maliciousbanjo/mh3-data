import type { MonsterLevelTypes } from '../monster-levels';
import type { ItemTypes } from '../items';
import type { MonsterTypes } from '../monsters';
import { MapLocation, StarLevel } from './enum';

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
  /** TODO: Unidentified monster levels: 30, 55, 59, 60 */
  level: MonsterLevelTypes.MonsterLevel | 30 | 55 | 59 | 60;

  size: number;
  /** controls random distribution of monster's HP */
  min: number;
  /** controls random distribution of monster's size */
  max: number;
}

/**
 * Base quest type
 *
 * It looks like different questTypes have different properties
 * 'target' points to differnt ids. Gather quests have IDs for items. Hunt/capture likely
 * have IDs for monsters, but the monsters themselves don't seem to have IDs.
 */
export interface Quest {
  id: number;
  name: string;
  client: string;
  type: QuestType;
  goal: QuestGoal;
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

export interface QuestRegion {
  name: 'Village' | 'City';
  starLevels: {
    [StarLevel.OneStar]: Quest[];
    [StarLevel.TwoStar]: Quest[];
    [StarLevel.ThreeStar]: Quest[];
    [StarLevel.FourStar]: Quest[];
    [StarLevel.FiveStar]: Quest[];
    [StarLevel.SixStar]: Quest[];
  };
  arena: SlayQuest[];
  events: Quest[];
}
