// Vendors
import React from 'react';

// Components
import HomeIcon from '@components/data-display/Icon/HomeIcon';

export const IconSmall: React.FC = () => <HomeIcon fontSize="small" />;

export const IconMedium: React.FC = () => <HomeIcon />;

export const IconLarge: React.FC = () => (
  <HomeIcon fontSize="large" />
);

export const IconCustomSize: React.FC = () => (
  <HomeIcon style={{ fontSize: 40 }} />
);

const IconSize: React.FC = () => (
  <>
    <IconSmall />
    <IconMedium />
    <IconLarge />
    <IconCustomSize />
  </>
);

export default IconSize;
