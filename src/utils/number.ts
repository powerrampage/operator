const invalid = (value: unknown): boolean =>
  value === "null" || value === "NaN" || value === "Infinity" || value === undefined;

export function addSpaceEvery3Char(num: number, count = 1, defaultValue = 0) {
  const formatter = (value: unknown) =>
    String(Number(value).toFixed(count))
      .replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ")
      .replace(".", ",");

  try {
    const value = formatter(num);

    return invalid(value) ? formatter(defaultValue) : value;
  } catch (e) {
    return formatter(defaultValue);
  }
}

export function formatNumber(val: number, count = 1, defaultValue = 0) {
  const value = Number(val);

  const formatter = (value: unknown) =>
    String(value)
      .replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, " ")
      .replace(".", ",");

  if (Number.isInteger(value)) {
    const result = formatter(value);

    return invalid(result) ? formatter(defaultValue) : result;
  } else {
    const result = formatter(Number(value)?.toFixed(count));

    return invalid(result) ? formatter(Number(defaultValue)?.toFixed(count)) : result;
  }
}

export function romanize(num: number) {
  let temp = num;
  let roman = "";
  const lookup: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (const i in lookup) {
    while (temp >= lookup[i]) {
      roman += i;
      temp -= lookup[i];
    }
  }
  return roman;
}
