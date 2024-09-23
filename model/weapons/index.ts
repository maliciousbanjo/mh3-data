// Data
import { GreatSwords, GreatSwordDamageProperties } from "./great-sword";
import {
  SwordAndShields,
  SwordAndShieldDamageProperties,
} from "./sword-and-shield";
import { Hammers, HammerDamageProperties } from "./hammer";
import { Lances, LanceDamageProperties} from './lance';
import { SwitchAxes, SwitchAxeDamageProperties } from './switch-axe';

// Types
export type { GreatSwordTypes } from "./great-sword";
export type { SwordAndShieldTypes } from "./sword-and-shield";
export type { HammerTypes } from "./hammer";
export type { LanceTypes } from './lance';
export type { SwitchAxeTypes } from './switch-axe';
export * from "./types";

export { GreatSwords, SwordAndShields, Hammers, Lances, SwitchAxes };

export const DamageProperties = {
  GreatSwordDamageProperties,
  SwordAndShieldDamageProperties,
  HammerDamageProperties,
  LanceDamageProperties,
  SwitchAxeDamageProperties
};
