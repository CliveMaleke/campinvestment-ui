// Vendors
import React from 'react';

// Components
import IconButton from '@components/inputs/IconButton';
import DeleteIcon from '@components/data-display/Icon/DeleteIcon';

export const Button = (props) => (
  <IconButton {...props}>
    <DeleteIcon />
  </IconButton>
);


export default Button;
