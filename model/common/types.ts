/** Status ailment types */
export enum Status {
  POISON = "poison",
  PARALYSIS = "paralysis",
  SLEEP = "sleep",
  STUN = "stun",
  EXHAUST = "exhaust",
}

/** Element types */
export type Element = "FIRE" | "WATER" | "THUNDER" | "ICE" | "DRAGON";

/** Levels of item/equipment rarity */
export type Rarity = 1 | 2 | 3 | 4 | 4 | 5 | 6 | 7;

/** Possible number of decoration slots on armors and weapons */
export type Slots = 0 | 1 | 2 | 3;