// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const IncreaseIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <rect opacity="0.01" y="0.5" width="24" height="24" fill="#16D091" />
    <path d="M11.9658 2.99716L5.50293 9.46002L7.41106 11.3682L10.6163 8.16253L10.6166 22.9285H13.315L13.3123 8.16453L16.5206 11.368L18.4287 9.46002L11.9658 2.99716Z" />
  </Icon>
);

export default IncreaseIcon;
