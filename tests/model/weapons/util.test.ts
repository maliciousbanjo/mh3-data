import { WeaponType } from '../../../src/model/weapons/types';
import { getWeapon } from '../../../src/model/weapons/util';

describe('Weapon utils', () => {
  describe('getWeapon', () => {
    it('throws error when invalid ID provided', () => {
      expect(() => getWeapon(WeaponType.GREAT_SWORD, -1)).toThrow();
    });
    it('returns a valid great sword', () => {
      expect(getWeapon(WeaponType.GREAT_SWORD, 1)).toBeDefined();
    });
    it('returns a valid hammer', () => {
      expect(getWeapon(WeaponType.HAMMER, 1)).toBeDefined();
    });
    it('returns a valid lance', () => {
      expect(getWeapon(WeaponType.LANCE, 1)).toBeDefined();
    });
    it('returns a valid longsword', () => {
      expect(getWeapon(WeaponType.LONGSWORD, 1)).toBeDefined();
    });
    it('returns a valid switch axe', () => {
      expect(getWeapon(WeaponType.SWITCH_AXE, 1)).toBeDefined();
    });
    it('returns a valid sword and shield', () => {
      expect(getWeapon(WeaponType.SWORD_AND_SHIELD, 1)).toBeDefined();
    });
  });
});
