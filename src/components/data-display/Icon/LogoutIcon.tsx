// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const LogoutIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M4.22222 22.5C3.61111 22.5 3.08778 22.2826 2.65222 21.8478C2.21741 21.4122 2 20.8889 2 20.2778V4.72222C2 4.11111 2.21741 3.58778 2.65222 3.15222C3.08778 2.71741 3.61111 2.5 4.22222 2.5H12V4.72222H4.22222V20.2778H12V22.5H4.22222ZM16.4444 18.0556L14.9167 16.4444L17.75 13.6111H8.66667V11.3889H17.75L14.9167 8.55556L16.4444 6.94444L22 12.5L16.4444 18.0556Z" />
  </Icon>
);

export default LogoutIcon;
