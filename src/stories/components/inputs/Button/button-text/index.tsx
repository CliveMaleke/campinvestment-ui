// Vendors
import React from 'react';

// Components
import Button from '@components/inputs/Button';
import { IButtonProps } from '@components/inputs/Button/Button';

export const ButtonText = (props: IButtonProps) => (
  <Button variant="text" {...props}>
    Button
  </Button>
);


export default ButtonText;