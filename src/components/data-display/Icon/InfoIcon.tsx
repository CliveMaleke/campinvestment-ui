// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const InfoIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <g id="Info">
      <g id="Info_2">
        <rect id="Rectangle" opacity="0.01" y="0.5" width="24" height="24" />
        <ellipse
          id="Oval"
          cx="11.9516"
          cy="8.38058"
          rx="0.982139"
          ry="0.982139"
        />
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 12.4517C2 6.95548 6.45548 2.5 11.9517 2.5C17.4475 2.5 21.9033 6.95548 21.9033 12.4517C21.9033 17.9478 17.4478 22.4033 11.9517 22.4033C6.45548 22.4033 2 17.9478 2 12.4517ZM20.9081 12.4514C20.9081 7.51301 16.8902 3.49509 11.9517 3.49509C7.01301 3.49509 2.99509 7.51273 2.99509 12.4514C2.99509 17.3902 7.01329 21.4078 11.9517 21.4078C16.8902 21.4078 20.9081 17.3899 20.9081 12.4514Z"
        />
        <rect
          id="Rectangle_2"
          x="11.2549"
          y="10.7021"
          width="1.39309"
          height="6.8027"
        />
      </g>
    </g>
  </Icon>
);

export default InfoIcon;
