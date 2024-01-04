import { FC, useEffect } from "react";
import { Col, Row } from "antd";
import { DATE_FORMAT } from "constants/general";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import { RangePicker } from "components/ui";

const FilterAction: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has("fromDate")) return;

    searchParams.set("fromDate", dayjs().subtract(10, "day").format(DATE_FORMAT));
    searchParams.set("toDate", dayjs().format(DATE_FORMAT));
    setSearchParams(searchParams);
  }, []);

  return (
    <Row justify="space-between" className="mb40">
      <Col />
      <Col>
        <RangePicker />
      </Col>
    </Row>
  );
};

export default FilterAction;
