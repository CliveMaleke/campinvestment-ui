// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CarretDownIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M3.195 8.596c.936.98 1.866 1.961 2.803 2.942 1.491 1.564 2.975 3.127 4.467 4.691.346.36.685.718 1.03 1.084.238.25.786.25 1.016 0 .937-.981 1.867-1.962 2.803-2.942 1.492-1.564 2.976-3.128 4.468-4.692.346-.359.684-.718 1.03-1.083.39-.41.152-1.096-.511-1.096H3.713c-.93 0-.77.833-.518 1.096Z" />
  </Icon>
);

export default CarretDownIcon;
