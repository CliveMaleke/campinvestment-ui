// Vendors
import React, { FC } from 'react';
import { Slide } from '@material-ui/core';

// Components
import Snackbar from '@components/feedback/Snackbar';
import Alert from '@components/feedback/Alert';
import AlertTitle from '@components/feedback/AlertTitle';
import { SnackbarProps } from '@material-ui/core/Snackbar';
import Button from '@components/inputs/Button';

export interface SnackbarMessage {
  message: string;
  key: number;
}

export interface State {
  open: boolean;
  snackPack: SnackbarMessage[];
  messageInfo?: SnackbarMessage;
}

export const SnackbarTransitionConsecutive: FC<SnackbarProps> = (props) => {
  const toastSlideRef = React.useRef(null);
  const [snackPack, setSnackPack] = React.useState<SnackbarMessage[]>([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState<
    SnackbarMessage | undefined
  >(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick = (message: string) => () => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleClose = (
    event: React.SyntheticEvent | MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gap: '0 12px',
          gridTemplateColumns: '200px 200px',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick('Message A')}
        >
          Show message A
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick('Message B')}
        >
          Show message B
        </Button>
      </div>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={5000}
        TransitionComponent={(props) => <Slide {...props} direction="right" />}
        onClose={handleClose}
        onExited={handleExited}
        {...props}
      >
        <div ref={toastSlideRef}>
          <Alert
            className="MuiAlert-snackbar"
            severity="success"
            onClose={handleClose}
          >
            <AlertTitle className="MuiAlert-snackbarTitle">success</AlertTitle>
            This is a success alert {messageInfo?.message} — check it out!
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
    </div>
  );
};

const SnackbarTransitionsConsecutive = () => (
  <>
    <SnackbarTransitionConsecutive />
  </>
);

export default SnackbarTransitionsConsecutive;
