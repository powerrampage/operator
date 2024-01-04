import { useTranslation } from "react-i18next";

import classes from "./Language.module.scss";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Languages } from "types";

import { MenuItemType } from "antd/es/menu/hooks/useItems";
import { Icon } from "components/shared";
import { useEffect } from "react";

interface LanguageItem extends Omit<MenuItemType, "key"> {
  key: Languages;
}

const Language = () => {
  const { t, i18n } = useTranslation();
  const storageLang = localStorage.getItem("i18nextLng") as Languages;

  const changeLang = (lang: Languages) => {
    i18n.changeLanguage(lang.toLowerCase());
  };

  const languages: Array<LanguageItem> = [
    {
      key: "latin",
      label: t("O'zbekcha"),
      onClick: () => changeLang("latin"),
    },
    {
      key: "cyril",
      label: t("Ўзбекча"),
      onClick: () => changeLang("cyril"),
    },
    {
      key: "ru",
      label: t("Русский"),
      onClick: () => changeLang("ru"),
    },
  ];

  const currentLang = languages.find(({ key }) => key === storageLang);

  return (
    <Dropdown menu={{ items: languages }} className={classes.dropdown}>
      <Space>
        <p>{currentLang?.label}</p>
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default Language;
