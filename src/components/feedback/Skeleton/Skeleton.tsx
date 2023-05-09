// Vendors
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Skeleton, { SkeletonProps } from '@material-ui/lab/Skeleton';

import theme from '../../theme';

export default (props: SkeletonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Skeleton {...props} />
    </ThemeProvider>
  );
};
