# mh3-data

## 2.0.0

### Major Changes

- da07a42: Monster Levels updated

  - Levels 0-60 are now fully accounted-for
  - HP and stagger multipliers verified ingame
    - Defense multipliers could still be suspect; they would need to be reversed out with controlled attacks ingame.
  - Util functions reworked for MonsterLevelTypes
  - New parameters for calculateDamage to accept a specific MonsterStatMultipliers
    - This will be a breaking change

## 1.1.0

### Minor Changes

- 6ec3f32: Armor data added

  - Armor piece data organized by head, chest, arms, waist, and legs
  - Includes reference to armor skills
  - Armor skill type shape updated to include a key

## 1.0.0

### Major Changes

- b6d96fd: First major release of mh3-data

  - Resolved all known/reported issues with damage calculation
    - Switch Axe dragon phial behavior has been adjusted according to findings from ingame research

## 0.9.10

### Patch Changes

- 4e00e78: Corrected Diablos stomach stagger limit to 350HP as verified with ingame testing

## 0.9.8

### Patch Changes

- b1a7902: Decimal rounding according to the damage formula

## 0.9.7

### Patch Changes

- 5c70ac2: Applying decimal dropping according to the damage formula documentation

## 0.9.6

### Patch Changes

- bd25458: Updated Quests

  - Added region and rank to quest type
  - Added functions for fetching quests by arena, event, or star level

## 0.9.5

### Patch Changes

- 01cde30: Update MonsterLevelMultiplier getter functions to account for elder dragons

## 0.9.4

### Patch Changes

- 894ca47: Fixed error in switch axe damage calculation that was always including phial type (regardless of sword/axe mode)

## 0.9.3

### Patch Changes

- 613295b: Fixed incorrect multiplier for 2nd fortify

## 0.9.2

### Patch Changes

- ec78641: Changes to object structures such as Monster Hitzones

## 0.9.1

### Patch Changes

- 760c032: Change to Damage.calculateDamage function signature

  - Accepts an optional Quest ID in order to look up monster level information
    - Will default to multipliers of 1.0
  - Accepts monster name, preventing a user from having to look that up themselves before calling the function
  - Sub-arguments for DamageBuffArgs are no longer optional
  - General type improvements

## 1.0.1

### Patch Changes

- dca8f81: Initial release
