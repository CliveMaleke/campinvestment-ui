// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import IconHome from '@components/data-display/Icon/HomeIcon';
import IconDescriptionDocs from './description.docs.mdx';

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Wrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Data Display/Icons',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
} as Meta;

export const description: ArgStory = () => (
  <Wrapper>
    <IconHome />
  </Wrapper>
);

description.story = {
  parameters: {
    docs: {
      page: IconDescriptionDocs,
    },
  },
};