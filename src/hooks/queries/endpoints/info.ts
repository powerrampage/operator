import { QueryOptions } from "hooks/custom";
import { useGeneralAPIQuery } from "../useGeneralAPIQuery";
import {
  ErrorReason,
  ResponseDataDtoListMessageStatusDto,
  ResponseDataDtoDashboardResponseDto,
} from "types";

export const useInfoGetAllOperatorStatsByDate = (
  params: {
    beginDate: string;
    endDate: string;
  },
  options?: QueryOptions<ResponseDataDtoDashboardResponseDto, ErrorReason>
) =>
  useGeneralAPIQuery({
    url: "/v1/info/get-all-operator-stats-by-date",
    params,
    options,
  });

export const useInfoGetAllMessageStatusByNumber = (
  params: {
    number: string;
  },
  options?: QueryOptions<ResponseDataDtoListMessageStatusDto, ErrorReason>
) =>
  useGeneralAPIQuery({
    url: "/v1/info/get-all-message-status-by-number",
    params,
    options,
  });

export const useInfoGetAllMessageStatusByNumberOperator = (
  params: {
    number: string;
    operator: string;
  },
  options?: QueryOptions<ResponseDataDtoListMessageStatusDto, ErrorReason>
) =>
  useGeneralAPIQuery({
    url: "/v1/info/get-all-message-status-by-number-operator",
    params,
    options,
  });
