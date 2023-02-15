// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const VerifiedIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M8.6 23L6.7 19.8L3.1 19L3.45 15.3L1 12.5L3.45 9.7L3.1 6L6.7 5.2L8.6 2L12 3.45L15.4 2L17.3 5.2L20.9 6L20.55 9.7L23 12.5L20.55 15.3L20.9 19L17.3 19.8L15.4 23L12 21.55L8.6 23ZM10.95 16.05L16.6 10.4L15.2 8.95L10.95 13.2L8.8 11.1L7.4 12.5L10.95 16.05Z" />
  </Icon>
);

export default VerifiedIcon;
