import { deepFreeze } from '../../utils';
import type { MonsterLevelRecord } from './types';

/**
 * !Defense multipliers may not be 100% accurate for some levels
 * This dataset was likely derived by examining the pre-defined quest files. Not all levels were accounted for.
 * The dataset was expanded by manually checking the HP and stagger limits of missing level definitions.
 *
 * - The lowest "real" low rank quest is level `23` (but it appears it can go down to `19`)
 * - The lowest "real" high rank quest is level `44` (but it appears it can go down to `41`)
 */
export const MonsterLevelData = deepFreeze<MonsterLevelRecord>({
  0: { health: 1, defense: 1, stagger: 1 }, // DEFAULT
  1: { health: 0.35, defense: 1, stagger: 1 },
  2: { health: 0.38, defense: 1, stagger: 1 },
  3: { health: 0.4, defense: 1, stagger: 1 },
  4: { health: 0.43, defense: 1, stagger: 1 },
  5: { health: 0.45, defense: 1, stagger: 1 },
  6: { health: 0.48, defense: 1, stagger: 1 },
  7: { health: 0.5, defense: 1, stagger: 1 },
  8: { health: 0.55, defense: 1, stagger: 1 },
  9: { health: 0.6, defense: 1, stagger: 1 },
  10: { health: 0.65, defense: 1, stagger: 1 },
  11: { health: 0.7, defense: 1, stagger: 1 },
  12: { health: 0.75, defense: 1, stagger: 1 },
  13: { health: 0.8, defense: 1, stagger: 1 },
  14: { health: 0.85, defense: 1, stagger: 1 },
  15: { health: 0.9, defense: 1, stagger: 1 },
  16: { health: 0.7, defense: 0.9, stagger: 1 },
  17: { health: 0.75, defense: 0.9, stagger: 1 },
  18: { health: 0.9, defense: 0.9, stagger: 1 },
  19: { health: 1.4, defense: 0.9, stagger: 1.5 },
  20: { health: 1.5, defense: 0.9, stagger: 1.5 },
  21: { health: 1.05, defense: 0.9, stagger: 1.5 },
  22: { health: 1.08, defense: 0.9, stagger: 1.5 },
  23: { health: 1.1, defense: 0.95, stagger: 1.5 }, //! Begin online low rank
  24: { health: 1.12, defense: 0.95, stagger: 1.5 },
  25: { health: 1.15, defense: 0.95, stagger: 1.5 },
  26: { health: 1.17, defense: 0.95, stagger: 1.5 },
  27: { health: 1.2, defense: 0.95, stagger: 1.5 },
  28: { health: 1.22, defense: 0.95, stagger: 1.5 },
  29: { health: 1.25, defense: 0.95, stagger: 1.5 },
  30: { health: 1.27, defense: 0.95, stagger: 1.5 },
  31: { health: 1.3, defense: 0.95, stagger: 1.6 },
  32: { health: 1.32, defense: 0.95, stagger: 1.6 },
  33: { health: 1.35, defense: 0.95, stagger: 1.6 },
  34: { health: 0.75, defense: 0.95, stagger: 1.6 },
  35: { health: 1.3, defense: 0.95, stagger: 1.6 },
  36: { health: 0.8, defense: 0.95, stagger: 1.5 },
  37: { health: 0.95, defense: 0.95, stagger: 1.5 },
  38: { health: 0.8, defense: 0.95, stagger: 1.5 },
  39: { health: 0.7, defense: 0.95, stagger: 1.5 },
  40: { health: 0.8, defense: 0.95, stagger: 1.5 },
  41: { health: 1.4, defense: 0.8, stagger: 2.09 },
  42: { health: 1.43, defense: 0.8, stagger: 2.09 },
  43: { health: 1.48, defense: 0.8, stagger: 2.1 },
  44: { health: 1.52, defense: 0.8, stagger: 2.1 }, //! Begin online high rank
  45: { health: 1.56, defense: 0.8, stagger: 2.1 },
  46: { health: 1.59, defense: 0.8, stagger: 2.1 },
  47: { health: 1.63, defense: 0.8, stagger: 2.1 },
  48: { health: 1.67, defense: 0.75, stagger: 2.2 },
  49: { health: 1.71, defense: 0.75, stagger: 2.2 },
  50: { health: 1.75, defense: 0.75, stagger: 2.2 },
  51: { health: 1.79, defense: 0.75, stagger: 2.2 },
  52: { health: 1, defense: 0.75, stagger: 2.2 },
  53: { health: 1.6, defense: 0.75, stagger: 2.2 },
  54: { health: 1.3, defense: 0.75, stagger: 2.1 },
  55: { health: 1.1, defense: 0.75, stagger: 1.9 },
  56: { health: 0.9, defense: 0.75, stagger: 1.9 },
  57: { health: 1.9, defense: 0.75, stagger: 2.2 },
  58: { health: 1.1, defense: 0.75, stagger: 2.2 },
  59: { health: 1.3, defense: 0.75, stagger: 2.2 },
  60: { health: 1.5, defense: 0.75, stagger: 2.2 }
});
