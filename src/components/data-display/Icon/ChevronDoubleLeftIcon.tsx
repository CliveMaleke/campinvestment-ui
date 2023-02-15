// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const ChevronDoubleLeftIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      d="M18.75 20L11.25 12.5L18.75 5"
      stroke="#272A32"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.25 20L3.75 12.5L11.25 5"
      stroke="#272A32"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default ChevronDoubleLeftIcon;
