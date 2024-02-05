import { MutationOptions } from "hooks/custom";
import { useGeneralAPIMutation } from "../useGeneralAPIMutation";
import { ErrorReason, ResponseDataDtoObject } from "types";

export const useInfoClearAllCachesManually = (
  options?: MutationOptions<ResponseDataDtoObject, ErrorReason>
) =>
  useGeneralAPIMutation({
    url: "/v1/info/clear-all-caches-manually",
    method: "GET",
    options,
  });
