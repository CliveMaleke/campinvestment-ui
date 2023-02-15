// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const PlusIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M10.675 19.8249V13.8249H4.67505V11.1749H10.675V5.17493H13.325V11.1749H19.3251V13.8249H13.325V19.8249H10.675Z" />
  </Icon>
);

export default PlusIcon;
