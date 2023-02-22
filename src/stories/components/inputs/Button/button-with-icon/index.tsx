// Vendors
import React from 'react';

// Components
import Button, { ButtonProps } from '@components/inputs/Button';
import DeleteIcon from '@components/data-display/Icon/DeleteIcon';

export const ButtonWithIcon = (props: ButtonProps) => (
  <Button startIcon={<DeleteIcon />} variant="contained" color="secondary" {...props}>
    Delete
  </Button>
);


export default ButtonWithIcon;