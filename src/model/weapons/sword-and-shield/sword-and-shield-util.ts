import { MonsterLevelTypes } from '../../monster-levels';
import { MonsterTypes } from '../../monsters';
import { SwordAndShieldDamageProperties } from './sword-and-shield-data';
import { Weapon, WeaponType, Sharpness, Damage } from '../types';
import {
  getSharpnessRawMultiplier,
  isCutHit,
  calculateElementalDamage
} from '../weapon-util';
import {
  SwordAndShieldAttack,
  SwordAndShieldSpecialMultiplierArgs
} from './types';

const SWORD_AND_SHIELD_CUT_MULTIPLIER = 1.06;

/**
 * @returns Attack properties for a sword and shield attack
 */
function getSwordAndShieldAttack(
  specialMultiplierArgs: SwordAndShieldSpecialMultiplierArgs,
  attackName: SwordAndShieldAttack
) {
  const { mode } = specialMultiplierArgs;
  const swordAndShieldAttacks =
    SwordAndShieldDamageProperties.attackGroups.find(
      atkGroup => atkGroup.name === mode
    );
  if (!swordAndShieldAttacks) {
    throw new Error(`${mode} is not a valid sword and shield attack mode`);
  }
  const result = swordAndShieldAttacks.attacks.find(
    atk => atk.name === attackName
  );
  if (!result) {
    throw new Error(
      `${attackName} is not a valid sword and shield attack for ${mode} mode`
    );
  }
  return result;
}

/**
 * Calculates damage for a {@link SwordAndShieldAttack}.
 */
export function calculateSwordAndShieldDamage(
  swordAndShield: Weapon<WeaponType>,
  /** Attack being performed by weapon */
  attackName: SwordAndShieldAttack,
  /** Current sharpness of weapon */
  sharpness: Sharpness,
  /** Derived from Monster hitzone */
  hitzoneValues: MonsterTypes.HitzoneValues,
  /** Derived from Monster level set by Quest */
  multipliers: MonsterLevelTypes.MonsterLevelMultipliers,
  specialMultiplierArgs: SwordAndShieldSpecialMultiplierArgs,
  /** Will include awakened element if applicable */
  awaken = false
) {
  if (swordAndShield.type !== WeaponType.SWORD_AND_SHIELD) {
    throw new Error(
      `${swordAndShield.name} is not a ${WeaponType.SWORD_AND_SHIELD}`
    );
  }

  const { classModifier } = SwordAndShieldDamageProperties;

  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);

  const attack = getSwordAndShieldAttack(specialMultiplierArgs, attackName);

  // TODO: This should probably get lifted into a shared function that all weapons can use
  return attack.hits.map<Damage>(hit => {
    const isCut = isCutHit(hit);

    const hitzoneMultiplier = isCut ? hitzoneValues.cut : hitzoneValues.impact;

    const rawDamage =
      (swordAndShield.attack *
        hit.power *
        sharpnessMultiplier *
        hitzoneMultiplier *
        // SnS cut damage receives a 1.06 multiplier
        (isCut ? SWORD_AND_SHIELD_CUT_MULTIPLIER : 1) *
        multipliers.defense) /
      classModifier;

    const elementalDamage = calculateElementalDamage(
      swordAndShield,
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
