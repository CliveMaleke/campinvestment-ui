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

const GridAutoLayout: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Box {...defaultProps}>xs</Box>
        </Grid>
        <Grid item xs>
          <Box {...defaultProps}>xs</Box>
        </Grid>
        <Grid item xs>
          <Box {...defaultProps}>xs</Box>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Box {...defaultProps}>xs</Box>
        </Grid>
        <Grid item xs={6}>
          <Box {...defaultProps}>xs=6</Box>
        </Grid>
        <Grid item xs>
          <Box {...defaultProps}>xs</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default GridAutoLayout;
