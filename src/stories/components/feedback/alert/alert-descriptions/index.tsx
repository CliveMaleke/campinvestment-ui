// Vendors
import React, { FC } from 'react';

// Components
import Alert from '@components/feedback/Alert';
import AlertTitle from '@components/lab/AlertTitle';
import { AlertProps } from '@material-ui/lab/Alert';

export const AlertDescriptionGeneral: FC<AlertProps> = (props) => (
  <Alert className="MuiAlert-standardGeneral" {...props}>
    <AlertTitle>General</AlertTitle>
    This is an general alert — <strong>check it out!</strong>
  </Alert>
);

export const AlertDescriptionError: FC<AlertProps> = (props) => (
  <Alert severity="error" {...props}>
    <AlertTitle>Error</AlertTitle>
    This is an error alert — check it out!
  </Alert>
);

export const AlertDescriptionWarning: FC<AlertProps> = (props) => (
  <Alert severity="warning" {...props}>
    <AlertTitle>Warning</AlertTitle>
    This is a warning alert — check it out!
  </Alert>
);

export const AlertDescriptionInfo: FC<AlertProps> = (props) => (
  <Alert severity="info" {...props}>
    <AlertTitle>Info</AlertTitle>
    This is an info alert — check it out!
  </Alert>
);

export const AlertDescriptionSuccess: FC<AlertProps> = (props) => (
  <Alert severity="success" {...props}>
    <AlertTitle>success</AlertTitle>
    This is a success alert — check it out!
  </Alert>
);

const AlertDescriptions = () => (
  <>
    <AlertDescriptionGeneral />
    <AlertDescriptionError />
    <AlertDescriptionWarning />
    <AlertDescriptionInfo />
    <AlertDescriptionSuccess />
  </>
);

export default AlertDescriptions;
