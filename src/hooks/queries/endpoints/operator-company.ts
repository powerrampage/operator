import { QueryOptions } from "hooks/custom";
import {
  ErrorReason,
  Pageable,
  ResponseDataDtoListOperatorCompanyResponseDto,
} from "types";
import { useGeneralAPIQuery } from "../useGeneralAPIQuery";

export const useOperatorCompanyGetAll = (
  params?: Pageable,
  options?: QueryOptions<ResponseDataDtoListOperatorCompanyResponseDto, ErrorReason>
) =>
  useGeneralAPIQuery({
    url: "/v1/operator_company/get-all",
    params,
    options,
  });
