import { Weapon, WeaponType } from "../types";

export type LongswordAttack =
  | "Unsheathe Attack"
  | "Step Stash"
  | "Downward Slash"
  | "Stab"
  | "Upward Slash"
  | "Sweep"
  | "Empty Spirit"
  | "Spirit 1"
  | "Spirit 2"
  | "Spirit 3"
  | "Spirit Finisher";

export type Longsword = Weapon<WeaponType.LONGSWORD>;
