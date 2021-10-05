import { Combinable } from "../utils/types";

/**
 * Checks given string or number against given regex
 * @param regex - regular expression
 * @param c     - value to compare against given regex
 * @returns
 */
export function preg_match(regex: string, c: Combinable): boolean | undefined {
  if (typeof c === "string") return new RegExp(regex).test(c);
  if (typeof c === "number") return new RegExp(regex).test(c.toString());
}
