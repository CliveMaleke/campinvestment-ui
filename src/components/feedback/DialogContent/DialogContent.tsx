// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import DialogContent, { DialogProps } from '@material-ui/core/Dialog';

import theme from '../../theme';

export default (props: DialogProps) => {
  return (
    <ThemeProvider theme={theme}>
      <DialogContent {...props} />
    </ThemeProvider>
  );
};
