// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const ChevronDoubleRightIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      stroke="#272A32"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.5"
      d="m3 3.5 9 9-9 9m9-18 9 9-9 9"
    />
  </Icon>
);

export default ChevronDoubleRightIcon;
