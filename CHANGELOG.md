# mh3-data

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
