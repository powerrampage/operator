import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Divider, Modal, ModalProps, Row, notification } from "antd";
import OperatorForm from "./OperatorForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { requiredField } from "utils";
import { Button } from "components/shared";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useOperatorCreate } from "hooks";
import { queryClient } from "services";

interface Props extends Omit<ModalProps, "onCancel"> {
  onCancel: VoidFunction;
}

const ModalOperatorCreate: FC<Props> = ({ onCancel, ...props }) => {
  const { t } = useTranslation();

  const form = useForm<{ name: string }>({
    resolver: zodResolver(z.object({ name: requiredField() })),
  });

  const createMutation = useOperatorCreate({
    onSuccess() {
      queryClient.invalidateQueries(["/v1/operator/get-all"]);
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

  const onSubmit = form.handleSubmit(({ name }) => {
    createMutation.mutate({
      params: { name },
    });
  });

  return (
    <Modal
      {...props}
      open
      footer={null}
      onCancel={onCancel}
      width={600}
      title={<h2 className="text-center mb20">{t("Оператор қўшиш")}</h2>}
    >
      <Divider />
      <OperatorForm form={form} />
      <Row gutter={[20, 20]} justify="center" className="mt30 mb10 gap-10">
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
          loading={createMutation.isLoading}
        >
          {t("Сақлаш")}
        </Button>
      </Row>
    </Modal>
  );
};

export default ModalOperatorCreate;
