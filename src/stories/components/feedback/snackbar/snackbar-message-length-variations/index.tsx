// Vendors
import React, { FC } from 'react';

// Components
import SnackbarContent from '@components/feedback/SnackbarContent';
import { SnackbarProps } from '@material-ui/core/Snackbar';

export const SnackbarMessageShorWithButton: FC<SnackbarProps> = (props) => {
  const action = <button>lorem ipsum dolorem</button>;

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
  const action = <button>lorem ipsum dolorem</button>;

  return (
    <SnackbarContent
      message="I love candy. I love cookies. I love cupcakes."
      action={action}
      {...props}
    />
  );
};

export const SnackbarMessageLongWithButton: FC<SnackbarProps> = (props) => {
  const action = <button>lorem ipsum dolorem</button>;

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
