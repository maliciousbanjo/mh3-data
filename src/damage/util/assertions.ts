import { WeaponMultipliers } from '../types';

/**
 * Type assertion for Longsword special multiplier args
 */
export function assertLongswordWeaponMultipliers(
  longsword: WeaponMultipliers['longsword'] | undefined
): asserts longsword is NonNullable<WeaponMultipliers['longsword']> {
  if (!longsword) {
    throw new Error('longsword parameters required for damage calculation');
  }

  if (!longsword.spiritGaugeColor) {
    throw new Error(
      'spiritGaugeColor required for longsword damage calculation'
    );
  }
}

/**
 * Type assertion for Switch Axe special multiplier args
 */
export function assertSwitchAxeWeaponMultipliers(
  switchAxeMode: WeaponMultipliers['switchAxeMode'] | undefined
): asserts switchAxeMode is NonNullable<WeaponMultipliers['switchAxeMode']> {
  if (!switchAxeMode) {
    throw new Error('switch axe mode required for damage calculations');
  }
}

/**
 * Type assertion for Sword and Shield special multiplier args
 */
export function assertSwordAndShieldWeaponMultipliers(
  swordAndShieldMode: WeaponMultipliers['swordAndShieldMode'] | undefined
): asserts swordAndShieldMode is NonNullable<
  WeaponMultipliers['swordAndShieldMode']
> {
  if (!swordAndShieldMode) {
    throw new Error('sword and shield mode required for damage calculations');
  }
}
