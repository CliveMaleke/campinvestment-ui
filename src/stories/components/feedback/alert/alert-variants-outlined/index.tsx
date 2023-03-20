// Vendors
import React, { FC } from 'react';

// Components
import Alert from '@components/feedback/Alert';
import { AlertProps } from '@material-ui/lab/Alert';
import CheckFilledIcon from '@components/data-display/Icon/CheckFilledIcon';
import AlertIcon from '@components/data-display/Icon/AlertIcon';
import CloseFilledIcon from '@components/data-display/Icon/CloseFilledIcon';
import InfoIcon from '@components/data-display/Icon/InfoIcon';

export const AlertOutlinedGeneral: FC<AlertProps> = (props) => (
  <Alert className="MuiAlert-standardOutlinedGeneral" {...props}>
    This is a general alert — check it out!
  </Alert>
);

export const AlertOutlinedError: FC<AlertProps> = (props) => (
  <Alert
    variant="outlined"
    severity="error"
    icon={<CloseFilledIcon />}
    {...props}
  >
    This is an error alert — check it out!
  </Alert>
);

export const AlertOutlinedWarning: FC<AlertProps> = (props) => (
  <Alert variant="outlined" severity="warning" icon={<AlertIcon />} {...props}>
    This is a warning alert — check it out!
  </Alert>
);

export const AlertOutlinedInfo: FC<AlertProps> = (props) => (
  <Alert variant="outlined" severity="info" icon={<InfoIcon />} {...props}>
    This is an info alert — check it out!
  </Alert>
);

export const AlertOutlinedSuccess: FC<AlertProps> = (props) => (
  <Alert
    variant="outlined"
    severity="success"
    icon={<CheckFilledIcon />}
    {...props}
  >
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
