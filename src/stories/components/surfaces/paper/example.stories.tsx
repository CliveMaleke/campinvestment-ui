// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import PaperElevation from './paper-elevation';
import PaperElevationDocs from './paper-elevation/docs.mdx';

import PaperVariants from './paper-variants';
import PaperVariantsDocs from './paper-variants/docs.mdx';

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Surfaces/Paper/Example',
  parameters: {
    design: { disable: true },
    options: { showPanel: false },
  },
} as Meta;

export const elevation: ArgStory = () => (
  <Wrapper>
    <PaperElevation />
  </Wrapper>
);
elevation.story = {
  parameters: {
    docs: {
      page: PaperElevationDocs,
    },
  },
};

export const variants: ArgStory = () => (
  <Wrapper>
    <PaperVariants />
  </Wrapper>
);
variants.story = {
  parameters: {
    docs: {
      page: PaperVariantsDocs,
    },
  },
};