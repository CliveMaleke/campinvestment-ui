// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const MoreMenuIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M9.75 3.611c0-.614.504-1.111 1.125-1.111h2.25c.621 0 1.125.497 1.125 1.111v2.222c0 .614-.504 1.111-1.125 1.111h-2.25a1.118 1.118 0 0 1-1.125-1.11V3.61Zm0 7.778c0-.614.504-1.111 1.125-1.111h2.25c.621 0 1.125.497 1.125 1.11v2.223c0 .614-.504 1.111-1.125 1.111h-2.25a1.118 1.118 0 0 1-1.125-1.11v-2.223Zm0 7.778c0-.614.504-1.111 1.125-1.111h2.25c.621 0 1.125.497 1.125 1.11v2.223c0 .614-.504 1.111-1.125 1.111h-2.25a1.118 1.118 0 0 1-1.125-1.111v-2.222Z" />
  </Icon>
);

export default MoreMenuIcon;
