// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const BtcIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      d="M23.641 14.9029C22.0383 21.3315 15.5271 25.2438 9.09772 23.6407C2.67102 22.0381 -1.24132 15.5265 0.362068 9.09837C1.96405 2.66903 8.47522 -1.24361 14.9026 0.359081C21.3316 1.96177 25.2437 8.47405 23.6408 14.903L23.6409 14.9029H23.641Z"
      fill="#F7931A"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.2928 10.2903C17.5317 8.69334 16.3159 7.83492 14.6533 7.26227L15.1927 5.09908L13.8759 4.77096L13.3509 6.8772C13.0047 6.79086 12.6492 6.70951 12.2958 6.62886L12.8247 4.50872L11.5087 4.1806L10.969 6.34309C10.6826 6.27787 10.4012 6.21341 10.1282 6.14548L10.1298 6.13868L8.31386 5.68522L7.96357 7.09165C7.96357 7.09165 8.94053 7.31559 8.91994 7.32937C9.45317 7.46246 9.5496 7.81545 9.53359 8.09523L8.91924 10.5596C8.95595 10.5689 9.00358 10.5824 9.05614 10.6035L9.01787 10.594L9.01783 10.594C8.98536 10.5859 8.9516 10.5774 8.91695 10.5691L8.05584 14.0214C7.99067 14.1834 7.82526 14.4265 7.45245 14.3342C7.46565 14.3533 6.49538 14.0953 6.49538 14.0953L5.84161 15.6026L7.55522 16.0298C7.74287 16.0769 7.9283 16.1252 8.11186 16.1731L8.11188 16.1731C8.24015 16.2065 8.3675 16.2397 8.49405 16.2721L7.94914 18.4601L9.26442 18.7882L9.80405 16.6234C10.1634 16.721 10.5121 16.8109 10.8534 16.8958L10.3156 19.0503L11.6325 19.3784L12.1773 17.1945C14.4228 17.6195 16.1111 17.4482 16.8218 15.4172C17.3945 13.782 16.7933 12.8388 15.612 12.2238C16.4724 12.0253 17.1205 11.4594 17.2933 10.2905L17.2929 10.2902L17.2928 10.2903ZM14.2842 14.5091C13.9109 16.0093 11.5626 15.3891 10.4882 15.1053C10.3915 15.0798 10.3052 15.057 10.2315 15.0387L10.9546 12.14C11.0444 12.1624 11.1541 12.187 11.2783 12.2149L11.2784 12.2149C12.3898 12.4643 14.6668 12.9753 14.2843 14.5091H14.2842ZM11.5013 10.8695C12.3971 11.1086 14.3512 11.6301 14.6915 10.2666H14.6916C15.0391 8.87204 13.1401 8.4516 12.2126 8.24625C12.1082 8.22315 12.0162 8.20277 11.941 8.18404L11.2854 10.813C11.3473 10.8284 11.42 10.8478 11.5013 10.8695Z"
      fill="white"
    />
  </Icon>
);

export default BtcIcon;