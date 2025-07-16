import { Weapons } from '../../model';
import {
  type SwordAndShieldTypes,
  WeaponClass,
  type WeaponTypes
} from '../../model/weapons';
import type {
  Damage,
  DamageBuffArgs,
  MonsterMultipliers,
  SwordAndShieldDamageArgs
} from '../types';
import { assertSwordAndShieldWeaponMultipliers } from './assertions';
import {
  applyDefenseMultiplier,
  calculateElementalDamage,
  getRawMultiplier,
  getSharpnessRawMultiplier,
  getWeaponClassMultiplier,
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
  const swordAndShieldAttacks = Weapons.getWeaponDamageProperties(
    WeaponClass.SWORD_AND_SHIELD
  ).attackModes.find(atkGroup => atkGroup.name === swordAndShieldMode);
  if (!swordAndShieldAttacks) {
    throw new Error(
      `'${swordAndShieldMode}' is not a valid sword and shield attack mode`
    );
  }
  const result = swordAndShieldAttacks.attacks.find(
    atk => atk.name === attackName
  );
  if (!result) {
    throw new Error(
      `'${attackName}' is not a valid sword and shield attack for '${swordAndShieldMode}' mode`
    );
  }
  return result as WeaponTypes.Attack<SwordAndShieldTypes.SwordAndShieldAttack>;
}

function validateSwordAndShield(
  weapon: WeaponTypes.Weapon
): asserts weapon is SwordAndShieldTypes.SwordAndShield {
  if (weapon.type !== WeaponClass.SWORD_AND_SHIELD) {
    throw new Error(
      `'${weapon.name}' is not a '${WeaponClass.SWORD_AND_SHIELD}'`
    );
  }
}

/**
 * Calculates damage for a {@link SwordAndShieldTypes.SwordAndShield}.
 */
export function calculateSwordAndShieldDamage(
  weaponArgs: SwordAndShieldDamageArgs,
  monsterMultipliers: MonsterMultipliers,
  damageBuffArgs: Partial<DamageBuffArgs>
) {
  const { weaponId, attackName, sharpness } = weaponArgs;
  const { swordAndShieldMode } = weaponArgs.weaponMultipliers;
  const { hitzoneValues, statMultipliers: levelMultipliers } =
    monsterMultipliers;
  const { rawArgs, elementArgs, weaponClassArgs } = damageBuffArgs;

  const swordAndShield = Weapons.getWeapon(
    Weapons.WeaponClass.SWORD_AND_SHIELD,
    weaponId
  );
  validateSwordAndShield(swordAndShield);
  validateWeaponSharpness(swordAndShield, sharpness);
  assertSwordAndShieldWeaponMultipliers(swordAndShieldMode);

  const { classModifier } = Weapons.getWeaponDamageProperties(
    WeaponClass.SWORD_AND_SHIELD
  );

  const attack = getSwordAndShieldAttack(swordAndShieldMode, attackName);
  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);

  const rawMultiplier = getRawMultiplier(rawArgs);

  const attackBuffMultiplier = getWeaponClassMultiplier(weaponClassArgs);

  const attackWithBuffs =
    swordAndShield.attack + attackBuffMultiplier * classModifier;

  return attack.hits.map<Damage>(hit => {
    const isCut = Weapons.isCutHit(hit);

    const hitzoneMultiplier = isCut ? hitzoneValues.cut : hitzoneValues.impact;

    const rawDamage =
      (attackWithBuffs *
        hit.power *
        rawMultiplier *
        sharpnessMultiplier *
        hitzoneMultiplier *
        // SnS cut damage receives a 1.06 multiplier
        (isCut ? SWORD_AND_SHIELD_CUT_MULTIPLIER : 1)) /
      classModifier;

    // Shield attacks do not deal element damage
    const elementalDamage = isCut
      ? calculateElementalDamage({
          weapon: swordAndShield,
          sharpness,
          hitzoneValues,
          elementArgs
        })
      : 0;

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
