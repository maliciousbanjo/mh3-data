import { deepFreeze } from '../../utils';
import type { MonsterLevelRecord } from './types';

/**
 * !This data is not 100% accurate.
 *
 * Health multipliers do not actually work this way. Rather, each level
 * should correspond to a singular health multiplier. There is an additional
 * property in the quest format that allows for a variable level range
 * for a monster in the quest.
 *
 * This dataset was likely derived by examining the pre-defined quest files.
 *
 * Defense and stagger multpliers DO appear to be accurate.
 */
export const MonsterLevelData = deepFreeze<MonsterLevelRecord>({
  0: { health: [1], defense: 1, stagger: 1 }, // DEFAULT
  3: { health: [0.35, 0.38, 0.4, 0.43, 0.45], defense: 1, stagger: 1 },
  5: { health: [0.4, 0.43, 0.45, 0.48, 0.5], defense: 1, stagger: 1 },
  7: { health: [0.45, 0.48, 0.5, 0.55, 0.6], defense: 1, stagger: 1 },
  9: { health: [0.5, 0.55, 0.6, 0.65, 0.7], defense: 1, stagger: 1 },
  11: { health: [0.6, 0.65, 0.7, 0.75, 0.8], defense: 1, stagger: 1 },
  13: { health: [0.7, 0.75, 0.8, 0.85, 0.9], defense: 1, stagger: 1 },
  16: { health: [0.7], defense: 0.9, stagger: 1 },
  17: { health: [0.75], defense: 0.9, stagger: 1 },
  18: { health: [0.9], defense: 0.9, stagger: 1 },
  23: { health: [1.05, 1.08, 1.1, 1.12, 1.15], defense: 0.95, stagger: 1.5 },
  25: { health: [1.1, 1.12, 1.15, 1.17, 1.2], defense: 0.95, stagger: 1.5 },
  26: { health: [0.64], defense: 0.95, stagger: 1.5 },
  27: { health: [1.15, 1.17, 1.2, 1.22, 1.25], defense: 0.95, stagger: 1.5 },
  29: { health: [1.2, 1.22, 1.25, 1.27, 1.3], defense: 0.95, stagger: 1.5 },
  30: { health: [1.27], defense: 0.95, stagger: 1.5 },
  31: { health: [1.3], defense: 0.95, stagger: 1.6 },
  32: { health: [1.3, 1.32, 1.35], defense: 0.95, stagger: 1.6 },
  36: { health: [0.8], defense: 0.95, stagger: 1.5 },
  37: { health: [0.95], defense: 0.95, stagger: 1.5 },
  38: { health: [0.8], defense: 0.95, stagger: 1.5 },
  39: { health: [0.7], defense: 0.95, stagger: 1.5 },
  40: { health: [0.8], defense: 0.95, stagger: 1.5 },
  44: { health: [1.48, 1.52, 1.56], defense: 0.8, stagger: 2.1 },
  45: { health: [1.48, 1.52, 1.56, 1.59, 1.63], defense: 0.8, stagger: 2.1 },
  48: { health: [1.63, 1.67, 1.71], defense: 0.75, stagger: 2.2 },
  50: { health: [1.71, 1.75, 1.79], defense: 0.75, stagger: 2.2 },
  52: { health: [1], defense: 0.75, stagger: 2.2 },
  53: { health: [1.6], defense: 0.75, stagger: 2.2 },
  54: { health: [1.3], defense: 0.75, stagger: 2.1 },
  55: { health: [1.1], defense: 0.75, stagger: 1.9 },
  56: { health: [0.9], defense: 0.75, stagger: 1.9 },
  57: { health: [1.9], defense: 0.75, stagger: 2.2 },
  58: { health: [1.1], defense: 0.75, stagger: 2.2 },
  59: { health: [1.3], defense: 0.75, stagger: 2.2 },
  60: { health: [1.5], defense: 0.75, stagger: 2.2 }
});
