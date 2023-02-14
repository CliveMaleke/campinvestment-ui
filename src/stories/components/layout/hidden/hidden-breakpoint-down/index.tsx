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

const HiddenBreakpointDown: React.FC<WithWidth> = (props) => {
  const { width } = props;
  return (
    <>
      <p>
        Current width: <b>{width}</b>
      </p>
      <Hidden xsDown>
        <Box {...defaultProps}>xsDown</Box>
      </Hidden>
      <Hidden smDown>
        <Box {...defaultProps}>smDown</Box>
      </Hidden>
      <Hidden mdDown>
        <Box {...defaultProps}>mdDown</Box>
      </Hidden>
      <Hidden lgDown>
        <Box {...defaultProps}>lgDown</Box>
      </Hidden>
      <Hidden xlDown>
        <Box {...defaultProps}>xlDown</Box>
      </Hidden>
    </>
  );
};

export default withWidth()(HiddenBreakpointDown);