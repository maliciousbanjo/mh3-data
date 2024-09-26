import { MonsterLevelTypes } from '../model/monster-levels';
import { MonsterTypes } from '../model/monsters';
import {
  LongswordTypes,
  SwitchAxeTypes,
  SwordAndShieldTypes,
  WeaponTypes
} from '../model/weapons/';

export interface LongswordSpecialMultiplierArgs {
  middleOfBlade: boolean;
  fullSpiritGauge: boolean;
  spiritGaugeColor: keyof typeof LongswordTypes.SpiritGaugeMultipliers;
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
  weaponClass: WeaponTypes.WeaponClass;
  weaponId: number;
  /** Attack being performed by weapon */
  attackName: WeaponTypes.Attack['name'];
  /** Current weapon sharpness */
  sharpness: WeaponTypes.Sharpness;
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
export interface DamageBuffArgs {
  criticalHit: 'none' | 'positive' | 'negative';
  elementArgs: {
    awaken: boolean;
    // TODO: Element Attack Up/Down
  };
}

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
