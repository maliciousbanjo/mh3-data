import {
  Ceadeus,
  Deviljho,
  GreatJaggi
} from '../../../src/model/monsters/large-monster-data';
import { getQuestsWithLargeMonster } from '../../../src/model/quests/quests-util';

describe('Quests utils', () => {
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
});
