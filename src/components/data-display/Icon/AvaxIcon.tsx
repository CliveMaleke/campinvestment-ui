// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const AvaxIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
      fill="#E84142"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.2605 5.31944C12.4297 5.40563 12.5638 5.6387 12.8288 6.10482L14.109 8.33966L14.1156 8.35106C14.4018 8.85113 14.5469 9.10471 14.6103 9.37086C14.6805 9.6614 14.6805 9.96789 14.6103 10.2584C14.5464 10.5266 14.4028 10.782 14.1122 11.2896L10.841 17.0722L10.8326 17.087C10.5445 17.5912 10.3985 17.8467 10.1961 18.0395C9.97584 18.2502 9.71085 18.4034 9.42032 18.4897C9.20832 18.5484 8.97591 18.5602 8.58738 18.5625L5.47894 18.5625C5.12062 18.5597 4.92162 18.5446 4.79102 18.461C4.61861 18.3492 4.51326 18.1641 4.50049 17.9597C4.4909 17.7714 4.62182 17.5415 4.88361 17.0817L11.1112 6.10482C11.3761 5.6387 11.5102 5.40563 11.6794 5.31944C11.8614 5.22685 12.0785 5.22685 12.2605 5.31944ZM16.1472 13.2092C16.3291 13.1166 16.5432 13.1166 16.725 13.2092C16.8899 13.2931 17.0184 13.5104 17.2727 13.9405L17.2933 13.9754L19.1036 17.0722C19.1124 17.0875 19.1211 17.1025 19.1297 17.1172C19.3807 17.5503 19.5087 17.7712 19.4995 17.9535C19.4898 18.1577 19.3813 18.3461 19.209 18.4579C19.0493 18.5631 18.781 18.5631 18.2479 18.5631L14.3684 18.5625C14.0069 18.5597 13.8041 18.5446 13.6761 18.461C13.5037 18.3492 13.3984 18.1609 13.3856 17.9566C13.3761 17.7697 13.508 17.5419 13.7721 17.0861L13.7783 17.0754L15.5821 13.9786C15.8471 13.522 15.9812 13.2954 16.1472 13.2092Z"
      fill="white"
    />
  </Icon>
);

export default AvaxIcon;