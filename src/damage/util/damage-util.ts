import { Weapons } from '../../model';
import type { MonsterLevelTypes } from '../../model/monster-levels';
import type { MonsterTypes } from '../../model/monsters';
import { Sharpness, type WeaponTypes } from '../../model/weapons';
import type { DamageBuffArgs } from '../types';
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
 * Default params for {@link getWeaponClassMultiplier}
 */
const defaultWeaponClassArgs = Object.freeze<DamageBuffArgs['weaponClassArgs']>(
  {
    powercharm: false,
    powertalon: false,
    demondrug: 'none',
    might: 'none',
    armor: 'none'
  }
);

/**
 * Default params for {@link getRawMultiplier}
 */
const defaultRawArgs = Object.freeze<DamageBuffArgs['rawArgs']>({
  criticalHit: 'none',
  lowHealthSkill: 'none',
  fortify: 'none'
}); /**

 * Default params for {@link calculateElementalDamage}
 */
const defaultElementArgs = Object.freeze<DamageBuffArgs['elementArgs']>({
  awaken: false,
  elementAttack: 'none'
});

/**
 * @returns true if weapon has the provided sharpness level, otherwise throws error
 * @throws Error if weapon does not have provided sharpness level
 */
export function validateWeaponSharpness(
  weapon: WeaponTypes.Weapon,
  sharpness: Sharpness
): true {
  const validSharpness = sharpness <= weapon.sharpnessUp.length - 1;
  if (!validSharpness) {
    throw new Error(
      `'${weapon.name}' cannot have '${Weapons.sharpnessAsString(sharpness)}' sharpness`
    );
  }
  return validSharpness;
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
      throw new Error(`Invalid sharpness value '${sharpness}'`);
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
      throw new Error(`Invalid sharpness value '${sharpness}'`);
  }
}

/**
 * Used by {@link calculateElementalDamage}
 * @returns Elemental damage or 0 if weapon has status rather than element
 */
function getHitzoneForWeaponElement(
  hitzoneValues: MonsterTypes.HitzoneValues,
  weaponElement: WeaponTypes.Weapon['secondaryDamageType']
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
      throw new Error(`Invalid hitzone type '${weaponElement}'`);
  }
}

/**
 * Get additional attack buffs multiplied against the weapon's class modifier.
 *
 * Taken from Lord Grahf's [Monster Hunter Tri Damage Formula FAQ](https://gamefaqs.gamespot.com/wii/943655-monster-hunter-tri/faqs/59207)
 * - Section 9a. Attack Up Multipliers (ATKUP)
 *
 * Items and armor skills can affect attack stats. Multipliers are broken into different sub-categories
 * which can stack amongst each other. Each category has a multiplier which is applied to the weapon's class modifier.
 */
export function getWeaponClassMultiplier(
  weaponClassArgs: DamageBuffArgs['weaponClassArgs'] = defaultWeaponClassArgs
): number {
  let totalAttackMultiplier = 0;
  const { powercharm, powertalon, demondrug, might, armor } = weaponClassArgs;
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
  totalAttackMultiplier += DEMONDRUG_MULTIPLIERS[demondrug];
  /**
   * 4. Might
   */
  totalAttackMultiplier += MIGHT_MULTIPLIERS[might];
  /**
   * 5. Armor Skill
   */
  totalAttackMultiplier += ARMOR_SKILL_MULTIPLIERS[armor];

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
export function getRawMultiplier(
  rawArgs: DamageBuffArgs['rawArgs'] = defaultRawArgs
) {
  const { criticalHit, lowHealthSkill, fortify } = rawArgs;
  return (
    CRITICAL_HIT_MULTIPLIERS[criticalHit] *
    LOW_HEALTH_SKILL_MULTIPLIERS[lowHealthSkill] *
    FORTIFY_MULTIPLIERS[fortify]
  );
}

/**
 * Handles decimal logic when applying the defense multiplier.
 * The damage decimal is always dropped before being put against a defense multiplier.
 * The result then has its decimal dropped again.
 */
export function applyDefenseMultiplier(
  damage: number,
  defenseMultiplier: MonsterLevelTypes.MonsterStatMultipliers['defense']
) {
  return Math.floor(Math.floor(damage) * defenseMultiplier);
}

interface ElementalDamageArgs {
  readonly weapon: WeaponTypes.Weapon;
  /** Current sharpness of weapon */
  readonly sharpness: Sharpness;
  /** Derived from Monster hitzone */
  readonly hitzoneValues: MonsterTypes.HitzoneValues;
  readonly elementArgs?: DamageBuffArgs['elementArgs'];
}

/**
 * This should be used for calculating elemental damage as part of the overall damage formula.
 *
 * @see {@link calculateIsolatedElementalDamage} for calculating elemental damage standalone.
 *
 * Taken from Lord Grahf's [Monster Hunter Tri Damage Formula FAQ](https://gamefaqs.gamespot.com/wii/943655-monster-hunter-tri/faqs/59207)
 * - Section 1c. Elemental Damage Formula (EFMLA)
 *
 * [ELEMENT x ESHARP x ELMZONE] / [DIVIDER] = Elemental Damage
 *
 * @param weapon
 * @param sharpness
 * @param hitzoneValues
 * @param elementArgs Optional, default all `false`
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
export function calculateElementalDamage({
  weapon,
  sharpness,
  hitzoneValues,
  elementArgs = defaultElementArgs
}: ElementalDamageArgs): number {
  const { awaken, elementAttack } = elementArgs;
  const sharpnessMultiplier = getSharpnessElementalMultiplier(sharpness);
  const elementalHitzoneMultiplier = getHitzoneForWeaponElement(
    hitzoneValues,
    weapon.secondaryDamageType
  );

  // Element is not calculated for non-awakened weapon or if hitzone multiplier is 0
  if ((weapon.awaken && !awaken) || elementalHitzoneMultiplier === 0) return 0;

  const elementMultiplier = ELEMENT_ATTACK_MULTIPLIERS[elementAttack];

  const secondaryAttackWithBuffs = weapon.secondaryAttack * elementMultiplier;

  return (
    (secondaryAttackWithBuffs *
      sharpnessMultiplier *
      elementalHitzoneMultiplier) /
    ELEMENTAL_DAMAGE_DIVIDER
  );
}

/**
 * Use this for calculation elemental damage in isolation, meaning it's assumed the result
 * will not be used as part of an overall damage calculation that includes raw.
 *
 * @see {@link calculateElementalDamage} for calculating elemental damage as part of the overall damage
 */
export function calculateIsolatedElementalDamage({
  weapon,
  sharpness,
  hitzoneValues,
  elementArgs = defaultElementArgs,
  defenseMultiplier
}: ElementalDamageArgs & {
  defenseMultiplier: MonsterLevelTypes.MonsterStatMultipliers['defense'];
}) {
  return applyDefenseMultiplier(
    calculateElementalDamage({
      weapon,
      sharpness,
      hitzoneValues,
      elementArgs
    }),
    defenseMultiplier
  );
}
