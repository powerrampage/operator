import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./StatisticCharts.module.scss";
import { Col, Empty, Row, Spin } from "antd";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";
import {
  useInfoGetAllMessageStatusByNumber,
  useInfoGetAllMessageStatusByNumberOperator,
  useInfoGetAllOperatorStats,
} from "hooks";
import { useSearchParams } from "react-router-dom";
import { returnArrayIfIsset } from "utils";
import cn from "classnames";
import { Icon } from "components/shared";

const StatisticCharts: FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [beginDate, endDate] = [
    searchParams.get("fromDate"),
    searchParams.get("toDate"),
  ] as [string, string];

  const operatorStateQuery = useInfoGetAllOperatorStats(
    { beginDate, endDate },
    { enabled: Boolean(beginDate && endDate) }
  );
  const [dataOperatorState] = returnArrayIfIsset(operatorStateQuery.data?.data?.data!);

  // const asdsa = useInfoGetAllMessageStatusByNumber({})
  // const asdsa = useInfoGetAllMessageStatusByNumberOperator({})

  const lineOptions: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    },
  };

  const donutOptions: ApexOptions = {
    chart: {
      type: "donut",
    },
    legend: {
      position: "right",
      offsetX: 10,
      offsetY: 80,
      itemMargin: {
        horizontal: 40,
        vertical: 10,
      },
    },
    colors: ["#8CC152", "#E9573F", "#5B7ED7"],
    labels: [t("Етиб борган"), t("Хато билан қайтган"), t("Жавоб қилмаган")],
  };

  return (
    <div className={classes.wrapper}>
      <Row gutter={[60, 60]}>
        <Col lg={12}>
          <article className={classes.chartBox}>
            <h3 className={classes.title}>{t("Кунлар бўйича")}</h3>
            <div className={cn(classes.body, false && "flex-both-center")}>
              {true ? (
                <ReactApexChart
                  options={lineOptions}
                  series={[{ name: "Кунлар", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }]}
                  type="line"
                  height={350}
                />
              ) : (
                <Empty style={{ transform: "scale(1.5)" }} image={<Icon name="empty" />} />
              )}
            </div>
          </article>
        </Col>
        <Col lg={12}>
          <Spin spinning={operatorStateQuery.isFetching}>
            <article className={classes.chartBox}>
              <h3 className={classes.title}>{t("Оператор")}</h3>
              <div className={cn(classes.body, !dataOperatorState && "flex-both-center")}>
                {dataOperatorState ? (
                  <ReactApexChart
                    options={donutOptions}
                    series={[
                      dataOperatorState?.approvedMessageCount ?? 0,
                      dataOperatorState?.rejectedMessageCount ?? 0,
                      dataOperatorState?.waitingMessageCount ?? 0,
                    ]}
                    type="donut"
                    height={350}
                  />
                ) : (
                  <Empty
                    style={{ transform: "scale(1.5)" }}
                    image={<Icon name="empty" />}
                  />
                )}
              </div>
            </article>
          </Spin>
        </Col>
      </Row>
    </div>
  );
};

export default StatisticCharts;
