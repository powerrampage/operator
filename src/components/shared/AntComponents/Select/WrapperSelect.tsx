import { FC, PropsWithChildren } from "react";
import cn from "classnames";
import { SelectProps } from "./Select";

const WrapperSelect: FC<PropsWithChildren<SelectProps>> = ({
  size = "middle",
  label,
  children,
  id,
  disabled,
  error,
}) => {
  return (
    <div
      className={cn(
        "sicnt-select-wrapper",
        `sicnt-select-wrapper__${size}`,
        disabled && "sicnt-select-wrapper__disabled",
        error && "sicnt-select-wrapper__error"
      )}
    >
      {label && (
        <label htmlFor={id} className="sicnt-select-label">
          {label}
        </label>
      )}

      <div className="sicnt-select-children">{children}</div>

      {error && <div className="sicnt-select-error">{error}</div>}
    </div>
  );
};

export default WrapperSelect;
