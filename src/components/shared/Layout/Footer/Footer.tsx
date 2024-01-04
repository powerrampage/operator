import { useTranslation } from "react-i18next";

import classes from "./Footer.module.scss";

import { Container } from "components/shared";
import { Row } from "antd";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <Container>
        <Row align="middle" gutter={[20, 20]}>
          <p>© 2024 {t("Налоговый комитет")}.</p>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
