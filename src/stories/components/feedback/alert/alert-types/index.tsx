// Vendors
import React from 'react';

// Components
import Alert from '@components/feedback/Alert';

export const AlertGeneral = () => (
  <Alert className="MuiAlert-standardGeneral">
    This is a general alert — check it out!
  </Alert>
);

export const AlertError = () => (
  <Alert severity="error">This is an error alert — check it out!</Alert>
);

export const AlertWarning = () => (
  <Alert severity="warning">This is a warning alert — check it out!</Alert>
);

export const AlertInfo = () => (
  <Alert severity="info">This is an info alert — check it out!</Alert>
);

export const AlertSuccess = () => (
  <Alert severity="success">This is a success alert — check it out!</Alert>
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
