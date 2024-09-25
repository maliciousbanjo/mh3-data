import { Weapon, WeaponType } from '../types';

export type SwitchAxeAttack =
  // Axe mode
  | 'Unsheathe Attack'
  | 'Overhead Slash'
  | 'Forward Slash'
  | 'Side Slash'
  | 'Rising Slash'
  | 'Slash Combo'
  | 'Switch to Sword'
  // Sword mode
  | 'Unsheathe Attack'
  | 'Side Slash'
  | 'Rising Slash'
  | 'Overhead Slash'
  | 'Discharge Thrust'
  | 'Discharge Combo'
  | 'Discharge Finisher'
  | 'Switch to Axe';

export interface SwitchAxe extends Weapon<WeaponType.SWITCH_AXE> {
  /** Unique property for switch axes */
  phial: 'element' | 'power' | 'dragon' | 'paralysis';
}
