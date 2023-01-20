// Vendors
import React, { FC } from 'react';

// Components
import Typography from '../../../../../components/data-display/Typography';
import { ITypographyProps } from '../../../../../components/data-display/Typography/Typography';

export const TypographyNumeric: FC<ITypographyProps> = (props) => (
  <Typography variant="subtitle1" {...props}>
    Numeric 
  </Typography>
);


export default TypographyNumeric;