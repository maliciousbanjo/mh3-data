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
import { GreatSword, Sharpness } from '../../../src/model/weapons';

describe('damage utils', () => {
  describe('validateWeaponSharpness', () => {
    it('weapon has valid sharpness', () => {
      const gs = GreatSword.GreatSwords[0];
      expect(validateWeaponSharpness(gs, Sharpness.ORANGE)).toBeTruthy();
    });
    it('throws error because weapon does not have sharpness', () => {
      const gs = GreatSword.GreatSwords[0];
      expect(() => validateWeaponSharpness(gs, Sharpness.PURPLE)).toThrow();
    });
  });

  describe('getWeaponClassMultiplier', () => {
    it('returns 0', () => {
      expect(getWeaponClassMultiplier()).toBe(0);
    });
    it('Powercharm', () => {
      expect(
        getWeaponClassMultiplier({
          powercharm: true,
          powertalon: false,
          armor: 'none',
          demondrug: 'none',
          might: 'none'
        })
      ).toBe(POWERCHARM_MULTIPLIER);
    });
    it('Powertalon', () => {
      expect(
        getWeaponClassMultiplier({
          powercharm: false,
          powertalon: true,
          armor: 'none',
          demondrug: 'none',
          might: 'none'
        })
      ).toBe(POWERTALON_MULTIPLIER);
    });
    it('Demondrug', () => {
      expect(
        getWeaponClassMultiplier({
          powercharm: false,
          powertalon: false,
          armor: 'none',
          demondrug: 'megaDemondrug',
          might: 'none'
        })
      ).toBe(DEMONDRUG_MULTIPLIERS.megaDemondrug);
    });
    it('Might', () => {
      expect(
        getWeaponClassMultiplier({
          powercharm: false,
          powertalon: false,
          armor: 'none',
          demondrug: 'none',
          might: 'mightPill'
        })
      ).toBe(MIGHT_MULTIPLIERS.mightPill);
    });
    it('Armor Skill', () => {
      expect(
        getWeaponClassMultiplier({
          powercharm: false,
          powertalon: false,
          demondrug: 'none',
          might: 'none',
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
          lowHealthSkill: 'none',
          fortify: 'none'
        })
      ).toBe(CRITICAL_HIT_MULTIPLIERS['positive']);
    });

    it('Negative critical hit', () => {
      expect(
        getRawMultiplier({
          criticalHit: 'negative',
          lowHealthSkill: 'none',
          fortify: 'none'
        })
      ).toBe(CRITICAL_HIT_MULTIPLIERS['negative']);
    });

    it('Adrenaline+2', () => {
      expect(
        getRawMultiplier({
          criticalHit: 'none',
          lowHealthSkill: 'adrenalineTwo',
          fortify: 'none'
        })
      ).toBe(LOW_HEALTH_SKILL_MULTIPLIERS['adrenalineTwo']);
    });

    it('Felyine Heroics', () => {
      expect(
        getRawMultiplier({
          criticalHit: 'none',
          lowHealthSkill: 'heroics',
          fortify: 'none'
        })
      ).toBe(LOW_HEALTH_SKILL_MULTIPLIERS['heroics']);
    });

    it('Fortify', () => {
      expect(
        getRawMultiplier({
          criticalHit: 'none',
          lowHealthSkill: 'none',
          fortify: 'secondFaint'
        })
      ).toBe(FORTIFY_MULTIPLIERS['secondFaint']);
    });
  });
});
