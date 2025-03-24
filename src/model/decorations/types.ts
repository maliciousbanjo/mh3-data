import type { SkillPointRecord } from '../armor-skills/types';
import type { Rarity, Slots } from '../common/types';
import type { ItemTypes } from '../index';

/**
 * Can be added to an armor piece slot to increase skill points
 */
export interface Decoration {
  name: string;
  /** Number of slots this decoration will occupy */
  slots: Slots;
  rarity: Rarity;
  /** In zenny */
  price: number;
  skillPoints: SkillPointRecord;
  color: ItemTypes.ItemIconColor;
}
