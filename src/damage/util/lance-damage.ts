import { Weapons } from '../../model';
import type { MonsterTypes } from '../../model/monsters';
import {
  type LanceTypes,
  WeaponClass,
  type WeaponTypes
} from '../../model/weapons';
import { isCutHit } from '../../model/weapons/weapon-util';
import type {
  Damage,
  DamageBuffArgs,
  LanceDamageArgs,
  MonsterMultipliers
} from '../types';
import {
  calculateElementalDamage,
  getRawMultiplier,
  getSharpnessRawMultiplier,
  getWeaponClassMultiplier,
  validateWeaponSharpness
} from './damage-util';

const LANCE_VAR_MULTIPLIER = 0.78;
const LANCE_CHARGE_ELEMENTAL_MULTIPLIER = 0.25;

/**
 * @returns Attack properties for a {@link LanceTypes.LanceAttack}
 */
function getLanceAttack(
  attackName: string
): WeaponTypes.Attack<LanceTypes.LanceAttack> {
  const lanceAttacks = Weapons.getWeaponDamageProperties(WeaponClass.LANCE)
    .attackModes[0];

  const result = lanceAttacks.attacks.find(atk => atk.name === attackName);
  if (!result) {
    throw new Error(`${attackName} is not a valid Lance attack`);
  }
  return result as WeaponTypes.Attack<LanceTypes.LanceAttack>;
}

/**
 * If the impact hitzone * .72 is greater than the cut hitzone then
 * that modified impact value will be used instead. Otherwise take cut.
 */
function getLanceHitzoneMultiplier(
  hit: WeaponTypes.Hit,
  hitzoneValues: MonsterTypes.HitzoneValues
) {
  if (isCutHit(hit)) {
    const varImpact = hitzoneValues.impact * LANCE_VAR_MULTIPLIER;
    return varImpact > hitzoneValues.cut ? varImpact : hitzoneValues.cut;
  }
  // Shield bash should always be impact
  return hitzoneValues.impact;
}

function validateLance(
  weapon: WeaponTypes.Weapon<WeaponClass>
): asserts weapon is LanceTypes.Lance {
  if (weapon.type !== WeaponClass.LANCE) {
    throw new Error(`${weapon.name} is not a ${WeaponClass.LANCE}`);
  }
}

/**
 * Calculates damage for a {@link LanceTypes.Lance}.
 */
export function calculateLanceDamage(
  weaponArgs: LanceDamageArgs,
  monsterMultipliers: MonsterMultipliers,
  damageBuffArgs: Partial<DamageBuffArgs>
) {
  const { weaponId, attackName, sharpness } = weaponArgs;
  const { hitzoneValues, levelMultipliers } = monsterMultipliers;
  const { rawArgs, elementArgs, weaponClassArgs } = damageBuffArgs;

  const lance = Weapons.getWeapon(Weapons.WeaponClass.LANCE, weaponId);
  validateLance(lance);
  validateWeaponSharpness(lance, sharpness);

  const { classModifier } = Weapons.getWeaponDamageProperties(
    WeaponClass.LANCE
  );

  const attack = getLanceAttack(attackName);
  const sharpnessMultiplier = getSharpnessRawMultiplier(sharpness);

  const rawMultiplier = getRawMultiplier(rawArgs);

  const attackBuffMultiplier = getWeaponClassMultiplier(weaponClassArgs);

  const attackWithBuffs = lance.attack + attackBuffMultiplier * classModifier;

  return attack.hits.map<Damage>(hit => {
    const hitzoneMultiplier = getLanceHitzoneMultiplier(hit, hitzoneValues);

    const rawDamage =
      (attackWithBuffs *
        hit.power *
        rawMultiplier *
        sharpnessMultiplier *
        hitzoneMultiplier *
        1 * // Lance does not have a [SpecialVar], but this is here for consistency
        levelMultipliers.defense) /
      classModifier;

    const baseElementalDamage = calculateElementalDamage({
      weapon: lance,
      sharpness,
      hitzoneValues,
      elementArgs
    });
    // Lance charge elemental damage is cut by 75%
    const elementalDamage =
      attack.name === 'Charge'
        ? baseElementalDamage * LANCE_CHARGE_ELEMENTAL_MULTIPLIER
        : baseElementalDamage;

    // KO is always rounded down
    const koDamage = !isCutHit(hit)
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
