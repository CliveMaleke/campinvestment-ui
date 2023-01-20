// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import FormLabel, { FormLabelProps } from '@material-ui/core/FormLabel';

import theme from '../../theme';

export default (props: FormLabelProps) => {
  return (
    <ThemeProvider theme={theme}>
      <FormLabel {...props} />
    </ThemeProvider>
  );
};
