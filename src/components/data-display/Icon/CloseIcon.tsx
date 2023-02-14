// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CloseIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <mask
      id="mask0_1071_11038"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="25"
      height="25"
    >
      <rect x="0.0612183" y="0.5" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1071_11038)">
      <path
        d="M6.46122 19.5L5.06122 18.1L10.6612 12.5L5.06122 6.9L6.46122 5.5L12.0612 11.1L17.6612 5.5L19.0612 6.9L13.4612 12.5L19.0612 18.1L17.6612 19.5L12.0612 13.9L6.46122 19.5Z"
        fill="#272A32"
      />
    </g>
  </Icon>
);

export default CloseIcon;
