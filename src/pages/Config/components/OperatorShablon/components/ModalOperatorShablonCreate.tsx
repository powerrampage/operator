import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Divider, Modal, ModalProps, Row, notification } from "antd";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { requiredField } from "utils";
import { Button } from "components/shared";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { useShablonOperatorCreate } from "hooks";
import { queryClient } from "services";
import OperatorShablonForm from "./OperatorShablonForm";

interface Props extends Omit<ModalProps, "onCancel"> {
  onCancel: VoidFunction;
}

const ModalOperatorShablonCreate: FC<Props> = ({ onCancel, ...props }) => {
  const { t } = useTranslation();

  const form = useForm<{ operator: string; shablonCode: string }>({
    resolver: zodResolver(
      z.object({ operator: requiredField(), shablonCode: requiredField() })
    ),
  });

  const createMutation = useShablonOperatorCreate({
    onSuccess() {
      queryClient.invalidateQueries(["/v1/shablon-operator/get-all"]);
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

  const onSubmit = form.handleSubmit(({ shablonCode, ...values }) => {
    createMutation.mutate({
      payload: {
        ...values,
        shablonCode: Number(shablonCode),
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
      title={<h2 className="text-center mb20">{t("Шаблон оператор қўшиш")}</h2>}
    >
      <Divider />
      <OperatorShablonForm form={form} />
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

export default ModalOperatorShablonCreate;
