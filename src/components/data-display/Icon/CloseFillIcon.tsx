// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CloseFillIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <mask
      id="mask0_1704_3852"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="25"
    >
      <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1704_3852)">
      <path d="M8.4 17.5L12 13.9L15.6 17.5L17 16.1L13.4 12.5L17 8.9L15.6 7.5L12 11.1L8.4 7.5L7 8.9L10.6 12.5L7 16.1L8.4 17.5ZM12 22.5C10.6167 22.5 9.31667 22.2373 8.1 21.712C6.88333 21.1873 5.825 20.475 4.925 19.575C4.025 18.675 3.31267 17.6167 2.788 16.4C2.26267 15.1833 2 13.8833 2 12.5C2 11.1167 2.26267 9.81667 2.788 8.6C3.31267 7.38333 4.025 6.325 4.925 5.425C5.825 4.525 6.88333 3.81233 8.1 3.287C9.31667 2.76233 10.6167 2.5 12 2.5C13.3833 2.5 14.6833 2.76233 15.9 3.287C17.1167 3.81233 18.175 4.525 19.075 5.425C19.975 6.325 20.6873 7.38333 21.212 8.6C21.7373 9.81667 22 11.1167 22 12.5C22 13.8833 21.7373 15.1833 21.212 16.4C20.6873 17.6167 19.975 18.675 19.075 19.575C18.175 20.475 17.1167 21.1873 15.9 21.712C14.6833 22.2373 13.3833 22.5 12 22.5Z" />
    </g>
  </Icon>
);

export default CloseFillIcon;
