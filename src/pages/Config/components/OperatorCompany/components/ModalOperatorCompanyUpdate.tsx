import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Divider, Modal, ModalProps, Row, notification } from "antd";
import { OperatorCompanyResponseDto } from "types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { requiredField } from "utils";
import { Button } from "components/shared";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useOperatorCompanyUpdate } from "hooks";
import { queryClient } from "services";
import OperatorCompanyForm from "./OperatorCompanyForm";

interface Props extends Omit<ModalProps, "onCancel"> {
  onCancel: VoidFunction;
  row: OperatorCompanyResponseDto;
}

const ModalOperatorCompanyUpdate: FC<Props> = ({ onCancel, row, ...props }) => {
  const { t } = useTranslation();

  const form = useForm<{ name: string; company: string }>({
    resolver: zodResolver(z.object({ name: requiredField(), company: requiredField() })),
  });

  useEffect(() => {
    form.reset({
      name: row?.operator,
      company: row?.company,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [row]);

  const updateMutation = useOperatorCompanyUpdate({
    onSuccess() {
      queryClient.invalidateQueries(["/v1/operator_company/get-all"]);
      onCancel();
      notification.success({ message: t("Муваффақиятли сақланди") });
    },
    onError({ message, response }) {
      notification.error({
        message: t("Хатолик юз берди"),
        description: response?.data?.reason ?? message,
      });
    },
  });

  const onSubmit = form.handleSubmit(({ name, ...values }) => {
    updateMutation.mutate({
      payload: {
        ...values,
        operator: name,
        id: row?.id!,
      },
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
      <OperatorCompanyForm form={form} />
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

export default ModalOperatorCompanyUpdate;
