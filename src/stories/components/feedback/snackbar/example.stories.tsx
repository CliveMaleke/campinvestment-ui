// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import SnackbarSimples from './snackbar-simples';
import SnackbarSimplesDocs from './snackbar-simples/docs.mdx';
import SnackbarCustomizations from './snackbar-customizations';
import SnackbarCustomizationsDocs from './snackbar-customizations/docs.mdx';
import SnackbarPositions from './snackbar-positions';
import SnackbarPositionsDocs from './snackbar-positions/docs.mdx';
import SnackbarMessageLengthVariations from './snackbar-message-length-variations';
import SnackbarMessageLengthVariationsDocs from './snackbar-message-length-variations/docs.mdx';
import SnackbarTransitionsConsecutive from './snackbar-transitions-consecutive';
import SnackbarTransitionsConsecutiveDocs from './snackbar-transitions-consecutive/docs.mdx';
import SnackbarTransitionsFloating from './snackbar-transitions-floating';
import SnackbarTransitionsFloatingDocs from './snackbar-transitions-floating/docs.mdx';
import SnackbarTransitionsChange from './snackbar-transitions-change';
import SnackbarTransitionsChangeDocs from './snackbar-transitions-change/docs.mdx';
import SnackbarTransitionsControlSlideDirection from './snackbar-transitions-control-slide-direction';
import SnackbarTransitionsControlSlideDirectionDocs from './snackbar-transitions-control-slide-direction/docs.mdx';

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
  title: 'Components/Feedback/Snackbar/Example',
  parameters: {
    design: { disabled: true },
    options: { showPanel: false },
  },
};

export const simples = () => (
  <Wrapper>
    <SnackbarSimples />
  </Wrapper>
);
simples.story = {
  parameters: {
    docs: {
      page: SnackbarSimplesDocs,
    },
  },
};

export const customizations = () => (
  <Wrapper>
    <SnackbarCustomizations />
  </Wrapper>
);
customizations.story = {
  parameters: {
    docs: {
      page: SnackbarCustomizationsDocs,
    },
  },
};

export const positions = () => (
  <Wrapper>
    <SnackbarPositions />
  </Wrapper>
);
positions.story = {
  parameters: {
    docs: {
      page: SnackbarPositionsDocs,
    },
  },
};

export const variations = () => (
  <Wrapper>
    <SnackbarMessageLengthVariations />
  </Wrapper>
);
variations.story = {
  parameters: {
    docs: {
      page: SnackbarMessageLengthVariationsDocs,
    },
  },
};

export const transitionsConsecutive = () => (
  <Wrapper>
    <SnackbarTransitionsConsecutive />
  </Wrapper>
);
transitionsConsecutive.story = {
  parameters: {
    docs: {
      page: SnackbarTransitionsConsecutiveDocs,
    },
  },
};

export const transitionsFloating = () => (
  <Wrapper>
    <SnackbarTransitionsFloating />
  </Wrapper>
);
transitionsFloating.story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      page: SnackbarTransitionsFloatingDocs,
    },
  },
};

export const transitionsChange = () => (
  <Wrapper>
    <SnackbarTransitionsChange />
  </Wrapper>
);
transitionsChange.story = {
  parameters: {
    docs: {
      page: SnackbarTransitionsChangeDocs,
    },
  },
};

export const transitionsControlSlideDirection = () => (
  <Wrapper>
    <SnackbarTransitionsControlSlideDirection />
  </Wrapper>
);
transitionsControlSlideDirection.story = {
  parameters: {
    docs: {
      page: SnackbarTransitionsControlSlideDirectionDocs,
    },
  },
};
