import { SkillPointRecord } from '../armor-skills/types';
import type { CommonTypes } from '../common';
export type ArmorType = 'head' | 'chest' | 'arms' | 'waist' | 'legs';

export interface ArmorPiece {
  readonly id: number;
  readonly type: ArmorType;
  readonly name: string;
  /** Can be worn with blade weapons if true */
  readonly blade: boolean;
  /** Can be worn with gunner weapons if true */
  readonly gunner: boolean;
  /** Physical defense */
  readonly defense: number;
  /** Resistance to fire element */
  readonly fireRes: number;
  /** Resistance to water element */
  readonly waterRes: number;
  /** Resistance to ice element */
  readonly iceRes: number;
  /** Resistance to thunder element */
  readonly thunderRes: number;
  /** Resistance to dragon element */
  readonly dragonRes: number;
  readonly slots: CommonTypes.Slots;
  readonly rarity: CommonTypes.Rarity;
  /**
   * Collection of skill IDs with a count of points that this armor piece provides
   */
  readonly skillPoints: SkillPointRecord;
  /** In zenny */
  readonly price: number;
  /** Maximum possible defense */
  readonly maxDefense: number;
  /** Maximum low rank defense (before overforging) */
  readonly maxLowRankDefense?: number;
  /** If true then this armor piece has the unique 'Torso Up' armor skill */
  readonly torsoUp?: boolean;
}

export interface HeadArmor extends ArmorPiece {
  readonly type: 'head';
}

export interface ChestArmor extends ArmorPiece {
  readonly type: 'chest';
}

export interface ArmArmor extends ArmorPiece {
  readonly type: 'arms';
}

export interface WaistArmor extends ArmorPiece {
  readonly type: 'waist';
}

export interface LegArmor extends ArmorPiece {
  readonly type: 'legs';
}
