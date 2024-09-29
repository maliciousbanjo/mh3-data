import {
  getSmallMonster,
  getLargeMonster,
  getMonster,
  MonsterTypes
} from '../../../src/model/monsters';

describe('Monsters util', () => {
  describe('getSmallMonster', () => {
    it('throws error when monster cannot be found', () => {
      expect(() =>
        getSmallMonster('Alatreon' as MonsterTypes.SmallMonsterName)
      ).toThrow();
    });

    it('returns valid monster', () => {
      expect(getSmallMonster('Baggi')).toHaveProperty('name', 'Baggi');
    });
  });
  describe('getLargeMonster', () => {
    it('throws error when monster cannot be found', () => {
      expect(() =>
        getLargeMonster('Altaroth' as MonsterTypes.LargeMonsterName)
      ).toThrow();
    });

    it('returns valid monster', () => {
      expect(getLargeMonster('Deviljho')).toHaveProperty('name', 'Deviljho');
    });
  });
  describe('getMonster', () => {
    it('throws error when monster cannot be found', () => {
      expect(() => getMonster('Fake' as MonsterTypes.MonsterName)).toThrow();
    });

    it('returns valid small monster', () => {
      expect(getMonster('Jaggi')).toHaveProperty('name', 'Jaggi');
    });

    it('returns valid large monster', () => {
      expect(getMonster('Rathian')).toHaveProperty('name', 'Rathian');
    });
  });
});
