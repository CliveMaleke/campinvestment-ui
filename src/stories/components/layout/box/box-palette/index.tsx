// Vendors
import React from 'react';

// Components
import Box from '@components/layout/Box';

export const BoxPaletteColor:React.FC = () => (
  <>
    <h3>Color</h3>
    <Box color="#1EAFED">blue50</Box>
  </>
);

export const BoxPaletteBackgroundColor:React.FC = () => (
  <>
    <h3 style={{ marginTop: 20 }}>Background Color</h3>
    <Box bgcolor="#1EAFED" color="#ffffff" p={2}>
      blue50
    </Box>
  </>
);

const BoxPalette:React.FC = () => (
  <>
    <BoxPaletteColor />
    <BoxPaletteBackgroundColor />
  </>
);

export default BoxPalette;