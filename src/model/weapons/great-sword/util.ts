import { MonsterLevelTypes } from '../../monster-levels';
import { MonsterTypes } from '../../monsters';
import { Attack, Damage, Sharpness, Weapon, WeaponType } from '../types';
import {
  calculateElementalDamage,
  getSharpnessRawMultiplier,
  isCutHit
} from '../util';
import { GreatSwordDamageProperties } from './great-sword-data';
import { GreatSwordAttack } from './types';

const MIDDLE_OF_BLADE_MULTIPLIER = 1.05;
const LEVEL_ONE_CHARGE_MULTIPLIER = 1.1;
const LEVEL_TWO_CHARGE_MULTIPLIER = 1.2;
const LEVEL_THREE_CHARGE_MULTIPLIER = 1.3;

/**
 * @returns Attack properties for a great sword attack
 */
function getGreatSwordAttack(
  attackName: GreatSwordAttack
): Attack<GreatSwordAttack> {
  const gsAttacks = GreatSwordDamageProperties.attackGroups[0];

  const result = gsAttacks.attacks.find(atk => atk.name === attackName);
  if (!result) {
    throw new Error(`${attackName} is not a valid Great Sword attack`);
  }
  return result;
}

/**
 * Determines special var multipliers for Great Sword.
 *
 * Middle of blade receives a bonus of 1.05
 * Charge levels 1, 2, and 3 receive a bonus 1.1, 1.2, and 1.3
 */
function getGreatSwordSpecialVarMultiplier(
  middleOfBlade: boolean,
  attackName: GreatSwordAttack
) {
  const middleBladeMultiplier = middleOfBlade ? MIDDLE_OF_BLADE_MULTIPLIER : 1;

  switch (attackName) {
    case 'L1 Charge':
    case 'L1 Smash Charge':
      return middleBladeMultiplier * LEVEL_ONE_CHARGE_MULTIPLIER;
    case 'L2 Charge':
    case 'L2 Smash Charge':
      return middleBladeMultiplier * LEVEL_TWO_CHARGE_MULTIPLIER;
    case 'L3 Charge':
    case 'L3 Smash Charge':
      return middleBladeMultiplier * LEVEL_THREE_CHARGE_MULTIPLIER;
    default:
      return middleBladeMultiplier;
  }
}

/**
 * Calculates damage for a {@link GreatSwordAttack}.
 */
export function calculateGreatSwordDamage(
  greatSword: Weapon<WeaponType>,
  /** Attack being performed by weapon */
  attackName: GreatSwordAttack,
  /** Current sharpness of weapon */
  sharpness: Sharpness,
  /** Derived from Monster hitzone */
  hitzoneValues: MonsterTypes.HitzoneValues,
  /** Derived from Monster level set by Quest */
  multipliers: MonsterLevelTypes.MonsterLevelMultipliers,
  /** Will include awakened element if applicable */
  awaken = false,
  /** Adds a 1.05 multiplier if true */
  middleOfBlade = false
) {
  if (greatSword.type !== WeaponType.GREAT_SWORD) {
    throw new Error(`${greatSword.name} is not a ${WeaponType.GREAT_SWORD}`);
  }

  const { classModifier } = GreatSwordDamageProperties;

  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);

  const specialVarMultiplier = getGreatSwordSpecialVarMultiplier(
    middleOfBlade,
    attackName
  );

  const attack = getGreatSwordAttack(attackName);

  // TODO: This should probably get lifted into a shared function that all weapons can use
  return attack.hits.map<Damage>(hit => {
    const isCut = isCutHit(hit);
    const hitzoneMultiplier = isCut ? hitzoneValues.cut : hitzoneValues.impact;

    const rawDamage =
      (greatSword.attack *
        hit.power *
        sharpnessMultiplier *
        hitzoneMultiplier *
        specialVarMultiplier *
        multipliers.defense) /
      classModifier;

    const elementalDamage = calculateElementalDamage(
      greatSword,
      sharpness,
      hitzoneValues,
      multipliers,
      awaken
    );

    const koDamage = !isCut ? hit.ko * sharpnessMultiplier : undefined;

    return {
      rawDamage,
      elementalDamage,
      totalDamage: Math.floor(rawDamage + elementalDamage),
      koDamage
    };
  });
}
