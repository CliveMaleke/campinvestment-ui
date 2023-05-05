import React from 'react';

// Material UI
import { makeStyles } from '@material-ui/core/styles';

// Components
import Button from '@components/inputs/Button';
import ButtonDescriptionDocs from './description.docs.mdx';
import DeleteIcon from '@components/data-display/Icon/DeleteIcon';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Inputs/Button',
  component: Button,
  parameters: {
    design: { disable: true },
    options: { showPanel: true },
    actions: {
      handles: ['click'],
    },
  },
  argTypes: {
    text: {
      name: 'Text',
      control: 'text',
    },
    variant: {
      name: 'Variant',
      control: {
        type: 'select',
        options: ['contained', 'text', 'outlined'],
      },
    },
    color: {
      name: 'Color',
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    size: {
      name: 'Size',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'extra large', '2x extra large'],
      },
    },
    darkMode: {
      name: 'Dark Mode',
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      defaultValue: false,
    },
    disableRipple: {
      name: 'Enable Ripple',
      control: 'boolean',
      defaultValue: false,
    },
    showIcon: {
      name: 'Show Icon',
      control: 'boolean',
      defaultValue: false,
    },
    iconPosition: {
      name: 'Icon Position',
      control: { type: 'radio' },
      options: ['start', 'end'],
      if: { arg: 'showIcon' },
    },
  },
};

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

export const description = ({
  color,
  disabled,
  disableRipple,
  showIcon,
  size,
  darkMode,
  iconPosition,
  text,
  variant,
}) => {
  const props = {
    color,
    disabled,
    disableRipple: !disableRipple,
    size,
    variant,
    ...(showIcon && iconPosition === 'start' && { startIcon: <DeleteIcon /> }),
    ...(showIcon && iconPosition === 'end' && { endIcon: <DeleteIcon /> }),
  };

  return (
    <Wrapper>
      {darkMode ? (
        <div className="theme-dark" style={{ margin: 0 }}>
          <Button
            className={`${
              size === 'extra large' ? 'MuiButton-sizeExtraLarge' : ''
            } ${size === '2x extra large' ? 'MuiButton-sizeExtraLarge2x' : ''}`}
            {...props}
            style={{ margin: 0 }}
          >
            {text}
          </Button>
        </div>
      ) : (
        <Button
          className={`${
            size === 'extra large' ? 'MuiButton-sizeExtraLarge' : ''
          } ${size === '2x extra large' ? 'MuiButton-sizeExtraLarge2x' : ''}`}
          {...props}
          style={{ margin: 0 }}
        >
          {text}
        </Button>
      )}
    </Wrapper>
  );
};

description.story = {
  parameters: {
    docs: {
      page: ButtonDescriptionDocs,
    },
  },
};

description.args = {
  text: 'Button',
  variant: 'contained',
  color: 'primary',
  size: 'medium',
  darkMode: false,
  disabled: false,
  disableRipple: false,
  showIcon: false,
  iconPosition: 'start',
};
