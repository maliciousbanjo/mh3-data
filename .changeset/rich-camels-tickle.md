---
'mh3-data': patch
---

Change to Damage.calculateDamage function signature

- Accepts an optional Quest ID in order to look up monster level information
  - Will default to multipliers of 1.0
- Accepts monster name, preventing a user from having to look that up themselves before calling the function
- Sub-arguments for DamageBuffArgs are no longer optional
- General type improvements
