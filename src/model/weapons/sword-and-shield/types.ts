import { Weapon, WeaponType } from '../types';

export type SwordAndShieldAttack =
  // land attacks
  | 'Unsheathe Attack'
  | 'Jumping Slash'
  | 'Rising Slash'
  | 'Regular Combo'
  | 'Horizontal Combo'
  | 'Shield Combo'
  | 'Revolving Slice'
  | 'Guard Slice'
  // water attacks
  | 'Unsheathe Attack'
  | 'Forward Slash'
  | 'Normal Slash'
  | 'Upward Slash'
  | 'Uppercut Slash'
  | 'Horizontal Slash'
  | 'Shield Bash'
  | 'Rising Slice'
  | 'Revolving Slice'
  | 'Guard Slice';

export type SwordAndShield = Weapon<WeaponType.SWORD_AND_SHIELD>;