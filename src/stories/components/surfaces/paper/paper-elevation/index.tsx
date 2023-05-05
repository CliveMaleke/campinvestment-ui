// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import Paper from '@components/surfaces/Paper';
import Typography from '@components/data-display/Typography';

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginRight: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

const PaperElevation: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0}>
        <Typography variant="caption" captionScale="small">
          Elevation 0
        </Typography>
      </Paper>
      <Paper>
        <Typography variant="caption" captionScale="small">
          Without Elevation
        </Typography>
      </Paper>
      <Paper elevation={3}>
        <Typography variant="caption" captionScale="small">
          Elevation 3
        </Typography>
      </Paper>
    </div>
  );
};

export default PaperElevation;
