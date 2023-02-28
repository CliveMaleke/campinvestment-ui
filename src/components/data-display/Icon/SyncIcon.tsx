// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const SyncIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M5.463 4.933A9.961 9.961 0 0 1 12 2.5c5.523 0 10 4.477 10 10 0 2.136-.67 4.116-1.81 5.74L17 12.5h3A8 8 0 0 0 6.46 6.728l-.997-1.795Zm13.074 15.134A9.961 9.961 0 0 1 12 22.5c-5.523 0-10-4.477-10-10 0-2.136.67-4.116 1.81-5.74L7 12.5H4a8 8 0 0 0 13.54 5.772l.997 1.795Z" />
  </Icon>
);

export default SyncIcon;
