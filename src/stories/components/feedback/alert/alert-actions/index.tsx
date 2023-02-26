// Vendors
import React from 'react';

// Components
import Alert from '@components/feedback/Alert';

export const AlertActionUndo = () => (
  <Alert action={<button color="inherit">UNDO</button>}>
    This is a success alert — check it out!
  </Alert>
);

export const AlertActionClose = () => (
  <Alert onClose={() => {}}>This is a success alert — check it out!</Alert>
);

const AlertActions = () => (
  <>
    <AlertActionUndo />
    <AlertActionClose />
  </>
);

export default AlertActions;
