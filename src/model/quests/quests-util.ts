import { type MonsterTypes } from '../monsters';
import { CityQuestData } from './city-quest-data';
import type {
  CaptureQuest,
  EscortQuest,
  GatheringQuest,
  HarvestQuest,
  HuntQuest,
  MultiHuntQuest,
  Quest,
  QuestMode,
  RepelQuest,
  SlayQuest
} from './types';
import { VillageQuestData } from './village-quest-data';

/**
 * Type guard for a {@link HuntQuest}
 */
export function isHuntQuest(quest: Quest): quest is HuntQuest {
  return quest.type === 'hunt';
}

/**
 * Type guard for a {@link MultiHuntQuest}
 */
export function isMultiHuntQuest(quest: Quest): quest is MultiHuntQuest {
  return quest.type === 'multihunt';
}

/**
 * Type guard for a {@link CaptureQuest}
 */
export function isCaptureQuest(quest: Quest): quest is CaptureQuest {
  return quest.type === 'capture';
}

/**
 * Type guard for a {@link EscortQuest}
 */
export function isEscortQuest(quest: Quest): quest is EscortQuest {
  return quest.type === 'escort';
}

/**
 * Type guard for a {@link SlayQuest}
 */
export function isSlayQuest(quest: Quest): quest is SlayQuest {
  return quest.type === 'slay';
}

/**
 * Type guard for a {@link RepelQuest}
 */
export function isRepelQuest(quest: Quest): quest is RepelQuest {
  return quest.type === 'repel';
}

/**
 * Type guard for a {@link GatheringQuest}
 */
export function isGatheringQuest(quest: Quest): quest is GatheringQuest {
  return quest.type === 'gather';
}

/**
 * Type guard for a {@link HarvestQuest}
 */
export function isHarvestQuest(quest: Quest): quest is HarvestQuest {
  return quest.type === 'harvest';
}

/**
 * @param id Large Monster ID to search for
 * @param region quest regions to return
 * @returns a list of quests with a given large monster as the target
 */
export function getQuestsWithLargeMonster(
  id: MonsterTypes.LargeMonster['id'],
  region: QuestMode['region'] | 'Both'
): Quest[] {
  const cityQuests = Object.values(CityQuestData.starLevels)
    .flat()
    .concat(CityQuestData.events);

  const villageQuests = Object.values(VillageQuestData.starLevels).flat();

  let quests: Quest[] = [];
  switch (region) {
    case 'Village':
      quests = villageQuests;
      break;
    case 'City':
      quests = cityQuests;
      break;
    case 'Both':
      quests = villageQuests.concat(cityQuests);
      break;
    default:
      throw new Error(`Invalid quest region ${region}`);
  }

  // Filter down quests that contain this large monster ID
  return quests.filter(quest =>
    quest.bosses.some(bossInfo => bossInfo.monsterId === id)
  );
}

/**
 * @returns Quest with a given ID
 * @throws error if quest cannot be found
 */
export function getQuestById(questId: Quest['id']): Quest {
  const villageQuests = Object.values(VillageQuestData.starLevels)
    .flat()
    .concat(VillageQuestData.arena);

  let quest = villageQuests.find(quest => quest.id === questId);

  if (quest) return quest;

  const cityQuests = Object.values(CityQuestData.starLevels)
    .flat()
    .concat(CityQuestData.events)
    .concat(CityQuestData.arena);

  quest = cityQuests.find(quest => quest.id === questId);

  if (!quest) throw new Error(`Could not find quest with ID ${questId}`);

  return quest;
}

/**
 * Verify if a monster is present in a particular quest
 * @returns true if monster is in quest, otherwise false
 */
export function isMonsterInQuest(
  monsterId: MonsterTypes.Monster['id'],
  questId: Quest['id']
): boolean {
  const quest = getQuestById(questId);
  return quest.bosses.some(boss => boss.monsterId === monsterId);
}
