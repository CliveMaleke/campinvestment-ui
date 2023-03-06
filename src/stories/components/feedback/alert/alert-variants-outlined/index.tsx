// Vendors
import React, { FC } from 'react';

// Components
import Alert from '@components/feedback/Alert';
import { AlertProps } from '@material-ui/lab/Alert';

export const AlertOutlinedGeneral: FC<AlertProps> = (props) => (
  <Alert className="MuiAlert-standardOutlinedGeneral" {...props}>
    This is a general alert — check it out!
  </Alert>
);

export const AlertOutlinedError: FC<AlertProps> = (props) => (
  <Alert variant="outlined" severity="error" {...props}>
    This is an error alert — check it out!
  </Alert>
);

export const AlertOutlinedWarning: FC<AlertProps> = (props) => (
  <Alert variant="outlined" severity="warning" {...props}>
    This is a warning alert — check it out!
  </Alert>
);

export const AlertOutlinedInfo: FC<AlertProps> = (props) => (
  <Alert variant="outlined" severity="info" {...props}>
    This is an info alert — check it out!
  </Alert>
);

export const AlertOutlinedSuccess: FC<AlertProps> = (props) => (
  <Alert variant="outlined" severity="success" {...props}>
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
