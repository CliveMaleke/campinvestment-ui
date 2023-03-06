// Vendors
import React, { FC } from 'react';
import Button from '@material-ui/core/Button';

// Components
import Alert from '@components/feedback/Alert';
import { AlertProps } from '@material-ui/lab/Alert';

export const AlertActionUndo: FC<AlertProps> = (props) => (
  <Alert
    action={
      <Button color="inherit" size="small">
        UNDO
      </Button>
    }
    {...props}
  >
    This is a success alert — check it out!
  </Alert>
);

export const AlertActionClose: FC<AlertProps> = (props) => (
  <Alert onClose={() => {}} {...props}>
    This is a success alert — check it out!
  </Alert>
);

const AlertActions = () => (
  <>
    <AlertActionUndo />
    <AlertActionClose />
  </>
);

export default AlertActions;
