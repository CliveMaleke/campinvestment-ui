// Vendors
import React, { FC } from 'react';
import { Collapse, createStyles, makeStyles, Theme } from '@material-ui/core';

// Components
import Alert from '@components/feedback/Alert';
import CloseIcon from '@components/data-display/Icon/CloseIcon';
import { AlertProps } from '@material-ui/lab/Alert';
import CheckFilledIcon from '@components/data-display/Icon/CheckFilledIcon';
import Button from '@components/inputs/Button';

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

export const AlertTransition: FC<AlertProps> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          action={
            <span
              aria-label="close"
              color="inherit"
              onClick={() => setOpen(false)}
            >
              <CloseIcon fontSize="small" />
            </span>
          }
          icon={<CheckFilledIcon />}
          {...props}
        >
          This is a success alert — check it out!
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        onClick={() => {
          setOpen(true);
        }}
        variant="contained"
        size="small"
      >
        Re-open
      </Button>
    </div>
  );
};

const AlertTranstions = () => (
  <>
    <AlertTransition />
  </>
);

export default AlertTranstions;
