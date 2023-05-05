// Vendors
import React from 'react';

// Components
import Button from '@components/inputs/Button';
import { IButtonProps } from '@components/inputs/Button/Button';

export const ButtonOutlined = (props: IButtonProps) => (
  <Button variant="outlined" {...props}>
    {props.children}
  </Button>
);
const ButtonOutlinedCanvas = (props: IButtonProps) => (
  <Button variant="outlined" {...props}>
    Button
  </Button>
);


export default ButtonOutlinedCanvas;
