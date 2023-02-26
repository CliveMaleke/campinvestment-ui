// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AlertTypes from './alert-types';
import AlertTypesDocs from './alert-types/docs.mdx';
import AlertDescriptions from './alert-descriptions';
import AlertDescriptionsDocs from './alert-descriptions/docs.mdx';
import AlertActions from './alert-actions';
import AlertActionsDocs from './alert-actions/docs.mdx';
import AlertTransitions from './alert-transitions';
import AlertTransitionsDocs from './alert-transitions/docs.mdx';
import AlertVariantsOutlined from './alert-variants-outlined';
import AlertVariantsOutlinedDocs from './alert-variants-outlined/docs.mdx';
import AlertVariantsFilled from './alert-variants-filled';
import AlertVariantsFilledDocs from './alert-variants-filled/docs.mdx';
import AlertColors from './alert-colors';
import AlertColorsDocs from './alert-colors/docs.mdx';

// Components

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Wrapper = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Feedback/Alert/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const types = () => (
  <Wrapper>
    <AlertTypes />
  </Wrapper>
);
types.story = {
  parameters: {
    docs: {
      page: AlertTypesDocs,
    },
  },
};

export const descriptions = () => (
  <Wrapper>
    <AlertDescriptions />
  </Wrapper>
);
descriptions.story = {
  parameters: {
    docs: {
      page: AlertDescriptionsDocs,
    },
  },
};

export const actions = () => (
  <Wrapper>
    <AlertActions />
  </Wrapper>
);
actions.story = {
  parameters: {
    docs: {
      page: AlertActionsDocs,
    },
  },
};

export const transitions = () => (
  <Wrapper>
    <AlertTransitions />
  </Wrapper>
);
transitions.story = {
  parameters: {
    docs: {
      page: AlertTransitionsDocs,
    },
  },
};

export const variantsOutlined = () => (
  <Wrapper>
    <AlertVariantsOutlined />
  </Wrapper>
);
variantsOutlined.story = {
  parameters: {
    docs: {
      page: AlertVariantsOutlinedDocs,
    },
  },
};

export const variantsFilled = () => (
  <Wrapper>
    <AlertVariantsFilled />
  </Wrapper>
);
variantsFilled.story = {
  parameters: {
    docs: {
      page: AlertVariantsFilledDocs,
    },
  },
};

export const colors = () => (
  <Wrapper>
    <AlertColors />
  </Wrapper>
);
colors.story = {
  parameters: {
    docs: {
      page: AlertColorsDocs,
    },
  },
};


