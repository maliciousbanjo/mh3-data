import { SkillGroup } from './enum';

/**
 * Defines an active armor skill and the number of points required
 * for the skill to be active.
 */
export interface ArmorSkill {
  readonly skillName: string;
  /** Number of points required for an armor skill to be active */
  readonly pointThreshold: 10 | 15 | 20 | -10 | -15 | -20;
  readonly skillDescription?: string;
}

/**
 * Defines a skill name, description, and a list of {@link ArmorSkill}s that
 * can be activated.
 */
export interface SkillTree {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly group: SkillGroup;
  readonly armorSkills: ArmorSkill[];
  /**
   * If true then the skill can only be acquired via pre-defined equipment
   *
   * @example
   * Autoguard // Talisman from village
   * Blight Res // Escadora armor
   * Fortify // Hellhunter and Soulhunter Jackets
   */
  readonly restricted?: boolean;
}
