/**
 * !RAW
 * This is a "raw" object taken from the archived MH3 stilltruth website.
 * http://web.archive.org/web/20130407144759/http://mhtri.stilltruth.com/
 */

const Skills = [
  {
    name: 'Sharpness',
    desc: 'Doubles or halves the rate at which your weapon loses Sharpness.',
    group: 0,
    bounds: { '10': 'Razor Sharp', '-10': 'Blunt Edge' },
    skilldesc: {
      '10': 'Halves the rate at which your weapon loses Sharpness',
      '-10': 'Doubles the rate at which your weapon loses Sharpness'
    }
  },
  {
    name: 'Handicraft',
    desc: "Increases your weapon's Sharpness Level.",
    group: 0,
    bounds: { '15': 'Sharpness +1' }
  },
  {
    name: 'Fencing',
    desc: 'Prevents your attacks from being deflected.',
    group: 0,
    bounds: { '10': "Mind's Eye" }
  },
  {
    name: 'Recoil',
    desc: 'Bowgun recoil is reduced or increased.',
    group: 0,
    bounds: {
      '20': 'Recoil Down +3',
      '15': 'Recoil Down +2',
      '10': 'Recoil Down +1',
      '-10': 'Recoil Down -1',
      '-15': 'Recoil Down -2',
      '-20': 'Recoil Down -3'
    },
    skilldesc: {
      '20': 'Bowgun recoil is reduced even greater.',
      '15': 'Bowgun recoil is reduced further.',
      '10': 'Bowgun recoil is reduced.',
      '-10': 'Bowgun recoil is increased.',
      '-15': 'Bowgun recoil is increased further.',
      '-20': 'Bowgun recoil is increased even greater.'
    }
  },
  {
    name: 'NormalS Up',
    desc: 'Increases the damage of Normal S.',
    group: 0,
    bounds: { '10': 'Normal S Boost' }
  },
  {
    name: 'PierceS Up',
    desc: 'Increases the damage of Pierce S.',
    group: 0,
    bounds: { '10': 'Pierce S Boost' }
  },
  {
    name: 'PelletS Up',
    desc: 'Increases the damage of Pellet S.',
    group: 0,
    bounds: { '10': 'Pellet S Boost' }
  },
  {
    name: 'Normal S+',
    desc: 'Allows a bowgun to fire all Normal S levels.',
    group: 0,
    bounds: { '10': 'Normal S All Up' }
  },
  {
    name: 'Pierce S+',
    desc: 'Allows a bowgun to fire all or Lv1 Pierce S.',
    group: 0,
    bounds: { '15': 'Pierce S All Up', '10': 'Pierce S Lv1 Up' },
    skilldesc: {
      '15': 'Allows a bowgun to fire all Pierce S level.',
      '10': 'Allows a bowgun to fire Pierce S Lv1.'
    }
  },
  {
    name: 'Status',
    desc: 'Increases or decreases the potency of Abnormal Status attacks.',
    group: 0,
    bounds: { '10': 'Status Atk Up', '-10': 'Status Atk Down' },
    skilldesc: {
      '10': 'Increases the potency of Abnormal Status attacks.',
      '-10': 'Decreases the potency of Abnormal Status attacks.'
    }
  },
  {
    name: 'Elemental',
    desc: 'Increases or decreases the power of Elemental attacks.',
    group: 0,
    bounds: { '10': 'Element Atk Up', '-10': 'Element Atk Down' },
    skilldesc: {
      '10': 'Increases the power of Elemental attacks.',
      '-10': 'Decreases the power of Elemental attacks.'
    }
  },
  {
    name: 'Hearing',
    desc: 'Unaffected by some or all monster roars.',
    group: 0,
    bounds: { '15': 'HG Earplugs', '10': 'Earplugs' },
    skilldesc: {
      '15': 'Unaffected by all monster roars.',
      '10': 'Unaffected by some monster roars (anything besides Elder Dragons, Gigginox, Deviljho, and Diablos).'
    }
  },
  {
    name: 'Fate',
    desc: 'Chance of increasing or decreasing the number of Reward Items received at the end of a Quest.',
    group: 0,
    bounds: {
      '15': 'Great Luck',
      '10': 'Good Luck',
      '-10': 'Bad Luck',
      '-15': 'Horrible Luck'
    },
    skilldesc: {
      '15': 'Often increases the number of Reward Items received at the end of a Quest.',
      '10': 'Sometimes increases the number of Reward Items received at the end of a Quest.',
      '-10':
        'Sometimes decreases the number of Reward Items received at the end of a Quest.',
      '-15':
        'Often decreases the number of Reward Items received at the end of a Quest.'
    }
  },
  {
    name: 'Stamina',
    desc: 'Slows down or Speeds up stamina depletion for actions other than evasion and blocking.',
    group: 0,
    bounds: { '10': 'Marathon Runner', '-10': 'Short Sprinter' },
    skilldesc: {
      '10': 'Slows down Stamina depletion for actions other than evasion and blocking.',
      '-10':
        'Speeds up Stamina depletion for actions other than evasion and blocking.'
    }
  },
  {
    name: 'Loading',
    desc: 'Increases the loadable amount of all usable ammo by one.',
    group: 0,
    bounds: { '15': 'Load Up' }
  },
  {
    name: 'Carving',
    desc: 'Prevents knockbacks from everything other than Wind Pressure while carving.  Higher levels sometimes boosts number of carving chances.',
    group: 0,
    bounds: { '15': 'Carving Master', '10': 'Carving Pro' },
    skilldesc: {
      '15': 'Grants Carving Pro effects and sometimes boosts number of carving chances.',
      '10': 'Prevents knockbacks from everything other than Wind Pressure while carving.'
    }
  },
  {
    name: 'Evade Dist',
    desc: 'Increases evasion distance.',
    group: 0,
    bounds: { '15': 'Evasion Up' }
  },
  {
    name: 'Tranquilzr',
    desc: 'Rewards an additional Capture Reward Item for capturing a monster (no additional item for capturing more monsters of the same type).',
    group: 0,
    bounds: { '10': 'Capture Expert' }
  },
  {
    name: 'FastCharge',
    desc: 'Decreases or increases charging time for charge attacks (Greatswords and Hammers) and gauges (Long Swords  and Switch Axes).',
    group: 0,
    bounds: { '10': 'Focus', '-10': 'Distraction' },
    skilldesc: {
      '10': 'Decreases charging time for charge attacks (Greatswords and Hammers) and gauges (Long Swords and Switch Axes).',
      '-10':
        'Increases charging time for charge attacks charge attacks (Greatswords and Hammers) and gauges (Long Swords and Switch Axes).'
    }
  },
  {
    name: 'PunishDraw',
    desc: 'Grants the ability to stun (KO) monsters with draw attacks.',
    group: 0,
    bounds: { '10': 'Punishing Draw' }
  },
  {
    name: 'FreeElemnt',
    desc: "Releases the latent elemental properties in weapons that don't have elements.",
    group: 0,
    bounds: { '15': 'Awaken' }
  },
  {
    name: 'Rapid Fire',
    desc: 'Allows one extra shot to be fired while rapid firing.',
    group: 0,
    bounds: { '10': 'Bonus Shot' }
  },
  {
    name: 'Poison',
    desc: 'Prevents or doubles the damage received from poison.',
    group: 1,
    bounds: { '10': 'Negate Poison', '-10': 'Double Poison' },
    skilldesc: {
      '10': 'Prevents poison.',
      '-10': 'Doubles the damage received from poison.'
    }
  },
  {
    name: 'Health',
    desc: 'Increases or decreases maximum Health.',
    group: 1,
    bounds: {
      '15': 'Health +50',
      '10': 'Health +20',
      '-10': 'Health -10',
      '-15': 'Health -30'
    },
    skilldesc: {
      '15': 'Increases maximum Health by 50.',
      '10': 'Increases maximum Health by 20.',
      '-10': 'Decreases maximum Health by 10.',
      '-15': 'Decreases maximum Health by 30.'
    }
  },
  {
    name: 'Rec Speed',
    desc: 'Increases or decreases recovery speed from temporary damage (the red portion of the Health Gauge).',
    group: 1,
    bounds: {
      '15': 'Recovery Spd +2',
      '10': 'Recovery Spd +1',
      '-10': 'Recovery Spd -1',
      '-15': 'Recovery Spd -2'
    },
    skilldesc: {
      '15': 'Greatly speeds recovery from temporary damage (the red portion of the Health Gauge).',
      '10': 'Speeds recovery from temporary damage (the red part of the Health Gauge).',
      '-10':
        'Slows recovery from temporary damage (the red portion of the Health Gauge).',
      '-15':
        'Greatly slows recovery from temporary damage (the red portion of the Health Gauge).'
    }
  },
  {
    name: 'Expert',
    desc: 'Increases or decreases Affinity (chance to deal either 25% more or 25% less damage with a weapon attack).',
    group: 1,
    bounds: {
      '20': 'Critical Eye +3',
      '15': 'Critical Eye +2',
      '10': 'Critical Eye +1',
      '-10': 'Critical Eye -1',
      '-15': 'Critical Eye -2',
      '-20': 'Critical Eye -3'
    },
    skilldesc: {
      '20': 'Increases Affinity by 30% (7.5% effective damage).',
      '15': 'Increases Affinity by 20% (5% effective damage).',
      '10': 'Increases Affinity by 10% (2.5% effective damage).',
      '-10': 'Decreases Affinity by 5% (-1.25% effective damage).',
      '-15': 'Decreases Affinity by 10% (-2.5% effective damage).',
      '-20': 'Decreases Affinity by 15% (-3.75% effective damage).'
    }
  },
  {
    name: 'Sharpener',
    desc: 'Weapons are sharpened much faster or much longer.',
    group: 1,
    bounds: { '10': 'Speed Sharpening', '-10': 'Slow Sharpening' },
    skilldesc: {
      '10': 'Weapons are sharpened much faster.',
      '-10': 'Weapons take longer to sharpen.'
    }
  },
  {
    name: 'Guard',
    desc: 'Decrease or increases knockback when blocking attacks, and decreases or increases stamina loss (and damage taken) when blocking heavier attacks.',
    group: 1,
    bounds: { '15': 'Guard +2', '10': 'Guard +1', '-10': 'Guard -1' },
    skilldesc: {
      '15': 'Greatly decreases knockback when blocking attacks, and greatly decreases stamina loss (and damage taken) when blocking heavier attacks.',
      '10': 'Decreases knockback when blocking attacks, and decreases stamina loss (and damage taken) when blocking heavier attacks.',
      '-10':
        'Increases knockback when blocking attacks, and increases stamina loss when blocking heavier attacks.'
    }
  },
  {
    name: 'Guard Up',
    desc: "Causes previously unblockable attacks to become blockable: Gobul's Water Vortex, Gigginox's Poison Body Slam, Uragaan's Sleep Cloud, Laguiacrus' Massive Electric Discharge, Agnaktor's Firebeam, Ceadeus' Water Blast and Alatreon's Fireball.",
    group: 1,
    bounds: { '10': 'Guard Boost' }
  },
  {
    name: 'Reload Spd',
    desc: 'Increases or decreases Bowgun reloading speed.',
    group: 1,
    bounds: {
      '20': 'Reload Speed +3',
      '15': 'Reload Speed +2',
      '10': 'Reload Speed +1',
      '-10': 'Reload Speed -1',
      '-15': 'Reload Speed -2',
      '-20': 'Reload Speed -3'
    },
    skilldesc: {
      '20': 'Bowgun reloading speed increases 3 levels.',
      '15': 'Bowgun reloading speed increases 2 levels.',
      '10': 'Bowgun reloading speed increases 1 level.',
      '-10': 'Bowgun reloading speed decreases 1 level.',
      '-15': 'Bowgun reloading speed decreases 2 levels.',
      '-20': 'Bowgun reloading speed decreases 3 levels.'
    }
  },
  {
    name: 'Pellet S+',
    desc: 'Allows a bowgun to fire all or Lv1 Pellet S.',
    group: 1,
    bounds: { '15': 'Pellet S All Up', '10': 'Pellet S Lv1 Up' },
    skilldesc: {
      '15': 'Allows a bowgun to fire all Pellet S levels.',
      '10': 'Allows a bowgun to fire Pellet S Lv1.'
    }
  },
  {
    name: 'Crag S+',
    desc: 'Allows a bowgun to fire all or Lv1 Crag S.',
    group: 1,
    bounds: { '15': 'Crag S All Up', '10': 'Crag S Lv1 Up' },
    skilldesc: {
      '15': 'Allows a bowgun to fire all Crag S levels.',
      '10': 'Allows a bowgun to fire Crag S Lv1.'
    }
  },
  {
    name: 'Clust S+',
    desc: 'Allows a bowgun to fire all or Lv1 Clust S.',
    group: 1,
    bounds: { '15': 'Clust S All Up', '10': 'Clust S Lv1 Up' },
    skilldesc: {
      '15': 'Allows a bowgun to fire all Clust S levels.',
      '10': 'Allows a bowgun to fire Clust S Lv1.'
    }
  },
  {
    name: 'Bomb Boost',
    desc: 'Bomb damage is increased. Bomb Combinations are 100%.',
    group: 1,
    bounds: { '10': 'Bombardier' }
  },
  {
    name: 'Hunger',
    desc: 'Negates, halves or increases maximum Stamina depletion speed.',
    group: 1,
    bounds: {
      '15': 'Negate Hunger',
      '10': 'Halve Hunger',
      '-10': 'Raise Hunger',
      '-15': 'Double Hunger'
    },
    skilldesc: {
      '15': 'Negates maximum Stamina depletion.',
      '10': 'Halves maximum Stamina depletion speed.',
      '-10': 'Increases maximum Stamina depletion speed.',
      '-15': 'Greatly increases maximum Stamina depletion speed.'
    }
  },
  {
    name: 'Attack',
    desc: 'Increases or decreases Attack.',
    group: 1,
    bounds: {
      '20': 'Attack Up (L)',
      '15': 'Attack Up (M)',
      '10': 'Attack Up (S)',
      '-10': 'Attack Down (S)',
      '-15': 'Attack Down (M)',
      '-20': 'Attack Down (L)'
    },
    skilldesc: {
      '20': 'Greatly increases Attack.',
      '15': 'Increases Attack.',
      '10': 'Slightly increases Attack.',
      '-10': 'Slightly decreases Attack.',
      '-15': 'Decreases Attack.',
      '-20': 'Greatly decreases Attack.'
    }
  },
  {
    name: 'Defense',
    desc: 'Increases or decreases Defense.',
    group: 1,
    bounds: {
      '20': 'Defense Up (L)',
      '15': 'Defense Up (M)',
      '10': 'Defense Up (S)',
      '-10': 'Defense Down (S)',
      '-15': 'Defense Down (M)',
      '-20': 'Defense Down (L)'
    },
    skilldesc: {
      '20': 'Greatly increases Defense.',
      '15': 'Increases Defense.',
      '10': 'Slightly increases Defense.',
      '-10': 'Slightly decreases Defense.',
      '-15': 'Decreases Defense.',
      '-20': 'Greatly decreases Defense.'
    }
  },
  {
    name: 'Protection',
    desc: '25% chance of attacks doing 30% less or more damage.',
    group: 1,
    bounds: { '10': 'Divine Blessing', '-10': 'Demonic Blessing' },
    skilldesc: {
      '10': '25% chance of attacks doing 30% less damage.',
      '-10': '25% chance of attacks doing 30% more damage.'
    }
  },
  {
    name: 'Wide-Range',
    desc: 'Health & status Items used also affect nearby party members.',
    group: 1,
    bounds: { '20': 'Wide-Range +2', '10': 'Wide-Range +1' },
    skilldesc: {
      '20': 'Health & status Items used also affect nearby party members.',
      '10': 'Health & status Items used also affect nearby party members by a small amount.'
    }
  },
  {
    name: 'Wind Res',
    desc: 'Negates all or a certain amount of Wind Pressure.',
    group: 1,
    bounds: { '15': 'Windproof (Hi)', '10': 'Windproof (Lo)' },
    skilldesc: {
      '15': 'Negates all Wind Pressure.',
      '10': 'Negates a certain amount of Wind Pressure.'
    }
  },
  {
    name: 'Gathering',
    desc: 'Chance to gather more or less resources in a single spot.',
    group: 1,
    bounds: {
      '15': 'Gathering +2',
      '10': 'Gathering +1',
      '-10': 'Gathering -1'
    },
    skilldesc: {
      '15': 'Higher chance to gather more resources in a single spot.',
      '10': 'Chance to gather more resources in a single spot.',
      '-10': 'Chance to gather less resources in a single spot.'
    }
  },
  {
    name: 'Spd Gather',
    desc: 'Gathering speed is increased.',
    group: 1,
    bounds: { '10': 'Speed Gatherer' }
  },
  {
    name: 'Psychic',
    desc: 'Marked monsters display additional information on the map, such as species and rage.  Higher levels automatically marks monster for the hunter.',
    group: 1,
    bounds: { '15': 'Autotracker', '10': 'Detect' },
    skilldesc: {
      '15': 'Activates Detect without having to mark the monster.',
      '10': 'Marked monsters display additional information on the map, such as species and rage.'
    }
  },
  {
    name: 'Rec Level',
    desc: 'Increases or decreases the efficiency of Health recovery items.',
    group: 1,
    bounds: { '10': 'Recovery Up', '-10': 'Recovery Down' },
    skilldesc: {
      '10': 'Increases the efficiency of Health recovery items.',
      '-10': 'Decreases the efficiency of Health recovery items.'
    }
  },
  {
    name: 'Evasion',
    desc: 'Extends the invulnerability period when evading.',
    group: 1,
    bounds: { '15': 'Evasion +2', '10': 'Evasion +1' }
  },
  {
    name: 'Potential',
    desc: 'Increases or decreases Defense when Health is below 40%.  Higher levels increases attack power when Health is below 40%.',
    group: 1,
    bounds: {
      '15': 'Adrenaline +2',
      '10': 'Adrenaline +1',
      '-10': 'Worrywart'
    },
    skilldesc: {
      '15': 'Greatly increases Attack and Defense when Health is below 40%.',
      '10': 'Greatly increases Defense when Health is below 40%.',
      '-10': 'Decreases Defense and Attack power when Health is below 40%.'
    }
  },
  {
    name: 'Eating',
    desc: 'Increases or decreases meat-eating speed.  Higher levels increase item consuming speed as well.',
    group: 1,
    bounds: {
      '15': 'Speed Eating +2',
      '10': 'Speed Eating +1',
      '-10': 'Slow Eater'
    },
    skilldesc: {
      '15': 'Increases meat and item consuming speed.',
      '10': 'Increases meat-eating speed.',
      '-10': 'Decreases meat-eating speed.'
    }
  },
  {
    name: 'Tremor Res',
    desc: 'Prevents staggering from tremors created by large monsters.',
    group: 1,
    bounds: { '10': 'Tremor-Proof' }
  },
  {
    name: 'Crit Draw',
    desc: 'Guarantees all draw attacks will be critical.',
    group: 1,
    bounds: { '10': 'Critical Draw' }
  },
  {
    name: 'Constitutn',
    desc: 'Slows down or speeds up Stamina depletion while evading and blocking.',
    group: 1,
    bounds: {
      '15': 'Constitution +2',
      '10': 'Constitution +1',
      '-10': 'Constitution -1',
      '-15': 'Constitution -2'
    },
    skilldesc: {
      '15': 'Greatly slows down Stamina depletion while evading and blocking.',
      '10': 'Slows down Stamina depletion while evading and blocking.',
      '-10': 'Speeds up Stamina depletion while evading and blocking.',
      '-15': 'Greatly speeds up Stamina depletion while evading and blocking.'
    }
  },
  {
    name: 'Swimming',
    desc: 'Increases or descreases your movement speed in water.',
    group: 1,
    bounds: { '10': 'Olympic Swimmer', '-10': 'Doggy Paddler' },
    skilldesc: {
      '10': 'Increases your movement speed in water.',
      '-10': 'Decreases your movement speed in water.'
    }
  },
  {
    name: 'Dungmaster',
    desc: 'Increases Dung Bomb efficiency, and raises their Combo success rate to 100%.',
    group: 1,
    bounds: { '10': 'Dung Bomb Expert' }
  },
  {
    name: 'Flame Aura',
    desc: "Causes monsters to react as if you are carrying a Torch, even when you aren't.",
    group: 1,
    bounds: { '10': 'Flaming Aura' }
  },
  {
    name: 'Paralysis',
    desc: 'Prevents or doubles the duration of paralysis.',
    group: 2,
    bounds: { '10': 'Negate Paralysis', '-10': 'Double Paralysis' },
    skilldesc: {
      '10': 'Prevents paralysis.',
      '-10': 'Doubles the duration of paralysis.'
    }
  },
  {
    name: 'Sleep',
    desc: 'Prevents or doubles the duration of sleep.',
    group: 2,
    bounds: { '10': 'Negate Sleep', '-10': 'Double Sleep' },
    skilldesc: {
      '10': 'Prevents sleep.',
      '-10': 'Doubles the duration of sleep.'
    }
  },
  {
    name: 'Stun',
    desc: 'Prevents or reduces the likelihood of being stunned or make it harder to recover from being stunned.',
    group: 2,
    bounds: { '15': 'Negate Stun', '10': 'Halve Stun', '-10': 'Double Stun' },
    skilldesc: {
      '15': 'Prevents stun.',
      '10': 'Reduces the likelihood of being stunned by 50%.',
      '-10': 'Makes it harder to recover from being stunned.'
    }
  },
  {
    name: 'Mud/Snow',
    desc: 'Prevents Snowman and Muddy conditions.',
    group: 2,
    bounds: { '10': 'Negate Mud/Snow' }
  },
  {
    name: 'Sense',
    desc: 'Monsters are less likely or more likely to target you in a group.',
    group: 2,
    bounds: { '10': 'Sneak', '-10': 'Taunt' },
    skilldesc: {
      '10': 'Monsters are less likely to target you in a group.',
      '-10': 'Monsters are more likely to target you in a group.'
    }
  },
  {
    name: 'Gluttony',
    desc: 'Increases efficiency of items that raise maximum Stamina.',
    group: 2,
    bounds: { '15': 'Scavenger', '10': 'Gourmand' },
    skilldesc: {
      '15': 'Increases efficiency of items that raise maximum Stamina.',
      '10': 'Sometimes increases the effeciency of items that raise maximum Stamina.'
    }
  },
  {
    name: 'Anti-Theft',
    desc: 'Prevents item theft.',
    group: 2,
    bounds: { '10': 'Anti-Theft' }
  },
  {
    name: 'Transportr',
    desc: 'Travel faster while carrying eggs or powderstones.',
    group: 2,
    bounds: { '10': 'Pro Transporter' }
  },
  {
    name: 'Fire Res',
    desc: 'Increases or decreases Fire resistance.',
    group: 2,
    bounds: {
      '20': 'Fire Res +20',
      '15': 'Fire Res +15',
      '10': 'Fire Res +10',
      '-10': 'Fire Res -10',
      '-15': 'Fire Res -15'
    },
    skilldesc: {
      '20': 'Increases Fire resistance by 20.',
      '15': 'Increases Fire resistance by 15.',
      '10': 'Increases Fire resistance by 10.',
      '-10': 'Decreases Fire resistance by 10.',
      '-15': 'Decreases Fire resistance by 15.'
    }
  },
  {
    name: 'Water Res',
    desc: 'Increases or decreases Water resistance.',
    group: 2,
    bounds: {
      '20': 'Water Res +20',
      '15': 'Water Res +15',
      '10': 'Water Res +10',
      '-10': 'Water Res -10',
      '-15': 'Water Res -15'
    },
    skilldesc: {
      '20': 'Increases Water resistance by 20.',
      '15': 'Increases Water resistance by 15.',
      '10': 'Increases Water resistance by 10.',
      '-10': 'Decreases Water resistance by 10.',
      '-15': 'Decreases Water resistance by 15.'
    }
  },
  {
    name: 'ThunderRes',
    desc: 'Increases or decreases Thunder resistance.',
    group: 2,
    bounds: {
      '20': 'Thunder Res +20',
      '15': 'Thunder Res +15',
      '10': 'Thunder Res +10',
      '-10': 'Thunder Res -10',
      '-15': 'Thunder Res -15'
    },
    skilldesc: {
      '20': 'Increases Thunder resistance by 20.',
      '15': 'Increases Thunder resistance by 15.',
      '10': 'Increases Thunder resistance by 10.',
      '-10': 'Decreases Thunder resistance by 10.',
      '-15': 'Decreases Thunder resistance by 15.'
    }
  },
  {
    name: 'Ice Res',
    desc: 'Increases or decreases Ice resistance.',
    group: 2,
    bounds: {
      '20': 'Ice Res +20',
      '15': 'Ice Res +15',
      '10': 'Ice Res +10',
      '-10': 'Ice Res -10',
      '-15': 'Ice Res -15'
    },
    skilldesc: {
      '20': 'Increases Ice resistance by 20.',
      '15': 'Increases Ice resistance by 15.',
      '10': 'Increases Ice resistance by 10.',
      '-10': 'Decreases Ice resistance by 10.',
      '-15': 'Decreases Ice resistance by 15.'
    }
  },
  {
    name: 'Dragon Res',
    desc: 'Increases or decreases Dragon resistance.',
    group: 2,
    bounds: {
      '20': 'Dragon Res +20',
      '15': 'Dragon Res +15',
      '10': 'Dragon Res +10',
      '-10': 'Dragon Res -10',
      '-15': 'Dragon Res -15'
    },
    skilldesc: {
      '20': 'Increases Dragon resistance by 20.',
      '15': 'Increases Dragon resistance by 15.',
      '10': 'Increases Dragon resistance by 10.',
      '-10': 'Decreases Dragon resistance by 10.',
      '-15': 'Decreases Dragon resistance by 15.'
    }
  },
  {
    name: 'Heat Res',
    desc: 'Negates or increases damage caused by heat.  Higher levels negates damage received from lava.',
    group: 2,
    bounds: {
      '15': 'Heat Cancel (Hi)',
      '10': 'Heat Cancel (Lo)',
      '-10': 'Heat Surge (Lo)',
      '-15': 'Heat Surge (Hi)'
    },
    skilldesc: {
      '15': 'Negates all heat, as well as damage received from lava.',
      '10': 'Negates a certain amount of heat.',
      '-10': 'Increases damage incurred from heat.',
      '-15': 'Greatly increases damage incurred from heat.'
    }
  },
  {
    name: 'Cold Res',
    desc: 'Negates or all or a certain amount of cold.  Negative levels increases the speed at which your maximum Stamina depletes from cold.',
    group: 2,
    bounds: {
      '15': 'Cold Cancel (Hi)',
      '10': 'Cold Cancel (Lo)',
      '-10': 'Cold Surge (Lo)',
      '-15': 'Cold Surge (Hi)'
    },
    skilldesc: {
      '15': 'Negates all cold.',
      '10': 'Negates a certain amount of cold.',
      '-10':
        'Increases the speed at which your maximum Stamina depletes from cold.',
      '-15':
        'Greatly increases the speed at which your maximum Stamina depletes from cold.'
    }
  },
  {
    name: 'Map',
    desc: 'Map is automatically available or never shown.',
    group: 2,
    bounds: { '10': 'Farsight', '-10': 'Nearsight' },
    skilldesc: {
      '10': 'Map is automatically available.',
      '-10': 'Map is never shown.'
    }
  },
  {
    name: 'Whim',
    desc: 'Chance of bugnets/pickaxes/horns breaking is reduced or increased.',
    group: 2,
    bounds: {
      '15': 'Divine Whim',
      '10': "Spirit's Whim",
      '-10': "Spectre's Whim",
      '-15': "Devil's Whim"
    },
    skilldesc: {
      '15': 'Chance of bugnets/pickaxes/horns breaking is greatly reduced.',
      '10': 'Chance of bugnets/pickaxes/horns breaking is reduced.',
      '-10': 'Chance of bugnets/pickaxes/horns breaking is increased.',
      '-15': 'Chance of bugnets/pickaxes/horns breaking is greatly increased.'
    }
  },
  {
    name: 'Fishing',
    desc: 'Causes fish to always bite on the first cast. Raises the efficiency of bait items.',
    group: 2,
    bounds: { '10': 'Fishing Expert' }
  },
  {
    name: 'Combo Rate',
    desc: 'Increases or decreases your Combination success rate.',
    group: 2,
    bounds: {
      '20': 'Combination +45%',
      '15': 'Combination +25%',
      '10': 'Combination +15%',
      '-10': 'Combination -5%',
      '-15': 'Combination -10%',
      '-20': 'Combination -15%'
    },
    skilldesc: {
      '20': 'Increases your Combination success rate by 45%.',
      '15': 'Increases your Combination success rate by 25%.',
      '10': 'Increases your Combination success rate by 15%.',
      '-10': 'Decreases your Combination success rate by 5%.',
      '-15': 'Decreases your Combination success rate by 10%.',
      '-20': 'Decreases your Combination success rate by 15%.'
    }
  },
  {
    name: 'Combo Plus',
    desc: 'Guarantees maximum possible Combination results with items such as Bowgun ammo.',
    group: 2,
    bounds: { '10': 'Combination Pro' }
  },
  {
    name: 'LastingPwr',
    desc: 'Increases or decreases the effect time of certain items.',
    group: 2,
    bounds: { '10': 'Item Use Up', '-10': 'Item Use Down' },
    skilldesc: {
      '10': 'Increases the effect time of certain items.',
      '-10': 'Decreases the effect time of certain items.'
    }
  },
  {
    name: 'Precision',
    desc: 'Decreases or increases Deviation while aiming.',
    group: 2,
    bounds: {
      '15': 'Steadiness +2',
      '10': 'Steadiness +1',
      '-10': 'Steadiness -1'
    },
    skilldesc: {
      '15': 'Greatly decreases Deviation while aiming.',
      '10': 'Decreases Deviation while aiming.',
      '-10': 'Increases Deviation while aiming.'
    }
  },
  {
    name: 'BBQ',
    desc: 'Grants the ability to swiftly and easily roast Well-done Steaks.',
    group: 2,
    bounds: { '10': 'BBQ Expert' }
  },
  {
    name: 'SpeedSetup',
    desc: 'Speeds up trap and bomb setting time. Raises Trap Combinations to 100%.',
    group: 2,
    bounds: { '10': 'Trap Master' }
  },
  {
    name: 'Perception',
    desc: 'Monster icon on the map blinks when monsters are ready to be captured.',
    group: 2,
    bounds: { '10': 'Capture Guru' }
  },
  {
    name: 'Oxygen',
    desc: 'Slows down or speeds up depletion of the Oxygen Gauge.',
    group: 2,
    bounds: { '10': 'Oxygen Up', '-10': 'Oxygen Down' },
    skilldesc: {
      '10': 'Slows down depletion of the Oxygen Gauge.',
      '-10': 'Speeds up depletion of the Oxygen Gauge.'
    }
  },
  {
    name: 'CurrentRes',
    desc: 'Negates all or some water currents created by large monster.',
    group: 2,
    bounds: { '15': 'Current Res (Hi)', '10': 'Current Res (Lo)' },
    skilldesc: {
      '15': 'Negates the water currents created by large monster.',
      '10': 'Negates some of the water currents created by large monsters.'
    }
  },
  {
    name: 'Survivor',
    desc: 'Increases your Attack every time you fall in battle.',
    bounds: { '10': 'Fortify' }
  },
  {
    name: 'Blight Res',
    desc: 'Negates all elemental Blights (Fire, Water, Thunder, Ice, and Dragon).',
    bounds: { '10': 'Blightproof' }
  },
  {
    name: 'Auto-Guard',
    desc: 'Enables ability to automatically block attacks (when blocking is possible).',
    group: 3,
    bounds: { '10': 'Auto-Guard' }
  },
  { name: 'Torso Up', copy: 'plt' }
];
