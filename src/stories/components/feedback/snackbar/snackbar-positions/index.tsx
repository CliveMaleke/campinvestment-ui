// Vendors
import React from 'react';

// Components
import Snackbar from '@components/feedback/Snackbar';
import Button from '@material-ui/core/Button';
import Alert from '@components/feedback/Alert';
import CloseIcon from '@components/data-display/Icon/CloseIcon';

export const SnackbarPositionTopCenter = () => {
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
      >
        <Alert
          severity="info"
          className="MuiAlert-standardGeneral"
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

export const SnackbarPositionTopRight = () => {
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
      >
        <Alert
          severity="info"
          className="MuiAlert-standardGeneral"
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

export const SnackbarPositionBottomRight = () => {
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
      >
        <Alert
          severity="info"
          className="MuiAlert-standardGeneral"
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

export const SnackbarPositionBottomCenter = () => {
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
      >
        <Alert
          severity="info"
          className="MuiAlert-standardGeneral"
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

export const SnackbarPositionBottomLeft = () => {
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
      >
        <Alert
          severity="info"
          className="MuiAlert-standardGeneral"
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

export const SnackbarPositionTopLeft = () => {
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
      >
        <Alert
          severity="info"
          className="MuiAlert-standardGeneral"
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
