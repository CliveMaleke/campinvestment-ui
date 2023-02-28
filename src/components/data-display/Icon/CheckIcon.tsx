// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CheckIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M9.294 19 3 12.838l1.574-1.54 4.72 4.62L19.426 6 21 7.54 9.294 19Z" />
  </Icon>
);

export default CheckIcon;
