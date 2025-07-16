import type { DamageTypes } from '../../src/damage';
import { calculateDamage } from '../../src/damage/damage';
import {
  DamageBuffArgs,
  LongswordDamageArgs,
  SwitchAxeDamageArgs,
  SwordAndShieldDamageArgs
} from '../../src/damage/types';
import { getMonsterMultipliersForQuest } from '../../src/model/monster-levels';
import {
  Alatreon,
  Deviljho,
  Rathian,
  RoyalLudroth
} from '../../src/model/monsters/large-monster-data';
import { Sharpness, WeaponClass } from '../../src/model/weapons';

describe('Damage', () => {
  describe('calculateDamage', () => {
    const theBrilliantDarknessId = 0x4a39;
    const brilliantDarknessModifiers = getMonsterMultipliersForQuest(
      Alatreon.name,
      theBrilliantDarknessId
    );

    const alatreonMonsterArgs: DamageTypes.MonsterArgs = {
      monsterName: Alatreon.name,
      monsterStatMultipliers: brilliantDarknessModifiers[0],
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
        const saveOurBoatModifiers = getMonsterMultipliersForQuest(
          RoyalLudroth.name,
          saveOurBoatId
        );
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
            monsterStatMultipliers: saveOurBoatModifiers[0],
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
              weaponMultipliers: {} as LongswordDamageArgs['weaponMultipliers']
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
              middleOfBlade: false,
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
              middleOfBlade: false,
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
              middleOfBlade: false,
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
              middleOfBlade: false,
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
        const bedevilADeviljhoMultipliers = getMonsterMultipliersForQuest(
          Deviljho.name,
          bedevilADeviljhoId
        );

        const damage = calculateDamage(
          {
            weaponClass: WeaponClass.LONGSWORD,
            weaponId: 19, // Dark Claw Demise
            attackName: 'Step Slash',
            sharpness: Sharpness.PURPLE,
            weaponMultipliers: {
              middleOfBlade: false,
              longsword: {
                fullSpiritGauge: true,
                spiritGaugeColor: 'RED'
              }
            }
          },
          {
            monsterName: Deviljho.name,
            monsterStatMultipliers: bedevilADeviljhoMultipliers[0],
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
              weaponMultipliers: {} as SwitchAxeDamageArgs['weaponMultipliers']
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

      describe('Dragon Phial behavior', () => {
        const soulbreaker = {
          weaponClass: WeaponClass.SWITCH_AXE,
          weaponId: 28, // Soulbreaker (P)
          attackName: 'Overhead Slash',
          sharpness: Sharpness.BLUE
        };

        const weaponClassArgs: DamageBuffArgs['weaponClassArgs'] = {
          powertalon: true,
          powercharm: true,
          demondrug: 'none',
          armor: 'none',
          might: 'none'
        };

        const royalRumbleMultipliers = getMonsterMultipliersForQuest(
          Rathian.name,
          0x040e // A Royal Rumble
        );

        const rathianMonsterArgs: DamageTypes.MonsterArgs = {
          monsterName: Rathian.name,
          monsterStatMultipliers: royalRumbleMultipliers[0],
          monsterStateIndex: 0,
          hitzoneIndex: 0 // Head
        };
        it('No Awaken, No Element Attack Up', () => {
          const expectedAxeDmg = 119;
          const expectedSwordDmg = 85;
          const axe = calculateDamage(
            {
              ...soulbreaker,
              weaponMultipliers: {
                switchAxeMode: 'axe'
              }
            },
            rathianMonsterArgs,
            {
              weaponClassArgs,
              elementArgs: {
                awaken: false,
                elementAttack: 'none'
              }
            }
          );
          const sword = calculateDamage(
            {
              ...soulbreaker,
              weaponMultipliers: {
                switchAxeMode: 'sword'
              }
            },
            rathianMonsterArgs,
            {
              weaponClassArgs,
              elementArgs: {
                awaken: false,
                elementAttack: 'none'
              }
            }
          );

          expect(axe[0].totalDamage).toBe(expectedAxeDmg);
          expect(sword[0].totalDamage).toBe(expectedSwordDmg);
        });

        it('No Awaken, Element Attack Up', () => {
          const expectedAxeDmg = 119;
          const expectedSwordDmg = 87;
          const axe = calculateDamage(
            {
              ...soulbreaker,
              weaponMultipliers: {
                switchAxeMode: 'axe'
              }
            },
            rathianMonsterArgs,
            {
              weaponClassArgs,
              elementArgs: {
                awaken: false,
                elementAttack: 'up'
              }
            }
          );
          const sword = calculateDamage(
            {
              ...soulbreaker,
              weaponMultipliers: {
                switchAxeMode: 'sword'
              }
            },
            rathianMonsterArgs,
            {
              weaponClassArgs,
              elementArgs: {
                awaken: false,
                elementAttack: 'up'
              }
            }
          );

          expect(axe[0].totalDamage).toBe(expectedAxeDmg);
          expect(sword[0].totalDamage).toBe(expectedSwordDmg);
        });
        it('Awaken, No Element Attack Up', () => {
          const expectedAxeDmg = 129;
          const expectedSwordDmg = 85;
          const axe = calculateDamage(
            {
              ...soulbreaker,
              weaponMultipliers: {
                switchAxeMode: 'axe'
              }
            },
            rathianMonsterArgs,
            {
              weaponClassArgs,
              elementArgs: {
                awaken: true,
                elementAttack: 'none'
              }
            }
          );
          const sword = calculateDamage(
            {
              ...soulbreaker,
              weaponMultipliers: {
                switchAxeMode: 'sword'
              }
            },
            rathianMonsterArgs,
            {
              weaponClassArgs,
              elementArgs: {
                awaken: true,
                elementAttack: 'none'
              }
            }
          );

          expect(axe[0].totalDamage).toBe(expectedAxeDmg);
          expect(sword[0].totalDamage).toBe(expectedSwordDmg);
        });
        it('Awaken, Element Attack Up', () => {
          const expectedAxeDmg = 132;
          const expectedSwordDmg = 87;
          const axe = calculateDamage(
            {
              ...soulbreaker,
              weaponMultipliers: {
                switchAxeMode: 'axe'
              }
            },
            rathianMonsterArgs,
            {
              weaponClassArgs,
              elementArgs: {
                awaken: true,
                elementAttack: 'up'
              }
            }
          );
          const sword = calculateDamage(
            {
              ...soulbreaker,
              weaponMultipliers: {
                switchAxeMode: 'sword'
              }
            },
            rathianMonsterArgs,
            {
              weaponClassArgs,
              elementArgs: {
                awaken: true,
                elementAttack: 'up'
              }
            }
          );

          expect(axe[0].totalDamage).toBe(expectedAxeDmg);
          expect(sword[0].totalDamage).toBe(expectedSwordDmg);
        });
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
              weaponMultipliers:
                {} as SwordAndShieldDamageArgs['weaponMultipliers']
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
