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
  type: 'cut';
  /** Multiplier used in damage calculations */
  power: number;
}

/**
 * Properties specific to a hit with damage type 'impact'
 */
export interface ImpactHit {
  type: 'impact';
  /** Multiplier used in damage calculations */
  power: number;
  /** Amount of KO damage dealt */
  ko: number;
}

export type Hit = CutHit | ImpactHit;

/**
 * Base type for an attack, used by {@link AttackMode}
 *
 * @typeParam N Name of attack
 */
export interface Attack<N = string> {
  /** Human-readable attack name */
  name: N;
  hits: Hit[];
}

/**
 * Grouping of attacks for a particular weapon, used by {@link WeaponDamageProperties}
 *
 * @typeParam N Possible names of attacks
 */
export interface AttackMode<N = string> {
  /** Usage scenario @example default, underwater, axe mode */
  name: string;
  attacks: Attack<N>[];
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
  type: T;
  /** Used in the damage/item buff calculations */
  classModifier: number;
  attackModes: AttackMode<N>[];
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
export interface Weapon<T extends ValidWeaponClasses> {
  id: number;
  type: T;
  name: string;
  description: string;
  attack: number;
  /** Element or status damage */
  secondaryDamageType: SecondaryDamageType;
  secondaryAttack: number;
  /** If true requires armor skill 'Awaken' for element properties to take effect */
  awaken: boolean;
  /** Sharpness levels */
  sharpness: number[];
  /** Sharpness levels with armor skill 'Sharpness+1' */
  sharpnessUp: number[];
  affinity: number;
  slots: CommonTypes.Slots;
  rarity: CommonTypes.Rarity;
  /** In zenny */
  price: number;
  /** Optionally improves hunter defense */
  defense?: number;
  /** ID of previous weapon in path and what is required to upgrade it */
  upgradesFrom?: {
    weaponId: Weapon<T>['id'][];
    materials: ItemTypes.ItemRequirement[];
  };
  /** ID of next weapon in upgrade path */
  upgradesTo?: Weapon<T>['id'][];
  /** List of required items to create this weapon */
  create?: ItemTypes.ItemRequirement[];
}
