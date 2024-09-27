import { Weapons } from '../../model';
import { LongswordTypes, WeaponTypes } from '../../model/weapons';
import { SpiritGaugeMultipliers } from '../../model/weapons/longsword/types';
import {
  Damage,
  DamageBuffArgs,
  LongswordSpecialMultiplierArgs,
  MonsterArgs,
  WeaponArgs
} from '../types';
import { assertLongswordWeaponMultipliers } from './assertions';
import {
  calculateElementalDamage,
  getAttackUpMultiplier,
  getRawMultiplier,
  getSharpnessRawMultiplier,
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
  const lsAttack = Weapons.Util.getWeaponDamageProperties(
    WeaponTypes.WeaponClass.LONGSWORD
  ).attackGroups[0];

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

  const spiritGaugeMultiplier = SpiritGaugeMultipliers[spiritGaugeColor];

  return specialVarMultiplier * spiritGaugeMultiplier;
}

function validateLongsword(
  weapon: WeaponTypes.Weapon<WeaponTypes.WeaponClass>
): asserts weapon is LongswordTypes.Longsword {
  if (weapon.type !== WeaponTypes.WeaponClass.LONGSWORD) {
    throw new Error(
      `${weapon.name} is not a ${WeaponTypes.WeaponClass.LONGSWORD}`
    );
  }
}

/**
 * Calculates damage for a {@link LongswordTypes.Longsword}.
 */
export function calculateLongswordDamage(
  weaponArgs: WeaponArgs,
  monsterArgs: MonsterArgs,
  damageBuffArgs: DamageBuffArgs
) {
  const { weaponId, attackName, sharpness } = weaponArgs;
  const { longsword: longswordArgs } = weaponArgs.weaponMultipliers;
  const { hitzoneValues, levelMultipliers } = monsterArgs;
  const { criticalHit, lowHealthSkill, elementArgs } = damageBuffArgs;

  const longsword = Weapons.Util.getWeapon(
    Weapons.WeaponTypes.WeaponClass.LONGSWORD,
    weaponId
  );
  validateLongsword(longsword);
  validateWeaponSharpness(longsword, sharpness);
  assertLongswordWeaponMultipliers(longswordArgs);

  const { classModifier } = Weapons.Util.getWeaponDamageProperties(
    WeaponTypes.WeaponClass.LONGSWORD
  );

  const attack = getLongwordAttack(attackName);
  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);
  const specialVarMultiplier = getLongswordSpecialVarMultiplier({
    middleOfBlade: !!weaponArgs.weaponMultipliers.middleOfBlade,
    fullSpiritGauge: !!longswordArgs.fullSpiritGauge,
    spiritGaugeColor: longswordArgs.spiritGaugeColor
  });

  const rawMultiplier = getRawMultiplier(criticalHit, lowHealthSkill);

  const attackBuffMultiplier = getAttackUpMultiplier(damageBuffArgs.attackArgs);

  const attackWithBuffs =
    longsword.attack + attackBuffMultiplier * classModifier;

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
      longsword,
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
