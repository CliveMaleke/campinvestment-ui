// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CompIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_1740_870)">
      <path
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="#00D395"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.60199 16.1904C6.22846 15.9619 6 15.5551 6 15.1182V12.6785C6 12.5851 6.02501 12.4951 6.07171 12.4151C6.21678 12.1649 6.53863 12.0799 6.78876 12.2266L12.2951 15.4367C12.6169 15.6251 12.8154 15.9687 12.8154 16.3422V18.8702C12.8154 18.9853 12.7837 19.1003 12.7237 19.1987C12.5419 19.4956 12.155 19.5889 11.8582 19.4072L6.60199 16.1904ZM14.8098 11.5579C15.1316 11.7463 15.3301 12.0899 15.3301 12.4634V17.5928C15.3301 17.7446 15.2483 17.8847 15.1166 17.9581L13.9109 18.6368C13.8959 18.6451 13.8793 18.6518 13.8626 18.6568V15.8086C13.8626 15.44 13.6692 15.0982 13.3523 14.9081L8.51637 12.0148V8.79975C8.51637 8.70636 8.54138 8.61632 8.58807 8.53627C8.73315 8.28613 9.05499 8.20109 9.30513 8.34783L14.8098 11.5579ZM17.2194 7.76919C17.5429 7.95596 17.7414 8.30281 17.7414 8.67635V16.1688C17.7414 16.3222 17.6563 16.4639 17.5213 16.5373L16.3789 17.1543V11.9381C16.3789 11.5696 16.1856 11.2294 15.8704 11.0393L10.9277 8.07436V5.02436C10.9277 4.93098 10.9527 4.84093 10.9977 4.76089C11.1428 4.51075 11.4646 4.4257 11.7148 4.57078L17.2194 7.76919Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1740_870">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);

export default CompIcon;
