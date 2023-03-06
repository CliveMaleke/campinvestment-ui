// Vendors
import React, { FC } from 'react';

// Components
import Alert from '@components/feedback/Alert';
import { AlertProps } from '@material-ui/lab/Alert';

export const AlertGeneral: FC<AlertProps> = (props) => (
  <Alert className="MuiAlert-standardGeneral" {...props}>
    This is a general alert — check it out!
  </Alert>
);

export const AlertError: FC<AlertProps> = (props) => (
  <Alert severity="error" {...props}>
    This is an error alert — check it out!
  </Alert>
);

export const AlertWarning: FC<AlertProps> = (props) => (
  <Alert severity="warning" {...props}>
    This is a warning alert — check it out!
  </Alert>
);

export const AlertInfo: FC<AlertProps> = (props) => (
  <Alert severity="info" {...props}>
    This is an info alert — check it out!
  </Alert>
);

export const AlertSuccess: FC<AlertProps> = (props) => (
  <Alert severity="success" {...props}>
    This is a success alert — check it out!
  </Alert>
);

const AlertTypes = () => (
  <>
    <AlertGeneral />
    <AlertError />
    <AlertWarning />
    <AlertInfo />
    <AlertSuccess />
  </>
);

export default AlertTypes;
