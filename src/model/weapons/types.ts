import type { CommonTypes } from '../common';
import type { ItemTypes } from '../items';
import { WeaponClass } from './enum';

/**
 * Used for type validation in functions
 */
export type ValidWeaponClasses =
  | WeaponClass.GREAT_SWORD
  | WeaponClass.SWORD_AND_SHIELD
  | WeaponClass.HAMMER
  | WeaponClass.LANCE
  | WeaponClass.SWITCH_AXE
  | WeaponClass.LONGSWORD;

/**
 * Properties specific to a hit with damage type 'cut'
 */
export interface CutHit {
  readonly type: 'cut';
  /** Multiplier used in damage calculations */
  readonly power: number;
}

/**
 * Properties specific to a hit with damage type 'impact'
 */
export interface ImpactHit {
  readonly type: 'impact';
  /** Multiplier used in damage calculations */
  readonly power: number;
  /** Amount of KO damage dealt */
  readonly ko: number;
}

export type Hit = CutHit | ImpactHit;

/**
 * Base type for an attack, used by {@link AttackMode}
 *
 * @typeParam N Name of attack
 */
export interface Attack<N = string> {
  /** Human-readable attack name */
  readonly name: N;
  readonly hits: Hit[];
}

/**
 * Grouping of attacks for a particular weapon, used by {@link WeaponDamageProperties}
 *
 * @typeParam N Possible names of attacks
 */
export interface AttackMode<N = string> {
  /** Usage scenario @example default, underwater, axe mode */
  readonly name: string;
  readonly attacks: Attack<N>[];
}

/**
 * Collection of attacks and values used for determining weapon damage
 *
 * @typeParam T weaponType this attack belongs to
 * @typeParam N Possible names of attacks
 */
export interface WeaponDamageProperties<
  T extends ValidWeaponClasses,
  N = string
> {
  readonly type: T;
  /** Used in the damage/item buff calculations */
  readonly classModifier: number;
  readonly attackModes: AttackMode<N>[];
}

export type SecondaryDamageType =
  | 'fire'
  | 'water'
  | 'thunder'
  | 'ice'
  | 'dragon'
  | 'paralysis'
  | 'sleep'
  | 'poison';

/**
 * Properties of a weapon
 */
export interface Weapon {
  readonly id: number;
  readonly type: WeaponClass;
  readonly name: string;
  readonly description: string;
  readonly attack: number;
  /** Element or status damage */
  readonly secondaryDamageType: SecondaryDamageType;
  readonly secondaryAttack: number;
  /** If true requires armor skill 'Awaken' for element properties to take effect */
  readonly awaken: boolean;
  /** Sharpness levels */
  readonly sharpness: number[];
  /** Sharpness levels with armor skill 'Sharpness+1' */
  readonly sharpnessUp: number[];
  readonly affinity: number;
  readonly slots: CommonTypes.Slots;
  readonly rarity: CommonTypes.Rarity;
  /** In zenny */
  readonly price: number;
  /** Optionally improves hunter defense */
  readonly defense?: number;
  /** ID of previous weapon in path and what is required to upgrade it */
  readonly upgradesFrom?: {
    readonly weaponId: Weapon['id'][];
    readonly materials: ItemTypes.ItemRequirement[];
  };
  /** ID of next weapon in upgrade path */
  readonly upgradesTo?: Weapon['id'][];
  /** List of required items to create this weapon */
  readonly create?: ItemTypes.ItemRequirement[];
}
