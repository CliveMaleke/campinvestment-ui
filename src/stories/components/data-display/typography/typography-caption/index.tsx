// Vendors
import React, { FC } from 'react';

// Components
import Typography from '../../../../../components/data-display/Typography';
import { ITypographyProps } from '../../../../../components/data-display/Typography/Typography';

export const TypographyCaption: FC<ITypographyProps> = (props) => (
  <Typography variant="caption" {...props}>
    Caption 
  </Typography>
);


export default TypographyCaption;