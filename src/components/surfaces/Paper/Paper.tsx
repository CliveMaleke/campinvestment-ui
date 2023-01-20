// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Paper, { PaperProps } from '@material-ui/core/Paper';

import theme from '../../theme';

export default (props: PaperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Paper {...props} />
    </ThemeProvider>
  );
};
