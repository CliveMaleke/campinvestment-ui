// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CheckIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <mask
      id="mask0_1704_3611"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="25"
      height="25"
    >
      <rect x="0.836914" y="0.5" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1704_3611)">
      <path d="M10.3865 18.4996L4.68652 12.7996L6.11152 11.3746L10.3865 15.6496L19.5615 6.47461L20.9865 7.89961L10.3865 18.4996Z" />
    </g>
  </Icon>
);

export default CheckIcon;
