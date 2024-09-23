// Data
import { GreatSwords, GreatSwordDamageProperties } from "./great-sword";
import {
  SwordAndShields,
  SwordAndShieldDamageProperties,
} from "./sword-and-shield";

// Types
export type { GreatSwordTypes } from "./great-sword";
export type { SwordAndShieldTypes } from "./sword-and-shield";
export * from "./types";

export { GreatSwords, SwordAndShields };

export const DamageProperties = {
  GreatSwordDamageProperties,
  SwordAndShieldDamageProperties,
};
