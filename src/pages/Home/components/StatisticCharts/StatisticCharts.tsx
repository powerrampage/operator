import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./StatisticCharts.module.scss";
import { Col, Row } from "antd";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

const StatisticCharts: FC = () => {
  const { t } = useTranslation();

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
    <div className="mb40">
      <Row gutter={[60, 60]}>
        <Col lg={12}>
          <article className={classes.chartBox}>
            <h3 className={classes.title}>{t("Кунлар бўйича")}</h3>
            <div className={classes.body}>
              <ReactApexChart
                options={lineOptions}
                series={[{ name: "Кунлар", data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }]}
                type="line"
                height={350}
              />
            </div>
          </article>
        </Col>
        <Col lg={12}>
          <article className={classes.chartBox}>
            <h3 className={classes.title}>{t("Оператор")}</h3>
            <div className={classes.body}>
              <ReactApexChart
                options={donutOptions}
                series={[44, 55, 41]}
                type="donut"
                height={350}
              />
            </div>
          </article>
        </Col>
      </Row>
    </div>
  );
};

export default StatisticCharts;
