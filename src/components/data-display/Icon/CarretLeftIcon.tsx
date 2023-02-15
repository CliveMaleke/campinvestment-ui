// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CarretLeftIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_1704_3734)">
      <path d="M17.3878 4.30384C17.2032 4.2498 17.0019 4.23609 16.8073 4.2643C16.6128 4.29251 16.4328 4.36148 16.2883 4.46324L6.29299 11.9643C6.1053 12.1066 6 12.2986 6 12.4988C6 12.699 6.1053 12.891 6.29299 13.0332L16.2883 20.5343C16.4802 20.672 16.735 20.7492 17.0005 20.75C17.1331 20.7496 17.2645 20.7305 17.3878 20.6937C17.5697 20.6364 17.7249 20.5398 17.8339 20.4164C17.9428 20.2929 18.0006 20.148 18 19.9999V4.99769C18.0006 4.8496 17.9428 4.70469 17.8339 4.58121C17.7249 4.45774 17.5697 4.36123 17.3878 4.30384Z" />
    </g>
    <defs>
      <clipPath id="clip0_1704_3734">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </Icon>
);

export default CarretLeftIcon;
