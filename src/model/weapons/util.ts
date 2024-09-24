import { Attack, ValidWeaponTypes, Weapon, WeaponType } from './types';
import { GreatSwords } from './great-sword';
import { Hammers } from './hammer';
import { Lances } from './lance';
import { Longswords } from './longsword';
import { SwitchAxes } from './switch-axe';
import { SwordAndShields } from './sword-and-shield';

/**
 * Callback for {@link Array.find} to find a weapon
 * @param weaponId Weapon to find
 */
const findWeapon =
  <T extends ValidWeaponTypes>(weaponId: number) =>
  (weapon: Weapon<T>, index: number, obj: readonly Weapon<T>[]) => {
    return weapon.id === weaponId;
  };

/**
 * @param weaponType
 * @param weaponId
 *
 * @returns instance of a {@link Weapon}
 */
export function getWeapon<T extends ValidWeaponTypes>(
  weaponType: T,
  weaponId: number
): Weapon<ValidWeaponTypes> {
  let weapon: Weapon<ValidWeaponTypes> | undefined = undefined;

  switch (weaponType) {
    case WeaponType.GREAT_SWORD: {
      weapon = GreatSwords.find(findWeapon(weaponId));
      break;
    }
    case WeaponType.HAMMER: {
      weapon = Hammers.find(findWeapon(weaponId));
      break;
    }
    case WeaponType.LANCE: {
      weapon = Lances.find(findWeapon(weaponId));
      break;
    }
    case WeaponType.LONGSWORD: {
      weapon = Longswords.find(findWeapon(weaponId));
      break;
    }
    case WeaponType.SWITCH_AXE: {
      weapon = SwitchAxes.find(findWeapon(weaponId));
      break;
    }
    case WeaponType.SWORD_AND_SHIELD: {
      weapon = SwordAndShields.find(findWeapon(weaponId));
      break;
    }
    default: {
      throw new Error(`${weaponType} is not a valid weapon type`);
    }
  }
  if (!weapon)
    throw new Error(
      `Could not find weapon of type '${weaponType}' with id: ${weaponId}`
    );
  return weapon;
}

/**
 * RAW DAMAGE FORMULA
 *
 * Taken from Lord Grahf's [Monster Hunter Tri Damage Formula FAQ](https://gamefaqs.gamespot.com/wii/943655-monster-hunter-tri/faqs/59207)
 *
 * [ATP x TYPE x SHARP x HITZONE x VAR] / [CLASS] = Raw Damage
 *
 * @example
 * [ATP]:     494      (Lance 483 + attack boost 11)
 * [TYPE]:    .23      (Normal lance stab, 23%)
 * [SHARP]:   1.05     (Green sharpness 105%, or 1.05)
 * [HITZONE]: .90      (Rathian head multiplier is 90)
 * [DEFENSE]: .75      (In this high rank online quest, defense is .75)
 * [VAR]:     1.0      (No special variable for lance)
 * [CLASS]:   2.3      (All lances, class multiplier 2.3)
 *
 * [ATP x TYPE x SHARP x HITZONE] / [CLASS] = Raw Damage [X DEFENSE]
 *  494 x  .23 x 1.05  x   .90    /   2.3   =    46.683   X   .75
 */
export function calculateDamage<T extends WeaponType>(
  weaponType: T,
  weaponId: number,
  attack: Attack, // TODO: Will need type guard to determine if attack is cut or impact
  sharpness: string, // TODO: Sharpness color type?
  /** Derived from Monster hitzone */
  hitzone: number,
  /** Derived from Monster level set by Quest */
  defenseMultiplier: number,
  /** Optional, if true will include awaken element */
  awaken = false
) {
  /** This will get raw, element, weapon class, and verify provided attack is valid for the weapon type */
  // const weapon = getWeapon(weaponType, weaponId); // switch case on weaponType for correct data, then index
}
