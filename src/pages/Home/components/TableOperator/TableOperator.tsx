import { FC } from "react";
import { useTranslation } from "react-i18next";
import classes from "./TableOperator.module.scss";
import { ColumnsType, Table } from "components/shared";

type RecordDto = any;

const TableOperator: FC = () => {
  const { t } = useTranslation();

  const columns: ColumnsType<RecordDto> = [
    {
      title: "№",
      render: (_, __, idx) => idx + 1,
      align: "center",
    },
    {
      title: t("Оператор номи"),
      dataIndex: "name",
      width: 500,
    },
    {
      title: t("Жами сони"),
      dataIndex: "totalCount",
      align: "center",
    },
    {
      title: t("шундан"),
      children: [
        {
          title: t("Етиб борган"),
          dataIndex: "totalCount",
          align: "center",
        },
        {
          title: t("Хато билан қайтган"),
          dataIndex: "totalCount",
          align: "center",
        },
        {
          title: t("Жавоб қилмаган"),
          dataIndex: "totalCount",
          align: "center",
        },
      ],
    },
  ];

  return (
    <div className="py30">
      <Table columns={columns} />
    </div>
  );
};

export default TableOperator;
