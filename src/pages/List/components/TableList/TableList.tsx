import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ColumnsType, Table } from "components/shared";
import { Badge } from "antd";
import {
  useInfoGetAllMessageStatusByNumber,
  useInfoGetAllMessageStatusByNumberOperator,
  usePagination,
} from "hooks";
import { useSearchParams } from "react-router-dom";
import { MessageStatusDto } from "types";

const TableList: FC = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const number = searchParams.get("phone")!;
  const operator = searchParams.get("operator")!;
  const { page, pageSize, setPage } = usePagination({});
  const expandedPagination = usePagination({});
  const [rowId, setRowId] = useState<number>();

  useEffect(() => {
    if (!number) {
      searchParams.delete("operator");
      setSearchParams(searchParams);
    }
  }, [number, searchParams, setSearchParams]);

  const messageQuery = useInfoGetAllMessageStatusByNumber(
    {
      page,
      size: pageSize,
      number,
    },
    { enabled: !!number }
  );
  const dataMessage = messageQuery.data?.data;

  const messageOperatorQuery = useInfoGetAllMessageStatusByNumberOperator(
    {
      number,
      operator,
      page: expandedPagination.page,
      size: expandedPagination.pageSize,
    },
    { enabled: Boolean(number && operator) }
  );
  const expandedDataMessage = useMemo(
    () => messageOperatorQuery.data?.data,
    [messageOperatorQuery.data]
  );

  const columns: ColumnsType<MessageStatusDto> = [
    {
      title: "№",
      render: (_, __, idx) => page * pageSize + idx + 1,
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
    const { page, pageSize, setPage } = expandedPagination;

    const columns: ColumnsType<MessageStatusDto> = [
      {
        title: "№",
        align: "center",
        width: 80,
        render: (_, __, idx) => page * pageSize + idx + 1,
      },
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
        size="small"
        columns={columns}
        dataSource={expandedDataMessage?.data}
        loading={messageOperatorQuery.isFetching}
        pagination={{
          pageSize,
          current: page + 1,
          total: expandedDataMessage?.totalCount,
          onChange: (page) => setPage(page - 1),
        }}
      />
    );
  }, [expandedDataMessage, messageOperatorQuery.isFetching, t]);

  return (
    <div>
      <Table
        rowKey={({ id }) => id!}
        columns={columns}
        dataSource={dataMessage?.data}
        loading={messageQuery.isFetching}
        expandable={{
          expandedRowRender,
          expandIconColumnIndex: 5,
          columnTitle: t("Батафсил кўриш"),
          columnWidth: 150,
          expandedRowKeys: [rowId!],
          onExpand(expanded, { operator, id }) {
            if (expanded && operator) {
              searchParams.set("operator", operator);
              setRowId(id);
            } else {
              searchParams.delete("operator");
              setRowId(undefined);
            }
            expandedPagination.setPage(0);
            setSearchParams(searchParams);
          },
        }}
        pagination={{
          pageSize,
          current: page + 1,
          total: dataMessage?.totalCount,
          onChange: (page) => {
            setRowId(undefined);
            searchParams.delete("operator");
            setPage(page - 1);
          },
        }}
      />
    </div>
  );
};

export default TableList;
