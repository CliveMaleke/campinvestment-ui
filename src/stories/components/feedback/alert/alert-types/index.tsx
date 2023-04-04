// Vendors
import React, { FC } from 'react';

// Components
import Alert from '@components/feedback/Alert';
import { AlertProps } from '@material-ui/lab/Alert';
import Typography from '@components/data-display/Typography';
import CloseIcon from '@components/data-display/Icon/CloseIcon';
import AlertTitle from '@components/lab/AlertTitle';
import CheckFilledIcon from '@components/data-display/Icon/CheckFilledIcon';
import AlertIcon from '@components/data-display/Icon/AlertIcon';
import CloseFilledIcon from '@components/data-display/Icon/CloseFilledIcon';
import InfoIcon from '@components/data-display/Icon/InfoIcon';
import Button from '@components/inputs/Button';

export const AlertDefault: FC<AlertProps> = (props) => (
  <Alert className="MuiAlert-alertDefault" icon={<InfoIcon />} {...props}>
    This is a default alert — check it out!
  </Alert>
);

export const AlertToastGeneral: FC<AlertProps> = (props) => (
  <Alert className="MuiAlert-toast MuiAlert-standardGeneral" {...props}>
    This is a general alert — check it out!
  </Alert>
);

export const AlertToastError: FC<AlertProps> = (props) => (
  <Alert
    className="MuiAlert-toast"
    severity="error"
    icon={<CloseFilledIcon />}
    {...props}
  >
    This is an error alert — check it out!
  </Alert>
);

export const AlertToastWarning: FC<AlertProps> = (props) => (
  <Alert
    className="MuiAlert-toast"
    severity="warning"
    icon={<AlertIcon />}
    {...props}
  >
    This is a warning alert — check it out!
  </Alert>
);

export const AlertToastInfo: FC<AlertProps> = (props) => (
  <Alert
    className="MuiAlert-toast"
    severity="info"
    icon={<InfoIcon />}
    {...props}
  >
    This is an info alert — check it out!
  </Alert>
);

export const AlertToastSuccess: FC<AlertProps> = (props) => (
  <Alert
    className="MuiAlert-toast"
    severity="success"
    icon={<CheckFilledIcon />}
    {...props}
  >
    This is a success alert — check it out!
  </Alert>
);

export const AlertSnackbarGeneral: FC<AlertProps> = (props) => (
  <Alert
    className="MuiAlert-snackbar MuiAlert-standardGeneral"
    action={
      <span
        aria-label="close"
        color="inherit"
        onClick={() => alert('this will close the snackbar')}
      >
        <CloseIcon fontSize="small" />
      </span>
    }
    icon={false}
    {...props}
  >
    <AlertTitle>This is a regular snackbar message</AlertTitle>
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

export const AlertSnackbarError: FC<AlertProps> = (props) => (
  <Alert
    className="MuiAlert-snackbar"
    severity="error"
    action={
      <span
        aria-label="close"
        color="inherit"
        onClick={() => alert('this will close the snackbar')}
      >
        <CloseIcon fontSize="small" />
      </span>
    }
    icon={<CloseFilledIcon />}
    {...props}
  >
    <AlertTitle>This is a error snackbar message</AlertTitle>
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

export const AlertSnackbarWarning: FC<AlertProps> = (props) => (
  <Alert
    className="MuiAlert-snackbar"
    severity="warning"
    action={
      <span
        aria-label="close"
        color="inherit"
        onClick={() => alert('this will close the snackbar')}
      >
        <CloseIcon fontSize="small" />
      </span>
    }
    icon={<AlertIcon />}
    {...props}
  >
    <AlertTitle>This is a warning snackbar message</AlertTitle>
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

export const AlertSnackbarInfo: FC<AlertProps> = (props) => (
  <Alert
    className="MuiAlert-snackbar"
    severity="info"
    action={
      <span
        aria-label="close"
        color="inherit"
        onClick={() => alert('this will close the snackbar')}
      >
        <CloseIcon fontSize="small" />
      </span>
    }
    icon={<InfoIcon />}
    {...props}
  >
    <AlertTitle>This is a info snackbar message</AlertTitle>
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

export const AlertSnackbarSuccess: FC<AlertProps> = (props) => (
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

const AlertTypes = () => (
  <>
    <Typography variant="h5" type="semibold">
      Alert
    </Typography>
    <AlertDefault />

    <Typography variant="h5" type="semibold">
      Toast
    </Typography>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <div>
        <AlertToastGeneral />
      </div>
      <div>
        <AlertToastError />
      </div>
      <div>
        <AlertToastWarning />
      </div>
      <div>
        <AlertToastInfo />
      </div>
      <div>
        <AlertToastSuccess />
      </div>
    </div>

    <Typography variant="h5" type="semibold">
      Snackbar
    </Typography>
    <AlertSnackbarGeneral />
    <AlertSnackbarError />
    <AlertSnackbarWarning />
    <AlertSnackbarInfo />
    <AlertSnackbarSuccess />
  </>
);

export default AlertTypes;
