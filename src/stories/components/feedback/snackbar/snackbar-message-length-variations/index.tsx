// Vendors
import React from 'react';

// Components
import SnackbarContent from '@components/feedback/SnackbarContent';

export const SnackbarMessageShorWithButton = () => {
  const action = <button>lorem ipsum dolorem</button>;

  return <SnackbarContent message="I love snacks." action={action} />;
};

export const SnackbarMessageLong = () => {
  return (
    <SnackbarContent
      message={
        'I love candy. I love cookies. I love cupcakes. \
    I love cheesecake. I love chocolate.'
      }
    />
  );
};

export const SnackbarMessageRegularWithButton = () => {
  const action = <button>lorem ipsum dolorem</button>;

  return (
    <SnackbarContent
      message="I love candy. I love cookies. I love cupcakes."
      action={action}
    />
  );
};

export const SnackbarMessageLongWithButton = () => {
  const action = <button>lorem ipsum dolorem</button>;

  return (
    <SnackbarContent
      message={
        'I love candy. I love cookies. I love cupcakes. \
      I love cheesecake. I love chocolate.'
      }
      action={action}
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
