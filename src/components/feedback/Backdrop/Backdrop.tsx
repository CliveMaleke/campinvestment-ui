// Vendors
import React from 'react';
import Backdrop, { BackdropProps } from '@material-ui/core/Backdrop';

export default (props: BackdropProps) => {
  return <Backdrop {...props}>{props.children}</Backdrop>;
};
