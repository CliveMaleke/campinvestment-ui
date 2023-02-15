// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CloudUploadIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_1704_3818)">
      <path d="M19.35 10.54C19.0141 8.83772 18.0976 7.30486 16.7571 6.20325C15.4165 5.10163 13.7351 4.49961 12 4.5C9.11 4.5 6.6 6.14 5.35 8.54C3.88023 8.69883 2.52101 9.39521 1.53349 10.4953C0.545971 11.5954 -0.000171702 13.0217 4.04928e-08 14.5C4.04928e-08 17.81 2.69 20.5 6 20.5H19C21.76 20.5 24 18.26 24 15.5C24 12.86 21.95 10.72 19.35 10.54ZM14 13.5V17.5H10V13.5H7L12 8.5L17 13.5H14Z" />
    </g>
    <defs>
      <clipPath id="clip0_1704_3818">
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

export default CloudUploadIcon;
