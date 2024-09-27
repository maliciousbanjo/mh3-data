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
  getWeaponClassMultiplier,
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

  describe('getWeaponClassMultiplier', () => {
    it('returns 0', () => {
      expect(getWeaponClassMultiplier()).toBe(0);
    });
    it('Powercharm', () => {
      expect(
        getWeaponClassMultiplier({
          powercharm: true
        })
      ).toBe(POWERCHARM_MULTIPLIER);
    });
    it('Powertalon', () => {
      expect(
        getWeaponClassMultiplier({
          powertalon: true
        })
      ).toBe(POWERTALON_MULTIPLIER);
    });
    it('Demondrug', () => {
      expect(
        getWeaponClassMultiplier({
          demonDrug: 'megaDemondrug'
        })
      ).toBe(DEMONDRUG_MULTIPLIERS.megaDemondrug);
    });
    it('Might', () => {
      expect(
        getWeaponClassMultiplier({
          might: 'mightPill'
        })
      ).toBe(MIGHT_MULTIPLIERS.mightPill);
    });
    it('Armor Skill', () => {
      expect(
        getWeaponClassMultiplier({
          armor: 'attackUpLarge'
        })
      ).toBe(ARMOR_SKILL_MULTIPLIERS.attackUpLarge);
    });
  });

  describe('getRawMultiplier', () => {
    it('Critical hit', () => {
      expect(
        getRawMultiplier({
          criticalHit: 'positive',
          lowHealthSkill: undefined,
          fortify: undefined
        })
      ).toBe(CRITICAL_HIT_MULTIPLIERS['positive']);
    });

    it('Negative critical hit', () => {
      expect(
        getRawMultiplier({
          criticalHit: 'negative',
          lowHealthSkill: undefined,
          fortify: undefined
        })
      ).toBe(CRITICAL_HIT_MULTIPLIERS['negative']);
    });

    it('Adrenaline+2', () => {
      expect(
        getRawMultiplier({
          criticalHit: undefined,
          lowHealthSkill: 'adrenalineTwo',
          fortify: undefined
        })
      ).toBe(LOW_HEALTH_SKILL_MULTIPLIERS['adrenalineTwo']);
    });

    it('Felyine Heroics', () => {
      expect(
        getRawMultiplier({
          criticalHit: undefined,
          lowHealthSkill: 'heroics',
          fortify: undefined
        })
      ).toBe(LOW_HEALTH_SKILL_MULTIPLIERS['heroics']);
    });

    it('Fortify', () => {
      expect(
        getRawMultiplier({
          criticalHit: undefined,
          lowHealthSkill: undefined,
          fortify: 'secondFaint'
        })
      ).toBe(FORTIFY_MULTIPLIERS['secondFaint']);
    });
  });
});
