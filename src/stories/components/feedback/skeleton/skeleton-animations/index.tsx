// Vendors
import React from 'react';

// Components
import Skeleton from '@components/feedback/Skeleton';

export const SkeletonPulse: React.FC = () => <Skeleton />;
export const SkeletonFalse: React.FC = () => <Skeleton animation={false} />;
export const SkeletonWave: React.FC = () => <Skeleton animation="wave" />;

const SkeletonAnimations: React.FC = () => {
  return (
    <div style={{ maxWidth: 210 }}>
      <SkeletonPulse />
      <br />
      <SkeletonFalse />
      <br />
      <SkeletonWave />
    </div>
  );
};

export default SkeletonAnimations;
