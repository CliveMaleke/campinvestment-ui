// Vendors
import React from 'react';

// Components
import Button from '@components/inputs/Button';
import { IButtonProps } from '@components/inputs/Button/Button';

export const ButtonContained = (props: IButtonProps) => (
  <Button variant="contained" {...props}>
    Button
  </Button>
);


export default ButtonContained;
