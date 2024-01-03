import { AxiosResponse } from "axios";
import { isObject } from "./isValid";
import { decodeUTF8 } from "./base64";

export function _parse<T>(value: string, inCaseVal?: any): T | undefined {
  try {
    return JSON.parse(value ?? "");
  } catch (e) {
    return inCaseVal;
  }
}

export function _stringify(obj: any, inCaseVal?: any) {
  try {
    return JSON.stringify(obj);
  } catch (e) {
    return inCaseVal;
  }
}

/**
 * Removes specified values from an object or array recursively.
 * @param {Object|Array} value - The input object or array.
 * @param {Array<any>} removedValues - An array of values to remove from the input.
 * @returns {Object|Array} A cleaned version of the input with all instances of the specified removed values removed.
 * NOTE: If the object has a method, it is automatically removed.
 */
export function clean(
  value: Object | Array<any>,
  removedValues: any[] = [undefined, null, ""]
): object | Array<any> {
  const replacer = (_: unknown, value: any) =>
    removedValues.includes(value) ? undefined : value;

  if (isObject(value)) {
    return JSON.parse(JSON.stringify(value, replacer));
  }

  if (Array.isArray(value)) {
    return value.filter((item) => !removedValues.includes(item));
  }

  return value;
}

export function removeDuplicates(array: any[]) {
  try {
    return Array.from(new Set([...array]));
  } catch (e) {
    return array;
  }
}

export function compose(...funcs: Function[]) {
  if (funcs.length === 0) {
    return (arg: any) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(
    (f, g) =>
      (...args: any[]) =>
        f(g(...args))
  );
}

export function pipe(...funcs: Function[]) {
  if (funcs.length === 0) {
    return (arg: any) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduceRight(
    (f, g) =>
      (...args: any[]) =>
        f(g(...args))
  );
}

export function getFileNameFromHeaders(headers: AxiosResponse["headers"]) {
  const [, fileName] = (headers?.["content-disposition"] ?? "").split("=") ?? [];
  return decodeUTF8(fileName);
}
