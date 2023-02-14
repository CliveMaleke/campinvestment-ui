// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import DialogTitle, { DialogProps } from '@material-ui/core/Dialog';

import theme from '../../theme';

export default (props: DialogProps) => {
  return (
    <ThemeProvider theme={theme}>
      <DialogTitle {...props} />
    </ThemeProvider>
  );
};
