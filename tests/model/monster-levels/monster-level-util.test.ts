import { MonsterLevels, MonsterLevelTypes } from '../../../src/model';
import { getMonsterMultipliersForQuest } from '../../../src/model/monster-levels';
import {
  Deviljho,
  Alatreon,
  JhenMohran,
  Ceadeus
} from '../../../src/model/monsters/large-monster-data';
describe('Monster Level utils', () => {
  describe('getMonsterLevelMultipliers', () => {
    it('returns a multiplier object', () => {
      expect(
        MonsterLevels.getMonsterLevelMultipliers(Deviljho.name, 3)
      ).toBeDefined();
    });
    it('Elder Dragons should have a stagger multiplier of 1', () => {
      const deviljhoMultipliers = MonsterLevels.getMonsterLevelMultipliers(
        Deviljho.name,
        52
      );

      const ceadeusMultipliers = MonsterLevels.getMonsterLevelMultipliers(
        Ceadeus.name,
        17
      );
      const jhenMultipliers = MonsterLevels.getMonsterLevelMultipliers(
        JhenMohran.name,
        30
      );
      const alatreonMultipliers = MonsterLevels.getMonsterLevelMultipliers(
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
        MonsterLevels.getMonsterLevelMultipliers(
          Deviljho.name,
          -1 as MonsterLevels.MonsterLevelTypes.MonsterLevel
        )
      ).toThrow();
    });
  });

  describe('getMonsterMultipliersForQuest', () => {
    it('Throws error for invalid monster ID', () => {
      expect(() =>
        getMonsterMultipliersForQuest(Deviljho.name, 0x4a39)
      ).toThrow();
    });

    it('Returns monster level multipliers', () => {
      const expectedMultipliers: MonsterLevelTypes.MonsterLevelMultipliers = {
        defense: 0.75,
        health: [1],
        stagger: 1
      };
      expect(
        getMonsterMultipliersForQuest(Alatreon.name, 0x4a39)
      ).toStrictEqual(expectedMultipliers);
    });
  });
});
