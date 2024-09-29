import type {
  LargeMonster,
  LargeMonsterName,
  Monster,
  SmallMonsterName
} from './types';
import { SmallMonsterData, LargeMonsterData } from '.';

/**
 * @returns Small Monster
 */
export function getSmallMonster(name: SmallMonsterName): Monster {
  const smMonster = SmallMonsterData.find(smMon => smMon.name === name);

  if (!smMonster) throw new Error(`Could not find small monster ${name}`);
  return smMonster;
}

/**
 * @returns Large Monster
 */
export function getLargeMonster(name: LargeMonsterName): LargeMonster {
  const lgMonster = LargeMonsterData.find(lgMon => lgMon.name === name);

  if (!lgMonster) throw new Error(`Could not find large monster ${name}`);
  return lgMonster;
}

/**
 * @returns Monster, large or small
 */
export function getMonster(name: SmallMonsterName | LargeMonsterName) {
  const monster = SmallMonsterData.concat(LargeMonsterData).find(
    mon => mon.name === name
  );

  if (!monster) throw new Error(`Could not find monster ${name}`);
  return monster;
}
