import { Weapons } from '../../model';
import {
  Longsword,
  type LongswordTypes,
  WeaponClass,
  type WeaponTypes
} from '../../model/weapons';
import type {
  Damage,
  DamageBuffArgs,
  LongswordDamageArgs,
  LongswordSpecialMultiplierArgs,
  MonsterMultipliers
} from '../types';
import { assertLongswordWeaponMultipliers } from './assertions';
import {
  applyDefenseMultiplier,
  calculateElementalDamage,
  getRawMultiplier,
  getSharpnessRawMultiplier,
  getWeaponClassMultiplier,
  validateWeaponSharpness
} from './damage-util';

const MIDDLE_OF_BLADE_MULTIPLIER = 1.05;
const FULL_SPIRIT_GAUGE_MULTIPLIER = 1.13;

/**
 * @returns Attack properties for a {@link LongswordTypes.LongswordAttack}
 */
function getLongwordAttack(
  attackName: string
): WeaponTypes.Attack<LongswordTypes.LongswordAttack> {
  const lsAttack = Weapons.getWeaponDamageProperties(WeaponClass.LONGSWORD)
    .attackModes[0];

  const result = lsAttack.attacks.find(atk => atk.name === attackName);
  if (!result) {
    throw new Error(`${attackName} is not valid Longsword attack`);
  }
  return result as WeaponTypes.Attack<LongswordTypes.LongswordAttack>;
}

/**
 * Determines special var multipliers for Longsword
 *
 * Middle of blade receives a 1.05 bonus
 * Full spirit guage receives a 1.13 bonus
 * Spirit guage colors WHITE, YELLOW, and RED receives bonuses of 1.1, 1.2, and 1.3
 */
function getLongswordSpecialVarMultiplier({
  middleOfBlade,
  fullSpiritGauge,
  spiritGaugeColor
}: LongswordSpecialMultiplierArgs): number {
  let specialVarMultiplier = middleOfBlade ? MIDDLE_OF_BLADE_MULTIPLIER : 1;

  if (fullSpiritGauge) {
    specialVarMultiplier = specialVarMultiplier * FULL_SPIRIT_GAUGE_MULTIPLIER;
  }

  const spiritGaugeMultiplier =
    Longsword.SpiritGaugeMultipliers[spiritGaugeColor];

  return specialVarMultiplier * spiritGaugeMultiplier;
}

function validateLongsword(
  weapon: WeaponTypes.Weapon
): asserts weapon is LongswordTypes.Longsword {
  if (weapon.type !== WeaponClass.LONGSWORD) {
    throw new Error(`${weapon.name} is not a ${WeaponClass.LONGSWORD}`);
  }
}

/**
 * Calculates damage for a {@link LongswordTypes.Longsword}.
 */
export function calculateLongswordDamage(
  weaponArgs: LongswordDamageArgs,
  monsterMultipliers: MonsterMultipliers,
  damageBuffArgs: Partial<DamageBuffArgs>
) {
  const { weaponId, attackName, sharpness } = weaponArgs;
  const { longsword: longswordArgs } = weaponArgs.weaponMultipliers;
  const { hitzoneValues, levelMultipliers } = monsterMultipliers;
  const { rawArgs, elementArgs, weaponClassArgs } = damageBuffArgs;

  const longsword = Weapons.getWeapon(Weapons.WeaponClass.LONGSWORD, weaponId);
  validateLongsword(longsword);
  validateWeaponSharpness(longsword, sharpness);
  assertLongswordWeaponMultipliers(longswordArgs);

  const { classModifier } = Weapons.getWeaponDamageProperties(
    WeaponClass.LONGSWORD
  );

  const attack = getLongwordAttack(attackName);
  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);
  const specialVarMultiplier = getLongswordSpecialVarMultiplier({
    middleOfBlade: !!weaponArgs.weaponMultipliers.middleOfBlade,
    fullSpiritGauge: !!longswordArgs.fullSpiritGauge,
    spiritGaugeColor: longswordArgs.spiritGaugeColor
  });

  const rawMultiplier = getRawMultiplier(rawArgs);

  const attackBuffMultiplier = getWeaponClassMultiplier(weaponClassArgs);

  const attackWithBuffs =
    longsword.attack + attackBuffMultiplier * classModifier;

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
      weapon: longsword,
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
