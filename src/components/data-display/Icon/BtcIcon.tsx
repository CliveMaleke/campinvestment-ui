// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const BtcIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <rect width="24" height="24" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use transform="scale(0.00195312)" />
      </pattern>
      <image
        id="image0_1740_842"
        width="512"
        height="512"
      />
    </defs>
  </Icon>
);

export default BtcIcon;
