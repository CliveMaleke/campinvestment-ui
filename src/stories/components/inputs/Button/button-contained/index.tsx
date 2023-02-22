// Vendors
import React from 'react';

// Components
import Button, { ButtonProps } from '@components/inputs/Button';

export const ButtonContained = (props: ButtonProps) => (
  <Button variant="contained" {...props}>
    Button
  </Button>
);


export default ButtonContained;
