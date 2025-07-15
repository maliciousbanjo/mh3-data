import type { NumericRange } from '../../lib';
/**
 * Contains multipliers against different base monster stats.
 */
export interface MonsterStatMultipliers {
  readonly health: number;
  readonly defense: number;
  readonly stagger: number;
}

/**
 * All known monster levels, ranging from 0 to 60.
 */
export type MonsterLevel = NumericRange<0, 61>;

/**
 * Collection of monster levels paired with stat multipliers
 */
export type MonsterLevelRecord = Record<MonsterLevel, MonsterStatMultipliers>;
