import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { MenuProps, Modal, ModalFuncProps, notification } from "antd";
import { AxiosError } from "axios";
import i18n from "services/i18n";

export function catchDefaultError(error: AxiosError<any, any>) {
  notification.error({
    message: i18n.t("Хатолик юз берди"),
    description: error?.response?.data?.message ?? error?.message,
  });
}

export function defaultConfirmModal(
  callback: VoidFunction,
  props?: {
    loading?: boolean;
  } & ModalFuncProps
) {
  Modal.confirm({
    okText: i18n.t("Тасдиқлайман"),
    cancelText: i18n.t("Бекор қилиш"),
    ...props,
    title: props?.title ?? i18n.t("Тасдиқлайсизми?"),
    onOk: callback,
    okButtonProps: {
      loading: props?.loading,
      icon: <CheckOutlined />,
    },
    cancelButtonProps: {
      type: "link",
      icon: <CloseOutlined />,
    },
  });
}

export type MenuItem = Required<MenuProps>["items"][number];

export function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
