// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const DaiIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_1740_912)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#FABF41"
      />
      <path
        d="M21 9.705H19.185C19.0436 9.35143 18.8786 8.99786 18.69 8.64429C18.0536 7.58357 17.1579 6.735 16.0264 6.14571C14.895 5.55643 13.575 5.25 12.09 5.25H6.33857V5.29714V9.705H4.5V11.355H6.33857V13.2407H4.5V14.8907H6.33857V19.3693H12.09C13.575 19.3693 14.895 19.0629 16.0264 18.4736C17.1579 17.8843 18.0536 17.0357 18.69 15.975C18.9021 15.6214 19.0671 15.2679 19.2086 14.8907H21V13.2407H19.5857C19.6093 12.9343 19.6329 12.6279 19.6329 12.3214C19.6329 11.9914 19.6093 11.685 19.5857 11.355H21V9.705ZM7.94143 6.66429H12.0193C13.245 6.66429 14.3057 6.9 15.2014 7.395C16.1207 7.86643 16.8043 8.55 17.3229 9.39857C17.3936 9.51643 17.4407 9.61071 17.5114 9.72857H7.94143V6.66429ZM17.3229 15.2443C16.8279 16.0929 16.1207 16.7529 15.2014 17.2479C14.2821 17.7193 13.2214 17.9786 12.0193 17.9786H7.94143V14.8907H17.5114C17.4407 15.0086 17.3936 15.1264 17.3229 15.2443ZM18.0771 12.3214C18.0771 12.6514 18.0536 12.9579 18.0064 13.2407H7.94143V11.355H18.0064C18.0536 11.6614 18.0771 11.9914 18.0771 12.3214Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1740_912">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);

export default DaiIcon;
