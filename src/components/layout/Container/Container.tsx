// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Container, { ContainerProps } from '@material-ui/core/Container';

import theme from '../../theme';

export default (props: ContainerProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Container {...props} />
    </ThemeProvider>
  );
};
