// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import Paper from '@components/surfaces/Paper';
import PaperDescriptionDocs from './description.docs.mdx';
import Typography from '@components/data-display/Typography';

interface ArgPaper extends ArgStory {
  ({ elevation, variant, square }: { elevation: number; variant: any, square: boolean }): JSX.Element;
  args: {
    elevation: number;
    variant: any;
    square: boolean;
  };
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  rootPaper: {
    '& > *': {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    '& > div': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

function generateArrayElevation() {
  let arr = [];
  for (let i = 0; i <= 24; i++) {
    arr.push(i);
  }
  return arr;
}

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Surfaces/Paper',
  parameters: {
    design: { disable: true },
    options: { showPanel: true },
  },
  argTypes: {
    elevation: {
      name: 'Elevation',
      control: {
        type: 'select',
        options: generateArrayElevation(),
      },
    },
    variant: {
      name: 'Variant',
      control: {
        type: 'select',
        options: ['elevation', 'outlined'],
      },
    },
    square: {
      name: 'Square',
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;
export const description: ArgPaper = ({ elevation, variant, square }) => {
  const classes = useStyles();

  return (
    <Wrapper>
      <div className={classes.rootPaper}>
        <Paper elevation={elevation} variant={variant} square={!square}>
          <Typography variant="caption" captionScale="small">
            Elevation {elevation}
          </Typography>
        </Paper>
      </div>
    </Wrapper>
  );
};

description.story = {
  parameters: {
    docs: {
      page: PaperDescriptionDocs,
    },
  },
};

description.args = {
  elevation: 0,
  variant: 'elevation',
  square: false,
};
