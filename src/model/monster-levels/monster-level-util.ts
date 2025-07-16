import { getMonster, MonsterType, type MonsterTypes } from '../monsters';
import type { Monster } from '../monsters/types';
import { BossLevelModifiers, getQuestById, type QuestTypes } from '../quests';
import { MonsterLevelData } from './monster-level-data';
import type { MonsterLevel, MonsterStatMultipliers } from './types';

/** Ensures a number is within valid range for a {@link MonsterLevel} */
export function isValidMonsterLevel(
  maybeLevel: number
): asserts maybeLevel is MonsterLevel {
  if (maybeLevel < 0 || maybeLevel > 60) {
    throw new Error(`'${maybeLevel}' must be within 0 and 60`);
  }
}

/**
 * @returns List of monster levels based on an original level and a levelModifier
 */
export function getMonsterLevelRange(
  monsterLevel: MonsterLevel,
  levelModifier: BossLevelModifiers
): MonsterLevel[] {
  const result: number[] = [];

  switch (levelModifier) {
    case BossLevelModifiers.Fixed:
      result.push(monsterLevel);
      break;
    case BossLevelModifiers.PlusOne:
      result.push(monsterLevel - 1, monsterLevel, monsterLevel + 1);
      break;
    case BossLevelModifiers.PlusTwo:
      result.push(
        monsterLevel - 2,
        monsterLevel - 1,
        monsterLevel,
        monsterLevel + 1,
        monsterLevel + 2
      );
      break;
    default:
      throw new Error(`Unknown levelModifier '${levelModifier}'`);
  }

  result.forEach(r => isValidMonsterLevel(r));
  return result as MonsterLevel[];
}

/**
 *
 * @param monsterLevel
 * @returns
 */
export function getMonsterStatMultipliers(
  monsterName: Monster['name'],
  monsterLevel: MonsterLevel
): MonsterStatMultipliers {
  const multipliers: MonsterStatMultipliers | undefined =
    MonsterLevelData[monsterLevel];

  if (!multipliers)
    throw new Error(`No multipliers found for level '${monsterLevel}'`);

  if (getMonster(monsterName).type === MonsterType.EldDrg) {
    // Elder Dragons always have a stagger multiplier of 1
    return {
      ...multipliers,
      stagger: 1
    };
  }

  return multipliers;
}

/**
 * @returns MonsterLevel for a given monster ID in a quest ID
 * @throws Error if monster is not present in quest
 */
export function getMonsterLevelsForQuest(
  monsterName: MonsterTypes.MonsterName,
  questId: QuestTypes.Quest['id']
) {
  const quest = getQuestById(questId);
  const monster = getMonster(monsterName);

  const bossInfo = quest.bosses.find(boss => boss.monsterId === monster.id);
  if (!bossInfo)
    throw new Error(
      `Quest ID '${questId}' does not include monster ID '${monster.id}'`
    );

  return getMonsterLevelRange(bossInfo.level, bossInfo.levelModifier);
}
