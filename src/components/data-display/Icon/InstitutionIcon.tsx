// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const InstitutionIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M2 21H22M13.4286 21V4.73913C13.4286 4.5431 13.3533 4.3551 13.2194 4.21649C13.0854 4.07787 12.9037 4 12.7143 4H4.14286C3.95342 4 3.77174 4.07787 3.63778 4.21649C3.50383 4.3551 3.42857 4.5431 3.42857 4.73913V21M20.5714 21V10.6522C20.5714 10.4561 20.4962 10.2681 20.3622 10.1295C20.2283 9.99092 20.0466 9.91304 19.8571 9.91304H13.4286M6.28571 7.69565H9.14286M7.71429 13.6087H10.5714M6.28571 17.3043H9.14286M16.2857 17.3043H17.7143M16.2857 13.6087H17.7143" stroke="#272A32" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
  </Icon>
);

export default InstitutionIcon;
