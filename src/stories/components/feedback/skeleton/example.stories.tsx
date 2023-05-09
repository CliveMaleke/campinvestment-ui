// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import SkeletonVariants from './skeleton-variants';
import SkeletonVariantsDocs from './skeleton-variants/docs.mdx';

import SkeletonAnimations from './skeleton-animations';
import SkeletonAnimationsDocs from './skeleton-animations/docs.mdx';

import SkeletonInferringDimensions from './skeleton-inferring-dimensions';
import SkeletonInferringDimensionsDocs from './skeleton-inferring-dimensions/docs.mdx';

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
  title: 'Components/Feedback/Skeleton/Example',
  parameters: {
    design: { disable: true },
    options: { showPanel: false },
  },
} as Meta;

export const variants: ArgStory = () => (
  <Wrapper>
    <SkeletonVariants />
  </Wrapper>
);
variants.story = {
  parameters: {
    docs: {
      page: SkeletonVariantsDocs,
    },
  },
};

export const animations: ArgStory = () => (
  <Wrapper>
    <SkeletonAnimations />
  </Wrapper>
);
animations.story = {
  parameters: {
    docs: {
      page: SkeletonAnimationsDocs,
    },
  },
};

export const inferringDimensions: ArgStory = () => (
  <Wrapper>
    <SkeletonInferringDimensions />
  </Wrapper>
);
inferringDimensions.story = {
  parameters: {
    docs: {
      page: SkeletonInferringDimensionsDocs,
    },
  },
};