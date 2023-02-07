// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Hidden, { HiddenProps } from '@material-ui/core/Hidden';

import theme from '../../theme';

interface IHiddenProps extends HiddenProps {
  children: React.ReactNode;
}

export default (props: IHiddenProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Hidden {...props}>{props.children}</Hidden>
    </ThemeProvider>
  );
};
