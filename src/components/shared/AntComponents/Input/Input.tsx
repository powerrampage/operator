import {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  forwardRef,
  useId,
} from "react";
import "./Input.scss";
import { InputProps as AntInputProps, InputRef, Input as AntdInput } from "antd";
import { WrapperInput, Group, Password, Search, TextArea } from "./components";

export interface BaseInputProps {
  label?: ReactNode;
  error?: ReactNode;
  success?: ReactNode;
}

export type InputProps = AntInputProps & BaseInputProps;

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const id = useId();

  return (
    <WrapperInput id={id} {...props}>
      <AntdInput id={id} {...props} ref={ref} />
    </WrapperInput>
  );
}) as CompoundedComponent;

Input.Group = Group;
Input.Search = Search;
Input.TextArea = TextArea;
Input.Password = Password;

interface CompoundedComponent
  extends ForwardRefExoticComponent<InputProps & RefAttributes<InputRef>> {
  Group: typeof Group;
  Search: typeof Search;
  TextArea: typeof TextArea;
  Password: typeof Password;
}

export default Input;
