// Vendors
import {
  Collapse,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
} from '@material-ui/core';
import React from 'react';

// Components
import Alert from '@components/feedback/Alert';
import CloseIcon from '@components/data-display/Icon/CloseIcon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

export const AlertTransition = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          action={
            <CloseIcon
              onClick={() => {
                setOpen(false);
              }}
            >
              x
            </CloseIcon>
          }
        >
          This is a success alert — check it out!
        </Alert>
      </Collapse>
      <button
        disabled={open}
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </button>
    </div>
  );
};

const AlertTranstions = () => (
  <>
    <AlertTransition />
  </>
);

export default AlertTranstions;
