/**
 * Denotes the color of the ingame icon for an item
 */
export type ItemIconColor =
  | 'purple'
  | 'blue'
  | 'green'
  | 'orange'
  | 'red'
  | 'yellow'
  | 'cyan'
  | 'pink'
  | 'white'
  | 'gray';

/**
 * Ingame item eg; Mega Potion, Raw Meat, etc
 */
export interface Item {
  readonly id: number;
  readonly name: string;
}

/**
 * Result of gathering/carving/quest reward
 *
 * Key:Value pair of an {@link Item} id and a percentage chance.
 */
export interface ItemResult {
  readonly itemId: Item['id'];
  /** Percentage */
  readonly chance: number;
}

/**
 * Quest reward item
 */
export interface QuestReward {
  readonly itemId: Item['id'];
  /** Percentage */
  readonly chance: number;
  /** Amount received */
  readonly count: number;
}

/**
 * Amount needed of a particular item for crafting, trading, etc
 */
export interface ItemRequirement {
  readonly itemId: Item['id'];
  readonly amount: number;
}
