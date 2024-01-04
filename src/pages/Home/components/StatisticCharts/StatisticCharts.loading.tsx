import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Skeleton } from "antd";

const StatisticChartsLoading: FC = () => {
  const { t } = useTranslation();

  return (
    <Row gutter={[60, 60]} style={{ marginBottom: 30 }}>
      <Col lg={12}>
        <Skeleton.Node
          active
          className="w100"
          rootClassName="w100"
          style={{ height: 350 }}
        />
      </Col>
      <Col lg={12}>
        <Skeleton.Node
          active
          className="w100"
          rootClassName="w100"
          style={{ height: 350 }}
        />
      </Col>
    </Row>
  );
};

export default StatisticChartsLoading;
