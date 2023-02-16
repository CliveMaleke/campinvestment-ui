// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const EosIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_1740_877)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="black"
      />
      <path
        d="M8.16451 8.70752L12 20.7503L6.30901 17.1848L8.16451 8.70752L12 3.46802V7.14302L6.30901 17.1848H17.6963L12.0053 7.14302V3.46802L15.84 8.70752L17.6963 17.1848L12.0053 20.7503L15.84 8.70752"
        stroke="white"
        strokeWidth="0.64"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1740_877">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);

export default EosIcon;
