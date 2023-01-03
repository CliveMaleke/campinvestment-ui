// Vendors
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

// Configs
import theme from '../../variables/theme';

export default (props: any) => {
    return (
      <ThemeProvider theme={theme}>
        <Button {...props} />
      </ThemeProvider>
    );
  };