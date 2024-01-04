import { Modal, ModalProps } from "antd";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props extends Omit<ModalProps, "onCancel"> {
  onCancel: VoidFunction;
}

const ReferenceForm: FC<Props> = ({ onCancel, ...props }) => {
  const { t } = useTranslation();

  return (
    <Modal
      {...props}
      open
      onCancel={onCancel}
      width={800}
      footer={null}
      title={<h3 className="text-center mb30">{t("Маълумотнома қўшиш")}</h3>}
    >
      <form></form>
    </Modal>
  );
};

export default ReferenceForm;
