import { forwardRef, useId } from "react";
import WrapperInput from "./WrapperInput";
import { Input } from "antd";
import { InputRef, SearchProps } from "antd/es/input";
import { BaseInputProps } from "../Input";

export type InputSearchProps = SearchProps & BaseInputProps;

const Search = forwardRef<InputRef, InputSearchProps>((props, ref) => {
  const id = useId();

  return (
    <WrapperInput id={id} {...props}>
      <Input.Search id={id} {...props} ref={ref} />
    </WrapperInput>
  );
});

export default Search;
