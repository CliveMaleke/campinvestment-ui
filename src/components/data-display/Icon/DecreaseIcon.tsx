// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const DecreaseIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 23.5L19 16.3664L16.9333 14.2602L13.4617 17.7985L13.4614 1.5H10.5386L10.5416 17.7963L7.06659 14.2603L5 16.3664L12 23.5Z" />
  </Icon>
);

export default DecreaseIcon;
