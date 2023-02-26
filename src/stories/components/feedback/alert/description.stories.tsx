// Vendors
import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Alert from '@components/feedback/Alert';
import AlertDescriptionDocs from './description.docs.mdx';

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
  title: 'Components/Feedback/Alert',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    label: { name: 'Label', defaultValue: 'alert', control: 'text' },
    types: {
      name: 'Types',
      control: {
        type: 'select',
        options: ['general', 'error', 'warning', 'info', 'success'],
      },
    },
  },
};
export const description = ({ types, label }) => (
  <Wrapper>
    <Alert severity={types}>{label}</Alert>
  </Wrapper>
);

description.story = {
  parameters: {
    docs: {
      page: AlertDescriptionDocs,
    },
  },
};

description.args = {
  types: 'general',
};
