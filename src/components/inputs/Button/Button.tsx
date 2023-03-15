// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';
import theme from '../../theme';

export interface IButtonProps extends ButtonProps {}

export default (props: IButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Button color="primary" disableElevation {...props} />
    </ThemeProvider>
  );
};
