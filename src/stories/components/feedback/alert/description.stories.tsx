// Vendors
import React, { useEffect } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Alert from '@components/feedback/Alert';
import AlertDescriptionDocs from './description.docs.mdx';
import CheckFilledIcon from '@components/data-display/Icon/CheckFilledIcon';
import AlertIcon from '@components/data-display/Icon/AlertIcon';
import CloseFilledIcon from '@components/data-display/Icon/CloseFilledIcon';
import InfoIcon from '@components/data-display/Icon/InfoIcon';
import { SvgIconProps } from '@material-ui/core';

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
export const description = ({ types, label }) => {
  const [icon, setIcon] = React.useState<{
    Icon: React.ComponentType<SvgIconProps>;
  }>({
    Icon: CheckFilledIcon,
  });

  useEffect(() => {
    if (types === 'error') {
      setIcon({
        Icon: CloseFilledIcon,
      });
    }
    if (types === 'warning') {
      setIcon({
        Icon: AlertIcon,
      });
    }
    if (types === 'info') {
      setIcon({
        Icon: InfoIcon,
      });
    }
    if (types === 'success') {
      setIcon({
        Icon: CheckFilledIcon,
      });
    }
  }, [types]);

  return (
    <Wrapper>
      <Alert
        severity={types}
        className={types === 'general' && 'MuiAlert-standardGeneral'}
        icon={types !== 'general' && <icon.Icon fontSize="small" />}
      >
        {label}
      </Alert>
    </Wrapper>
  );
};

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
