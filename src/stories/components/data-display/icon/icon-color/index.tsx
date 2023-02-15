// Vendors
import React from 'react';

// Components
import HomeIcon from '@components/data-display/Icon/HomeIcon';

export const IconPrimary: React.FC = () => <HomeIcon color="primary" />;

export const IconSecondary: React.FC = () => <HomeIcon color="secondary" />;

export const IconInfo: React.FC = () => (
  <HomeIcon style={{ color: '#1EAFED' }} />
);

export const IconSuccess: React.FC = () => (
  <HomeIcon style={{ color: '#16D091' }} />
);

export const IconWarning: React.FC = () => (
  <HomeIcon style={{ color: '#FCAC19' }} />
);

export const IconDanger: React.FC = () => (
  <HomeIcon style={{ color: '#FF5374' }} />
);

export const IconDisabled: React.FC = () => (
  <HomeIcon color="disabled" />
);

const IconColor: React.FC = () => (
  <>
    <IconPrimary />
    <IconSecondary />
    <IconInfo />
    <IconSuccess />
    <IconWarning />
    <IconDanger />
    <IconDisabled />
  </>
);

export default IconColor;
