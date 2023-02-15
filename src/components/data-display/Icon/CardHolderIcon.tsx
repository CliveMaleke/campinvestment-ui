// Vendors
import React, { FC } from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';

import Icon from './index';

const CardHolderIcon: FC<SvgIconProps> = (props) => (
  <Icon {...props}>
    <path d="m17.25,0H2.25C1.07,0,0,.89,0,2.12v9.62C0,12.98,1.07,13.88,2.25,13.88h15c1.18,0,2.25-.89,2.25-2.12V2.12c0-1.23-1.07-2.12-2.25-2.12ZM2.25,1.5h15c.48,0,.75.34.75.62v1.75h-4.58c-.35,0-.68.12-.95.34-.26.22-.44.52-.51.86h0c-.11.51-.39.96-.79,1.29s-.9.5-1.42.5-1.02-.18-1.42-.5-.68-.78-.79-1.29h0c-.07-.34-.25-.64-.51-.86-.27-.22-.6-.34-.95-.34h0s-4.58,0-4.58,0v-1.75c0-.28.27-.62.75-.62Zm15,10.88H2.25c-.48,0-.75-.34-.75-.62v-6.38h4.57s.73-.15.73-.15h0s-.73.16-.73.16c.18.84.64,1.6,1.31,2.14.67.54,1.5.84,2.37.84s1.7-.3,2.37-.84c.67-.54,1.13-1.3,1.31-2.14l-.74-.16h0s.73.16.73.16h0s4.57,0,4.57,0v6.38c0,.28-.27.62-.75.62Z" />
  </Icon>
);

export default CardHolderIcon;
