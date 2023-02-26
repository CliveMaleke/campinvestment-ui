// Vendors
import React from 'react';

// Components
import Alert from '@components/feedback/Alert';

export const AlertOutlinedGeneral = () => (
  <Alert variant="outlined" className="MuiAlert-standardGeneral">
    This is a general alert — check it out!
  </Alert>
);

export const AlertOutlinedError = () => (
  <Alert variant="outlined" severity="error">
    This is an error alert — check it out!
  </Alert>
);

export const AlertOutlinedWarning = () => (
  <Alert variant="outlined" severity="warning">
    This is a warning alert — check it out!
  </Alert>
);

export const AlertOutlinedInfo = () => (
  <Alert variant="outlined" severity="info">
    This is an info alert — check it out!
  </Alert>
);

export const AlertOutlinedSuccess = () => (
  <Alert variant="outlined" severity="success">
    This is a success alert — check it out!
  </Alert>
);

const AlertVariantsOutlined = () => (
  <>
    <AlertOutlinedGeneral />
    <AlertOutlinedError />
    <AlertOutlinedWarning />
    <AlertOutlinedInfo />
    <AlertOutlinedSuccess />
  </>
);

export default AlertVariantsOutlined;
