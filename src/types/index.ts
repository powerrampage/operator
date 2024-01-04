export * from "./eimzo";
export * from "./helpers";
export * from "./mysoliq";
export * from "./swagger";

export interface ErrorReason {
  status: number;
  reason: string;
}

export type PageableParam<T> = {
  page?: number;
  size?: number;
} & T;

export type PageableResp<TData extends object> = {
  count: number;
  totalCount: number;
  items: TData[];
};

export type RespData<TData> = {
  success: boolean;
  reason: string;
  data: TData;
};

export type UserRoles = "ADMIN";
