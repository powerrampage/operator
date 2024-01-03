import dayjs from 'dayjs';

export enum CurrDate {
  MONTH = dayjs().month() + 1,
  YEAR = dayjs().year(),
  DAY = dayjs().day(),
}

export const PI = 3.14159265359 as const;

export const DATE_FORMAT = 'DD.MM.YYYY';
export const DATE_FORMAT2 = 'YYYY-MM-DD';
export const DATE_TIME_FORMAT = "DD.MM.YYYY HH:mm:ss";
export const SERVER_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

export const TIN_LENGTH = 9,
  PINFL_LENGTH = 14;

export const MILLIARD = 1e9,
  MILLION = 1e6,
  MILLE = 1e3;
