// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const HamburgerMenuIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M2 6.071C2 5.48 2.506 5 3.13 5h17.74c.624 0 1.13.48 1.13 1.071 0 .592-.506 1.072-1.13 1.072H3.13C2.507 7.143 2 6.663 2 6.07ZM2 12.5c0-.592.506-1.071 1.13-1.071h17.74c.624 0 1.13.48 1.13 1.071 0 .592-.506 1.071-1.13 1.071H3.13c-.624 0-1.13-.48-1.13-1.071Zm0 6.429c0-.592.506-1.072 1.13-1.072h17.74c.624 0 1.13.48 1.13 1.072C22 19.52 21.494 20 20.87 20H3.13C2.507 20 2 19.52 2 18.929Z" />
  </Icon>
);

export default HamburgerMenuIcon;
