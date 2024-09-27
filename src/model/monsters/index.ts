import type * as MonsterTypes from './types';
export * from './enum';
import {
  Aptonoth,
  Kelbi,
  Epioth,
  Popo,
  Bnahabra,
  Altaroth,
  Felyne,
  Melynx,
  Fish,
  Giggi,
  Jaggi,
  Jaggia,
  Baggi,
  Ludroth,
  Uroktor,
  Delex,
  Rhenoplos
} from './small-monster-data';
import {
  GreatJaggi,
  GreatBaggi,
  Barroth,
  Uragaan,
  Qurupeco,
  Rathian,
  Rathalos,
  Diablos,
  Gigginox,
  Barioth,
  RoyalLudroth,
  Gobul,
  Lagiacrus,
  Agnaktor,
  Ceadeus,
  Deviljho,
  JhenMohran,
  Alatreon
} from './large-monster-data';

/**
 * List of all small monsters
 */
export const SmallMonsterData = Object.freeze<MonsterTypes.Monster[]>([
  Aptonoth,
  Kelbi,
  Epioth,
  Popo,
  Bnahabra,
  Altaroth,
  Felyne,
  Melynx,
  Fish,
  Giggi,
  Jaggi,
  Jaggia,
  Baggi,
  Ludroth,
  Uroktor,
  Delex,
  Rhenoplos
]);

/**
 * List of all large monsters
 */
export const LargeMonsterData = Object.freeze<MonsterTypes.LargeMonster[]>([
  GreatJaggi,
  GreatBaggi,
  Barroth,
  Uragaan,
  Qurupeco,
  Rathian,
  Rathalos,
  Diablos,
  Gigginox,
  Barioth,
  RoyalLudroth,
  Gobul,
  Lagiacrus,
  Agnaktor,
  Ceadeus,
  Deviljho,
  JhenMohran,
  Alatreon
]);

export type { MonsterTypes };
