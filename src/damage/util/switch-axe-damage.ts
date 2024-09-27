import { Weapons } from '../../model';
import { SwitchAxeTypes, WeaponTypes } from '../../model/weapons';
import { Damage, DamageBuffArgs, MonsterArgs, WeaponArgs } from '../types';
import { assertSwitchAxeWeaponMultipliers } from './assertions';
import {
  calculateElementalDamage,
  getWeaponClassMultiplier,
  getRawMultiplier,
  getSharpnessRawMultiplier,
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
  const switchAxeAttacks = Weapons.Util.getWeaponDamageProperties(
    WeaponTypes.WeaponClass.SWITCH_AXE
  ).attackGroups.find(atkGroup => atkGroup.name === switchAxeMode);

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
function getSwitchAxeSpecialVarMultiplier(switchAxe: SwitchAxeTypes.SwitchAxe) {
  const rawSpecialVarMultiplier =
    switchAxe.phial === 'power' ? SWITCH_AXE_PHIAL_MULTIPLIER : 1;
  const elementSpecialVarMultiplier =
    switchAxe.phial === 'element' ? SWITCH_AXE_PHIAL_MULTIPLIER : 1;

  return { rawSpecialVarMultiplier, elementSpecialVarMultiplier };
}

function validateSwitchAxe(
  weapon: WeaponTypes.Weapon<WeaponTypes.WeaponClass>
): asserts weapon is SwitchAxeTypes.SwitchAxe {
  if (
    weapon.type !== WeaponTypes.WeaponClass.SWITCH_AXE ||
    (weapon as SwitchAxeTypes.SwitchAxe).phial === undefined
  ) {
    throw new Error(
      `${weapon.name} is not a ${WeaponTypes.WeaponClass.SWITCH_AXE}`
    );
  }
}

/**
 * Calculates damage for a {@link SwitchAxeTypes.SwitchAxe}.
 */
export function calculateSwitchAxeDamage(
  weaponArgs: WeaponArgs,
  monsterArgs: MonsterArgs,
  damageBuffArgs: DamageBuffArgs
) {
  const { weaponId, attackName, sharpness } = weaponArgs;
  const { switchAxeMode } = weaponArgs.weaponMultipliers;
  const { hitzoneValues, levelMultipliers } = monsterArgs;
  const { rawArgs, elementArgs, weaponClassArgs } = damageBuffArgs;

  const switchAxe = Weapons.Util.getWeapon(
    Weapons.WeaponTypes.WeaponClass.SWITCH_AXE,
    weaponId
  );
  validateSwitchAxe(switchAxe);
  validateWeaponSharpness(switchAxe, sharpness);
  assertSwitchAxeWeaponMultipliers(switchAxeMode);

  const { classModifier } = Weapons.Util.getWeaponDamageProperties(
    WeaponTypes.WeaponClass.SWITCH_AXE
  );

  const attack = getSwitchAxeAttack(switchAxeMode, attackName);
  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);

  const { rawSpecialVarMultiplier, elementSpecialVarMultiplier } =
    getSwitchAxeSpecialVarMultiplier(switchAxe);

  const rawMultiplier = getRawMultiplier(rawArgs);

  const attackBuffMultiplier = getWeaponClassMultiplier(weaponClassArgs);

  const attackWithBuffs =
    switchAxe.attack + attackBuffMultiplier * classModifier;

  // TODO: This should probably get lifted into a shared function that all weapons can use
  return attack.hits.map<Damage>(hit => {
    const isCut = Weapons.Util.isCutHit(hit);
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
      calculateElementalDamage(
        switchAxe,
        sharpness,
        hitzoneValues,
        levelMultipliers,
        elementArgs
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
