/**
 * Ingame item eg; Mega Potion, Raw Meat, etc
 */
export interface Item {
  readonly id: number;
  readonly name: string;
}

export type ItemRecord = Record<Item["id"], Item>;

/**
 * Result of gathering/carving/quest reward
 *
 * Key:Value pair of an {@link Item} id and a percentage chance.
 */
export interface ItemResult {
  itemId: Item['id'];
  /** Percentage */
  chance: number;
}

/**
 * Quest reward item
 */
export interface QuestReward {
  itemId: Item['id'];
  /** Percentage */
  chance: number;
  /** Amount received */
  count: number;
}

/**
 * Amount needed of a particular item for crafting, trading, etc
 */
export interface ItemRequirement {
  itemId: Item['id'];
  amount: number;
}