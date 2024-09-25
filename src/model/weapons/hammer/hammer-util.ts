import { MonsterLevelTypes } from '../../monster-levels';
import { MonsterTypes } from '../../monsters';
import { Attack, Damage, Sharpness, Weapon, WeaponType } from '../types';
import {
  calculateElementalDamage,
  getSharpnessRawMultiplier,
  isCutHit
} from '../util';
import { HammerDamageProperties } from './hammer-data';
import { HammerAttack } from './types';

function getHammerAttack(attackName: HammerAttack): Attack<HammerAttack> {
  const hammerAttacks = HammerDamageProperties.attackGroups[0];

  const result = hammerAttacks.attacks.find(atk => atk.name === attackName);
  if (!result) {
    throw new Error(`${attackName} is not a valid Hammer attack`);
  }
  return result;
}

/**
 * Calculates damage for a {@link HammerAttack}
 */
export function calculateHammerDamage(
  hammer: Weapon<WeaponType>,
  /** Attack being performed by the weapon */
  attackName: HammerAttack,
  /** Current sharpness of weapon */
  sharpness: Sharpness,
  /** Derived from Monster hitzone */
  hitzoneValues: MonsterTypes.HitzoneValues,
  /** Derived from Monster level set by Quest */
  multipliers: MonsterLevelTypes.MonsterLevelMultipliers,
  /** Will include awakened element if applicable */
  awaken = false
) {
  if (hammer.type !== WeaponType.HAMMER) {
    throw new Error(`${hammer.name} is not a ${WeaponType.HAMMER}`);
  }

  const { classModifier } = HammerDamageProperties;
  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);

  const attack = getHammerAttack(attackName);

  // TODO: This should probably get lifted into a shared function that all weapons can use
  return attack.hits.map<Damage>(hit => {
    const isCut = isCutHit(hit);
    const hitzoneMultiplier = isCut ? hitzoneValues.cut : hitzoneValues.impact;

    const rawDamage =
      (hammer.attack *
        hit.power *
        sharpnessMultiplier *
        hitzoneMultiplier *
        1 * // Hammer does not have a [SpecialVar], but this is here for consistency
        multipliers.defense) /
      classModifier;

    const elementalDamage = calculateElementalDamage(
      hammer,
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
