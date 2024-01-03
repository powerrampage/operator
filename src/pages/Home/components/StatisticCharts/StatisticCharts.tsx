import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./StatisticCharts.module.scss";

const StatisticCharts: FC = () => {
  const { t } = useTranslation();

  return <div>{t("StatisticCharts")}</div>;
};

export default StatisticCharts;
