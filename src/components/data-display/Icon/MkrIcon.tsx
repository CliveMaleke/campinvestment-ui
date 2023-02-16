// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const MkrIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_1740_905)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#1ABC9C"
      />
      <path
        d="M19.5 6V16.7812H18.1875V8.6625L13.5 12.2438V16.7812H12.1875V11.6063L13.5 10.5938L19.5 6ZM4.5 6L10.5 10.5938L11.8125 11.6063V16.7812H10.5V12.2438L5.8125 8.6625V16.7812H4.5V6Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1740_905">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);

export default MkrIcon;
