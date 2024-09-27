/**
 * Taken from Lord Grahf's [Monster Hunter Tri Damage Formula FAQ](https://gamefaqs.gamespot.com/wii/943655-monster-hunter-tri/faqs/59207)
 * Section 9a. Attack Up Multipliers (ATKUP)
 */

/** Powercharm */
export const POWERCHARM_MULTIPLIER = 6;

/** Powertalon */
export const POWERTALON_MULTIPLIER = 9;

/** Demondrug/Kitchen */
export const DEMONDRUG_MULTIPLIERS = Object.freeze({
  none: 0,
  kitchenAttackSmall: 3,
  kitchenAttackLarge: 5,
  demondrug: 3,
  megaDemondrug: 5
});

/** Might */
export const MIGHT_MULTIPLIERS = Object.freeze({
  none: 0,
  demonFlute: 10,
  mightSeed: 10,
  mightPill: 25
});

/** Armor Skill */
export const ARMOR_SKILL_MULTIPLIERS = Object.freeze({
  none: 0,
  attackUpSmall: 10,
  attackUpMedium: 15,
  attackUpLarge: 20,
  attackDownSmall: -10,
  attackDownMedium: -15,
  attackDownLarge: -20
});

/** Element */
export const ELEMENT_ATTACK_MULTIPLIERS = Object.freeze({
  none: 1,
  up: 1.2,
  down: 0.8
});

/** Critical Hit */
export const CRITICAL_HIT_MULTIPLIERS = Object.freeze({
  none: 1,
  positive: 1.25,
  negative: 0.75
});

/** Felyne Heroics or Adrenaline+2 armor skill */
export const LOW_HEALTH_SKILL_MULTIPLIERS = Object.freeze({
  none: 1,
  heroics: 1.35,
  adrenalineTwo: 1.3
});

/** Fortify armor skill  */
export const FORTIFY_MULTIPLIERS = Object.freeze({
  none: 1,
  firstFaint: 1.1,
  secondFaint: 2.2
});
