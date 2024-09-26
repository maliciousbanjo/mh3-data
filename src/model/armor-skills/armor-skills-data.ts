import { SkillGroup, SkillTree } from './types';

export const SkillTreesData = Object.freeze<SkillTree[]>([
  {
    name: 'Sharpness',
    description:
      'Doubles or halves the rate at which your weapon loses Sharpness.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Razor Sharp',
        skillDescription: 'Halves the rate at which your weapon loses Sharpness'
      },
      {
        pointThreshold: -10,
        skillName: 'Blunt Edge',
        skillDescription:
          'Doubles the rate at which your weapon loses Sharpness'
      }
    ]
  },
  {
    name: 'Handicraft',
    description: "Increases your weapon's Sharpness Level.",
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 15,
        skillName: 'Sharpness +1'
      }
    ]
  },
  {
    name: 'Fencing',
    description: 'Prevents your attacks from being deflected.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: "Mind's Eye"
      }
    ]
  },
  {
    name: 'Recoil',
    description: 'Bowgun recoil is reduced or increased.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Recoil Down +1',
        skillDescription: 'Bowgun recoil is reduced.'
      },
      {
        pointThreshold: 15,
        skillName: 'Recoil Down +2',
        skillDescription: 'Bowgun recoil is reduced further.'
      },
      {
        pointThreshold: 20,
        skillName: 'Recoil Down +3',
        skillDescription: 'Bowgun recoil is reduced even greater.'
      },
      {
        pointThreshold: -10,
        skillName: 'Recoil Down -1',
        skillDescription: 'Bowgun recoil is increased.'
      },
      {
        pointThreshold: -15,
        skillName: 'Recoil Down -2',
        skillDescription: 'Bowgun recoil is increased further.'
      },
      {
        pointThreshold: -20,
        skillName: 'Recoil Down -3',
        skillDescription: 'Bowgun recoil is increased even greater.'
      }
    ]
  },
  {
    name: 'NormalS Up',
    description: 'Increases the damage of Normal S.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Normal S Boost'
      }
    ]
  },
  {
    name: 'PierceS Up',
    description: 'Increases the damage of Pierce S.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Pierce S Boost'
      }
    ]
  },
  {
    name: 'PelletS Up',
    description: 'Increases the damage of Pellet S.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Pellet S Boost'
      }
    ]
  },
  {
    name: 'Normal S+',
    description: 'Allows a bowgun to fire all Normal S levels.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Normal S All Up'
      }
    ]
  },
  {
    name: 'Pierce S+',
    description: 'Allows a bowgun to fire all or Lv1 Pierce S.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Pierce S Lv1 Up',
        skillDescription: 'Allows a bowgun to fire Pierce S Lv1.'
      },
      {
        pointThreshold: 15,
        skillName: 'Pierce S All Up',
        skillDescription: 'Allows a bowgun to fire all Pierce S level.'
      }
    ]
  },
  {
    name: 'Status',
    description:
      'Increases or decreases the potency of Abnormal Status attacks.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Status Atk Up',
        skillDescription: 'Increases the potency of Abnormal Status attacks.'
      },
      {
        pointThreshold: -10,
        skillName: 'Status Atk Down',
        skillDescription: 'Decreases the potency of Abnormal Status attacks.'
      }
    ]
  },
  {
    name: 'Elemental',
    description: 'Increases or decreases the power of Elemental attacks.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Element Atk Up',
        skillDescription: 'Increases the power of Elemental attacks.'
      },
      {
        pointThreshold: -10,
        skillName: 'Element Atk Down',
        skillDescription: 'Decreases the power of Elemental attacks.'
      }
    ]
  },
  {
    name: 'Hearing',
    description: 'Unaffected by some or all monster roars.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Earplugs',
        skillDescription:
          'Unaffected by some monster roars (anything besides Elder Dragons, Gigginox, Deviljho, and Diablos).'
      },
      {
        pointThreshold: 15,
        skillName: 'HG Earplugs',
        skillDescription: 'Unaffected by all monster roars.'
      }
    ]
  },
  {
    name: 'Fate',
    description:
      'Chance of increasing or decreasing the number of Reward Items received at the end of a Quest.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Good Luck',
        skillDescription:
          'Sometimes increases the number of Reward Items received at the end of a Quest.'
      },
      {
        pointThreshold: 15,
        skillName: 'Great Luck',
        skillDescription:
          'Often increases the number of Reward Items received at the end of a Quest.'
      },
      {
        pointThreshold: -10,
        skillName: 'Bad Luck',
        skillDescription:
          'Sometimes decreases the number of Reward Items received at the end of a Quest.'
      },
      {
        pointThreshold: -15,
        skillName: 'Horrible Luck',
        skillDescription:
          'Often decreases the number of Reward Items received at the end of a Quest.'
      }
    ]
  },
  {
    name: 'Stamina',
    description:
      'Slows down or Speeds up stamina depletion for actions other than evasion and blocking.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Marathon Runner',
        skillDescription:
          'Slows down Stamina depletion for actions other than evasion and blocking.'
      },
      {
        pointThreshold: -10,
        skillName: 'Short Sprinter',
        skillDescription:
          'Speeds up Stamina depletion for actions other than evasion and blocking.'
      }
    ]
  },
  {
    name: 'Loading',
    description: 'Increases the loadable amount of all usable ammo by one.',
    group: SkillGroup.A,
    armorSkills: [{ pointThreshold: 15, skillName: 'Load Up' }]
  },
  {
    name: 'Carving',
    description:
      'Prevents knockbacks from everything other than Wind Pressure while carving.  Higher levels sometimes boosts number of carving chances.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Carving Pro',
        skillDescription:
          'Prevents knockbacks from everything other than Wind Pressure while carving.'
      },
      {
        pointThreshold: 15,
        skillName: 'Carving Master',
        skillDescription:
          'Grants Carving Pro effects and sometimes boosts number of carving chances.'
      }
    ]
  },
  {
    name: 'Evade Dist',
    description: 'Increases evasion distance.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 15,
        skillName: 'Evasion Up'
      }
    ]
  },
  {
    name: 'Tranquilzr',
    description:
      'Rewards an additional Capture Reward Item for capturing a monster (no additional item for capturing more monsters of the same type).',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Capture Expert'
      }
    ]
  },
  {
    name: 'FastCharge',
    description:
      'Decreases or increases charging time for charge attacks (Greatswords and Hammers) and gauges (Long Swords  and Switch Axes).',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Focus',
        skillDescription:
          'Decreases charging time for charge attacks (Greatswords and Hammers) and gauges (Long Swords and Switch Axes).'
      },
      {
        pointThreshold: -10,
        skillName: 'Distraction',
        skillDescription:
          'Increases charging time for charge attacks charge attacks (Greatswords and Hammers) and gauges (Long Swords and Switch Axes).'
      }
    ]
  },
  {
    name: 'PunishDraw',
    description: 'Grants the ability to stun (KO) monsters with draw attacks.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Punishing Draw'
      }
    ]
  },
  {
    name: 'FreeElemnt',
    description:
      "Releases the latent elemental properties in weapons that don't have elements.",
    group: SkillGroup.A,
    armorSkills: [{ pointThreshold: 15, skillName: 'Awaken' }]
  },
  {
    name: 'Rapid Fire',
    description: 'Allows one extra shot to be fired while rapid firing.',
    group: SkillGroup.A,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Bonus Shot'
      }
    ]
  },
  {
    name: 'Poison',
    description: 'Prevents or doubles the damage received from poison.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Negate Poison',
        skillDescription: 'Prevents poison.'
      },
      {
        pointThreshold: -10,
        skillName: 'Double Poison',
        skillDescription: 'Doubles the damage received from poison.'
      }
    ]
  },
  {
    name: 'Health',
    description: 'Increases or decreases maximum Health.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Health +20',
        skillDescription: 'Increases maximum Health by 20.'
      },
      {
        pointThreshold: 15,
        skillName: 'Health +50',
        skillDescription: 'Increases maximum Health by 50.'
      },
      {
        pointThreshold: -10,
        skillName: 'Health -10',
        skillDescription: 'Decreases maximum Health by 10.'
      },
      {
        pointThreshold: -15,
        skillName: 'Health -30',
        skillDescription: 'Decreases maximum Health by 30.'
      }
    ]
  },
  {
    name: 'Rec Speed',
    description:
      'Increases or decreases recovery speed from temporary damage (the red portion of the Health Gauge).',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Recovery Spd +1',
        skillDescription:
          'Speeds recovery from temporary damage (the red part of the Health Gauge).'
      },
      {
        pointThreshold: 15,
        skillName: 'Recovery Spd +2',
        skillDescription:
          'Greatly speeds recovery from temporary damage (the red portion of the Health Gauge).'
      },
      {
        pointThreshold: -10,
        skillName: 'Recovery Spd -1',
        skillDescription:
          'Slows recovery from temporary damage (the red portion of the Health Gauge).'
      },
      {
        pointThreshold: -15,
        skillName: 'Recovery Spd -2',
        skillDescription:
          'Greatly slows recovery from temporary damage (the red portion of the Health Gauge).'
      }
    ]
  },
  {
    name: 'Expert',
    description:
      'Increases or decreases Affinity (chance to deal either 25% more or 25% less damage with a weapon attack).',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Critical Eye +1',
        skillDescription: 'Increases Affinity by 10% (2.5% effective damage).'
      },
      {
        pointThreshold: 15,
        skillName: 'Critical Eye +2',
        skillDescription: 'Increases Affinity by 20% (5% effective damage).'
      },
      {
        pointThreshold: 20,
        skillName: 'Critical Eye +3',
        skillDescription: 'Increases Affinity by 30% (7.5% effective damage).'
      },
      {
        pointThreshold: -10,
        skillName: 'Critical Eye -1',
        skillDescription: 'Decreases Affinity by 5% (-1.25% effective damage).'
      },
      {
        pointThreshold: -15,
        skillName: 'Critical Eye -2',
        skillDescription: 'Decreases Affinity by 10% (-2.5% effective damage).'
      },
      {
        pointThreshold: -20,
        skillName: 'Critical Eye -3',
        skillDescription: 'Decreases Affinity by 15% (-3.75% effective damage).'
      }
    ]
  },
  {
    name: 'Sharpener',
    description: 'Weapons are sharpened much faster or much longer.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Speed Sharpening',
        skillDescription: 'Weapons are sharpened much faster.'
      },
      {
        pointThreshold: -10,
        skillName: 'Slow Sharpening',
        skillDescription: 'Weapons take longer to sharpen.'
      }
    ]
  },
  {
    name: 'Guard',
    description:
      'Decrease or increases knockback when blocking attacks, and decreases or increases stamina loss (and damage taken) when blocking heavier attacks.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Guard +1',
        skillDescription:
          'Decreases knockback when blocking attacks, and decreases stamina loss (and damage taken) when blocking heavier attacks.'
      },
      {
        pointThreshold: 15,
        skillName: 'Guard +2',
        skillDescription:
          'Greatly decreases knockback when blocking attacks, and greatly decreases stamina loss (and damage taken) when blocking heavier attacks.'
      },
      {
        pointThreshold: -10,
        skillName: 'Guard -1',
        skillDescription:
          'Increases knockback when blocking attacks, and increases stamina loss when blocking heavier attacks.'
      }
    ]
  },
  {
    name: 'Guard Up',
    description:
      "Causes previously unblockable attacks to become blockable: Gobul's Water Vortex, Gigginox's Poison Body Slam, Uragaan's Sleep Cloud, Laguiacrus' Massive Electric Discharge, Agnaktor's Firebeam, Ceadeus' Water Blast and Alatreon's Fireball.",
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Guard Boost'
      }
    ]
  },
  {
    name: 'Reload Spd',
    description: 'Increases or decreases Bowgun reloading speed.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Reload Speed +1',
        skillDescription: 'Bowgun reloading speed increases 1 level.'
      },
      {
        pointThreshold: 15,
        skillName: 'Reload Speed +2',
        skillDescription: 'Bowgun reloading speed increases 2 levels.'
      },
      {
        pointThreshold: 20,
        skillName: 'Reload Speed +3',
        skillDescription: 'Bowgun reloading speed increases 3 levels.'
      },
      {
        pointThreshold: -10,
        skillName: 'Reload Speed -1',
        skillDescription: 'Bowgun reloading speed decreases 1 level.'
      },
      {
        pointThreshold: -15,
        skillName: 'Reload Speed -2',
        skillDescription: 'Bowgun reloading speed decreases 2 levels.'
      },
      {
        pointThreshold: -20,
        skillName: 'Reload Speed -3',
        skillDescription: 'Bowgun reloading speed decreases 3 levels.'
      }
    ]
  },
  {
    name: 'Pellet S+',
    description: 'Allows a bowgun to fire all or Lv1 Pellet S.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Pellet S Lv1 Up',
        skillDescription: 'Allows a bowgun to fire Pellet S Lv1.'
      },
      {
        pointThreshold: 15,
        skillName: 'Pellet S All Up',
        skillDescription: 'Allows a bowgun to fire all Pellet S levels.'
      }
    ]
  },
  {
    name: 'Crag S+',
    description: 'Allows a bowgun to fire all or Lv1 Crag S.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Crag S Lv1 Up',
        skillDescription: 'Allows a bowgun to fire Crag S Lv1.'
      },
      {
        pointThreshold: 15,
        skillName: 'Crag S All Up',
        skillDescription: 'Allows a bowgun to fire all Crag S levels.'
      }
    ]
  },
  {
    name: 'Clust S+',
    description: 'Allows a bowgun to fire all or Lv1 Clust S.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Clust S Lv1 Up',
        skillDescription: 'Allows a bowgun to fire Clust S Lv1.'
      },
      {
        pointThreshold: 15,
        skillName: 'Clust S All Up',
        skillDescription: 'Allows a bowgun to fire all Clust S levels.'
      }
    ]
  },
  {
    name: 'Bomb Boost',
    description: 'Bomb damage is increased. Bomb Combinations are 100%.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Bombardier'
      }
    ]
  },
  {
    name: 'Hunger',
    description:
      'Negates, halves or increases maximum Stamina depletion speed.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Halve Hunger',
        skillDescription: 'Halves maximum Stamina depletion speed.'
      },
      {
        pointThreshold: 15,
        skillName: 'Negate Hunger',
        skillDescription: 'Negates maximum Stamina depletion.'
      },
      {
        pointThreshold: -10,
        skillName: 'Raise Hunger',
        skillDescription: 'Increases maximum Stamina depletion speed.'
      },
      {
        pointThreshold: -15,
        skillName: 'Double Hunger',
        skillDescription: 'Greatly increases maximum Stamina depletion speed.'
      }
    ]
  },
  {
    name: 'Attack',
    description: 'Increases or decreases Attack.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Attack Up (S)',
        skillDescription: 'Slightly increases Attack.'
      },
      {
        pointThreshold: 15,
        skillName: 'Attack Up (M)',
        skillDescription: 'Increases Attack.'
      },
      {
        pointThreshold: 20,
        skillName: 'Attack Up (L)',
        skillDescription: 'Greatly increases Attack.'
      },
      {
        pointThreshold: -10,
        skillName: 'Attack Down (S)',
        skillDescription: 'Slightly decreases Attack.'
      },
      {
        pointThreshold: -15,
        skillName: 'Attack Down (M)',
        skillDescription: 'Decreases Attack.'
      },
      {
        pointThreshold: -20,
        skillName: 'Attack Down (L)',
        skillDescription: 'Greatly decreases Attack.'
      }
    ]
  },
  {
    name: 'Defense',
    description: 'Increases or decreases Defense.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Defense Up (S)',
        skillDescription: 'Slightly increases Defense.'
      },
      {
        pointThreshold: 15,
        skillName: 'Defense Up (M)',
        skillDescription: 'Increases Defense.'
      },
      {
        pointThreshold: 20,
        skillName: 'Defense Up (L)',
        skillDescription: 'Greatly increases Defense.'
      },
      {
        pointThreshold: -10,
        skillName: 'Defense Down (S)',
        skillDescription: 'Slightly decreases Defense.'
      },
      {
        pointThreshold: -15,
        skillName: 'Defense Down (M)',
        skillDescription: 'Decreases Defense.'
      },
      {
        pointThreshold: -20,
        skillName: 'Defense Down (L)',
        skillDescription: 'Greatly decreases Defense.'
      }
    ]
  },
  {
    name: 'Protection',
    description: '25% chance of attacks doing 30% less or more damage.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Divine Blessing',
        skillDescription: '25% chance of attacks doing 30% less damage.'
      },
      {
        pointThreshold: -10,
        skillName: 'Demonic Blessing',
        skillDescription: '25% chance of attacks doing 30% more damage.'
      }
    ]
  },
  {
    name: 'Wide-Range',
    description: 'Health & status Items used also affect nearby party members.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Wide-Range +1',
        skillDescription:
          'Health & status Items used also affect nearby party members by a small amount.'
      },
      {
        pointThreshold: 20,
        skillName: 'Wide-Range +2',
        skillDescription:
          'Health & status Items used also affect nearby party members.'
      }
    ]
  },
  {
    name: 'Wind Res',
    description: 'Negates all or a certain amount of Wind Pressure.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Windproof (Lo)',
        skillDescription: 'Negates a certain amount of Wind Pressure.'
      },
      {
        pointThreshold: 15,
        skillName: 'Windproof (Hi)',
        skillDescription: 'Negates all Wind Pressure.'
      }
    ]
  },
  {
    name: 'Gathering',
    description: 'Chance to gather more or less resources in a single spot.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Gathering +1',
        skillDescription: 'Chance to gather more resources in a single spot.'
      },
      {
        pointThreshold: 15,
        skillName: 'Gathering +2',
        skillDescription:
          'Higher chance to gather more resources in a single spot.'
      },
      {
        pointThreshold: -10,
        skillName: 'Gathering -1',
        skillDescription: 'Chance to gather less resources in a single spot.'
      }
    ]
  },
  {
    name: 'Spd Gather',
    description: 'Gathering speed is increased.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Speed Gatherer'
      }
    ]
  },
  {
    name: 'Psychic',
    description:
      'Marked monsters display additional information on the map, such as species and rage.  Higher levels automatically marks monster for the hunter.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Detect',
        skillDescription:
          'Marked monsters display additional information on the map, such as species and rage.'
      },
      {
        pointThreshold: 15,
        skillName: 'Autotracker',
        skillDescription: 'Activates Detect without having to mark the monster.'
      }
    ]
  },
  {
    name: 'Rec Level',
    description:
      'Increases or decreases the efficiency of Health recovery items.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Recovery Up',
        skillDescription: 'Increases the efficiency of Health recovery items.'
      },
      {
        pointThreshold: -10,
        skillName: 'Recovery Down',
        skillDescription: 'Decreases the efficiency of Health recovery items.'
      }
    ]
  },
  {
    name: 'Evasion',
    description: 'Extends the invulnerability period when evading.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Evasion +1'
      },
      {
        pointThreshold: 15,
        skillName: 'Evasion +2'
      }
    ]
  },
  {
    name: 'Potential',
    description:
      'Increases or decreases Defense when Health is below 40%.  Higher levels increases attack power when Health is below 40%.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Adrenaline +1',
        skillDescription: 'Greatly increases Defense when Health is below 40%.'
      },
      {
        pointThreshold: 15,
        skillName: 'Adrenaline +2',
        skillDescription:
          'Greatly increases Attack and Defense when Health is below 40%.'
      },
      {
        pointThreshold: -10,
        skillName: 'Worrywart',
        skillDescription:
          'Decreases Defense and Attack power when Health is below 40%.'
      }
    ]
  },
  {
    name: 'Eating',
    description:
      'Increases or decreases meat-eating speed.  Higher levels increase item consuming speed as well.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Speed Eating +1',
        skillDescription: 'Increases meat-eating speed.'
      },
      {
        pointThreshold: 15,
        skillName: 'Speed Eating +2',
        skillDescription: 'Increases meat and item consuming speed.'
      },
      {
        pointThreshold: -10,
        skillName: 'Slow Eater',
        skillDescription: 'Decreases meat-eating speed.'
      }
    ]
  },
  {
    name: 'Tremor Res',
    description: 'Prevents staggering from tremors created by large monsters.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Tremor-Proof'
      }
    ]
  },
  {
    name: 'Crit Draw',
    description: 'Guarantees all draw attacks will be critical.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Critical Draw'
      }
    ]
  },
  {
    name: 'Constitutn',
    description:
      'Slows down or speeds up Stamina depletion while evading and blocking.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Constitution +1',
        skillDescription:
          'Slows down Stamina depletion while evading and blocking.'
      },
      {
        pointThreshold: 15,
        skillName: 'Constitution +2',
        skillDescription:
          'Greatly slows down Stamina depletion while evading and blocking.'
      },
      {
        pointThreshold: -10,
        skillName: 'Constitution -1',
        skillDescription:
          'Speeds up Stamina depletion while evading and blocking.'
      },
      {
        pointThreshold: -15,
        skillName: 'Constitution -2',
        skillDescription:
          'Greatly speeds up Stamina depletion while evading and blocking.'
      }
    ]
  },
  {
    name: 'Swimming',
    description: 'Increases or descreases your movement speed in water.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Olympic Swimmer',
        skillDescription: 'Increases your movement speed in water.'
      },
      {
        pointThreshold: -10,
        skillName: 'Doggy Paddler',
        skillDescription: 'Decreases your movement speed in water.'
      }
    ]
  },
  {
    name: 'Dungmaster',
    description:
      'Increases Dung Bomb efficiency, and raises their Combo success rate to 100%.',
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Dung Bomb Expert'
      }
    ]
  },
  {
    name: 'Flame Aura',
    description:
      "Causes monsters to react as if you are carrying a Torch, even when you aren't.",
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Flaming Aura'
      }
    ]
  },
  {
    name: 'Paralysis',
    description: 'Prevents or doubles the duration of paralysis.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Negate Paralysis',
        skillDescription: 'Prevents paralysis.'
      },
      {
        pointThreshold: -10,
        skillName: 'Double Paralysis',
        skillDescription: 'Doubles the duration of paralysis.'
      }
    ]
  },
  {
    name: 'Sleep',
    description: 'Prevents or doubles the duration of sleep.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Negate Sleep',
        skillDescription: 'Prevents sleep.'
      },
      {
        pointThreshold: -10,
        skillName: 'Double Sleep',
        skillDescription: 'Doubles the duration of sleep.'
      }
    ]
  },
  {
    name: 'Stun',
    description:
      'Prevents or reduces the likelihood of being stunned or make it harder to recover from being stunned.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Halve Stun',
        skillDescription: 'Reduces the likelihood of being stunned by 50%.'
      },
      {
        pointThreshold: 15,
        skillName: 'Negate Stun',
        skillDescription: 'Prevents stun.'
      },
      {
        pointThreshold: -10,
        skillName: 'Double Stun',
        skillDescription: 'Makes it harder to recover from being stunned.'
      }
    ]
  },
  {
    name: 'Mud/Snow',
    description: 'Prevents Snowman and Muddy conditions.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Negate Mud/Snow'
      }
    ]
  },
  {
    name: 'Sense',
    description:
      'Monsters are less likely or more likely to target you in a group.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Sneak',
        skillDescription: 'Monsters are less likely to target you in a group.'
      },
      {
        pointThreshold: -10,
        skillName: 'Taunt',
        skillDescription: 'Monsters are more likely to target you in a group.'
      }
    ]
  },
  {
    name: 'Gluttony',
    description: 'Increases efficiency of items that raise maximum Stamina.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Gourmand',
        skillDescription:
          'Sometimes increases the effeciency of items that raise maximum Stamina.'
      },
      {
        pointThreshold: 15,
        skillName: 'Scavenger',
        skillDescription:
          'Increases efficiency of items that raise maximum Stamina.'
      }
    ]
  },
  {
    name: 'Anti-Theft',
    description: 'Prevents item theft.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Anti-Theft'
      }
    ]
  },
  {
    name: 'Transportr',
    description: 'Travel faster while carrying eggs or powderstones.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Pro Transporter'
      }
    ]
  },
  {
    name: 'Fire Res',
    description: 'Increases or decreases Fire resistance.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Fire Res +10',
        skillDescription: 'Increases Fire resistance by 10.'
      },
      {
        pointThreshold: 15,
        skillName: 'Fire Res +15',
        skillDescription: 'Increases Fire resistance by 15.'
      },
      {
        pointThreshold: 20,
        skillName: 'Fire Res +20',
        skillDescription: 'Increases Fire resistance by 20.'
      },
      {
        pointThreshold: -10,
        skillName: 'Fire Res -10',
        skillDescription: 'Decreases Fire resistance by 10.'
      },
      {
        pointThreshold: -15,
        skillName: 'Fire Res -15',
        skillDescription: 'Decreases Fire resistance by 15.'
      }
    ]
  },
  {
    name: 'Water Res',
    description: 'Increases or decreases Water resistance.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Water Res +10',
        skillDescription: 'Increases Water resistance by 10.'
      },
      {
        pointThreshold: 15,
        skillName: 'Water Res +15',
        skillDescription: 'Increases Water resistance by 15.'
      },
      {
        pointThreshold: 20,
        skillName: 'Water Res +20',
        skillDescription: 'Increases Water resistance by 20.'
      },
      {
        pointThreshold: -10,
        skillName: 'Water Res -10',
        skillDescription: 'Decreases Water resistance by 10.'
      },
      {
        pointThreshold: -15,
        skillName: 'Water Res -15',
        skillDescription: 'Decreases Water resistance by 15.'
      }
    ]
  },
  {
    name: 'ThunderRes',
    description: 'Increases or decreases Thunder resistance.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Thunder Res +10',
        skillDescription: 'Increases Thunder resistance by 10.'
      },
      {
        pointThreshold: 15,
        skillName: 'Thunder Res +15',
        skillDescription: 'Increases Thunder resistance by 15.'
      },
      {
        pointThreshold: 20,
        skillName: 'Thunder Res +20',
        skillDescription: 'Increases Thunder resistance by 20.'
      },
      {
        pointThreshold: -10,
        skillName: 'Thunder Res -10',
        skillDescription: 'Decreases Thunder resistance by 10.'
      },
      {
        pointThreshold: -15,
        skillName: 'Thunder Res -15',
        skillDescription: 'Decreases Thunder resistance by 15.'
      }
    ]
  },
  {
    name: 'Ice Res',
    description: 'Increases or decreases Ice resistance.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Ice Res +10',
        skillDescription: 'Increases Ice resistance by 10.'
      },
      {
        pointThreshold: 15,
        skillName: 'Ice Res +15',
        skillDescription: 'Increases Ice resistance by 15.'
      },
      {
        pointThreshold: 20,
        skillName: 'Ice Res +20',
        skillDescription: 'Increases Ice resistance by 20.'
      },
      {
        pointThreshold: -10,
        skillName: 'Ice Res -10',
        skillDescription: 'Decreases Ice resistance by 10.'
      },
      {
        pointThreshold: -15,
        skillName: 'Ice Res -15',
        skillDescription: 'Decreases Ice resistance by 15.'
      }
    ]
  },
  {
    name: 'Dragon Res',
    description: 'Increases or decreases Dragon resistance.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Dragon Res +10',
        skillDescription: 'Increases Dragon resistance by 10.'
      },
      {
        pointThreshold: 15,
        skillName: 'Dragon Res +15',
        skillDescription: 'Increases Dragon resistance by 15.'
      },
      {
        pointThreshold: 20,
        skillName: 'Dragon Res +20',
        skillDescription: 'Increases Dragon resistance by 20.'
      },
      {
        pointThreshold: -10,
        skillName: 'Dragon Res -10',
        skillDescription: 'Decreases Dragon resistance by 10.'
      },
      {
        pointThreshold: -15,
        skillName: 'Dragon Res -15',
        skillDescription: 'Decreases Dragon resistance by 15.'
      }
    ]
  },
  {
    name: 'Heat Res',
    description:
      'Negates or increases damage caused by heat.  Higher levels negates damage received from lava.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Heat Cancel (Lo)',
        skillDescription: 'Negates a certain amount of heat.'
      },
      {
        pointThreshold: 15,
        skillName: 'Heat Cancel (Hi)',
        skillDescription:
          'Negates all heat, as well as damage received from lava.'
      },
      {
        pointThreshold: -10,
        skillName: 'Heat Surge (Lo)',
        skillDescription: 'Increases damage incurred from heat.'
      },
      {
        pointThreshold: -15,
        skillName: 'Heat Surge (Hi)',
        skillDescription: 'Greatly increases damage incurred from heat.'
      }
    ]
  },
  {
    name: 'Cold Res',
    description:
      'Negates or all or a certain amount of cold.  Negative levels increases the speed at which your maximum Stamina depletes from cold.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Cold Cancel (Lo)',
        skillDescription: 'Negates a certain amount of cold.'
      },
      {
        pointThreshold: 15,
        skillName: 'Cold Cancel (Hi)',
        skillDescription: 'Negates all cold.'
      },
      {
        pointThreshold: -10,
        skillName: 'Cold Surge (Lo)',
        skillDescription:
          'Increases the speed at which your maximum Stamina depletes from cold.'
      },
      {
        pointThreshold: -15,
        skillName: 'Cold Surge (Hi)',
        skillDescription:
          'Greatly increases the speed at which your maximum Stamina depletes from cold.'
      }
    ]
  },
  {
    name: 'Map',
    description: 'Map is automatically available or never shown.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Farsight',
        skillDescription: 'Map is automatically available.'
      },
      {
        pointThreshold: -10,
        skillName: 'Nearsight',
        skillDescription: 'Map is never shown.'
      }
    ]
  },
  {
    name: 'Whim',
    description:
      'Chance of bugnets/pickaxes/horns breaking is reduced or increased.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: "Spirit's Whim",
        skillDescription:
          'Chance of bugnets/pickaxes/horns breaking is reduced.'
      },
      {
        pointThreshold: 15,
        skillName: 'Divine Whim',
        skillDescription:
          'Chance of bugnets/pickaxes/horns breaking is greatly reduced.'
      },
      {
        pointThreshold: -10,
        skillName: "Spectre's Whim",
        skillDescription:
          'Chance of bugnets/pickaxes/horns breaking is increased.'
      },
      {
        pointThreshold: -15,
        skillName: "Devil's Whim",
        skillDescription:
          'Chance of bugnets/pickaxes/horns breaking is greatly increased.'
      }
    ]
  },
  {
    name: 'Fishing',
    description:
      'Causes fish to always bite on the first cast. Raises the efficiency of bait items.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Fishing Expert'
      }
    ]
  },
  {
    name: 'Combo Rate',
    description: 'Increases or decreases your Combination success rate.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Combination +15%',
        skillDescription: 'Increases your Combination success rate by 15%.'
      },
      {
        pointThreshold: 15,
        skillName: 'Combination +25%',
        skillDescription: 'Increases your Combination success rate by 25%.'
      },
      {
        pointThreshold: 20,
        skillName: 'Combination +45%',
        skillDescription: 'Increases your Combination success rate by 45%.'
      },
      {
        pointThreshold: -10,
        skillName: 'Combination -5%',
        skillDescription: 'Decreases your Combination success rate by 5%.'
      },
      {
        pointThreshold: -15,
        skillName: 'Combination -10%',
        skillDescription: 'Decreases your Combination success rate by 10%.'
      },
      {
        pointThreshold: -20,
        skillName: 'Combination -15%',
        skillDescription: 'Decreases your Combination success rate by 15%.'
      }
    ]
  },
  {
    name: 'Combo Plus',
    description:
      'Guarantees maximum possible Combination results with items such as Bowgun ammo.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Combination Pro'
      }
    ]
  },
  {
    name: 'LastingPwr',
    description: 'Increases or decreases the effect time of certain items.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Item Use Up',
        skillDescription: 'Increases the effect time of certain items.'
      },
      {
        pointThreshold: -10,
        skillName: 'Item Use Down',
        skillDescription: 'Decreases the effect time of certain items.'
      }
    ]
  },
  {
    name: 'Precision',
    description: 'Decreases or increases Deviation while aiming.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Steadiness +1',
        skillDescription: 'Decreases Deviation while aiming.'
      },
      {
        pointThreshold: 15,
        skillName: 'Steadiness +2',
        skillDescription: 'Greatly decreases Deviation while aiming.'
      },
      {
        pointThreshold: -10,
        skillName: 'Steadiness -1',
        skillDescription: 'Increases Deviation while aiming.'
      }
    ]
  },
  {
    name: 'BBQ',
    description:
      'Grants the ability to swiftly and easily roast Well-done Steaks.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'BBQ Expert'
      }
    ]
  },
  {
    name: 'SpeedSetup',
    description:
      'Speeds up trap and bomb setting time. Raises Trap Combinations to 100%.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Trap Master'
      }
    ]
  },
  {
    name: 'Perception',
    description:
      'Monster icon on the map blinks when monsters are ready to be captured.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Capture Guru'
      }
    ]
  },
  {
    name: 'Oxygen',
    description: 'Slows down or speeds up depletion of the Oxygen Gauge.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Oxygen Up',
        skillDescription: 'Slows down depletion of the Oxygen Gauge.'
      },
      {
        pointThreshold: -10,
        skillName: 'Oxygen Down',
        skillDescription: 'Speeds up depletion of the Oxygen Gauge.'
      }
    ]
  },
  {
    name: 'CurrentRes',
    description: 'Negates all or some water currents created by large monster.',
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Current Res (Lo)',
        skillDescription:
          'Negates some of the water currents created by large monsters.'
      },
      {
        pointThreshold: 15,
        skillName: 'Current Res (Hi)',
        skillDescription: 'Negates the water currents created by large monster.'
      }
    ]
  },
  {
    name: 'Survivor',
    description: 'Increases your Attack every time you fall in battle.',
    restricted: true,
    group: SkillGroup.A,
    armorSkills: [{ pointThreshold: 10, skillName: 'Fortify' }]
  },
  {
    name: 'Blight Res',
    description:
      'Negates all elemental Blights (Fire, Water, Thunder, Ice, and Dragon).',
    restricted: true,
    group: SkillGroup.B,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Blightproof'
      }
    ]
  },
  {
    name: 'Auto-Guard',
    description:
      'Enables ability to automatically block attacks (when blocking is possible).',
    restricted: true,
    group: SkillGroup.C,
    armorSkills: [
      {
        pointThreshold: 10,
        skillName: 'Auto-Guard'
      }
    ]
  }
]);
