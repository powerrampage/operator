import { FC, useEffect } from "react";
import { Col, Row } from "antd";
import { useSearchParams } from "react-router-dom";
import { RangePicker } from "components/ui";

const defaultDate = {
  from: "10.05.2015",
  end: "10.05.2024",
};

const FilterAction: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.has("fromDate")) return;

    searchParams.set("fromDate", defaultDate.from);
    searchParams.set("toDate", defaultDate.end);
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
