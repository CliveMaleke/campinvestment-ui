// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const PlusIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <mask
      id="mask0_1704_3824"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="24"
      height="25"
    >
      <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_1704_3824)">
      <path d="M10.675 19.8249V13.8249H4.67505V11.1749H10.675V5.17493H13.325V11.1749H19.3251V13.8249H13.325V19.8249H10.675Z" />
    </g>
  </Icon>
);

export default PlusIcon;
