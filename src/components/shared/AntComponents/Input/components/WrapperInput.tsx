import { FC, PropsWithChildren } from "react";
import cn from "classnames";
import { InputProps } from "../Input";
import { InputTextAreaProps } from "./TextArea";
import { InputPasswordProps } from "./Password";

const WrapperInput: FC<
  PropsWithChildren<InputProps | InputTextAreaProps | InputPasswordProps>
> = ({ size = "middle", label, children, id, disabled, error }) => {
  return (
    <div
      className={cn(
        "sicnt-input-wrapper",
        `sicnt-input-wrapper__${size}`,
        disabled && "sicnt-input-wrapper__disabled",
        error && "sicnt-input-wrapper__error"
      )}
    >
      {label && (
        <label htmlFor={id} className="sicnt-input-label">
          {label}
        </label>
      )}

      <div className="sicnt-input-children">{children}</div>

      {error && <div className="sicnt-input-error">{error}</div>}
    </div>
  );
};

export default WrapperInput;
