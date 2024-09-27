import { Weapons } from '../../model';
import { HammerTypes, WeaponTypes } from '../../model/weapons';
import { Damage, DamageBuffArgs, MonsterArgs, WeaponArgs } from '../types';
import {
  calculateElementalDamage,
  getAttackUpMultiplier,
  getRawMultiplier,
  getSharpnessRawMultiplier,
  validateWeaponSharpness
} from './damage-util';

/**
 * @returns Attack properties for a {@link HammerTypes.HammerAttack}
 */
function getHammerAttack(
  attackName: string
): WeaponTypes.Attack<HammerTypes.HammerAttack> {
  const hammerAttacks = Weapons.Util.getWeaponDamageProperties(
    WeaponTypes.WeaponClass.HAMMER
  ).attackGroups[0];

  const result = hammerAttacks.attacks.find(atk => atk.name === attackName);
  if (!result) {
    throw new Error(
      `${attackName} is not a valid ${WeaponTypes.WeaponClass.HAMMER} attack`
    );
  }
  return result as WeaponTypes.Attack<HammerTypes.HammerAttack>;
}

function validateHammer(
  weapon: WeaponTypes.Weapon<WeaponTypes.WeaponClass>
): asserts weapon is HammerTypes.Hammer {
  if (weapon.type !== WeaponTypes.WeaponClass.HAMMER) {
    throw new Error(
      `${weapon.name} is not a ${WeaponTypes.WeaponClass.HAMMER}`
    );
  }
}

/**
 * Calculates damage for a {@link HammerTypes.Hammer}
 */
export function calculateHammerDamage(
  weaponArgs: WeaponArgs,
  monsterArgs: MonsterArgs,
  damageBuffArgs: DamageBuffArgs
) {
  const { weaponId, attackName, sharpness } = weaponArgs;
  const { hitzoneValues, levelMultipliers } = monsterArgs;
  const { criticalHit, lowHealthSkill, elementArgs } = damageBuffArgs;

  const hammer = Weapons.Util.getWeapon(
    Weapons.WeaponTypes.WeaponClass.HAMMER,
    weaponId
  );
  validateHammer(hammer);
  validateWeaponSharpness(hammer, sharpness);

  const { classModifier } = Weapons.Util.getWeaponDamageProperties(
    WeaponTypes.WeaponClass.HAMMER
  );

  const attack = getHammerAttack(attackName);
  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);

  const rawMultiplier = getRawMultiplier(criticalHit, lowHealthSkill);

  const attackBuffMultiplier = getAttackUpMultiplier(damageBuffArgs.attackArgs);

  const attackWithBuffs = hammer.attack + attackBuffMultiplier * classModifier;

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
        1 * // Hammer does not have a [SpecialVar], but this is here for consistency
        levelMultipliers.defense) /
      classModifier;

    const elementalDamage = calculateElementalDamage(
      hammer,
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
