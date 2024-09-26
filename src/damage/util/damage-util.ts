import { WeaponTypes } from '../../model/weapons';
import { Weapons } from '../../model';
import { MonsterTypes } from '../../model/monsters';
import { MonsterLevelTypes } from '../../model/monster-levels';

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
 * ELEMENTAL DAMAGE FORMULA
 *
 * Taken from Lord Grahf's [Monster Hunter Tri Damage Formula FAQ](https://gamefaqs.gamespot.com/wii/943655-monster-hunter-tri/faqs/59207)
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
  multipliers: MonsterLevelTypes.MonsterLevelMultipliers,
  awaken = false
): number {
  const sharpnessMultiplier = getSharpnessElementalMultiplier(sharpness);
  const elementalHitzoneMultiplier = getHitzoneForWeaponElement(
    hitzoneValues,
    weapon.secondaryDamageType
  );

  // Element is not calculated for non-awakened weapon or if hitzone multiplier is 0
  if ((weapon.awaken && !awaken) || elementalHitzoneMultiplier === 0) return 0;

  return (
    (weapon.secondaryAttack *
      sharpnessMultiplier *
      elementalHitzoneMultiplier *
      multipliers.defense) /
    ELEMENTAL_DAMAGE_DIVIDER
  );
}
