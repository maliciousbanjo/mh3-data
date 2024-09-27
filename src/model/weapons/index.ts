import type * as WeaponTypes from './types';
import type { GreatSwordTypes } from './great-sword';
import type { HammerTypes } from './hammer';
import type { LanceTypes } from './lance';
import type { LongswordTypes } from './longsword';
import type { SwitchAxeTypes } from './switch-axe';
import type { SwordAndShieldTypes } from './sword-and-shield';

import * as GreatSword from './great-sword';
import * as Hammer from './hammer';
import * as Lance from './lance';
import * as Longsword from './longsword';
import * as SwitchAxe from './switch-axe';
import * as SwordAndShield from './sword-and-shield';

export type {
  WeaponTypes,
  GreatSwordTypes,
  HammerTypes,
  LanceTypes,
  LongswordTypes,
  SwitchAxeTypes,
  SwordAndShieldTypes
};

export * from './enum';
export * from './weapon-util';

export { GreatSword, Hammer, Lance, Longsword, SwitchAxe, SwordAndShield };
