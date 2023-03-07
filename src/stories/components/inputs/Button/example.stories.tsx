// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import ButtonContained from './button-contained';
import ButtonContainedDocs from './button-contained/docs.mdx';

import ButtonOutlined from './button-outlined';
import ButtonOutlinedDocs from './button-outlined/docs.mdx';

import ButtonText from './button-text';
import ButtonTextDocs from './button-text/docs.mdx';

import ButtonWithIcon from './button-with-icon';
import ButtonWithIconDocs from './button-with-icon/docs.mdx';

import IconButton from './icon-button';
import IconButtonDocs from './icon-button/docs.mdx';

import FullWidth from './full-width';
import FullWidthDocs from './full-width/docs.mdx';

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
  title: 'Components/Inputs/Button/Example',
  parameters: {
    design: { disable: true },
    options: { showPanel: false },
  },
};

export const contained = () => (
  <Wrapper>
    <ButtonContained />
  </Wrapper>
);
contained.story = {
  parameters: {
    docs: {
      page: ButtonContainedDocs,
    },
  },
};

export const outlined = () => (
  <Wrapper>
    <ButtonOutlined />
  </Wrapper>
);
outlined.story = {
  parameters: {
    docs: {
      page: ButtonOutlinedDocs,
    },
  },
};

export const text = () => (
  <Wrapper>
    <ButtonText />
  </Wrapper>
);
text.story = {
  parameters: {
    docs: {
      page: ButtonTextDocs,
    },
  },
};

export const buttonWithIcon = () => (
  <Wrapper>
    <ButtonWithIcon />
  </Wrapper>
);
buttonWithIcon.story = {
  parameters: {
    docs: {
      page: ButtonWithIconDocs,
    },
  },
};

export const iconButton = () => (
  <Wrapper>
    <IconButton />
  </Wrapper>
);
iconButton.story = {
  parameters: {
    docs: {
      page: IconButtonDocs,
    },
  },
};

export const fullWidth = () => (
  <Wrapper>
    <FullWidth />
  </Wrapper>
);
fullWidth.story = {
  parameters: {
    docs: {
      page: FullWidthDocs,
    },
  },
};