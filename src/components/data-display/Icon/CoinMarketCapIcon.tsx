// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CoinMarketCapIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M19.385 14.452a1.086 1.086 0 0 1-1.09.072c-.402-.225-.62-.751-.62-1.464v-2.195c0-1.054-.423-1.802-1.133-2.007-1.195-.344-2.088 1.1-2.431 1.642l-2.116 3.375V9.756c-.024-.949-.336-1.519-.932-1.69-.391-.112-.98-.068-1.551.792L4.78 16.343a8.095 8.095 0 0 1-.952-3.843c0-4.512 3.657-8.18 8.166-8.18s8.176 3.668 8.176 8.18v.048c.046.87-.242 1.566-.786 1.904ZM22 12.5v-.044C21.962 6.96 17.487 2.5 11.995 2.5 6.502 2.5 2 6.985 2 12.5s4.481 10 9.995 10a9.96 9.96 0 0 0 6.795-2.669.908.908 0 0 0-1.22-1.348l-.003.003c-3.238 3.028-8.353 2.895-11.425-.297a7.29 7.29 0 0 1-.222-.238l4.257-6.748v3.113c0 1.495.588 1.98 1.08 2.123.492.143 1.25.044 2.04-1.222l2.355-3.755c.073-.119.142-.225.208-.313v1.907c0 1.4.568 2.516 1.569 3.069a2.913 2.913 0 0 0 2.93-.116c1.097-.704 1.696-1.977 1.634-3.509H22Z" />
  </Icon>
);

export default CoinMarketCapIcon;