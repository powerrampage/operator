import { EditOutlined } from "@ant-design/icons";
import { Button, ColumnsType, Table } from "components/shared";
import { DATE_FORMAT } from "constants/general";
import dayjs from "dayjs";
import { useOperatorGetDefaultOperator, usePagination } from "hooks";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { OperatorResponseDto } from "types";
import DefaultOperatorModalUpdate from "./components/DefaultOperatorModalUpdate";

const DefaultOperator: FC = () => {
  const { t } = useTranslation();
  const { page, pageSize, setPage } = usePagination();
  const [modal, setModal] = useState<"close" | "update">("close");

  const operatorQuery = useOperatorGetDefaultOperator({
    page,
    size: pageSize,
  });

  const dataOperator = operatorQuery.data?.data;

  const columns: ColumnsType<OperatorResponseDto> = [
    {
      title: "№",
      render: (_, __, idx) => page * pageSize + idx + 1,
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
      title: t("ЎЗГАРТИРИЛГАН САНА"),
      dataIndex: "updatedAt",
      align: "center",
      render: (value) => value && dayjs(value).format(DATE_FORMAT),
    },
    {
      title: t("Ҳолати"),
      dataIndex: "isActive",
      align: "center",
    },
    {
      title: t("Амаллар"),
      align: "center",
      render: () => (
        <div className="flex-both-center">
          <Button
            type="dashed"
            className="flex-both-center"
            icon={<EditOutlined />}
            title={t("Таҳрирлаш")}
            onClick={() => {
              setModal("update");
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="mb40">
      <Table
        size="small"
        columns={columns}
        dataSource={[dataOperator?.data!]}
        loading={operatorQuery.isLoading}
        pagination={{
          pageSize,
          current: page + 1,
          total: dataOperator?.totalCount,
          onChange: (page) => {
            setPage(page - 1);
          },
        }}
      />

      {modal === "update" && (
        <DefaultOperatorModalUpdate onCancel={() => setModal("close")} />
      )}
    </div>
  );
};

export default DefaultOperator;
