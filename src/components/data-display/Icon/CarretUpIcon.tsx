// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CarretUpIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_1704_3728)">
      <path d="M20.0344 14.9656L12.5344 7.46563C12.3922 7.3248 12.2002 7.24579 12 7.24579C11.7999 7.24579 11.6078 7.3248 11.4657 7.46563L3.96565 14.9656C3.86391 15.0741 3.79494 15.2091 3.76674 15.3551C3.73853 15.5011 3.75224 15.6521 3.80627 15.7906C3.86365 15.9271 3.96015 16.0436 4.08361 16.1253C4.20706 16.2071 4.35196 16.2505 4.50002 16.25H19.5C19.6481 16.2505 19.793 16.2071 19.9164 16.1253C20.0399 16.0436 20.1364 15.9271 20.1938 15.7906C20.2478 15.6521 20.2615 15.5011 20.2333 15.3551C20.2051 15.2091 20.1361 15.0741 20.0344 14.9656Z" />
    </g>
    <defs>
      <clipPath id="clip0_1704_3728">
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

export default CarretUpIcon;
