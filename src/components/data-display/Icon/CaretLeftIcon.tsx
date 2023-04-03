// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CarretLeftIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M16.49 3.559a.89.89 0 0 0-.916.174l-8.33 8.183a.821.821 0 0 0 0 1.166l8.33 8.183a.872.872 0 0 0 .916.174.83.83 0 0 0 .372-.303.808.808 0 0 0 .138-.454V4.316a.808.808 0 0 0-.139-.455.83.83 0 0 0-.371-.302Z" />
  </Icon>
);

export default CarretLeftIcon;
