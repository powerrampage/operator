import { Input, InputRef } from "antd";
import WrapperInput from "./WrapperInput";
import { forwardRef, useId } from "react";
import { PasswordProps } from "antd/es/input";
import { BaseInputProps } from "../Input";

export type InputPasswordProps = PasswordProps & BaseInputProps;

const Password = forwardRef<InputRef, InputPasswordProps>((props, ref) => {
  const id = useId();

  return (
    <WrapperInput id={id} {...props}>
      <Input.Password id={id} {...props} ref={ref} />
    </WrapperInput>
  );
});

export default Password;
