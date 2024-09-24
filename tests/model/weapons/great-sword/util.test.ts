import { Alatreon } from '../../../../src/model/monsters/large-monster-data';
import { GreatSwords } from '../../../../src/model/weapons/great-sword';
import { calculateGreatSwordDamage } from '../../../../src/model/weapons/great-sword/util';
import { Sharpness } from '../../../../src/model/weapons/types';
import { MonsterLevels } from '../../../../src/model';

describe('Great Sword utils', () => {
  describe('calculateGreatSwordDamage', () => {
    it('calculates damage', () => {
      const anguishP = GreatSwords[57];
      const headHitzoneValues = Alatreon.hitzoneGroups[0].hitzones['Head']; // Non-flying head hitzone
      const levelMultipliers =
        MonsterLevels.Util.getMonsterLevelMultipliers(52); // The Brilliant Darkness
      const result = calculateGreatSwordDamage(
        anguishP,
        'L3 Charge',
        Sharpness.PURPLE,
        headHitzoneValues,
        levelMultipliers
      );
      console.log(`${anguishP.name}, purple, L3 Charge, Alatreon Head`, result);
      expect(result).toMatchSnapshot();
    });
  });
});
