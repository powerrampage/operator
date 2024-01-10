import { FC } from "react";
import { useTranslation } from "react-i18next";
import { ColumnsType, Table } from "components/shared";
import { useSearchParams } from "react-router-dom";
import { useInfoGetAllOperatorStatsByDate } from "hooks";
import { OperatorStatsResponseDto } from "types";
import { formatNumber } from "utils";

const TableOperator: FC = () => {
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

  const dataSource = operatorStateQuery.data?.data?.data?.operatorStatsResponseDtoList;

  const columns: ColumnsType<OperatorStatsResponseDto> = [
    {
      title: "№",
      render: (_, __, idx) => idx + 1,
      align: "center",
    },
    {
      title: t("Оператор номи"),
      dataIndex: "operatorName",
      width: 500,
    },
    {
      title: t("Жами сони"),
      dataIndex: "totalNumberOfMessages",
      align: "center",
      render: (value) => formatNumber(value, 0),
    },
    {
      title: t("шундан"),
      children: [
        {
          title: t("Етиб борган"),
          dataIndex: "approvedMessageCount",
          align: "center",
          render: (value) => formatNumber(value, 0),
        },
        {
          title: t("Хато билан қайтган"),
          dataIndex: "rejectedMessageCount",
          align: "center",
          render: (value) => formatNumber(value, 0),
        },
        {
          title: t("Жавоб қилмаган"),
          dataIndex: "waitingMessageCount",
          align: "center",
          render: (value) => formatNumber(value, 0),
        },
      ],
    },
  ];

  return (
    <div className="py30">
      <Table
        columns={columns}
        dataSource={dataSource!}
        loading={operatorStateQuery.isLoading}
        pagination={false}
      />
    </div>
  );
};

export default TableOperator;
