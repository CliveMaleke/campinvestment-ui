// Vendors
import React, { useEffect, useMemo } from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { SvgIconProps } from '@material-ui/core';

// Components
import Alert from '@components/feedback/Alert';
import AlertDescriptionDocs from './description.docs.mdx';
import CheckFilledIcon from '@components/data-display/Icon/CheckFilledIcon';
import AlertIcon from '@components/data-display/Icon/AlertIcon';
import CloseFilledIcon from '@components/data-display/Icon/CloseFilledIcon';
import InfoIcon from '@components/data-display/Icon/InfoIcon';
import CloseIcon from '@components/data-display/Icon/CloseIcon';
import AlertTitle from '@components/lab/AlertTitle';
import Button from '@components/inputs/Button';

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
    variants: {
      name: 'Variants',
      control: {
        type: 'radio',
        options: ['Default', 'Snackbar', 'Toast'],
      },
    },
    types: {
      name: 'Types',
      control: {
        type: 'select',
        options: ['general', 'error', 'warning', 'info', 'success'],
      },
      if: { arg: 'variants', neq: 'Default' },
    },
    label: {
      name: 'Label',
      defaultValue: 'alert',
      control: 'text',
      if: { arg: 'variants', neq: 'Snackbar' },
    },
    title: {
      name: 'Title',
      control: 'text',
      if: { arg: 'variants', eq: 'Snackbar' },
    },
    body: {
      name: 'Body',
      control: 'text',
      if: { arg: 'variants', eq: 'Snackbar' },
    },
  },
};
export const description = ({ variants, types, label, title, body }) => {
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

  if (variants === 'Snackbar') {
    return (
      <Wrapper>
        <Alert
          severity={types}
          className={`MuiAlert-snackbar ${
            types === 'general' && 'MuiAlert-standardGeneral'
          }`}
          action={
            <span
              aria-label="close"
              color="inherit"
              onClick={() => alert('this will close the snackbar')}
            >
              <CloseIcon fontSize="small" />
            </span>
          }
          icon={types !== 'general' && <icon.Icon />}
        >
          <AlertTitle className="MuiAlert-snackbarTitle">{title}</AlertTitle>
          <p className="MuiAlert-description">{body}</p>
          <div className="MuiButtonWrapper-root">
            <Button
              variant="text"
              onClick={() => {
                window.open(
                  'https://develop--63b2d35155965648145b7f9e.chromatic.com/?path=/docs/components-data-display-typography-example--button',
                  '_blank',
                );
              }}
            >
              Button 1
            </Button>
            <Button
              variant="text"
              onClick={() => {
                window.open(
                  'https://develop--63b2d35155965648145b7f9e.chromatic.com/?path=/docs/components-data-display-typography-example--button',
                  '_blank',
                );
              }}
            >
              Button 2
            </Button>
          </div>
        </Alert>
      </Wrapper>
    );
  }

  if (variants === 'Toast') {
    return (
      <Wrapper>
        <Alert
          severity={types}
          className={`MuiAlert-toast ${
            types === 'general' && 'MuiAlert-standardGeneral'
          }`}
          icon={types !== 'general' && <icon.Icon fontSize="small" />}
        >
          {label}
        </Alert>
      </Wrapper>
    );
  }

  if (variants === 'Default') {
    return (
      <Wrapper>
        <Alert className="MuiAlert-alertDefault" icon={<InfoIcon />}>
          {label}
        </Alert>
      </Wrapper>
    );
  }
};

description.story = {
  parameters: {
    docs: {
      page: AlertDescriptionDocs,
    },
  },
};

description.args = {
  variants: 'Snackbar',
  label: 'test label',
  types: 'general',
  title: 'title',
  body: 'body',
};
