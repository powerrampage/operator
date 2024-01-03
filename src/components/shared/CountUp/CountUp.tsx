import { FC, memo } from 'react';
import ReactCountUp, { CountUpProps } from 'react-countup';

type Props = {
  type: 'num' | 'sum';
  value: number | undefined | null;
} & Omit<CountUpProps, 'end'>;

const CountUp: FC<Props> = ({ type = 'num', value, ...rest }): JSX.Element => {
  return (
    <ReactCountUp
      {...rest}
      separator=" "
      duration={1}
      decimal={type === 'sum' ? ',' : undefined}
      decimals={type === 'sum' ? 1 : undefined}
      end={value || 0}
    />
  );
};

export default memo(CountUp);

/*
sum - 1 000 000,0
num - 1 000 000
*/
