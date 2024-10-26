import { Weapons } from '../../model';
import {
  type SwitchAxeTypes,
  WeaponClass,
  type WeaponTypes
} from '../../model/weapons';
import type {
  Damage,
  DamageBuffArgs,
  MonsterMultipliers,
  SwitchAxeDamageArgs
} from '../types';
import { assertSwitchAxeWeaponMultipliers } from './assertions';
import {
  calculateElementalDamage,
  getRawMultiplier,
  getSharpnessRawMultiplier,
  getWeaponClassMultiplier,
  validateWeaponSharpness
} from './damage-util';

const SWITCH_AXE_PHIAL_MULTIPLIER = 1.25;

/**
 * @returns Attack properties for a {@link SwitchAxeTypes.SwitchAxeAttack}
 */
function getSwitchAxeAttack(
  switchAxeMode: SwitchAxeTypes.SwitchAxeAttackMode,
  attackName: string
): WeaponTypes.Attack<SwitchAxeTypes.SwitchAxeAttack> {
  const switchAxeAttacks = Weapons.getWeaponDamageProperties(
    WeaponClass.SWITCH_AXE
  ).attackModes.find(atkGroup => atkGroup.name === switchAxeMode);

  if (!switchAxeAttacks) {
    throw new Error(`${switchAxeMode} is not a valid switch axe mode`);
  }
  const result = switchAxeAttacks.attacks.find(atk => atk.name === attackName);
  if (!result) {
    throw new Error(
      `${attackName} is not a valid Switch Axe attack for ${switchAxeMode} mode`
    );
  }
  return result as WeaponTypes.Attack<SwitchAxeTypes.SwitchAxeAttack>;
}

/**
 * Determines special var multipliers for {@link SwitchAxeTypes.SwitchAxe}
 *
 * Power phials receive a 1.25 bonus to RAW damage
 * Element phials receive a 1.25 bonus to ELEMENTAL damage
 */
function getSwitchAxeSpecialVarMultiplier(
  switchAxe: SwitchAxeTypes.SwitchAxe,
  switchAxeMode: SwitchAxeTypes.SwitchAxeAttackMode
) {
  const noMulitiplier = 1;
  if (switchAxeMode === 'axe')
    return {
      rawSpecialVarMultiplier: noMulitiplier,
      elementSpecialVarMultiplier: noMulitiplier
    };

  const rawSpecialVarMultiplier =
    switchAxe.phial === 'power' ? SWITCH_AXE_PHIAL_MULTIPLIER : noMulitiplier;
  const elementSpecialVarMultiplier =
    switchAxe.phial === 'element' ? SWITCH_AXE_PHIAL_MULTIPLIER : noMulitiplier;

  return { rawSpecialVarMultiplier, elementSpecialVarMultiplier };
}

function validateSwitchAxe(
  weapon: WeaponTypes.Weapon<WeaponClass>
): asserts weapon is SwitchAxeTypes.SwitchAxe {
  if (
    weapon.type !== WeaponClass.SWITCH_AXE ||
    (weapon as SwitchAxeTypes.SwitchAxe).phial === undefined
  ) {
    throw new Error(`${weapon.name} is not a ${WeaponClass.SWITCH_AXE}`);
  }
}

/**
 * Calculates damage for a {@link SwitchAxeTypes.SwitchAxe}.
 */
export function calculateSwitchAxeDamage(
  weaponArgs: SwitchAxeDamageArgs,
  monsterMultipliers: MonsterMultipliers,
  damageBuffArgs: Partial<DamageBuffArgs>
) {
  const { weaponId, attackName, sharpness } = weaponArgs;
  const { switchAxeMode } = weaponArgs.weaponMultipliers;
  const { hitzoneValues, levelMultipliers } = monsterMultipliers;
  const { rawArgs, elementArgs, weaponClassArgs } = damageBuffArgs;

  const switchAxe = Weapons.getWeapon(Weapons.WeaponClass.SWITCH_AXE, weaponId);
  validateSwitchAxe(switchAxe);
  validateWeaponSharpness(switchAxe, sharpness);
  assertSwitchAxeWeaponMultipliers(switchAxeMode);

  const { classModifier } = Weapons.getWeaponDamageProperties(
    WeaponClass.SWITCH_AXE
  );
  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);

  const attack = getSwitchAxeAttack(switchAxeMode, attackName);
  const { rawSpecialVarMultiplier, elementSpecialVarMultiplier } =
    getSwitchAxeSpecialVarMultiplier(switchAxe, switchAxeMode);

  const rawMultiplier = getRawMultiplier(rawArgs);

  const attackBuffMultiplier = getWeaponClassMultiplier(weaponClassArgs);

  const attackWithBuffs =
    switchAxe.attack + attackBuffMultiplier * classModifier;

  // TODO: This should probably get lifted into a shared function that all weapons can use
  return attack.hits.map<Damage>(hit => {
    const isCut = Weapons.isCutHit(hit);
    const hitzoneMultiplier = isCut ? hitzoneValues.cut : hitzoneValues.impact;

    const rawDamage =
      (attackWithBuffs *
        hit.power *
        rawMultiplier *
        sharpnessMultiplier *
        hitzoneMultiplier *
        rawSpecialVarMultiplier *
        levelMultipliers.defense) /
      classModifier;

    const elementalDamage =
      calculateElementalDamage({
        weapon: switchAxe,
        sharpness,
        hitzoneValues,
        elementArgs
      }) * elementSpecialVarMultiplier;

    // KO is always rounded down
    const koDamage = !isCut
      ? Math.floor(hit.ko * sharpnessMultiplier)
      : undefined;

    return {
      rawDamage,
      elementalDamage,
      totalDamage: Math.floor(rawDamage + elementalDamage),
      koDamage
    };
  });
}
