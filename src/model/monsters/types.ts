import { StatusType } from '../common';
import type { ItemTypes } from '../items';
import { MonsterType } from './enum';

/**
 * Names of small monsters
 */
export type SmallMonsterName =
  | 'Aptonoth'
  | 'Kelbi'
  | 'Epioth'
  | 'Popo'
  | 'Bnahabra'
  | 'Altaroth'
  | 'Felyne'
  | 'Melynx'
  | 'Fish'
  | 'Giggi'
  | 'Jaggi'
  | 'Jaggia'
  | 'Baggi'
  | 'Ludroth'
  | 'Uroktor'
  | 'Delex'
  | 'Rhenoplos';

/**
 * Names of large monsters
 */
export type LargeMonsterName =
  | 'Great Jaggi'
  | 'Great Baggi'
  | 'Barroth'
  | 'Uragaan'
  | 'Qurupeco'
  | 'Rathian'
  | 'Rathalos'
  | 'Diablos'
  | 'Gigginox'
  | 'Barioth'
  | 'Royal Ludroth'
  | 'Gobul'
  | 'Lagiacrus'
  | 'Agnaktor'
  | 'Ceadeus'
  | 'Deviljho'
  | 'Jhen Mohran'
  | 'Alatreon';

export type MonsterName = SmallMonsterName | LargeMonsterName;

/**
 * Monster hitzone values for different damage types.
 * Used by {@link Hitzone} to match against a particular monster part
 */
export interface HitzoneValues {
  readonly cut: number;
  readonly impact: number;
  readonly gun: number;
  readonly fire: number;
  readonly water: number;
  readonly thunder: number;
  readonly ice: number;
  readonly dragon: number;
  readonly stagger: number;
}

/**
 * Unique area on a monster that takes damage
 */
export interface Hitzone {
  readonly name: string;
  readonly values: HitzoneValues;
}

/**
 * Collection of either a default hitzone or hitzones
 * based on a monster's status eg; enraged, flying, etc
 */
export interface MonsterState {
  readonly name: string;
  readonly hitzones: Hitzone[];
}

/**
 * Monster part that can be broken
 */
export interface Breakable {
  readonly name: string;
  /** Low rank break rewards */
  readonly low?: ItemTypes.QuestReward[];
  /** High rank break rewards */
  readonly high?: ItemTypes.QuestReward[];
}

/**
 * Criteria and rewards for a monster being captured
 */
export interface CaptureInfo {
  /** Health percentage threshold for a monster to be capture-ready */
  readonly health: number;
  /** Low rank capture rewards */
  readonly low?: ItemTypes.ItemResult[];
  /** High rank capture rewards */
  readonly high?: ItemTypes.ItemResult[];
}

/**
 * Status information for a particular {@link Status} ailment
 */
export interface StatusValues {
  /** Duration of status effect in seconds */
  readonly duration: number;
  /** Resistance/buildup of status damage until effect activates */
  readonly tolerance: Readonly<{
    /** Value required for the first status effect */
    initial: number;
    /** Maximum resistance */
    max: number;
  }>;
  /** Amount of status damage recovered per interval */
  readonly recovery: Readonly<{
    /** Damage recovered */
    amount: number;
    /** Interval of recovery in seconds */
    wait: number;
  }>;
}

/**
 * Monster part that can be carved
 */
export interface CarveZone {
  readonly name: string;
  /** Number of possible carves */
  readonly count: number;
  /** Low rank carve */
  readonly low?: ItemTypes.ItemResult[];
  /** High rank carve */
  readonly high?: ItemTypes.ItemResult[];
}

/**
 * Extra unique data for a particular monster
 */
export interface Variant {
  readonly name: string;
  readonly carves?: CarveZone[];
  readonly shiny?: ShinyDrop;
}

/**
 * Item result for a monster shiny drop
 */
export interface ShinyDrop {
  /** Action required to cause the shiny to drop */
  readonly action: string;
  /** Low rank result */
  readonly low?: ItemTypes.ItemResult[];
  /** High rank result */
  readonly high?: ItemTypes.ItemResult[];
}

/**
 * Base properties for any monster
 */
export interface Monster {
  readonly id: number;
  readonly name: SmallMonsterName | LargeMonsterName;
  readonly description: string;
  readonly type: MonsterType;
  readonly threat: number;
  /**
   * List of hitzones. Will either contain a "default" hitzone group
   * or multiple based on different monster states eg; flying, enraged, etc
   */
  readonly monsterStates: MonsterState[];
  /** If undefined this monster should have a 'variant' property */
  readonly shiny?: ShinyDrop;
  /** If undefined this monster should have a 'variant' property */
  readonly carves?: CarveZone[];
  /** Optional support for varying shinies or carves */
  readonly variants?: Variant[];
}

/**
 * Properties for a large (boss) monster
 */
export interface LargeMonster
  extends Omit<Monster, 'name' | 'carves' | 'type' | 'variants'> {
  readonly name: LargeMonsterName;
  readonly hp: number;
  readonly type:
    | MonsterType.BrdWyv
    | MonsterType.FlyWyv
    | MonsterType.Levthn
    | MonsterType.BrtWyv
    | MonsterType.EldDrg;
  /** Quests that include this monster */
  // TODO: quest type. Will be closely tied to the quest data.
  readonly quests: object;
  readonly carves: CarveZone[];
  readonly breakables: Breakable[];
  readonly status?: {
    [StatusType.POISON]: StatusValues & {
      /** Damage taken by poison per interval */
      damage: {
        initial: number;
        total: number;
      };
    };
    [StatusType.PARALYSIS]: StatusValues;
    [StatusType.SLEEP]: StatusValues;
    [StatusType.STUN]: StatusValues;
    [StatusType.EXHAUST]?: Omit<StatusValues, 'duration'>;
  };
  /** {@link MonsterType.EldDrg} cannot be captured */
  readonly capture?: CaptureInfo;
}
