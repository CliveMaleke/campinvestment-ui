// Vendors
import React from 'react';

// Components
import Box from '@components/layout/Box';

const defaultProps = {
  bgcolor: '#cfe8fc',
  mr: 2,
  mb: 1,
  p: 1,
};

export const BoxDisplayInline: React.FC = () => (
  <>
    <h3 style={{ marginBottom: 20 }}>Inline</h3>
    <div style={{ width: '100%' }}>
      <Box display="inline" {...defaultProps}>
        inline
      </Box>
      <Box display="inline" {...defaultProps}>
        inline
      </Box>
    </div>
  </>
);

export const BoxDisplayBlock: React.FC = () => (
  <>
    <h3 style={{ marginBottom: 10, marginTop: 30 }}>Block</h3>
    <div style={{ width: '100%' }}>
      <Box display="block" {...defaultProps} mr={0}>
        block
      </Box>
      <Box display="block" {...defaultProps} mr={0}>
        block
      </Box>
    </div>
  </>
);

export const BoxDisplayHidingElements: React.FC = () => (
  <>
    <h3 style={{ marginBottom: 10, marginTop: 30 }}>Hiding elements</h3>
    <div style={{ width: '100%' }}>
      <Box display={{ xs: 'block', md: 'none' }} {...defaultProps} mr={0}>
        hide on screens wider than md
      </Box>
      <Box display={{ xs: 'none', md: 'block' }} {...defaultProps} mr={0}>
        hide on screens smaller than md
      </Box>
    </div>
  </>
);

export const BoxDisplayPrint: React.FC = () => (
  <>
    <h3 style={{ marginBottom: 10, marginTop: 30 }}>Display in print</h3>
    <div style={{ width: '100%' }}>
      <Box display="block" displayPrint="none" {...defaultProps} mr={0}>
        Screen Only (Hide on print only)
      </Box>
      <Box display="none" displayPrint="block" {...defaultProps} mr={0}>
        Print Only (Hide on screen only)
      </Box>
    </div>
  </>
);

export const BoxDisplayOverflow: React.FC = () => (
  <>
    <h3 style={{ marginBottom: 10, marginTop: 30 }}>Overflow</h3>
    <div style={{ width: 200, whiteSpace: 'nowrap' }}>
      <Box overflow="hidden" {...defaultProps}>
        Overflow Hidden. Overflow Hidden. Overflow Hidden.
      </Box>
      <Box overflow="auto" {...defaultProps}>
        Overflow Auto. Overflow Auto. Overflow Auto.
      </Box>
    </div>
  </>
);

export const BoxDisplayTextOverflow: React.FC = () => (
  <>
    <h3 style={{ marginBottom: 10, marginTop: 30 }}>Text Overflow</h3>
    <div style={{ width: 200, whiteSpace: 'nowrap' }}>
      <Box textOverflow="clip" overflow="hidden" {...defaultProps}>
        Text Overflow Clip. Text Overflow Clip.
      </Box>
      <Box textOverflow="ellipsis" overflow="hidden" {...defaultProps}>
        Text Overflow Ellipsis. Text Overflow Ellipsis.
      </Box>
    </div>
  </>
);

export const BoxDisplayVisibility: React.FC = () => (
  <>
    <h3 style={{ marginBottom: 10, marginTop: 30 }}>Visibility</h3>
    <div style={{ width: '100%' }}>
      <Box visibility="visible" {...defaultProps} mr={0}>
        Visibility Visible
      </Box>
      <Box visibility="hidden" {...defaultProps} mr={0}>
        Visibility Hidden
      </Box>
    </div>
  </>
);

export const BoxDisplayWhitespace: React.FC = () => (
  <>
    <h3 style={{ marginBottom: 10, marginTop: 30 }}>White Space</h3>
    <div style={{ width: 200 }}>
      <Box whiteSpace="nowrap" {...defaultProps}>
        White Space Nowrap
      </Box>
      <Box whiteSpace="nowrap" {...defaultProps}>
        White Space Normal
      </Box>
    </div>
  </>
);

const BoxDisplay: React.FC = () => {
  return (
    <>
      <BoxDisplayInline />
      <BoxDisplayBlock />
      <BoxDisplayHidingElements />
      <BoxDisplayPrint />
      <BoxDisplayOverflow />
      <BoxDisplayTextOverflow />
      <BoxDisplayVisibility />
      <BoxDisplayWhitespace />
    </>
  );
};

export default BoxDisplay;