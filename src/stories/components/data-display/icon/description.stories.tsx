// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import HomeIcon from '@components/data-display/Icon/HomeIcon';
import IconDescriptionDocs from './description.docs.mdx';

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Data Display/Icons',
  parameters: {
    design: { disabled: true },
    options: { showPanel: true },
  },
  argTypes: {
    color: {
      name: 'Color',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'info',
          'success',
          'warning',
          'danger',
          'disabled',
        ],
      },
    },
    size: {
      name: 'Size',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    customEnable: {
      name: 'Custom Enable',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    customColor: {
      name: 'Custom Color',
      control: { type: 'color' },
    },
    customSize: {
      name: 'Custom Size',
      control: { type: 'range', min: 1, max: 100, step: 1 },
    },
  },
} as Meta;

export const description = ({
  color,
  size,
  customEnable,
  customColor,
  customSize,
}) => {
  const renderDescription = (colorType: string) => {
    switch (colorType) {
      case 'info':
        return (
          <HomeIcon
            style={{
              color: '#1EAFED',
            }}
            fontSize={size}
          />
        );
      case 'success':
        return (
          <HomeIcon
            style={{
              color: '#16D091',
            }}
            fontSize={size}
          />
        );
      case 'warning':
        return (
          <HomeIcon
            style={{
              color: '#FCAC19',
            }}
            fontSize={size}
          />
        );
      case 'danger':
        return (
          <HomeIcon
            style={{
              color: '#FF5374',
            }}
            fontSize={size}
          />
        );
      default:
        return <HomeIcon color={color} fontSize={size} />;
    }
  };
  const renderDescriptionCustom = () => (
    <HomeIcon
      style={{
        color: customColor,
        fontSize: customSize,
      }}
    />
  );
  return (
    <Wrapper>
      {customEnable ? renderDescriptionCustom() : renderDescription(color)}
    </Wrapper>
  );
};

description.story = {
  parameters: {
    docs: {
      page: IconDescriptionDocs,
    },
  },
};

description.args = {
  color: 'primary',
  size: 'medium',
  customEnable: false,
  customColor: '#272A32',
  customSize: 1,
};
