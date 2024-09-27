import { WeaponTypes } from '../../model/weapons';
import { Weapons } from '../../model';
import { MonsterTypes } from '../../model/monsters';
import { MonsterLevelTypes } from '../../model/monster-levels';
import { DamageBuffArgs } from '../types';
import {
  ARMOR_SKILL_MULTIPLIERS,
  CRITICAL_HIT_MULTIPLIERS,
  DEMONDRUG_MULTIPLIERS,
  ELEMENT_ATTACK_MULTIPLIERS,
  FORTIFY_MULTIPLIERS,
  LOW_HEALTH_SKILL_MULTIPLIERS,
  MIGHT_MULTIPLIERS,
  POWERCHARM_MULTIPLIER,
  POWERTALON_MULTIPLIER
} from './attack-multipliers';

const ELEMENTAL_DAMAGE_DIVIDER = 10;

/**
 * @returns true if weapon has the provided sharpness level, otherwise throws error
 * @throws Error if weapon does not have provided sharpness level
 */
export function validateWeaponSharpness(
  weapon: WeaponTypes.Weapon<WeaponTypes.WeaponClass>,
  sharpness: WeaponTypes.Sharpness
): true {
  const validSharpness = sharpness <= weapon.sharpnessUp.length - 1;
  if (!validSharpness) {
    throw new Error(
      `${weapon.name} cannot have ${Weapons.Util.sharpnessAsString(sharpness)} sharpness`
    );
  }
  return validSharpness;
}

/**
 * @returns sharpness multiplier for RAW damage (as opposed to ELEMENTAL)
 */
export function getSharpnessRawMultiplier(
  sharpness: WeaponTypes.Sharpness
): number {
  switch (sharpness) {
    case WeaponTypes.Sharpness.RED:
      return 0.5;
    case WeaponTypes.Sharpness.ORANGE:
      return 0.75;
    case WeaponTypes.Sharpness.YELLOW:
      return 1;
    case WeaponTypes.Sharpness.GREEN:
      return 1.05;
    case WeaponTypes.Sharpness.BLUE:
      return 1.2;
    case WeaponTypes.Sharpness.WHITE:
      return 1.32;
    case WeaponTypes.Sharpness.PURPLE:
      return 1.5;
    default:
      throw new Error(`Invalid sharpness value ${sharpness}`);
  }
}

/**
 * @returns sharpness multiplier for ELEMENTAL damage (as opposed to RAW)
 */
export function getSharpnessElementalMultiplier(
  sharpness: WeaponTypes.Sharpness
): number {
  switch (sharpness) {
    case WeaponTypes.Sharpness.RED:
      return 0.25;
    case WeaponTypes.Sharpness.ORANGE:
      return 0.55;
    case WeaponTypes.Sharpness.YELLOW:
      return 0.75;
    case WeaponTypes.Sharpness.GREEN:
      return 1;
    case WeaponTypes.Sharpness.BLUE:
      return 1.0625;
    case WeaponTypes.Sharpness.WHITE:
      return 1.125;
    case WeaponTypes.Sharpness.PURPLE:
      return 1.2;
    default:
      throw new Error(`Invalid sharpness value ${sharpness}`);
  }
}

/**
 * Used by {@link calculateElementalDamage}
 * @returns Elemental damage or 0 if weapon has status rather than element
 */
function getHitzoneForWeaponElement(
  hitzoneValues: MonsterTypes.HitzoneValues,
  weaponElement: WeaponTypes.Weapon<WeaponTypes.WeaponClass>['secondaryDamageType']
) {
  if (
    weaponElement === 'sleep' ||
    weaponElement === 'poison' ||
    weaponElement === 'paralysis'
  )
    return 0;

  switch (weaponElement) {
    case 'fire':
      return hitzoneValues.fire;
    case 'water':
      return hitzoneValues.water;
    case 'ice':
      return hitzoneValues.ice;
    case 'thunder':
      return hitzoneValues.thunder;
    case 'dragon':
      return hitzoneValues.dragon;
    default:
      throw new Error(`Invalid hitzone type ${weaponElement}`);
  }
}

/**
 * Get additional attack buffs multiplied against the weapon's class modifier.
 *
 * Taken from Lord Grahf's [Monster Hunter Tri Damage Formula FAQ](https://gamefaqs.gamespot.com/wii/943655-monster-hunter-tri/faqs/59207)
 * Section 9a. Attack Up Multipliers (ATKUP)
 *
 * Items and armor skills can affect attack stats. Multipliers are broken into different sub-categories
 * which can stack amongst each other. Each category has a multiplier which is applied to the weapon's class modifier.
 */
