// Vendors
import React, { useEffect } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { TransitionProps } from '@material-ui/core/transitions';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';

// Components
import Snackbar from '@components/feedback/Snackbar';
import SnackbarDescriptionDocs from './description.docs.mdx';
import Alert from '@components/feedback/Alert';
import AlertTitle from '@components/feedback/AlertTitle';
import CloseIcon from '@components/data-display/Icon/CloseIcon';
import CheckFilledIcon from '@components/data-display/Icon/CheckFilledIcon';
import AlertIcon from '@components/data-display/Icon/AlertIcon';
import CloseFilledIcon from '@components/data-display/Icon/CloseFilledIcon';
import InfoIcon from '@components/data-display/Icon/InfoIcon';
import { SvgIconProps } from '@material-ui/core';
import Button from '@components/inputs/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Feedback/Snackbar',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    variants: {
      name: 'Variants',
      control: {
        type: 'radio',
        options: ['Snackbar', 'Toast'],
      },
    },
    snackbarTitle: {
      name: 'Title',
      control: 'text',
      if: { arg: 'variants', eq: 'Snackbar' },
    },
    toastTitle: {
      name: 'Title',
      control: 'text',
      if: { arg: 'variants', eq: 'Toast' },
    },
    body: {
      name: 'Body',
      control: 'text',
      if: { arg: 'variants', eq: 'Snackbar' },
    },
    types: {
      name: 'Types',
      control: {
        type: 'select',
        options: ['general', 'error', 'warning', 'info', 'success'],
      },
    },
    toastPositions: {
      name: 'Position',
      control: {
        type: 'select',
        options: [
          'top-center',
          'top-right',
          'bottom-right',
          'bottom-center',
          'bottom-left',
          'top-left',
        ],
      },
      if: { arg: 'variants', eq: 'Toast' },
    },
    snackbarPositions: {
      name: 'Position',
      control: {
        type: 'select',
        options: [
          'top-center',
          'top-right',
          'bottom-right',
          'bottom-center',
          'bottom-left',
          'top-left',
        ],
      },
      if: { arg: 'variants', eq: 'Snackbar' },
    },
    duration: {
      name: 'Duration',
      control: 'number',
      if: { arg: 'variants', eq: 'Toast' },
    },
    snackbarTransitions: {
      name: 'Transition',
      control: {
        type: 'select',
        options: ['grow', 'fade', 'slide'],
      },
      if: { arg: 'variants', eq: 'Snackbar' },
    },
    toastTransitions: {
      name: 'Transition',
      control: {
        type: 'select',
        options: ['grow', 'fade', 'slide'],
      },
      if: { arg: 'variants', eq: 'Toast' },
    },
    toastSlideDirection: {
      name: 'Slide direction',
      control: {
        type: 'select',
        options: ['right', 'up', 'left', 'down'],
      },
      if: { arg: 'variants', eq: 'Toast' },
    },
    snackbarSlideDirection: {
      name: 'Slide direction',
      control: {
        type: 'select',
        options: ['right', 'up', 'left', 'down'],
      },
      if: { arg: 'variants', eq: 'Snackbar' },
    },
  },
};

function GrowTransition(props: TransitionProps) {
  return <Grow {...props} />;
}

function TransitionLeft(props: TransitionProps) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props: TransitionProps) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props: TransitionProps) {
  return <Slide {...props} direction="down" />;
}

