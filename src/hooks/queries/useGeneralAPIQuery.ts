import { QueryParams, useAPIQuery } from "hooks";
import { useAPIInstances } from "services";

export type GeneralAPIQueryParams<
  TData = unknown,
  TError = unknown,
  TSelectData = TData
> = Omit<QueryParams<TData, TError, TSelectData>, "instance">;

export function useGeneralAPIQuery<TData = unknown, TError = unknown, TSelectData = TData>(
  args: GeneralAPIQueryParams<TData, TError, TSelectData>
) {
  const { generalRequest } = useAPIInstances();

  return useAPIQuery<TData, TError, TSelectData>({
    ...args,
    instance: generalRequest,
  });
}
