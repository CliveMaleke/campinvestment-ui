// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const LoanIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.8139 8.15754L13.8139 8.15755L13.8139 8.15758C14.7511 9.27905 15.8084 10.5442 16.6009 11.8488C19.9787 11.9763 22.6875 14.7635 22.6875 18.1719C22.6875 21.6612 19.8487 24.5 16.3594 24.5C14.1432 24.5 12.1898 23.3546 11.0591 21.625C5.92345 21.9747 1.5 20.6268 1.5 15.4987C1.5 12.9655 3.73355 10.2913 5.53096 8.13934L5.53097 8.13934L5.53105 8.13924C5.91448 7.68017 6.27806 7.24486 6.59588 6.83975C5.81808 5.83592 6.0975 4.37169 7.20942 3.72777C6.90708 3.29431 6.53737 3.11061 6.49012 3.08839C6.06052 2.91495 5.71533 2.03478 6.15989 1.26477C6.43636 0.785938 6.93155 0.5 7.48453 0.5H11.8515C12.4044 0.5 12.8996 0.785937 13.1761 1.26486C13.6199 2.03356 13.2769 2.91448 12.8459 3.08848C12.7987 3.11066 12.429 3.29436 12.1266 3.72786C13.2454 4.37577 13.5152 5.84408 12.7372 6.84364C13.0571 7.25192 13.4252 7.69237 13.8139 8.15754ZM8.26172 6.25283H11.0742C11.4495 6.25283 11.775 5.94589 11.775 5.55205C11.775 5.21009 11.5286 4.925 11.2042 4.86387C11.1393 4.86894 11.0731 4.86514 11.0069 4.85131H8.34323C8.26167 4.86997 8.19037 4.87259 8.11973 4.8658C7.80117 4.93161 7.56094 5.21427 7.56094 5.55205C7.56094 5.94613 7.88662 6.25283 8.26172 6.25283ZM11.9462 1.94352C11.914 1.89776 11.8159 1.89838 10.9672 1.90376C10.3286 1.90781 9.26491 1.91455 7.48448 1.90625C7.4332 1.90625 7.39598 1.93077 7.37311 1.97647C7.73002 2.20437 8.29608 2.66375 8.66353 3.44502H10.6725C11.0399 2.6637 11.606 2.20437 11.9629 1.97647C11.9607 1.97205 11.9588 1.96788 11.957 1.96394L11.957 1.96392C11.9535 1.95627 11.9504 1.9495 11.9462 1.94352ZM6.63829 9.00586C4.95879 11.0167 2.90625 13.4741 2.90625 15.4987C2.90625 19.5522 6.33694 20.3744 10.3823 20.2506C10.1465 19.5744 10.0278 18.8649 10.0317 18.1383C9.57005 18.4526 8.93344 18.1242 8.93344 17.5567V17.4688C8.56022 17.3887 8.21203 17.245 7.93964 17.0667C7.6147 16.8541 7.52358 16.4183 7.7362 16.0934C7.94878 15.7684 8.38453 15.6772 8.70956 15.89C9.05878 16.1184 9.64036 16.2026 9.92958 16.0665C10.1321 15.9712 10.2832 15.773 10.3055 15.5734C10.3507 15.1683 9.8232 14.9606 9.4392 14.8094L9.4027 14.795L9.40266 14.795C8.91695 14.6032 8.31243 14.3644 7.96777 13.7422C7.47422 12.8511 7.91775 11.6597 8.93348 11.2784V11.1747C8.93348 10.7864 9.2483 10.4716 9.63661 10.4716C10.0249 10.4716 10.3397 10.7864 10.3397 11.1747V11.2314C10.6384 11.3152 10.9146 11.4586 11.1323 11.6595C11.4178 11.9228 11.4358 12.3676 11.1725 12.653C10.9092 12.9385 10.4643 12.9565 10.1789 12.6931C10.0191 12.5457 9.56428 12.4894 9.35166 12.6324C9.2025 12.7326 9.12923 12.9368 9.19786 13.0608C9.29701 13.2398 9.56819 13.3472 9.9004 13.4787C10.347 13.6555 10.9039 13.876 11.3016 14.373C12.2001 13.1799 13.5103 12.3138 15.0192 11.9871C14.3338 10.9726 13.5046 9.98043 12.7377 9.06283L12.7376 9.06277L12.7376 9.06277L12.7376 9.06273C12.3095 8.55048 11.9008 8.06148 11.5475 7.60484C11.289 7.66437 11.176 7.6637 10.4272 7.65924C9.98322 7.6566 9.31568 7.65262 8.26172 7.65908C8.09723 7.65908 7.9373 7.63948 7.78355 7.60367C7.44959 8.03453 7.05545 8.50642 6.63829 9.00586ZM11.4375 18.1719C11.4375 20.8858 13.6455 23.0938 16.3594 23.0938C19.0733 23.0938 21.2812 20.8858 21.2812 18.1719C21.2812 15.458 19.0733 13.25 16.3594 13.25C13.6455 13.25 11.4375 15.458 11.4375 18.1719ZM14.3563 19.1563L17.3395 16.1732C17.614 15.8986 18.0592 15.8986 18.3338 16.1732C18.6084 16.4478 18.6084 16.893 18.3338 17.1676L15.3507 20.1507C15.0761 20.4253 14.6309 20.4253 14.3563 20.1507C14.0817 19.8761 14.0817 19.4309 14.3563 19.1563ZM15.3141 17.1277C15.5877 16.8541 15.5877 16.4103 15.3141 16.1366C15.0404 15.863 14.5967 15.863 14.323 16.1366C14.0494 16.4103 14.0494 16.854 14.323 17.1277C14.5967 17.4014 15.0404 17.4014 15.3141 17.1277ZM17.3095 20.1145C17.0358 19.8409 17.0358 19.3971 17.3095 19.1235C17.5832 18.8498 18.0269 18.8498 18.3005 19.1235C18.5742 19.3971 18.5742 19.8409 18.3005 20.1145C18.0269 20.3882 17.5831 20.3882 17.3095 20.1145Z"
    />
  </Icon>
);

export default LoanIcon;
