import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./FilterAction.module.scss";

const FilterAction: FC = () => {
  const { t } = useTranslation();

  return <div>{t("FilterAction")}</div>;
};

export default FilterAction;
