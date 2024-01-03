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
  const { i18n } = useTranslation();
  const storageLang = localStorage.getItem("i18nextLng") as Languages;

  const changeLang = (lang: Languages) => {
    i18n.changeLanguage(lang.toLowerCase());
    window.location.reload();
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", storageLang);
  }, [storageLang]);

  const languages: Array<LanguageItem> = [
    {
      key: "uz",
      label: (
        <Space>
          <Icon name="flag-uzb" />
          <p>UZ</p>
        </Space>
      ),
      onClick: () => changeLang("uz"),
    },
    {
      key: "ru",
      label: (
        <Space>
          <Icon name="flag-russia" />
          <p>RU</p>
        </Space>
      ),
      onClick: () => changeLang("ru"),
    },
  ];

  const currentLang = languages.find(({ key }) => key === storageLang);

  return (
    <Dropdown menu={{ items: languages }} className={classes.dropdown}>
      <Space>
        <span>{currentLang?.label}</span>
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export default Language;
