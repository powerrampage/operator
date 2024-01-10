import { FC, useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ColumnsType, Table } from "components/shared";
import { Badge } from "antd";
import {
  useInfoGetAllMessageStatusByNumber,
  useInfoGetAllMessageStatusByNumberOperator,
} from "hooks";
import { useSearchParams } from "react-router-dom";
import { MessageStatusDto } from "types";

type ExpandedDataDto = any;

const TableList: FC = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const number = searchParams.get("phone")!;
  const operator = searchParams.get("operator")!;

  useEffect(() => {
    if (!number) {
      searchParams.delete("operator");
      setSearchParams(searchParams);
    }
  }, [number, searchParams, setSearchParams]);

  const messageQuery = useInfoGetAllMessageStatusByNumber({
    number,
  });

  const messageOperatorQuery = useInfoGetAllMessageStatusByNumberOperator(
    {
      number,
      operator,
    },
    { enabled: !!operator }
  );
  const expandedDataMessage = useMemo(
    () => messageOperatorQuery.data?.data?.data!,
    [messageOperatorQuery.data]
  );

  const dataSource = messageQuery.data?.data?.data!;

  const columns: ColumnsType<MessageStatusDto> = [
    {
      title: "№",
      render: (_, __, idx) => idx + 1,
      align: "center",
      width: 80,
    },
    {
      title: t("Телефон"),
      dataIndex: "phoneNumber",
      align: "center",
      width: "30%",
    },
    {
      title: t("Юборилган вақт"),
      dataIndex: "createdDate",
      align: "center",
      width: "30%",
    },
    {
      title: t("Ҳолати"),
      dataIndex: "status",
      align: "center",
      width: "30%",
      render: (value) => {
        return value ? <Badge status="success" text={value} /> : "-";
      },
    },
  ];

  const expandedRowRender = useCallback(() => {
    const columns: ColumnsType<ExpandedDataDto> = [
      { title: "№", align: "center", width: 80, render: (_, __, idx) => idx + 1 },
      { title: t("Оператор"), dataIndex: "operator", align: "center" },
      { title: t("Қачон кетди"), dataIndex: "createdDate", align: "center" },
      {
        title: t("Жавоб ҳолати"),
        dataIndex: "status",
        align: "center",
        render: (value) => (value ? <Badge status="processing" text={value} /> : "-"),
      },
    ];

    return (
      <Table
        columns={columns}
        dataSource={expandedDataMessage}
        loading={messageOperatorQuery.isFetching}
        pagination={false}
      />
    );
  }, [expandedDataMessage, messageOperatorQuery.isFetching, t]);

  return (
    <div>
      <Table
        rowKey={({ id }) => id!}
        columns={columns}
        dataSource={dataSource}
        loading={messageQuery.isLoading}
        expandable={{
          expandedRowRender,
          expandIconColumnIndex: 5,
          columnTitle: t("Батафсил кўриш"),
          columnWidth: 150,
          onExpand(expanded, { operator }) {
            if (operator) {
              searchParams.set("operator", operator);
            } else {
              searchParams.delete("operator");
            }
            setSearchParams(searchParams);
          },
        }}
        pagination={false}
      />
    </div>
  );
};

export default TableList;
