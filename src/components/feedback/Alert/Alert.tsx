// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Alert, { AlertProps } from '@material-ui/lab/Alert';

import theme from '../../theme';

export default (props: AlertProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Alert {...props} />
    </ThemeProvider>
  );
};
