// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const SolIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      d="M5.24872 16.2118C5.36941 16.0886 5.53537 16.0167 5.71138 16.0167H21.6732C21.9648 16.0167 22.1107 16.376 21.9045 16.5865L18.7514 19.805C18.6307 19.9282 18.4647 20 18.2887 20H2.32692C2.03524 20 1.8894 19.6407 2.09559 19.4303L5.24872 16.2118Z"
      fill="url(#paint0_linear_1740_926)"
    />
    <path
      d="M5.24872 4.19506C5.37444 4.07186 5.5404 4 5.71138 4H21.6732C21.9648 4 22.1107 4.35932 21.9045 4.56978L18.7514 7.78826C18.6307 7.91145 18.4647 7.98332 18.2887 7.98332H2.32692C2.03524 7.98332 1.8894 7.624 2.09559 7.41354L5.24872 4.19506Z"
      fill="url(#paint1_linear_1740_926)"
    />
    <path
      d="M18.7514 10.1649C18.6307 10.0417 18.4647 9.96985 18.2887 9.96985H2.32692C2.03524 9.96985 1.8894 10.3292 2.09559 10.5396L5.24872 13.7581C5.36941 13.8813 5.53537 13.9532 5.71138 13.9532H21.6732C21.9648 13.9532 22.1107 13.5938 21.9045 13.3834L18.7514 10.1649Z"
      fill="url(#paint2_linear_1740_926)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1740_926"
        x1="20.1483"
        y1="2.07741"
        x2="8.74121"
        y2="23.483"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1740_926"
        x1="15.3181"
        y1="-0.496703"
        x2="3.91094"
        y2="20.9089"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1740_926"
        x1="17.7178"
        y1="0.782145"
        x2="6.3107"
        y2="22.1878"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00FFA3" />
        <stop offset="1" stopColor="#DC1FFF" />
      </linearGradient>
    </defs>
  </Icon>
);

export default SolIcon;
