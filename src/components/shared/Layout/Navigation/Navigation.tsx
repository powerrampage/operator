import { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

import classes from "./Navigation.module.scss";
import Container from "components/shared/Container";
import { Col, Row } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  OrderedListOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Navigation: FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const list: Array<{ title: string; path: string; active?: boolean; icon: ReactNode }> = [
    {
      title: t("Бош сахифа"),
      path: "/",
      icon: <HomeOutlined />,
    },
    {
      title: t("Рўйхат"),
      path: "/list",
      icon: <OrderedListOutlined />,
    },
    {
      title: t("Конфиг"),
      path: "/config",
      icon: <SettingOutlined />,
    },
    {
      title: t("Маълумотнома"),
      path: "/reference",
      icon: <InfoCircleOutlined />,
    },
  ];

  return (
    <nav className={classes.nav}>
      <Container>
        <Row gutter={[20, 20]} className={classes.rowList}>
          {list.map(({ title, path, active, icon }, idx) => (
            <Col key={idx} lg={24 / list.length}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive || active ? classes.activeLink : classes.link
                }
              >
                {icon}
                {title}
              </NavLink>
            </Col>
          ))}
        </Row>
      </Container>
    </nav>
  );
};

export default Navigation;
