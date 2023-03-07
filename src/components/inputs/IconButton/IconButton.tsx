// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import theme from '../../theme';

export default (props: IconButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <IconButton color='primary' {...props} />
    </ThemeProvider>
  );
};
