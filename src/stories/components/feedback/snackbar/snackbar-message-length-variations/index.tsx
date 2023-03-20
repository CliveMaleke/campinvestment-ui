// Vendors
import React, { FC } from 'react';

// Components
import SnackbarContent from '@components/feedback/SnackbarContent';
import { SnackbarProps } from '@material-ui/core/Snackbar';
import Button from '@components/inputs/Button';

export const SnackbarMessageShorWithButton: FC<SnackbarProps> = (props) => {
  const action = (
    <Button variant="contained" color="primary">
      Button
    </Button>
  );

  return (
    <SnackbarContent message="I love snacks." action={action} {...props} />
  );
};

export const SnackbarMessageLong: FC<SnackbarProps> = (props) => {
  return (
    <SnackbarContent
      message={
        'I love candy. I love cookies. I love cupcakes. \
    I love cheesecake. I love chocolate.'
      }
      {...props}
    />
  );
};

export const SnackbarMessageRegularWithButton: FC<SnackbarProps> = (props) => {
  const action = (
    <Button variant="contained" color="primary">
      Button
    </Button>
  );

  return (
    <SnackbarContent
      message="I love candy. I love cookies. I love cupcakes."
      action={action}
      {...props}
    />
  );
};

export const SnackbarMessageLongWithButton: FC<SnackbarProps> = (props) => {
  const action = (
    <Button variant="contained" color="primary">
      Button
    </Button>
  );

  return (
    <SnackbarContent
      message={
        'I love candy. I love cookies. I love cupcakes. \
      I love cheesecake. I love chocolate.'
      }
      action={action}
      {...props}
    />
  );
};

const SnackbarMessageLengthVariations = () => (
  <>
    <SnackbarMessageShorWithButton />
    <SnackbarMessageLong />
    <SnackbarMessageRegularWithButton />
    <SnackbarMessageLongWithButton />
  </>
);

export default SnackbarMessageLengthVariations;
