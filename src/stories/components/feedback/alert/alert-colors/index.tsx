// Vendors
import React from 'react';

// Components
import Alert from '@components/feedback/Alert';

export const AlertColorGeneral = () => (
  <Alert className="MuiAlert-standardGeneral" color="error">
    This is a general alert — check it out!
  </Alert>
);

export const AlertColorError = () => (
  <Alert severity="error" color="error">
    This is a error alert — check it out!
  </Alert>
);

export const AlertColorWarning = () => (
  <Alert severity="warning" color="warning">
    This is a warning alert — check it out!
  </Alert>
);

export const AlertColorInfo = () => (
  <Alert severity="info" color="info">
    This is a info alert — check it out!
  </Alert>
);

export const AlertColorSuccess = () => (
  <Alert severity="success" color="success">
    This is a success alert — check it out!
  </Alert>
);

const AlertColors = () => (
  <>
    <AlertColorGeneral />
    <AlertColorError />
    <AlertColorWarning />
    <AlertColorInfo />
    <AlertColorSuccess />
  </>
);

export default AlertColors;
