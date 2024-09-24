import { MonsterLevelRecord } from './types';

/**
 * Per some research, it seems the `stagger` could be wrong?
 * An example for Alatreon, with a base head stagger limit of 700 HP.
 *
 * That would make 700 * 2.2 = 1540 to stagger which is not true, he actually
 * staggers around 700.
 *
 * The rest of this information could be fine, but should be looked at with scrutiny.
 */
export const MonsterLevelData = Object.freeze<MonsterLevelRecord>({
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
  /** Used in offline arena quests */
  26: { health: [0.64], defense: 0.95, stagger: 1.5 },
  27: { health: [1.15, 1.17, 1.2, 1.22, 1.25], defense: 0.95, stagger: 1.5 },
  29: { health: [1.2, 1.22, 1.25, 1.27, 1.3], defense: 0.95, stagger: 1.5 },
  32: { health: [1.3, 1.32, 1.35], defense: 0.95, stagger: 1.6 },
  /** Used in offline arena quests */
  36: { health: [0.44], defense: 0.95, stagger: 1.5 },
  /** Used in offline arena quests */
  37: { health: [0.52], defense: 0.95, stagger: 1.5 },
  /** Used in offline arena quests */
  38: { health: [0.44], defense: 0.9, stagger: 1.5 },
  /** Used in offline arena quests */
  39: { health: [0.385], defense: 0.95, stagger: 1.5 },
  40: { health: [0.8], defense: 0.95, stagger: 1.5 },
  44: { health: [1.48, 1.52, 1.56], defense: 0.8, stagger: 2.1 },
  45: { health: [1.48, 1.52, 1.56, 1.59, 1.63], defense: 0.8, stagger: 2.1 },
  48: { health: [1.63, 1.67, 1.71], defense: 0.75, stagger: 2.2 },
  50: { health: [1.71, 1.75, 1.79], defense: 0.75, stagger: 2.2 },
  52: { health: [1], defense: 0.75, stagger: 2.2 },
  53: { health: [1.6], defense: 0.75, stagger: 2.2 },
  54: { health: [1.3], defense: 0.75, stagger: 2.1 },
  57: { health: [1.9], defense: 0.75, stagger: 2.2 },
  58: { health: [1.1], defense: 0.75, stagger: 2.2 }
});
