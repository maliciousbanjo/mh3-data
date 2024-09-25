import { MonsterLevelTypes } from '../../monster-levels';
import { MonsterTypes } from '../../monsters';
import { GreatSwordDamageProperties } from '../great-sword';
import { Weapon, WeaponType, Sharpness, Damage } from '../types';
import {
  getSharpnessRawMultiplier,
  isCutHit,
  calculateElementalDamage
} from '../util';
import { LongswordDamageProperties } from './longsword-data';
import {
  LongswordAttack,
  LongswordSpecialMultiplierArgs,
  SpiritGuageMultipliers
} from './types';

const MIDDLE_OF_BLADE_MULTIPLIER = 1.05;
const FULL_SPIRIT_GUAGE_MULTIPLIER = 1.13;

/**
 * @returns Attack properties for a longsword attack
 */
function getLongwordAttack(attackName: LongswordAttack) {
  const lsAttack = LongswordDamageProperties.attackGroups[0];

  const result = lsAttack.attacks.find(atk => atk.name === attackName);
  if (!result) {
    throw new Error(`${attackName} is not valid Longsword attack`);
  }
  return result;
}

/**
 * Determines special var multipliers for Longsword
 */
function getLongswordSpecialVarMultiplier({
  middleOfBlade,
  fullSpiritGuage,
  spiritGuageColor
}: LongswordSpecialMultiplierArgs): number {
  let specialVarMultiplier = middleOfBlade ? MIDDLE_OF_BLADE_MULTIPLIER : 1;

  if (fullSpiritGuage) {
    specialVarMultiplier = specialVarMultiplier * FULL_SPIRIT_GUAGE_MULTIPLIER;
  }

  return specialVarMultiplier * SpiritGuageMultipliers[spiritGuageColor];
}

/**
 * Calculates damage for a {@link GreatSwordAttack}.
 */
export function calculateLongswordDamage(
  longsword: Weapon<WeaponType>,
  /** Attack being performed by weapon */
  attackName: LongswordAttack,
  /** Current sharpness of weapon */
  sharpness: Sharpness,
  /** Derived from Monster hitzone */
  hitzoneValues: MonsterTypes.HitzoneValues,
  /** Derived from Monster level set by Quest */
  multipliers: MonsterLevelTypes.MonsterLevelMultipliers,
  /** Will include awakened element if applicable */
  awaken = false,
  specialMultiplierArgs: LongswordSpecialMultiplierArgs
) {
  if (longsword.type !== WeaponType.LONGSWORD) {
    throw new Error(`${longsword.name} is not a ${WeaponType.LONGSWORD}`);
  }

  const { classModifier } = GreatSwordDamageProperties;

  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);

  const specialVarMultiplier = getLongswordSpecialVarMultiplier(
    specialMultiplierArgs
  );

  const attack = getLongwordAttack(attackName);

  // TODO: This should probably get lifted into a shared function that all weapons can use
  return attack.hits.map<Damage>(hit => {
    const isCut = isCutHit(hit);
    const hitzoneMultiplier = isCut ? hitzoneValues.cut : hitzoneValues.impact;

    const rawDamage =
      (longsword.attack *
        hit.power *
        sharpnessMultiplier *
        hitzoneMultiplier *
        specialVarMultiplier *
        multipliers.defense) /
      classModifier;

    const elementalDamage = calculateElementalDamage(
      longsword,
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
