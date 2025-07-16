import { MonsterLevels, MonsterLevelTypes } from '../../../src/model';
import {
  getMonsterLevelRange,
  getMonsterLevelsForQuest,
  isValidMonsterLevel
} from '../../../src/model/monster-levels';
import {
  Deviljho,
  Alatreon,
  JhenMohran,
  Ceadeus
} from '../../../src/model/monsters/large-monster-data';
import { BossLevelModifiers } from '../../../src/model/quests';
describe('Monster Level utils', () => {
  describe('isValidMonsterLevel', () => {
    it('Success with valid level', () => {
      expect(() => isValidMonsterLevel(30)).not.toThrow();
    });

    it('Fails with invalid level', () => {
      expect(() => isValidMonsterLevel(100)).toThrow();
    });
  });

  describe('getMonsterLevelRange', () => {
    it('returns 1 level for a FIXED modifier', () => {
      const result = getMonsterLevelRange(10, BossLevelModifiers.Fixed);
      expect(result).toHaveLength(1);
    });

    it('returns 3 levels for a PlusOne modifier', () => {
      const result = getMonsterLevelRange(10, BossLevelModifiers.PlusOne);
      expect(result).toHaveLength(3);
    });

    it('returns 5 levels for a PlusTwo modifier', () => {
      const result = getMonsterLevelRange(10, BossLevelModifiers.PlusTwo);
      expect(result).toHaveLength(5);
    });

    it('Throws error when given an invalid modifier', () => {
      expect(() => getMonsterLevelRange(10, 5 as BossLevelModifiers)).toThrow();
    });

    it('Throws when given an invalid level', () => {
      expect(() =>
        getMonsterLevelRange(
          100 as MonsterLevelTypes.MonsterLevel,
          BossLevelModifiers.Fixed
        )
      ).toThrow();
    });
  });

  describe('getMonsterStatMultipliers', () => {
    it('returns a multiplier object', () => {
      expect(
        MonsterLevels.getMonsterStatMultipliers(Deviljho.name, 3)
      ).toBeDefined();
    });
    it('Elder Dragons should have a stagger multiplier of 1', () => {
      const deviljhoMultipliers = MonsterLevels.getMonsterStatMultipliers(
        Deviljho.name,
        52
      );

      const ceadeusMultipliers = MonsterLevels.getMonsterStatMultipliers(
        Ceadeus.name,
        17
      );
      const jhenMultipliers = MonsterLevels.getMonsterStatMultipliers(
        JhenMohran.name,
        30
      );
      const alatreonMultipliers = MonsterLevels.getMonsterStatMultipliers(
        Alatreon.name,
        52
      );

      expect(deviljhoMultipliers.stagger).toBe(2.2);
      expect(ceadeusMultipliers.stagger).toBe(1);
      expect(jhenMultipliers.stagger).toBe(1);
      expect(alatreonMultipliers.stagger).toBe(1);
    });
    it('throw error when invalid level provided', () => {
      expect(() =>
        MonsterLevels.getMonsterStatMultipliers(
          Deviljho.name,
          -1 as MonsterLevels.MonsterLevelTypes.MonsterLevel
        )
      ).toThrow();
    });
  });

  describe('getMonsterLevelsForQuest', () => {
    it('Throws error for invalid monster ID', () => {
      expect(() => getMonsterLevelsForQuest(Deviljho.name, 0x4a39)).toThrow();
    });

    it('Returns monster levels', () => {
      const expectedLevels: MonsterLevelTypes.MonsterLevel[] = [52];
      expect(getMonsterLevelsForQuest(Alatreon.name, 0x4a39)).toStrictEqual(
        expectedLevels
      );
    });
  });
});
