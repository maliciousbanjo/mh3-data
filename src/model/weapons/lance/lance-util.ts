import { MonsterLevelTypes } from '../../monster-levels';
import { MonsterTypes } from '../../monsters';
import { Weapon, WeaponType, Sharpness, Attack, Damage, Hit } from '../types';
import {
  calculateElementalDamage,
  getSharpnessRawMultiplier,
  isCutHit
} from '../weapon-util';
import { LanceDamageProperties } from './lance-data';
import { LanceAttack } from './types';

const LANCE_VAR_MULTIPLIER = 0.78;
const LANCE_CHARGE_ELEMENTAL_MULTIPLIER = 0.25;

function getLanceAttack(attackName: LanceAttack): Attack<LanceAttack> {
  const lanceAttacks = LanceDamageProperties.attackGroups[0];

  const result = lanceAttacks.attacks.find(atk => atk.name === attackName);
  if (!result) {
    throw new Error(`${attackName} is not a valid Lance attack`);
  }
  return result;
}

/**
 * If the impact hitzone * .72 is greater than the cut hitzone then
 * that modified impact value will be used instead. Otherwise take cut.
 */
function getLanceHitzoneMultiplier(
  hit: Hit,
  hitzoneValues: MonsterTypes.HitzoneValues
) {
  if (isCutHit(hit)) {
    const varImpact = hitzoneValues.impact * LANCE_VAR_MULTIPLIER;
    return varImpact > hitzoneValues.cut ? varImpact : hitzoneValues.cut;
  }
  // Shield bash should always be impact
  return hitzoneValues.impact;
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

  const attack = getLanceAttack(attackName);

  return attack.hits.map<Damage>(hit => {
    const hitzoneMultiplier = getLanceHitzoneMultiplier(hit, hitzoneValues);

    const rawDamage =
      (lance.attack *
        hit.power *
        sharpnessMultiplier *
        hitzoneMultiplier *
        1 * // Lance does not have a [SpecialVar], but this is here for consistency
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

    const koDamage = !isCutHit(hit) ? hit.ko * sharpnessMultiplier : undefined;

    return {
      rawDamage,
      elementalDamage,
      totalDamage: Math.floor(rawDamage + elementalDamage),
      koDamage
    };
  });
}
