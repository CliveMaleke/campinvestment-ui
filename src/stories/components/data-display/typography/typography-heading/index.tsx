// Vendors
import React, { FC } from 'react';

// Components
import Typography from '../../../../../components/data-display/Typography';
import { ITypographyProps } from '../../../../../components/data-display/Typography/Typography';

export const TypographyHeading1: FC<ITypographyProps> = (props) => (
  <Typography {...props}>Heading 1</Typography>
);

export const TypographyHeading2: FC<ITypographyProps> = (props) => (
  <Typography {...props}>Heading 2</Typography>
);

export const TypographyHeading3: FC<ITypographyProps> = (props) => (
  <Typography {...props}>Heading 3</Typography>
);

export const TypographyHeading4: FC<ITypographyProps> = (props) => (
  <Typography {...props}>Heading 4</Typography>
);

export const TypographyHeading5: FC<ITypographyProps> = (props) => (
  <Typography {...props}>Heading 5</Typography>
);

export const TypographyHeading6: FC<ITypographyProps> = (props) => (
  <Typography {...props}>Heading 6</Typography>
);

const TypographyHeading = () => (
  <>
    {TypographyHeading1({ variant: 'h1' })}
    {TypographyHeading2({ variant: 'h2' })}
    {TypographyHeading3({ variant: 'h3' })}
    {TypographyHeading4({ variant: 'h4' })}
    {TypographyHeading5({ variant: 'h5' })}
    {TypographyHeading6({ variant: 'h6' })}
  </>
);

export default TypographyHeading;
