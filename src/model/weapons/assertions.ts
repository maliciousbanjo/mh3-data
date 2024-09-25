import { SpecialMultiplierArgs } from './types';

/**
 * Type assertion for Longsword special multiplier args
 */
export function assertLongswordSpecialMultiplierArgs(
  longsword: SpecialMultiplierArgs['longsword'] | undefined
): asserts longsword is NonNullable<SpecialMultiplierArgs['longsword']> {
  if (!longsword) {
    throw new Error('longsword parameters required for damage calculation');
  }

  if (!longsword.spiritGuageColor) {
    throw new Error(
      'spiritGuageColor required for longsword damage calculation'
    );
  }
}

/**
 * Type assertion for Switch Axe special multiplier args
 */
export function assertSwitchAxeSpecialMultiplierArgs(
  switchAxeMode: SpecialMultiplierArgs['switchAxeMode'] | undefined
): asserts switchAxeMode is NonNullable<
  SpecialMultiplierArgs['switchAxeMode']
> {
  if (!switchAxeMode) {
    throw new Error('switch axe mode required for damage calculations');
  }
}

/**
 * Type assertion for Sword and Shield special multiplier args
 */
export function assertSwordAndShieldSpecialMultiplierArgs(
  swordAndShieldMode: SpecialMultiplierArgs['swordAndShieldMode'] | undefined
): asserts swordAndShieldMode is NonNullable<
  SpecialMultiplierArgs['swordAndShieldMode']
> {
  if (!swordAndShieldMode) {
    throw new Error('sword and shield mode required for damage calculations');
  }
}