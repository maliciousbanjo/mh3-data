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
 * Valid weapon types
 */
export type ValidWeaponTypes =
  | WeaponType.GREAT_SWORD
  | WeaponType.SWORD_AND_SHIELD
  | WeaponType.HAMMER
  | WeaponType.LANCE
  | WeaponType.SWITCH_AXE
  | WeaponType.LONGSWORD;

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

/**
 * Collection of attacks and values used for determining wepaon damage
 *
 * @typeParam T weaponType this attack belongs to
 * @typeParam N Possible names of attacks
 */
export interface WeaponDamageProperties<T extends WeaponType, N = string> {
  type: T;
  /** Used in the damage/item buff calculations */
  classModifier: number;
  attackGroups: AttackGroup<N>[];
}

/**
 * Properties of a weapon
 */
export interface Weapon<T extends WeaponType> {
  id: number;
  type: T;
  name: string;
  description: string;
  attack: number;
  element: CommonTypes.ElementType | keyof typeof CommonTypes.StatusType;
  elemAttack: number;
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
    weaponId: Weapon<WeaponType.GREAT_SWORD>['id'][];
    materials: ItemTypes.ItemRequirement[];
  };
  /** ID of next weapon in upgrade path */
  upgradesTo?: Weapon<WeaponType.GREAT_SWORD>['id'][];
  /** List of required items to create this weapon */
  create?: ItemTypes.ItemRequirement[];
}
