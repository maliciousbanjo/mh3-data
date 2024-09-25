import { MonsterLevels } from '../../../src/model';
import {
  Alatreon,
  RoyalLudroth
} from '../../../src/model/monsters/large-monster-data';
import { GreatSwords } from '../../../src/model/weapons/great-sword';
import { Sharpness, WeaponType } from '../../../src/model/weapons/types';
import {
  calculateDamage,
  getWeapon,
  getWeaponDamageProperties,
  validateWeaponSharpness
} from '../../../src/model/weapons/weapon-util';

describe('Weapon utils', () => {
  describe('getWeapon', () => {
    it('throws error when invalid ID provided', () => {
      expect(() => getWeapon(WeaponType.GREAT_SWORD, -1)).toThrow();
    });
    it('returns a valid great sword', () => {
      expect(getWeapon(WeaponType.GREAT_SWORD, 1).type).toBe(
        WeaponType.GREAT_SWORD
      );
    });
    it('returns a valid hammer', () => {
      expect(getWeapon(WeaponType.HAMMER, 1).type).toBe(WeaponType.HAMMER);
    });
    it('returns a valid lance', () => {
      expect(getWeapon(WeaponType.LANCE, 1).type).toBe(WeaponType.LANCE);
    });
    it('returns a valid longsword', () => {
      expect(getWeapon(WeaponType.LONGSWORD, 1).type).toBe(
        WeaponType.LONGSWORD
      );
    });
    it('returns a valid switch axe', () => {
      expect(getWeapon(WeaponType.SWITCH_AXE, 1).type).toBe(
        WeaponType.SWITCH_AXE
      );
    });
    it('returns a valid sword and shield', () => {
      expect(getWeapon(WeaponType.SWORD_AND_SHIELD, 1).type).toBe(
        WeaponType.SWORD_AND_SHIELD
      );
    });
  });
  describe('getWeaponDamageProperties', () => {
    it('throws error when weapon type provided', () => {
      expect(() =>
        getWeaponDamageProperties('Bad Type' as WeaponType)
      ).toThrow();
    });
    it('returns a valid great sword damage properties', () => {
      expect(getWeaponDamageProperties(WeaponType.GREAT_SWORD).type).toBe(
        WeaponType.GREAT_SWORD
      );
    });
    it('returns a valid hammer damage properties', () => {
      expect(getWeaponDamageProperties(WeaponType.HAMMER).type).toBe(
        WeaponType.HAMMER
      );
    });
    it('returns a valid lance damage properties', () => {
      expect(getWeaponDamageProperties(WeaponType.LANCE).type).toBe(
        WeaponType.LANCE
      );
    });
    it('returns a valid longsword damage properties', () => {
      expect(getWeaponDamageProperties(WeaponType.LONGSWORD).type).toBe(
        WeaponType.LONGSWORD
      );
    });
    it('returns a valid switch axe damage properties', () => {
      expect(getWeaponDamageProperties(WeaponType.SWITCH_AXE).type).toBe(
        WeaponType.SWITCH_AXE
      );
    });
    it('returns a valid sword and shield damage properties', () => {
      expect(getWeaponDamageProperties(WeaponType.SWORD_AND_SHIELD).type).toBe(
        WeaponType.SWORD_AND_SHIELD
      );
    });
  });
  describe('validateWeaponSharpness', () => {
    it('weapon has valid sharpness', () => {
      const gs = GreatSwords[0];
      expect(validateWeaponSharpness(gs, Sharpness.ORANGE)).toBeTruthy();
    });
    it('throws error because weapon does not have sharpness', () => {
      const gs = GreatSwords[0];
      expect(() => validateWeaponSharpness(gs, Sharpness.PURPLE)).toThrow();
    });
  });
  describe('calculateDamage', () => {
    const alatreonHeadHitzoneValues =
      Alatreon.hitzoneGroups[0].hitzones['Head'];
    const levelMultipliers = MonsterLevels.Util.getMonsterLevelMultipliers(52); // The Brilliant Darkness

    it('throws error for invalid sharpness', () => {
      expect(() =>
        calculateDamage(
          WeaponType.GREAT_SWORD,
          1, // Iron Blade
          'L3 Charge',
          Sharpness.PURPLE,
          alatreonHeadHitzoneValues,
          levelMultipliers
        )
      ).toThrow();
    });

    it('Great Sword', () => {
      const damage = calculateDamage(
        WeaponType.GREAT_SWORD,
        57, // Anguish (P)
        'L3 Charge',
        Sharpness.PURPLE,
        alatreonHeadHitzoneValues,
        levelMultipliers,
        false,
        { middleOfBlade: false }
      );

      expect(damage).toMatchSnapshot();
    });

    it('Hammer', () => {
      const damage = calculateDamage(
        WeaponType.HAMMER,
        49, // Devil's Crush (P)
        'Superpound',
        Sharpness.PURPLE,
        alatreonHeadHitzoneValues,
        levelMultipliers,
        false,
        {}
      );
      expect(damage).toMatchSnapshot();
    });

    describe('Lance', () => {
      it('Cut hitzone', () => {
        const damage = calculateDamage(
          WeaponType.LANCE,
          52, // Alatreon Gleam,
          'High Stab Combo',
          Sharpness.PURPLE,
          alatreonHeadHitzoneValues,
          levelMultipliers,
          false,
          {}
        );
        expect(damage).toMatchSnapshot();
      });

      it('Modified impact hitzone', () => {
        // Royal Ludroth head (impact: 0.8, cut: 0.5), so the impact hitzone should be used
        const ludrothLevelMultipliers =
          MonsterLevels.Util.getMonsterLevelMultipliers(5); // Save Our Boat

        const royalLudrothHeadHitzoneValues =
          RoyalLudroth.hitzoneGroups[0].hitzones['Head'];
        const damage = calculateDamage(
          WeaponType.LANCE,
          52, // Alatreon Gleam,
          'High Stab Combo',
          Sharpness.PURPLE,
          royalLudrothHeadHitzoneValues,
          ludrothLevelMultipliers,
          false,
          {}
        );

        expect(damage).toMatchSnapshot();
      });
    });

    describe('Longsword', () => {
      it('throws error for missing special args', () => {
        expect(() =>
          calculateDamage(
            WeaponType.LONGSWORD,
            19, // Dark Claw Demise
            'Spirit Finisher',
            Sharpness.PURPLE,
            alatreonHeadHitzoneValues,
            levelMultipliers,
            false,
            {}
          )
        ).toThrow();
      });
      it('Spirit Guage NONE', () => {
        const damage = calculateDamage(
          WeaponType.LONGSWORD,
          19, // Dark Claw Demise
          'Spirit Finisher',
          Sharpness.PURPLE,
          alatreonHeadHitzoneValues,
          levelMultipliers,
          false,
          {
            longsword: {
              fullSpiritGuage: true,
              spiritGuageColor: 'NONE'
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });
      it('Spirit Guage WHITE', () => {
        const damage = calculateDamage(
          WeaponType.LONGSWORD,
          19, // Dark Claw Demise
          'Spirit Finisher',
          Sharpness.PURPLE,
          alatreonHeadHitzoneValues,
          levelMultipliers,
          false,
          {
            longsword: {
              fullSpiritGuage: true,
              spiritGuageColor: 'WHITE'
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });
      it('Spirit Guage YELLOW', () => {
        const damage = calculateDamage(
          WeaponType.LONGSWORD,
          19, // Dark Claw Demise
          'Spirit Finisher',
          Sharpness.PURPLE,
          alatreonHeadHitzoneValues,
          levelMultipliers,
          false,
          {
            longsword: {
              fullSpiritGuage: true,
              spiritGuageColor: 'YELLOW'
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });
      it('Spirit Guage RED', () => {
        const damage = calculateDamage(
          WeaponType.LONGSWORD,
          19, // Dark Claw Demise
          'Spirit Finisher',
          Sharpness.PURPLE,
          alatreonHeadHitzoneValues,
          levelMultipliers,
          false,
          {
            longsword: {
              fullSpiritGuage: true,
              spiritGuageColor: 'RED'
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });
    });

    describe('Switch Axe', () => {
      it('Throws error for missing special args', () => {
        expect(() =>
          calculateDamage(
            WeaponType.SWITCH_AXE,
            22, // Great Inceadeus
            'Overhead Slash',
            Sharpness.WHITE,
            alatreonHeadHitzoneValues,
            levelMultipliers,
            false,
            {}
          )
        ).toThrow();
      });
      it('Power phial', () => {
        const damage = calculateDamage(
          WeaponType.SWITCH_AXE,
          22, // Great Inceadeus
          'Overhead Slash',
          Sharpness.WHITE,
          alatreonHeadHitzoneValues,
          levelMultipliers,
          false,
          {
            switchAxeMode: 'sword'
          }
        );
        expect(damage).toMatchSnapshot();
      });
      it('Element phial', () => {
        const damage = calculateDamage(
          WeaponType.SWITCH_AXE,
          33, // Black Harvest
          'Overhead Slash',
          Sharpness.PURPLE,
          alatreonHeadHitzoneValues,
          levelMultipliers,
          false,
          {
            switchAxeMode: 'sword'
          }
        );
        expect(damage).toMatchSnapshot();
      });
    });

    describe('Sword and Shield', () => {
      it('Throws error for missing special args', () => {
        expect(() =>
          calculateDamage(
            WeaponType.SWORD_AND_SHIELD,
            55, // Alatreon Star
            'Jumping Slash',
            Sharpness.PURPLE,
            alatreonHeadHitzoneValues,
            levelMultipliers,
            false,
            {}
          )
        ).toThrow();
      });

      it('Cut attack', () => {
        const damage = calculateDamage(
          WeaponType.SWORD_AND_SHIELD,
          55, // Alatreon Star
          'Jumping Slash',
          Sharpness.PURPLE,
          alatreonHeadHitzoneValues,
          levelMultipliers,
          false,
          {
            swordAndShieldMode: 'land'
          }
        );

        expect(damage).toMatchSnapshot();
      });

      it('Impact attack', () => {
        const damage = calculateDamage(
          WeaponType.SWORD_AND_SHIELD,
          55, // Alatreon Star
          'Shield Combo',
          Sharpness.PURPLE,
          alatreonHeadHitzoneValues,
          levelMultipliers,
          false,
          {
            swordAndShieldMode: 'land'
          }
        );

        expect(damage).toMatchSnapshot();
      });
    });
  });
});
