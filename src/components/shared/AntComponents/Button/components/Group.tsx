import { FC } from 'react';
import { Button } from 'antd';
import { ButtonGroupProps as AntdButtonGroupProps } from 'antd/es/button';
import { BaseButtonProps } from '../Button';

export type ButtonGroupProps = AntdButtonGroupProps & BaseButtonProps;

const Group: FC<ButtonGroupProps> = ({ ...props }) => {
  return <Button.Group {...props} />;
};

export default Group;
