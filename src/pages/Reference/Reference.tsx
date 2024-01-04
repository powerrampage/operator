import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./Reference.module.scss";

const Reference: FC = () => {
  const { t } = useTranslation();

  return <div>{t("Reference")}</div>;
};

export default Reference;
