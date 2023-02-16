// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const LtcIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_1740_898)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#BFBBBB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.82025 14.4105L6.75 14.826L7.266 12.7568L8.349 12.3218L9.90975 6H13.7565L12.6172 10.647L13.6747 10.2188L13.1647 12.2812L12.0945 12.7095L11.4585 15.3218H17.25L16.5953 18H6.939L7.82025 14.4105Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1740_898">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);

export default LtcIcon;
