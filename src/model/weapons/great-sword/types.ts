import { Weapon, WeaponType } from '../types';

export type GreatSwordAttack =
  | 'Unsheathe Attack'
  | 'Regular Slice'
  | 'Sideways Slash'
  | 'Upswing'
  | 'L1 Charge'
  | 'L2 Charge'
  | 'L3 Charge'
  | 'Overcharge'
  | 'Slap'
  | 'Overhead Smash'
  | 'L1 Smash Charge'
  | 'L2 Smash Charge'
  | 'L3 Smash Charge'
  | 'Smash Overcharge';

export type GreatSword = Weapon<WeaponType.GREAT_SWORD>;
