import { Weapons } from '../../model';
import { GreatSwordTypes, WeaponTypes } from '../../model/weapons';
import { Damage, DamageBuffArgs, MonsterArgs, WeaponArgs } from '../types';
import {
  calculateElementalDamage,
  getWeaponClassMultiplier,
  getRawMultiplier,
  getSharpnessRawMultiplier,
  validateWeaponSharpness
} from './damage-util';

const MIDDLE_OF_BLADE_MULTIPLIER = 1.05;
const LEVEL_ONE_CHARGE_MULTIPLIER = 1.1;
const LEVEL_TWO_CHARGE_MULTIPLIER = 1.2;
const LEVEL_THREE_CHARGE_MULTIPLIER = 1.3;

/**
 * @returns Attack properties for a {@link GreatSwordTypes.GreatSwordAttack}
 */
function getGreatSwordAttack(
  attackName: string
): WeaponTypes.Attack<GreatSwordTypes.GreatSwordAttack> {
  const gsAttacks = Weapons.Util.getWeaponDamageProperties(
    WeaponTypes.WeaponClass.GREAT_SWORD
  ).attackGroups[0];

  const result = gsAttacks.attacks.find(atk => atk.name === attackName);
  if (!result) {
    throw new Error(
      `${attackName} is not a valid ${WeaponTypes.WeaponClass.GREAT_SWORD} attack`
    );
  }
  return result as WeaponTypes.Attack<GreatSwordTypes.GreatSwordAttack>;
}

/**
 * Determines special var multipliers for Great Sword.
 *
 * Middle of blade receives a bonus of 1.05
 * Charge levels 1, 2, and 3 receive a bonus 1.1, 1.2, and 1.3
 */
function getGreatSwordSpecialVarMultiplier(
  middleOfBlade: boolean,
  attackName: GreatSwordTypes.GreatSwordAttack
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

function validateGreatSword(
  weapon: WeaponTypes.Weapon<WeaponTypes.WeaponClass>
): asserts weapon is GreatSwordTypes.GreatSword {
  if (weapon.type !== WeaponTypes.WeaponClass.GREAT_SWORD) {
    throw new Error(
      `${weapon.name} is not a ${WeaponTypes.WeaponClass.GREAT_SWORD}`
    );
  }
}

/**
 * Calculates damage for a {@link GreatSwordTypes.GreatSword}
 */
export function calculateGreatSwordDamage(
  weaponArgs: WeaponArgs,
  monsterArgs: MonsterArgs,
  damageBuffArgs: DamageBuffArgs
) {
  const { weaponId, attackName, sharpness, weaponMultipliers } = weaponArgs;
  const { hitzoneValues, levelMultipliers } = monsterArgs;
  const { rawArgs, elementArgs, weaponClassArgs } = damageBuffArgs;

  const greatSword = Weapons.Util.getWeapon(
    Weapons.WeaponTypes.WeaponClass.GREAT_SWORD,
    weaponId
  );
  validateGreatSword(greatSword);
  validateWeaponSharpness(greatSword, sharpness);

  const { classModifier } = Weapons.Util.getWeaponDamageProperties(
    WeaponTypes.WeaponClass.GREAT_SWORD
  );

  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);
  const attack = getGreatSwordAttack(attackName);

  const specialVarMultiplier = getGreatSwordSpecialVarMultiplier(
    !!weaponMultipliers.middleOfBlade,
    attack.name
  );

  const rawMultiplier = getRawMultiplier(rawArgs);

  const attackBuffMultiplier = getWeaponClassMultiplier(weaponClassArgs);

  const attackWithBuffs =
    greatSword.attack + attackBuffMultiplier * classModifier;

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
        specialVarMultiplier *
        levelMultipliers.defense) /
      classModifier;

    const elementalDamage = calculateElementalDamage(
      greatSword,
      sharpness,
      hitzoneValues,
      levelMultipliers,
      elementArgs
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
