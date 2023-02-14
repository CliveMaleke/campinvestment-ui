// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

import theme from '../../theme';

export default (props: TextFieldProps) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField {...props} />
    </ThemeProvider>
  );
};
