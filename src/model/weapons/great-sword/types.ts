import type { Weapon } from '../types';
import { WeaponClass } from '../enum';

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

export interface GreatSword extends Weapon {
  readonly type: WeaponClass.GREAT_SWORD;
}
