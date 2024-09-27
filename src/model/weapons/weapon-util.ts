import type { CutHit, Hit, Weapon, WeaponDamageProperties } from './types';
import { GreatSwords, GreatSwordDamageProperties } from './great-sword';
import { Hammers, HammerDamageProperties } from './hammer';
import { Lances, LanceDamageProperties } from './lance';
import { Longswords, LongswordDamageProperties } from './longsword';
import { SwitchAxes, SwitchAxeDamageProperties } from './switch-axe';
import {
  SwordAndShields,
  SwordAndShieldDamageProperties
} from './sword-and-shield';
import { Sharpness, WeaponClass } from './enum';

/**
 * Type guard for a {@link CutHit}
 */
export function isCutHit(object: Hit): object is CutHit {
  return object.type === 'cut';
}

/**
 * Callback for {@link Array.find} to find a weapon
 * @param weaponId Weapon to find
 */
const findWeapon = (weaponId: number) => (weapon: Weapon<WeaponClass>) => {
  return weapon.id === weaponId;
};

/**
 * @param weaponClass
 * @param weaponId
 *
 * @returns instance of a {@link Weapon}
 */
export function getWeapon(
  weaponClass: WeaponClass,
  weaponId: number
): Weapon<WeaponClass> {
  let weapon: Weapon<WeaponClass> | undefined = undefined;

  switch (weaponClass) {
    case WeaponClass.GREAT_SWORD: {
      weapon = GreatSwords.find(findWeapon(weaponId));
      break;
    }
    case WeaponClass.HAMMER: {
      weapon = Hammers.find(findWeapon(weaponId));
      break;
    }
    case WeaponClass.LANCE: {
      weapon = Lances.find(findWeapon(weaponId));
      break;
    }
    case WeaponClass.LONGSWORD: {
      weapon = Longswords.find(findWeapon(weaponId));
      break;
    }
    case WeaponClass.SWITCH_AXE: {
      weapon = SwitchAxes.find(findWeapon(weaponId));
      break;
    }
    case WeaponClass.SWORD_AND_SHIELD: {
      weapon = SwordAndShields.find(findWeapon(weaponId));
      break;
    }
    default: {
      throw new Error(`${weaponClass} is not a valid weapon type`);
    }
  }
  if (!weapon)
    throw new Error(
      `Could not find weapon of type '${weaponClass}' with id: ${weaponId}`
    );
  return weapon;
}

/**
 * @returns DamageProperties corresponding to the provided weaponType
 */
export function getWeaponDamageProperties(
  weaponClass: WeaponClass
): WeaponDamageProperties<typeof weaponClass> {
  switch (weaponClass) {
    case WeaponClass.GREAT_SWORD: {
      return GreatSwordDamageProperties;
    }
    case WeaponClass.HAMMER: {
      return HammerDamageProperties;
    }
    case WeaponClass.LANCE: {
      return LanceDamageProperties;
    }
    case WeaponClass.LONGSWORD: {
      return LongswordDamageProperties;
    }
    case WeaponClass.SWITCH_AXE: {
      return SwitchAxeDamageProperties;
    }
    case WeaponClass.SWORD_AND_SHIELD: {
      return SwordAndShieldDamageProperties;
    }
    default: {
      throw new Error(
        `Could not find damageProperties for weapon type '${weaponClass}'`
      );
    }
  }
}

export function sharpnessAsString(sharpness: Sharpness) {
  switch (sharpness) {
    case Sharpness.RED:
      return 'red';
    case Sharpness.ORANGE:
      return 'orange';
    case Sharpness.YELLOW:
      return 'yellow';
    case Sharpness.GREEN:
      return 'green';
    case Sharpness.BLUE:
      return 'blue';
    case Sharpness.WHITE:
      return 'white';
    case Sharpness.PURPLE:
      return 'purple';
    default:
      throw new Error(`Invalid sharpness value ${sharpness}`);
  }
}
