// Vendors
import React from 'react';

// Components
import Snackbar from '@components/feedback/Snackbar';
import Button from '@material-ui/core/Button';
import Alert from '@components/feedback/Alert';
import AlertTitle from '@components/lab/AlertTitle';

export const SnackbarSimple = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Open simple snackbar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        action={
          <span aria-label="close" color="inherit" onClick={handleClose}>
            x
          </span>
        }
      >
        <Alert severity="success" onClose={handleClose}>
          <AlertTitle>success</AlertTitle>
          This is a success alert — check it out!
          <div className="MuiButtonWrapper-root">
            <Button variant="text" onClick={() => {}}>
              Button 1
            </Button>
            <Button variant="text" onClick={() => {}}>
              Button 2
            </Button>
          </div>
        </Alert>
      </Snackbar>
    </>
  );
};

const SnackbarSimples = () => (
  <>
    <SnackbarSimple />
  </>
);

export default SnackbarSimples;
