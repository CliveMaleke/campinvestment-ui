// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const SearchIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="m22.46,21.48s0,0,0,0l-4.8-4.57c1.58-1.61,2.55-3.77,2.55-6.15,0-5-4.27-9.04-9.49-9.04S1.22,5.76,1.22,10.76s4.27,9.04,9.49,9.04c1.95,0,3.75-.57,5.26-1.53l4.95,4.71c.21.2.49.3.77.3s.55-.1.77-.3c.43-.41.43-1.09,0-1.5ZM10.71,3.83c4.05,0,7.31,3.12,7.31,6.93s-3.26,6.93-7.31,6.93-7.31-3.12-7.31-6.93,3.26-6.93,7.31-6.93Zm5.29,14.09h0,0s0,0,0,0h0Z" />
  </Icon>
);

export default SearchIcon;
