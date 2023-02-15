// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';

import theme from '../../theme';

export default (props: DialogProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Dialog {...props}>{props.children}</Dialog>
    </ThemeProvider>
  );
};
