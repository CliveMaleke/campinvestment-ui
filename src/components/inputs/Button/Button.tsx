// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import theme from '../../theme';

export default (props: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Button color='primary' {...props} />
    </ThemeProvider>
  );
};
