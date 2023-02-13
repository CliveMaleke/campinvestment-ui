// Vendors
import React, { FC } from 'react';

// Components
import Typography from '@components/data-display/Typography';
import { ITypographyProps } from '@components/data-display/Typography/Typography';

export const TypographyBody: FC<ITypographyProps> = (props) => (
  <Typography variant="body1" {...props}>
    Body 
  </Typography>
);

export default TypographyBody;