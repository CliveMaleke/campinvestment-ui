// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const TransferIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M2 21V4L22 12.5L2 21ZM3.74419 18.3621L17.5233 12.5L3.74419 6.63793V10.9759L10.0523 12.5L3.74419 14.0241V18.3621ZM3.74419 18.3621V6.63793V14.0241V18.3621Z" />
  </Icon>
);

export default TransferIcon;
