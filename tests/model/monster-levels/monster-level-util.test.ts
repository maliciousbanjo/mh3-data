import { MonsterLevels, MonsterLevelTypes } from '../../../src/model';
import { getMonsterMultipliersForQuest } from '../../../src/model/monster-levels';
import {
  Deviljho,
  Alatreon,
  JhenMohran,
  Ceadeus
} from '../../../src/model/monsters/large-monster-data';
describe('Monster Level utils', () => {
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

      expect(deviljhoMultipliers[0].stagger).toBe(2.2);
      expect(ceadeusMultipliers[0].stagger).toBe(1);
      expect(jhenMultipliers[0].stagger).toBe(1);
      expect(alatreonMultipliers[0].stagger).toBe(1);
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

  describe('getMonsterMultipliersForQuest', () => {
    it('Throws error for invalid monster ID', () => {
      expect(() =>
        getMonsterMultipliersForQuest(Deviljho.name, 0x4a39)
      ).toThrow();
    });

    it('Returns monster stat multipliers', () => {
      const expectedMultipliers: MonsterLevelTypes.MonsterStatMultipliers[] = [
        {
          defense: 0.75,
          health: 1,
          stagger: 1
        }
      ];
      expect(
        getMonsterMultipliersForQuest(Alatreon.name, 0x4a39)
      ).toStrictEqual(expectedMultipliers);
    });
  });
});
