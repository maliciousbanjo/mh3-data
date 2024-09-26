import { Weapons } from '../../model';
import { SwordAndShieldTypes, WeaponTypes } from '../../model/weapons';
import { Damage, DamageBuffArgs, MonsterArgs, WeaponArgs } from '../types';
import { assertSwordAndShieldWeaponMultipliers } from './assertions';
import {
  calculateElementalDamage,
  getSharpnessRawMultiplier,
  validateWeaponSharpness
} from './damage-util';

const SWORD_AND_SHIELD_CUT_MULTIPLIER = 1.06;

/**
 * @returns Attack properties for a {@link SwordAndShieldTypes.SwordAndShieldAttack}
 */
function getSwordAndShieldAttack(
  swordAndShieldMode: SwordAndShieldTypes.SwordAndShieldAttackMode,
  attackName: string
): WeaponTypes.Attack<SwordAndShieldTypes.SwordAndShieldAttack> {
  const swordAndShieldAttacks = Weapons.Util.getWeaponDamageProperties(
    WeaponTypes.WeaponClass.SWORD_AND_SHIELD
  ).attackGroups.find(atkGroup => atkGroup.name === swordAndShieldMode);
  if (!swordAndShieldAttacks) {
    throw new Error(
      `${swordAndShieldMode} is not a valid sword and shield attack mode`
    );
  }
  const result = swordAndShieldAttacks.attacks.find(
    atk => atk.name === attackName
  );
  if (!result) {
    throw new Error(
      `${attackName} is not a valid sword and shield attack for ${swordAndShieldMode} mode`
    );
  }
  return result as WeaponTypes.Attack<SwordAndShieldTypes.SwordAndShieldAttack>;
}

function validateSwordAndShield(
  weapon: WeaponTypes.Weapon<WeaponTypes.WeaponClass>
): asserts weapon is SwordAndShieldTypes.SwordAndShield {
  if (weapon.type !== WeaponTypes.WeaponClass.SWORD_AND_SHIELD) {
    throw new Error(
      `${weapon.name} is not a ${WeaponTypes.WeaponClass.SWORD_AND_SHIELD}`
    );
  }
}

/**
 * Calculates damage for a {@link SwordAndShieldTypes.SwordAndShield}.
 */
export function calculateSwordAndShieldDamage(
  weaponArgs: WeaponArgs,
  monsterArgs: MonsterArgs,
  damageBuffArgs: DamageBuffArgs
) {
  const { weaponId, attackName, sharpness } = weaponArgs;
  const { swordAndShieldMode } = weaponArgs.weaponMultipliers;
  const { hitzoneValues, levelMultipliers } = monsterArgs;
  const { elementArgs } = damageBuffArgs;

  const swordAndShield = Weapons.Util.getWeapon(
    Weapons.WeaponTypes.WeaponClass.SWORD_AND_SHIELD,
    weaponId
  );
  validateSwordAndShield(swordAndShield);
  validateWeaponSharpness(swordAndShield, sharpness);
  assertSwordAndShieldWeaponMultipliers(swordAndShieldMode);

  const { classModifier } = Weapons.Util.getWeaponDamageProperties(
    WeaponTypes.WeaponClass.SWORD_AND_SHIELD
  );

  const attack = getSwordAndShieldAttack(swordAndShieldMode, attackName);
  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);

  // TODO: This should probably get lifted into a shared function that all weapons can use
  return attack.hits.map<Damage>(hit => {
    const isCut = Weapons.Util.isCutHit(hit);

    const hitzoneMultiplier = isCut ? hitzoneValues.cut : hitzoneValues.impact;

    const rawDamage =
      (swordAndShield.attack *
        hit.power *
        sharpnessMultiplier *
        hitzoneMultiplier *
        // SnS cut damage receives a 1.06 multiplier
        (isCut ? SWORD_AND_SHIELD_CUT_MULTIPLIER : 1) *
        levelMultipliers.defense) /
      classModifier;

    const elementalDamage = calculateElementalDamage(
      swordAndShield,
      sharpness,
      hitzoneValues,
      levelMultipliers,
      !!elementArgs.awaken
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
