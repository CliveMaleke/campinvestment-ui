// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import Paper from '@components/surfaces/Paper';

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

const PaperVariants: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" />
      <Paper variant="outlined" square />
    </div>
  );
};

export default PaperVariants;
