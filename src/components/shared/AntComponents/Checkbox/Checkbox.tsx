import React, { FC } from "react";

import classes from "./Checkbox.module.scss";
import { Checkbox, CheckboxProps } from "antd";
import cn from "classnames";

type Props = CheckboxProps & {
	label?: string;
	withoutCheckIcon?: boolean;
};

const AntCheckbox: FC<Props> = ({ label, withoutCheckIcon = false, ...props }) => {
	return (
		<Checkbox
			className={cn(classes.checkbox, {
				[classes.checkbox__without__checked__icon]: withoutCheckIcon
			})}
			{...props}
		>
			{label}
		</Checkbox>
	);
};

export default AntCheckbox;
