// Vendors
import React, { FC } from 'react';

// Components
import Alert from '@components/feedback/Alert';
import { AlertProps } from '@material-ui/lab/Alert';
import CheckFilledIcon from '@components/data-display/Icon/CheckFilledIcon';
import AlertIcon from '@components/data-display/Icon/AlertIcon';
import CloseFilledIcon from '@components/data-display/Icon/CloseFilledIcon';
import InfoIcon from '@components/data-display/Icon/InfoIcon';

export const AlertColorGeneral = (props: AlertProps) => (
  <Alert className="MuiAlert-standardGeneral" color="error" {...props}>
    This is a general alert — check it out!
  </Alert>
);

export const AlertColorError = (props: AlertProps) => (
  <Alert severity="error" color="error" icon={<CloseFilledIcon />} {...props}>
    This is a error alert — check it out!
  </Alert>
);

export const AlertColorWarning = (props: AlertProps) => (
  <Alert severity="warning" color="warning" icon={<AlertIcon />} {...props}>
    This is a warning alert — check it out!
  </Alert>
);

export const AlertColorInfo: FC<AlertProps> = (props) => (
  <Alert severity="info" color="info" icon={<InfoIcon />} {...props}>
    This is a info alert — check it out!
  </Alert>
);

export const AlertColorSuccess: FC<AlertProps> = (props) => (
  <Alert
    severity="success"
    color="success"
    icon={<CheckFilledIcon />}
    {...props}
  >
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
