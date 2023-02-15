// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const MoreMenuIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <rect x="10" y="3.5" width="4" height="4" rx="1" />
    <rect x="10" y="10.5" width="4" height="4" rx="1" />
    <rect x="10" y="17.5" width="4" height="4" rx="1" />
  </Icon>
);

export default MoreMenuIcon;
