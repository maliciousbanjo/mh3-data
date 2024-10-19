import {
  Ceadeus,
  Deviljho,
  GreatJaggi
} from '../../../src/model/monsters/large-monster-data';
import {
  getQuestById,
  getQuestsWithLargeMonster
} from '../../../src/model/quests/quests-util';

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
});
