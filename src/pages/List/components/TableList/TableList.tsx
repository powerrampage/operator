import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import classes from "./TableList.module.scss";
import { ColumnsType, Table } from "components/shared";
import { Badge } from "antd";

type RecordDto = any;
type ExpandedDataDto = any;

const TableList: FC = () => {
  const { t } = useTranslation();

  const columns: ColumnsType<RecordDto> = [
    {
      title: "№",
      render: (_, __, idx) => idx + 1,
      align: "center",
      width: 80,
    },
    {
      title: t("Телефон"),
      dataIndex: "phone",
      align: "center",
    },
    {
      title: t("Юборилган вақт"),
      dataIndex: "sendTime",
      align: "center",
    },
    {
      title: t("Ҳолати"),
      dataIndex: "state",
      align: "center",
      render: (value) => <Badge status="success" text={value} />,
    },
  ];

  const expandedRowRender = useCallback(() => {
    const columns: ColumnsType<ExpandedDataDto> = [
      { title: "№", align: "center", width: 80, render: (_, __, idx) => idx + 1 },
      { title: t("Оператор"), dataIndex: "name" },
      { title: t("Қачон кетди"), dataIndex: "" },
      { title: t("Жавоб ҳолати"), dataIndex: "" },
    ];

    return <Table columns={columns} dataSource={[{}, {}]} pagination={false} />;
  }, []);

  return (
    <div>
      <Table
        rowKey={({ id }) => id!}
        columns={columns}
        dataSource={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
        loading={false}
        expandable={{
          expandedRowRender,
          expandIconColumnIndex: 5,
          columnTitle: t("Батафсил кўриш"),
          columnWidth: 150,
        }}
        pagination={false}
      />
    </div>
  );
};

export default TableList;
