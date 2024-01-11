import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ColumnsType, Table } from "components/shared";
import {
  MutationOptions,
  useOperatorActivate,
  useOperatorDeactivate,
  useOperatorGetAll,
  usePagination,
} from "hooks";
import { ErrorReason, OperatorResponseDto, ResponseDataDtoObject } from "types";
import dayjs from "dayjs";
import { DATE_FORMAT } from "constants/general";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Col, Row, Switch, notification } from "antd";

const Operator: FC = () => {
  const { t } = useTranslation();
  const { page, pageSize, setPage } = usePagination();
  const [modal, setModal] = useState<"close" | "update">("close");
  const [row, setRow] = useState<OperatorResponseDto>();

  const getAllQuery = useOperatorGetAll({ page, size: pageSize });
  const dataGetAll = getAllQuery.data?.data;

  const changeStatusMutationOptions: MutationOptions<
    ResponseDataDtoObject,
    ErrorReason,
    unknown
  > = {
    onSuccess() {
      getAllQuery.refetch();
      notification.success({ message: t("Муваффақиятли амалга оширилди") });
    },
    onError({ message, response }) {
      notification.error({
        message: t("Хатолик юз берди"),
        description: response?.data?.reason ?? message,
      });
    },
  };

  const activateMutation = useOperatorActivate({ ...changeStatusMutationOptions });
  const deactivateMutation = useOperatorDeactivate({ ...changeStatusMutationOptions });

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
      title: t("Ўзгартирилган сана"),
      dataIndex: "updatedAt",
      align: "center",
      render: (value) => value && dayjs(value).format(DATE_FORMAT),
    },
    {
      title: t("Ҳолати"),
      dataIndex: "isActive",
      align: "center",
      render: (value, { id }) => {
        return (
          <Switch
            checked={!!value}
            title={t("Операторни ёқиш/ўчириш")}
            onChange={(checked) => {
              if (checked) {
                activateMutation.mutate({ params: { id } });
              } else {
                deactivateMutation.mutate({ params: { id } });
              }
            }}
          />
        );
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
