import { forwardRef, useId } from "react";
import WrapperInput from "./WrapperInput";
import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import { BaseInputProps } from "../Input";
import { TextAreaRef } from "antd/es/input/TextArea";

export type InputTextAreaProps = TextAreaProps & BaseInputProps;

const TextArea = forwardRef<TextAreaRef, InputTextAreaProps>((props, ref) => {
  const id = useId();

  return (
    <WrapperInput id={id} {...props}>
      <Input.TextArea id={id} {...props} ref={ref} />
    </WrapperInput>
  );
});

export default TextArea;
