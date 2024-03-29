// Vendors
import React, { FC } from 'react';
import { Slide } from '@material-ui/core';

// Components
import Snackbar from '@components/feedback/Snackbar';
import Alert from '@components/feedback/Alert';
import AlertTitle from '@components/feedback/AlertTitle';
import CloseIcon from '@components/data-display/Icon/CloseIcon';
import CheckFilledIcon from '@components/data-display/Icon/CheckFilledIcon';
import { SnackbarProps } from '@material-ui/core/Snackbar';
import Button from '@components/inputs/Button';

export const SnackbarSimple: FC<SnackbarProps> = (props) => {
  const toastSlideRef = React.useRef(null);
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
        autoHideDuration={5000}
        TransitionComponent={(props) => <Slide {...props} direction="right" />}
        onClose={handleClose}
        {...props}
      >
        <div ref={toastSlideRef}>
          <Alert
            className="MuiAlert-snackbar"
            severity="success"
            onClose={handleClose}
            icon={<CheckFilledIcon fontSize="small" />}
            action={
              <span aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </span>
            }
          >
            <AlertTitle className="MuiAlert-snackbarTitle">
              This is a success snackbar message
            </AlertTitle>
            Description
            <div className="MuiButtonWrapper-root">
              <Button variant="text" onClick={() => {}}>
                Button 1
              </Button>
              <Button variant="text" onClick={() => {}}>
                Button 2
              </Button>
            </div>
          </Alert>
        </div>
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
