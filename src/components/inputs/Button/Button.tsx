// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import theme from '../../theme';
import CssBaseline from '@material-ui/core/CssBaseline';

export interface IButtonProps extends ButtonProps {}

export default (props: IButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button color="primary" disableElevation {...props} />
    </ThemeProvider>
  );
};
