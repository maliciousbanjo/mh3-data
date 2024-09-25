/**
 * "Torso Up" is a unique skill property attached to a few armor pieces.
 *
 * It will double skill points on the torso armor piece including all decorations.
 * Wearing two Torso Up pieces will triple. Three pieces will quadruple.
 *
 * Armor pieces with Torso Up:
 * - Skull Mask (Head)
 * - Uragaan (Legs)
 * - Alloy (Legs)
 * - Alloy+ (Legs)
 * - Guild Bard (Legs)
 * - Guild Bard+ (Legs)
 * - Deviljho (Waist)
 */
export function TorsoUp(piecesWorn: 1 | 2 | 3, skillPoints: number) {
  return skillPoints * (piecesWorn + 1);
}
