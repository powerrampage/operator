import { QueryOptions, useGeneralAPIQuery } from "hooks";
import { ErrorReason, Pageable, ResponseDataDtoListSmppShablonResDto } from "types";

export const useShablonGetAll = (
  params: Pageable,
  options?: QueryOptions<ResponseDataDtoListSmppShablonResDto, ErrorReason>
) =>
  useGeneralAPIQuery({
    url: "/v1/shablon/get-all",
    params,
    options,
  });
