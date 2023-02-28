// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const SearchIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path      
      fill-rule="evenodd"
      stroke="#272A32"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width=".8"
      d="M3.548 10.843c0-3.795 3.235-6.87 7.226-6.87 3.99 0 7.225 3.075 7.225 6.87s-3.235 6.871-7.225 6.871c-3.99 0-7.226-3.076-7.226-6.87Zm18.226 10.4-4.77-4.534c1.571-1.509 2.544-3.58 2.544-5.866 0-4.6-3.936-8.343-8.774-8.343C5.936 2.5 2 6.243 2 10.843s3.936 8.343 8.774 8.343a9.028 9.028 0 0 0 5.042-1.526l4.862 4.624c.152.144.35.216.548.216a.793.793 0 0 0 .548-.216.711.711 0 0 0 0-1.04Z"
      clip-rule="evenodd"
    />
  </Icon>
);

export default SearchIcon;
