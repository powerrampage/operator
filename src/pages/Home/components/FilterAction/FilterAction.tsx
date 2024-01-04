import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Col, DatePicker, Row } from "antd";
import { DATE_FORMAT } from "constants/general";
import { Icon } from "components/shared";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";

const FilterAction: FC = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Row justify="space-between" className="mb40">
      <Col />
      <Col>
        <DatePicker.RangePicker
          allowClear
          size="large"
          format={DATE_FORMAT}
          placeholder={[t("Сана дан"), t("Сана гача")]}
          suffixIcon={<Icon name="calendar-dates" />}
          onChange={(values) => {
            if (values) {
              const periods = values.map((date) => dayjs(date).format(DATE_FORMAT));
              searchParams.set("periods", periods as any);
            } else {
              searchParams.delete("periods");
            }
            setSearchParams(searchParams, { replace: true });
          }}
        />
      </Col>
    </Row>
  );
};

export default FilterAction;
