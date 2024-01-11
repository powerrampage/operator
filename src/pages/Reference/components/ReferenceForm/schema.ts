import i18n from "services/i18n";
import { requiredField } from "utils";
import { z } from "zod";

export const schema = z.object({
  tag: requiredField(),
  blocked: z.number({
    required_error: i18n.t("Танлаш мажбурий"),
    invalid_type_error: i18n.t("Танлаш мажбурий"),
  }),
  priority: requiredField(),
  operatorCode: requiredField(),
});
