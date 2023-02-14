// Vendors
import React from 'react';

// Components
import Container from '@components/layout/Container';

export const ContainerSizeXL: React.FC = () => (
  <>
    <h3>Extra Large</h3>
    <Container maxWidth="xl" disableGutters>
      <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
    </Container>
  </>
);

export const ContainerSizeLG: React.FC = () => (
  <>
    <h3 style={{ marginTop: 30 }}>Large</h3>
    <Container disableGutters>
      <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
    </Container>
  </>
);

export const ContainerSizeMD: React.FC = () => (
  <>
    <h3 style={{ marginTop: 30 }}>Medium</h3>
    <Container maxWidth="md" disableGutters>
      <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
    </Container>
  </>
);

export const ContainerSizeSM: React.FC = () => (
  <>
    <h3 style={{ marginTop: 30 }}>Small</h3>
    <Container maxWidth="sm" disableGutters>
      <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
    </Container>
  </>
);

export const ContainerSizeXS: React.FC = () => (
  <>
    <h3 style={{ marginTop: 30 }}>Extra Small</h3>
    <Container maxWidth="xs" disableGutters>
      <div style={{ backgroundColor: '#cfe8fc', height: '30vh' }}></div>
    </Container>
  </>
);

const ContainerSizes: React.FC = () => (
  <>
    <ContainerSizeXL />
    <ContainerSizeLG />
    <ContainerSizeMD />
    <ContainerSizeSM />
    <ContainerSizeXS />
  </>
);

export default ContainerSizes;