import type { SkillPointRecord } from '../armor-skills/types';
import type { Rarity, Slots } from '../common/types';
import type { ItemTypes } from '../index';

/**
 * Can be added to an armor piece slot to increase skill points
 */
export interface Decoration {
  name: string;
  /** Number of slots this decoration will occupy */
  slotUsage: Slots;
  rarity: Rarity;
  /** In zenny */
  price: number;
  /** Decorations often have a positive skill and a negative skill */
  skillPoints: SkillPointRecord;
  color: ItemTypes.ItemIconColor;
}
