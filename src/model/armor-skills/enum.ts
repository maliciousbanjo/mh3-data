/**
 * Skill groups A, B and C
 *
 * The group conventionally corresponds to talisman/decoration behavior of that skill.
 *
 * - A: Talisman can give +4 at most. Decorations are typically 1 slot: 1 point and 3 slots: 4 points.
 * - B: Talisman can give +7 at most. Decorations are typically 1 slot: 1 point and 2 slots: 3 points.
 * - C: Talisman can give +10 at most. Decorations are typically 1 slot: 2 points.
 */
export enum SkillGroup {
  /**
   * Talisman can give +4 at most. Decorations are typically 1 slot: 1 point and 3 slots: 4 points.
   */
  A = 'A',
  /**
   * Talisman can give +7 at most. Decorations are typically 1 slot: 1 point and 2 slots: 3 points.
   */
  B = 'B',
  /**
   * Talisman can give +10 at most. Decorations are typically 1 slot: 2 points.
   */
  C = 'C'
}
