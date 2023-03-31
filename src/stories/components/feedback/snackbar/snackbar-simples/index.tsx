// Vendors
import React, { FC } from 'react';

// Components
import Snackbar from '@components/feedback/Snackbar';
import Alert from '@components/feedback/Alert';
import AlertTitle from '@components/lab/AlertTitle';
import CloseIcon from '@components/data-display/Icon/CloseIcon';
import CheckFilledIcon from '@components/data-display/Icon/CheckFilledIcon';
import { SnackbarProps } from '@material-ui/core/Snackbar';
import Button from '@components/inputs/Button';

export const SnackbarSimple: FC<SnackbarProps> = (props) => {
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
        {...props}
      >
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
