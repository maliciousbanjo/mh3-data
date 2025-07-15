/**
 * Tail-recursion type-helper to enumerate values
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#tail-recursion-elimination-on-conditional-types
 * @example
 * type MyNumbers = Enumerate<3> // 0 | 1 | 2
 */
export type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>;

/**
 * Allows the definition of a range of numbers
 *
 * @param Min Inclusive minimum value
 * @param Max Exclusive maximum value
 */
export type NumericRange<Min extends number, Max extends number> = Exclude<
  Enumerate<Max>,
  Enumerate<Min>
>;
