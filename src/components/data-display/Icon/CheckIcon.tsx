// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CheckIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M10.3865 18.4996L4.68652 12.7996L6.11152 11.3746L10.3865 15.6496L19.5615 6.47461L20.9865 7.89961L10.3865 18.4996Z" />
  </Icon>
);

export default CheckIcon;
