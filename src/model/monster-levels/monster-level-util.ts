import { getMonster, MonsterType, type MonsterTypes } from '../monsters';
import { BossLevelModifiers, getQuestById, type QuestTypes } from '../quests';
import { MonsterLevelData } from './monster-level-data';
import type { MonsterLevel, MonsterStatMultipliers } from './types';

function getStatMultipliers(level: number) {
  const multipliers: MonsterStatMultipliers | undefined =
    MonsterLevelData[level as MonsterLevel];

  if (!multipliers) throw new Error(`No multipliers found for level ${level}`);

  return multipliers;
}

/**
 * @returns Multipliers corresponding to a given level
 */
export function getMonsterStatMultipliers(
  monsterName: MonsterTypes.MonsterName,
  level: MonsterLevel,
  levelModifier: BossLevelModifiers = BossLevelModifiers.Fixed
): MonsterStatMultipliers[] {
  const multipliersResult: MonsterStatMultipliers[] = [];

  // levelModifer will dictate if we need to return a range of possible multipliers
  switch (levelModifier) {
    case BossLevelModifiers.Fixed:
      multipliersResult.push(getStatMultipliers(level));
      break;
    case BossLevelModifiers.PlusOne:
      multipliersResult.push(
        getStatMultipliers(level - 1),
        getStatMultipliers(level),
        getStatMultipliers(level + 1)
      );
      break;
    case BossLevelModifiers.PlusTwo:
      multipliersResult.push(
        getStatMultipliers(level - 2),
        getStatMultipliers(level - 1),
        getStatMultipliers(level),
        getStatMultipliers(level + 1),
        getStatMultipliers(level + 2)
      );
      break;
    default:
      throw new Error(`Unknown levelModifier ${levelModifier}`);
  }

  const monster = getMonster(monsterName);

  if (monster.type !== MonsterType.EldDrg) return multipliersResult;

  // Elder dragons always have a stagger multiplier of 1
  return multipliersResult.map(result => ({
    ...result,
    stagger: 1
  }));
}

/**
 * @returns MonsterStatMultiplier for a given monster ID in a quest ID.
 * @throw Error if monster is not present in quest
 */
export function getMonsterMultipliersForQuest(
  monsterName: MonsterTypes.MonsterName,
  questId: QuestTypes.Quest['id']
): MonsterStatMultipliers[] {
  const quest = getQuestById(questId);
  const monster = getMonster(monsterName);

  const bossInfo = quest.bosses.find(boss => boss.monsterId === monster.id);
  if (!bossInfo)
    throw new Error(
      `Quest ID ${questId} does not include monster ID ${monster.id}`
    );

  return getMonsterStatMultipliers(
    monsterName,
    bossInfo.level,
    bossInfo.levelModifier
  );
}
