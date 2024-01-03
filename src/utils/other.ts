import { CurrDate } from "constants/general";
import { isString } from "./isValid";

/**
 * Removes duplicate forward slashes from the specified URL.
 * @param url - The URL to modify.
 * @returns A new string with duplicate forward slashes removed.
 */
export const arrangeURL = (value: unknown): string => {
  if (isString(value)) {
    return value?.replace(/([^:]\/)\/+/g, "$1");
  }

  return "";
};

export function RGBToHex(r: number, g: number, b: number) {
  try {
    return ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
  } catch (e) {
    return "";
  }
}

export function hexToRGB(hex: string, inCase = "") {
  try {
    let alpha = false,
      h: any = hex.slice(hex.startsWith("#") ? 1 : 0);
    if (h.length === 3) h = [...h].map((x) => x + x).join("");
    else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    return (
      "rgb" +
      (alpha ? "a" : "") +
      "(" +
      (h >>> (alpha ? 24 : 16)) +
      ", " +
      ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
      ", " +
      ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
      (alpha ? `, ${h & 0x000000ff}` : "") +
      ")"
    );
  } catch (e) {
    return inCase;
  }
}

export function returnArrayIfIsset<T>(value: T[] | T): T[] {
  return Array.isArray(value) ? value : [];
}

export const yearOptions = (max = CurrDate.YEAR, min = 2020) => {
  const years = [];
  for (let i = max; i >= min; i--) {
    years.push({
      label: String(i),
      value: i,
    });
  }
  return years || [];
};

export function createProxyWithHandler<T extends Record<string, unknown>>(
  obj: T,
  defaultValue: any
) {
  return new Proxy(obj, {
    get: (target: T, key: string) => {
      return Reflect.has(target, key) ? target[key] : defaultValue;
    },
  });
}

export const truncateMid = function (
  fullStr: string = "",
  strLen: number = 20,
  separator: string = "..."
) {
  if (!isString(fullStr)) return fullStr;

  if (fullStr?.length <= strLen) return fullStr;

  separator = separator || "...";

  let sepLen = separator.length,
    charsToShow = strLen - sepLen,
    frontChars = Math.ceil(charsToShow / 2),
    backChars = Math.floor(charsToShow / 2);

  return (
    fullStr?.substr(0, frontChars) + separator + fullStr?.substr(fullStr.length - backChars)
  );
};

export function getLastPathName(pathname: string) {
  if (isString(pathname)) {
    return pathname.split("/").at(-1);
  } else {
    return pathname;
  }
}
