import { WeaponClass } from '../enum';
import { SpiritGaugeMultipliers } from './enum';
import type { Weapon } from '../types';

export type LongswordAttack =
  | 'Unsheathe Attack'
  | 'Step Slash'
  | 'Downward Slash'
  | 'Stab'
  | 'Upward Slash'
  | 'Sweep'
  | 'Empty Spirit'
  | 'Spirit 1'
  | 'Spirit 2'
  | 'Spirit 3'
  | 'Spirit Finisher';

export interface Longsword extends Weapon {
  readonly type: WeaponClass.LONGSWORD;
}

export type SpiritGaugeColors = keyof typeof SpiritGaugeMultipliers;
