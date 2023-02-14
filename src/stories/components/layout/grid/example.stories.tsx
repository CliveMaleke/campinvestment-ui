// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import GridSpacing from './grid-spacing';
import GridSpacingDocs from './grid-spacing/docs.mdx';

import GridFluidBasic from './grid-fluid-basic';
import GridFluidBasicDocs from './grid-fluid-basic/docs.mdx';

import GridFluidBreakpoints from './grid-fluid-breakpoints';
import GridFluidBreakpointsDocs from './grid-fluid-breakpoints/docs.mdx';

import GridInteractive from './grid-interactive';
import GridInteractiveDocs from './grid-interactive/docs.mdx';

import GridAutoLayout from './grid-auto-layout';
import GridAutoLayoutDocs from './grid-auto-layout/docs.mdx';

import GridNested from './grid-nested';
import GridNestedDocs from './grid-nested/docs.mdx';

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
  title: 'Components/Layout/Grid/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
} as Meta;

export const spacing: ArgStory = () => (
  <Wrapper>
    <GridSpacing />
  </Wrapper>
);
spacing.story = {
  parameters: {
    docs: {
      page: GridSpacingDocs,
    },
  },
};

export const fluidBasic: ArgStory = () => (
  <Wrapper>
    <GridFluidBasic />
  </Wrapper>
);
fluidBasic.story = {
  parameters: {
    docs: {
      page: GridFluidBasicDocs,
    },
  },
};

export const fluidBreakpoints: ArgStory = () => (
  <Wrapper>
    <GridFluidBreakpoints />
  </Wrapper>
);
fluidBreakpoints.story = {
  parameters: {
    docs: {
      page: GridFluidBreakpointsDocs,
    },
  },
};

export const interactive: ArgStory = () => (
  <Wrapper>
    <GridInteractive />
  </Wrapper>
);
interactive.story = {
  parameters: {
    docs: {
      page: GridInteractiveDocs,
    },
  },
};

export const autoLayout: ArgStory = () => (
  <Wrapper>
    <GridAutoLayout />
  </Wrapper>
);
autoLayout.story = {
  parameters: {
    docs: {
      page: GridAutoLayoutDocs,
    },
  },
};

export const nestedGrid: ArgStory = () => (
  <Wrapper>
    <GridNested />
  </Wrapper>
);
nestedGrid.story = {
  parameters: {
    docs: {
      page: GridNestedDocs,
    },
  },
};
