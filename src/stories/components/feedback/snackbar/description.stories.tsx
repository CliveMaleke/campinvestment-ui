// Vendors
import React, { useEffect } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TransitionProps } from '@material-ui/core/transitions';
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';

// Components
import Snackbar from '@components/feedback/Snackbar';
import SnackbarDescriptionDocs from './description.docs.mdx';
import Alert from '@components/feedback/Alert';
import AlertTitle from '@components/lab/AlertTitle';
import CloseIcon from '@components/data-display/Icon/CloseIcon';

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
    title: {
      name: 'Title',
      control: 'text',
      table: {
        category: 'Texts',
      },
    },
    body: {
      name: 'Body',
      control: 'text',
      table: {
        category: 'Texts',
      },
    },
    types: {
      name: 'types',
      control: {
        type: 'select',
        options: ['general', 'error', 'warning', 'info', 'success'],
      },
      table: {
        category: 'Style',
      },
    },
    positions: {
      name: 'positions',
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
      table: {
        category: 'Style',
      },
    },
    duration: {
      name: 'Duration',
      control: 'number',
      table: {
        category: 'Animation',
      },
    },
    transitions: {
      name: 'Transition',
      control: {
        type: 'select',
        options: ['grow', 'fade'],
      },
      table: {
        category: 'Animation',
      },
    },
  },
};

function GrowTransition(props: TransitionProps) {
  return <Grow {...props} />;
}

export const description = ({
  title,
  body,
  positions,
  types,
  duration,
  transitions,
}) => {
  const splittedPosition = positions?.split('-');
  const [state, setState] = React.useState<{
    open: boolean;
    Transition: React.ComponentType<
      TransitionProps & { children?: React.ReactElement<any, any> }
    >;
  }>({
    open: false,
    Transition: Fade,
  });

  useEffect(() => {
    if (transitions === 'grow') {
      setState({
        ...state,
        Transition: GrowTransition,
      });
    } else {
      setState({
        ...state,
        Transition: Fade,
      });
    }
  }, [transitions]);

  const handleClick = () => {
    setState({
      ...state,
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

    setState({
      ...state,
      open: false,
    });
  };

  return (
    <Wrapper>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Open snackbar
      </Button>
      <Snackbar
        anchorOrigin={{
          vertical: splittedPosition[0],
          horizontal: splittedPosition[1],
        }}
        key={splittedPosition[0] + splittedPosition[1]}
        open={state.open}
        autoHideDuration={duration}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        children={
          <Alert
            severity={types}
            className={types === 'general' && 'MuiAlert-standardGeneral'}
            action={
              <span aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </span>
            }
          >
            <AlertTitle>{title}</AlertTitle>
            {body}
            <div className="MuiButtonWrapper-root">
              <Button variant="text" onClick={() => {}}>
                Button 1
              </Button>
              <Button variant="text" onClick={() => {}}>
                Button 2
              </Button>
            </div>
          </Alert>
        }
      />
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
  title: 'snackbar title',
  body: 'snackbar body',
  types: 'success',
  positions: 'top-center',
  duration: 1000,
  transitions: 'grow',
};
