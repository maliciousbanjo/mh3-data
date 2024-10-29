import type { MonsterLevelTypes, QuestTypes } from '../model';
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
  middleOfBlade: boolean;
  fullSpiritGauge: boolean;
  spiritGaugeColor: LongswordTypes.SpiritGaugeColors;
}

interface DamageArgs {
  weaponClass: WeaponClass;
  weaponId: number;
  /** Current weapon sharpness */
  sharpness: Sharpness;
  attackName: string;
  /**
   * Multipliers specific to the weapon class eg; middle of blade, spirit guage color, etc
   */
  weaponMultipliers: Partial<WeaponMultipliers>;
}

export interface GreatSwordDamageArgs extends DamageArgs {
  weaponClass: WeaponClass.GREAT_SWORD;
  attackName: GreatSwordTypes.GreatSwordAttack;
  weaponMultipliers: Pick<WeaponMultipliers, 'middleOfBlade'>;
}

export interface HammerDamageArgs extends DamageArgs {
  weaponClass: WeaponClass.HAMMER;
  attackName: HammerTypes.HammerAttack;
}

export interface LanceDamageArgs extends DamageArgs {
  weaponClass: WeaponClass.LANCE;
  attackName: LanceTypes.LanceAttack;
}

export interface LongswordDamageArgs extends DamageArgs {
  weaponClass: WeaponClass.LONGSWORD;
  attackName: LongswordTypes.LongswordAttack;
  weaponMultipliers: Pick<WeaponMultipliers, 'middleOfBlade' | 'longsword'>;
}

export interface SwitchAxeDamageArgs extends DamageArgs {
  weaponClass: WeaponClass.SWITCH_AXE;
  attackName: SwitchAxeTypes.SwitchAxeAttack;
  weaponMultipliers: Pick<WeaponMultipliers, 'switchAxeMode'>;
}

export interface SwordAndShieldDamageArgs extends DamageArgs {
  weaponClass: WeaponClass.SWORD_AND_SHIELD;
  attackName: SwordAndShieldTypes.SwordAndShieldAttack;
  weaponMultipliers: Pick<WeaponMultipliers, 'swordAndShieldMode'>;
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
  monsterName: MonsterTypes.MonsterName;
  /** Quest featuring this monster */
  questId: QuestTypes.Quest['id'] | undefined;
  /** Must be valid monster state for this monsters */
  monsterStateIndex: number;
  /** Must be valid index for the provided monsterStateIndex */
  hitzoneIndex: number;
}

/**
 * @internal
 * Used internally by the damage calculation helper functions
 */
export interface MonsterMultipliers {
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
  /** Multiplied against {@link WeaponTypes.Weapon['attack']} */
  rawArgs: {
    criticalHit: keyof typeof CRITICAL_HIT_MULTIPLIERS;
    lowHealthSkill: keyof typeof LOW_HEALTH_SKILL_MULTIPLIERS;
    fortify: keyof typeof FORTIFY_MULTIPLIERS;
  };
  /** Multiplied against {@link WeaponTypes.Weapon['secondaryAttack']} */
  elementArgs: {
    awaken: boolean;
    elementAttack: keyof typeof ELEMENT_ATTACK_MULTIPLIERS;
  };
  /** Multiplied against {@link WeaponTypes.WeaponDamageProperties['classModifier']} */
  weaponClassArgs: {
    powercharm: boolean;
    powertalon: boolean;
    demondrug: keyof typeof DEMONDRUG_MULTIPLIERS;
    might: keyof typeof MIGHT_MULTIPLIERS;
    armor: keyof typeof ARMOR_SKILL_MULTIPLIERS;
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
