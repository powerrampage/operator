import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./TableOperator.module.scss";

const TableOperator: FC = () => {
  const { t } = useTranslation();

  return <div>{t("TableOperator")}</div>;
};

export default TableOperator;
