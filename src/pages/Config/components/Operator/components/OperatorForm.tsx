import { Input } from "components/shared";
import { ComponentProps, FC } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface Props extends ComponentProps<"form"> {
  form: UseFormReturn<{ name: string }, any, undefined>;
}

const OperatorForm: FC<Props> = ({
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
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            label={t("Номи")}
            allowClear
            size="large"
            error={errors?.name?.message}
          />
        )}
      />
    </form>
  );
};

export default OperatorForm;
