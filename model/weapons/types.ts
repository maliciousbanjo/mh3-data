import { Element, Rarity, Slots, Status } from "../common";
import { ItemRequirement } from "../items";

export enum WeaponType {
  GREAT_SWORD = "Great Sword",
  SWORD_AND_SHIELD = "Sword and Shield",
  HAMMER = "Hammer",
  LANCE = "Lance",
  SWITCH_AXE = "Switch Axe",
  LONGSWORD = "Longsword",
}

/**
 * Properties specific to a hit with damage type 'cut'
*/
export interface CutHit {
  type: "cut";
  /** Multiplier used in damage calculations */
  power: number;}

/**
 * Properties specific to a hit with damage type 'impact'
*/
export interface ImpactHit {
  type: "impact";
  /** Multiplier used in damage calculations */
  power: number;
  /** Amount of KO damage dealt */
  ko: number;
}

export type Hit = CutHit | ImpactHit;

/**
 * Base type for an attack
 */
export interface Attack<T = string> {
  /** Human-readable attack name */
  name: T;
  hits: Hit[];
}

export interface AttackGroup<T> {
  /** Usage scenario @example default, underwater, axe mode */
  name: string;
  attacks: Attack<T>[];
}

/**
 * Collection of attacks and values used for determining wepaon damage
 */
export interface WeaponDamageProperties<T> {
  type: WeaponType;
  /** Used in the damage/item buff calculations */
  classModifier: number;
  attackGroups: AttackGroup<T>[];
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
  element: Element | keyof typeof Status;
  elemAttack: number;
  /** If true requires armor skill 'Awaken' for element properties to take effect */
  awaken: boolean;
  /** Sharpness levels */
  sharpness: number[];
  /** Sharpness levels with armor skill 'Sharpness+1' */
  sharpnessUp: number[];
  affinity: number;
  slots: Slots;
  rarity: Rarity;
  /** In zenny */
  price: number;
  /** Optionally improves hunter defense */
  defense?: number;
  /** ID of previous weapon in path and what is required to upgrade it */
  upgradesFrom?: { weaponId: Weapon<WeaponType.GREAT_SWORD>['id'][]; materials: ItemRequirement[] };
  /** ID of next weapon in upgrade path */
  upgradesTo?: Weapon<WeaponType.GREAT_SWORD>['id'][];
  /** List of required items to create this weapon */
  create?: ItemRequirement[];
}