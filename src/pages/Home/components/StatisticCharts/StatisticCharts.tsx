import { FC } from "react";
import { Col, Row } from "antd";
import classes from "./StatisticCharts.module.scss";

import ChartOperator from "./components/ChartOperator";
import ChartByDays from "./components/ChartByDays";

const StatisticCharts: FC = () => {
  return (
    <div className={classes.wrapper}>
      <Row gutter={[60, 60]}>
        <Col lg={12}>
          <ChartByDays />
        </Col>
        <Col lg={12}>
          <ChartOperator />
        </Col>
      </Row>
    </div>
  );
};

export default StatisticCharts;
