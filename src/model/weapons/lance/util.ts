import { MonsterLevelTypes } from '../../monster-levels';
import { MonsterTypes } from '../../monsters';
import { Weapon, WeaponType, Sharpness, Attack, Damage } from '../types';
import {
  calculateElementalDamage,
  getSharpnessRawMultiplier,
  isCutHit
} from '../util';
import { LanceDamageProperties } from './lance-data';
import { LanceAttack } from './types';

const LANCE_VAR_MULTIPLIER = 0.72;
const LANCE_CHARGE_ELEMENTAL_MULTIPLIER = 0.25;

function getLanceAttack(attackName: LanceAttack): Attack<LanceAttack> {
  const lanceAttacks = LanceDamageProperties.attackGroups[0];

  const result = lanceAttacks.attacks.find(atk => atk.name === attackName);
  if (!result) {
    throw new Error(`${attackName} is not a valid Lance attack`);
  }
  return result;
}

function getLanceSpecialVarMultiplier(
  hitzoneValues: MonsterTypes.HitzoneValues
): typeof LANCE_VAR_MULTIPLIER | 1 {
  return hitzoneValues.impact * LANCE_VAR_MULTIPLIER > hitzoneValues.cut
    ? LANCE_VAR_MULTIPLIER
    : 1;
}

/**
 * Calculates damage for a {@link LanceAttack}.
 */
export function calculateLanceDamage(
  lance: Weapon<WeaponType>,
  /** Attack being performed by weapon */
  attackName: LanceAttack,
  /** Current sharpness of weapon */
  sharpness: Sharpness,
  /** Derived from Monster hitzone */
  hitzoneValues: MonsterTypes.HitzoneValues,
  /** Derived from Monster level set by Quest */
  multipliers: MonsterLevelTypes.MonsterLevelMultipliers,
  /** Will include awakened element if applicable */
  awaken = false
) {
  if (lance.type !== WeaponType.LANCE) {
    throw new Error(`${lance.name} is not a ${WeaponType.LANCE}`);
  }

  const { classModifier } = LanceDamageProperties;

  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);

  const specialVarMultiplier = getLanceSpecialVarMultiplier(hitzoneValues);

  const attack = getLanceAttack(attackName);

  return attack.hits.map<Damage>(hit => {
    const isCut = isCutHit(hit);
    const hitzoneMultiplier = isCut ? hitzoneValues.cut : hitzoneValues.impact;

    const rawDamage =
      (lance.attack *
        hit.power *
        sharpnessMultiplier *
        hitzoneMultiplier *
        specialVarMultiplier *
        multipliers.defense) /
      classModifier;

    const baseElementalDamage = calculateElementalDamage(
      lance,
      sharpness,
      hitzoneValues,
      multipliers,
      awaken
    );
    // Lance charge elemental damage is cut by 75%
    const elementalDamage =
      attack.name === 'Charge'
        ? baseElementalDamage * LANCE_CHARGE_ELEMENTAL_MULTIPLIER
        : baseElementalDamage;

    const koDamage = !isCut ? hit.ko * sharpnessMultiplier : undefined;

    return {
      rawDamage,
      elementalDamage,
      totalDamage: Math.floor(rawDamage + elementalDamage),
      koDamage
    };
  });
}
