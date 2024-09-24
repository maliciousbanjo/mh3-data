// Data
import { GreatSwords, GreatSwordDamageProperties } from './great-sword';
import {
  SwordAndShields,
  SwordAndShieldDamageProperties
} from './sword-and-shield';
import { Hammers, HammerDamageProperties } from './hammer';
import { Lances, LanceDamageProperties } from './lance';
import { SwitchAxes, SwitchAxeDamageProperties } from './switch-axe';
import { Longswords, LongswordDamageProperties } from './longsword';

// Types
export type { GreatSwordTypes } from './great-sword';
export type { SwordAndShieldTypes } from './sword-and-shield';
export type { HammerTypes } from './hammer';
export type { LanceTypes } from './lance';
export type { SwitchAxeTypes } from './switch-axe';
export type { LongswordTypes } from './longsword';
export * from './types';
export * as Util from './util';

export {
  GreatSwords,
  SwordAndShields,
  Hammers,
  Lances,
  SwitchAxes,
  Longswords
};

export const DamageProperties = {
  GreatSwordDamageProperties,
  SwordAndShieldDamageProperties,
  HammerDamageProperties,
  LanceDamageProperties,
  SwitchAxeDamageProperties,
  LongswordDamageProperties
};
