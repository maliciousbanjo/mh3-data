import { MonsterLevelTypes } from '../../monster-levels';
import { MonsterTypes } from '../../monsters';
import { Weapon, WeaponType, Sharpness, Damage } from '../types';
import {
  getSharpnessRawMultiplier,
  isCutHit,
  calculateElementalDamage
} from '../weapon-util';
import { SwitchAxeDamageProperties } from './switch-axe-data';
import {
  SwitchAxe,
  SwitchAxeAttack,
  SwitchAxeSpecialMultiplierArgs
} from './types';

const SWITCH_AXE_PHIAL_MULTIPLIER = 1.25;

function assertSwitchAxe(
  weapon: Weapon<WeaponType>
): asserts weapon is SwitchAxe {
  if (
    weapon.type !== WeaponType.SWITCH_AXE ||
    (weapon as SwitchAxe).phial === undefined
  ) {
    throw new Error(`${weapon.name} is not a valid Switch Axe`);
  }
}

/**
 * @returns Attack properties for a switch axe attack
 */
function getSwitchAxeAttack(
  specialMultiplierArgs: SwitchAxeSpecialMultiplierArgs,
  attackName: SwitchAxeAttack
) {
  const { mode } = specialMultiplierArgs;
  const switchAxeAttacks = SwitchAxeDamageProperties.attackGroups.find(
    atkGroup => atkGroup.name === mode
  );
  if (!switchAxeAttacks) {
    throw new Error(`${mode} is not a valid switch axe mode`);
  }
  const result = switchAxeAttacks.attacks.find(atk => atk.name === attackName);
  if (!result) {
    throw new Error(
      `${attackName} is not a valid Switch Axe attack for ${mode} mode`
    );
  }
  return result;
}

/**
 * Determines special var multipliers for Switch Axe
 *
 * Power phials receive a 1.25 bonus to RAW damage
 * Element phials receive a 1.25 bonus to ELEMENTAL damage
 */
function getSwitchAxeSpecialVarMultiplier(switchAxe: SwitchAxe) {
  const rawSpecialVarMultiplier =
    switchAxe.phial === 'power' ? SWITCH_AXE_PHIAL_MULTIPLIER : 1;
  const elementSpecialVarMultiplier =
    switchAxe.phial === 'element' ? SWITCH_AXE_PHIAL_MULTIPLIER : 1;

  return { rawSpecialVarMultiplier, elementSpecialVarMultiplier };
}

/**
 * Calculates damage for a {@link SwitchAxeAttack}.
 */
export function calculateSwitchAxeDamage(
  switchAxe: Weapon<WeaponType>,
  /** Attack being performed by weapon */
  attackName: SwitchAxeAttack,
  /** Current sharpness of weapon */
  sharpness: Sharpness,
  /** Derived from Monster hitzone */
  hitzoneValues: MonsterTypes.HitzoneValues,
  /** Derived from Monster level set by Quest */
  multipliers: MonsterLevelTypes.MonsterLevelMultipliers,
  specialMultiplierArgs: SwitchAxeSpecialMultiplierArgs,
  /** Will include awakened element if applicable */
  awaken = false
) {
  assertSwitchAxe(switchAxe);

  const { classModifier } = SwitchAxeDamageProperties;

  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);

  const { rawSpecialVarMultiplier, elementSpecialVarMultiplier } =
    getSwitchAxeSpecialVarMultiplier(switchAxe);

  const attack = getSwitchAxeAttack(specialMultiplierArgs, attackName);

  // TODO: This should probably get lifted into a shared function that all weapons can use
  return attack.hits.map<Damage>(hit => {
    const isCut = isCutHit(hit);
    const hitzoneMultiplier = isCut ? hitzoneValues.cut : hitzoneValues.impact;

    const rawDamage =
      (switchAxe.attack *
        hit.power *
        sharpnessMultiplier *
        hitzoneMultiplier *
        rawSpecialVarMultiplier *
        multipliers.defense) /
      classModifier;

    const elementalDamage =
      calculateElementalDamage(
        switchAxe,
        sharpness,
        hitzoneValues,
        multipliers,
        awaken
      ) * elementSpecialVarMultiplier;

    const koDamage = !isCut ? hit.ko * sharpnessMultiplier : undefined;

    return {
      rawDamage,
      elementalDamage,
      totalDamage: Math.floor(rawDamage + elementalDamage),
      koDamage
    };
  });
}
