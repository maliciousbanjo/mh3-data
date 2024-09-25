import { Weapon, WeaponType } from '../types';

export type LongswordAttack =
  | 'Unsheathe Attack'
  | 'Step Stash'
  | 'Downward Slash'
  | 'Stab'
  | 'Upward Slash'
  | 'Sweep'
  | 'Empty Spirit'
  | 'Spirit 1'
  | 'Spirit 2'
  | 'Spirit 3'
  | 'Spirit Finisher';

export enum SpiritGuageMultipliers {
  NONE = 1,
  WHITE = 1.05,
  YELLOW = 1.1,
  RED = 1.3
}

export interface LongswordSpecialMultiplierArgs {
  middleOfBlade: boolean;
  fullSpiritGuage: boolean;
  spiritGuageColor: keyof typeof SpiritGuageMultipliers;
}

export type Longsword = Weapon<WeaponType.LONGSWORD>;
