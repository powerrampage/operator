import { useQuery, QueryKey, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { arrangeURL } from "utils";

export type QueryOptions<
  TData = unknown,
  TError = unknown,
  TSelectData = AxiosResponse<TData>,
  TKey extends QueryKey = QueryKey
> = Omit<
  UseQueryOptions<AxiosResponse<TData>, AxiosError<TError>, TSelectData, TKey>,
  "queryKey" | "queryFn"
>;

export type QueryResult<TData = unknown, TError = unknown> = UseQueryResult<
  AxiosResponse<TData>,
  AxiosError<TError>
>;

export interface QueryParams<
  TData = unknown,
  TError = unknown,
  TSelectData = AxiosResponse<TData>,
  TKey extends QueryKey = QueryKey
> {
  readonly url?: string;
  readonly params?: unknown;
  readonly options?: QueryOptions<TData, TError, TSelectData, TKey>;
  readonly config?: AxiosRequestConfig<TData>;
  readonly key?: TKey;
  readonly instance?: AxiosInstance;
}

export const useAPIQuery = <
  TData = unknown,
  TError = unknown,
  TSelectData = AxiosResponse<TData>,
  TKey extends QueryKey = QueryKey
>({
  url,
  options = {},
  params = {},
  config = {},
  instance,
  key,
}: QueryParams<TData, TError, TSelectData, TKey>) => {
  const request = instance ?? axios;

  return useQuery<AxiosResponse<TData>, AxiosError<TError>, TSelectData, TKey>({
    ...options,
    queryKey: (key ?? [url, params]) as TKey,
    async queryFn() {
      return await request.get(arrangeURL(url), {
        ...config,
        params,
      });
    },
  });
};
