import { Combinable } from '../utils/types';

/**
 * Capitalizes the first letter of each word within the giving phrase
 * @param phrase
 * @returns fixed version of the phrase
 */
export function capitalizeFirstLetters(
  phrase: string,
  options?: { tag: boolean },
): string {
  const arr = phrase.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (options && options.tag) {
      if (arr[i] !== 'and' && arr[i] !== 'on' && arr[i] !== 'the') {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
    } else {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  }
  return arr.join(' ');
}

/**
 * Fixes the given string into a correct url slug (temp until product name fixes)
 * @param slug
 * @returns
 */
export function fixSlug(slug: string): string {
  const fixed: string = slug
    .toLowerCase()
    .replace(/[' '/]/g, '-')
    .replace(/[!:.;()""\[\]]/g, '')
    .replace(/(--|---|-+-)/g, '-');

  return fixed;
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

/**
 * Generates a random number between the specified parameteres (fully inclusive)
 * @param min
 * @param max
 * @returns
 */
export function generateRandomNum(min: number, max: number): number {
  const mi: number = Math.ceil(min);
  const mx: number = Math.floor(max);
  return Math.floor(Math.random() * (mx - mi + 1) + mi);
}

/**
 * Returns a new randomly shuffled based on the given array
 * @param array
 */
export function shuffleArray<T>(array: T[]) {
  let arr = array;
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
