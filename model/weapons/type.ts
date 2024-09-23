export enum WeaponType {
  GREAT_SWORD= 'Great Sword',
  SWORD_AND_SHIELD= 'Sword and Shield',
  HAMMER= 'Hammer',
  LANCE= 'Lance',
  SWITCH_AXE= 'Switch Axe',
  LONGSWORD= 'Longsword',
}

export interface Attack {
  name: string;
  type: "cut" | "impact";
  /** Multiplier used in damage calculations */
  power: number;
}

/**
 * Base type for a weapon
 */
export interface Weapon {
  type: WeaponType;
  /** Used in the damage/item buff calculations */
  classModifier: number;
  attacks: Record<string, Attack[]>;
}