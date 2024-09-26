import { Weapon, WeaponClass } from '../types';

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

export enum SpiritGaugeMultipliers {
  NONE = 1,
  WHITE = 1.05,
  YELLOW = 1.1,
  RED = 1.3
}

export type Longsword = Weapon<WeaponClass.LONGSWORD>;
