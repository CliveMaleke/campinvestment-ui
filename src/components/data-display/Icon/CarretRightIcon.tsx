// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CarretRightIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_1704_3740)">
      <path d="M17.0344 11.9657L9.53438 4.46565C9.42594 4.36391 9.29091 4.29494 9.14491 4.26674C8.99891 4.23853 8.84791 4.25224 8.70938 4.30627C8.57288 4.36365 8.45641 4.46015 8.37467 4.58361C8.29292 4.70706 8.24954 4.85196 8.25 5.00002V20C8.24954 20.1481 8.29292 20.293 8.37467 20.4164C8.45641 20.5399 8.57288 20.6364 8.70938 20.6938C8.80189 20.7305 8.90047 20.7496 9 20.75C9.19916 20.7492 9.39041 20.672 9.53438 20.5344L17.0344 13.0344C17.1752 12.8922 17.2542 12.7002 17.2542 12.5C17.2542 12.2999 17.1752 12.1078 17.0344 11.9657Z" />
    </g>
    <defs>
      <clipPath id="clip0_1704_3740">
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

export default CarretRightIcon;
