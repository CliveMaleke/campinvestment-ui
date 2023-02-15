// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const ResizeIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      d="M12.0001 20.4999L20.0001 12.4999M4 20.5L20 4.5"
      stroke="#272A32"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </Icon>
);

export default ResizeIcon;
