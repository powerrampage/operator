import { PropsWithChildren } from 'react';

import CommonInfoContext from './context';
import useValue from './useValue';

export default function CommonInfoProvider({ children }: PropsWithChildren) {
  const values = useValue();

  return <CommonInfoContext.Provider value={values}>{children}</CommonInfoContext.Provider>;
}
