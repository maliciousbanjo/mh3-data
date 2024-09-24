/**
 * Contains multipliers against different base monster stats.
 */
export interface MonsterLevelMultipliers {
  readonly health: number[];
  readonly defense: number;
  readonly stagger: number;
}

/**
 * All known monster levels. Potentially incomplete.
 *
 * A monster level maps to an object containing scalers for monster health,
 * defense, and flinch values.
 *
 * TODO:
 * @todo Unidentified monster levels: 30, 55, 59, 60
 */
export type MonsterLevel =
  | 3
  | 5
  | 7
  | 9
  | 11
  | 13
  | 16
  | 17
  | 18
  | 23
  | 25
  | 26
  | 27
  | 29
  | 32
  | 36
  | 37
  | 38
  | 39
  | 40
  | 44
  | 45
  | 48
  | 50
  | 52
  | 53
  | 54
  | 57
  | 58;

/**
 * Collection of monster levels paired with stat multipliers
 */
export type MonsterLevelRecord = Record<MonsterLevel, MonsterLevelMultipliers>;
