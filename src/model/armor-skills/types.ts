import { SkillGroup } from './enum';

export interface ArmorSkill {
  /** Number of points required for an armor skill to be active */
  pointThreshold: 10 | 15 | 20 | -10 | -15 | -20;
  skillName: string;
  skillDescription?: string;
}

export interface SkillTree {
  name: string;
  description: string;
  group: SkillGroup;
  armorSkills: ArmorSkill[];
  /**
   * If this flag exists then the skill can only be acquired via pre-defined equipment
   *
   * @example
   * Autoguard // Talisman from village
   * Blight Res // Escadora armor
   * Fortify // Hellhunter and Soulhunter Jackets
   */
  restricted?: true;
}
