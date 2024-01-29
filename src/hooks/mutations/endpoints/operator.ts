import { MutationOptions } from "hooks/custom";
import {
  ErrorReason,
  OperatorRequestDto,
  ResponseDataDtoLong,
  ResponseDataDtoObject,
} from "types";
import { useGeneralAPIMutation } from "../useGeneralAPIMutation";

export const useOperatorActivate = (
  options?: MutationOptions<ResponseDataDtoObject, ErrorReason>
) =>
  useGeneralAPIMutation({
    url: "/v1/operator/activate",
    method: "PUT",
    options,
  });

export const useOperatorDeactivate = (
  options?: MutationOptions<ResponseDataDtoObject, ErrorReason>
) =>
  useGeneralAPIMutation({
    url: "/v1/operator/deactivate",
    method: "PUT",
    options,
  });

export const useOperatorCreate = (
  options?: MutationOptions<ResponseDataDtoLong, ErrorReason>
) =>
  useGeneralAPIMutation({
    url: "/v1/operator/create",
    method: "POST",
    options,
  });

export const useOperatorUpdate = (
  options?: MutationOptions<ResponseDataDtoLong, ErrorReason, OperatorRequestDto>
) =>
  useGeneralAPIMutation({
    url: "/v1/operator/update",
    method: "PUT",
    options,
  });

export const useOperatorChangeDefaultOperator = (
  options?: MutationOptions<ResponseDataDtoObject, ErrorReason>
) =>
  useGeneralAPIMutation({
    url: "/v1/operator/change-default-operator",
    method: "PUT",
    options,
  });
