import { zodResolver } from "@hookform/resolvers/zod";
import { Col, Modal, ModalProps, Row, notification } from "antd";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { SmppShablonResDto } from "types";
import { schema } from "./schema";
import { z } from "zod";
import { Button, Input, Select } from "components/shared";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useValues } from "context";
import { useShablonUpdate } from "hooks";
import { queryClient } from "services";

interface Props extends Omit<ModalProps, "onCancel"> {
  onCancel: VoidFunction;
  row: SmppShablonResDto;
}

interface FormValues extends z.infer<typeof schema> {}

const ReferenceForm: FC<Props> = ({ onCancel, row, ...props }) => {
  const { t } = useTranslation();
  const {
    state: { blockedOptions },
  } = useValues();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    reset({
      ...row,
      operatorCode: String(row?.operatorCode),
      priority: String(row?.priority),
    });
  }, [row, reset]);

  const updateMutation = useShablonUpdate({
    onSuccess() {
      onCancel();
      queryClient.invalidateQueries(["/v1/shablon/get-all"]);
      notification.success({ message: t("Муваффақиятли таҳрирланди") });
    },
    onError({ message, response }) {
      notification.error({
        message: t("Таҳрирлашда хатолик юз берди"),
        description: response?.data?.reason ?? message,
      });
    },
  });

  const onSubmit = handleSubmit(({ operatorCode, priority, ...values }) => {
    updateMutation.mutate({
      payload: {
        ...values,
        id: row?.id!,
        operatorCode: Number(operatorCode),
        priority: Number(priority),
      },
    });
  });

  console.log({ errors });
  return (
    <Modal
      {...props}
      open
      onCancel={onCancel}
      width={700}
      footer={null}
      title={<h3 className="text-center mb30">{t("Маълумотномани таҳрирлаш")}</h3>}
    >
      <form onSubmit={onSubmit}>
        <Row gutter={[20, 20]}>
          <Col md={12}>
            <Controller
              name="priority"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label={t("Устуворлик")}
                  size="large"
                  error={errors?.priority?.message}
                />
              )}
            />
          </Col>
          <Col md={12}>
            <Controller
              name="tag"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label={t("Tag")}
                  size="large"
                  error={errors?.tag?.message}
                />
              )}
            />
          </Col>
          <Col md={12}>
            <Controller
              name="operatorCode"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  label={t("Operator code")}
                  size="large"
                  type="number"
                  error={errors?.operatorCode?.message}
                />
              )}
            />
          </Col>
          <Col md={12}>
            <Controller
              name="blocked"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  label={t("Ҳолати")}
                  size="large"
                  options={blockedOptions}
                  error={errors?.blocked?.message}
                />
              )}
            />
          </Col>
        </Row>
        <Row justify="center" className="mt30 mb10">
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
            htmlType="submit"
            icon={<CheckOutlined />}
            loading={updateMutation.isLoading}
          >
            {t("Сақлаш")}
          </Button>
        </Row>
      </form>
    </Modal>
  );
};

export default ReferenceForm;
