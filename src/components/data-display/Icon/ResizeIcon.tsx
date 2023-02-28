// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const ResizeIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      stroke="#272A32"
      stroke-linecap="round"
      stroke-width="2.5"
      d="m12 21.5 9-9m-18 9 18-18"
    />
  </Icon>
);

export default ResizeIcon;
