// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const ArrowUpIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M8.2279 15.6065L12.3524 11.482L16.4769 15.6065C16.8915 16.0211 17.5612 16.0211 17.9758 15.6065C18.3904 15.192 18.3904 14.5223 17.9758 14.1077L13.0965 9.22841C12.682 8.81384 12.0123 8.81384 11.5977 9.22841L6.7184 14.1077C6.30383 14.5223 6.30383 15.192 6.7184 15.6065C7.13298 16.0105 7.81332 16.0211 8.2279 15.6065V15.6065Z" />
  </Icon>
);

export default ArrowUpIcon;
