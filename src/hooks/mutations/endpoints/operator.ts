import { MutationOptions } from "hooks/custom";
import { ErrorReason, ResponseDataDtoObject } from "types";
import { useGeneralAPIMutation } from "../useGeneralAPIMutation";

export const useOperatorActivate = (
  options?: MutationOptions<ResponseDataDtoObject, ErrorReason, unknown>
) =>
  useGeneralAPIMutation({
    url: "/v1/operator/activate",
    method: "PUT",
    options,
  });

export const useOperatorDeactivate = (
  options?: MutationOptions<ResponseDataDtoObject, ErrorReason, unknown>
) =>
  useGeneralAPIMutation({
    url: "/v1/operator/deactivate",
    method: "PUT",
    options,
  });
