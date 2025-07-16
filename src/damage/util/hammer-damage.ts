import { Weapons } from '../../model';
import {
  type HammerTypes,
  WeaponClass,
  type WeaponTypes
} from '../../model/weapons';
import type {
  Damage,
  DamageBuffArgs,
  HammerDamageArgs,
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

/**
 * @returns Attack properties for a {@link HammerTypes.HammerAttack}
 */
function getHammerAttack(
  attackName: string
): WeaponTypes.Attack<HammerTypes.HammerAttack> {
  const hammerAttacks = Weapons.getWeaponDamageProperties(WeaponClass.HAMMER)
    .attackModes[0];

  const result = hammerAttacks.attacks.find(atk => atk.name === attackName);
  if (!result) {
    throw new Error(
      `${attackName} is not a valid ${WeaponClass.HAMMER} attack`
    );
  }
  return result as WeaponTypes.Attack<HammerTypes.HammerAttack>;
}

function validateHammer(
  weapon: WeaponTypes.Weapon
): asserts weapon is HammerTypes.Hammer {
  if (weapon.type !== WeaponClass.HAMMER) {
    throw new Error(`${weapon.name} is not a ${WeaponClass.HAMMER}`);
  }
}

/**
 * Calculates damage for a {@link HammerTypes.Hammer}
 */
export function calculateHammerDamage(
  weaponArgs: HammerDamageArgs,
  monsterMultipliers: MonsterMultipliers,
  damageBuffArgs: Partial<DamageBuffArgs>
) {
  const { weaponId, attackName, sharpness } = weaponArgs;
  const { hitzoneValues, statMultipliers: levelMultipliers } =
    monsterMultipliers;
  const { rawArgs, elementArgs, weaponClassArgs } = damageBuffArgs;

  const hammer = Weapons.getWeapon(Weapons.WeaponClass.HAMMER, weaponId);
  validateHammer(hammer);
  validateWeaponSharpness(hammer, sharpness);

  const { classModifier } = Weapons.getWeaponDamageProperties(
    WeaponClass.HAMMER
  );

  const attack = getHammerAttack(attackName);
  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);

  const rawMultiplier = getRawMultiplier(rawArgs);

  const attackBuffMultiplier = getWeaponClassMultiplier(weaponClassArgs);

  const attackWithBuffs = hammer.attack + attackBuffMultiplier * classModifier;

  return attack.hits.map<Damage>(hit => {
    const isCut = Weapons.isCutHit(hit);
    const hitzoneMultiplier = isCut ? hitzoneValues.cut : hitzoneValues.impact;

    const rawDamage =
      (attackWithBuffs *
        hit.power *
        rawMultiplier *
        sharpnessMultiplier *
        hitzoneMultiplier *
        1) / // Hammer does not have a [SpecialVar], but this is here for consistency
      classModifier;

    const elementalDamage = calculateElementalDamage({
      weapon: hammer,
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
