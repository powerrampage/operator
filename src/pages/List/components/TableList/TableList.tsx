import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ColumnsType, Table } from "components/shared";
import { Badge } from "antd";
import { useInfoGetAllMessageStatusByNumberOperator, usePagination } from "hooks";
import { useSearchParams } from "react-router-dom";
import { MessageStatusDto } from "types";

const TableList: FC<{ pagination: ReturnType<typeof usePagination> }> = ({
  pagination,
}) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const number = searchParams.get("phone")!;
  const operator = searchParams.get("operator")!;
  const { page, pageSize, setPage } = pagination;

  const messageOperatorQuery = useInfoGetAllMessageStatusByNumberOperator(
    {
      number,
      operator,
      page,
      size: pageSize,
    },
    { enabled: Boolean(number || operator) }
  );
  const expandedDataMessage = useMemo(
    () => messageOperatorQuery.data?.data,
    [messageOperatorQuery.data]
  );

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
    <div>
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
    </div>
  );
};

export default TableList;
