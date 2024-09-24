import { Weapon, WeaponType } from '../types';

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

export type Hammer = Weapon<WeaponType.HAMMER>;
