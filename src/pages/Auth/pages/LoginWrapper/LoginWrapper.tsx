import { FC, PropsWithChildren } from "react";
import classes from "./LoginWrapper.module.scss";

interface Props {}

const LoginWrapper: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.inner}>{children}</div>
    </div>
  );
};

export default LoginWrapper;
