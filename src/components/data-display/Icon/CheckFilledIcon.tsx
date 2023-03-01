// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CheckFilledIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="m10.6 17.1 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4 4.25 4.25Zm1.4 5.4a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12.5a9.74 9.74 0 0 1 .788-3.9 10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2.5a9.74 9.74 0 0 1 3.9.787 10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12.5a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137a9.733 9.733 0 0 1-3.9.788Z" />
  </Icon>
);

export default CheckFilledIcon;