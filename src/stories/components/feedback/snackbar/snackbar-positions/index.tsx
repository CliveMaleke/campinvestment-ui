// Vendors
import React, { FC } from 'react';

// Components
import Snackbar from '@components/feedback/Snackbar';
import Button from '@material-ui/core/Button';
import Alert from '@components/feedback/Alert';
import CloseIcon from '@components/data-display/Icon/CloseIcon';
import { SnackbarProps } from '@material-ui/core/Snackbar';

export const SnackbarPositionTopCenter: FC<SnackbarProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Top-Center
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={() => setOpen(false)}
        message=""
        key="top-center"
        {...props}
      >
        <Alert
          severity="info"
          className="MuiAlert-standardGeneral MuiAlert-snackbar"
          action={
            <span
              aria-label="close"
              color="inherit"
              onClick={() => setOpen(false)}
            >
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
    </>
  );
};

export const SnackbarPositionTopRight: FC<SnackbarProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Top-Right
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        onClose={() => setOpen(false)}
        message=""
        key="top-right"
        {...props}
      >
        <Alert
          severity="info"
          className="MuiAlert-standardGeneral MuiAlert-snackbar"
          action={
            <span
              aria-label="close"
              color="inherit"
              onClick={() => setOpen(false)}
            >
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
    </>
  );
};

export const SnackbarPositionBottomRight: FC<SnackbarProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Bottom-Right
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        onClose={() => setOpen(false)}
        message=""
        key="bottom-right"
        {...props}
      >
        <Alert
          severity="info"
          className="MuiAlert-standardGeneral MuiAlert-snackbar"
          action={
            <span
              aria-label="close"
              color="inherit"
              onClick={() => setOpen(false)}
            >
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
    </>
  );
};

export const SnackbarPositionBottomCenter: FC<SnackbarProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Bottom-Center
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        onClose={() => setOpen(false)}
        message=""
        key="bottom-center"
        {...props}
      >
        <Alert
          severity="info"
          className="MuiAlert-standardGeneral MuiAlert-snackbar"
          action={
            <span
              aria-label="close"
              color="inherit"
              onClick={() => setOpen(false)}
            >
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
    </>
  );
};

export const SnackbarPositionBottomLeft: FC<SnackbarProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Bottom-Left
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        onClose={() => setOpen(false)}
        message=""
        key="bottom-left"
        {...props}
      >
        <Alert
          severity="info"
          className="MuiAlert-standardGeneral MuiAlert-snackbar"
          action={
            <span
              aria-label="close"
              color="inherit"
              onClick={() => setOpen(false)}
            >
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
    </>
  );
};

export const SnackbarPositionTopLeft: FC<SnackbarProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Top-Left
      </Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={open}
        onClose={() => setOpen(false)}
        message=""
        key="top-left"
        {...props}
      >
        <Alert
          severity="info"
          className="MuiAlert-standardGeneral MuiAlert-snackbar"
          action={
            <span
              aria-label="close"
              color="inherit"
              onClick={() => setOpen(false)}
            >
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
    </>
  );
};

const SnackbarPositions = () => (
  <>
    <SnackbarPositionTopCenter />
    <SnackbarPositionTopRight />
    <SnackbarPositionBottomRight />
    <SnackbarPositionBottomCenter />
    <SnackbarPositionBottomLeft />
    <SnackbarPositionTopLeft />
  </>
);

export default SnackbarPositions;
