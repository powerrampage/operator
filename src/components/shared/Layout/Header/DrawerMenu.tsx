import { ComponentProps, FC } from "react";
import { useTranslation } from "react-i18next";
import { Divider, Drawer, Space } from "antd";
import { Button, Icon } from "components/shared";
import { LogoutOutlined } from "@ant-design/icons";
import { useUser } from "hooks";

interface Props extends Omit<ComponentProps<typeof Drawer>, "onClose"> {
  onClose: VoidFunction;
}

const DrawerMenu: FC<Props> = ({ onClose, ...props }) => {
  const { t } = useTranslation();
  const { logoutUser, userInfo } = useUser();

  const onLogout = () => {
    onClose();
    setTimeout(() => {
      logoutUser();
    }, 100);
  };

  return (
    <Drawer onClose={onClose} {...props}>
      <Space className="mb20" size="middle">
        <Icon name="default-user" />
        <h2 className="uppercase size20">
          {`${userInfo.lastName ?? "-"}
            ${userInfo.firstName ?? "-"}
            ${userInfo.middleName ?? "-"}`}
        </h2>
      </Space>
      <p className="color-tail-grids size18 mb10">
        {t("Роль")}: {userInfo?.role ?? "-"}
      </p>
      <p className="color-tail-grids size18 mb10">
        {t("ЖШШИР")}: {userInfo?.pinfl ?? "-"}
      </p>
      <p className="color-tail-grids size18 mb10">
        {t("Телефон рақам")}: {userInfo?.phoneNumber ?? "-"}
      </p>
      <p className="color-tail-grids size18 mb10">
        {t("Ташкилот")}: {userInfo?.companyName ?? "-"}
      </p>
      <Divider />
      <Button block size="large" type="text" icon={<LogoutOutlined />} onClick={onLogout}>
        {t("Тизимдан чиқиш")}
      </Button>
    </Drawer>
  );
};

export default DrawerMenu;
