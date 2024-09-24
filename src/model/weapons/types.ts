import { CommonTypes } from '../common';
import { ItemTypes } from '../items';

/**
 * Enumerated collection of weapon types that can be used as properties/arguments
 */
export enum WeaponType {
  GREAT_SWORD = 'Great Sword',
  SWORD_AND_SHIELD = 'Sword and Shield',
  HAMMER = 'Hammer',
  LANCE = 'Lance',
  SWITCH_AXE = 'Switch Axe',
  LONGSWORD = 'Longsword'
}

/**
 * Used for type validation in functions
 */
export type ValidWeaponTypes =
  | WeaponType.GREAT_SWORD
  | WeaponType.SWORD_AND_SHIELD
  | WeaponType.HAMMER
  | WeaponType.LANCE
  | WeaponType.SWITCH_AXE
  | WeaponType.LONGSWORD;

/**
 * Enumerated collection of sharpness levels that can be used as properties/arguments
 */
export enum Sharpness {
  RED = 0,
  ORANGE = 1,
  YELLOW = 2,
  GREEN = 3,
  BLUE = 4,
  WHITE = 5,
  /** Only achievable with armor skill Sharpness+1 */
  PURPLE = 6
}

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
 * Base type for an attack, used by {@link AttackGroup}
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
export interface AttackGroup<N = string> {
  /** Usage scenario @example default, underwater, axe mode */
  name: string;
  attacks: Attack<N>[];
}

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

/**
 * Collection of attacks and values used for determining weapon damage
 *
 * @typeParam T weaponType this attack belongs to
 * @typeParam N Possible names of attacks
 */
export interface WeaponDamageProperties<
  T extends ValidWeaponTypes,
  N = string
> {
  type: T;
  /** Used in the damage/item buff calculations */
  classModifier: number;
  attackGroups: AttackGroup<N>[];
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
export interface Weapon<T extends ValidWeaponTypes> {
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
