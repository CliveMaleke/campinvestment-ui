// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import HiddenBreakpointUp from './hidden-breakpoint-up';
import HiddenBreakpointUpDocs from './hidden-breakpoint-up/docs.mdx';

import HiddenBreakpointDown from './hidden-breakpoint-down';
import HiddenBreakpointDownDocs from './hidden-breakpoint-down/docs.mdx';

import HiddenBreakpointOnly from './hidden-breakpoint-only';
import HiddenBreakpointOnlyDocs from './hidden-breakpoint-only/docs.mdx';

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
  title: 'Components/Layout/Hidden/Example',
  parameters: {
    design: { disable: true },
    options: { showPanel: false },
  },
} as Meta;

export const breakpointUp: ArgStory = () => (
  <Wrapper>
    <HiddenBreakpointUp />
  </Wrapper>
);
breakpointUp.story = {
  parameters: {
    docs: {
      page: HiddenBreakpointUpDocs,
    },
  },
};

export const breakpointDown: ArgStory = () => (
  <Wrapper>
    <HiddenBreakpointDown />
  </Wrapper>
);
breakpointDown.story = {
  parameters: {
    docs: {
      page: HiddenBreakpointDownDocs,
    },
  },
};

export const breakpointOnly: ArgStory = () => (
  <Wrapper>
    <HiddenBreakpointOnly />
  </Wrapper>
);
breakpointOnly.story = {
  parameters: {
    docs: {
      page: HiddenBreakpointOnlyDocs,
    },
  },
};
