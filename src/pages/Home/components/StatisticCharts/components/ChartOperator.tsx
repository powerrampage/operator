import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "../StatisticCharts.module.scss";
import { Empty, Spin } from "antd";
import { useInfoGetAllOperatorStatsByDate } from "hooks";
import cn from "classnames";
import ReactApexChart from "react-apexcharts";
import { useSearchParams } from "react-router-dom";
import { ApexOptions } from "apexcharts";
import { Icon } from "components/shared";
import { formatNumber } from "utils";

const ChartOperator: FC = () => {
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
  const dataOperatorState = operatorStateQuery.data?.data?.data;

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
    tooltip: {
      y: {
        title: { formatter: (label) => `${label}:` },
        formatter: (val) => formatNumber(val, 0),
      },
    },
  };

  return (
    <Spin spinning={operatorStateQuery.isFetching}>
      <article className={classes.chartBox}>
        <h3 className={classes.title}>{t("Оператор")}</h3>
        <div className={cn(classes.body, !dataOperatorState && "flex-both-center")}>
          {dataOperatorState ? (
            <ReactApexChart
              options={donutOptions}
              series={[
                dataOperatorState?.totalApprovedMessageCount ?? 0,
                dataOperatorState?.totalRejectedMessageCount ?? 0,
                dataOperatorState?.totalWaitingMessageCount ?? 0,
              ]}
              type="donut"
              height={300}
            />
          ) : (
            <Empty style={{ transform: "scale(1.5)" }} image={<Icon name="empty" />} />
          )}
        </div>
      </article>
    </Spin>
  );
};

export default ChartOperator;
