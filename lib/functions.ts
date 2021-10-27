import { Combinable } from '../utils/types';

/**
 * Capitalizes the first letter of each word within the giving phrase
 * @param phrase
 * @returns fixed version of the phrase
 */
export function capitalizeFirstLetters(phrase: string): string {
  const arr = phrase.split(' ');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
}

/**
 * Checks given string or number against given regex
 * @param regex - regular expression
 * @param c     - value to compare against given regex
 * @returns
 */
export function preg_match(regex: string, c: Combinable): boolean | undefined {
  if (typeof c === 'string') return new RegExp(regex).test(c);
  if (typeof c === 'number') return new RegExp(regex).test(c.toString());
}
