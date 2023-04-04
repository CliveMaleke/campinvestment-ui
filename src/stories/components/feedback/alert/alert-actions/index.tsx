// Vendors
import React, { FC } from 'react';

// Components
import Alert from '@components/feedback/Alert';
import { AlertProps } from '@material-ui/lab/Alert';
import CheckFilledIcon from '@components/data-display/Icon/CheckFilledIcon';
import CloseIcon from '@components/data-display/Icon/CloseIcon';
import AlertTitle from '@components/feedback/AlertTitle';
import Typography from '@components/data-display/Typography';
import Button from '@components/inputs/Button';

export const AlertToast: FC<AlertProps> = (props) => (
  <Alert
    className="MuiAlert-toast"
    severity="success"
    icon={<CheckFilledIcon />}
    {...props}
  >
    This is a success alert — check it out!
  </Alert>
);

export const AlertSnackbarDescription: FC<AlertProps> = (props) => (
  <Alert
    className="MuiAlert-snackbar"
    severity="success"
    action={
      <span
        aria-label="close"
        color="inherit"
        onClick={() => alert('this will close the snackbar')}
      >
        <CloseIcon fontSize="small" />
      </span>
    }
    icon={<CheckFilledIcon />}
    {...props}
  >
    <AlertTitle>This is a success snackbar message</AlertTitle>
    <p className="MuiAlert-description">Description</p>
  </Alert>
);

export const AlertSnackbarOneButton: FC<AlertProps> = (props) => (
  <Alert
    className="MuiAlert-snackbar"
    severity="success"
    action={
      <span
        aria-label="close"
        color="inherit"
        onClick={() => alert('this will close the snackbar')}
      >
        <CloseIcon fontSize="small" />
      </span>
    }
    icon={<CheckFilledIcon />}
    {...props}
  >
    <AlertTitle>This is a success snackbar message</AlertTitle>
    <p className="MuiAlert-description">Description</p>
    <div className="MuiButtonWrapper-root">
      <Button
        variant="text"
        onClick={() => {
          window.open(
            'https://develop--63b2d35155965648145b7f9e.chromatic.com/?path=/docs/components-data-display-typography-example--button',
            '_blank',
          );
        }}
      >
        Button 1
      </Button>
    </div>
  </Alert>
);

export const AlertSnackbarTwoButton: FC<AlertProps> = (props) => (
  <Alert
    className="MuiAlert-snackbar"
    severity="success"
    action={
      <span
        aria-label="close"
        color="inherit"
        onClick={() => alert('this will close the snackbar')}
      >
        <CloseIcon fontSize="small" />
      </span>
    }
    icon={<CheckFilledIcon />}
    {...props}
  >
    <AlertTitle>This is a success snackbar message</AlertTitle>
    <p className="MuiAlert-description">Description</p>
    <div className="MuiButtonWrapper-root">
      <Button
        variant="text"
        onClick={() => {
          window.open(
            'https://develop--63b2d35155965648145b7f9e.chromatic.com/?path=/docs/components-data-display-typography-example--button',
            '_blank',
          );
        }}
      >
        Button 1
      </Button>
      <Button
        variant="text"
        onClick={() => {
          window.open(
            'https://develop--63b2d35155965648145b7f9e.chromatic.com/?path=/docs/components-data-display-typography-example--button',
            '_blank',
          );
        }}
      >
        Button 2
      </Button>
    </div>
  </Alert>
);

const AlertActions = () => (
  <>
    <Typography variant="h5" type="semibold">
      Toast
    </Typography>
    <AlertToast />
    <Typography variant="h5" type="semibold">
      Snackbar
    </Typography>
    <AlertSnackbarDescription />
    <AlertSnackbarOneButton />
    <AlertSnackbarTwoButton />
  </>
);

export default AlertActions;
