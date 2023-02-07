// Vendors
import React from 'react';
import withWidth, { WithWidth } from '@material-ui/core/withWidth';

// Components
import Hidden from '../../../../../components/layout/Hidden';
import Box from '../../../../../components/layout/Box';

const defaultProps = {
  bgcolor: '#cfe8fc',
  p: 2,
  mb: 2,
};

const HiddenBreakpointUp = (props: WithWidth) => {
  const { width } = props;
  return (
    <>
      <p>
        Current width: <b>{width}</b>
      </p>
      <Hidden xsUp>
        <Box {...defaultProps}>xsUp</Box>
      </Hidden>
      <Hidden smUp>
        <Box {...defaultProps}>smUp</Box>
      </Hidden>
      <Hidden mdUp>
        <Box {...defaultProps}>mdUp</Box>
      </Hidden>
      <Hidden lgUp>
        <Box {...defaultProps}>lgUp</Box>
      </Hidden>
      <Hidden xlUp>
        <Box {...defaultProps}>xlUp</Box>
      </Hidden>
    </>
  );
};

export default withWidth()(HiddenBreakpointUp);