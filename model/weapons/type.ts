import { Element, Rarity, Slots, Status } from "../common";
import { ItemRequirement } from "../items/";

export enum WeaponType {
  GREAT_SWORD = "Great Sword",
  SWORD_AND_SHIELD = "Sword and Shield",
  HAMMER = "Hammer",
  LANCE = "Lance",
  SWITCH_AXE = "Switch Axe",
  LONGSWORD = "Longsword",
}

/**
 * Base type for an attack
 */
interface BaseAttack<T = string> {
  /** Human-readable attack name */
  name: T;
  /** Multiplier used in damage calculations */
  power: number;
}

/**
 * Properties specific to an attack with damage type 'cut'
 */
interface CutAttack<T> extends BaseAttack<T> {
  type: "cut";
}

/**
 * Properties specific to an attack with damage type 'impact'
 */
interface ImpactAttack<T> extends BaseAttack<T> {
  type: "impact";
  /** Amount of KO damage dealt */
  ko: number;
}

export type Attack<T> = CutAttack<T> | ImpactAttack<T>;

/**
 * TODO: TypeDoc
 */
export interface WeaponDamageProperties<T> {
  type: WeaponType;
  /** Used in the damage/item buff calculations */
  classModifier: number;
  /** Keyed on usage scenario ie; default, underwater, "axe mode", etc */
  attacks: Record<string, Record<string, Attack<T>>>;
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