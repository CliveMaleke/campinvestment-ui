// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const IncreaseIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 2.5 5.5 8.985 7.42 10.9l3.223-3.217V22.5h2.714l-.003-14.815 3.227 3.215L18.5 8.985 12 2.5Z" />
  </Icon>
);

export default IncreaseIcon;
