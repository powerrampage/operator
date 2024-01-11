import { useCallback, useState } from "react";
import classes from "./Header.module.scss";
import { Col, Row, Space } from "antd";
import { Container, Icon } from "components/shared";
import Language from "../components/Language";
import { Link } from "react-router-dom";
import UserProfile from "./UserProfile";
import DrawerMenu from "./DrawerMenu";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => setIsMenuOpen(true), []);

  return (
    <header className={classes.header}>
      <Container>
        <Row gutter={[30, 30]} align="middle" justify="space-between">
          <Col md={6}>
            <Row align="middle">
              <Col md={24}>
                <Link to="/">
                  <Space size="middle" className={classes.logo}>
                    <Icon name="logo" />
                    <h3 className="mb0 dark">{t("SMS service")}</h3>
                  </Space>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col className="flex-center">
            <UserProfile className="mr64" openMenu={openMenu} />
          </Col>
          <Col md={6} className="flex-justify-end">
            <Language />
          </Col>
        </Row>
        <DrawerMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </Container>
    </header>
  );
};

export default Header;
