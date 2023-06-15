// Vendors
import React from 'react';
import { Meta } from '@storybook/react/types-6-0';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

// Components
import Backdrop from '@components/feedback/Backdrop';
import Button from '@components/inputs/Button';
import BackdropDescriptionDocs from './description.docs.mdx';

interface ArgPaper extends ArgStory {
  ({ transitionDuration }: { transitionDuration: number }): JSX.Element;
  args: {
    transitionDuration: number;
  };
}

const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};

export default {
  title: 'Components/Feedback/Backdrop',
  parameters: {
    design: { disable: true },
    options: { showPanel: true },
  },
  argTypes: {
    transitionDuration: {
      name: 'Transition Duration',
      control: {
        type: 'range',
        min: 1,
        max: 1000,
        step: 1,
      },
    },
  },
} as Meta;
export const description: ArgPaper = ({ transitionDuration }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <Button variant="contained" onClick={handleToggle}>
        Show backdrop
      </Button>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose} transitionDuration={transitionDuration}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </Wrapper>
  );
};

description.story = {
  parameters: {
    docs: {
      page: BackdropDescriptionDocs,
    },
  },
};

description.args = {
  transitionDuration: 300,
};
