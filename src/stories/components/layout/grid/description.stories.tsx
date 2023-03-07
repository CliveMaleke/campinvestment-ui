// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import GridSpacing from './grid-spacing';
import GridFluidBasic from './grid-fluid-basic';
import GridFluidBreakpoints from './grid-fluid-breakpoints';
import GridInteractive from './grid-interactive';
import GridAutoLayout from './grid-auto-layout';
import GridNested from './grid-nested';
import GridDescriptionDocs from './description.docs.mdx';

interface ArgGrid extends ArgStory {
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
  title: 'Components/Layout/Grid',
  parameters: {
    design: { disable: true },
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      name: 'Example',
      control: {
        type: 'select',
        options: [
          'spacing',
          'fluid basic',
          'fluid breakpoints',
          'interactive',
          'auto layout',
          'nested grid',
        ],
      },
    },
  },
} as Meta;

export const description: ArgGrid = ({ type }) => (
  <Wrapper>
    {type == 'spacing' && <GridSpacing />}
    {type == 'fluid basic' && <GridFluidBasic />}
    {type == 'fluid breakpoints' && <GridFluidBreakpoints />}
    {type == 'interactive' && <GridInteractive />}
    {type == 'auto layout' && <GridAutoLayout />}
    {type == 'nested grid' && <GridNested />}
  </Wrapper>
);

description.story = {
  parameters: {
    docs: {
      page: GridDescriptionDocs,
    },
  },
};

description.args = {
  type: 'spacing',
};
