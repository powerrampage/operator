import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Divider, Modal, ModalProps, Row, notification } from "antd";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { requiredField } from "utils";
import { Button, Input } from "components/shared";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useOperatorChangeDefaultOperator } from "hooks";
import { queryClient } from "services";

interface Props extends Omit<ModalProps, "onCancel"> {
  onCancel: VoidFunction;
}

const DefaultOperatorModalUpdate: FC<Props> = ({ onCancel, ...props }) => {
  const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<{ operator_id: string }>({
    resolver: zodResolver(z.object({ operator_id: requiredField() })),
  });

  const updateMutation = useOperatorChangeDefaultOperator({
    onSuccess(response) {
      queryClient.invalidateQueries(["/v1/operator/get-default-operator"]);
      onCancel();
      notification.success({
        message: t("Муваффақиятли сақланди"),
        description: response?.data?.reason,
      });
    },
    onError({ message, response }) {
      notification.error({
        message: t("Хатолик юз берди"),
        description: response?.data?.reason ?? message,
      });
    },
  });

  const onSubmit = handleSubmit(({ operator_id }) => {
    updateMutation.mutate({
      params: { operator_id },
    });
  });

  return (
    <Modal
      {...props}
      open
      footer={null}
      onCancel={onCancel}
      width={600}
      title={<h2 className="text-center mb20">{t("Таҳрирлаш")}</h2>}
    >
      <Divider />
      <form>
        <Controller
          name="operator_id"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="number"
              size="large"
              label={t("Оператор ID")}
              error={errors?.operator_id?.message}
            />
          )}
        />
      </form>
      <Divider />
      <Row justify="center" className="mt30 mb10 gap-10">
        <Button
          size="large"
          type="link"
          shape="round"
          icon={<CloseOutlined />}
          onClick={onCancel}
        >
          {t("Бекор қилиш")}
        </Button>
        <Button
          size="large"
          type="primary"
          shape="round"
          icon={<CheckOutlined />}
          onClick={onSubmit}
          loading={updateMutation.isLoading}
        >
          {t("Сақлаш")}
        </Button>
      </Row>
    </Modal>
  );
};

export default DefaultOperatorModalUpdate;
