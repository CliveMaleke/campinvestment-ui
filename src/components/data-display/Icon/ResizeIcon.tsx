// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const ResizeIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="m21.06,3.44c-.59-.59-1.54-.59-2.12,0L2.94,19.44c-.59.59-.59,1.54,0,2.12.59.59,1.54.59,2.12,0L21.06,5.56c.59-.59.59-1.54,0-2.12Z" />
    <path d="m21.06,11.44c-.59-.59-1.54-.59-2.12,0l-8,8c-.59.59-.59,1.54,0,2.12.59.59,1.54.59,2.12,0l8-8c.59-.59.59-1.54,0-2.12Z" />
  </Icon>
);

export default ResizeIcon;
