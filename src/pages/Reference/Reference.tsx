import { FC, useState } from "react";
import { Button, ColumnsType, Container, Table } from "components/shared";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import ReferenceForm from "./components/ReferenceForm";

type RecordDto = any;

const Reference: FC = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState<"close" | "add">("close");
  const closeModal = () => setModal("close");

  const columns: ColumnsType<RecordDto> = [
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
    },
    {
      title: t("Ўзгартирилган сана"),
      dataIndex: "updatedAt",
      align: "center",
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
          return t("Блокланган");
        } else if (value === 0) {
          return t("Фаол");
        }
      },
    },
  ];

  return (
    <section className="my40">
      <Container>
        <Row className="mb20" justify="space-between" align="middle" gutter={[20, 20]}>
          <Col />
          <Col>
            <Button
              size="large"
              type="primary"
              shape="round"
              className="px30"
              icon={<PlusCircleOutlined />}
              onClick={() => setModal("add")}
            >
              {t("Қўшиш")}
            </Button>
          </Col>
        </Row>
        <Table columns={columns} dataSource={[]} loading={false} />
      </Container>

      {modal === "add" && <ReferenceForm onCancel={closeModal} />}
    </section>
  );
};

export default Reference;
