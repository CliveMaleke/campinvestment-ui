// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import Skeleton from '@components/feedback/Skeleton';
import PaperDescriptionDocs from './description.docs.mdx';

interface ArgPaper extends ArgStory {
  ({ variant, animation }: { variant: string; animation: any }): JSX.Element;
  args: {
    variant: string;
    animation: any;
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
  title: 'Components/Feedback/Skeleton',
  parameters: {
    design: { disable: true },
    options: { showPanel: true },
  },
  argTypes: {
    variant: {
      name: 'Variant',
      control: {
        type: 'select',
        options: ['text', 'circle', 'rect'],
      },
    },
    animation: {
      name: 'Animation',
      control: {
        type: 'select',
        options: ['pulse', 'wave', 'no animation'],
      },
    },
  },
} as Meta;
export const description: ArgPaper = ({ variant, animation }) => {
  const selectVariant = () => {
    switch (variant) {
      case 'text':
        return <Skeleton animation={animation !== 'no animation' ? animation : false} variant="text" />;
      case 'circle':
        return <Skeleton animation={animation !== 'no animation' ? animation : false} variant="circle" width={40} height={40} />;
      case 'rect':
        return <Skeleton animation={animation !== 'no animation' ? animation : false} variant="rect" width={210} height={118} />;
    }
  };
  return (
    <Wrapper>
      <div style={{ maxWidth: 210 }}>{selectVariant()}</div>
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
  variant: 'text',
  animation: 'pulse'
};
