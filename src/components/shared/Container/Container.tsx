import { FC, PropsWithChildren } from "react";

import classes from "./Container.module.scss";

type ContainerProps = PropsWithChildren<{
	extraClass?: string;
}>;

const Container: FC<ContainerProps> = ({ children, extraClass = "" }) => {
	return <div className={`${classes.container} ${extraClass}`}>{children}</div>;
};

export default Container;
