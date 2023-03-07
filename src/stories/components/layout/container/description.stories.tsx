// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import Container from '../../../../components/layout/Container';
import ContainerDescriptionDocs from './description.docs.mdx';

interface ArgContainer extends ArgStory {
  ({ type, size }: { type: string, size: any }): JSX.Element;
  args: {
    type: string;
    size: any;
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
  title: 'Components/Layout/Container',
  parameters: {
    design: { disable: true },
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['fluid', 'fixed'],
      },
    },
    size: {
      name: 'Size',
      control: {
        type: 'select',
        options: ['xl', 'lg', 'md', 'sm', 'xs'],
      },
    },
  },
} as Meta;
export const description: ArgContainer = ({ type, size }) => (
  <Wrapper>
    <Container fixed={type == 'fixed'} maxWidth={size}>
      <div style={{ backgroundColor: '#cfe8fc', height: '70vh' }}></div>
    </Container>
  </Wrapper>
);

description.story = {
  parameters: {
    docs: {
      page: ContainerDescriptionDocs,
    },
  },
};

description.args = {
  type: 'fluid',
  size: 'md',
};