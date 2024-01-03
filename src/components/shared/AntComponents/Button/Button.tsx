import { ForwardRefExoticComponent, RefAttributes, forwardRef } from "react";
import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";
import cn from "classnames";
import "./Button.scss";
import { Group } from "./components";

export interface BaseButtonProps {}

export type ButtonProps = AntButtonProps & BaseButtonProps;

const Button = forwardRef<HTMLElement, ButtonProps>(
  ({ className, onClick, ...props }, ref) => {
    return (
      <AntButton
        {...props}
        className={cn("sicnt-button", className)}
        onClick={!props?.disabled && !props?.loading ? onClick : undefined}
        ref={ref}
      />
    );
  }
) as CompoundedComponent;

Button.Group = Group;

interface CompoundedComponent
  extends ForwardRefExoticComponent<ButtonProps & RefAttributes<HTMLElement>> {
  Group: typeof Group;
}

export default Button;
