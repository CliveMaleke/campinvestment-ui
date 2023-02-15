// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const ArrowUpIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M8.22814 9.80843L12.3527 13.933L16.4772 9.80843C16.8918 9.39385 17.5615 9.39385 17.9761 9.80843C18.3906 10.223 18.3906 10.8927 17.9761 11.3073L13.0968 16.1866C12.6822 16.6011 12.0125 16.6011 11.5979 16.1866L6.71865 11.3073C6.30407 10.8927 6.30407 10.223 6.71865 9.80843C7.13323 9.40448 7.81356 9.39385 8.22814 9.80843Z" />
  </Icon>
);

export default ArrowUpIcon;
