import type { SkillPointRecord } from '../armor-skills/types';
import type { CommonTypes } from '../common';
import type { ItemTypes } from '../index';

/**
 * Can be added to an armor piece slot to increase skill points
 */
export interface Decoration {
  name: string;
  /** Number of slots this decoration will occupy */
  slots: CommonTypes.Slots;
  rarity: CommonTypes.Rarity;
  /** In zenny */
  price: number;
  skillPoints: SkillPointRecord;
  color: ItemTypes.ItemIconColor;
}

export const Decorations: Decoration[] = [
  {
    name: 'Antidote Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'purple',
    skillPoints: { poison: 1, stun: -1 }
  },
  {
    name: 'Antidote Jewel+',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'purple',
    skillPoints: { poison: 2 }
  },
  {
    name: 'Paralysis Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'yellow',
    skillPoints: { poison: -1, paralysis: 1 }
  },
  {
    name: 'Paralysis Jewel+',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'yellow',
    skillPoints: { paralysis: 2 }
  },
  {
    name: 'Pep Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'cyan',
    skillPoints: { sleep: 1, 'mud/snow': -1 }
  },
  {
    name: 'Pep Jewel+',
    slots: 2,
    rarity: 5,
    price: 250,
    color: 'cyan',
    skillPoints: { sleep: 3, 'mud/snow': -1 }
  },
  {
    name: 'Steadfast Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'blue',
    skillPoints: { paralysis: -1, stun: 1 }
  },
  {
    name: 'Steadfast Jewel+',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'blue',
    skillPoints: { stun: 2 }
  },
  {
    name: 'Weather Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'gray',
    skillPoints: { sleep: -1, 'mud/snow': 1 }
  },
  {
    name: 'Weather Jewel+',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'gray',
    skillPoints: { 'mud/snow': 2 }
  },
  {
    name: 'Ninja Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'purple',
    skillPoints: { sense: 2 }
  },
  {
    name: 'Vitality Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'red',
    skillPoints: { health: 2 }
  },
  {
    name: 'Recovery Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'green',
    skillPoints: { rec_speed: 1, eating: -1 }
  },
  {
    name: 'Resurgence Jewel',
    slots: 2,
    rarity: 5,
    price: 250,
    color: 'green',
    skillPoints: { rec_speed: 3, eating: -1 }
  },
  {
    name: 'Razor Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'gray',
    skillPoints: { sharpness: 1, handicraft: -1 }
  },
  {
    name: 'Cutter Jewel',
    slots: 3,
    rarity: 6,
    price: 300,
    color: 'gray',
    skillPoints: { sharpness: 4, handicraft: -2 }
  },
  {
    name: 'Handicraft Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'purple',
    skillPoints: { sharpness: -1, handicraft: 1 }
  },
  {
    name: 'Architect Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'purple',
    skillPoints: { sharpness: -2, handicraft: 4 }
  },
  {
    name: 'Fencer Jewel',
    slots: 1,
    rarity: 6,
    price: 300,
    color: 'cyan',
    skillPoints: { handicraft: -1, fencing: 1 }
  },
  {
    name: 'Swordsman Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'cyan',
    skillPoints: { handicraft: -2, fencing: 4 }
  },
  {
    name: 'Expert Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'blue',
    skillPoints: { expert: 1, dragon_res: -1 }
  },
  {
    name: 'Master Jewel',
    slots: 2,
    rarity: 5,
    price: 250,
    color: 'blue',
    skillPoints: { expert: 3, dragon_res: -1 }
  },
  {
    name: 'Hermit Jewel',
    slots: 3,
    rarity: 6,
    price: 300,
    color: 'blue',
    skillPoints: { expert: 5, dragon_res: -1 }
  },
  {
    name: 'Grinder Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'yellow',
    skillPoints: { sharpener: 2 }
  },
  {
    name: 'Stone Wall Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'gray',
    skillPoints: { stamina: -1, guard: 1 }
  },
  {
    name: 'Iron Wall Jewel',
    slots: 2,
    rarity: 6,
    price: 300,
    color: 'gray',
    skillPoints: { stamina: -1, guard: 3 }
  },
  {
    name: 'Shield Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'gray',
    skillPoints: { stamina: -1, guard_up: 1 }
  },
  {
    name: 'Aegis Jewel',
    slots: 2,
    rarity: 6,
    price: 300,
    color: 'gray',
    skillPoints: { stamina: -1, guard_up: 3 }
  },
  {
    name: 'Quickload Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'cyan',
    skillPoints: { recoil: -1, reload_spd: 1 }
  },
  {
    name: 'Flashload Jewel',
    slots: 2,
    rarity: 6,
    price: 300,
    color: 'cyan',
    skillPoints: { recoil: -1, reload_spd: 3 }
  },
  {
    name: 'Absorber Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'gray',
    skillPoints: { recoil: 1, reload_spd: -1 }
  },
  {
    name: 'FlinchFree Jewel',
    slots: 3,
    rarity: 6,
    price: 300,
    color: 'gray',
    skillPoints: { recoil: 4, reload_spd: -2 }
  },
  {
    name: 'Forceshot Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'white',
    skillPoints: { recoil: -1, normals_up: 1 }
  },
  {
    name: 'Forceshot Jewel+',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'white',
    skillPoints: { recoil: -2, normals_up: 4 }
  },
  {
    name: 'Pierce Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'white',
    skillPoints: { recoil: -1, pierces_up: 1 }
  },
  {
    name: 'Pierce Jewel+',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'white',
    skillPoints: { recoil: -2, pierces_up: 4 }
  },
  {
    name: 'Pellet Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'white',
    skillPoints: { recoil: -1, pellets_up: 1 }
  },
  {
    name: 'Pellet Jewel+',
    slots: 3,
    rarity: 6,
    price: 300,
    color: 'white',
    skillPoints: { recoil: -2, pellets_up: 4 }
  },
  {
    name: 'ShotPlus Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'orange',
    skillPoints: { 'normal_s+': 1, reload_spd: -1 }
  },
  {
    name: 'ShotPlus Jewel+',
    slots: 2,
    rarity: 6,
    price: 300,
    color: 'orange',
    skillPoints: { 'normal_s+': 3, reload_spd: -1 }
  },
  {
    name: 'PiercPlus Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'orange',
    skillPoints: { 'pierce_s+': 1, reload_spd: -1 }
  },
  {
    name: 'PiercPlus Jewel+',
    slots: 2,
    rarity: 7,
    price: 350,
    color: 'orange',
    skillPoints: { 'pierce_s+': 3, reload_spd: -1 }
  },
  {
    name: 'PelletPlus Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'orange',
    skillPoints: { 'pellet_s+': 2 }
  },
  {
    name: 'CragPlus Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'orange',
    skillPoints: { 'crag_s+': 2 }
  },
  {
    name: 'ClustPlus Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'orange',
    skillPoints: { reload_spd: -1, 'clust_s+': 1 }
  },
  {
    name: 'Disabler Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'pink',
    skillPoints: { status: 1, elemental: -1 }
  },
  {
    name: 'Disabler Jewel+',
    slots: 2,
    rarity: 7,
    price: 350,
    color: 'pink',
    skillPoints: { status: 3, elemental: -1 }
  },
  {
    name: 'Element Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'pink',
    skillPoints: { status: -1, elemental: 1 }
  },
  {
    name: 'Element Jewel+',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'pink',
    skillPoints: { status: -2, elemental: 4 }
  },
  {
    name: 'Bombardier Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'red',
    skillPoints: { bomb_boost: 2 }
  },
  {
    name: 'Lite Eater Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'white',
    skillPoints: { hunger: 1, eating: -1 }
  },
  {
    name: 'Hungerless Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'white',
    skillPoints: { hunger: 2 }
  },
  {
    name: 'Metabolism Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'orange',
    skillPoints: { gluttony: 2 }
  },
  {
    name: 'Attack Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'red',
    skillPoints: { attack: 1 }
  },
  {
    name: 'Assault Jewel',
    slots: 2,
    rarity: 5,
    price: 250,
    color: 'red',
    skillPoints: { attack: 3, defense: -1 }
  },
  {
    name: 'Onslaught Jewel',
    slots: 3,
    rarity: 6,
    price: 300,
    color: 'red',
    skillPoints: { attack: 5, defense: -1 }
  },
  {
    name: 'Defense Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'blue',
    skillPoints: { attack: -1, defense: 1 }
  },
  {
    name: 'Turtle Jewel',
    slots: 2,
    rarity: 5,
    price: 250,
    color: 'blue',
    skillPoints: { attack: -1, defense: 3 }
  },
  {
    name: 'Protection Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'yellow',
    skillPoints: { protection: 1 }
  },
  {
    name: 'Asylum Jewel',
    slots: 1,
    rarity: 6,
    price: 300,
    color: 'yellow',
    skillPoints: { protection: 2 }
  },
  {
    name: 'Earplug Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'gray',
    skillPoints: { hearing: 1, protection: -1 }
  },
  {
    name: 'Silencer Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'gray',
    skillPoints: { hearing: 4, protection: -2 }
  },
  {
    name: 'Alarm Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'gray',
    skillPoints: { 'anti-theft': 2 }
  },
  {
    name: 'Friendship Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'pink',
    skillPoints: { 'wide-range': 1, sense: -1 }
  },
  {
    name: 'Alliance Jewel',
    slots: 2,
    rarity: 6,
    price: 300,
    color: 'pink',
    skillPoints: { 'wide-range': 3, sense: -1 }
  },
  {
    name: 'Transportr Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'cyan',
    skillPoints: { transportr: 2 }
  },
  {
    name: 'Crimson Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'red',
    skillPoints: { fire_res: 2 }
  },
  {
    name: 'Torrent Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'cyan',
    skillPoints: { water_res: 2 }
  },
  {
    name: 'Storm Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'yellow',
    skillPoints: { thunderres: 2 }
  },
  {
    name: 'Glacier Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'blue',
    skillPoints: { ice_res: 2 }
  },
  {
    name: 'Dragonbane Jewel',
    slots: 1,
    rarity: 6,
    price: 300,
    color: 'purple',
    skillPoints: { dragon_res: 2 }
  },
  {
    name: 'Breeze Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'cyan',
    skillPoints: { heat_res: 2 }
  },
  {
    name: 'Warmth Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'orange',
    skillPoints: { cold_res: 2 }
  },
  {
    name: 'Sandbag Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'gray',
    skillPoints: { fate: -1, wind_res: 1 }
  },
  {
    name: 'Anchor Jewel',
    slots: 2,
    rarity: 6,
    price: 300,
    color: 'gray',
    skillPoints: { fate: -1, wind_res: 3 }
  },
  {
    name: 'Map Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'white',
    skillPoints: { map: 2 }
  },
  {
    name: 'Gathering Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'green',
    skillPoints: { gathering: 2 }
  },
  {
    name: 'Spree Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'green',
    skillPoints: { spd_gather: 2 }
  },
  {
    name: 'Blessing Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'pink',
    skillPoints: { whim: 2 }
  },
  {
    name: 'Fate Jewel',
    slots: 1,
    rarity: 6,
    price: 300,
    color: 'red',
    skillPoints: { fate: 1, whim: -1 }
  },
  {
    name: 'Destiny Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'red',
    skillPoints: { fate: 4, whim: -2 }
  },
  {
    name: 'Fisher Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'cyan',
    skillPoints: { fishing: 2 }
  },
  {
    name: 'Psychic Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'orange',
    skillPoints: { psychic: 2 }
  },
  {
    name: 'Medicine Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'green',
    skillPoints: { rec_speed: -1, rec_level: 1 }
  },
  {
    name: 'Panacea Jewel',
    slots: 2,
    rarity: 6,
    price: 300,
    color: 'green',
    skillPoints: { rec_speed: -1, rec_level: 3 }
  },
  {
    name: 'Professor Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'purple',
    skillPoints: { combo_rate: 2 }
  },
  {
    name: 'Factory Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'white',
    skillPoints: { combo_plus: 2 }
  },
  {
    name: 'Evade Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'cyan',
    skillPoints: { health: -1, evasion: 1 }
  },
  {
    name: 'Lightfoot Jewel',
    slots: 2,
    rarity: 7,
    price: 350,
    color: 'cyan',
    skillPoints: { health: -1, evasion: 3 }
  },
  {
    name: 'Crisis Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'red',
    skillPoints: { protection: -1, potential: 1 }
  },
  {
    name: 'Peril Jewel',
    slots: 2,
    rarity: 6,
    price: 300,
    color: 'red',
    skillPoints: { protection: -1, potential: 3 }
  },
  {
    name: 'Enduring Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'blue',
    skillPoints: { lastingpwr: 2 }
  },
  {
    name: 'Sprinter Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'yellow',
    skillPoints: { stamina: 1, hunger: -1 }
  },
  {
    name: 'Marathon Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'yellow',
    skillPoints: { stamina: 4, hunger: -2 }
  },
  {
    name: 'Chamber Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'gray',
    skillPoints: { loading: 1, reload_spd: -1 }
  },
  {
    name: 'Magazine Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'gray',
    skillPoints: { loading: 4, reload_spd: -2 }
  },
  {
    name: 'Sniper Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'white',
    skillPoints: { precision: 2 }
  },
  {
    name: 'Gobbler Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'yellow',
    skillPoints: { rec_level: -1, eating: 1 }
  },
  {
    name: 'Voracious Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'yellow',
    skillPoints: { rec_level: -2, eating: 4 }
  },
  {
    name: 'Carver Jewel',
    slots: 1,
    rarity: 6,
    price: 300,
    color: 'orange',
    skillPoints: { fate: -1, carving: 1 }
  },
  {
    name: 'Looter Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'orange',
    skillPoints: { fate: -2, carving: 4 }
  },
  {
    name: 'Footing Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'purple',
    skillPoints: { tremor_res: 1, sleep: -1 }
  },
  {
    name: 'Tectonic Jewel',
    slots: 2,
    rarity: 6,
    price: 300,
    color: 'purple',
    skillPoints: { tremor_res: 3, sleep: -1 }
  },
  {
    name: 'BBQ Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'orange',
    skillPoints: { bbq: 2 }
  },
  {
    name: 'Jumping Jewel',
    slots: 1,
    rarity: 6,
    price: 300,
    color: 'blue',
    skillPoints: { evade_dist: 1, health: -1 }
  },
  {
    name: 'Leaping Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'blue',
    skillPoints: { evade_dist: 4, health: -2 }
  },
  {
    name: 'Draw Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'red',
    skillPoints: { expert: -1, crit_draw: 1 }
  },
  {
    name: 'Critical Jewel',
    slots: 2,
    rarity: 7,
    price: 350,
    color: 'red',
    skillPoints: { expert: -1, crit_draw: 3 }
  },
  {
    name: 'TrapMaster Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'cyan',
    skillPoints: { speedsetup: 2 }
  },
  {
    name: 'Workout Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'white',
    skillPoints: { stamina: -1, constitutn: 1 }
  },
  {
    name: 'Physique Jewel',
    slots: 2,
    rarity: 6,
    price: 300,
    color: 'white',
    skillPoints: { stamina: -1, constitutn: 3 }
  },
  {
    name: 'Tranq Jewel',
    slots: 1,
    rarity: 6,
    price: 300,
    color: 'green',
    skillPoints: { fate: -1, tranquilzr: 1 }
  },
  {
    name: 'Capture Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'green',
    skillPoints: { fate: -2, tranquilzr: 4 }
  },
  {
    name: 'Perception Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'yellow',
    skillPoints: { perception: 2 }
  },
  {
    name: 'Charger Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'orange',
    skillPoints: { fastcharge: 1, constitutn: -1 }
  },
  {
    name: 'Dynamo Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'orange',
    skillPoints: { fastcharge: 4, constitutn: -2 }
  },
  {
    name: 'Fresh Air Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'cyan',
    skillPoints: { oxygen: 2 }
  },
  {
    name: 'Upstream Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'blue',
    skillPoints: { currentres: 2 }
  },
  {
    name: 'Swimmer Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'white',
    skillPoints: { swimming: 1, oxygen: -1 }
  },
  {
    name: 'Diver Jewel',
    slots: 2,
    rarity: 6,
    price: 300,
    color: 'white',
    skillPoints: { swimming: 3, oxygen: -1 }
  },
  {
    name: 'Gambit Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'orange',
    skillPoints: { sharpness: -1, punishdraw: 1 }
  },
  {
    name: 'Checkmate Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'orange',
    skillPoints: { sharpness: -2, punishdraw: 4 }
  },
  {
    name: 'Resistor Jewel',
    slots: 1,
    rarity: 7,
    price: 350,
    color: 'green',
    skillPoints: { health: -1, blight_res: 1 }
  },
  {
    name: 'Release Jewel',
    slots: 1,
    rarity: 6,
    price: 300,
    color: 'red',
    skillPoints: { status: -1, freeelemnt: 1 }
  },
  {
    name: 'Catalyst Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'red',
    skillPoints: { status: -2, freeelemnt: 4 }
  },
  {
    name: 'Guts Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'pink',
    skillPoints: { protection: -1, survivor: 1 }
  },
  {
    name: 'Fortitude Jewel',
    slots: 2,
    rarity: 7,
    price: 350,
    color: 'pink',
    skillPoints: { protection: -1, survivor: 3 }
  },
  {
    name: 'Salvo Jewel',
    slots: 1,
    rarity: 6,
    price: 300,
    color: 'cyan',
    skillPoints: { rapid_fire: 1, reload_spd: -1 }
  },
  {
    name: 'Fusillade Jewel',
    slots: 3,
    rarity: 7,
    price: 350,
    color: 'cyan',
    skillPoints: { rapid_fire: 4, reload_spd: -2 }
  },
  {
    name: 'Dung Jewel',
    slots: 1,
    rarity: 4,
    price: 200,
    color: 'yellow',
    skillPoints: { dungmaster: 2 }
  },
  {
    name: 'Torchlight Jewel',
    slots: 1,
    rarity: 5,
    price: 250,
    color: 'red',
    skillPoints: { flame_aura: 2 }
  }
];
