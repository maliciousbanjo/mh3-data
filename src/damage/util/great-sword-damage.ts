import { Weapons } from '../../model';
import {
  type GreatSwordTypes,
  WeaponClass,
  type WeaponTypes
} from '../../model/weapons';
import type {
  Damage,
  DamageBuffArgs,
  GreatSwordDamageArgs,
  MonsterMultipliers
} from '../types';
import {
  applyDefenseMultiplier,
  calculateElementalDamage,
  getRawMultiplier,
  getSharpnessRawMultiplier,
  getWeaponClassMultiplier,
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
  const gsAttacks = Weapons.getWeaponDamageProperties(WeaponClass.GREAT_SWORD)
    .attackModes[0];

  const result = gsAttacks.attacks.find(atk => atk.name === attackName);
  if (!result) {
    throw new Error(
      `${attackName} is not a valid ${WeaponClass.GREAT_SWORD} attack`
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
  weapon: WeaponTypes.Weapon<WeaponClass>
): asserts weapon is GreatSwordTypes.GreatSword {
  if (weapon.type !== WeaponClass.GREAT_SWORD) {
    throw new Error(`${weapon.name} is not a ${WeaponClass.GREAT_SWORD}`);
  }
}

/**
 * Calculates damage for a {@link GreatSwordTypes.GreatSword}
 */
export function calculateGreatSwordDamage(
  weaponArgs: GreatSwordDamageArgs,
  monsterMultipliers: MonsterMultipliers,
  damageBuffArgs: Partial<DamageBuffArgs>
) {
  const { weaponId, attackName, sharpness, weaponMultipliers } = weaponArgs;
  const { hitzoneValues, levelMultipliers } = monsterMultipliers;
  const { rawArgs, elementArgs, weaponClassArgs } = damageBuffArgs;

  const greatSword = Weapons.getWeapon(
    Weapons.WeaponClass.GREAT_SWORD,
    weaponId
  );
  validateGreatSword(greatSword);
  validateWeaponSharpness(greatSword, sharpness);

  const { classModifier } = Weapons.getWeaponDamageProperties(
    WeaponClass.GREAT_SWORD
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

  return attack.hits.map<Damage>(hit => {
    const isCut = Weapons.isCutHit(hit);
    const hitzoneMultiplier = isCut ? hitzoneValues.cut : hitzoneValues.impact;

    const rawDamage =
      (attackWithBuffs *
        hit.power *
        rawMultiplier *
        sharpnessMultiplier *
        hitzoneMultiplier *
        specialVarMultiplier) /
      classModifier;

    const elementalDamage = calculateElementalDamage({
      weapon: greatSword,
      sharpness,
      hitzoneValues,
      elementArgs
    });

    // Decimal is dropped
    const totalDamage = applyDefenseMultiplier(
      rawDamage + elementalDamage,
      levelMultipliers.defense
    );

    // KO is always rounded down
    const koDamage = !isCut
      ? Math.floor(hit.ko * sharpnessMultiplier)
      : undefined;

    return {
      rawDamage: applyDefenseMultiplier(rawDamage, levelMultipliers.defense),
      elementalDamage: applyDefenseMultiplier(
        elementalDamage,
        levelMultipliers.defense
      ),
      totalDamage,
      koDamage
    };
  });
}
