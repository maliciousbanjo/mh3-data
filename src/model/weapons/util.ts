import {
  Attack,
  CutHit,
  Hit,
  Sharpness,
  ValidWeaponTypes,
  Weapon,
  WeaponType
} from './types';
import {
  GreatSwords,
  GreatSwordDamageProperties,
  Util as GreatSwordUtils,
  GreatSwordTypes
} from './great-sword';
import { Hammers, HammerDamageProperties } from './hammer';
import { Lances, LanceDamageProperties } from './lance';
import { Longswords, LongswordDamageProperties } from './longsword';
import { SwitchAxes, SwitchAxeDamageProperties } from './switch-axe';
import {
  SwordAndShields,
  SwordAndShieldDamageProperties
} from './sword-and-shield';
import { MonsterLevelTypes } from '../monster-levels';
import { MonsterTypes } from '../monsters';

const ELEMENTAL_DAMAGE_DIVIDER = 10;

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
const findWeapon = (weaponId: number) => (weapon: Weapon<WeaponType>) => {
  return weapon.id === weaponId;
};

/**
 * @param weaponType
 * @param weaponId
 *
 * @returns instance of a {@link Weapon}
 */
export function getWeapon(
  weaponType: WeaponType,
  weaponId: number
): Weapon<WeaponType> {
  let weapon: Weapon<WeaponType> | undefined = undefined;

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
 * @returns DamageProperties corresponding to the provided weaponType
 */
export function getWeaponDamageProperties(weaponType: WeaponType) {
  switch (weaponType) {
    case WeaponType.GREAT_SWORD: {
      return GreatSwordDamageProperties;
    }
    case WeaponType.HAMMER: {
      return HammerDamageProperties;
    }
    case WeaponType.LANCE: {
      return LanceDamageProperties;
    }
    case WeaponType.LONGSWORD: {
      return LongswordDamageProperties;
    }
    case WeaponType.SWITCH_AXE: {
      return SwitchAxeDamageProperties;
    }
    case WeaponType.SWORD_AND_SHIELD: {
      return SwordAndShieldDamageProperties;
    }
    default: {
      throw new Error(
        `Could not find damageProperties for weapon type '${weaponType}'`
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

/**
 * @returns sharpness multiplier for RAW damage (as opposed to ELEMENTAL)
 */
export function getSharpnessRawMultiplier(sharpness: Sharpness): number {
  switch (sharpness) {
    case Sharpness.RED:
      return 0.5;
    case Sharpness.ORANGE:
      return 0.75;
    case Sharpness.YELLOW:
      return 1;
    case Sharpness.GREEN:
      return 1.05;
    case Sharpness.BLUE:
      return 1.2;
    case Sharpness.WHITE:
      return 1.32;
    case Sharpness.PURPLE:
      return 1.5;
    default:
      throw new Error(`Invalid sharpness value ${sharpness}`);
  }
}

/**
 * @returns sharpness multiplier for ELEMENTAL damage (as opposed to RAW)
 */
export function getSharpnessElementalMultiplier(sharpness: Sharpness): number {
  switch (sharpness) {
    case Sharpness.RED:
      return 0.25;
    case Sharpness.ORANGE:
      return 0.55;
    case Sharpness.YELLOW:
      return 0.75;
    case Sharpness.GREEN:
      return 1;
    case Sharpness.BLUE:
      return 1.0625;
    case Sharpness.WHITE:
      return 1.125;
    case Sharpness.PURPLE:
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
  weaponElement: Weapon<ValidWeaponTypes>['secondaryDamageType']
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
 * @returns true if weapon has the provided sharpness level, otherwise throws error
 * @throws Error if weapon does not have provided sharpness level
 */
export function validateWeaponSharpness(
  weapon: Weapon<WeaponType>,
  sharpness: Sharpness
): true {
  const validSharpness = sharpness <= weapon.sharpnessUp.length - 1;
  if (!validSharpness) {
    throw new Error(
      `${weapon.name} cannot have ${sharpnessAsString(sharpness)} sharpness`
    );
  }
  return validSharpness;
}

/**
 * ELEMENTAL DAMAGE FORMULA
 *
 * Taken from Lord Grahf's [Monster Hunter Tri Damage Formula FAQ](https://gamefaqs.gamespot.com/wii/943655-monster-hunter-tri/faqs/59207)
 *
 * [ELEMENT x ESHARP x ELMZONE] / [DIVIDER] = Elemental Damage
 *
 * @example
 * [ELEMENT]:  250           (250 thunder element)
 * [ESHARP]:   1.0           (Green sharpness for elements, x 1.0)
 * [ELMZONE]:  .20           (Rathian's weakness to thunder at head is 20)
 * [DIVIDER]:   10           (Elemental Divider is always 10)
 * [DEFENSE]:  .75           (.75 online high rank defense from earlier)
 *
 * [ELEMENT x ESHARP x ELMZONE] / [DIVIDER] = Elemental Damage [X DEFENSE]
 *    250   x  1.0   x   .20    /     10    =      5 (Added Thunder Damage)
 */
export function calculateElementalDamage(
  weapon: Weapon<ValidWeaponTypes>,
  /** Current sharpness of weapon */
  sharpness: Sharpness,
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
export function calculateDamage(
  weaponType: WeaponType,
  weaponId: number,
  /** Attack being performed by weapon */
  attackName: Attack['name'],
  /** Current sharpness of weapon */
  sharpness: Sharpness,
  /** Derived from Monster hitzone */
  hitzoneValues: MonsterTypes.HitzoneValues,
  /** Derived from Monster level set by Quest */
  multipliers: MonsterLevelTypes.MonsterLevelMultipliers,
  /** Will include awakened element if applicable */
  awaken = false
): number {
  /** This will get raw, element, weapon class, and verify provided attack is valid for the weapon type */
  const weapon = getWeapon(weaponType, weaponId);
  validateWeaponSharpness(weapon, sharpness);

  switch (weaponType) {
    // TODO: include arg for middle of blade
    case WeaponType.GREAT_SWORD:
      {
        GreatSwordUtils.calculateGreatSwordDamage(
          weapon,
          attackName as GreatSwordTypes.GreatSwordAttack,
          sharpness,
          hitzoneValues,
          multipliers,
          awaken
        );
      }
      break;
    // TODO:
    case WeaponType.HAMMER: {
      console.error(
        `Damage calulation for ${WeaponType.HAMMER} not yet implemented`
      );
      break;
    }
    // TODO:
    case WeaponType.LANCE: {
      console.error(
        `Damage calulation for ${WeaponType.LANCE} not yet implemented`
      );
      break;
    }
    // TODO:
    case WeaponType.LONGSWORD: {
      console.error(
        `Damage calulation for ${WeaponType.LONGSWORD} not yet implemented`
      );
      break;
    }
    // TODO:
    case WeaponType.SWITCH_AXE: {
      console.error(
        `Damage calulation for ${WeaponType.SWITCH_AXE} not yet implemented`
      );
      break;
    }
    // TODO:
    case WeaponType.SWORD_AND_SHIELD: {
      console.error(
        `Damage calulation for ${WeaponType.SWORD_AND_SHIELD} not yet implemented`
      );
      break;
    }
    default: {
      throw new Error(`${weaponType} is not a valid weapon type`);
    }
  }

  return 0; // TODO: Real numbers
}
