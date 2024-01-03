import { FC } from 'react';
import { Input } from 'antd';
import { GroupProps } from 'antd/es/input';
import { BaseInputProps } from '../Input';

export type InputGroupProps = GroupProps & BaseInputProps;

const Group: FC<InputGroupProps> = ({ ...props }) => {
  return <Input.Group {...props} />;
};

export default Group;
