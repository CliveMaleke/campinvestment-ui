// Vendors
import React, { FC } from 'react';

// Components
import Snackbar from '@components/feedback/Snackbar';
import Alert from '@components/feedback/Alert';
import AlertTitle from '@components/lab/AlertTitle';
import CloseIcon from '@components/data-display/Icon/CloseIcon';
import CheckFilledIcon from '@components/data-display/Icon/CheckFilledIcon';
import AlertIcon from '@components/data-display/Icon/AlertIcon';
import CloseFilledIcon from '@components/data-display/Icon/CloseFilledIcon';
import InfoIcon from '@components/data-display/Icon/InfoIcon';
import { SnackbarProps } from '@material-ui/core/Snackbar';
import Button from '@components/inputs/Button';

export const SnackbarCustomizedGeneral: FC<SnackbarProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Open general snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        {...props}
      >
        <Alert
          onClose={handleClose}
          className="MuiAlert-snackbar MuiAlert-standardGeneral"
          action={
            <span aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </span>
          }
        >
          <AlertTitle className="MuiAlert-snackbarTitle">
            This is a general message!
          </AlertTitle>
          Description
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

export const SnackbarCustomizedError: FC<SnackbarProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Open error snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        {...props}
      >
        <Alert
          className="MuiAlert-snackbar"
          onClose={handleClose}
          severity="error"
          icon={<CloseFilledIcon fontSize="small" />}
          action={
            <span aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </span>
          }
        >
          <AlertTitle className="MuiAlert-snackbarTitle">
            This is a error message!
          </AlertTitle>
          Description
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

export const SnackbarCustomizedWarning: FC<SnackbarProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Open warning snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        {...props}
      >
        <Alert
          className="MuiAlert-snackbar"
          onClose={handleClose}
          severity="warning"
          icon={<AlertIcon fontSize="small" />}
          action={
            <span aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </span>
          }
        >
          <AlertTitle className="MuiAlert-snackbarTitle">
            This is a warning message!
          </AlertTitle>
          Description
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

export const SnackbarCustomizedInfo: FC<SnackbarProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Open info snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        {...props}
      >
        <Alert
          className="MuiAlert-snackbar"
          onClose={handleClose}
          severity="info"
          icon={<InfoIcon fontSize="small" />}
          action={
            <span aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </span>
          }
        >
          <AlertTitle className="MuiAlert-snackbarTitle">
            This is a info message!
          </AlertTitle>
          Description
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

export const SnackbarCustomizedSuccess: FC<SnackbarProps> = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        {...props}
      >
        <Alert
          className="MuiAlert-snackbar"
          onClose={handleClose}
          severity="success"
          icon={<CheckFilledIcon fontSize="small" />}
          action={
            <span aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </span>
          }
        >
          <AlertTitle className="MuiAlert-snackbarTitle">
            This is a success message!
          </AlertTitle>
          Description
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

const SnackbarCustomizations = () => (
  <>
    <SnackbarCustomizedGeneral />
    <SnackbarCustomizedError />
    <SnackbarCustomizedWarning />
    <SnackbarCustomizedInfo />
    <SnackbarCustomizedSuccess />
  </>
);

export default SnackbarCustomizations;
