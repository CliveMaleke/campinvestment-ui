// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const IncreaseUpIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M21.4015 5.5H14.6185C14.0848 5.5 13.8204 6.16397 14.1945 6.55515L16.788 9.23162L12.4239 13.7353L9.23192 10.4412L2 17.7551L3.69576 19.5L9.23192 13.8331L12.4239 17.0294L18.4489 10.9456L20.9776 13.5551C21.3566 13.9463 22 13.6684 22 13.1176V6.11765C22 5.77794 21.7307 5.5 21.4015 5.5Z" />
  </Icon>
);

export default IncreaseUpIcon;
