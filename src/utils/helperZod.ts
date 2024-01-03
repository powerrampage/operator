import i18n from "services/i18n";
import { z } from "zod";

export const requiredField = (message: string = i18n.t("Киритиш мажбурий")) =>
  z
    .string({ required_error: message, invalid_type_error: message })
    .min(1, { message: message });

export const requiredSelect = (message: string = i18n.t("Танлаш мажбурий")) =>
  z
    .number({ required_error: message, invalid_type_error: message })
    .min(1, { message: message });
