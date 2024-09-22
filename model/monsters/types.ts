import { Status } from "../common";
import { QuestReward, ItemResult } from "../items";

export enum MonsterType {
  Herbvr = "herbivore",
  Nptron = "neopteron",
  Lynian = "lynian",
  Fish = "fish",
  PscWyv = "piscine wyvern",
  BrdWyv = "bird wyvern",
  FlyWyv = "flying wyvern",
  Levthn = "leviathan",
  BrtWyv = "brute wyvern",
  EldDrg = "elder dragon",
}

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
 * Record of <Part: HitzoneValues>
 */
export type Hitzone = Record<string, HitzoneValues>;

/**
 * Collection of either a default hitzone or hitzones
 * based on a monster's status eg; enraged, flying, etc
 */
export interface HitzoneGroup {
  name: string;
  hitzones: Hitzone;
}

/**
 * Monster part that can be broken
 */
export interface Breakable {
  name: string;
  /** Low rank break rewards */
  low?: QuestReward[];
  /** High rank break rewards */
  high?: QuestReward[];
}

/**
 * Criteria and rewards for a monster being captured
 */
export interface CaptureInfo {
  /** Health percentage threshold for a monster to be capture-ready */
  health: number;
  /** Low rank capture rewards */
  low?: ItemResult[];
  /** High rank capture rewards */
  high?: ItemResult[];
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
 * Carvable monster part
 */
export interface CarveZone {
  name: string;
  /** Number of possible carves */
  count: number;
  /** Low rank carve */
  low?: ItemResult[];
  /** High rank carve */
  high?: ItemResult[];
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
  low?: ItemResult[];
  /** High rank result */
  high?: ItemResult[];
}

/**
 * Base properties for any monster
 */
export interface Monster {
  id: number;
  name: string;
  description: string;
  type: MonsterType;
  threat: number;
  /** 
   * List of hitzones. Will either contain a "default" hitzone group 
   * or multiple based on different monster states eg; flying, enraged, etc
   */
  hitzoneGroups: HitzoneGroup[];
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
  extends Omit<Monster, "carves" | "type" | "variants"> {
  hp: number;
  type:
    | MonsterType.BrdWyv
    | MonsterType.FlyWyv
    | MonsterType.Levthn
    | MonsterType.BrtWyv
    | MonsterType.EldDrg;
  /** Quests that include this monster */
  quests: {
    // TODO: quest type. Will be closely tied to the quest data.
  };
  carves: CarveZone[];
  breakables: Breakable[];
  status?: {
    [Status.POISON]: StatusValues & {
      /** Damage taken by poison per interval */
      damage: {
        initial: number;
        total: number;
      };
    };
    [Status.PARALYSIS]: StatusValues;
    [Status.SLEEP]: StatusValues;
    [Status.STUN]: StatusValues;
    [Status.EXHAUST]?: Omit<StatusValues, "duration">;
  };
  /** {@link MonsterType.EldDrg} cannot be captured */
  capture?: CaptureInfo;
}

export type MonsterRecord = Record<Monster["id"], Monster>;
export type LargeMonsterRecord = Record<LargeMonster["id"], LargeMonster>;
