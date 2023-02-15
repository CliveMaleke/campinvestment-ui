// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const PlusFillIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5ZM17 11.7028H13.1924V7.5H10.8277V11.7028H7V14.0066H10.8277V18.5H13.1924V14.0066H17V11.7028Z"
    />
  </Icon>
);

export default PlusFillIcon;
