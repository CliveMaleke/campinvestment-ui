// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import RadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup';

import theme from '../../theme';

export default (props: RadioGroupProps) => {
  return (
    <ThemeProvider theme={theme}>
      <RadioGroup {...props} />
    </ThemeProvider>
  );
};
