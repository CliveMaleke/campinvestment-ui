// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const VerifiedIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="m8.91 22-1.728-2.895-3.273-.724.318-3.348L2 12.5l2.227-2.533-.318-3.348 3.273-.724L8.909 3 12 4.312 15.09 3l1.728 2.895 3.273.724-.318 3.348L22 12.5l-2.227 2.533.318 3.348-3.273.724L15.091 22 12 20.688 8.91 22Zm2.136-6.288 5.136-5.112-1.273-1.312-3.864 3.845-1.954-1.9L7.818 12.5l3.228 3.212Z" />
  </Icon>
);

export default VerifiedIcon;
