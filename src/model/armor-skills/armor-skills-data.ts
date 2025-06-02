import { deepFreeze } from '../../utils';
import { SkillGroup } from './enum';
import type { SkillTree } from './types';

export const SkillTreesData = [
  deepFreeze<SkillTree>({
    key: 'sharpness',
    name: 'Sharpness',
    description:
      'Doubles or halves the rate at which your weapon loses Sharpness.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'sharpness',
        skillName: 'Razor Sharp',
        pointThreshold: 10,
        skillDescription: 'Halves the rate at which your weapon loses Sharpness'
      },
      {
        key: 'sharpness',
        skillName: 'Blunt Edge',
        pointThreshold: -10,
        skillDescription:
          'Doubles the rate at which your weapon loses Sharpness'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'handicraft',
    name: 'Handicraft',
    description: "Increases your weapon's Sharpness Level.",
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'handicraft',
        skillName: 'Sharpness +1',
        pointThreshold: 15
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'fencing',
    name: 'Fencing',
    description: 'Prevents your attacks from being deflected.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'fencing',
        skillName: "Mind's Eye",
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'recoil',
    name: 'Recoil',
    description: 'Bowgun recoil is reduced or increased.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'recoil',
        skillName: 'Recoil Down +1',
        pointThreshold: 10,
        skillDescription: 'Bowgun recoil is reduced.'
      },
      {
        key: 'recoil',
        skillName: 'Recoil Down +2',
        pointThreshold: 15,
        skillDescription: 'Bowgun recoil is reduced further.'
      },
      {
        key: 'recoil',
        skillName: 'Recoil Down +3',
        pointThreshold: 20,
        skillDescription: 'Bowgun recoil is reduced even greater.'
      },
      {
        key: 'recoil',
        skillName: 'Recoil Down -1',
        pointThreshold: -10,
        skillDescription: 'Bowgun recoil is increased.'
      },
      {
        key: 'recoil',
        skillName: 'Recoil Down -2',
        pointThreshold: -15,
        skillDescription: 'Bowgun recoil is increased further.'
      },
      {
        key: 'recoil',
        skillName: 'Recoil Down -3',
        pointThreshold: -20,
        skillDescription: 'Bowgun recoil is increased even greater.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'normals_up',
    name: 'NormalS Up',
    description: 'Increases the damage of Normal S.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'normals_up',
        skillName: 'Normal S Boost',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'pierces_up',
    name: 'PierceS Up',
    description: 'Increases the damage of Pierce S.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'pierces_up',
        skillName: 'Pierce S Boost',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'pellets_up',
    name: 'PelletS Up',
    description: 'Increases the damage of Pellet S.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'pellets_up',
        skillName: 'Pellet S Boost',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'normal_s+',
    name: 'Normal S+',
    description: 'Allows a bowgun to fire all Normal S levels.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'normal_s+',
        skillName: 'Normal S All Up',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'pierce_s+',
    name: 'Pierce S+',
    description: 'Allows a bowgun to fire all or Lv1 Pierce S.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'pierce_s+',
        skillName: 'Pierce S Lv1 Up',
        pointThreshold: 10,
        skillDescription: 'Allows a bowgun to fire Pierce S Lv1.'
      },
      {
        key: 'pierce_s+',
        skillName: 'Pierce S All Up',
        pointThreshold: 15,
        skillDescription: 'Allows a bowgun to fire all Pierce S level.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'status',
    name: 'Status',
    description:
      'Increases or decreases the potency of Abnormal Status attacks.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'status',
        skillName: 'Status Atk Up',
        pointThreshold: 10,
        skillDescription: 'Increases the potency of Abnormal Status attacks.'
      },
      {
        key: 'status',
        skillName: 'Status Atk Down',
        pointThreshold: -10,
        skillDescription: 'Decreases the potency of Abnormal Status attacks.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'elemental',
    name: 'Elemental',
    description: 'Increases or decreases the power of Elemental attacks.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'elemental',
        skillName: 'Element Atk Up',
        pointThreshold: 10,
        skillDescription: 'Increases the power of Elemental attacks.'
      },
      {
        key: 'elemental',
        skillName: 'Element Atk Down',
        pointThreshold: -10,
        skillDescription: 'Decreases the power of Elemental attacks.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'hearing',
    name: 'Hearing',
    description: 'Unaffected by some or all monster roars.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'hearing',
        skillName: 'Earplugs',
        pointThreshold: 10,
        skillDescription:
          'Unaffected by some monster roars (anything besides Elder Dragons, Gigginox, Deviljho, and Diablos).'
      },
      {
        key: 'hearing',
        skillName: 'HG Earplugs',
        pointThreshold: 15,
        skillDescription: 'Unaffected by all monster roars.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'fate',
    name: 'Fate',
    description:
      'Chance of increasing or decreasing the number of Reward Items received at the end of a Quest.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'fate',
        skillName: 'Good Luck',
        pointThreshold: 10,
        skillDescription:
          'Sometimes increases the number of Reward Items received at the end of a Quest.'
      },
      {
        key: 'fate',
        skillName: 'Great Luck',
        pointThreshold: 15,
        skillDescription:
          'Often increases the number of Reward Items received at the end of a Quest.'
      },
      {
        key: 'fate',
        skillName: 'Bad Luck',
        pointThreshold: -10,
        skillDescription:
          'Sometimes decreases the number of Reward Items received at the end of a Quest.'
      },
      {
        key: 'fate',
        skillName: 'Horrible Luck',
        pointThreshold: -15,
        skillDescription:
          'Often decreases the number of Reward Items received at the end of a Quest.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'stamina',
    name: 'Stamina',
    description:
      'Slows down or Speeds up stamina depletion for actions other than evasion and blocking.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'stamina',
        skillName: 'Marathon Runner',
        pointThreshold: 10,
        skillDescription:
          'Slows down Stamina depletion for actions other than evasion and blocking.'
      },
      {
        key: 'stamina',
        skillName: 'Short Sprinter',
        pointThreshold: -10,
        skillDescription:
          'Speeds up Stamina depletion for actions other than evasion and blocking.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'loading',
    name: 'Loading',
    description: 'Increases the loadable amount of all usable ammo by one.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'loading',
        skillName: 'Load Up',
        pointThreshold: 15
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'carving',
    name: 'Carving',
    description:
      'Prevents knockbacks from everything other than Wind Pressure while carving.  Higher levels sometimes boosts number of carving chances.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'carving',
        skillName: 'Carving Pro',
        pointThreshold: 10,
        skillDescription:
          'Prevents knockbacks from everything other than Wind Pressure while carving.'
      },
      {
        key: 'carving',
        skillName: 'Carving Master',
        pointThreshold: 15,
        skillDescription:
          'Grants Carving Pro effects and sometimes boosts number of carving chances.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'evade_dist',
    name: 'Evade Dist',
    description: 'Increases evasion distance.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'evade_dist',
        skillName: 'Evasion Up',
        pointThreshold: 15
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'tranquilzr',
    name: 'Tranquilzr',
    description:
      'Rewards an additional Capture Reward Item for capturing a monster (no additional item for capturing more monsters of the same type).',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'tranquilzr',
        skillName: 'Capture Expert',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'fastcharge',
    name: 'FastCharge',
    description:
      'Decreases or increases charging time for charge attacks (Greatswords and Hammers) and gauges (Long Swords  and Switch Axes).',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'fastcharge',

        skillName: 'Focus',
        pointThreshold: 10,
        skillDescription:
          'Decreases charging time for charge attacks (Greatswords and Hammers) and gauges (Long Swords and Switch Axes).'
      },
      {
        key: 'fastcharge',

        skillName: 'Distraction',
        pointThreshold: -10,
        skillDescription:
          'Increases charging time for charge attacks charge attacks (Greatswords and Hammers) and gauges (Long Swords and Switch Axes).'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'punishdraw',
    name: 'PunishDraw',
    description: 'Grants the ability to stun (KO) monsters with draw attacks.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'punishdraw',
        skillName: 'Punishing Draw',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'freeelemnt',
    name: 'FreeElemnt',
    description:
      "Releases the latent elemental properties in weapons that don't have elements.",
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'freeelemnt',
        skillName: 'Awaken',
        pointThreshold: 15
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'rapid_fire',
    name: 'Rapid Fire',
    description: 'Allows one extra shot to be fired while rapid firing.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'rapid_fire',
        skillName: 'Bonus Shot',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'poison',
    name: 'Poison',
    description: 'Prevents or doubles the damage received from poison.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'poison',
        skillName: 'Negate Poison',
        pointThreshold: 10,
        skillDescription: 'Prevents poison.'
      },
      {
        key: 'poison',
        skillName: 'Double Poison',
        pointThreshold: -10,
        skillDescription: 'Doubles the damage received from poison.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'health',
    name: 'Health',
    description: 'Increases or decreases maximum Health.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'health',
        skillName: 'Health +20',
        pointThreshold: 10,
        skillDescription: 'Increases maximum Health by 20.'
      },
      {
        key: 'health',
        skillName: 'Health +50',
        pointThreshold: 15,
        skillDescription: 'Increases maximum Health by 50.'
      },
      {
        key: 'health',
        skillName: 'Health -10',
        pointThreshold: -10,
        skillDescription: 'Decreases maximum Health by 10.'
      },
      {
        key: 'health',
        skillName: 'Health -30',
        pointThreshold: -15,
        skillDescription: 'Decreases maximum Health by 30.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'rec_speed',
    name: 'Rec Speed',
    description:
      'Increases or decreases recovery speed from temporary damage (the red portion of the Health Gauge).',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'rec_speed',
        skillName: 'Recovery Spd +1',
        pointThreshold: 10,
        skillDescription:
          'Speeds recovery from temporary damage (the red part of the Health Gauge).'
      },
      {
        key: 'rec_speed',
        skillName: 'Recovery Spd +2',
        pointThreshold: 15,
        skillDescription:
          'Greatly speeds recovery from temporary damage (the red portion of the Health Gauge).'
      },
      {
        key: 'rec_speed',
        skillName: 'Recovery Spd -1',
        pointThreshold: -10,
        skillDescription:
          'Slows recovery from temporary damage (the red portion of the Health Gauge).'
      },
      {
        key: 'rec_speed',
        skillName: 'Recovery Spd -2',
        pointThreshold: -15,
        skillDescription:
          'Greatly slows recovery from temporary damage (the red portion of the Health Gauge).'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'expert',
    name: 'Expert',
    description:
      'Increases or decreases Affinity (chance to deal either 25% more or 25% less damage with a weapon attack).',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'expert',
        skillName: 'Critical Eye +1',
        pointThreshold: 10,
        skillDescription: 'Increases Affinity by 10% (2.5% effective damage).'
      },
      {
        key: 'expert',
        skillName: 'Critical Eye +2',
        pointThreshold: 15,
        skillDescription: 'Increases Affinity by 20% (5% effective damage).'
      },
      {
        key: 'expert',
        skillName: 'Critical Eye +3',
        pointThreshold: 20,
        skillDescription: 'Increases Affinity by 30% (7.5% effective damage).'
      },
      {
        key: 'expert',
        skillName: 'Critical Eye -1',
        pointThreshold: -10,
        skillDescription: 'Decreases Affinity by 5% (-1.25% effective damage).'
      },
      {
        key: 'expert',
        skillName: 'Critical Eye -2',
        pointThreshold: -15,
        skillDescription: 'Decreases Affinity by 10% (-2.5% effective damage).'
      },
      {
        key: 'expert',
        skillName: 'Critical Eye -3',
        pointThreshold: -20,
        skillDescription: 'Decreases Affinity by 15% (-3.75% effective damage).'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'sharpener',
    name: 'Sharpener',
    description: 'Weapons are sharpened much faster or much longer.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'sharpener',
        skillName: 'Speed Sharpening',
        pointThreshold: 10,
        skillDescription: 'Weapons are sharpened much faster.'
      },
      {
        key: 'sharpener',
        skillName: 'Slow Sharpening',
        pointThreshold: -10,
        skillDescription: 'Weapons take longer to sharpen.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'guard',
    name: 'Guard',
    description:
      'Decrease or increases knockback when blocking attacks, and decreases or increases stamina loss (and damage taken) when blocking heavier attacks.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'guard',
        skillName: 'Guard +1',
        pointThreshold: 10,
        skillDescription:
          'Decreases knockback when blocking attacks, and decreases stamina loss (and damage taken) when blocking heavier attacks.'
      },
      {
        key: 'guard',
        skillName: 'Guard +2',
        pointThreshold: 15,
        skillDescription:
          'Greatly decreases knockback when blocking attacks, and greatly decreases stamina loss (and damage taken) when blocking heavier attacks.'
      },
      {
        key: 'guard',
        skillName: 'Guard -1',
        pointThreshold: -10,
        skillDescription:
          'Increases knockback when blocking attacks, and increases stamina loss when blocking heavier attacks.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'guard_up',
    name: 'Guard Up',
    description:
      "Causes previously unblockable attacks to become blockable: Gobul's Water Vortex, Gigginox's Poison Body Slam, Uragaan's Sleep Cloud, Laguiacrus' Massive Electric Discharge, Agnaktor's Firebeam, Ceadeus' Water Blast and Alatreon's Fireball.",
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'guard_up',
        skillName: 'Guard Boost',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'reload_spd',
    name: 'Reload Spd',
    description: 'Increases or decreases Bowgun reloading speed.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'reload_spd',
        skillName: 'Reload Speed +1',
        pointThreshold: 10,
        skillDescription: 'Bowgun reloading speed increases 1 level.'
      },
      {
        key: 'reload_spd',
        skillName: 'Reload Speed +2',
        pointThreshold: 15,
        skillDescription: 'Bowgun reloading speed increases 2 levels.'
      },
      {
        key: 'reload_spd',
        skillName: 'Reload Speed +3',
        pointThreshold: 20,
        skillDescription: 'Bowgun reloading speed increases 3 levels.'
      },
      {
        key: 'reload_spd',
        skillName: 'Reload Speed -1',
        pointThreshold: -10,
        skillDescription: 'Bowgun reloading speed decreases 1 level.'
      },
      {
        key: 'reload_spd',
        skillName: 'Reload Speed -2',
        pointThreshold: -15,
        skillDescription: 'Bowgun reloading speed decreases 2 levels.'
      },
      {
        key: 'reload_spd',
        skillName: 'Reload Speed -3',
        pointThreshold: -20,
        skillDescription: 'Bowgun reloading speed decreases 3 levels.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'pellet_s+',
    name: 'Pellet S+',
    description: 'Allows a bowgun to fire all or Lv1 Pellet S.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'pellet_s+',
        skillName: 'Pellet S Lv1 Up',
        pointThreshold: 10,
        skillDescription: 'Allows a bowgun to fire Pellet S Lv1.'
      },
      {
        key: 'pellet_s+',
        skillName: 'Pellet S All Up',
        pointThreshold: 15,
        skillDescription: 'Allows a bowgun to fire all Pellet S levels.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'crag_s+',
    name: 'Crag S+',
    description: 'Allows a bowgun to fire all or Lv1 Crag S.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'crag_s+',
        skillName: 'Crag S Lv1 Up',
        pointThreshold: 10,
        skillDescription: 'Allows a bowgun to fire Crag S Lv1.'
      },
      {
        key: 'crag_s+',
        skillName: 'Crag S All Up',
        pointThreshold: 15,
        skillDescription: 'Allows a bowgun to fire all Crag S levels.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'clust_s+',
    name: 'Clust S+',
    description: 'Allows a bowgun to fire all or Lv1 Clust S.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'clust_s+',
        skillName: 'Clust S Lv1 Up',
        pointThreshold: 10,
        skillDescription: 'Allows a bowgun to fire Clust S Lv1.'
      },
      {
        key: 'clust_s+',
        skillName: 'Clust S All Up',
        pointThreshold: 15,
        skillDescription: 'Allows a bowgun to fire all Clust S levels.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'bomb_boost',
    name: 'Bomb Boost',
    description: 'Bomb damage is increased. Bomb Combinations are 100%.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'bomb_boost',
        skillName: 'Bombardier',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'hunger',
    name: 'Hunger',
    description:
      'Negates, halves or increases maximum Stamina depletion speed.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'hunger',
        skillName: 'Halve Hunger',
        pointThreshold: 10,
        skillDescription: 'Halves maximum Stamina depletion speed.'
      },
      {
        key: 'hunger',
        skillName: 'Negate Hunger',
        pointThreshold: 15,
        skillDescription: 'Negates maximum Stamina depletion.'
      },
      {
        key: 'hunger',
        skillName: 'Raise Hunger',
        pointThreshold: -10,
        skillDescription: 'Increases maximum Stamina depletion speed.'
      },
      {
        key: 'hunger',
        skillName: 'Double Hunger',
        pointThreshold: -15,
        skillDescription: 'Greatly increases maximum Stamina depletion speed.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'attack',
    name: 'Attack',
    description: 'Increases or decreases Attack.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'attack',
        skillName: 'Attack Up (S)',
        pointThreshold: 10,
        skillDescription: 'Slightly increases Attack.'
      },
      {
        key: 'attack',
        skillName: 'Attack Up (M)',
        pointThreshold: 15,
        skillDescription: 'Increases Attack.'
      },
      {
        key: 'attack',
        skillName: 'Attack Up (L)',
        pointThreshold: 20,
        skillDescription: 'Greatly increases Attack.'
      },
      {
        key: 'attack',
        skillName: 'Attack Down (S)',
        pointThreshold: -10,
        skillDescription: 'Slightly decreases Attack.'
      },
      {
        key: 'attack',
        skillName: 'Attack Down (M)',
        pointThreshold: -15,
        skillDescription: 'Decreases Attack.'
      },
      {
        key: 'attack',
        skillName: 'Attack Down (L)',
        pointThreshold: -20,
        skillDescription: 'Greatly decreases Attack.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'defense',
    name: 'Defense',
    description: 'Increases or decreases Defense.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'defense',
        skillName: 'Defense Up (S)',
        pointThreshold: 10,
        skillDescription: 'Slightly increases Defense.'
      },
      {
        key: 'defense',
        skillName: 'Defense Up (M)',
        pointThreshold: 15,
        skillDescription: 'Increases Defense.'
      },
      {
        key: 'defense',
        skillName: 'Defense Up (L)',
        pointThreshold: 20,
        skillDescription: 'Greatly increases Defense.'
      },
      {
        key: 'defense',
        skillName: 'Defense Down (S)',
        pointThreshold: -10,
        skillDescription: 'Slightly decreases Defense.'
      },
      {
        key: 'defense',
        skillName: 'Defense Down (M)',
        pointThreshold: -15,
        skillDescription: 'Decreases Defense.'
      },
      {
        key: 'defense',
        skillName: 'Defense Down (L)',
        pointThreshold: -20,
        skillDescription: 'Greatly decreases Defense.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'protection',
    name: 'Protection',
    description: '25% chance of attacks doing 30% less or more damage.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'protection',
        skillName: 'Divine Blessing',
        pointThreshold: 10,
        skillDescription: '25% chance of attacks doing 30% less damage.'
      },
      {
        key: 'protection',
        skillName: 'Demonic Blessing',
        pointThreshold: -10,
        skillDescription: '25% chance of attacks doing 30% more damage.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'wide-range',
    name: 'Wide-Range',
    description: 'Health & status Items used also affect nearby party members.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'wide-range',
        skillName: 'Wide-Range +1',
        pointThreshold: 10,
        skillDescription:
          'Health & status Items used also affect nearby party members by a small amount.'
      },
      {
        key: 'wide-range',
        skillName: 'Wide-Range +2',
        pointThreshold: 20,
        skillDescription:
          'Health & status Items used also affect nearby party members.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'wind_res',
    name: 'Wind Res',
    description: 'Negates all or a certain amount of Wind Pressure.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'wind_res',
        skillName: 'Windproof (Lo)',
        pointThreshold: 10,
        skillDescription: 'Negates a certain amount of Wind Pressure.'
      },
      {
        key: 'wind_res',
        skillName: 'Windproof (Hi)',
        pointThreshold: 15,
        skillDescription: 'Negates all Wind Pressure.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'gathering',
    name: 'Gathering',
    description: 'Chance to gather more or less resources in a single spot.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'gathering',
        skillName: 'Gathering +1',
        pointThreshold: 10,
        skillDescription: 'Chance to gather more resources in a single spot.'
      },
      {
        key: 'gathering',
        skillName: 'Gathering +2',
        pointThreshold: 15,
        skillDescription:
          'Higher chance to gather more resources in a single spot.'
      },
      {
        key: 'gathering',
        skillName: 'Gathering -1',
        pointThreshold: -10,
        skillDescription: 'Chance to gather less resources in a single spot.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'spd_gather',
    name: 'Spd Gather',
    description: 'Gathering speed is increased.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'spd_gather',
        skillName: 'Speed Gatherer',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'psychic',
    name: 'Psychic',
    description:
      'Marked monsters display additional information on the map, such as species and rage.  Higher levels automatically marks monster for the hunter.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'psychic',
        skillName: 'Detect',
        pointThreshold: 10,
        skillDescription:
          'Marked monsters display additional information on the map, such as species and rage.'
      },
      {
        key: 'psychic',
        skillName: 'Autotracker',
        pointThreshold: 15,
        skillDescription: 'Activates Detect without having to mark the monster.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'rec_level',
    name: 'Rec Level',
    description:
      'Increases or decreases the efficiency of Health recovery items.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'rec_level',
        skillName: 'Recovery Up',
        pointThreshold: 10,
        skillDescription: 'Increases the efficiency of Health recovery items.'
      },
      {
        key: 'rec_level',
        skillName: 'Recovery Down',
        pointThreshold: -10,
        skillDescription: 'Decreases the efficiency of Health recovery items.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'evasion',
    name: 'Evasion',
    description: 'Extends the invulnerability period when evading.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'evasion',
        skillName: 'Evasion +1',
        pointThreshold: 10
      },
      {
        key: 'evasion',
        skillName: 'Evasion +2',
        pointThreshold: 15
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'potential',
    name: 'Potential',
    description:
      'Increases or decreases Defense when Health is below 40%.  Higher levels increases attack power when Health is below 40%.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'potential',
        skillName: 'Adrenaline +1',
        pointThreshold: 10,
        skillDescription: 'Greatly increases Defense when Health is below 40%.'
      },
      {
        key: 'potential',
        skillName: 'Adrenaline +2',
        pointThreshold: 15,
        skillDescription:
          'Greatly increases Attack and Defense when Health is below 40%.'
      },
      {
        key: 'potential',
        skillName: 'Worrywart',
        pointThreshold: -10,
        skillDescription:
          'Decreases Defense and Attack power when Health is below 40%.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'eating',
    name: 'Eating',
    description:
      'Increases or decreases meat-eating speed.  Higher levels increase item consuming speed as well.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'eating',
        skillName: 'Speed Eating +1',
        pointThreshold: 10,
        skillDescription: 'Increases meat-eating speed.'
      },
      {
        key: 'eating',
        skillName: 'Speed Eating +2',
        pointThreshold: 15,
        skillDescription: 'Increases meat and item consuming speed.'
      },
      {
        key: 'eating',
        skillName: 'Slow Eater',
        pointThreshold: -10,
        skillDescription: 'Decreases meat-eating speed.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'tremor_res',
    name: 'Tremor Res',
    description: 'Prevents staggering from tremors created by large monsters.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'tremor_res',
        skillName: 'Tremor-Proof',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'crit_draw',
    name: 'Crit Draw',
    description: 'Guarantees all draw attacks will be critical.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'crit_draw',
        skillName: 'Critical Draw',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'constitutn',
    name: 'Constitutn',
    description:
      'Slows down or speeds up Stamina depletion while evading and blocking.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'constitutn',
        skillName: 'Constitution +1',
        pointThreshold: 10,
        skillDescription:
          'Slows down Stamina depletion while evading and blocking.'
      },
      {
        key: 'constitutn',
        skillName: 'Constitution +2',
        pointThreshold: 15,
        skillDescription:
          'Greatly slows down Stamina depletion while evading and blocking.'
      },
      {
        key: 'constitutn',
        skillName: 'Constitution -1',
        pointThreshold: -10,
        skillDescription:
          'Speeds up Stamina depletion while evading and blocking.'
      },
      {
        key: 'constitutn',
        skillName: 'Constitution -2',
        pointThreshold: -15,
        skillDescription:
          'Greatly speeds up Stamina depletion while evading and blocking.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'swimming',
    name: 'Swimming',
    description: 'Increases or descreases your movement speed in water.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'swimming',
        skillName: 'Olympic Swimmer',
        pointThreshold: 10,
        skillDescription: 'Increases your movement speed in water.'
      },
      {
        key: 'swimming',
        skillName: 'Doggy Paddler',
        pointThreshold: -10,
        skillDescription: 'Decreases your movement speed in water.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'dungmaster',
    name: 'Dungmaster',
    description:
      'Increases Dung Bomb efficiency, and raises their Combo success rate to 100%.',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'dungmaster',
        skillName: 'Dung Bomb Expert',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'flame_aura',
    name: 'Flame Aura',
    description:
      "Causes monsters to react as if you are carrying a Torch, even when you aren't.",
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'flame_aura',
        skillName: 'Flaming Aura',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'paralysis',
    name: 'Paralysis',
    description: 'Prevents or doubles the duration of paralysis.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'paralysis',
        skillName: 'Negate Paralysis',
        pointThreshold: 10,
        skillDescription: 'Prevents paralysis.'
      },
      {
        key: 'paralysis',
        skillName: 'Double Paralysis',
        pointThreshold: -10,
        skillDescription: 'Doubles the duration of paralysis.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'sleep',
    name: 'Sleep',
    description: 'Prevents or doubles the duration of sleep.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'sleep',
        skillName: 'Negate Sleep',
        pointThreshold: 10,
        skillDescription: 'Prevents sleep.'
      },
      {
        key: 'sleep',
        skillName: 'Double Sleep',
        pointThreshold: -10,
        skillDescription: 'Doubles the duration of sleep.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'stun',
    name: 'Stun',
    description:
      'Prevents or reduces the likelihood of being stunned or make it harder to recover from being stunned.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'stun',
        skillName: 'Halve Stun',
        pointThreshold: 10,
        skillDescription: 'Reduces the likelihood of being stunned by 50%.'
      },
      {
        key: 'stun',
        skillName: 'Negate Stun',
        pointThreshold: 15,
        skillDescription: 'Prevents stun.'
      },
      {
        key: 'stun',
        skillName: 'Double Stun',
        pointThreshold: -10,
        skillDescription: 'Makes it harder to recover from being stunned.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'mud/snow',
    name: 'Mud/Snow',
    description: 'Prevents Snowman and Muddy conditions.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'mud/snow',
        skillName: 'Negate Mud/Snow',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'sense',
    name: 'Sense',
    description:
      'Monsters are less likely or more likely to target you in a group.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'sense',
        skillName: 'Sneak',
        pointThreshold: 10,
        skillDescription: 'Monsters are less likely to target you in a group.'
      },
      {
        key: 'sense',
        skillName: 'Taunt',
        pointThreshold: -10,
        skillDescription: 'Monsters are more likely to target you in a group.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'gluttony',
    name: 'Gluttony',
    description: 'Increases efficiency of items that raise maximum Stamina.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'gluttony',
        skillName: 'Gourmand',
        pointThreshold: 10,
        skillDescription:
          'Sometimes increases the effeciency of items that raise maximum Stamina.'
      },
      {
        key: 'gluttony',
        skillName: 'Scavenger',
        pointThreshold: 15,
        skillDescription:
          'Increases efficiency of items that raise maximum Stamina.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'anti-theft',
    name: 'Anti-Theft',
    description: 'Prevents item theft.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'anti-theft',
        skillName: 'Anti-Theft',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'transportr',
    name: 'Transportr',
    description: 'Travel faster while carrying eggs or powderstones.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'transportr',
        skillName: 'Pro Transporter',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'fire_res',
    name: 'Fire Res',
    description: 'Increases or decreases Fire resistance.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'fire_res',
        skillName: 'Fire Res +10',
        pointThreshold: 10,
        skillDescription: 'Increases Fire resistance by 10.'
      },
      {
        key: 'fire_res',
        skillName: 'Fire Res +15',
        pointThreshold: 15,
        skillDescription: 'Increases Fire resistance by 15.'
      },
      {
        key: 'fire_res',
        skillName: 'Fire Res +20',
        pointThreshold: 20,
        skillDescription: 'Increases Fire resistance by 20.'
      },
      {
        key: 'fire_res',
        skillName: 'Fire Res -10',
        pointThreshold: -10,
        skillDescription: 'Decreases Fire resistance by 10.'
      },
      {
        key: 'fire_res',
        skillName: 'Fire Res -15',
        pointThreshold: -15,
        skillDescription: 'Decreases Fire resistance by 15.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'water_res',
    name: 'Water Res',
    description: 'Increases or decreases Water resistance.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'water_res',
        skillName: 'Water Res +10',
        pointThreshold: 10,
        skillDescription: 'Increases Water resistance by 10.'
      },
      {
        key: 'water_res',
        skillName: 'Water Res +15',
        pointThreshold: 15,
        skillDescription: 'Increases Water resistance by 15.'
      },
      {
        key: 'water_res',
        skillName: 'Water Res +20',
        pointThreshold: 20,
        skillDescription: 'Increases Water resistance by 20.'
      },
      {
        key: 'water_res',
        skillName: 'Water Res -10',
        pointThreshold: -10,
        skillDescription: 'Decreases Water resistance by 10.'
      },
      {
        key: 'water_res',
        skillName: 'Water Res -15',
        pointThreshold: -15,
        skillDescription: 'Decreases Water resistance by 15.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'thunderres',
    name: 'ThunderRes',
    description: 'Increases or decreases Thunder resistance.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'thunderres',
        skillName: 'Thunder Res +10',
        pointThreshold: 10,
        skillDescription: 'Increases Thunder resistance by 10.'
      },
      {
        key: 'thunderres',
        skillName: 'Thunder Res +15',
        pointThreshold: 15,
        skillDescription: 'Increases Thunder resistance by 15.'
      },
      {
        key: 'thunderres',
        skillName: 'Thunder Res +20',
        pointThreshold: 20,
        skillDescription: 'Increases Thunder resistance by 20.'
      },
      {
        key: 'thunderres',
        skillName: 'Thunder Res -10',
        pointThreshold: -10,
        skillDescription: 'Decreases Thunder resistance by 10.'
      },
      {
        key: 'thunderres',
        skillName: 'Thunder Res -15',
        pointThreshold: -15,
        skillDescription: 'Decreases Thunder resistance by 15.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'ice_res',
    name: 'Ice Res',
    description: 'Increases or decreases Ice resistance.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'ice_res',
        skillName: 'Ice Res +10',
        pointThreshold: 10,
        skillDescription: 'Increases Ice resistance by 10.'
      },
      {
        key: 'ice_res',
        skillName: 'Ice Res +15',
        pointThreshold: 15,
        skillDescription: 'Increases Ice resistance by 15.'
      },
      {
        key: 'ice_res',
        skillName: 'Ice Res +20',
        pointThreshold: 20,
        skillDescription: 'Increases Ice resistance by 20.'
      },
      {
        key: 'ice_res',
        skillName: 'Ice Res -10',
        pointThreshold: -10,
        skillDescription: 'Decreases Ice resistance by 10.'
      },
      {
        key: 'ice_res',
        skillName: 'Ice Res -15',
        pointThreshold: -15,
        skillDescription: 'Decreases Ice resistance by 15.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'dragon_res',
    name: 'Dragon Res',
    description: 'Increases or decreases Dragon resistance.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'dragon_res',
        skillName: 'Dragon Res +10',
        pointThreshold: 10,
        skillDescription: 'Increases Dragon resistance by 10.'
      },
      {
        key: 'dragon_res',
        skillName: 'Dragon Res +15',
        pointThreshold: 15,
        skillDescription: 'Increases Dragon resistance by 15.'
      },
      {
        key: 'dragon_res',
        skillName: 'Dragon Res +20',
        pointThreshold: 20,
        skillDescription: 'Increases Dragon resistance by 20.'
      },
      {
        key: 'dragon_res',
        skillName: 'Dragon Res -10',
        pointThreshold: -10,
        skillDescription: 'Decreases Dragon resistance by 10.'
      },
      {
        key: 'dragon_res',
        skillName: 'Dragon Res -15',
        pointThreshold: -15,
        skillDescription: 'Decreases Dragon resistance by 15.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'heat_res',
    name: 'Heat Res',
    description:
      'Negates or increases damage caused by heat.  Higher levels negates damage received from lava.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'heat_res',
        skillName: 'Heat Cancel (Lo)',
        pointThreshold: 10,
        skillDescription: 'Negates a certain amount of heat.'
      },
      {
        key: 'heat_res',
        skillName: 'Heat Cancel (Hi)',
        pointThreshold: 15,
        skillDescription:
          'Negates all heat, as well as damage received from lava.'
      },
      {
        key: 'heat_res',
        skillName: 'Heat Surge (Lo)',
        pointThreshold: -10,
        skillDescription: 'Increases damage incurred from heat.'
      },
      {
        key: 'heat_res',
        skillName: 'Heat Surge (Hi)',
        pointThreshold: -15,
        skillDescription: 'Greatly increases damage incurred from heat.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'cold_res',
    name: 'Cold Res',
    description:
      'Negates or all or a certain amount of cold.  Negative levels increases the speed at which your maximum Stamina depletes from cold.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'cold_res',
        skillName: 'Cold Cancel (Lo)',
        pointThreshold: 10,
        skillDescription: 'Negates a certain amount of cold.'
      },
      {
        key: 'cold_res',
        skillName: 'Cold Cancel (Hi)',
        pointThreshold: 15,
        skillDescription: 'Negates all cold.'
      },
      {
        key: 'cold_res',
        skillName: 'Cold Surge (Lo)',
        pointThreshold: -10,
        skillDescription:
          'Increases the speed at which your maximum Stamina depletes from cold.'
      },
      {
        key: 'cold_res',
        skillName: 'Cold Surge (Hi)',
        pointThreshold: -15,
        skillDescription:
          'Greatly increases the speed at which your maximum Stamina depletes from cold.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'map',
    name: 'Map',
    description: 'Map is automatically available or never shown.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'map',
        skillName: 'Farsight',
        pointThreshold: 10,
        skillDescription: 'Map is automatically available.'
      },
      {
        key: 'map',
        skillName: 'Nearsight',
        pointThreshold: -10,
        skillDescription: 'Map is never shown.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'whim',
    name: 'Whim',
    description:
      'Chance of bugnets/pickaxes/horns breaking is reduced or increased.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'whim',
        skillName: "Spirit's Whim",
        pointThreshold: 10,
        skillDescription:
          'Chance of bugnets/pickaxes/horns breaking is reduced.'
      },
      {
        key: 'whim',
        skillName: 'Divine Whim',
        pointThreshold: 15,
        skillDescription:
          'Chance of bugnets/pickaxes/horns breaking is greatly reduced.'
      },
      {
        key: 'whim',
        skillName: "Spectre's Whim",
        pointThreshold: -10,
        skillDescription:
          'Chance of bugnets/pickaxes/horns breaking is increased.'
      },
      {
        key: 'whim',
        skillName: "Devil's Whim",
        pointThreshold: -15,
        skillDescription:
          'Chance of bugnets/pickaxes/horns breaking is greatly increased.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'fishing',
    name: 'Fishing',
    description:
      'Causes fish to always bite on the first cast. Raises the efficiency of bait items.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'fishing',
        skillName: 'Fishing Expert',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'combo_rate',
    name: 'Combo Rate',
    description: 'Increases or decreases your Combination success rate.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'combo_rate',
        skillName: 'Combination +15%',
        pointThreshold: 10,
        skillDescription: 'Increases your Combination success rate by 15%.'
      },
      {
        key: 'combo_rate',
        skillName: 'Combination +25%',
        pointThreshold: 15,
        skillDescription: 'Increases your Combination success rate by 25%.'
      },
      {
        key: 'combo_rate',
        skillName: 'Combination +45%',
        pointThreshold: 20,
        skillDescription: 'Increases your Combination success rate by 45%.'
      },
      {
        key: 'combo_rate',
        skillName: 'Combination -5%',
        pointThreshold: -10,
        skillDescription: 'Decreases your Combination success rate by 5%.'
      },
      {
        key: 'combo_rate',
        skillName: 'Combination -10%',
        pointThreshold: -15,
        skillDescription: 'Decreases your Combination success rate by 10%.'
      },
      {
        key: 'combo_rate',
        skillName: 'Combination -15%',
        pointThreshold: -20,
        skillDescription: 'Decreases your Combination success rate by 15%.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'combo_plus',
    name: 'Combo Plus',
    description:
      'Guarantees maximum possible Combination results with items such as Bowgun ammo.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'combo_plus',
        skillName: 'Combination Pro',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'lastingpwr',
    name: 'LastingPwr',
    description: 'Increases or decreases the effect time of certain items.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'lastingpwr',
        skillName: 'Item Use Up',
        pointThreshold: 10,
        skillDescription: 'Increases the effect time of certain items.'
      },
      {
        key: 'lastingpwr',
        skillName: 'Item Use Down',
        pointThreshold: -10,
        skillDescription: 'Decreases the effect time of certain items.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'precision',
    name: 'Precision',
    description: 'Decreases or increases Deviation while aiming.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'precision',
        skillName: 'Steadiness +1',
        pointThreshold: 10,
        skillDescription: 'Decreases Deviation while aiming.'
      },
      {
        key: 'precision',
        skillName: 'Steadiness +2',
        pointThreshold: 15,
        skillDescription: 'Greatly decreases Deviation while aiming.'
      },
      {
        key: 'precision',
        skillName: 'Steadiness -1',
        pointThreshold: -10,
        skillDescription: 'Increases Deviation while aiming.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'bbq',
    name: 'BBQ',
    description:
      'Grants the ability to swiftly and easily roast Well-done Steaks.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'bbq',
        skillName: 'BBQ Expert',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'speedsetup',
    name: 'SpeedSetup',
    description:
      'Speeds up trap and bomb setting time. Raises Trap Combinations to 100%.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'speedsetup',
        skillName: 'Trap Master',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'perception',
    name: 'Perception',
    description:
      'Monster icon on the map blinks when monsters are ready to be captured.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'perception',
        skillName: 'Capture Guru',
        pointThreshold: 10
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'oxygen',
    name: 'Oxygen',
    description: 'Slows down or speeds up depletion of the Oxygen Gauge.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'oxygen',
        skillName: 'Oxygen Up',
        pointThreshold: 10,
        skillDescription: 'Slows down depletion of the Oxygen Gauge.'
      },
      {
        key: 'oxygen',
        skillName: 'Oxygen Down',
        pointThreshold: -10,
        skillDescription: 'Speeds up depletion of the Oxygen Gauge.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'currentres',
    name: 'CurrentRes',
    description: 'Negates all or some water currents created by large monster.',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'currentres',
        skillName: 'Current Res (Lo)',
        pointThreshold: 10,
        skillDescription:
          'Negates some of the water currents created by large monsters.'
      },
      {
        key: 'currentres',
        skillName: 'Current Res (Hi)',
        pointThreshold: 15,
        skillDescription: 'Negates the water currents created by large monster.'
      }
    ]
  }),
  deepFreeze<SkillTree>({
    key: 'survivor',
    name: 'Survivor',
    description: 'Increases your Attack every time you fall in battle.',
    group: SkillGroup.A,
    armorSkills: [
      {
        key: 'survivor',
        skillName: 'Fortify',
        pointThreshold: 10
      }
    ],
    restricted: true
  }),
  deepFreeze<SkillTree>({
    key: 'blight_res',
    name: 'Blight Res',
    description:
      'Negates all elemental Blights (Fire, Water, Thunder, Ice, and Dragon).',
    group: SkillGroup.B,
    armorSkills: [
      {
        key: 'blight_res',
        skillName: 'Blightproof',
        pointThreshold: 10
      }
    ],
    restricted: true
  }),
  deepFreeze<SkillTree>({
    key: 'auto-guard',
    name: 'Auto-Guard',
    description:
      'Enables ability to automatically block attacks (when blocking is possible).',
    group: SkillGroup.C,
    armorSkills: [
      {
        key: 'auto-guard',
        skillName: 'Auto-Guard',
        pointThreshold: 10
      }
    ],
    restricted: true
  })
];
