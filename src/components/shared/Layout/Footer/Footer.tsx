import { useTranslation } from "react-i18next";
import Logo from "assets/images/png/logo.png";

import classes from "./Footer.module.scss";

import { Container, Icon } from "components/shared";
import { Col, Row, Space } from "antd";

const Footer = () => {
  const { t } = useTranslation();

  const socials = [
    {
      id: 1,
      href: "tel:+998711234567",
      label: t("(71) 123-45-67"),
      icon: <Icon name="social-phone" />,
    },
    {
      id: 2,
      href: "https://yangiyulshahar.uz",
      label: t("yangiyulshahar.uz"),
      icon: <Icon name="social-globe" />,
    },
    {
      id: 3,
      href: "https://t.me/yangiyulshahar",
      label: t("t.me/yangiyulshahar"),
      icon: <Icon name="social-telegram" />,
    },
  ];

  return (
    <footer className={classes.footer}>
      <Container>
        <Row align="middle" gutter={[20, 20]}>
          <Col xs={24} md={8} lg={10}>
            <img src={Logo} alt="logo" width={60} height={60} className="object-cover" />
          </Col>
          <Col xs={24} md={16} lg={14} className="text-right">
            <Space size="large" className={classes.socials}>
              {socials.map(({ id, href, icon, label }) => (
                <a key={id} className={classes.item} href={href}>
                  <Space>
                    <div>{icon}</div>
                    <span className="white">{label}</span>
                  </Space>
                </a>
              ))}
            </Space>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
