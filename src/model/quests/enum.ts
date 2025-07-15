/**
 * In-game maps
 */
export enum MapLocation {
  DesertedIsland = 'Deserted Island',
  SandyPlains = 'Sandy Plains',
  FloodedForest = 'Flooded Forest',
  Tundra = 'Tundra',
  Volcano = 'Volcano',
  UnderwaterRuin = 'Underwater Ruin',
  GreatDesert = 'Great Desert',
  SacredLand = 'Sacred Land',
  LandArena = 'Land Arena',
  WaterArena = 'Water Arena'
}

/** Possible ingame quest star levels */
export type StarLevel = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Quest star levels as enums, used for keying objects
 */
export enum StarLevelEnum {
  OneStar = 1,
  TwoStar = 2,
  ThreeStar = 3,
  FourStar = 4,
  FiveStar = 5,
  SixStar = 6
}

export enum BossLevelModifiers {
  /**
   * Monster level will be exactly equal to specified value
   * @example
   * { // BossInfo object
   *   ...,
   *   levelModifier: 0,
   *   level: 23, // Monster level will always be 23
   * }
   */
  Fixed = 0,
  /**
   * Monster level can be the specified value OR +/- 1.
   * @example
   * { // BossInfo object
   *   ...,
   *   levelModifier: 1,
   *   level: 23, // Monster level can be 22, 23, or 24
   * }
   */
  PlusOne = 1,
  /**
   * Monster level can be the specified value OR +/- 2.
   * @example
   * { // BossInfo object
   *   ...,
   *   levelModifier: 2,
   *   level: 23, // Monster level can be 21, 22, 23, 24, or 25
   * }
   */
  PlusTwo = 2
}
