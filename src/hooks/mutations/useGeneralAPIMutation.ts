import { MutationParams, useAPIMutation } from "hooks/custom";
import { useAPIInstances } from "services/api";

export type GeneralAPIMutationParams<
  TData = unknown,
  TError = unknown,
  TPayload = unknown
> = Omit<MutationParams<TData, TError, TPayload>, "instance">;

export function useGeneralAPIMutation<
  TData = unknown,
  TError = unknown,
  TPayload = unknown
>(args: GeneralAPIMutationParams<TData, TError, TPayload>) {
  const { generalRequest } = useAPIInstances();

  return useAPIMutation<TData, TError, TPayload>({
    ...args,
    instance: generalRequest,
  });
}