export function getWeaponClassMultiplier(
  weaponClassArgs: DamageBuffArgs['weaponClassArgs'] = {}
): number {
  let totalAttackMultiplier = 0;
  const { powercharm, powertalon, demonDrug, might, armor } = weaponClassArgs;
  /**
   * 1. Powercharm
   */
  totalAttackMultiplier += powercharm ? POWERCHARM_MULTIPLIER : 0;
  /**
   * 2. Powertalon
   */
  totalAttackMultiplier += powertalon ? POWERTALON_MULTIPLIER : 0;
  /**
   * 3. Demondrug/Kitchen
   */
  totalAttackMultiplier += DEMONDRUG_MULTIPLIERS[demonDrug ?? 'none'];
  /**
   * 4. Might
   */
  totalAttackMultiplier += MIGHT_MULTIPLIERS[might ?? 'none'];
  /**
   * 5. Armor Skill
   */
  totalAttackMultiplier += ARMOR_SKILL_MULTIPLIERS[armor ?? 'none'];

  return totalAttackMultiplier;
}

/**
 * Get additional attack buffs multiplied against the weapon's raw
 *
 * - Critical hits recieve a 1.25 bonus (0.75 for negative critical)
 *
 * - Felyne Heroics recieves a 1.35 bonus
 * - Adrenaline+2 recieves a 1.30 bonus
 *   - Does not stack with heroics (and vice versa)
 *
 * - Fortify recieves a 10% bonus per faint
 */
export function getRawMultiplier(rawArgs: DamageBuffArgs['rawArgs'] = {}) {
  const { criticalHit, lowHealthSkill, fortify } = rawArgs;
  return (
    CRITICAL_HIT_MULTIPLIERS[criticalHit ?? 'none'] *
    LOW_HEALTH_SKILL_MULTIPLIERS[lowHealthSkill ?? 'none'] *
    FORTIFY_MULTIPLIERS[fortify ?? 'none']
  );
}

/**
 * ELEMENTAL DAMAGE FORMULA
 *
 * Taken from Lord Grahf's [Monster Hunter Tri Damage Formula FAQ](https://gamefaqs.gamespot.com/wii/943655-monster-hunter-tri/faqs/59207)
 * Section 1c. Elemental Damage Formula (EFMLA)
 *
 * [ELEMENT x ESHARP x ELMZONE] / [DIVIDER] = Elemental Damage
 *
 * @example
 * [ELEMENT]:  250    // (250 thunder element)
 * [ESHARP]:   1.0    // (Green sharpness for elements, x 1.0)
 * [ELMZONE]:  .20    // (Rathian's weakness to thunder at head is 20)
 * [DIVIDER]:   10    // (Elemental Divider is always 10)
 * [DEFENSE]:  .75    // (.75 online high rank defense from earlier)
 *
 * [ELEMENT x ESHARP x ELMZONE] / [DIVIDER] = Elemental Damage [X DEFENSE]
 *    250   x  1.0   x   .20    /     10    =      5 (Added Thunder Damage)
 */
export function calculateElementalDamage(
  weapon: WeaponTypes.Weapon<WeaponTypes.ValidWeaponClasses>,
  /** Current sharpness of weapon */
  sharpness: WeaponTypes.Sharpness,
  /** Derived from Monster hitzone */
  hitzoneValues: MonsterTypes.HitzoneValues,
  levelMultipliers: MonsterLevelTypes.MonsterLevelMultipliers,
  elementArgs: DamageBuffArgs['elementArgs'] = {}
): number {
  const { awaken, elementAttack } = elementArgs;
  const sharpnessMultiplier = getSharpnessElementalMultiplier(sharpness);
  const elementalHitzoneMultiplier = getHitzoneForWeaponElement(
    hitzoneValues,
    weapon.secondaryDamageType
  );

  // Element is not calculated for non-awakened weapon or if hitzone multiplier is 0
  if ((weapon.awaken && !awaken) || elementalHitzoneMultiplier === 0) return 0;

  const elementMultiplier = elementAttack
    ? ELEMENT_ATTACK_MULTIPLIERS[elementAttack]
    : 1;

  const secondaryAttackWithBuffs = weapon.secondaryAttack * elementMultiplier;

  return (
    (secondaryAttackWithBuffs *
      sharpnessMultiplier *
      elementalHitzoneMultiplier *
      levelMultipliers.defense) /
    ELEMENTAL_DAMAGE_DIVIDER
  );
}
