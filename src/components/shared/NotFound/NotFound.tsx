import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./NotFound.module.scss";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export const NotFound: FC = () => {
  const { t } = useTranslation();

  return (
    <section className={classes.wrapper}>
      <div className={classes.inner}>
        <div className="mb15">
          <p className="size24 bold danger">{t("САҲИФА")}</p>
          <p className="size40 bold danger">{t("МАВЖУД ЭМАС")}</p>
        </div>
        <Link to="/">
          <Button size="large" type="primary" icon={<HomeOutlined />}>
            {t("Бош саҳифага қайтиш")}
          </Button>
        </Link>
      </div>
    </section>
  );
};
