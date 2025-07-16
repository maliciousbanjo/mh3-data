import type { MonsterLevelTypes } from '../model';
import type { MonsterTypes } from '../model/monsters';
import type {
  GreatSwordTypes,
  HammerTypes,
  LanceTypes,
  LongswordTypes,
  Sharpness,
  SwitchAxeTypes,
  SwordAndShieldTypes,
  WeaponClass
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
  readonly middleOfBlade: boolean;
  readonly fullSpiritGauge: boolean;
  readonly spiritGaugeColor: LongswordTypes.SpiritGaugeColors;
}

interface DamageArgs {
  readonly weaponClass: WeaponClass;
  readonly weaponId: number;
  /** Current weapon sharpness */
  readonly sharpness: Sharpness;
  readonly attackName: string;
  /**
   * Multipliers specific to the weapon class eg; middle of blade, spirit guage color, etc
   */
  readonly weaponMultipliers: Partial<WeaponMultipliers>;
}

export interface GreatSwordDamageArgs extends DamageArgs {
  readonly weaponClass: WeaponClass.GREAT_SWORD;
  readonly attackName: GreatSwordTypes.GreatSwordAttack;
  readonly weaponMultipliers: Pick<WeaponMultipliers, 'middleOfBlade'>;
}

export interface HammerDamageArgs extends DamageArgs {
  readonly weaponClass: WeaponClass.HAMMER;
  readonly attackName: HammerTypes.HammerAttack;
}

export interface LanceDamageArgs extends DamageArgs {
  readonly weaponClass: WeaponClass.LANCE;
  readonly attackName: LanceTypes.LanceAttack;
}

export interface LongswordDamageArgs extends DamageArgs {
  readonly weaponClass: WeaponClass.LONGSWORD;
  readonly attackName: LongswordTypes.LongswordAttack;
  readonly weaponMultipliers: Pick<
    WeaponMultipliers,
    'middleOfBlade' | 'longsword'
  >;
}

export interface SwitchAxeDamageArgs extends DamageArgs {
  readonly weaponClass: WeaponClass.SWITCH_AXE;
  readonly attackName: SwitchAxeTypes.SwitchAxeAttack;
  readonly weaponMultipliers: Pick<WeaponMultipliers, 'switchAxeMode'>;
}

export interface SwordAndShieldDamageArgs extends DamageArgs {
  readonly weaponClass: WeaponClass.SWORD_AND_SHIELD;
  readonly attackName: SwordAndShieldTypes.SwordAndShieldAttack;
  readonly weaponMultipliers: Pick<WeaponMultipliers, 'swordAndShieldMode'>;
}

/**
 * Multipliers specific to individual weapon classes, used for
 * determining the "special variable" in damage calculation.
 */
export interface WeaponMultipliers {
  /** Great Sword, Longsword only */
  readonly middleOfBlade: boolean;
  /** Sword and Shield only */
  readonly swordAndShieldMode: SwordAndShieldTypes.SwordAndShieldAttackMode;
  /** Switch Axe only */
  readonly switchAxeMode: SwitchAxeTypes.SwitchAxeAttackMode;
  readonly longsword: Omit<LongswordSpecialMultiplierArgs, 'middleOfBlade'>;
}

/**
 * Weapon-related parameters used in damage calculation
 */
export type WeaponArgs =
  | DamageArgs
  | GreatSwordDamageArgs
  | HammerDamageArgs
  | LanceDamageArgs
  | LongswordDamageArgs
  | SwitchAxeDamageArgs
  | SwordAndShieldDamageArgs;

/**
 * Monster-related parameters used in damage calculation
 */
export interface MonsterArgs {
  readonly monsterName: MonsterTypes.MonsterName;
  /** Contains multipliers for monster health, defense, and stagger limit */
  readonly monsterStatMultipliers: MonsterLevelTypes.MonsterStatMultipliers;
  /** Must be valid monster state for this monsters */
  readonly monsterStateIndex: number;
  /** Must be valid index for the provided monsterStateIndex */
  readonly hitzoneIndex: number;
}

/**
 * @internal
 * Used internally by the damage calculation helper functions
 */
export interface MonsterMultipliers {
  /** Derived from Monster hitzone */
  readonly hitzoneValues: MonsterTypes.HitzoneValues;
  /** Derived from Monster level set by Quest */
  readonly statMultipliers: MonsterLevelTypes.MonsterStatMultipliers;
}

/**
 * Various aspects that can affect damage stats eg; might seed, attack up large,
 * felyne heroics, awaken, powercharm, fortify, element attack up
 */
export interface DamageBuffArgs {
  /** Multiplied against {@link WeaponTypes.Weapon['attack']} */
  rawArgs: Readonly<{
    criticalHit: keyof typeof CRITICAL_HIT_MULTIPLIERS;
    lowHealthSkill: keyof typeof LOW_HEALTH_SKILL_MULTIPLIERS;
    fortify: keyof typeof FORTIFY_MULTIPLIERS;
  }>;
  /** Multiplied against {@link WeaponTypes.Weapon['secondaryAttack']} */
  readonly elementArgs: Readonly<{
    awaken: boolean;
    elementAttack: keyof typeof ELEMENT_ATTACK_MULTIPLIERS;
  }>;
  /** Multiplied against {@link WeaponTypes.WeaponDamageProperties['classModifier']} */
  readonly weaponClassArgs: Readonly<{
    powercharm: boolean;
    powertalon: boolean;
    demondrug: keyof typeof DEMONDRUG_MULTIPLIERS;
    might: keyof typeof MIGHT_MULTIPLIERS;
    armor: keyof typeof ARMOR_SKILL_MULTIPLIERS;
  }>;
}

/**
 * Damage dealt by a weapon
 */
export interface Damage {
  /** Decimal is dropped after raw+elemental are totaled */
  readonly rawDamage: number;
  /** Decimal is dropped after raw+elemental are totaled */
  readonly elementalDamage: number;
  /**
   * This should ALWAYS be the total of raw + elemental.
   */
  readonly totalDamage: number;
  /** Amount of knockout damage, only present for impact type attacks */
  readonly koDamage?: number;
}
