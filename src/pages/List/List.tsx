import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./List.module.scss";

const List: FC = () => {
  const { t } = useTranslation();

  return <div>{t("List")}</div>;
};

export default List;
