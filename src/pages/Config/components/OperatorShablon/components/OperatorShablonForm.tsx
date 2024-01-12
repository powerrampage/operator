import { Input } from "components/shared";
import { ComponentProps, FC } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface Props extends ComponentProps<"form"> {
  form: UseFormReturn<{ operator: string; shablonCode: string }>;
}

const OperatorShablonForm: FC<Props> = ({
  form: {
    control,
    formState: { errors },
    ...form
  },
  ...formProps
}) => {
  const { t } = useTranslation();

  return (
    <form {...formProps}>
      <Controller
        name="operator"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label={t("Оператор")}
            allowClear
            size="large"
            error={errors?.operator?.message}
          />
        )}
      />
      <br />
      <Controller
        name="shablonCode"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label={t("Шаблон коди")}
            allowClear
            size="large"
            type="number"
            error={errors?.shablonCode?.message}
          />
        )}
      />
    </form>
  );
};

export default OperatorShablonForm;
