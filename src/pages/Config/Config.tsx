import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./Config.module.scss";

const Config: FC = () => {
  const { t } = useTranslation();

  return <div>{t("Config")}</div>;
};

export default Config;
