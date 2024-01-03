import { ComponentProps, FC, PropsWithChildren, ReactNode } from "react";
import classes from "./FormItem.module.scss";
import cn from "classnames";

export interface FormItemProps extends ComponentProps<"div"> {
  label?: ReactNode;
  error?: ReactNode;
}

export const FormItem: FC<PropsWithChildren<FormItemProps>> = ({
  label,
  error,
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn(classes.wrapper, className)}>
      {label && <label className={classes.label}>{label}</label>}
      <div className="w100">{children}</div>
      {error && <div className={classes.error}>{error}</div>}
    </div>
  );
};
