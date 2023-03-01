// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const EthIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="12" fill="#627EEA" />
    <path
      d="M12.3735 3V9.6525L17.9963 12.165L12.3735 3Z"
      fill="white"
      fillOpacity="0.602"
    />
    <path d="M12.3735 3L6.75 12.165L12.3735 9.6525V3Z" fill="white" />
    <path
      d="M12.3735 16.476V20.9963L18 13.212L12.3735 16.476Z"
      fill="white"
      fillOpacity="0.602"
    />
    <path
      d="M12.3735 20.9963V16.4753L6.75 13.212L12.3735 20.9963Z"
      fill="white"
    />
    <path
      d="M12.3735 15.4298L17.9963 12.1651L12.3735 9.65405V15.4298Z"
      fill="white"
      fillOpacity="0.2"
    />
    <path
      d="M6.75 12.1651L12.3735 15.4298V9.65405L6.75 12.1651Z"
      fill="white"
      fillOpacity="0.602"
    />
  </Icon>
);

export default EthIcon;