export const description = ({
  variants,
  snackbarTitle,
  toastTitle,
  body,
  toastPositions,
  snackbarPositions,
  types,
  duration,
  snackbarTransitions,
  toastTransitions,
  toastSlideDirection,
  snackbarSlideDirection,
}) => {
  const splittedToastPosition = toastPositions?.split('-');
  const splittedSnackbarPosition = snackbarPositions?.split('-');
  const [icon, setIcon] = React.useState<{
    Icon: React.ComponentType<SvgIconProps>;
  }>({
    Icon: CheckFilledIcon,
  });

  // render when types change
  useEffect(() => {
    if (types === 'error') {
      setIcon({
        Icon: CloseFilledIcon,
      });
    }
    if (types === 'warning') {
      setIcon({
        Icon: AlertIcon,
      });
    }
    if (types === 'info') {
      setIcon({
        Icon: InfoIcon,
      });
    }
    if (types === 'success') {
      setIcon({
        Icon: CheckFilledIcon,
      });
    }
  }, [types]);

  // Toast
  const toastSlideRef = React.useRef(null);
  const [toastState, setToastState] = React.useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & { children?: React.ReactElement<any, any> }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  // set toast transition and slide direction
  useEffect(() => {
    if (toastTransitions === 'grow') {
      setToastState({
        ...toastState,
        Transition: GrowTransition,
      });
      return;
    }

    if (toastTransitions === 'fade') {
      setToastState({
        ...toastState,
        Transition: Fade,
      });
      return;
    }

    if (toastTransitions === 'slide') {
      if (toastSlideDirection === 'left') {
        setToastState({
          ...toastState,
          Transition: TransitionLeft,
        });
        return;
      }

      if (toastSlideDirection === 'right') {
        setToastState({
          ...toastState,
          Transition: TransitionRight,
        });
        return;
      }

      if (toastSlideDirection === 'up') {
        setToastState({
          ...toastState,
          Transition: TransitionUp,
        });
        return;
      }

      if (toastSlideDirection === 'down') {
        setToastState({
          ...toastState,
          Transition: TransitionDown,
        });
        return;
      }
    }
  }, [toastTransitions, toastSlideDirection]);

  const handleClick = () => {
    setToastState({
      ...toastState,
      open: true,
    });
  };

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setToastState({
      ...toastState,
      open: false,
    });
  };

  // Snackbar
  const snackbarSlideRef = React.useRef(null);
  const [snackbarState, setSnackbarState] = React.useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & { children?: React.ReactElement<any, any> }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  // set snackbar transition and slide direction
  useEffect(() => {
    if (snackbarTransitions === 'grow') {
      setSnackbarState({
        ...snackbarState,
        Transition: GrowTransition,
      });
      return;
    }

    if (snackbarTransitions === 'fade') {
      setSnackbarState({
        ...snackbarState,
        Transition: Fade,
      });
      return;
    }

    if (snackbarTransitions === 'slide') {
      if (snackbarSlideDirection === 'left') {
        setSnackbarState({
          ...snackbarState,
          Transition: TransitionLeft,
        });
        return;
      }

      if (snackbarSlideDirection === 'right') {
        setSnackbarState({
          ...snackbarState,
          Transition: TransitionRight,
        });
        return;
      }

      if (snackbarSlideDirection === 'up') {
        setSnackbarState({
          ...snackbarState,
          Transition: TransitionUp,
        });
        return;
      }

      if (snackbarSlideDirection === 'down') {
        setSnackbarState({
          ...snackbarState,
          Transition: TransitionDown,
        });
        return;
      }
    }
  }, [snackbarTransitions, snackbarSlideDirection]);

  const handleClickSnackar = () => {
    setSnackbarState({
      ...snackbarState,
      open: true,
    });
  };

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarState({
      ...snackbarState,
      open: false,
    });
  };

  return (
    <Wrapper>
      {variants === 'Toast' ? (
        <>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Open Toast
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: splittedToastPosition[0],
              horizontal: splittedToastPosition[1],
            }}
            key={splittedToastPosition[0] + splittedToastPosition[1]}
            open={toastState.open}
            autoHideDuration={duration}
            onClose={handleClose}
            TransitionComponent={toastState.Transition}
          >
            <div ref={toastSlideRef}>
              <Alert
                severity={types}
                className={`MuiAlert-toast ${
                  types === 'general' && 'MuiAlert-standardGeneral'
                }`}
                icon={types !== 'general' && <icon.Icon />}
              >
                <AlertTitle>{toastTitle}</AlertTitle>
              </Alert>
            </div>
          </Snackbar>
        </>
      ) : (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickSnackar}
          >
            Open snackbar
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: splittedSnackbarPosition[0],
              horizontal: splittedSnackbarPosition[1],
            }}
            key={splittedSnackbarPosition[0] + splittedSnackbarPosition[1]}
            open={snackbarState.open}
            onClose={handleCloseSnackbar}
            TransitionComponent={snackbarState.Transition}
          >
            <div ref={snackbarSlideRef}>
              <Alert
                severity={types}
                className={`MuiAlert-snackbar ${
                  types === 'general' && 'MuiAlert-standardGeneral'
                }`}
                action={
                  <span
                    aria-label="close"
                    color="inherit"
                    onClick={handleCloseSnackbar}
                  >
                    <CloseIcon fontSize="small" />
                  </span>
                }
                icon={types !== 'general' && <icon.Icon />}
              >
                <AlertTitle className="MuiAlert-snackbarTitle">
                  {snackbarTitle}
                </AlertTitle>
                <p className="MuiAlert-description">{body}</p>
                <div className="MuiButtonWrapper-root">
                  <Button
                    variant="text"
                    onClick={() => {
                      window.open(
                        'https://develop--63b2d35155965648145b7f9e.chromatic.com/?path=/docs/components-data-display-typography-example--button',
                        '_blank',
                      );
                    }}
                  >
                    Button 1
                  </Button>
                  <Button
                    variant="text"
                    onClick={() => {
                      window.open(
                        'https://develop--63b2d35155965648145b7f9e.chromatic.com/?path=/docs/components-data-display-typography-example--button',
                        '_blank',
                      );
                    }}
                  >
                    Button 2
                  </Button>
                </div>
              </Alert>
            </div>
          </Snackbar>
        </>
      )}
    </Wrapper>
  );
};

description.story = {
  parameters: {
    docs: {
      page: SnackbarDescriptionDocs,
    },
  },
};

description.args = {
  variants: 'Toast',
  snackbarTitle: 'This is a success snackbar message',
  toastTitle: 'This is a success toast message',
  body: 'description',
  types: 'success',
  toastPositions: 'top-center',
  snackbarPositions: 'bottom-left',
  duration: 5000,
  snackbarTransitions: 'slide',
  toastTransitions: 'slide',
  toastSlideDirection: 'down',
  snackbarSlideDirection: 'right',
};
