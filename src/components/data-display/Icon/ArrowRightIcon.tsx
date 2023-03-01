// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const ArrowRightIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="m17.38,11.62l-7.5-7.5c-.49-.49-1.28-.49-1.77,0-.49.49-.49,1.28,0,1.77l6.62,6.62-6.62,6.62c-.49.49-.49,1.28,0,1.77.49.49,1.28.49,1.77,0l7.5-7.5c.49-.49.49-1.28,0-1.77Z" />
  </Icon>
);

export default ArrowRightIcon;
