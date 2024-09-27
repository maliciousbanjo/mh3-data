import type { MonsterLevelTypes } from '../model/monster-levels';
import type { MonsterTypes } from '../model/monsters';
import type {
  Longsword,
  Sharpness,
  SwitchAxeTypes,
  SwordAndShieldTypes,
  WeaponClass,
  WeaponTypes
} from '../model/weapons/';
import {
  ARMOR_SKILL_MULTIPLIERS,
  CRITICAL_HIT_MULTIPLIERS,
  DEMONDRUG_MULTIPLIERS,
  ELEMENT_ATTACK_MULTIPLIERS,
  FORTIFY_MULTIPLIERS,
  LOW_HEALTH_SKILL_MULTIPLIERS,
  MIGHT_MULTIPLIERS
} from './util/attack-multipliers';

export interface LongswordSpecialMultiplierArgs {
  middleOfBlade: boolean;
  fullSpiritGauge: boolean;
  spiritGaugeColor: keyof typeof Longsword.SpiritGaugeMultipliers;
}

/**
 * Multipliers specific to individual weapon classes, used for
 * determining the "special variable" in damage calculation.
 */
export interface WeaponMultipliers {
  /** Great Sword, Longsword only */
  middleOfBlade: boolean;
  /** Sword and Shield only */
  swordAndShieldMode: SwordAndShieldTypes.SwordAndShieldAttackMode;
  /** Switch Axe only */
  switchAxeMode: SwitchAxeTypes.SwitchAxeAttackMode;
  longsword: Omit<LongswordSpecialMultiplierArgs, 'middleOfBlade'>;
}

/**
 * Weapon-related parameters used in damage calculation
 */
export interface WeaponArgs {
  weaponClass: WeaponClass;
  weaponId: number;
  /** Attack being performed by weapon */
  attackName: WeaponTypes.Attack['name'];
  /** Current weapon sharpness */
  sharpness: Sharpness;
  /**
   * Multipliers specific to the weapon class eg; middle of blade, spirit guage color, etc
   */
  weaponMultipliers: Partial<WeaponMultipliers>;
}

/**
 * Monster-related parameters used in damage calculation
 */
export interface MonsterArgs {
  /** Derived from Monster hitzone */
  hitzoneValues: MonsterTypes.HitzoneValues;
  /** Derived from Monster level set by Quest */
  levelMultipliers: MonsterLevelTypes.MonsterLevelMultipliers;
}

/**
 * Various aspects that can affect damage stats eg; might seed, attack up large,
 * felyne heroics, awaken, powercharm, fortify, element attack up
 */
export type DamageBuffArgs = Partial<{
  /** Multiplied against {@link WeaponTypes.Weapon['attack']} */
  rawArgs: {
    criticalHit?: keyof typeof CRITICAL_HIT_MULTIPLIERS;
    lowHealthSkill?: keyof typeof LOW_HEALTH_SKILL_MULTIPLIERS;
    fortify?: keyof typeof FORTIFY_MULTIPLIERS;
  };
  /** Multiplied against {@link WeaponTypes.Weapon['secondaryAttack']} */
  elementArgs: {
    awaken?: boolean;
    elementAttack?: keyof typeof ELEMENT_ATTACK_MULTIPLIERS;
  };
  /** Multiplied against {@link WeaponTypes.WeaponDamageProperties['classModifier']} */
  weaponClassArgs: {
    powercharm?: boolean;
    powertalon?: boolean;
    demonDrug?: keyof typeof DEMONDRUG_MULTIPLIERS;
    might?: keyof typeof MIGHT_MULTIPLIERS;
    armor?: keyof typeof ARMOR_SKILL_MULTIPLIERS;
  };
}>;

/**
 * Damage dealt by a weapon
 */
export interface Damage {
  /** Decimal is dropped after raw+elemental are totaled */
  rawDamage: number;
  /** Decimal is dropped after raw+elemental are totaled */
  elementalDamage: number;
  /**
   * This should ALWAYS be the total of raw + elemental.
   */
  totalDamage: number;
  /** Amount of knockout damage, only present for impact type attacks */
  koDamage?: number;
}
