import { Item, QuestReward } from "../items";
import { Monster } from "../monsters";
import { MonsterLevel } from "../monster-levels";

export type QuestType =
  | "gather"
  | "hunt"
  | "capture"
  | "harvest"
  | "escort"
  | "multihunt"
  | "repel"
  | "slay";

export type QuestGoal =
  | "gathering"
  | "slay"
  | "capture"
  | "hunt"
  | "break"
  | "sever"
  | "sonic"
  | "repel"
  | "other"
  | "anthill";

export enum Location {
  DESERTED_ISLAND = "Deserted Island",
  SANDY_PLAINS = "Sandy Plains",
  FLOODED_FOREST = "Flooded Forest",
  TUNDRA = "Tundra",
  VOLCANO = "Volcano",
  UNDERWATER_RUIN = "Underwater Ruin",
  GREAT_DESERT = "Great Desert",
  SACRED_LAND = "Sacred Land",
  LAND_ARENA = "Land Arena",
  WATER_ARENA = "Water Arena",
}

/**
 * These properties were derived from the publicly-available MH3 Quest editor.
 * The values are incorrect/flawed. ZeSpyro
 */
interface BossInfo {
  type1: Monster["id"];
  /** Starting area? */
  type2: 0 | 1 | 2;
  /** TODO: Unidentified monster levels: 30, 55, 59, 60 */
  level: MonsterLevel | 30 | 55 | 59 | 60;

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
interface Quest {
  name: string;
  client: string;
  type: QuestType;
  goal: QuestGoal;
  /** Cost to initiate quest in zenny */
  contract: number;
  /** Maximum quest time in minutes */
  time: number;
  location: Location;
  /** If true, hunter will spawn in random location */
  randomspawn: boolean;
  /** Quest completion reward in zenny */
  reward: number;
  /** Amount of zenny taken from reward per faint */
  ko: number;
  /** Hunter Rank Points received for quest completion */
  hrp: number;
  secondaryRewards: QuestReward[];
  /** Key will be an ID for an item or monster depending on the {@link QuestType} */
  targets: Record<number, number>;
  /** Large monsters that can spawn in this quest */
  bosses: BossInfo[];
  // TODO: Will need to create different subquests types with different target properties
  subquests?: object;
}

type NumberRequired = number;

export interface GatheringQuest extends Quest {
  type: "gather";
  goal: "gathering";
  targets: Record<Item["id"], NumberRequired>;
}

export interface HarvestQuest extends Quest {
  type: "harvest";
  goal: "gathering";
  /** Harvest Ticket */
  targets: {
    396: 1;
  };
}

export interface HuntQuest extends Quest {
  type: "hunt";
  goal: "hunt" | "slay";
  targets: Record<Monster["id"], NumberRequired>;
  bosses: BossInfo[];
}

export interface MultiHuntQuest extends Quest {
  type: "multihunt";
  goal: "hunt";
  targets: Record<Monster["id"], NumberRequired>;
}

export interface CaptureQuest extends Quest {
  type: "capture";
  goal: "capture";
  targets: Record<Monster["id"], NumberRequired>;
  bosses: BossInfo[];
}

export interface EscortQuest extends Quest {
  type: "escort";
  goal: "slay";
  targets: Record<Monster["id"], NumberRequired>;
}

export interface ArenaQuest extends Omit<Quest, "secondaryRewards"> {
  type: "slay";
  goal: "hunt";
  targets: Record<Monster["id"], NumberRequired>;
  bosses: BossInfo[];
}

export interface RepelQuest extends Quest {
  type: "repel";
  goal: "repel" | "other";
  bosses: BossInfo[];
}

/** Quest star levels */
export enum StarLevel {
  OneStar = "1 Star",
  TwoStar = "2 Star",
  ThreeStar = "3 Star",
  FourStar = "4 Star",
  FiveStar = "5 Star",
  SixStar = "6 Star",
}

export interface QuestRegion {
  name: "Village" | "City";
  starLevels: {
    [StarLevel.OneStar]: Quest[];
    [StarLevel.TwoStar]: Quest[];
    [StarLevel.ThreeStar]: Quest[];
    [StarLevel.FourStar]: Quest[];
    [StarLevel.FiveStar]: Quest[];
    [StarLevel.SixStar]: Quest[];
  };
  arena: ArenaQuest[];
  events: Quest[];
}
