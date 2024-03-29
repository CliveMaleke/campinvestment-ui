// Vendors
import React from 'react';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';

// Components
import Hidden from '@components/layout/Hidden';
import Box from '@components/layout/Box';

interface DefaultProps {
  bgcolor: string;
  p: number;
  mb: number;
}

const defaultProps: DefaultProps = {
  bgcolor: '#cfe8fc',
  p: 2,
  mb: 2,
};

const HiddenBreakpointOnly: React.FC<WithWidth> = (props) => {
  const { width } = props;
  return (
    <>
      <p>
        Current width: <b>{width}</b>
      </p>
      <Hidden only="xs">
        <Box {...defaultProps}>Hidden on xs</Box>
      </Hidden>
      <Hidden only="sm">
        <Box {...defaultProps}>Hidden on sm</Box>
      </Hidden>
      <Hidden only="md">
        <Box {...defaultProps}>Hidden on md</Box>
      </Hidden>
      <Hidden only="lg">
        <Box {...defaultProps}>Hidden on lg</Box>
      </Hidden>
      <Hidden only="xl">
        <Box {...defaultProps}>Hidden on xl</Box>
      </Hidden>
      <Hidden only={['sm', 'md']}>
        <Box {...defaultProps}>Hidden on sm and md</Box>
      </Hidden>
    </>
  );
};

export default withWidth()(HiddenBreakpointOnly);