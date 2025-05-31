import { ArmArmors } from './arms';
import { ChestArmors } from './chest';
import { HeadArmors } from './head';
import { LegArmors } from './legs';
import type { ArmorPiece, ArmorType } from './types';
import { WaistArmors } from './waist';

export * from './types';

export { HeadArmors } from './head';
export { ChestArmors } from './chest';
export { ArmArmors } from './arms';
export { WaistArmors } from './waist';
export { LegArmors } from './legs';

export const ArmorData: Record<ArmorType, ArmorPiece[]> = {
  head: HeadArmors,
  chest: ChestArmors,
  arms: ArmArmors,
  waist: WaistArmors,
  legs: LegArmors
};
