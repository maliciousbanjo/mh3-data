import { MonsterLevels } from '../../../src/model';
describe('Monster Level utils', () => {
  describe('getMonsterLevelMultipliers', () => {
    it('returns a multiplier object', () => {
      expect(MonsterLevels.Util.getMonsterLevelMultipliers(3)).toBeDefined();
    });
    it('throw error when invalid level provided', () => {
      expect(() =>
        MonsterLevels.Util.getMonsterLevelMultipliers(
          -1 as MonsterLevels.MonsterLevelTypes.MonsterLevel
        )
      ).toThrow();
    });
  });
});