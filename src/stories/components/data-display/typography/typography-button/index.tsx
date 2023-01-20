// Vendors
import React, { FC } from 'react';

// Components
import Typography from '../../../../../components/data-display/Typography';
import { ITypographyProps } from '../../../../../components/data-display/Typography/Typography';

export const TypographyButton: FC<ITypographyProps> = (props) => (
  <Typography variant="button" {...props}>
    Button 
  </Typography>
);

export default TypographyButton;