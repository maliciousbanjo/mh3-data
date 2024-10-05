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
  cut: number;
  impact: number;
  gun: number;
  fire: number;
  water: number;
  thunder: number;
  ice: number;
  dragon: number;
  stagger: number;
}

/**
 * Unique area on a monster that takes damage
 */
export interface Hitzone {
  name: string;
  values: HitzoneValues;
}

/**
 * Collection of either a default hitzone or hitzones
 * based on a monster's status eg; enraged, flying, etc
 */
export interface MonsterState {
  name: string;
  hitzones: Hitzone[];
}

/**
 * Monster part that can be broken
 */
export interface Breakable {
  name: string;
  /** Low rank break rewards */
  low?: ItemTypes.QuestReward[];
  /** High rank break rewards */
  high?: ItemTypes.QuestReward[];
}

/**
 * Criteria and rewards for a monster being captured
 */
export interface CaptureInfo {
  /** Health percentage threshold for a monster to be capture-ready */
  health: number;
  /** Low rank capture rewards */
  low?: ItemTypes.ItemResult[];
  /** High rank capture rewards */
  high?: ItemTypes.ItemResult[];
}

/**
 * Status information for a particular {@link Status} ailment
 */
export interface StatusValues {
  /** Duration of status effect in seconds */
  duration: number;
  /** Resistance/buildup of status damage until effect activates */
  tolerance: {
    /** Value required for the first status effect */
    initial: number;
    /** Maximum resistance */
    max: number;
  };
  /** Amount of status damage recovered per interval */
  recovery: {
    /** Damage recovered */
    amount: number;
    /** Interval of recovery in seconds */
    wait: number;
  };
}

/**
 * Monster part that can be carved
 */
export interface CarveZone {
  name: string;
  /** Number of possible carves */
  count: number;
  /** Low rank carve */
  low?: ItemTypes.ItemResult[];
  /** High rank carve */
  high?: ItemTypes.ItemResult[];
}

/**
 * Extra unique data for a particular monster
 */
export interface Variant {
  name: string;
  carves?: CarveZone[];
  shiny?: ShinyDrop;
}

/**
 * Item result for a monster shiny drop
 */
export interface ShinyDrop {
  /** Action required to cause the shiny to drop */
  action: string;
  /** Low rank result */
  low?: ItemTypes.ItemResult[];
  /** High rank result */
  high?: ItemTypes.ItemResult[];
}

/**
 * Base properties for any monster
 */
export interface Monster {
  id: number;
  name: SmallMonsterName | LargeMonsterName;
  description: string;
  type: MonsterType;
  threat: number;
  /**
   * List of hitzones. Will either contain a "default" hitzone group
   * or multiple based on different monster states eg; flying, enraged, etc
   */
  monsterStates: MonsterState[];
  /** If undefined this monster should have a 'variant' property */
  shiny?: ShinyDrop;
  /** If undefined this monster should have a 'variant' property */
  carves?: CarveZone[];
  /** Optional support for varying shines or carves */
  variants?: Variant[];
}

/**
 * Properties for a large (boss) monster
 */
export interface LargeMonster
  extends Omit<Monster, 'name' | 'carves' | 'type' | 'variants'> {
  name: LargeMonsterName;
  hp: number;
  type:
    | MonsterType.BrdWyv
    | MonsterType.FlyWyv
    | MonsterType.Levthn
    | MonsterType.BrtWyv
    | MonsterType.EldDrg;
  /** Quests that include this monster */
  // TODO: quest type. Will be closely tied to the quest data.
  quests: object;
  carves: CarveZone[];
  breakables: Breakable[];
  status?: {
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
  capture?: CaptureInfo;
}
