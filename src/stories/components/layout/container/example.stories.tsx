// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import ContainerTypes from './container-types';
import ContainerTypesDocs from './container-types/docs.mdx';

import ContainerSizes from './container-sizes';
import ContainerSizesDocs from './container-sizes/docs.mdx';

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
  title: 'Components/Layout/Container/Example',
  parameters: {
    design: { disable: true },
    options: { showPanel: false },
  },
} as Meta;

export const types: ArgStory = () => (
  <Wrapper>
    <ContainerTypes />
  </Wrapper>
);
types.story = {
  parameters: {
    docs: {
      page: ContainerTypesDocs,
    },
  },
};

export const sizes: ArgStory = () => (
  <Wrapper>
    <ContainerSizes />
  </Wrapper>
);
sizes.story = {
  parameters: {
    docs: {
      page: ContainerSizesDocs,
    },
  },
};