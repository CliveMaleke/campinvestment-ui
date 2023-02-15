// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CarretDownIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <rect opacity="0.01" x="4" y="3.5" width="16" height="15.1111" />
    <path d="M4.17292 10.2252C5.00557 11.1513 5.83182 12.0775 6.66447 13.0036C7.99031 14.4806 9.30974 15.9576 10.6356 17.4345C10.943 17.7735 11.2441 18.1125 11.5515 18.4575C11.7629 18.6936 12.2496 18.6936 12.4546 18.4575C13.2873 17.5314 14.1135 16.6052 14.9462 15.6791C16.272 14.2021 17.5914 12.7252 18.9173 11.2482C19.2247 10.9092 19.5257 10.5702 19.8332 10.2252C20.1791 9.83781 19.9677 9.19012 19.3784 9.19012C17.7195 9.19012 16.0542 9.19012 14.3953 9.19012C11.7501 9.19012 9.10478 9.19012 6.4531 9.19012C5.84463 9.19012 5.23615 9.19012 4.63408 9.19012C3.80783 9.19012 3.94874 9.97704 4.17292 10.2252Z" />
  </Icon>
);

export default CarretDownIcon;