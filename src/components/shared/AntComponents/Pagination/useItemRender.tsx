import { ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { PaginationProps } from "antd";
import { Button, Icon } from "components/shared";

const useItemRender = () => {
  const { t } = useTranslation();

  const itemRender: PaginationProps["itemRender"] = useCallback(
    (page: number, type: string, originalElement: ReactNode) => {
      if (type === "prev") {
        return (
          <Button className="sicnt-pagination__left" icon={<Icon name="chevron-left" />}>
            {t("Предыдущая")}
          </Button>
        );
      }
      if (type === "next") {
        return (
          <Button className="sicnt-pagination__right">
            {t("Следующая")}
            <Icon name="chevron-left" />
          </Button>
        );
      }
      return originalElement;
    },
    [t]
  );

  return {
    itemRender,
  };
};

export default useItemRender;
