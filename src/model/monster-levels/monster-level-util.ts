import { MonsterLevelData } from './monster-level-data';
import type { MonsterLevel, MonsterLevelMultipliers } from './types';

export function getMonsterLevelMultipliers(
  level: MonsterLevel
): MonsterLevelMultipliers {
  const multipliers: MonsterLevelMultipliers | undefined =
    MonsterLevelData[level];

  if (!multipliers) throw new Error(`No multipliers found for level ${level}`);

  return multipliers;
}
