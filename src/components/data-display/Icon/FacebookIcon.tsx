// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const FacebookIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="m16.753 13.75.58-3.619h-3.567V7.78c0-.99.498-1.956 2.09-1.956H17.5v-3.08a20.254 20.254 0 0 0-2.895-.244c-2.935 0-4.851 1.735-4.851 4.873v2.758H6.5v3.618h3.254V22.5h4.012v-8.75h2.987Z" />
  </Icon>
);

export default FacebookIcon;
