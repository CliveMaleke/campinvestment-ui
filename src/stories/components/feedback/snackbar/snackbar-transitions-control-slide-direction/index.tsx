// Vendors
import React, { FC } from 'react';
import Slide, { SlideProps } from '@material-ui/core/Slide';

// Components
import Snackbar from '@components/feedback/Snackbar';
import Button from '@material-ui/core/Button';
import { SnackbarProps } from '@material-ui/core/Snackbar';

type TransitionProps = Omit<SlideProps, 'direction'>;

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

export const SnackbarTransitionControlSlideDirection: FC<SnackbarProps> = (
  props,
) => {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined
  >(undefined);

  const handleClick =
    (Transition: React.ComponentType<TransitionProps>) => () => {
      setTransition(() => Transition);
      setOpen(true);
    };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gap: '12px 12px',
          gridTemplateColumns: '200px 200px',
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick(TransitionLeft)}
        >
          left
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick(TransitionRight)}
        >
          Right
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick(TransitionUp)}
        >
          Up
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClick(TransitionDown)}
        >
          Down
        </Button>
      </div>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="I love snacks"
        key={transition ? transition.name : ''}
        {...props}
      />
    </div>
  );
};

const SnackbarTransitionsControlSlideDirection = () => (
  <>
    <SnackbarTransitionControlSlideDirection />
  </>
);

export default SnackbarTransitionsControlSlideDirection;
