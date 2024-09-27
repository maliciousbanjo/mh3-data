import {
  ARMOR_SKILL_MULTIPLIERS,
  CRITICAL_HIT_MULTIPLIERS,
  DEMONDRUG_MULTIPLIERS,
  FORTIFY_MULTIPLIERS,
  LOW_HEALTH_SKILL_MULTIPLIERS,
  MIGHT_MULTIPLIERS,
  POWERCHARM_MULTIPLIER,
  POWERTALON_MULTIPLIER
} from '../../../src/damage/util/attack-multipliers';
import {
  getAttackUpMultiplier,
  getRawMultiplier,
  validateWeaponSharpness
} from '../../../src/damage/util/damage-util';
import { GreatSwords, WeaponTypes } from '../../../src/model/weapons';

describe('damage utils', () => {
  describe('validateWeaponSharpness', () => {
    it('weapon has valid sharpness', () => {
      const gs = GreatSwords[0];
      expect(
        validateWeaponSharpness(gs, WeaponTypes.Sharpness.ORANGE)
      ).toBeTruthy();
    });
    it('throws error because weapon does not have sharpness', () => {
      const gs = GreatSwords[0];
      expect(() =>
        validateWeaponSharpness(gs, WeaponTypes.Sharpness.PURPLE)
      ).toThrow();
    });
  });

  describe('getAttackUpMultiplier', () => {
    it('returns 0', () => {
      expect(getAttackUpMultiplier()).toBe(0);
    });
    it('Powercharm', () => {
      expect(
        getAttackUpMultiplier({
          powercharm: true
        })
      ).toBe(POWERCHARM_MULTIPLIER);
    });
    it('Powertalon', () => {
      expect(
        getAttackUpMultiplier({
          powertalon: true
        })
      ).toBe(POWERTALON_MULTIPLIER);
    });
    it('Demondrug', () => {
      expect(
        getAttackUpMultiplier({
          demonDrug: 'megaDemondrug'
        })
      ).toBe(DEMONDRUG_MULTIPLIERS.megaDemondrug);
    });
    it('Might', () => {
      expect(
        getAttackUpMultiplier({
          might: 'mightPill'
        })
      ).toBe(MIGHT_MULTIPLIERS.mightPill);
    });
    it('Armor Skill', () => {
      expect(
        getAttackUpMultiplier({
          armor: 'attackUpLarge'
        })
      ).toBe(ARMOR_SKILL_MULTIPLIERS.attackUpLarge);
    });
  });

  describe('getRawMultiplier', () => {
    it('Critical hit', () => {
      expect(getRawMultiplier('positive', undefined, undefined)).toBe(
        CRITICAL_HIT_MULTIPLIERS['positive']
      );
    });

    it('Negative critical hit', () => {
      expect(getRawMultiplier('negative', undefined, undefined)).toBe(
        CRITICAL_HIT_MULTIPLIERS['negative']
      );
    });

    it('Adrenaline+2', () => {
      expect(getRawMultiplier(undefined, 'adrenalineTwo', undefined)).toBe(
        LOW_HEALTH_SKILL_MULTIPLIERS['adrenalineTwo']
      );
    });

    it('Felyine Heroics', () => {
      expect(getRawMultiplier(undefined, 'heroics', undefined)).toBe(
        LOW_HEALTH_SKILL_MULTIPLIERS['heroics']
      );
    });

    it('Fortify', () => {
      expect(getRawMultiplier(undefined, undefined, 'secondFaint')).toBe(
        FORTIFY_MULTIPLIERS['secondFaint']
      );
    });
  });
});
