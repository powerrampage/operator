import { MutationOptions } from "hooks";
import { useGeneralAPIMutation } from "../useGeneralAPIMutation";
import { ErrorReason, ShablonOperatorRequestDto } from "types";

export const useShablonOperatorUpdate = (
  options?: MutationOptions<unknown, ErrorReason, ShablonOperatorRequestDto>
) =>
  useGeneralAPIMutation({
    url: "/v1/shablon-operator/update",
    method: "POST",
    options,
  });

export const useShablonOperatorCreate = (
  options?: MutationOptions<unknown, ErrorReason, ShablonOperatorRequestDto>
) =>
  useGeneralAPIMutation({
    url: "/v1/shablon-operator/create",
    method: "POST",
    options,
  });
