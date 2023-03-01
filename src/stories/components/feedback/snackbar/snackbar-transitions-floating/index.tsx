// Vendors
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

// Components
import Snackbar from '@components/feedback/Snackbar';
import Button from '@material-ui/core/Button';
import Alert from '@components/feedback/Alert';
import CloseIcon from '@components/data-display/Icon/CloseIcon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    '@global': {
      body: {
        backgroundColor: theme.palette.background.paper,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    fab: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    snackbar: {
      [theme.breakpoints.down('xs')]: {
        bottom: 90,
      },
    },
  }),
);

export const SnackbarTransitionFloating = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              App Bar
            </Typography>
          </Toolbar>
        </AppBar>
        <Fab color="secondary" className={classes.fab}>
          +
        </Fab>
        <Snackbar
          open
          autoHideDuration={6000}
          message="Archived"
          action={<button color="inherit">Undo</button>}
          className={classes.snackbar}
        >
          <Alert
            severity="info"
            className="MuiAlert-standardGeneral"
            action={
              <span aria-label="close" color="inherit" onClick={() => {}}>
                <CloseIcon fontSize="small" />
              </span>
            }
          >
            I love snacks!
            <div className="MuiButtonWrapper-root">
              <Button variant="text" onClick={() => {}}>
                Button 1
              </Button>
              <Button variant="text" onClick={() => {}}>
                Button 2
              </Button>
            </div>
          </Alert>
        </Snackbar>
      </div>
    </React.Fragment>
  );
};

const SnackbarTransitionsFloating = () => (
  <>
    <SnackbarTransitionFloating />
  </>
);

export default SnackbarTransitionsFloating;