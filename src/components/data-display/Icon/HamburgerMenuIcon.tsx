// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const HamburgerMenuIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <rect x="2.3999" y="5.03662" width="19.2" height="2.17079" rx="1.0854" />
    <rect x="2.3999" y="11.549" width="19.2" height="2.17079" rx="1.0854" />
    <rect x="2.3999" y="18.0613" width="19.2" height="2.1708" rx="1.0854" />
  </Icon>
);

export default HamburgerMenuIcon;
