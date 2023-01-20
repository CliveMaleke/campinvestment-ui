// Vendors
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Components
import Typography from '../../../../components/data-display/Typography';
import TypographyDescriptionDocs from './description.docs.mdx';

const useStyles = makeStyles((theme: any) => ({
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
    design: { disabled: true },
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
    numericScale: {
      name: 'Scale',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'extralarge', 'extralarge2x', 'extralarge3x'],
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
  },
};

export const description = ({
  headingVariant,
  headingType,
  bodyScale,
  bodyType,
  captionScale,
  captionType,
  overlineScale,
  overlineType,
  numericScale,
  numericType,
  buttonScale,
}) => (
  <Wrapper>
    <h3 style={{ fontFamily: ['"Montserrat"', 'sans-serif'].join(',') }}>
      Heading
    </h3>
    <Typography variant={headingVariant} type={headingType}>
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
    <Typography variant="body1" type={bodyType} bodyScale={bodyScale}>
      Exchange allows users to easily exchange one crypto asset for another to
      optimize your crypto gains
    </Typography>
    <h3
      style={{
        marginTop: 50,
        fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
      }}
    >
      Caption
    </h3>
    <Typography
      variant="caption"
      type={captionType}
      captionScale={captionScale}
    >
      Collateral amount
    </Typography>
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
    <Typography variant="subtitle1" type={numericType} numericScale={numericScale}>$100,000.12345678</Typography>
    <h3
      style={{
        marginTop: 50,
        fontFamily: ['"Montserrat"', 'sans-serif'].join(','),
      }}
    >
      Button
    </h3>
    <Typography variant="button" buttonScale={buttonScale}>Deposit now</Typography>
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
  bodyScale: 'medium',
  bodyType: 'medium',
  captionScale: 'medium',
  captionType: 'medium',
  overlineScale: 'medium',
  overlineType: 'medium',
  numericScale: 'medium',
  numericType: 'medium',
  buttonScale: 'medium',
};
