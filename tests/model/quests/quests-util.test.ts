import {
  Ceadeus,
  Deviljho,
  GreatJaggi
} from '../../../src/model/monsters/large-monster-data';
import { CityQuestData, VillageQuestData } from '../../../src/model/quests';
import {
  getArenaQuests,
  getEventQuests,
  getQuestById,
  getQuestByStarLevel,
  getQuestsWithLargeMonster
} from '../../../src/model/quests/quests-util';
import { QuestRegion } from '../../../src/model/quests/types';

describe('Quests util', () => {
  describe('getQuestsWithLargeMonster', () => {
    const villageGreatJaggiQuests = 3;
    const cityGreatJaggiQuests = 5;

    it('returns quests from Village region', () => {
      expect(getQuestsWithLargeMonster(GreatJaggi.id, 'Village')).toHaveLength(
        villageGreatJaggiQuests
      );
      expect(getQuestsWithLargeMonster(Deviljho.id, 'Village')).toHaveLength(0);
    });

    it('returns quests from City region', () => {
      expect(getQuestsWithLargeMonster(GreatJaggi.id, 'City')).toHaveLength(
        cityGreatJaggiQuests
      );
      expect(getQuestsWithLargeMonster(Ceadeus.id, 'City')).toHaveLength(0);
    });

    it('returns quests from Both regions', () => {
      expect(getQuestsWithLargeMonster(GreatJaggi.id, 'Both')).toHaveLength(
        villageGreatJaggiQuests + cityGreatJaggiQuests
      );
    });
  });

  describe('getQuestById', () => {
    it('throws error for invalid quest ID', () => {
      expect(() => getQuestById(0x1234)).toThrow();
    });

    it('returns village quest', () => {
      expect(getQuestById(0x07d6)).toHaveProperty(
        'name',
        'The Decisive Battle'
      );
    });

    it('returns city quest', () => {
      expect(getQuestById(0x4a39)).toHaveProperty(
        'name',
        'The Brilliant Darkness'
      );
    });
  });

  describe('getArenaQuests', () => {
    it('throws error for invalid region', () => {
      expect(() => getArenaQuests('foo' as QuestRegion)).toThrow();
    });
    it('returns Village quests', () => {
      expect(getArenaQuests('Village')).toMatchObject(
        Object.values(VillageQuestData.arena)
      );
    });
    it('returns City quests', () => {
      expect(getArenaQuests('City')).toMatchObject(
        Object.values(CityQuestData.arena)
      );
    });
  });

  describe('getEventQuests', () => {
    it('throws error for invalid region', () => {
      expect(() => getEventQuests('foo' as QuestRegion)).toThrow();
    });
    it('returns Village quests', () => {
      expect(getEventQuests('Village')).toMatchObject(
        Object.values(VillageQuestData.events)
      );
    });
    it('returns City quests', () => {
      expect(getEventQuests('City')).toMatchObject(
        Object.values(CityQuestData.events)
      );
    });
  });

  describe('getQuestByStarLevel', () => {
    const starLevel = 6;
    it('throws error for invalid region', () => {
      expect(() => getQuestByStarLevel('foo' as QuestRegion, 1)).toThrow();
    });
    it('returns Village quests', () => {
      expect(getQuestByStarLevel('Village', starLevel)).toMatchObject(
        Object.values(VillageQuestData.starLevels[starLevel])
      );
    });
    it('returns City quests', () => {
      expect(getQuestByStarLevel('City', starLevel)).toMatchObject(
        Object.values(CityQuestData.starLevels[starLevel])
      );
    });
  });
});
