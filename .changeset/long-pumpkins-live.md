---
'mh3-data': major
---

Monster Levels updated

- Levels 0-60 are now fully accounted-for
- HP and stagger multipliers verified ingame
  - Defense multipliers could still be suspect; they would need to be reversed out with controlled attacks ingame.
- Util functions reworked for MonsterLevelTypes
- New parameters for calculateDamage to accept a specific MonsterStatMultipliers
  - This will be a breaking change
