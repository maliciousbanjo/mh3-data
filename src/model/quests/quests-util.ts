import type { MonsterTypes } from '../monsters';
import { VillageQuestData } from './village-quest-data';
import { CityQuestData } from './city-quest-data';
import type {
  SlayQuest,
  CaptureQuest,
  EscortQuest,
  HuntQuest,
  MultiHuntQuest,
  Quest,
  RepelQuest,
  GatheringQuest,
  HarvestQuest,
  QuestRegion
} from './types';

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
  region: QuestRegion['name'] | 'Both'
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
