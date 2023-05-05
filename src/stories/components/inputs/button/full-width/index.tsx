// Vendors
import React from 'react';

// Components
import Button from '@components/inputs/Button';
import { IButtonProps } from '@components/inputs/Button/Button';

export const ButtonFullWidth = (props: IButtonProps) => (
  <Button variant="contained" {...props}>
    {props.children}
  </Button>
);

const ButtonFullWidthCanvas = (props: IButtonProps) => (
  <Button fullWidth variant="contained" {...props}>
    Button
  </Button>
);

export default ButtonFullWidthCanvas;
