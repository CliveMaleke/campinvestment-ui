// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const WarningIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.7749 18.7782C22.4158 19.8891 21.6113 21.2778 20.3313 21.2778H3.66855C2.38602 21.2778 1.58525 19.887 2.22491 18.7782L10.5564 4.33281C11.1976 3.22139 12.8036 3.2234 13.4437 4.33281L21.7749 18.7782ZM12 15.7917C11.1179 15.7917 10.4028 16.5068 10.4028 17.3889C10.4028 18.271 11.1179 18.9861 12 18.9861C12.8821 18.9861 13.5972 18.271 13.5972 17.3889C13.5972 16.5068 12.8821 15.7917 12 15.7917ZM10.7412 14.7727L10.4836 10.0505C10.4706 9.81181 10.6606 9.61111 10.8996 9.61111H13.1004C13.3394 9.61111 13.5295 9.81181 13.5164 10.0505L13.2589 14.7727C13.2468 14.9937 13.0641 15.1667 12.8428 15.1667H11.1572C10.9359 15.1667 10.7532 14.9937 10.7412 14.7727Z"
    />
  </Icon>
);

export default WarningIcon;
