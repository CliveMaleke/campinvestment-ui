// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CarretSortIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M5.151 14.405c.729.892 1.452 1.783 2.18 2.675 1.16 1.422 2.315 2.843 3.475 4.265.27.326.533.652.802.985.184.227.61.227.79 0 .728-.892 1.451-1.783 2.18-2.675 1.16-1.422 2.314-2.843 3.475-4.265.269-.326.532-.652.801-.985.303-.372.118-.996-.398-.996H5.555c-.723 0-.6.757-.404.996Zm0-3.81 6.457-7.925c.184-.227.61-.227.79 0l6.456 7.925c.303.372.118.996-.398.996H5.555c-.723 0-.6-.757-.404-.996Z" />
  </Icon>
);

export default CarretSortIcon;
