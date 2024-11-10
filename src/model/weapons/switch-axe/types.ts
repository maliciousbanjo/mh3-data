import { WeaponClass } from '../enum';
import type { Weapon } from '../types';

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

export type SwitchAxeAttackMode = 'axe' | 'sword';

export type SwitchAxePhial = 'element' | 'power' | 'dragon' | 'paralysis';

export interface SwitchAxeSpecialMultiplierArgs {
  mode: SwitchAxeAttackMode;
}

export interface SwitchAxe extends Weapon {
  type: WeaponClass.SWITCH_AXE;
  /** Unique property for switch axes */
  phial: SwitchAxePhial;
}
