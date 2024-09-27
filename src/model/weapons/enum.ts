/**
 * Enumerated collection of weapon types that can be used as properties/arguments
 */
export enum WeaponClass {
  GREAT_SWORD = 'Great Sword',
  SWORD_AND_SHIELD = 'Sword and Shield',
  HAMMER = 'Hammer',
  LANCE = 'Lance',
  SWITCH_AXE = 'Switch Axe',
  LONGSWORD = 'Longsword'
}

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
