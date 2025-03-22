import { SkillGroup } from './enum';

export interface ArmorSkill {
  /** Number of points required for an armor skill to be active */
  readonly pointThreshold: 10 | 15 | 20 | -10 | -15 | -20;
  readonly skillName: string;
  readonly skillDescription?: string;
}

export interface SkillTree {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly group: SkillGroup;
  readonly armorSkills: ArmorSkill[];
  /**
   * If this flag exists then the skill can only be acquired via pre-defined equipment
   *
   * @example
   * Autoguard // Talisman from village
   * Blight Res // Escadora armor
   * Fortify // Hellhunter and Soulhunter Jackets
   */
  readonly restricted?: true;
}
