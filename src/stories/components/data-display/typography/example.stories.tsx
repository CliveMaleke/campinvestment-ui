// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import TypographyHeading from './typography-heading';
import TypographyHeadingDocs from './typography-heading/docs.mdx';

import TypographyBody from './typography-body';
import TypographyBodyDocs from './typography-body/docs.mdx';

import TypographyCaption from './typography-caption';
import TypographyCaptionDocs from './typography-caption/docs.mdx';

import TypographyOverline from './typography-overline';
import TypographyOverlineDocs from './typography-overline/docs.mdx';

import TypographyNumeric from './typography-numeric';
import TypographyNumericDocs from './typography-numeric/docs.mdx';

import TypographyButton from './typography-button';
import TypographyButtonDocs from './typography-button/docs.mdx';

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
  title: 'Components/Data Display/Typography/Example',
  parameters: {
    design: { disable: true },
    options: { showPanel: false },
  },
};

export const heading = () => (
  <Wrapper>
    <TypographyHeading />
  </Wrapper>
);
heading.story = {
  parameters: {
    docs: {
      page: TypographyHeadingDocs,
    },
  },
};

export const body = () => (
  <Wrapper>
    <TypographyBody />
  </Wrapper>
);
body.story = {
  parameters: {
    docs: {
      page: TypographyBodyDocs,
    },
  },
};

export const caption = () => (
  <Wrapper>
    <TypographyCaption />
  </Wrapper>
);
caption.story = {
  parameters: {
    docs: {
      page: TypographyCaptionDocs,
    },
  },
};

export const overline = () => (
  <Wrapper>
    <TypographyOverline />
  </Wrapper>
);
overline.story = {
  parameters: {
    docs: {
      page: TypographyOverlineDocs,
    },
  },
};

export const numeric = () => (
  <Wrapper>
    <TypographyNumeric />
  </Wrapper>
);
numeric.story = {
  parameters: {
    docs: {
      page: TypographyNumericDocs,
    },
  },
};

export const button = () => (
  <Wrapper>
    <TypographyButton />
  </Wrapper>
);
button.story = {
  parameters: {
    docs: {
      page: TypographyButtonDocs,
    },
  },
};
