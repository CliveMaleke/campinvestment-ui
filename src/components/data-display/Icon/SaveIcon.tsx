// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const SaveIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="M16.634 2.5c.198 0 .385.081.517.214l4.635 4.635a.73.73 0 0 1 .214.517V21.77a.73.73 0 0 1-.731.731H2.73a.731.731 0 0 1-.73-.732V3.23c0-.403.328-.731.731-.731h13.903Zm1.008 12.38H6.358v6.156h11.284V14.88ZM6.634 3.964h-3.17v17.072h1.43V14.15c0-.404.327-.732.732-.732h12.748c.405 0 .732.328.732.732v6.888h1.43V8.168L17.366 5v4.025a.732.732 0 0 1-.732.732H7.366a.731.731 0 0 1-.732-.732V3.964Zm9.268 0H8.098v4.329h7.804v-4.33Zm-1.812.685c.405 0 .732.327.732.732v1.494a.732.732 0 1 1-1.463 0V5.381a.73.73 0 0 1 .731-.732Z" />
  </Icon>
);

export default SaveIcon;
