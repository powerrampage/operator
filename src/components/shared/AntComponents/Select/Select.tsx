import {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  forwardRef,
  useId,
} from "react";

import "./Select.scss";
import { Select as AntdSelect, SelectProps as AntSelectProps, RefSelectProps } from "antd";
import WrapperSelect from "./WrapperSelect";

export type BaseSelectProps = {
  label?: ReactNode;
  error?: ReactNode;
};

export type SelectProps = AntSelectProps & BaseSelectProps;

export const Select = forwardRef<RefSelectProps, SelectProps>((props, ref) => {
  const id = useId();

  return (
    <WrapperSelect id={id} {...props}>
      <AntdSelect id={id} {...props} ref={ref} showSearch optionFilterProp="label" />
    </WrapperSelect>
  );
}) as CompoundedComponent;

Select.Option = AntdSelect.Option;
Select.OptGroup = AntdSelect.OptGroup;

interface CompoundedComponent
  extends ForwardRefExoticComponent<SelectProps & RefAttributes<RefSelectProps>> {
  Option: typeof AntdSelect.Option;
  OptGroup: typeof AntdSelect.OptGroup;
}
