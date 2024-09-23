// Data
import { GreatSwords, GreatSwordDamageProperties } from "./great-sword";
import {
  SwordAndShields,
  SwordAndShieldDamageProperties,
} from "./sword-and-shield";
import { Hammers, HammerDamageProperties } from "./hammer";

// Types
export type { GreatSwordTypes } from "./great-sword";
export type { SwordAndShieldTypes } from "./sword-and-shield";
export type { HammerTypes } from "./hammer";
export * from "./types";

export { GreatSwords, SwordAndShields, Hammers };

export const DamageProperties = {
  GreatSwordDamageProperties,
  SwordAndShieldDamageProperties,
  HammerDamageProperties,
};
