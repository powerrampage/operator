import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ColumnsType, Table } from "components/shared";
import { useOperatorGetAll, usePagination } from "hooks";
import { OperatorResponseDto } from "types";
import dayjs from "dayjs";
import { DATE_FORMAT } from "constants/general";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Col, Row, Switch } from "antd";

const Operator: FC = () => {
  const { t } = useTranslation();
  const { page, pageSize, setPage } = usePagination();
  const [modal, setModal] = useState<"close" | "update">("close");
  const [row, setRow] = useState<OperatorResponseDto>();

  const getAllQuery = useOperatorGetAll({ page, size: pageSize });
  const dataGetAll = getAllQuery.data?.data;

  const columns: ColumnsType<OperatorResponseDto> = [
    {
      title: "№",
      render: (_, __, idx) => idx + 1,
      align: "center",
    },
    {
      title: t("Оператор"),
      dataIndex: "name",
    },
    {
      title: t("Яратилган сана"),
      dataIndex: "createdAt",
      align: "center",
      render: (value) => value && dayjs(value).format(DATE_FORMAT),
    },
    {
      title: t("Ўзгартирилган сана"),
      dataIndex: "updatedAt",
      align: "center",
      render: (value) => value && dayjs(value).format(DATE_FORMAT),
    },
    {
      title: t("Ҳолати"),
      dataIndex: "isActive",
      align: "center",
      render: (value) => {
        return <Switch checked={!!value} title={t("Операторни ёқиш/ўчириш")} />;
      },
    },
    {
      title: t("Амаллар"),
      align: "center",
      render: (_, record) => (
        <div className="flex-both-center">
          <Button
            type="dashed"
            className="flex-both-center"
            icon={<EditOutlined />}
            title={t("Таҳрирлаш")}
            onClick={() => {
              setRow(record);
              setModal("update");
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="mb40">
      <Row justify="end" className="mb20">
        <Button shape="round" type="primary" icon={<PlusCircleOutlined />}>
          {t("Оператор қўшиш")}
        </Button>
      </Row>
      <Table
        size="small"
        columns={columns}
        dataSource={dataGetAll?.data}
        loading={getAllQuery.isLoading}
        pagination={{
          pageSize,
          current: page + 1,
          total: dataGetAll?.totalCount,
          onChange: (page) => {
            setPage(page - 1);
          },
        }}
      />
    </div>
  );
};

export default Operator;