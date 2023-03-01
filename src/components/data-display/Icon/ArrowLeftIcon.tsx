// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const ArrowLeftIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="m15.88,19.12l-6.62-6.62,6.62-6.62c.49-.49.49-1.28,0-1.77-.49-.49-1.28-.49-1.77,0l-7.5,7.5c-.23.23-.37.55-.37.88s.13.65.37.88l7.5,7.5c.49.49,1.28.49,1.77,0,.49-.49.49-1.28,0-1.77Z" />
  </Icon>
);

export default ArrowLeftIcon;
