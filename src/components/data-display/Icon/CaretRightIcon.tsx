// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CarretRightIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path      
      d="m16.756 11.916-8.33-8.183a.88.88 0 0 0-.916-.174.83.83 0 0 0-.372.302.808.808 0 0 0-.138.455v16.366c0 .161.048.32.138.454a.83.83 0 0 0 .695.364.872.872 0 0 0 .593-.235l8.33-8.183a.82.82 0 0 0 0-1.166Z"
    />
  </Icon>
);

export default CarretRightIcon;
