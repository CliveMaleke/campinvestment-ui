// Vendors
import React, { FC } from 'react';

// Components
import Alert from '@components/feedback/Alert';
import { AlertProps } from '@material-ui/lab/Alert';

export const AlertFilledGeneral: FC<AlertProps> = (props) => (
  <Alert className="MuiAlert-standardFilledGeneral" {...props}>
    This is a general alert — check it out!
  </Alert>
);

export const AlertFilledError: FC<AlertProps> = (props) => (
  <Alert variant="filled" severity="error" {...props}>
    This is an error alert — check it out!
  </Alert>
);

export const AlertFilledWarning: FC<AlertProps> = (props) => (
  <Alert variant="filled" severity="warning" {...props}>
    This is a warning alert — check it out!
  </Alert>
);

export const AlertFilledInfo: FC<AlertProps> = (props) => (
  <Alert variant="filled" severity="info" {...props}>
    This is an info alert — check it out!
  </Alert>
);

export const AlertFilledSuccess: FC<AlertProps> = (props) => (
  <Alert variant="filled" severity="success" {...props}>
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
