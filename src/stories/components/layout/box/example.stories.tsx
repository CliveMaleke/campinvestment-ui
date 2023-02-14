// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import BoxBorders from './box-borders';
import BoxBordersDocs from './box-borders/docs.mdx';

import BoxDisplay from './box-display';
import BoxDisplayDocs from './box-display/docs.mdx';

import BoxFlexbox from './box-flexbox';
import BoxFlexboxDocs from './box-flexbox/docs.mdx';

import BoxPalette from './box-palette';
import BoxPaletteDocs from './box-palette/docs.mdx';

import BoxPositions from './box-positions';
import BoxPositionsDocs from './box-positions/docs.mdx';

import BoxShadows from './box-shadows';
import BoxShadowsDocs from './box-shadows/docs.mdx';

import BoxSizing from './box-sizing';
import BoxSizingDocs from './box-sizing/docs.mdx';

import BoxSpacing from './box-spacing';
import BoxSpacingDocs from './box-spacing/docs.mdx';

import BoxTypography from './box-typography';
import BoxTypographyDocs from './box-typography/docs.mdx';

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
  title: 'Components/Layout/Box/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
} as Meta;

export const borders: ArgStory = () => (
  <Wrapper>
    <BoxBorders />
  </Wrapper>
);
borders.story = {
  parameters: {
    docs: {
      page: BoxBordersDocs,
    },
  },
};

export const display: ArgStory = () => (
  <Wrapper>
    <BoxDisplay />
  </Wrapper>
);
display.story = {
  parameters: {
    docs: {
      page: BoxDisplayDocs,
    },
  },
};

export const flexbox: ArgStory = () => (
  <Wrapper>
    <BoxFlexbox />
  </Wrapper>
);
flexbox.story = {
  parameters: {
    docs: {
      page: BoxFlexboxDocs,
    },
  },
};

export const palette: ArgStory = () => (
  <Wrapper>
    <BoxPalette />
  </Wrapper>
);
palette.story = {
  parameters: {
    docs: {
      page: BoxPaletteDocs,
    },
  },
};

export const positions: ArgStory = () => (
  <Wrapper>
    <BoxPositions />
  </Wrapper>
);
positions.story = {
  parameters: {
    docs: {
      page: BoxPositionsDocs,
    },
  },
};

export const shadows: ArgStory = () => (
  <Wrapper>
    <BoxShadows />
  </Wrapper>
);
shadows.story = {
  parameters: {
    docs: {
      page: BoxShadowsDocs,
    },
  },
};

export const sizing: ArgStory = () => (
  <Wrapper>
    <BoxSizing />
  </Wrapper>
);
sizing.story = {
  parameters: {
    docs: {
      page: BoxSizingDocs,
    },
  },
};

export const spacing: ArgStory = () => (
  <Wrapper>
    <BoxSpacing />
  </Wrapper>
);
spacing.story = {
  parameters: {
    docs: {
      page: BoxSpacingDocs,
    },
  },
};

export const typography: ArgStory = () => (
  <Wrapper>
    <BoxTypography />
  </Wrapper>
);
typography.story = {
  parameters: {
    docs: {
      page: BoxTypographyDocs,
    },
  },
};
