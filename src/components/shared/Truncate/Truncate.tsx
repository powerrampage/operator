import { Tooltip } from "antd";
import { CSSProperties, FC, PropsWithChildren } from "react";

interface Props extends CSSProperties {
  tooltip?: boolean;
}

const Truncate: FC<PropsWithChildren<Props>> = ({
  width = 300,
  tooltip = true,
  children,
  ...props
}) => {
  return (
    <Tooltip title={children}>
      <div
        style={{
          ...props,
          width,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {children}
      </div>
    </Tooltip>
  );
};

export default Truncate;
