// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Radio, { RadioProps } from '@material-ui/core/Radio';

import theme from '../../theme';

export default (props: RadioProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Radio {...props} />
    </ThemeProvider>
  );
};
