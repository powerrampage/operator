import { MutationOptions } from "hooks";
import { useGeneralAPIMutation } from "../useGeneralAPIMutation";
import { ErrorReason, OperatorCompanyRequestDto, ResponseDataDtoObject } from "types";

export const useOperatorCompanyActivate = (
  options?: MutationOptions<ResponseDataDtoObject, ErrorReason, unknown>
) =>
  useGeneralAPIMutation({
    url: "/v1/operator_company/activate",
    method: "PUT",
    options,
  });

export const useOperatorCompanyDeactivate = (
  options?: MutationOptions<ResponseDataDtoObject, ErrorReason, unknown>
) =>
  useGeneralAPIMutation({
    url: "/v1/operator_company/deactivate",
    method: "PUT",
    options,
  });

export const useOperatorCompanyCreate = (
  options?: MutationOptions<unknown, ErrorReason, OperatorCompanyRequestDto>
) =>
  useGeneralAPIMutation({
    url: "/v1/operator_company/create",
    method: "POST",
    options,
  });

export const useOperatorCompanyUpdate = (
  options?: MutationOptions<unknown, ErrorReason, OperatorCompanyRequestDto>
) =>
  useGeneralAPIMutation({
    url: "/v1/operator_company/update",
    method: "PUT",
    options,
  });
