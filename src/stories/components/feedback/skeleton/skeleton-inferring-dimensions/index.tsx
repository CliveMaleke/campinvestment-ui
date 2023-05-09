// Vendors
import React from 'react';

// Components
import Typography from '@components/data-display/Typography';
import Skeleton from '@components/feedback/Skeleton';
import Grid from '@components/layout/Grid';

interface StringArray extends Array<string> {}

const variants: StringArray = ['h1', 'h3', 'body1', 'caption'];

function TypographyDemo(props: any) {
  const { loading = false } = props;

  return (
    <div style={{ marginRight: 20 }}>
      {variants.map((variant) => (
        <Typography component="div" key={variant} variant={variant}>
          {loading ? <Skeleton /> : variant}
        </Typography>
      ))}
    </div>
  );
}

const SkeletonAnimations: React.FC = () => (
  <Grid container>
    <Grid item xs>
      <TypographyDemo loading />
    </Grid>
    <Grid item xs>
      <TypographyDemo />
    </Grid>
  </Grid>
);

export default SkeletonAnimations;
