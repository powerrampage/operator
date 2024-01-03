import { UseMutationOptions, UseMutationResult, useMutation } from "@tanstack/react-query";

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from "axios";

import { arrangeURL } from "utils";

export interface MutateVariables<TPayload = unknown, TData = unknown, TParams = object> {
  params?: TParams;
  slug?: string | number;
  payload?: TPayload;
  config?: AxiosRequestConfig<TData>;
}

export type MutationOptions<TData = unknown, TError = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<
    AxiosResponse<TData>,
    AxiosError<TError>,
    MutateVariables<TVariables, TData>
  >,
  "mutationKey" | "mutationFn"
>;

export type MutationResult<
  TData = unknown,
  TError = unknown,
  TVariables = unknown
> = UseMutationResult<
  AxiosResponse<TData>,
  AxiosError<TError>,
  MutateVariables<TVariables, TData>
>;

export interface MutationParams<TData = unknown, TError = unknown, TVariables = unknown> {
  readonly url?: string;
  readonly method?: Method;
  readonly config?: AxiosRequestConfig<TData>;
  readonly options?: MutationOptions<TData, TError, TVariables>;
  readonly instance?: AxiosInstance;
}

export const useAPIMutation = <TData = unknown, TError = unknown, TVariables = unknown>({
  url,
  method,
  config = {},
  options = {},
  instance,
}: MutationParams<TData, TError, TVariables>) => {
  const request = instance ?? axios;

  return useMutation<
    AxiosResponse<TData>,
    AxiosError<TError>,
    MutateVariables<TVariables, TData>
  >({
    ...options,
    mutationKey: [url],
    mutationFn: ({ slug, payload, params, config: mutateConfig = config }) => {
      return request({
        url: slug ? arrangeURL(url + "/" + slug) : url,
        params,
        method,
        data: payload,
        ...mutateConfig,
      });
    },
  });
};
