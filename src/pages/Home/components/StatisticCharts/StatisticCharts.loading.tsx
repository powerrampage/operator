import { FC } from "react";
import { Col, Row, Skeleton } from "antd";

const StatisticChartsLoading: FC = () => {
  return (
    <Row gutter={[60, 60]} style={{ marginBottom: 30 }}>
      <Col lg={12}>
        <Skeleton.Node
          active
          className="w100"
          rootClassName="w100"
          style={{ height: 300 }}
        />
      </Col>
      <Col lg={12}>
        <Skeleton.Node
          active
          className="w100"
          rootClassName="w100"
          style={{ height: 300 }}
        />
      </Col>
    </Row>
  );
};

export default StatisticChartsLoading;
