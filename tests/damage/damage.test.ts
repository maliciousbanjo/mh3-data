import { calculateDamage } from '../../src/damage/damage';
import {
  Alatreon,
  Deviljho,
  RoyalLudroth
} from '../../src/model/monsters/large-monster-data';
import { Sharpness, WeaponClass } from '../../src/model/weapons';
import type { DamageTypes } from '../../src/damage';

describe('Damage', () => {
  describe('calculateDamage', () => {
    const theBrilliantDarknessId = 0x4a39;
    const alatreonMonsterArgs: DamageTypes.MonsterArgs = {
      monsterName: Alatreon.name,
      questId: theBrilliantDarknessId,
      monsterStateIndex: 0,
      hitzoneIndex: 0
    };

    it('throws error for invalid sharpness', () => {
      expect(() =>
        calculateDamage(
          {
            weaponClass: WeaponClass.GREAT_SWORD,
            weaponId: 1, // Iron Blade
            attackName: 'L3 Charge',
            sharpness: Sharpness.PURPLE,
            weaponMultipliers: {}
          },
          alatreonMonsterArgs,
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
            }
          }
        )
      ).toThrow();
    });

    it('Great Sword', () => {
      const damage = calculateDamage(
        {
          weaponClass: WeaponClass.GREAT_SWORD,
          weaponId: 57, // Anguish (P)
          attackName: 'L3 Charge',
          sharpness: Sharpness.PURPLE,
          weaponMultipliers: {
            middleOfBlade: false
          }
        },
        alatreonMonsterArgs,
        {
          elementArgs: {
            awaken: false,
            elementAttack: 'none'
          }
        }
      );

      expect(damage).toMatchSnapshot();
    });

    it('Hammer', () => {
      const damage = calculateDamage(
        {
          weaponClass: WeaponClass.HAMMER,
          weaponId: 49, // Devil's Crush (P)
          attackName: 'Superpound',
          sharpness: Sharpness.PURPLE,
          weaponMultipliers: {}
        },
        alatreonMonsterArgs,
        {
          elementArgs: {
            awaken: false,
            elementAttack: 'none'
          }
        }
      );
      expect(damage).toMatchSnapshot();
    });

    describe('Lance', () => {
      it('Cut hitzone', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponClass.LANCE,
            weaponId: 52, // Alatreon Gleam,
            attackName: 'High Stab Combo',
            sharpness: Sharpness.PURPLE,
            weaponMultipliers: {}
          },
          alatreonMonsterArgs,
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });

      it('Modified impact hitzone', () => {
        const saveOurBoatId = 0x0402;
        const damage = calculateDamage(
          {
            weaponClass: WeaponClass.LANCE,
            weaponId: 52, // Alatreon Gleam,
            attackName: 'High Stab Combo',
            sharpness: Sharpness.PURPLE,
            weaponMultipliers: {}
          },
          {
            monsterName: RoyalLudroth.name,
            questId: saveOurBoatId,
            monsterStateIndex: 0,
            hitzoneIndex: 0
          },
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
            }
          }
        );

        expect(damage).toMatchSnapshot();
      });
    });

    describe('Longsword', () => {
      it('throws error for missing special args', () => {
        expect(() =>
          calculateDamage(
            {
              weaponClass: WeaponClass.LONGSWORD,
              weaponId: 19, // Dark Claw Demise
              attackName: 'Spirit Finisher',
              sharpness: Sharpness.PURPLE,
              weaponMultipliers: {}
            },
            alatreonMonsterArgs,
            {
              elementArgs: {
                awaken: false,
                elementAttack: 'none'
              }
            }
          )
        ).toThrow();
      });
      it('Spirit Gauge NONE', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponClass.LONGSWORD,
            weaponId: 19, // Dark Claw Demise
            attackName: 'Spirit Finisher',
            sharpness: Sharpness.PURPLE,
            weaponMultipliers: {
              longsword: {
                fullSpiritGauge: true,
                spiritGaugeColor: 'NONE'
              }
            }
          },
          alatreonMonsterArgs,
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });
      it('Spirit Gauge WHITE', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponClass.LONGSWORD,
            weaponId: 19, // Dark Claw Demise
            attackName: 'Spirit Finisher',
            sharpness: Sharpness.PURPLE,
            weaponMultipliers: {
              longsword: {
                fullSpiritGauge: true,
                spiritGaugeColor: 'WHITE'
              }
            }
          },
          alatreonMonsterArgs,
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });
      it('Spirit Gauge YELLOW', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponClass.LONGSWORD,
            weaponId: 19, // Dark Claw Demise
            attackName: 'Spirit Finisher',
            sharpness: Sharpness.PURPLE,
            weaponMultipliers: {
              longsword: {
                fullSpiritGauge: true,
                spiritGaugeColor: 'YELLOW'
              }
            }
          },
          alatreonMonsterArgs,
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });
      it('Spirit Gauge RED', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponClass.LONGSWORD,
            weaponId: 19, // Dark Claw Demise
            attackName: 'Spirit Finisher',
            sharpness: Sharpness.PURPLE,
            weaponMultipliers: {
              longsword: {
                fullSpiritGauge: true,
                spiritGaugeColor: 'RED'
              }
            }
          },
          alatreonMonsterArgs,
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });

      it('Deviljho Spirit Gauge RED', () => {
        const bedevilADeviljhoId = 0x3afd;

        const damage = calculateDamage(
          {
            weaponClass: WeaponClass.LONGSWORD,
            weaponId: 19, // Dark Claw Demise
            attackName: 'Step Slash',
            sharpness: Sharpness.PURPLE,
            weaponMultipliers: {
              longsword: {
                fullSpiritGauge: true,
                spiritGaugeColor: 'RED'
              }
            }
          },
          {
            monsterName: Deviljho.name,
            questId: bedevilADeviljhoId,
            monsterStateIndex: 1, // rage
            hitzoneIndex: 1 // Stomach
          },
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
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
              weaponClass: WeaponClass.SWITCH_AXE,
              weaponId: 22, // Great Inceadeus
              attackName: 'Overhead Slash',
              sharpness: Sharpness.WHITE,
              weaponMultipliers: {}
            },
            {
              monsterName: Alatreon.name,
              questId: theBrilliantDarknessId,
              monsterStateIndex: 0,
              hitzoneIndex: 0
            },
            {
              elementArgs: {
                awaken: false,
                elementAttack: 'none'
              }
            }
          )
        ).toThrow();
      });
      it('Power phial', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponClass.SWITCH_AXE,
            weaponId: 22, // Great Inceadeus
            attackName: 'Overhead Slash',
            sharpness: Sharpness.WHITE,
            weaponMultipliers: {
              switchAxeMode: 'sword'
            }
          },
          alatreonMonsterArgs,
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
            }
          }
        );
        expect(damage).toMatchSnapshot();
      });

      it('Axe mode', () => {
        const greatInceadeusDamage = calculateDamage(
          {
            weaponClass: WeaponClass.SWITCH_AXE,
            weaponId: 22, // Great Inceadeus
            attackName: 'Overhead Slash',
            sharpness: Sharpness.BLUE,
            weaponMultipliers: {
              switchAxeMode: 'axe'
            }
          },
          alatreonMonsterArgs,
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
            }
          }
        );

        const greatDemonbindDamage = calculateDamage(
          {
            weaponClass: WeaponClass.SWITCH_AXE,
            weaponId: 24, // Great Demonbind (P)
            attackName: 'Overhead Slash',
            sharpness: Sharpness.BLUE,
            weaponMultipliers: {
              switchAxeMode: 'axe'
            }
          },
          alatreonMonsterArgs,
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
            }
          }
        );

        expect(greatInceadeusDamage[0].totalDamage).toBe(44);
        expect(greatDemonbindDamage[0].totalDamage).toBe(45);
      });

      it('Element phial', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponClass.SWITCH_AXE,
            weaponId: 33, // Black Harvest
            attackName: 'Overhead Slash',
            sharpness: Sharpness.PURPLE,
            weaponMultipliers: {
              switchAxeMode: 'sword'
            }
          },
          alatreonMonsterArgs,
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
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
              weaponClass: WeaponClass.SWORD_AND_SHIELD,
              weaponId: 55, // Alatreon Star
              attackName: 'Jumping Slash',
              sharpness: Sharpness.PURPLE,
              weaponMultipliers: {}
            },
            alatreonMonsterArgs,
            {
              elementArgs: {
                awaken: false,
                elementAttack: 'none'
              }
            }
          )
        ).toThrow();
      });

      it('Cut attack', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponClass.SWORD_AND_SHIELD,
            weaponId: 55, // Alatreon Star
            attackName: 'Jumping Slash',
            sharpness: Sharpness.PURPLE,
            weaponMultipliers: {
              swordAndShieldMode: 'land'
            }
          },
          alatreonMonsterArgs,
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
            }
          }
        );

        expect(damage).toMatchSnapshot();
      });

      it('Impact attack', () => {
        const damage = calculateDamage(
          {
            weaponClass: WeaponClass.SWORD_AND_SHIELD,
            weaponId: 55, // Alatreon Star
            attackName: 'Shield Combo',
            sharpness: Sharpness.PURPLE,
            weaponMultipliers: {
              swordAndShieldMode: 'land'
            }
          },
          alatreonMonsterArgs,
          {
            elementArgs: {
              awaken: false,
              elementAttack: 'none'
            }
          }
        );

        expect(damage).toMatchSnapshot();
      });
    });
  });
});
