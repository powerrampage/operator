import { CSSProperties, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

import { DatePicker } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { DATE_FORMAT } from "constants/general";

const { RangePicker: AntRangePicker } = DatePicker;

export type RangeValue = [Dayjs | null, Dayjs | null] | null;

type Props = {
  style?: CSSProperties;
  isDisable?: boolean;
};

export const RangePicker = ({ style, isDisable = true }: Props) => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [dates, setDates] = useState<RangeValue>(null);
  const [value, setValue] = useState<RangeValue>(null);

  useEffect(() => {
    if (searchParams.has("fromDate") && searchParams.has("toDate")) {
      setValue([
        dayjs(searchParams.get("fromDate"), DATE_FORMAT),
        dayjs(searchParams.get("toDate"), DATE_FORMAT),
      ]);
    }
  }, [searchParams]);

  const disabledDate = (current: Dayjs) => {
    if (!dates) return false;
    const tooLate = dates[0] && current.diff(dates[0], "days") >= 10;
    const tooEarly = dates[1] && dates[1].diff(current, "days") >= 10;
    return !!tooEarly || !!tooLate;
  };

  const onOpenChange = (open: boolean) => {
    if (open) setDates([null, null]);
    else setDates(null);
  };

  const onChange = (val: RangeValue) => {
    if (val?.length) {
      // @ts-ignore
      searchParams.set("fromDate", val[0].format(DATE_FORMAT));
      // @ts-ignore
      searchParams.set("toDate", val[1].format(DATE_FORMAT));
      setSearchParams(searchParams);
    } else {
      if (searchParams.has("fromDate") && searchParams.has("toDate")) {
        searchParams.delete("toDate");
        searchParams.delete("fromDate");
        setSearchParams(searchParams);
      }
    }

    setValue(val);
  };

  return (
    <AntRangePicker
      style={style}
      size="large"
      format={DATE_FORMAT}
      value={dates || value}
      placeholder={[t("Сана дан"), t("Сана гача")]}
      disabledDate={isDisable ? disabledDate : () => false}
      onCalendarChange={(val) => setDates(val)}
      onChange={onChange}
      onOpenChange={onOpenChange}
    />
  );
};
