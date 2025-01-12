import { MonsterLevels, Monsters, Weapons, type MonsterTypes } from '../model';
import type {
  DamageBuffArgs,
  GreatSwordDamageArgs,
  HammerDamageArgs,
  LanceDamageArgs,
  LongswordDamageArgs,
  MonsterArgs,
  MonsterMultipliers,
  SwitchAxeDamageArgs,
  SwordAndShieldDamageArgs,
  WeaponArgs
} from './types';
import { calculateGreatSwordDamage } from './util/great-sword-damage';
import { calculateHammerDamage } from './util/hammer-damage';
import { calculateLanceDamage } from './util/lance-damage';
import { calculateLongswordDamage } from './util/longsword-damage';
import { calculateSwitchAxeDamage } from './util/switch-axe-damage';
import { calculateSwordAndShieldDamage } from './util/sword-and-shield-damage';

/**
 * RAW DAMAGE FORMULA
 *
 * Taken from Lord Grahf's [Monster Hunter Tri Damage Formula FAQ](https://gamefaqs.gamespot.com/wii/943655-monster-hunter-tri/faqs/59207)
 * - Section 1b. Raw Damage Formula (RFMLA)
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
  damageBuffArgs: Partial<DamageBuffArgs>
) {
  const { weaponClass } = weaponArgs;
  const { monsterName, questId, monsterStateIndex, hitzoneIndex } = monsterArgs;
  const monster = Monsters.getMonster(monsterName);

  // Validate parameters
  const maybeHitzone: MonsterTypes.Hitzone | undefined = monster.monsterStates
    .at(monsterStateIndex)
    ?.hitzones.at(hitzoneIndex);
  if (!maybeHitzone) {
    throw new Error(
      `${monsterName}, monsterStateIndex ${monsterStateIndex} does not have a hitzone at index ${hitzoneIndex}`
    );
  }

  const monsterMultipliers: MonsterMultipliers = {
    hitzoneValues: maybeHitzone.values,
    levelMultipliers:
      questId === undefined
        ? MonsterLevels.getMonsterLevelMultipliers(monsterName, 0)
        : MonsterLevels.getMonsterMultipliersForQuest(monsterName, questId)
  };

  switch (weaponClass) {
    case Weapons.WeaponClass.GREAT_SWORD: {
      return calculateGreatSwordDamage(
        weaponArgs as GreatSwordDamageArgs,
        monsterMultipliers,
        damageBuffArgs
      );
    }
    case Weapons.WeaponClass.HAMMER: {
      return calculateHammerDamage(
        weaponArgs as HammerDamageArgs,
        monsterMultipliers,
        damageBuffArgs
      );
    }
    case Weapons.WeaponClass.LANCE: {
      return calculateLanceDamage(
        weaponArgs as LanceDamageArgs,
        monsterMultipliers,
        damageBuffArgs
      );
    }
    case Weapons.WeaponClass.LONGSWORD: {
      return calculateLongswordDamage(
        weaponArgs as LongswordDamageArgs,
        monsterMultipliers,
        damageBuffArgs
      );
    }
    case Weapons.WeaponClass.SWITCH_AXE: {
      return calculateSwitchAxeDamage(
        weaponArgs as SwitchAxeDamageArgs,
        monsterMultipliers,
        damageBuffArgs
      );
    }
    case Weapons.WeaponClass.SWORD_AND_SHIELD: {
      return calculateSwordAndShieldDamage(
        weaponArgs as SwordAndShieldDamageArgs,
        monsterMultipliers,
        damageBuffArgs
      );
    }
    default: {
      throw new Error(`${weaponClass} is not a valid weapon type`);
    }
  }
}
