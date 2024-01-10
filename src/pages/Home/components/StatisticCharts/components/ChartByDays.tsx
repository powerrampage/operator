import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "../StatisticCharts.module.scss";
import { Empty, Spin } from "antd";
import { ApexOptions } from "apexcharts";
import cn from "classnames";
import ReactApexChart from "react-apexcharts";
import { Icon } from "components/shared";
import { useInfoGetAllOperatorStatsByDate } from "hooks";
import { useSearchParams } from "react-router-dom";
import { formatNumber, returnArrayIfIsset } from "utils";
import dayjs from "dayjs";
import { DATE_FORMAT } from "constants/general";

const ChartByDays: FC = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [beginDate, endDate] = [
    searchParams.get("fromDate"),
    searchParams.get("toDate"),
  ] as [string, string];

  const operatorStateQuery = useInfoGetAllOperatorStatsByDate(
    { beginDate, endDate },
    { enabled: Boolean(beginDate && endDate) }
  );
  const dataByDate = returnArrayIfIsset(
    operatorStateQuery.data?.data?.data?.messageCountByDateDtoList!
  );

  const series = [
    {
      name: "Кунлар",
      data: dataByDate.map(({ messageCount }) => messageCount ?? 0),
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 300,
      type: "line",
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    xaxis: {
      categories: dataByDate.map(({ date }) => date && dayjs(date).format(DATE_FORMAT)),
      position: "bottom",
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      width: 2,
      dashArray: 1,
    },
    markers: {
      size: 8,
      colors: "#1079F9",
      strokeWidth: 4,
      strokeColors: "#ffffff",
      showNullDataPoints: true,
      hover: { size: 10, sizeOffset: 1 },
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        align: "left",
        minWidth: 20,
        maxWidth: 50,
        style: {
          colors: ["#325ecd"],
          fontSize: "12px",
          fontWeight: 700,
        },
        formatter: (value) => formatNumber(value),
      },
    },
    tooltip: {
      enabled: true,
      marker: { show: false },
      y: { title: { formatter: () => "" }, formatter: (val) => formatNumber(val, 0) },
    },
  };

  return (
    <Spin spinning={operatorStateQuery?.isLoading}>
      <article className={classes.chartBox}>
        <h3 className={classes.title}>{t("Кунлар бўйича")}</h3>
        <div className={cn(classes.body, false && "flex-both-center")}>
          <div className={classes.chartInner}>
            {true ? (
              <ReactApexChart
                type="line"
                height={300}
                series={series}
                options={options}
                width={dataByDate.length * 100}
              />
            ) : (
              <Empty style={{ transform: "scale(1.5)" }} image={<Icon name="empty" />} />
            )}
          </div>
        </div>
      </article>
    </Spin>
  );
};

export default ChartByDays;
