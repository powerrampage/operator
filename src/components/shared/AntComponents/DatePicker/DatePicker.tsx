import { FC } from "react";

import classes from "./DatePicker.module.scss";
// import cn from "classnames";
// import dateFnsGenerateConfig from "rc-picker/lib/generate/dateFns";

// import generatePicker, { PickerProps } from "antd/es/date-picker/generatePicker";
import ru from "antd/es/date-picker/locale/ru_RU";
import "antd/es/date-picker/style/index";

// import { ReactComponent as Calendar } from "assets/images/svg/common/calendar-dates.svg";

// const DatePicker = generatePicker<Date>(dateFnsGenerateConfig);
// type Props = PickerProps<Date> & {
// 	label?: string;
// 	disabledDate?: any;
// 	placeholder?: string;
// 	background?: "white" | "lightBlue";
// 	size?: "small" | "middle" | "large" | undefined;
// };

ru.lang.locale = "ru";

const AntDatePicker: FC<any> = ({
	label,
	placeholder,
	size = "small",
	disabledDate,
	background = "white",
	...props
}) => {
	// const classNames = cn(
	// 	classes["date-picker"],
	// 	background === "lightBlue" && classes["blue-date-picker"],
	// 	size === "small" && classes.small
	// );
	// const format = "DD.MM.YYYY";
	return (
		<div style={{ position: "relative" }}>
			{label && <span className={classes["label"]}>{label}</span>}
			{/* <DatePicker
				className={classNames}
				style={{ width: "100%" }}
				locale={ru}
				format={format}
				disabledDate={disabledDate}
				defaultPickerValue={new Date()}
				suffixIcon={<Calendar />}
				placeholder={placeholder ? placeholder : ""}
				{...props}
			/> */}
		</div>
	);
};

export default AntDatePicker;
