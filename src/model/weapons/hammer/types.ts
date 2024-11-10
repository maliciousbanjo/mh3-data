import { WeaponClass } from '../enum';
import type { Weapon } from '../types';

export type HammerAttack =
  | 'Unsheathe Attack'
  | 'Side Swing'
  | 'Triple Pound'
  | 'Short Charge'
  | 'Uppercut'
  | 'Superpound'
  | 'Spin Attack'
  | 'Spin Release'
  | 'Spin Golfswing'
  | 'Spin Finisher';

export interface Hammer extends Weapon {
  type: WeaponClass.HAMMER;
}
