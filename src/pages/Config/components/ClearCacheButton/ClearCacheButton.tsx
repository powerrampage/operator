import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "components/shared";
import { ClearOutlined } from "@ant-design/icons";
import { defaultConfirmModal } from "utils";
import { useInfoClearAllCachesManually } from "hooks";
import { notification } from "antd";

const ClearCacheButton: FC = () => {
  const { t } = useTranslation();

  const { mutate, isLoading } = useInfoClearAllCachesManually({
    onSuccess() {
      notification.success({
        message: t("Кеш муваффақиятли тозаланди"),
      });
    },
    onError({ response, message }) {
      notification.error({
        message: t("Кешни тозалашда хатолик юз берди"),
        description: response?.data?.reason ?? message,
      });
    },
  });

  const onClearCache = () => {
    defaultConfirmModal(
      () => {
        mutate({});
      },
      {
        title: t("Кешни тозалашни тасдиқлайсизми?"),
        loading: isLoading,
      }
    );
  };

  return (
    <Button type="link" size="large" danger icon={<ClearOutlined />} onClick={onClearCache}>
      {t("Кешни тозалаш")}
    </Button>
  );
};

export default ClearCacheButton;
