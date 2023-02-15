// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CloseIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M6.46122 19.5L5.06122 18.1L10.6612 12.5L5.06122 6.9L6.46122 5.5L12.0612 11.1L17.6612 5.5L19.0612 6.9L13.4612 12.5L19.0612 18.1L17.6612 19.5L12.0612 13.9L6.46122 19.5Z" />
  </Icon>
);

export default CloseIcon;
