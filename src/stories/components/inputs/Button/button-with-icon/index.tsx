// Vendors
import React from 'react';

// Components
import Button from '@components/inputs/Button';
import { IButtonProps } from '@components/inputs/Button/Button';
import DeleteIcon from '@components/data-display/Icon/DeleteIcon';

export const ButtonWithIcon = (props: IButtonProps) => (
  <Button startIcon={<DeleteIcon />} variant="contained" color="secondary" {...props}>
    Delete
  </Button>
);


export default ButtonWithIcon;