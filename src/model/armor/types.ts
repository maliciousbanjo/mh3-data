import type { CommonTypes } from '../common';
import type { ArmorSkillTypes } from '../armor-skills';
export type ArmorType = 'head' | 'chest' | 'arms' | 'waist' | 'legs';

export interface ArmorPiece {
  id: number;
  type: ArmorType;
  name: string;
  /** Can be worn with blade weapons if true */
  blade: boolean;
  /** Can be worn with gunner weapons if true */
  gunner: boolean;
  /** Physical defense */
  defense: number;
  /** Resistance to fire element */
  fireRes: number;
  /** Resistance to water element */
  waterRes: number;
  /** Resistance to ice element */
  iceRes: number;
  /** Resistance to thunder element */
  thunderRes: number;
  /** Resistance to dragon element */
  dragonRes: number;
  slots: CommonTypes.Slots;
  rarity: CommonTypes.Rarity;
  /**
   * Collection of skill IDs with a count of points that this armor piece provides
   */
  skillPoints: {
    skillId: ArmorSkillTypes.SkillTree['id'];
    points: number;
  }[];
  /** In zenny */
  price: number;
  /** Maximum possible defense */
  maxDefense: number;
  /** Maximum low rank defense (before overforging) */
  maxLowRankDefense?: number;
}

export interface HeadArmor extends ArmorPiece {
  type: 'head';
}

export interface ChestArmor extends ArmorPiece {
  type: 'chest';
}

export interface ArmArmor extends ArmorPiece {
  type: 'arms';
}

export interface WaistArmor extends ArmorPiece {
  type: 'waist';
}

export interface LegArmor extends ArmorPiece {
  type: 'legs';
}
