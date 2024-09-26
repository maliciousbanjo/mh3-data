import { DamageBuffArgs, MonsterArgs, WeaponArgs } from './types';
import { Weapons } from '../model';
import { calculateGreatSwordDamage } from './util/great-sword-damage';
import { calculateHammerDamage } from './util/hammer-damage';
import { calculateLanceDamage } from './util/lance-damage';
import { calculateLongswordDamage } from './util/longsword-damage';
import { calculateSwitchAxeDamage } from './util/switch-axe-damage';
import { calculateSwordAndShieldDamage } from './util/sword-and-shield-damage';

/**
 * TODO: Affinity (positive or negative critical hit)
 * RAW DAMAGE FORMULA
 *
 * Taken from Lord Grahf's [Monster Hunter Tri Damage Formula FAQ](https://gamefaqs.gamespot.com/wii/943655-monster-hunter-tri/faqs/59207)
 *
 * [ATP x TYPE x SHARP x HITZONE x VAR] / [CLASS] = Raw Damage
 *
 * @example
 * [ATP]:     494     // (Lance 483 + attack boost 11)
 * [TYPE]:    .23     // (Normal lance stab, 23%)
 * [SHARP]:   1.05    // (Green sharpness 105%, or 1.05)
 * [HITZONE]: .90     // (Rathian head multiplier is 90)
 * [DEFENSE]: .75     // (In this high rank online quest, defense is .75)
 * [VAR]:     1.0     // (No special variable for lance)
 * [CLASS]:   2.3     // (All lances, class multiplier 2.3)
 *
 * [ATP x TYPE x SHARP x HITZONE] / [CLASS] = Raw Damage [X DEFENSE]
 *  494 x  .23 x 1.05  x   .90    /   2.3   =    46.683   X   .75
 */
export function calculateDamage(
  weaponArgs: WeaponArgs,
  monsterArgs: MonsterArgs,
  damageBuffArgs: DamageBuffArgs
) {
  const { weaponClass } = weaponArgs;
  switch (weaponClass) {
    case Weapons.WeaponTypes.WeaponClass.GREAT_SWORD: {
      return calculateGreatSwordDamage(weaponArgs, monsterArgs, damageBuffArgs);
    }
    case Weapons.WeaponTypes.WeaponClass.HAMMER: {
      return calculateHammerDamage(weaponArgs, monsterArgs, damageBuffArgs);
    }
    case Weapons.WeaponTypes.WeaponClass.LANCE: {
      return calculateLanceDamage(weaponArgs, monsterArgs, damageBuffArgs);
    }
    case Weapons.WeaponTypes.WeaponClass.LONGSWORD: {
      return calculateLongswordDamage(weaponArgs, monsterArgs, damageBuffArgs);
    }
    case Weapons.WeaponTypes.WeaponClass.SWITCH_AXE: {
      return calculateSwitchAxeDamage(weaponArgs, monsterArgs, damageBuffArgs);
    }
    case Weapons.WeaponTypes.WeaponClass.SWORD_AND_SHIELD: {
      return calculateSwordAndShieldDamage(
        weaponArgs,
        monsterArgs,
        damageBuffArgs
      );
    }
    default: {
      throw new Error(`${weaponClass} is not a valid weapon type`);
    }
  }
}
