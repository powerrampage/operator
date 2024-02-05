import { FC, useMemo } from "react";
import { Container } from "components/shared";
import { Tabs, TabsProps } from "antd";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ClearCacheButton from "./components/ClearCacheButton";

const Config: FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const activeKey = pathname.split("/").pop();

  const navigate = useNavigate();

  const items: TabsProps["items"] = useMemo(
    () => [
      {
        label: t("Оператор"),
        key: "operator",
      },
      {
        label: t("Operator kompany"),
        key: "operator-company",
      },
      {
        label: t("Шаблон оператор"),
        key: "operator-shablon",
      },
      {
        label: t("Стандарт оператор"),
        key: "default-operator",
      },
    ],
    [t]
  );

  return (
    <section className="my40">
      <Container>
        <Tabs
          size="large"
          type="card"
          activeKey={activeKey}
          items={items}
          onChange={(value) => {
            navigate(String(value), {
              replace: true,
            });
          }}
          tabBarExtraContent={{ right: <ClearCacheButton /> }}
        />
        <Outlet />
      </Container>
    </section>
  );
};

export default Config;
