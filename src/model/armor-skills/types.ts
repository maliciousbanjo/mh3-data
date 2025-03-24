import { SkillGroup } from './enum';

/** Number of points required for an armor skill to be active */
export type PointThreshold = 10 | 15 | 20 | -10 | -15 | -20;

export const skillIdentifiers = [
  'sharpness',
  'handicraft',
  'fencing',
  'recoil',
  'normals_up',
  'pierces_up',
  'pellets_up',
  'normal_s+',
  'pierce_s+',
  'status',
  'elemental',
  'hearing',
  'fate',
  'stamina',
  'loading',
  'carving',
  'evade_dist',
  'tranquilzr',
  'fastcharge',
  'punishdraw',
  'freeelemnt',
  'rapid_fire',
  'poison',
  'health',
  'rec_speed',
  'expert',
  'sharpener',
  'guard',
  'guard_up',
  'reload_spd',
  'pellet_s+',
  'crag_s+',
  'clust_s+',
  'bomb_boost',
  'hunger',
  'attack',
  'defense',
  'protection',
  'wide-range',
  'wind_res',
  'gathering',
  'spd_gather',
  'psychic',
  'rec_level',
  'evasion',
  'potential',
  'eating',
  'tremor_res',
  'crit_draw',
  'constitutn',
  'swimming',
  'dungmaster',
  'flame_aura',
  'paralysis',
  'sleep',
  'stun',
  'mud/snow',
  'sense',
  'gluttony',
  'anti-theft',
  'transportr',
  'fire_res',
  'water_res',
  'thunderres',
  'ice_res',
  'dragon_res',
  'heat_res',
  'cold_res',
  'map',
  'whim',
  'fishing',
  'combo_rate',
  'combo_plus',
  'lastingpwr',
  'precision',
  'bbq',
  'speedsetup',
  'perception',
  'oxygen',
  'currentres',
  'survivor',
  'blight_res',
  'auto-guard'
] as const;

export type SkillIdentifier = (typeof skillIdentifiers)[number];

/**
 * Defines an active armor skill and the number of points required
 * for the skill to be active.
 */
export interface ArmorSkill {
  readonly skillName: string;
  readonly pointThreshold: PointThreshold;
  readonly skillDescription?: string;
}

/**
 * Defines a skill name, description, and a list of {@link ArmorSkill}s that
 * can be activated.
 */
export interface SkillTree {
  /** Used to uniquely identify skill */
  readonly key: SkillIdentifier;
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
   * Survivor // Hellhunter and Soulhunter Jackets
   */
  readonly restricted?: boolean;
}

/**
 * Skill ID mapped to a count of points
 */
export type SkillPointRecord = {
  [x in SkillIdentifier]?: number;
};
