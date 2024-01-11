import { MutationOptions } from "hooks/custom";
import { ErrorReason, SmppShablonReqDto } from "types";
import { useGeneralAPIMutation } from "../useGeneralAPIMutation";

export const useShablonUpdate = (
  options?: MutationOptions<unknown, ErrorReason, SmppShablonReqDto>
) =>
  useGeneralAPIMutation({
    url: "/v1/shablon/update",
    method: "POST",
    options,
  });
