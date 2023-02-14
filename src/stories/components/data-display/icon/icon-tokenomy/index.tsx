// Vendors
import React, { useState, useEffect } from 'react';
import { Source } from '@storybook/addon-docs/blocks';
import dedent from 'ts-dedent';

// Material UI
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  makeStyles,
} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

// Components
import Grid from '@components/layout/Grid';
import TextField from '@components/inputs/TextField';
import Paper from '@components/surfaces/Paper';
import Typography from '@components/data-display/Typography';
import Dialog from '@components/feedback/Dialog';
import DialogTitle from '@components/feedback/DialogTitle';
import DialogContent from '@components/feedback/DialogContent';

// Icons
import HomeIcon from '@components/data-display/Icon/HomeIcon';
import PortfolioIcon from '@components/data-display/Icon/PortfolioIcon';
import CloseIcon from '@components/data-display/Icon/CloseIcon';

import { red50 } from '@components/variables/colors';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const useStyles = makeStyles<Theme>((theme) => ({
  iconWrapper: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
    width: 'auto',
  },
  iconSearch: {
    marginBottom: 25,
  },
  iconItem: {
    width: 120,
    height: 85,
    marginRight: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    fontSize: 12,
    textAlign: 'center',
    textOverflow: 'ellipsis',
    cursor: 'pointer',
    borderRadius: 4,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    '&:last-child': {
      marginRight: 0,
    },
    '& p': {
      margin: '5px 0 0 0',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      color: 'rgba(0, 0, 0, 0.54)',
      lineHeight: '14px !important',
    },
  },
  modalContent: {
    display: 'flex',
    justifyContent: 'center',
  },
  modalIconPreview: {
    '& svg': {
      color: red50,
      fontSize: 210,
      backgroundSize: '30px 30px',
      backgroundColor: '#fff',
      backgroundImage:
        'linear-gradient(45deg, #f4f4f4 25%, transparent 25%), linear-gradient(-45deg, #f4f4f4 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f4f4f4 75%), linear-gradient(-45deg, transparent 75%, #f4f4f4 75%)',
      backgroundPosition: '0 0, 0 15px, 15px -15px, -15px 0',
      marginRight: 20,
    },
  },
}));

// function useDebounce(value, delay) {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value]);

//   return debouncedValue;
// }

const icons = [
  {
    name: 'home',
    element: <HomeIcon />,
    importName: 'HomeIcon',
  },
  {
    name: 'portfolio',
    element: <PortfolioIcon />,
    importName: 'PortfolioIcon',
  },
];

// const CustomDialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <DialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           className={classes.closeButton}
//           onClick={onClose}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// });

// const CustomDialogContent = withStyles((theme) => ({
//   root: {
//     padding: '0 16px',
//     minWidth: 500,
//   },
// }))(DialogContent);

const IconTokenomy = () => {
  const classes = useStyles();
  const [iconState, setIconState] = useState(icons);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleClickOpen = (objIcon) => {
    setOpen(true);
    // setModalData(objIcon);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Searching
  const [searchTerm, setSearchTerm] = useState(null);
  // const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // const searchCharacters = (search) => {
  //   return true;
  // };

  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     searchCharacters(debouncedSearchTerm).then((r) => {
  //       console.log('a');
  //     });
  //   } else {
  //     if (debouncedSearchTerm == '') {
  //       searchCharacters(debouncedSearchTerm).then((r) => {
  //         console.log('b');
  //       });
  //     }
  //   }
  // }, [debouncedSearchTerm]);

  return (
    <>
      <TextField
        label="Search icons..."
        type="search"
        variant="outlined"
        fullWidth
        className={classes.iconSearch}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Grid container spacing={2} className={classes.iconWrapper}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {iconState.map(({ name, element, importName }, i) => (
              <Grid
                item
                key={i}
                onClick={() => handleClickOpen({ name, element, importName })}
              >
                <Paper className={classes.iconItem}>
                  <div>
                    {element}
                    <p>{name}</p>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* {modalData && (
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
            {modalData.name}
          </CustomDialogTitle>
          <CustomDialogContent>
            <div className={classes.modalContent}>
              <div className={classes.modalIconPreview}>
                {modalData.element}
              </div>
            </div>
            <Source
              language="jsx"
              code={dedent`import ${modalData.importName} from 'tokenomy-ui/Icon/${modalData.importName}';`}
            />
          </CustomDialogContent>
        </Dialog>
      )} */}
    </>
  );
};

export default IconTokenomy;
