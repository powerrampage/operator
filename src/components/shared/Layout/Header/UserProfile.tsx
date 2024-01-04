import { Button, Skeleton, Space, Tag, Typography } from "antd";
import { ComponentProps, FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./Header.module.scss";
import { Icon } from "components/shared";
import { useUser } from "hooks";

interface Props extends ComponentProps<"div"> {
  openMenu?: VoidFunction | undefined;
}

const UserProfile: FC<Props> = ({ openMenu, ...props }) => {
  const { t } = useTranslation();
  const { isLogged, userInfo, role } = useUser();

  const isLoading = !Object.keys(userInfo).length;

  return isLogged ? (
    <div {...props}>
      <Space size="middle">
        {isLoading ? (
          <Skeleton.Avatar active size="large" shape="circle" />
        ) : (
          <Button type="link" className={classes.profile} onClick={openMenu}>
            <Icon name="default-user" />
          </Button>
        )}
        {isLoading ? (
          <Skeleton.Input active size="large" />
        ) : (
          <div>
            <Typography.Text
              ellipsis
              style={{ maxWidth: 400 }}
              className="size20 font-bold mb3 uppercase underline"
              role="button"
            >
              {`${userInfo.lastName ?? "-"}
            ${userInfo.firstName ?? "-"}
            ${userInfo.middleName ?? "-"}`}
            </Typography.Text>
            <p className="size14 light mb3">
              {t("ЖШШИР")}: {userInfo?.pinfl}
            </p>
          </div>
        )}
      </Space>
    </div>
  ) : (
    <></>
  );
};

export default UserProfile;
