// Vendors
import React, { FC } from 'react';

// Components
import Typography from '../../../../../components/data-display/Typography';
import { ITypographyProps } from '../../../../../components/data-display/Typography/Typography';

export const TypographyOverline: FC<ITypographyProps> = (props) => (
  <Typography variant="overline" {...props}>
    Overline 
  </Typography>
);


export default TypographyOverline;