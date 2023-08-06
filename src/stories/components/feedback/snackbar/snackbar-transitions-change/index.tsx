// Vendors
import React, { FC } from 'react';
import { TransitionProps } from '@material-ui/core/transitions';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';

// Components
import Snackbar from '@components/feedback/Snackbar';
import Alert from '@components/feedback/Alert';
import CloseIcon from '@components/data-display/Icon/CloseIcon';
import { SnackbarProps } from '@material-ui/core/Snackbar';
import Button from '@components/inputs/Button';

function SlideTransition(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

function GrowTransition(props: TransitionProps) {
  return <Grow {...props} />;
}

export const SnackbarTransitionChange: FC<SnackbarProps> = (props) => {
  const toastSlideRef = React.useRef(null);
  const [state, setState] = React.useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & { children?: React.ReactElement<any, any> }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  const handleClick =
    (
      Transition: React.ComponentType<
        TransitionProps & { children?: React.ReactElement<any, any> }
      >,
    ) =>
    () => {
      setState({
        open: true,
        Transition,
      });
    };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gap: '0 12px',
          gridTemplateColumns: '200px 200px 200px',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick(GrowTransition)}
        >
          Grow Transition
        </Button>
        <Button variant="contained" color="primary" onClick={handleClick(Fade)}>
          Fade Transition
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick(SlideTransition)}
        >
          Slide Transition
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
        {...props}
      >
        <div ref={toastSlideRef}>
          <Alert
            severity="info"
            className="MuiAlert-snackbar MuiAlert-standardGeneral"
            action={
              <span aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </span>
            }
          >
            I love snacks!
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

const SnackbarTransitionsChange = () => (
  <>
    <SnackbarTransitionChange />
  </>
);

export default SnackbarTransitionsChange;
