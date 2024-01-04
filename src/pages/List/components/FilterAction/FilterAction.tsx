import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { Input } from "components/shared";
import { useSearchParams } from "react-router-dom";

const FilterAction: FC = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const phone = searchParams.get("phone")!;

  return (
    <Row justify="space-between" gutter={[20, 20]} className="mb30">
      <Col />
      <Col>
        <Input.Search
          label={t("Телефон рақам")}
          size="large"
          type="number"
          allowClear
          defaultValue={phone}
          onSearch={(value) => {
            if (value) {
              searchParams.set("phone", value);
            } else {
              searchParams.delete("phone");
            }
            setSearchParams(searchParams, { replace: true });
          }}
        />
      </Col>
    </Row>
  );
};

export default FilterAction;
