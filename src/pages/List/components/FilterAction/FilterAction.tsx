import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, Space } from "antd";
import { Input, Select } from "components/shared";
import { useSearchParams } from "react-router-dom";
import { useOperatorGetAll } from "hooks";
import { returnArrayIfIsset } from "utils";

const OPERATOR_ALL_ID = 4;

const FilterAction: FC = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const phone = searchParams.get("phone")!;
  const operator = searchParams.get("operator")!;

  const operatorQuery = useOperatorGetAll();
  const dataOperator = operatorQuery.data?.data?.data;

  const operatorOptions = returnArrayIfIsset(dataOperator!)
    .filter(({ id }) => id !== OPERATOR_ALL_ID)
    .map(({ name }) => ({
      label: name,
      value: name,
    }));

  const onHandleFilter = (value: string, label: string) => {
    if (value) {
      searchParams.set(label, value);
    } else {
      searchParams.delete(label);
    }
    setSearchParams(searchParams, { replace: true });
  };

  return (
    <Row justify="space-between" gutter={[20, 20]} className="mb30">
      <Col />
      <Col>
        <Space size="large">
          <Select
            label={t("Оператор")}
            size="large"
            allowClear
            loading={operatorQuery.isFetching}
            options={operatorOptions}
            defaultValue={operator}
            onChange={(value) => onHandleFilter(value, "operator")}
            style={{ width: 200 }}
          />
          <Input.Search
            label={t("Телефон рақам")}
            size="large"
            type="number"
            allowClear
            defaultValue={phone}
            onSearch={(value) => onHandleFilter(value, "phone")}
          />
        </Space>
      </Col>
    </Row>
  );
};

export default FilterAction;
