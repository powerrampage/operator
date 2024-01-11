import { FC, useState } from "react";
import { Button, ColumnsType, Container, Table } from "components/shared";
import { useTranslation } from "react-i18next";
import { Tag } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, EditOutlined } from "@ant-design/icons";
import ReferenceForm from "./components/ReferenceForm";
import { usePagination, useShablonGetAll } from "hooks";
import { SmppShablonResDto } from "types";
import dayjs from "dayjs";
import { DATE_FORMAT } from "constants/general";

const Reference: FC = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState<"close" | "edit">("close");
  const closeModal = () => setModal("close");
  const { page, pageSize, setPage } = usePagination();
  const [row, setRow] = useState<SmppShablonResDto>();

  const shablonQuery = useShablonGetAll({
    page,
    size: pageSize,
  });
  const dataShablon = shablonQuery.data?.data;

  const columns: ColumnsType<SmppShablonResDto> = [
    {
      title: "№",
      render: (_, __, idx) => idx + 1,
      align: "center",
    },
    {
      title: t("Номи"),
      dataIndex: "textRu",
    },
    {
      title: t("Ҳолати"),
      dataIndex: "state",
      align: "center",
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
      title: t("Устуворлик"),
      dataIndex: "priority",
      align: "center",
    },
    {
      title: t("Tag"),
      dataIndex: "tag",
      align: "center",
    },
    {
      title: t("Operator code"),
      dataIndex: "operatorCode",
      align: "center",
    },
    {
      title: t("Ҳолати"),
      dataIndex: "blocked",
      align: "center",
      render: (value) => {
        if (value === 1) {
          return (
            <Tag icon={<CloseCircleOutlined />} color="error">
              {t("Блокланган")}
            </Tag>
          );
        } else if (value === 0) {
          return (
            <Tag icon={<CheckCircleOutlined />} color="processing">
              {t("Фаол")}
            </Tag>
          );
        }
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
              setModal("edit");
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <section className="my40">
      <Container>
        <Table
          columns={columns}
          dataSource={dataShablon?.data}
          loading={shablonQuery.isLoading}
          pagination={{
            pageSize,
            current: page + 1,
            total: dataShablon?.totalCount,
            onChange: (page) => {
              setPage(page - 1);
            },
          }}
        />
      </Container>

      {modal === "edit" && row && <ReferenceForm row={row} onCancel={closeModal} />}
    </section>
  );
};

export default Reference;
