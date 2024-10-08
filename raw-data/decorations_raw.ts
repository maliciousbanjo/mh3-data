/**
 * !RAW
 * This is a "raw" object taken from the archived MH3 stilltruth website.
 * http://web.archive.org/web/20130407144759/http://mhtri.stilltruth.com/
 */

const Decorations = [
  {
    name: 'Antidote Jewel',
    slots: 1,
    skills: { '22': 1, '55': -1 },
    price: 200,
    create: { '329': 2, '413': 1 },
    color: 'purple',
    rarity: 4
  },
  {
    name: 'Antidote Jewel+',
    slots: 1,
    skills: { '22': 2 },
    price: 250,
    create: { '266': 1, '414': 1 },
    color: 'purple',
    rarity: 5
  },
  {
    name: 'Paralysis Jewel',
    slots: 1,
    skills: { '53': 1, '22': -1 },
    price: 200,
    create: { '115': 1, '413': 1 },
    color: 'yellow',
    rarity: 4
  },
  {
    name: 'Paralysis Jewel+',
    slots: 1,
    skills: { '53': 2 },
    price: 250,
    create: { '298': 1, '414': 1 },
    color: 'yellow',
    rarity: 5
  },
  {
    name: 'Pep Jewel',
    slots: 1,
    skills: { '54': 1, '56': -1 },
    price: 200,
    create: { '518': 2, '413': 1 },
    color: 'cyan',
    rarity: 4
  },
  {
    name: 'Pep Jewel+',
    slots: 2,
    skills: { '54': 3, '56': -1 },
    price: 250,
    create: { '516': 1, '414': 1 },
    color: 'cyan',
    rarity: 5
  },
  {
    name: 'Steadfast Jewel',
    slots: 1,
    skills: { '55': 1, '53': -1 },
    price: 200,
    create: { '278': 2, '413': 1 },
    color: 'blue',
    rarity: 4
  },
  {
    name: 'Steadfast Jewel+',
    slots: 1,
    skills: { '55': 2 },
    price: 250,
    create: { '296': 1, '414': 1 },
    color: 'blue',
    rarity: 5
  },
  {
    name: 'Weather Jewel',
    slots: 1,
    skills: { '56': 1, '54': -1 },
    price: 200,
    create: { '510': 1, '413': 1 },
    color: 'gray',
    rarity: 4
  },
  {
    name: 'Weather Jewel+',
    slots: 1,
    skills: { '56': 2 },
    price: 200,
    create: { '102': 2, '413': 1 },
    color: 'gray',
    rarity: 4
  },
  {
    name: 'Ninja Jewel',
    slots: 1,
    skills: { '57': 2 },
    price: 250,
    create: { '264': 2, '414': 1 },
    color: 'purple',
    rarity: 5
  },
  {
    name: 'Vitality Jewel',
    slots: 1,
    skills: { '23': 2 },
    price: 200,
    create: { '306': 2, '413': 1 },
    color: 'red',
    rarity: 4
  },
  {
    name: 'Recovery Jewel',
    slots: 1,
    skills: { '24': 1, '46': -1 },
    price: 200,
    create: { '529': 1, '413': 1 },
    color: 'green',
    rarity: 4
  },
  {
    name: 'Resurgence Jewel',
    slots: 2,
    skills: { '24': 3, '46': -1 },
    price: 250,
    create: { '433': 1, '414': 2 },
    color: 'green',
    rarity: 5
  },
  {
    name: 'Razor Jewel',
    slots: 1,
    skills: { '0': 1, '1': -1 },
    price: 250,
    create: { '313': 2, '414': 1 },
    color: 'gray',
    rarity: 5
  },
  {
    name: 'Cutter Jewel',
    slots: 3,
    skills: { '0': 4, '1': -2 },
    price: 300,
    create: { '439': 3, '415': 3 },
    color: 'gray',
    rarity: 6
  },
  {
    name: 'Handicraft Jewel',
    slots: 1,
    skills: { '1': 1, '0': -1 },
    price: 250,
    create: { '426': 2, '414': 1 },
    color: 'purple',
    rarity: 5
  },
  {
    name: 'Architect Jewel',
    slots: 3,
    skills: { '1': 4, '0': -2 },
    price: 350,
    create: { '453': 1, '416': 3 },
    color: 'purple',
    rarity: 7
  },
  {
    name: 'Fencer Jewel',
    slots: 1,
    skills: { '2': 1, '1': -1 },
    price: 300,
    create: { '163': 2, '415': 1 },
    color: 'cyan',
    rarity: 6
  },
  {
    name: 'Swordsman Jewel',
    slots: 3,
    skills: { '2': 4, '1': -2 },
    price: 350,
    create: { '158': 1, '416': 3 },
    color: 'cyan',
    rarity: 7
  },
  {
    name: 'Expert Jewel',
    slots: 1,
    skills: { '25': 1, '65': -1 },
    price: 200,
    create: { '99': 1, '413': 1 },
    color: 'blue',
    rarity: 4
  },
  {
    name: 'Master Jewel',
    slots: 2,
    skills: { '25': 3, '65': -1 },
    price: 250,
    create: { '255': 2, '414': 2 },
    color: 'blue',
    rarity: 5
  },
  {
    name: 'Hermit Jewel',
    slots: 3,
    skills: { '25': 5, '65': -1 },
    price: 300,
    create: { '164': 4, '415': 3 },
    color: 'blue',
    rarity: 6
  },
  {
    name: 'Grinder Jewel',
    slots: 1,
    skills: { '26': 2 },
    price: 200,
    create: { '280': 1, '413': 1 },
    color: 'yellow',
    rarity: 4
  },
  {
    name: 'Stone Wall Jewel',
    slots: 1,
    skills: { '27': 1, '13': -1 },
    price: 200,
    create: { '272': 1, '413': 1 },
    color: 'gray',
    rarity: 4
  },
  {
    name: 'Iron Wall Jewel',
    slots: 2,
    skills: { '27': 3, '13': -1 },
    price: 300,
    create: { '471': 3, '415': 2 },
    color: 'gray',
    rarity: 6
  },
  {
    name: 'Shield Jewel',
    slots: 1,
    skills: { '28': 1, '13': -1 },
    price: 250,
    create: { '104': 1, '414': 1 },
    color: 'gray',
    rarity: 5
  },
  {
    name: 'Aegis Jewel',
    slots: 2,
    skills: { '28': 3, '13': -1 },
    price: 300,
    create: { '475': 2, '415': 2 },
    color: 'gray',
    rarity: 6
  },
  {
    name: 'Quickload Jewel',
    slots: 1,
    skills: { '29': 1, '3': -1 },
    price: 250,
    create: { '382': 1, '414': 1 },
    color: 'cyan',
    rarity: 5
  },
  {
    name: 'Flashload Jewel',
    slots: 2,
    skills: { '29': 3, '3': -1 },
    price: 300,
    create: { '472': 3, '415': 2 },
    color: 'cyan',
    rarity: 6
  },
  {
    name: 'Absorber Jewel',
    slots: 1,
    skills: { '3': 1, '29': -1 },
    price: 250,
    create: { '378': 1, '414': 1 },
    color: 'gray',
    rarity: 5
  },
  {
    name: 'FlinchFree Jewel',
    slots: 3,
    skills: { '3': 4, '29': -2 },
    price: 300,
    create: { '446': 5, '415': 3 },
    color: 'gray',
    rarity: 6
  },
  {
    name: 'Forceshot Jewel',
    slots: 1,
    skills: { '4': 1, '3': -1 },
    price: 250,
    create: { '285': 1, '414': 1 },
    color: 'white',
    rarity: 5
  },
  {
    name: 'Forceshot Jewel+',
    slots: 3,
    skills: { '4': 4, '3': -2 },
    price: 350,
    create: { '474': 2, '416': 3 },
    color: 'white',
    rarity: 7
  },
  {
    name: 'Pierce Jewel',
    slots: 1,
    skills: { '5': 1, '3': -1 },
    price: 250,
    create: { '268': 2, '414': 1 },
    color: 'white',
    rarity: 5
  },
  {
    name: 'Pierce Jewel+',
    slots: 3,
    skills: { '5': 4, '3': -2 },
    price: 350,
    create: { '473': 2, '416': 3 },
    color: 'white',
    rarity: 7
  },
  {
    name: 'Pellet Jewel',
    slots: 1,
    skills: { '6': 1, '3': -1 },
    price: 250,
    create: { '110': 1, '414': 1 },
    color: 'white',
    rarity: 5
  },
  {
    name: 'Pellet Jewel+',
    slots: 3,
    skills: { '6': 4, '3': -2 },
    price: 300,
    create: { '111': 2, '415': 3 },
    color: 'white',
    rarity: 6
  },
  {
    name: 'ShotPlus Jewel',
    slots: 1,
    skills: { '7': 1, '29': -1 },
    price: 200,
    create: { '273': 1, '413': 1 },
    color: 'orange',
    rarity: 4
  },
  {
    name: 'ShotPlus Jewel+',
    slots: 2,
    skills: { '7': 3, '29': -1 },
    price: 300,
    create: { '442': 3, '415': 2 },
    color: 'orange',
    rarity: 6
  },
  {
    name: 'PiercPlus Jewel',
    slots: 1,
    skills: { '8': 1, '29': -1 },
    price: 250,
    create: { '269': 1, '414': 1 },
    color: 'orange',
    rarity: 5
  },
  {
    name: 'PiercPlus Jewel+',
    slots: 2,
    skills: { '8': 3, '29': -1 },
    price: 350,
    create: { '422': 3, '416': 2 },
    color: 'orange',
    rarity: 7
  },
  {
    name: 'PelletPlus Jewel',
    slots: 1,
    skills: { '30': 2 },
    price: 250,
    create: { '291': 2, '414': 1 },
    color: 'orange',
    rarity: 5
  },
  {
    name: 'CragPlus Jewel',
    slots: 1,
    skills: { '31': 2 },
    price: 250,
    create: { '511': 2, '414': 1 },
    color: 'orange',
    rarity: 5
  },
  {
    name: 'ClustPlus Jewel',
    slots: 1,
    skills: { '32': 1, '29': -1 },
    price: 250,
    create: { '435': 1, '414': 1 },
    color: 'orange',
    rarity: 5
  },
  {
    name: 'Disabler Jewel',
    slots: 1,
    skills: { '9': 1, '10': -1 },
    price: 250,
    create: { '265': 1, '414': 1 },
    color: 'pink',
    rarity: 5
  },
  {
    name: 'Disabler Jewel+',
    slots: 2,
    skills: { '9': 3, '10': -1 },
    price: 350,
    create: { '176': 3, '416': 2 },
    color: 'pink',
    rarity: 7
  },
  {
    name: 'Element Jewel',
    slots: 1,
    skills: { '10': 1, '9': -1 },
    price: 250,
    create: { '391': 1, '414': 1 },
    color: 'pink',
    rarity: 5
  },
  {
    name: 'Element Jewel+',
    slots: 3,
    skills: { '10': 4, '9': -2 },
    price: 350,
    create: { '286': 3, '416': 3 },
    color: 'pink',
    rarity: 7
  },
  {
    name: 'Bombardier Jewel',
    slots: 1,
    skills: { '33': 2 },
    price: 250,
    create: { '379': 1, '414': 1 },
    color: 'red',
    rarity: 5
  },
  {
    name: 'Lite Eater Jewel',
    slots: 1,
    skills: { '34': 1, '46': -1 },
    price: 200,
    create: { '150': 1, '413': 1 },
    color: 'white',
    rarity: 4
  },
  {
    name: 'Hungerless Jewel',
    slots: 1,
    skills: { '34': 2 },
    price: 250,
    create: { '151': 3, '414': 1 },
    color: 'white',
    rarity: 5
  },
  {
    name: 'Metabolism Jewel',
    slots: 1,
    skills: { '58': 2 },
    price: 200,
    create: { '281': 1, '413': 1 },
    color: 'orange',
    rarity: 4
  },
  {
    name: 'Attack Jewel',
    slots: 1,
    skills: { '35': 1 },
    price: 200,
    create: { '279': 3, '413': 1 },
    color: 'red',
    rarity: 4
  },
  {
    name: 'Assault Jewel',
    slots: 2,
    skills: { '35': 3, '36': -1 },
    price: 250,
    create: { '254': 3, '414': 2 },
    color: 'red',
    rarity: 5
  },
  {
    name: 'Onslaught Jewel',
    slots: 3,
    skills: { '35': 5, '36': -1 },
    price: 300,
    create: { '450': 3, '415': 3 },
    color: 'red',
    rarity: 6
  },
  {
    name: 'Defense Jewel',
    slots: 1,
    skills: { '36': 1, '35': -1 },
    price: 200,
    create: { '260': 1, '413': 1 },
    color: 'blue',
    rarity: 4
  },
  {
    name: 'Turtle Jewel',
    slots: 2,
    skills: { '36': 3, '35': -1 },
    price: 250,
    create: { '445': 3, '414': 2 },
    color: 'blue',
    rarity: 5
  },
  {
    name: 'Protection Jewel',
    slots: 1,
    skills: { '37': 1 },
    price: 250,
    create: { '290': 2, '414': 1 },
    color: 'yellow',
    rarity: 5
  },
  {
    name: 'Asylum Jewel',
    slots: 1,
    skills: { '37': 2 },
    price: 300,
    create: { '458': 3, '415': 1 },
    color: 'yellow',
    rarity: 6
  },
  {
    name: 'Earplug Jewel',
    slots: 1,
    skills: { '11': 1, '37': -1 },
    price: 250,
    create: { '249': 2, '414': 1 },
    color: 'gray',
    rarity: 5
  },
  {
    name: 'Silencer Jewel',
    slots: 3,
    skills: { '11': 4, '37': -2 },
    price: 350,
    create: { '159': 1, '416': 3 },
    color: 'gray',
    rarity: 7
  },
  {
    name: 'Alarm Jewel',
    slots: 1,
    skills: { '59': 2 },
    price: 200,
    create: { '137': 1, '413': 1 },
    color: 'gray',
    rarity: 4
  },
  {
    name: 'Friendship Jewel',
    slots: 1,
    skills: { '38': 1, '57': -1 },
    price: 200,
    create: { '263': 1, '413': 1 },
    color: 'pink',
    rarity: 4
  },
  {
    name: 'Alliance Jewel',
    slots: 2,
    skills: { '38': 3, '57': -1 },
    price: 300,
    create: { '166': 1, '415': 2 },
    color: 'pink',
    rarity: 6
  },
  {
    name: 'Transportr Jewel',
    slots: 1,
    skills: { '60': 2 },
    price: 200,
    create: { '369': 1, '413': 1 },
    color: 'cyan',
    rarity: 4
  },
  {
    name: 'Crimson Jewel',
    slots: 1,
    skills: { '61': 2 },
    price: 200,
    create: { '359': 10, '413': 1 },
    color: 'red',
    rarity: 4
  },
  {
    name: 'Torrent Jewel',
    slots: 1,
    skills: { '62': 2 },
    price: 200,
    create: { '360': 10, '413': 1 },
    color: 'cyan',
    rarity: 4
  },
  {
    name: 'Storm Jewel',
    slots: 1,
    skills: { '63': 2 },
    price: 200,
    create: { '362': 10, '413': 1 },
    color: 'yellow',
    rarity: 4
  },
  {
    name: 'Glacier Jewel',
    slots: 1,
    skills: { '64': 2 },
    price: 200,
    create: { '361': 10, '413': 1 },
    color: 'blue',
    rarity: 4
  },
  {
    name: 'Dragonbane Jewel',
    slots: 1,
    skills: { '65': 2 },
    price: 300,
    create: { '341': 10, '415': 1 },
    color: 'purple',
    rarity: 6
  },
  {
    name: 'Breeze Jewel',
    slots: 1,
    skills: { '66': 2 },
    price: 200,
    create: { '528': 2, '413': 1 },
    color: 'cyan',
    rarity: 4
  },
  {
    name: 'Warmth Jewel',
    slots: 1,
    skills: { '67': 2 },
    price: 200,
    create: { '303': 2, '413': 1 },
    color: 'orange',
    rarity: 4
  },
  {
    name: 'Sandbag Jewel',
    slots: 1,
    skills: { '39': 1, '12': -1 },
    price: 250,
    create: { '100': 2, '414': 1 },
    color: 'gray',
    rarity: 5
  },
  {
    name: 'Anchor Jewel',
    slots: 2,
    skills: { '39': 3, '12': -1 },
    price: 300,
    create: { '101': 4, '415': 2 },
    color: 'gray',
    rarity: 6
  },
  {
    name: 'Map Jewel',
    slots: 1,
    skills: { '68': 2 },
    price: 200,
    create: { '97': 2, '413': 1 },
    color: 'white',
    rarity: 4
  },
  {
    name: 'Gathering Jewel',
    slots: 1,
    skills: { '40': 2 },
    price: 200,
    create: { '310': 1, '413': 1 },
    color: 'green',
    rarity: 4
  },
  {
    name: 'Spree Jewel',
    slots: 1,
    skills: { '41': 2 },
    price: 200,
    create: { '368': 1, '413': 1 },
    color: 'green',
    rarity: 4
  },
  {
    name: 'Blessing Jewel',
    slots: 1,
    skills: { '69': 2 },
    price: 200,
    create: { '245': 3, '413': 1 },
    color: 'pink',
    rarity: 4
  },
  {
    name: 'Fate Jewel',
    slots: 1,
    skills: { '12': 1, '69': -1 },
    price: 300,
    create: { '454': 1, '415': 1 },
    color: 'red',
    rarity: 6
  },
  {
    name: 'Destiny Jewel',
    slots: 3,
    skills: { '12': 4, '69': -2 },
    price: 350,
    create: { '405': 1, '416': 2 },
    color: 'red',
    rarity: 7
  },
  {
    name: 'Fisher Jewel',
    slots: 1,
    skills: { '70': 2 },
    price: 200,
    create: { '191': 2, '413': 1 },
    color: 'cyan',
    rarity: 4
  },
  {
    name: 'Psychic Jewel',
    slots: 1,
    skills: { '42': 2 },
    price: 250,
    create: { '145': 2, '414': 1 },
    color: 'orange',
    rarity: 5
  },
  {
    name: 'Medicine Jewel',
    slots: 1,
    skills: { '43': 1, '24': -1 },
    price: 200,
    create: { '261': 1, '413': 1 },
    color: 'green',
    rarity: 4
  },
  {
    name: 'Panacea Jewel',
    slots: 2,
    skills: { '43': 3, '24': -1 },
    price: 300,
    create: { '504': 2, '415': 2 },
    color: 'green',
    rarity: 6
  },
  {
    name: 'Professor Jewel',
    slots: 1,
    skills: { '71': 2 },
    price: 200,
    create: { '116': 1, '413': 1 },
    color: 'purple',
    rarity: 4
  },
  {
    name: 'Factory Jewel',
    slots: 1,
    skills: { '72': 2 },
    price: 200,
    create: { '127': 10, '413': 1 },
    color: 'white',
    rarity: 4
  },
  {
    name: 'Evade Jewel',
    slots: 1,
    skills: { '44': 1, '23': -1 },
    price: 250,
    create: { '373': 1, '414': 1 },
    color: 'cyan',
    rarity: 5
  },
  {
    name: 'Lightfoot Jewel',
    slots: 2,
    skills: { '44': 3, '23': -1 },
    price: 350,
    create: { '418': 3, '416': 2 },
    color: 'cyan',
    rarity: 7
  },
  {
    name: 'Crisis Jewel',
    slots: 1,
    skills: { '45': 1, '37': -1 },
    price: 250,
    create: { '274': 1, '414': 1 },
    color: 'red',
    rarity: 5
  },
  {
    name: 'Peril Jewel',
    slots: 2,
    skills: { '45': 3, '37': -1 },
    price: 300,
    create: { '444': 3, '415': 2 },
    color: 'red',
    rarity: 6
  },
  {
    name: 'Enduring Jewel',
    slots: 1,
    skills: { '73': 2 },
    price: 200,
    create: { '149': 3, '413': 1 },
    color: 'blue',
    rarity: 4
  },
  {
    name: 'Sprinter Jewel',
    slots: 1,
    skills: { '13': 1, '34': -1 },
    price: 250,
    create: { '276': 1, '414': 1 },
    color: 'yellow',
    rarity: 5
  },
  {
    name: 'Marathon Jewel',
    slots: 3,
    skills: { '13': 4, '34': -2 },
    price: 350,
    create: { '169': 1, '416': 3 },
    color: 'yellow',
    rarity: 7
  },
  {
    name: 'Chamber Jewel',
    slots: 1,
    skills: { '14': 1, '29': -1 },
    price: 250,
    create: { '425': 1, '414': 1 },
    color: 'gray',
    rarity: 5
  },
  {
    name: 'Magazine Jewel',
    slots: 3,
    skills: { '14': 4, '29': -2 },
    price: 350,
    create: { '452': 4, '416': 3 },
    color: 'gray',
    rarity: 7
  },
  {
    name: 'Sniper Jewel',
    slots: 1,
    skills: { '74': 2 },
    price: 200,
    create: { '277': 3, '413': 1 },
    color: 'white',
    rarity: 4
  },
  {
    name: 'Gobbler Jewel',
    slots: 1,
    skills: { '46': 1, '43': -1 },
    price: 250,
    create: { '297': 1, '414': 1 },
    color: 'yellow',
    rarity: 5
  },
  {
    name: 'Voracious Jewel',
    slots: 3,
    skills: { '46': 4, '43': -2 },
    price: 350,
    create: { '461': 3, '416': 3 },
    color: 'yellow',
    rarity: 7
  },
  {
    name: 'Carver Jewel',
    slots: 1,
    skills: { '15': 1, '12': -1 },
    price: 300,
    create: { '449': 1, '415': 1 },
    color: 'orange',
    rarity: 6
  },
  {
    name: 'Looter Jewel',
    slots: 3,
    skills: { '15': 4, '12': -2 },
    price: 350,
    create: { '404': 1, '416': 3 },
    color: 'orange',
    rarity: 7
  },
  {
    name: 'Footing Jewel',
    slots: 1,
    skills: { '47': 1, '54': -1 },
    price: 250,
    create: { '271': 1, '414': 1 },
    color: 'purple',
    rarity: 5
  },
  {
    name: 'Tectonic Jewel',
    slots: 2,
    skills: { '47': 3, '54': -1 },
    price: 300,
    create: { '423': 1, '415': 2 },
    color: 'purple',
    rarity: 6
  },
  {
    name: 'BBQ Jewel',
    slots: 1,
    skills: { '75': 2 },
    price: 200,
    create: { '28': 10, '413': 1 },
    color: 'orange',
    rarity: 4
  },
  {
    name: 'Jumping Jewel',
    slots: 1,
    skills: { '16': 1, '23': -1 },
    price: 300,
    create: { '419': 1, '415': 1 },
    color: 'blue',
    rarity: 6
  },
  {
    name: 'Leaping Jewel',
    slots: 3,
    skills: { '16': 4, '23': -2 },
    price: 350,
    create: { '420': 2, '416': 3 },
    color: 'blue',
    rarity: 7
  },
  {
    name: 'Draw Jewel',
    slots: 1,
    skills: { '48': 1, '25': -1 },
    price: 250,
    create: { '354': 1, '414': 1 },
    color: 'red',
    rarity: 5
  },
  {
    name: 'Critical Jewel',
    slots: 2,
    skills: { '48': 3, '25': -1 },
    price: 350,
    create: { '424': 1, '416': 2 },
    color: 'red',
    rarity: 7
  },
  {
    name: 'TrapMaster Jewel',
    slots: 1,
    skills: { '76': 2 },
    price: 200,
    create: { '294': 2, '413': 1 },
    color: 'cyan',
    rarity: 4
  },
  {
    name: 'Workout Jewel',
    slots: 1,
    skills: { '49': 1, '13': -1 },
    price: 250,
    create: { '289': 1, '414': 1 },
    color: 'white',
    rarity: 5
  },
  {
    name: 'Physique Jewel',
    slots: 2,
    skills: { '49': 3, '13': -1 },
    price: 300,
    create: { '173': 3, '415': 2 },
    color: 'white',
    rarity: 6
  },
  {
    name: 'Tranq Jewel',
    slots: 1,
    skills: { '17': 1, '12': -1 },
    price: 300,
    create: { '455': 1, '415': 1 },
    color: 'green',
    rarity: 6
  },
  {
    name: 'Capture Jewel',
    slots: 3,
    skills: { '17': 4, '12': -2 },
    price: 350,
    create: { '477': 1, '416': 3 },
    color: 'green',
    rarity: 7
  },
  {
    name: 'Perception Jewel',
    slots: 1,
    skills: { '77': 2 },
    price: 200,
    create: { '530': 2, '413': 1 },
    color: 'yellow',
    rarity: 4
  },
  {
    name: 'Charger Jewel',
    slots: 1,
    skills: { '18': 1, '49': -1 },
    price: 250,
    create: { '507': 1, '414': 1 },
    color: 'orange',
    rarity: 5
  },
  {
    name: 'Dynamo Jewel',
    slots: 3,
    skills: { '18': 4, '49': -2 },
    price: 350,
    create: { '520': 4, '416': 3 },
    color: 'orange',
    rarity: 7
  },
  {
    name: 'Fresh Air Jewel',
    slots: 1,
    skills: { '78': 2 },
    price: 200,
    create: { '135': 5, '413': 1 },
    color: 'cyan',
    rarity: 4
  },
  {
    name: 'Upstream Jewel',
    slots: 1,
    skills: { '79': 2 },
    price: 200,
    create: { '295': 1, '413': 1 },
    color: 'blue',
    rarity: 4
  },
  {
    name: 'Swimmer Jewel',
    slots: 1,
    skills: { '50': 1, '78': -1 },
    price: 200,
    create: { '526': 1, '413': 1 },
    color: 'white',
    rarity: 4
  },
  {
    name: 'Diver Jewel',
    slots: 2,
    skills: { '50': 3, '78': -1 },
    price: 300,
    create: { '527': 1, '415': 2 },
    color: 'white',
    rarity: 6
  },
  {
    name: 'Gambit Jewel',
    slots: 1,
    skills: { '19': 1, '0': -1 },
    price: 250,
    create: { '381': 1, '414': 1 },
    color: 'orange',
    rarity: 5
  },
  {
    name: 'Checkmate Jewel',
    slots: 3,
    skills: { '19': 4, '0': -2 },
    price: 350,
    create: { '448': 3, '416': 3 },
    color: 'orange',
    rarity: 7
  },
  {
    name: 'Resistor Jewel',
    slots: 1,
    skills: { '81': 1, '23': -1 },
    price: 350,
    create: { '401': 1, '416': 1 },
    color: 'green',
    rarity: 7
  },
  {
    name: 'Release Jewel',
    slots: 1,
    skills: { '20': 1, '9': -1 },
    price: 300,
    create: { '468': 1, '415': 1 },
    color: 'red',
    rarity: 6
  },
  {
    name: 'Catalyst Jewel',
    slots: 3,
    skills: { '20': 4, '9': -2 },
    price: 350,
    create: { '476': 2, '416': 3 },
    color: 'red',
    rarity: 7
  },
  {
    name: 'Guts Jewel',
    slots: 1,
    skills: { '80': 1, '37': -1 },
    price: 250,
    create: { '556': 1, '414': 1 },
    color: 'pink',
    rarity: 5
  },
  {
    name: 'Fortitude Jewel',
    slots: 2,
    skills: { '80': 3, '37': -1 },
    price: 350,
    create: { '560': 3, '416': 2 },
    color: 'pink',
    rarity: 7
  },
  {
    name: 'Salvo Jewel',
    slots: 1,
    skills: { '21': 1, '29': -1 },
    price: 300,
    create: { '467': 1, '415': 1 },
    color: 'cyan',
    rarity: 6
  },
  {
    name: 'Fusillade Jewel',
    slots: 3,
    skills: { '21': 4, '29': -2 },
    price: 350,
    create: { '403': 2, '416': 3 },
    color: 'cyan',
    rarity: 7
  },
  {
    name: 'Dung Jewel',
    slots: 1,
    skills: { '51': 2 },
    price: 200,
    create: { '320': 1, '413': 1 },
    color: 'yellow',
    rarity: 4
  },
  {
    name: 'Torchlight Jewel',
    slots: 1,
    skills: { '52': 2 },
    price: 250,
    create: { '386': 2, '414': 1 },
    color: 'red',
    rarity: 5
  }
];
