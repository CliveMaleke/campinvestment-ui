// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const NotificationIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M19.503 16.594a5.68 5.68 0 0 1-1.903-4.27V10c0-2.933-2.091-5.36-4.8-5.767v-.9c0-.46-.358-.833-.8-.833-.442 0-.8.373-.8.833v.9C8.49 4.64 6.4 7.067 6.4 10v2.323c0 1.65-.694 3.206-1.91 4.278-.312.277-.49.68-.49 1.107 0 .805.628 1.459 1.4 1.459h13.2c.772 0 1.4-.655 1.4-1.459 0-.426-.178-.83-.497-1.114ZM12 22.5c1.449 0 2.66-1.076 2.94-2.5H9.06c.28 1.424 1.491 2.5 2.94 2.5Z" />
  </Icon>
);

export default NotificationIcon;
