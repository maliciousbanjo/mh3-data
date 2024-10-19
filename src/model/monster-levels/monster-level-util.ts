import { getMonster, MonsterType, type MonsterTypes } from '../monsters';
import { getQuestById, type QuestTypes } from '../quests';
import { MonsterLevelData } from './monster-level-data';
import type { MonsterLevel, MonsterLevelMultipliers } from './types';

/**
 * @returns Multipliers corresponding to a given level
 */
export function getMonsterLevelMultipliers(
  monsterName: MonsterTypes.MonsterName,
  level: MonsterLevel
): MonsterLevelMultipliers {
  const multipliers: MonsterLevelMultipliers | undefined =
    MonsterLevelData[level];

  if (!multipliers) throw new Error(`No multipliers found for level ${level}`);

  const monster = getMonster(monsterName);

  // Elder dragons always have a stagger multiplier of 1
  return monster.type !== MonsterType.EldDrg
    ? multipliers
    : {
        ...multipliers,
        stagger: 1
      };
}

/**
 * @returns MonsterLevelMultiplier for a given monster ID in a quest ID.
 * @throw Error if monster is not present in quest
 */
export function getMonsterMultipliersForQuest(
  monsterName: MonsterTypes.MonsterName,
  questId: QuestTypes.Quest['id']
): MonsterLevelMultipliers {
  const quest = getQuestById(questId);
  const monster = getMonster(monsterName);

  const bossInfo = quest.bosses.find(boss => boss.monsterId === monster.id);
  if (!bossInfo)
    throw new Error(
      `Quest ID ${questId} does not include monster ID ${monster.id}`
    );

  return getMonsterLevelMultipliers(monsterName, bossInfo.level);
}
