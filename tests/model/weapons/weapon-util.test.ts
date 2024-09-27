import { WeaponClass } from '../../../src/model/weapons';
import {
  getWeapon,
  getWeaponDamageProperties
} from '../../../src/model/weapons/weapon-util';

describe('Weapon utils', () => {
  describe('getWeapon', () => {
    it('throws error when invalid ID provided', () => {
      expect(() => getWeapon(WeaponClass.GREAT_SWORD, -1)).toThrow();
    });
    it('returns a valid great sword', () => {
      expect(getWeapon(WeaponClass.GREAT_SWORD, 1).type).toBe(
        WeaponClass.GREAT_SWORD
      );
    });
    it('returns a valid hammer', () => {
      expect(getWeapon(WeaponClass.HAMMER, 1).type).toBe(WeaponClass.HAMMER);
    });
    it('returns a valid lance', () => {
      expect(getWeapon(WeaponClass.LANCE, 1).type).toBe(WeaponClass.LANCE);
    });
    it('returns a valid longsword', () => {
      expect(getWeapon(WeaponClass.LONGSWORD, 1).type).toBe(
        WeaponClass.LONGSWORD
      );
    });
    it('returns a valid switch axe', () => {
      expect(getWeapon(WeaponClass.SWITCH_AXE, 1).type).toBe(
        WeaponClass.SWITCH_AXE
      );
    });
    it('returns a valid sword and shield', () => {
      expect(getWeapon(WeaponClass.SWORD_AND_SHIELD, 1).type).toBe(
        WeaponClass.SWORD_AND_SHIELD
      );
    });
  });
  describe('getWeaponDamageProperties', () => {
    it('throws error when weapon type provided', () => {
      expect(() =>
        getWeaponDamageProperties('Bad Type' as WeaponClass)
      ).toThrow();
    });
    it('returns a valid great sword damage properties', () => {
      expect(getWeaponDamageProperties(WeaponClass.GREAT_SWORD).type).toBe(
        WeaponClass.GREAT_SWORD
      );
    });
    it('returns a valid hammer damage properties', () => {
      expect(getWeaponDamageProperties(WeaponClass.HAMMER).type).toBe(
        WeaponClass.HAMMER
      );
    });
    it('returns a valid lance damage properties', () => {
      expect(getWeaponDamageProperties(WeaponClass.LANCE).type).toBe(
        WeaponClass.LANCE
      );
    });
    it('returns a valid longsword damage properties', () => {
      expect(getWeaponDamageProperties(WeaponClass.LONGSWORD).type).toBe(
        WeaponClass.LONGSWORD
      );
    });
    it('returns a valid switch axe damage properties', () => {
      expect(getWeaponDamageProperties(WeaponClass.SWITCH_AXE).type).toBe(
        WeaponClass.SWITCH_AXE
      );
    });
    it('returns a valid sword and shield damage properties', () => {
      expect(getWeaponDamageProperties(WeaponClass.SWORD_AND_SHIELD).type).toBe(
        WeaponClass.SWORD_AND_SHIELD
      );
    });
  });
});
