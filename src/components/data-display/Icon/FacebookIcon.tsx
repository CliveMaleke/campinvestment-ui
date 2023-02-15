// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const FacebookIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M15.824 13.6842L16.3222 10.6018H13.2531V8.59829C13.2531 7.75546 13.6816 6.93189 15.0517 6.93189H16.4667V4.30707C15.6427 4.17913 14.8101 4.10991 13.9755 4.09998C11.4495 4.09998 9.80033 5.57854 9.80033 8.25152V10.6018H7.00024V13.6842H9.80033V21.1396H13.2531V13.6842H15.824Z" />
  </Icon>
);

export default FacebookIcon;
