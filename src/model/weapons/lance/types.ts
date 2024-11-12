import { WeaponClass } from '../enum';
import type { Weapon } from '../types';

export type LanceAttack =
  | 'Unsheathe Attack'
  | 'Low Stab Combo'
  | 'High Stab Combo'
  | 'Fast Counter'
  | 'Charge Counter'
  | 'Sweep'
  | 'Charge'
  | 'Charge Finisher'
  | 'Guard Attack'
  | 'Shield Bash';

export interface Lance extends Weapon {
  readonly type: WeaponClass.LANCE;
}
