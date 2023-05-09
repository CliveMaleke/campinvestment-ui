// Vendors
import React from 'react';

// Components
import Skeleton from '@components/feedback/Skeleton';

export const SkeletonText: React.FC = () => <Skeleton variant="text" />;
export const SkeletonCircle: React.FC = () => (
  <Skeleton variant="circle" width={40} height={40} />
);
export const SkeletonRect: React.FC = () => (
  <Skeleton variant="rect" width={210} height={118} />
);

const SkeletonVariants: React.FC = () => {
  return (
    <div style={{ maxWidth: 210 }}>
      <SkeletonText />
      <br />
      <SkeletonCircle />
      <br />
      <SkeletonRect />
    </div>
  );
};

export default SkeletonVariants;
