// Vendors
import React from 'react';

// Components
import Alert from '@components/feedback/Alert';

export const AlertFilledGeneral = () => (
  <Alert variant="filled" className="MuiAlert-standardGeneral">
    This is a general alert — check it out!
  </Alert>
);

export const AlertFilledError = () => (
  <Alert variant="filled" severity="error">
    This is an error alert — check it out!
  </Alert>
);

export const AlertFilledWarning = () => (
  <Alert variant="filled" severity="warning">
    This is a warning alert — check it out!
  </Alert>
);

export const AlertFilledInfo = () => (
  <Alert variant="filled" severity="info">
    This is an info alert — check it out!
  </Alert>
);

export const AlertFilledSuccess = () => (
  <Alert variant="filled" severity="success">
    This is a success alert — check it out!
  </Alert>
);

const AlertVariantsFilled = () => (
  <>
    <AlertFilledGeneral />
    <AlertFilledError />
    <AlertFilledWarning />
    <AlertFilledInfo />
    <AlertFilledSuccess />
  </>
);

export default AlertVariantsFilled;
