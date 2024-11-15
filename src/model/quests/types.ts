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
  readonly monsterId: MonsterTypes.Monster['id'];
  readonly startingArea: 0 | 1 | 2;
  readonly level: MonsterLevelTypes.MonsterLevel;
  readonly size: number;
  /** controls random distribution of monster's level */
  readonly min: number;
  /** controls random distribution of monster's size */
  readonly max: number;
}

/**
 * Base quest type
 */
export interface Quest {
  readonly id: number;
  readonly name: string;
  /** Village or City */
  readonly region: QuestRegion;
  /** Low or High rank */
  readonly rank: QuestRank;
  /** Gather, hunt, capture, repel, etc */
  readonly type: QuestType;
  readonly goal: QuestGoal;
  readonly client: string;
  /** Cost to initiate quest in zenny */
  readonly contract: number;
  /** Maximum quest time in minutes */
  readonly time: number;
  readonly location: MapLocation;
  /** If true, hunter will spawn in random location */
  readonly randomspawn: boolean;
  /** Quest completion reward in zenny */
  readonly reward: number;
  /** Amount of zenny taken from reward per faint */
  readonly ko: number;
  /** Hunter Rank Points received for quest completion */
  readonly hrp: number;
  readonly secondaryRewards: ItemTypes.QuestReward[];
  /** Key will be an ID for an item or monster depending on the {@link QuestType} */
  readonly targets: Record<number, number>;
  /** Large monsters that can spawn in this quest */
  readonly bosses: BossInfo[];
  // TODO: Will need to create different subquests types with different target properties
  readonly subquests?: object;
}

type NumberRequired = number;

export interface GatheringQuest extends Quest {
  readonly type: 'gather';
  readonly goal: 'gathering';
  readonly targets: Record<ItemTypes.Item['id'], NumberRequired>;
}

export interface HarvestQuest extends Quest {
  readonly type: 'harvest';
  readonly goal: 'gathering';
  /** Harvest Ticket */
  targets: Readonly<{
    396: 1;
  }>;
}

export interface HuntQuest extends Quest {
  readonly type: 'hunt';
  readonly goal: 'hunt' | 'slay';
  readonly targets: Record<MonsterTypes.Monster['id'], NumberRequired>;
  readonly bosses: BossInfo[];
}

export interface MultiHuntQuest extends Quest {
  readonly type: 'multihunt';
  readonly goal: 'hunt';
  readonly targets: Record<MonsterTypes.Monster['id'], NumberRequired>;
}

export interface CaptureQuest extends Quest {
  readonly type: 'capture';
  readonly goal: 'capture';
  readonly targets: Record<MonsterTypes.Monster['id'], NumberRequired>;
  readonly bosses: BossInfo[];
}

export interface EscortQuest extends Quest {
  readonly type: 'escort';
  readonly goal: 'slay';
  readonly targets: Record<MonsterTypes.Monster['id'], NumberRequired>;
}

/**
 * Typically used for Arena and Elder Dragon quests
 */
export interface SlayQuest extends Quest {
  readonly type: 'slay';
  readonly goal: 'hunt';
  readonly targets: Record<MonsterTypes.Monster['id'], NumberRequired>;
  readonly bosses: BossInfo[];
}

export interface RepelQuest extends Quest {
  readonly type: 'repel';
  readonly goal: 'repel' | 'other';
  readonly bosses: BossInfo[];
}

export interface QuestMode {
  readonly region: QuestRegion;
  readonly starLevels: Readonly<{
    [StarLevelEnum.OneStar]: Quest[];
    [StarLevelEnum.TwoStar]: Quest[];
    [StarLevelEnum.ThreeStar]: Quest[];
    [StarLevelEnum.FourStar]: Quest[];
    [StarLevelEnum.FiveStar]: Quest[];
    [StarLevelEnum.SixStar]: Quest[];
  }>;
  readonly arena: SlayQuest[];
  readonly events: Quest[];
}
