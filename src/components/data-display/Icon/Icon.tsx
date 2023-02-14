// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

import theme from '../../theme';

export default (props: SvgIconProps) => {
  return (
    <ThemeProvider theme={theme}>
      <SvgIcon {...props} />
    </ThemeProvider>
  );
};
