// Vendors
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import Box from '@components/layout/Box';
import Grid from '@components/layout/Grid';

interface DefaultProps {
  bgcolor: string;
  p: number;
  textAlign: string;
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const defaultProps: DefaultProps = {
  bgcolor: '#cfe8fc',
  p: 2,
  textAlign: 'center',
};

const GridNested: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Box {...defaultProps}>item</Box>
          </Grid>
          <Grid item xs={4}>
            <Box {...defaultProps}>item</Box>
          </Grid>
          <Grid item xs={4}>
            <Box {...defaultProps}>item</Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridNested;