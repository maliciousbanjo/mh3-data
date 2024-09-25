import { MonsterLevels } from '../../../src/model';
import { Alatreon } from '../../../src/model/monsters/large-monster-data';
import { GreatSwords } from '../../../src/model/weapons/great-sword';
import { Sharpness, WeaponType } from '../../../src/model/weapons/types';
import {
  calculateDamage,
  getWeapon,
  getWeaponDamageProperties,
  validateWeaponSharpness
} from '../../../src/model/weapons/util';

describe('Weapon utils', () => {
  describe('getWeapon', () => {
    it('throws error when invalid ID provided', () => {
      expect(() => getWeapon(WeaponType.GREAT_SWORD, -1)).toThrow();
    });
    it('returns a valid great sword', () => {
      expect(getWeapon(WeaponType.GREAT_SWORD, 1).type).toBe(
        WeaponType.GREAT_SWORD
      );
    });
    it('returns a valid hammer', () => {
      expect(getWeapon(WeaponType.HAMMER, 1).type).toBe(WeaponType.HAMMER);
    });
    it('returns a valid lance', () => {
      expect(getWeapon(WeaponType.LANCE, 1).type).toBe(WeaponType.LANCE);
    });
    it('returns a valid longsword', () => {
      expect(getWeapon(WeaponType.LONGSWORD, 1).type).toBe(
        WeaponType.LONGSWORD
      );
    });
    it('returns a valid switch axe', () => {
      expect(getWeapon(WeaponType.SWITCH_AXE, 1).type).toBe(
        WeaponType.SWITCH_AXE
      );
    });
    it('returns a valid sword and shield', () => {
      expect(getWeapon(WeaponType.SWORD_AND_SHIELD, 1).type).toBe(
        WeaponType.SWORD_AND_SHIELD
      );
    });
  });
  describe('getWeaponDamageProperties', () => {
    it('throws error when weapon type provided', () => {
      expect(() =>
        getWeaponDamageProperties('Bad Type' as WeaponType)
      ).toThrow();
    });
    it('returns a valid great sword damage properties', () => {
      expect(getWeaponDamageProperties(WeaponType.GREAT_SWORD).type).toBe(
        WeaponType.GREAT_SWORD
      );
    });
    it('returns a valid hammer damage properties', () => {
      expect(getWeaponDamageProperties(WeaponType.HAMMER).type).toBe(
        WeaponType.HAMMER
      );
    });
    it('returns a valid lance damage properties', () => {
      expect(getWeaponDamageProperties(WeaponType.LANCE).type).toBe(
        WeaponType.LANCE
      );
    });
    it('returns a valid longsword damage properties', () => {
      expect(getWeaponDamageProperties(WeaponType.LONGSWORD).type).toBe(
        WeaponType.LONGSWORD
      );
    });
    it('returns a valid switch axe damage properties', () => {
      expect(getWeaponDamageProperties(WeaponType.SWITCH_AXE).type).toBe(
        WeaponType.SWITCH_AXE
      );
    });
    it('returns a valid sword and shield damage properties', () => {
      expect(getWeaponDamageProperties(WeaponType.SWORD_AND_SHIELD).type).toBe(
        WeaponType.SWORD_AND_SHIELD
      );
    });
  });
  describe('validateWeaponSharpness', () => {
    it('weapon has valid sharpness', () => {
      const gs = GreatSwords[0];
      expect(validateWeaponSharpness(gs, Sharpness.ORANGE)).toBeTruthy();
    });
    it('throws error because weapon does not have sharpness', () => {
      const gs = GreatSwords[0];
      expect(() => validateWeaponSharpness(gs, Sharpness.PURPLE)).toThrow();
    });
  });
  describe('calculateDamage', () => {
    const alatreonHeadHitzoneValues =
      Alatreon.hitzoneGroups[0].hitzones['Head'];
    const levelMultipliers = MonsterLevels.Util.getMonsterLevelMultipliers(52); // The Brilliant Darkness

    it('throws error for invalid sharpness', () => {
      expect(() =>
        calculateDamage(
          WeaponType.GREAT_SWORD,
          1, // Iron Blade
          'L3 Charge',
          Sharpness.PURPLE,
          alatreonHeadHitzoneValues,
          levelMultipliers
        )
      ).toThrow();
    });

    it('Great Sword', () => {
      const damage = calculateDamage(
        WeaponType.GREAT_SWORD,
        57, // Anguish (P)
        'L3 Charge',
        Sharpness.PURPLE,
        alatreonHeadHitzoneValues,
        levelMultipliers,
        false,
        { middleOfBlade: false }
      );

      expect(damage).toMatchSnapshot();
    });

    it('Hammer', () => {
      const damage = calculateDamage(
        WeaponType.HAMMER,
        49, // Devil's Crush (P)
        'Superpound',
        Sharpness.PURPLE,
        alatreonHeadHitzoneValues,
        levelMultipliers,
        false,
        {}
      );
      expect(damage).toMatchSnapshot();
    });

    it('Lance', () => {
      const damage = calculateDamage(
        WeaponType.LANCE,
        52, // Alatreon Gleam,
        'High Stab Combo',
        Sharpness.PURPLE,
        alatreonHeadHitzoneValues,
        levelMultipliers,
        false,
        {}
      );
      expect(damage).toMatchSnapshot();
    });
  });
});
