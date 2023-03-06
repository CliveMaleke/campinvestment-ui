// Vendors
import React, { FC } from 'react';
import { TransitionProps } from '@material-ui/core/transitions';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';

// Components
import Snackbar from '@components/feedback/Snackbar';
import Button from '@material-ui/core/Button';
import Alert from '@components/feedback/Alert';
import CloseIcon from '@components/data-display/Icon/CloseIcon';
import { SnackbarProps } from '@material-ui/core/Snackbar';

function SlideTransition(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

function GrowTransition(props: TransitionProps) {
  return <Grow {...props} />;
}

export const SnackbarTransitionChange: FC<SnackbarProps> = (props) => {
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
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        key={state.Transition.name}
        {...props}
      >
        <Alert
          severity="info"
          className="MuiAlert-standardGeneral MuiAlert-snackbar"
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
