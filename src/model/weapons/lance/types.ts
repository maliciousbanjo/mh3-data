import { Weapon, WeaponType } from '../types';

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

export type Lance = Weapon<WeaponType.LANCE>;
