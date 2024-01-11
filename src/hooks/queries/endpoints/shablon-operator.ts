import { QueryOptions, useGeneralAPIQuery } from "hooks";
import {
  ErrorReason,
  Pageable,
  ResponseDataDtoListShablonOperatorResponseDto,
} from "types";

export const useShablonOperatorGetAll = (
  params: Pageable,
  options?: QueryOptions<ResponseDataDtoListShablonOperatorResponseDto, ErrorReason>
) =>
  useGeneralAPIQuery({
    url: "/v1/shablon-operator/get-all",
    params,
    options,
  });
