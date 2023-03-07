// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

// Components
import Typography from '@components/data-display/Typography';
import TypographyDescriptionDocs from './description.docs.mdx';

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
  title: 'Components/Data Display/Typography',
  parameters: {
    design: { disable: true },
    options: { showPanel: true },
  },
  argTypes: {
    headingVariant: {
      name: 'Variant',
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
      table: {
        category: 'Heading',
      },
    },
    headingType: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['medium', 'semibold', 'bold'],
      },
      table: {
        category: 'Heading',
      },
    },
    headingColor: {
      name: 'Color',
      control: {
        type: 'select',
        options: ['initial', 'primary', 'secondary'],
      },
      table: {
        category: 'Heading',
      },
    },
    bodyScale: {
      name: 'Scale',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'extralarge'],
      },
      table: {
        category: 'Body',
      },
    },
    bodyType: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['regular', 'medium', 'semibold'],
      },
      table: {
        category: 'Body',
      },
    },
    bodyColor: {
      name: 'Color',
      control: {
        type: 'select',
        options: ['initial', 'primary', 'secondary'],
      },
      table: {
        category: 'Body',
      },
    },
    bodyLink: {
      name: 'Link',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Body',
      },
    },
    captionScale: {
      name: 'Scale',
      control: {
        type: 'select',
        options: ['extrasmall', 'small', 'medium', 'large', 'extralarge'],
      },
      table: {
        category: 'Caption',
      },
    },
    captionType: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['regular', 'medium', 'semibold'],
      },
      table: {
        category: 'Caption',
      },
    },
    captionColor: {
      name: 'Color',
      control: {
        type: 'select',
        options: ['initial', 'primary', 'secondary'],
      },
      table: {
        category: 'Caption',
      },
    },
    captionLink: {
      name: 'Link',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Caption',
      },
    },
    overlineScale: {
      name: 'Scale',
      control: {
        type: 'select',
        options: ['extrasmall', 'small', 'medium'],
      },
      table: {
        category: 'Overline',
      },
    },
    overlineType: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['regular', 'medium'],
      },
      table: {
        category: 'Overline',
      },
    },
    overlineColor: {
      name: 'Color',
      control: {
        type: 'select',
        options: ['initial', 'primary', 'secondary'],
      },
      table: {
        category: 'Overline',
      },
    },
    numericScale: {
      name: 'Scale',
      control: {
        type: 'select',
        options: [
          'small',
          'medium',
          'large',
          'extralarge',
          'extralarge2x',
          'extralarge3x',
        ],
      },
      table: {
        category: 'Numeric',
      },
    },
    numericType: {
      name: 'Type',
      control: {
        type: 'select',
        options: ['regular', 'medium', 'semibold'],
      },
      table: {
        category: 'Numeric',
      },
    },
    numericColor: {
      name: 'Color',
      control: {
        type: 'select',
        options: ['initial', 'primary', 'secondary'],
      },
      table: {
        category: 'Numeric',
      },
    },
    numericLink: {
      name: 'Link',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Numeric',
      },
    },
    buttonScale: {
      name: 'Scale',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'extralarge', 'extralarge2x'],
      },
      table: {
        category: 'Button',
      },
    },
    buttonColor: {
      name: 'Color',
      control: {
        type: 'select',
        options: ['initial', 'primary', 'secondary'],
      },
      table: {
        category: 'Button',
      },
    },
  },
} as Meta;

export const description = ({
  headingVariant,
  headingType,
  headingColor,
  bodyScale,
  bodyType,
  bodyColor,
  bodyLink,
  captionScale,
  captionType,
  captionColor,
  captionLink,
  overlineScale,
  overlineType,
  overlineColor,
  numericScale,
  numericType,
  numericColor,
  numericLink,
  buttonScale,
  buttonColor,
}) => (
  <Wrapper>
    <h3 style={{ fontFamily: ['"Montserrat"', 'sans-serif'].join(',') }}>
      Heading
    </h3>
    <Typography
      variant={headingVariant}
      type={headingType}
      color={headingColor}
    >
      Crypto investment ecosystem you can count on
    </Typography>
    <h3
      style={{
        marginTop: 50,
        fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
      }}
    >
      Body
    </h3>
    {!bodyLink && (
      <Typography
        variant="body1"
        type={bodyType}
        bodyScale={bodyScale}
        color={bodyColor}
      >
        Exchange allows users to easily exchange one crypto asset for another to
        optimize your crypto gains
      </Typography>
    )}
    {bodyLink && (
      <Typography
        variant="body1"
        type={bodyType}
        bodyScale={bodyScale}
        color={bodyColor}
        component="a"
        href="#"
        className="MuiTypography-link"
      >
        Exchange allows users to easily exchange one crypto asset for another to
        optimize your crypto gains
      </Typography>
    )}
    <h3
      style={{
        marginTop: 50,
        fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
      }}
    >
      Caption
    </h3>
    {!captionLink && (
      <Typography
        variant="caption"
        type={captionType}
        captionScale={captionScale}
        color={captionColor}
      >
        Collateral amount
      </Typography>
    )}
    {captionLink && (
      <Typography
        variant="caption"
        type={captionType}
        captionScale={captionScale}
        color={captionColor}
        component="a"
        href="#"
        className="MuiTypography-link"
      >
        Collateral amount
      </Typography>
    )}
    <h3
      style={{
        marginTop: 50,
        fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
      }}
    >
      Overline
    </h3>
    <Typography
      variant="overline"
      type={overlineType}
      overlineScale={overlineScale}
      color={overlineColor}
    >
      START dAY/End day
    </Typography>
    <h3
      style={{
        marginTop: 50,
        fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
      }}
    >
      Numeric
    </h3>
    {!numericLink && (
      <Typography
        variant="subtitle1"
        type={numericType}
        numericScale={numericScale}
        color={numericColor}
      >
        $100,000.12345678
      </Typography>
    )}
    {numericLink && (
      <Typography
        variant="subtitle1"
        type={numericType}
        numericScale={numericScale}
        color={numericColor}
        component="a"
        href="#"
        className="MuiTypography-link"
      >
        $100,000.12345678
      </Typography>
    )}
    <h3
      style={{
        marginTop: 50,
        fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
      }}
    >
      Button
    </h3>
    <Typography variant="button" buttonScale={buttonScale} color={buttonColor}>
      Deposit now
    </Typography>
  </Wrapper>
);

description.story = {
  parameters: {
    docs: {
      page: TypographyDescriptionDocs,
    },
  },
};

description.args = {
  headingVariant: 'h3',
  headingType: 'medium',
  headingColor: 'initial',
  bodyScale: 'medium',
  bodyType: 'medium',
  bodyColor: 'initial',
  captionScale: 'medium',
  captionType: 'medium',
  captionColor: 'initial',
  overlineScale: 'medium',
  overlineType: 'medium',
  overlineColor: 'initial',
  numericScale: 'medium',
  numericType: 'medium',
  numericColor: 'initial',
  buttonScale: 'medium',
  buttonColor: 'initial',
};
