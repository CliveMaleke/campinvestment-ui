// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const ChevronDoubleRightIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      d="M5.25 5L12.75 12.5L5.25 20"
      stroke="#272A32"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.75 5L20.25 12.5L12.75 20"
      stroke="#272A32"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default ChevronDoubleRightIcon;
