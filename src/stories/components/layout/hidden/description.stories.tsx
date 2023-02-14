// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import HiddenBreakpointUp from './hidden-breakpoint-up';
import HiddenBreakpointDown from './hidden-breakpoint-down';
import HiddenBreakpointOnly from './hidden-breakpoint-only';

import HiddenDescriptionDocs from './description.docs.mdx';

interface ArgHidden extends ArgStory {
  ({ type }: { type: string }): JSX.Element;
  args: {
    type: string;
  };
}

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
  title: 'Components/Layout/Hidden',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      name: 'Breakpoint',
      control: {
        type: 'select',
        options: ['up', 'down', 'only'],
      },
    },
  },
} as Meta;

export const description: ArgHidden = ({ type }) => (
  <Wrapper>
    {type == 'up' && <HiddenBreakpointUp />}
    {type == 'down' && <HiddenBreakpointDown />}
    {type == 'only' && <HiddenBreakpointOnly />}
  </Wrapper>
);

description.story = {
  parameters: {
    docs: {
      page: HiddenDescriptionDocs,
    },
  },
};

description.args = {
  type: 'up',
};
