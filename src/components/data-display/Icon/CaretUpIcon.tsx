// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CarretUpIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="m20.767 16.074-8.184-8.33a.821.821 0 0 0-1.166 0l-8.184 8.33a.88.88 0 0 0-.174.916.83.83 0 0 0 .302.372c.135.09.293.139.455.138h16.368c.162 0 .32-.048.455-.139a.83.83 0 0 0 .302-.371.89.89 0 0 0-.174-.916Z" />
  </Icon>
);

export default CarretUpIcon;
