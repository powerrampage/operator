import { QueryOptions, useGeneralAPIQuery } from "hooks";
import {
  ErrorReason,
  Pageable,
  ResponseDataDtoListOperatorResponseDto,
  ResponseDataDtoOperatorResponseDto,
} from "types";

export const useOperatorGetAll = (
  params?: Pageable,
  options?: QueryOptions<ResponseDataDtoListOperatorResponseDto, ErrorReason>
) =>
  useGeneralAPIQuery({
    url: "/v1/operator/get-all",
    params,
    options,
  });

export const useOperatorGetDefaultOperator = (
  params: Pageable,
  options?: QueryOptions<ResponseDataDtoOperatorResponseDto, ErrorReason>
) =>
  useGeneralAPIQuery({
    url: "/v1/operator/get-default-operator",
    params,
    options,
  });
