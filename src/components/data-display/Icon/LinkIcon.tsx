// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const LinkIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_1740_863)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#2B5ADA"
      />
      <path
        d="M12.3028 3L10.6514 3.94954L6.15138 6.55046L4.5 7.5V16.5L6.15138 17.4495L10.6927 20.0505L12.344 21L13.9954 20.0505L18.4541 17.4495L20.1055 16.5V7.5L18.4541 6.55046L13.9541 3.94954L12.3028 3ZM7.80275 14.6009V9.39908L12.3028 6.79817L16.8028 9.39908V14.6009L12.3028 17.2018L7.80275 14.6009Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1740_863">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);

export default LinkIcon;
