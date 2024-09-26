import { calculateDamage } from '../../src/damage/damage';
import { validateWeaponSharpness } from '../../src/damage/util/damage-util';
import { MonsterLevels } from '../../src/model';
import {
  Alatreon,
  Deviljho,
  RoyalLudroth
} from '../../src/model/monsters/large-monster-data';
import { GreatSwords, WeaponTypes } from '../../src/model/weapons';

describe('Damage', () => {
  describe('damage utils', () => {
    describe('validateWeaponSharpness', () => {
      it('weapon has valid sharpness', () => {
        const gs = GreatSwords[0];
        expect(
          validateWeaponSharpness(gs, WeaponTypes.Sharpness.ORANGE)
        ).toBeTruthy();
      });
      it('throws error because weapon does not have sharpness', () => {
        const gs = GreatSwords[0];
        expect(() =>
          validateWeaponSharpness(gs, WeaponTypes.Sharpness.PURPLE)
        ).toThrow();
      });
    });
  });

  describe('calculateDamage', () => {
    const alatreonHeadHitzoneValues =
      Alatreon.hitzoneGroups[0].hitzones['Head'];
    const levelMultipliers = MonsterLevels.Util.getMonsterLevelMultipliers(52); // The Brilliant Darkness

    it('throws error for invalid sharpness', () => {
      expect(() =>
        calculateDamage(
          {
            weaponClass: WeaponTypes.WeaponClass.GREAT_SWORD,
            weaponId: 1, // Iron Blade
            attackName: 'L3 Charge',
            sharpness: WeaponTypes.Sharpness.PURPLE,
            weaponMultipliers: {}
          },
          { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
          {
            criticalHit: 'none',
            elementArgs: {
              awaken: false
            }
          }
        )
      ).toThrow();
    });

    it('Great Sword', () => {
      const damage = calculateDamage(
        {
          weaponClass: WeaponTypes.WeaponClass.GREAT_SWORD,
          weaponId: 57, // Anguish (P)
          attackName: 'L3 Charge',
          sharpness: WeaponTypes.Sharpness.PURPLE,
          weaponMultipliers: {
            middleOfBlade: false
          }
        },
        { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
        {
          criticalHit: 'none',
          elementArgs: {
            awaken: false
          }
        }
      );

      expect(damage).toMatchSnapshot();
    });

    it('Hammer', () => {
      const damage = calculateDamage(
        {
          weaponClass: WeaponTypes.WeaponClass.HAMMER,
          weaponId: 49, // Devil's Crush (P)
          attackName: 'Superpound',
          sharpness: WeaponTypes.Sharpness.PURPLE,
          weaponMultipliers: {}
        },
        { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
        {
          criticalHit: 'none',
          elementArgs: {
            awaken: false
          }
        }
      );
      expect(damage).toMatchSnapshot();
    });

    describe('Lance', () => {
      it('Cut hitzone', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponTypes.WeaponClass.LANCE,
            weaponId: 52, // Alatreon Gleam,
            attackName: 'High Stab Combo',
            sharpness: WeaponTypes.Sharpness.PURPLE,
            weaponMultipliers: {}
          },
          { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
          {
            criticalHit: 'none',
            elementArgs: {
              awaken: false
            }
          }
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
          {
            weaponClass: WeaponTypes.WeaponClass.LANCE,
            weaponId: 52, // Alatreon Gleam,
            attackName: 'High Stab Combo',
            sharpness: WeaponTypes.Sharpness.PURPLE,
            weaponMultipliers: {}
          },
          {
            hitzoneValues: royalLudrothHeadHitzoneValues,
            levelMultipliers: ludrothLevelMultipliers
          },
          {
            criticalHit: 'none',
            elementArgs: {
              awaken: false
            }
          }
        );

        expect(damage).toMatchSnapshot();
      });
    });

    // TODO: These numbers are way off from StillTruth
    describe('Longsword', () => {
      it('throws error for missing special args', () => {
        expect(() =>
          calculateDamage(
            {
              weaponClass: WeaponTypes.WeaponClass.LONGSWORD,
              weaponId: 19, // Dark Claw Demise
              attackName: 'Spirit Finisher',
              sharpness: WeaponTypes.Sharpness.PURPLE,
              weaponMultipliers: {}
            },
            { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
            {
              criticalHit: 'none',
              elementArgs: {
                awaken: false
              }
            }
          )
        ).toThrow();
      });
      it('Spirit Gauge NONE', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponTypes.WeaponClass.LONGSWORD,
            weaponId: 19, // Dark Claw Demise
            attackName: 'Spirit Finisher',
            sharpness: WeaponTypes.Sharpness.PURPLE,
            weaponMultipliers: {
              longsword: {
                fullSpiritGauge: true,
                spiritGaugeColor: 'NONE'
              }
            }
          },
          { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
          {
            criticalHit: 'none',
            elementArgs: {
              awaken: false
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });
      it('Spirit Gauge WHITE', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponTypes.WeaponClass.LONGSWORD,
            weaponId: 19, // Dark Claw Demise
            attackName: 'Spirit Finisher',
            sharpness: WeaponTypes.Sharpness.PURPLE,
            weaponMultipliers: {
              longsword: {
                fullSpiritGauge: true,
                spiritGaugeColor: 'WHITE'
              }
            }
          },
          { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
          {
            criticalHit: 'none',
            elementArgs: {
              awaken: false
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });
      it('Spirit Gauge YELLOW', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponTypes.WeaponClass.LONGSWORD,
            weaponId: 19, // Dark Claw Demise
            attackName: 'Spirit Finisher',
            sharpness: WeaponTypes.Sharpness.PURPLE,
            weaponMultipliers: {
              longsword: {
                fullSpiritGauge: true,
                spiritGaugeColor: 'YELLOW'
              }
            }
          },
          { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
          {
            criticalHit: 'none',
            elementArgs: {
              awaken: false
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });
      it('Spirit Gauge RED', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponTypes.WeaponClass.LONGSWORD,
            weaponId: 19, // Dark Claw Demise
            attackName: 'Spirit Finisher',
            sharpness: WeaponTypes.Sharpness.PURPLE,
            weaponMultipliers: {
              longsword: {
                fullSpiritGauge: true,
                spiritGaugeColor: 'RED'
              }
            }
          },
          { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
          {
            criticalHit: 'none',
            elementArgs: {
              awaken: false
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });

      it('Deviljho Spirit Gauge RED', () => {
        // rage
        const deviljhoStomachHitzoneValues =
          Deviljho.hitzoneGroups[1].hitzones['Stomach'];
        const damage = calculateDamage(
          {
            weaponClass: WeaponTypes.WeaponClass.LONGSWORD,
            weaponId: 19, // Dark Claw Demise
            attackName: 'Step Slash',
            sharpness: WeaponTypes.Sharpness.PURPLE,
            weaponMultipliers: {
              longsword: {
                fullSpiritGauge: true,
                spiritGaugeColor: 'RED'
              }
            }
          },
          { hitzoneValues: deviljhoStomachHitzoneValues, levelMultipliers },
          {
            criticalHit: 'none',
            elementArgs: {
              awaken: false
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
            {
              weaponClass: WeaponTypes.WeaponClass.SWITCH_AXE,
              weaponId: 22, // Great Inceadeus
              attackName: 'Overhead Slash',
              sharpness: WeaponTypes.Sharpness.WHITE,
              weaponMultipliers: {}
            },
            { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
            {
              criticalHit: 'none',
              elementArgs: {
                awaken: false
              }
            }
          )
        ).toThrow();
      });
      it('Power phial', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponTypes.WeaponClass.SWITCH_AXE,
            weaponId: 22, // Great Inceadeus
            attackName: 'Overhead Slash',
            sharpness: WeaponTypes.Sharpness.WHITE,
            weaponMultipliers: {
              switchAxeMode: 'sword'
            }
          },
          { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
          {
            criticalHit: 'none',
            elementArgs: {
              awaken: false
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });
      it('Element phial', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponTypes.WeaponClass.SWITCH_AXE,
            weaponId: 33, // Black Harvest
            attackName: 'Overhead Slash',
            sharpness: WeaponTypes.Sharpness.PURPLE,
            weaponMultipliers: {
              switchAxeMode: 'sword'
            }
          },
          { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
          {
            criticalHit: 'none',
            elementArgs: {
              awaken: false
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });
    });

    describe('Sword and Shield', () => {
      it('Throws error for missing special args', () => {
        expect(() =>
          calculateDamage(
            {
              weaponClass: WeaponTypes.WeaponClass.SWORD_AND_SHIELD,
              weaponId: 55, // Alatreon Star
              attackName: 'Jumping Slash',
              sharpness: WeaponTypes.Sharpness.PURPLE,
              weaponMultipliers: {}
            },
            { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
            {
              criticalHit: 'none',
              elementArgs: {
                awaken: false
              }
            }
          )
        ).toThrow();
      });

      it('Cut attack', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponTypes.WeaponClass.SWORD_AND_SHIELD,
            weaponId: 55, // Alatreon Star
            attackName: 'Jumping Slash',
            sharpness: WeaponTypes.Sharpness.PURPLE,
            weaponMultipliers: {
              swordAndShieldMode: 'land'
            }
          },
          { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
          {
            criticalHit: 'none',
            elementArgs: {
              awaken: false
            }
          }
        );

        expect(damage).toMatchSnapshot();
      });

      it('Impact attack', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponTypes.WeaponClass.SWORD_AND_SHIELD,
            weaponId: 55, // Alatreon Star
            attackName: 'Shield Combo',
            sharpness: WeaponTypes.Sharpness.PURPLE,
            weaponMultipliers: {
              swordAndShieldMode: 'land'
            }
          },
          { hitzoneValues: alatreonHeadHitzoneValues, levelMultipliers },
          {
            criticalHit: 'none',
            elementArgs: {
              awaken: false
            }
          }
        );

        expect(damage).toMatchSnapshot();
      });
    });
  });
});
