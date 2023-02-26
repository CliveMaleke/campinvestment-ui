// Vendors
import React from 'react';

// Components
import Alert from '@components/feedback/Alert';
import AlertTitle from '@components/lab/AlertTitle';

export const AlertDescriptionGeneral = () => (
  <Alert className="MuiAlert-standardGeneral">
    <AlertTitle>General</AlertTitle>
    This is an general alert — <strong>check it out!</strong>
  </Alert>
);

export const AlertDescriptionError = () => (
  <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    This is an error alert — check it out!
  </Alert>
);

export const AlertDescriptionWarning = () => (
  <Alert severity="warning">
    <AlertTitle>Warning</AlertTitle>
    This is a warning alert — check it out!
  </Alert>
);

export const AlertDescriptionInfo = () => (
  <Alert severity="info">
    <AlertTitle>Info</AlertTitle>
    This is an info alert — check it out!
  </Alert>
);

export const AlertDescriptionSuccess = () => (
  <Alert severity="success">
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
