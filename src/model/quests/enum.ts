/**
 * In-game maps
 */
export enum MapLocation {
  DESERTED_ISLAND = 'Deserted Island',
  SANDY_PLAINS = 'Sandy Plains',
  FLOODED_FOREST = 'Flooded Forest',
  TUNDRA = 'Tundra',
  VOLCANO = 'Volcano',
  UNDERWATER_RUIN = 'Underwater Ruin',
  GREAT_DESERT = 'Great Desert',
  SACRED_LAND = 'Sacred Land',
  LAND_ARENA = 'Land Arena',
  WATER_ARENA = 'Water Arena'
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
