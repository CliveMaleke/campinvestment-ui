// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import BoxDescriptionDocs from './description.docs.mdx';

import BoxBorders from './box-borders';
import BoxDisplay from './box-display';
import BoxFlexbox from './box-flexbox';
import BoxPalette from './box-palette';
import BoxPositions from './box-positions';
import BoxShadows from './box-shadows';
import BoxSizing from './box-sizing';
import BoxSpacing from './box-spacing';
import BoxTypography from './box-typography';

interface ArgBox extends ArgStory {
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
  title: 'Components/Layout/Box',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    type: {
      name: 'Style Functions',
      control: {
        type: 'select',
        options: [
          'borders',
          'display',
          'flexbox',
          'palette',
          'positions',
          'shadows',
          'sizing',
          'spacing',
          'typography',
        ],
      },
    },
  },
} as Meta;

export const description: ArgBox = ({ type }) => (
  <Wrapper>
    {type == 'borders' && <BoxBorders />}
    {type == 'display' && <BoxDisplay />}
    {type == 'flexbox' && <BoxFlexbox />}
    {type == 'palette' && <BoxPalette />}
    {type == 'positions' && <BoxPositions />}
    {type == 'shadows' && <BoxShadows />}
    {type == 'sizing' && <BoxSizing />}
    {type == 'spacing' && <BoxSpacing />}
    {type == 'typography' && <BoxTypography />}
  </Wrapper>
);

description.story = {
  parameters: {
    docs: {
      page: BoxDescriptionDocs,
    },
  },
};

description.args = {
  type: 'borders',
};
