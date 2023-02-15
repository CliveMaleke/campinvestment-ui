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
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import { red50 } from '@components/variables/colors';

// Components
import Grid from '@components/layout/Grid';
import TextField from '@components/inputs/TextField';
import Paper from '@components/surfaces/Paper';
import Typography from '@components/data-display/Typography';

// Icons
import HomeIcon from '@components/data-display/Icon/HomeIcon';
import PortfolioIcon from '@components/data-display/Icon/PortfolioIcon';
import ContractMarketIcon from '@components/data-display/Icon/ContractMarketIcon';
import LoanIcon from '@components/data-display/Icon/LoanIcon';
import ExchangeIcon from '@components/data-display/Icon/ExchangeIcon';
import HistoryIcon from '@components/data-display/Icon/HistoryIcon';
import SettingsIcon from '@components/data-display/Icon/SettingsIcon';
import HelpIcon from '@components/data-display/Icon/HelpIcon';
import InfoIcon from '@components/data-display/Icon/InfoIcon';
import CardHolderIcon from '@components/data-display/Icon/CardHolderIcon';
import BookIcon from '@components/data-display/Icon/BookIcon';
import StarIcon from '@components/data-display/Icon/StarIcon';
import CalendarIcon from '@components/data-display/Icon/CalendarIcon';
import EyeOpenedIcon from '@components/data-display/Icon/EyeOpenedIcon';
import EyeClosedIcon from '@components/data-display/Icon/EyeClosedIcon';
import CheckIcon from '@components/data-display/Icon/CheckIcon';
import CloseIcon from '@components/data-display/Icon/CloseIcon';
import SyncIcon from '@components/data-display/Icon/SyncIcon';
import CopyIcon from '@components/data-display/Icon/CopyIcon';
import LanguageIcon from '@components/data-display/Icon/LanguageIcon';
import UnlockIcon from '@components/data-display/Icon/UnlockIcon';
import LocationIcon from '@components/data-display/Icon/LocationIcon';
import IncreaseIcon from '@components/data-display/Icon/IncreaseIcon';
import DecreaseIcon from '@components/data-display/Icon/DecreaseIcon';
import DeleteIcon from '@components/data-display/Icon/DeleteIcon';
import VerifiedIcon from '@components/data-display/Icon/VerifiedIcon';
import SaveIcon from '@components/data-display/Icon/SaveIcon';
import EditIcon from '@components/data-display/Icon/EditIcon';
import VerticalEllipsisIcon from '@components/data-display/Icon/VerticalEllipsisIcon';
import HamburgerIcon from '@components/data-display/Icon/HamburgerIcon';
import CarretSortIcon from '@components/data-display/Icon/CarretSortIcon';
import CarretDownIcon from '@components/data-display/Icon/CarretDownIcon';
import CarretUpIcon from '@components/data-display/Icon/CarretUpIcon';
import CarretLeftIcon from '@components/data-display/Icon/CarretLeftIcon';
import CarretRightIcon from '@components/data-display/Icon/CarretRightIcon';
import ArrowLeftIcon from '@components/data-display/Icon/ArrowLeftIcon';
import ArrowRightIcon from '@components/data-display/Icon/ArrowRightIcon';
import ArrowDownIcon from '@components/data-display/Icon/ArrowDownIcon';
import ArrowUpIcon from '@components/data-display/Icon/ArrowUpIcon';
import ArrowDoubleLeftIcon from '@components/data-display/Icon/ArrowDoubleLeftIcon';
import ArrowDoubleRightIcon from '@components/data-display/Icon/ArrowDoubleRightIcon';
import NotificationIcon from '@components/data-display/Icon/NotificationIcon';
import CheckFillIcon from '@components/data-display/Icon/CheckFillIcon';
import PlusFillIcon from '@components/data-display/Icon/PlusFillIcon';
import WarningIcon from '@components/data-display/Icon/WarningIcon';
import SafeIcon from '@components/data-display/Icon/SafeIcon';
import CloudUploadIcon from '@components/data-display/Icon/CloudUploadIcon';
import PlusIcon from '@components/data-display/Icon/PlusIcon';
import SwitchIcon from '@components/data-display/Icon/SwitchIcon';
import CloseFillIcon from '@components/data-display/Icon/CloseFillIcon';
import ResizeIcon from '@components/data-display/Icon/ResizeIcon';
import EarnIcon from '@components/data-display/Icon/EarnIcon';

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
    width: 143,
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
  {
    name: 'contract market',
    element: <ContractMarketIcon />,
    importName: 'ContractMarketIcon',
  },
  {
    name: 'loan',
    element: <LoanIcon />,
    importName: 'LoanIcon',
  },
  {
    name: 'exchange',
    element: <ExchangeIcon />,
    importName: 'ExchangeIcon',
  },
  {
    name: 'history',
    element: <HistoryIcon />,
    importName: 'HistoryIcon',
  },
  {
    name: 'settings',
    element: <SettingsIcon />,
    importName: 'SettingsIcon',
  },
  {
    name: 'help',
    element: <HelpIcon />,
    importName: 'HelpIcon',
  },
  {
    name: 'info',
    element: <InfoIcon />,
    importName: 'InfoIcon',
  },
  {
    name: 'card holder',
    element: <CardHolderIcon />,
    importName: 'CardHolderIcon',
  },
  {
    name: 'book',
    element: <BookIcon />,
    importName: 'BookIcon',
  },
  {
    name: 'star',
    element: <StarIcon />,
    importName: 'StarIcon',
  },
  {
    name: 'calendar',
    element: <CalendarIcon />,
    importName: 'CalendarIcon',
  },
  {
    name: 'eye opened',
    element: <EyeOpenedIcon />,
    importName: 'EyeOpenedIcon',
  },
  {
    name: 'eye closed',
    element: <EyeClosedIcon />,
    importName: 'EyeClosedIcon',
  },
  {
    name: 'check',
    element: <CheckIcon />,
    importName: 'CheckIcon',
  },
  {
    name: 'close',
    element: <CloseIcon />,
    importName: 'CloseIcon',
  },
  {
    name: 'sync',
    element: <SyncIcon />,
    importName: 'SyncIcon',
  },
  {
    name: 'copy',
    element: <CopyIcon />,
    importName: 'CopyIcon',
  },
  {
    name: 'language',
    element: <LanguageIcon />,
    importName: 'LanguageIcon',
  },
  {
    name: 'unlock',
    element: <UnlockIcon />,
    importName: 'UnlockIcon',
  },
  {
    name: 'location',
    element: <LocationIcon />,
    importName: 'LocationIcon',
  },
  {
    name: 'increase',
    element: <IncreaseIcon />,
    importName: 'IncreaseIcon',
  },
  {
    name: 'decrease',
    element: <DecreaseIcon />,
    importName: 'DecreaseIcon',
  },
  {
    name: 'delete',
    element: <DeleteIcon />,
    importName: 'DeleteIcon',
  },
  {
    name: 'verified',
    element: <VerifiedIcon />,
    importName: 'VerifiedIcon',
  },
  {
    name: 'save',
    element: <SaveIcon />,
    importName: 'SaveIcon',
  },
  {
    name: 'edit',
    element: <EditIcon />,
    importName: 'EditIcon',
  },
  {
    name: 'vertical ellipsis',
    element: <VerticalEllipsisIcon />,
    importName: 'VerticalEllipsisIcon',
  },
  {
    name: 'hamburger',
    element: <HamburgerIcon />,
    importName: 'HamburgerIcon',
  },
  {
    name: 'carret sort',
    element: <CarretSortIcon />,
    importName: 'CarretSortIcon',
  },
  {
    name: 'carret down',
    element: <CarretDownIcon />,
    importName: 'CarretDownIcon',
  },
  {
    name: 'carret up',
    element: <CarretUpIcon />,
    importName: 'CarretUpIcon',
  },
  {
    name: 'carret left',
    element: <CarretLeftIcon />,
    importName: 'CarretLeftIcon',
  },
  {
    name: 'carret right',
    element: <CarretRightIcon />,
    importName: 'CarretRightIcon',
  },
  {
    name: 'arrow left',
    element: <ArrowLeftIcon />,
    importName: 'ArrowLeftIcon',
  },
  {
    name: 'arrow right',
    element: <ArrowRightIcon />,
    importName: 'ArrowRightIcon',
  },
  {
    name: 'arrow down',
    element: <ArrowDownIcon />,
    importName: 'ArrowDownIcon',
  },
  {
    name: 'arrow up',
    element: <ArrowUpIcon />,
    importName: 'ArrowUpIcon',
  },
  {
    name: 'arrow double left',
    element: <ArrowDoubleLeftIcon />,
    importName: 'ArrowDoubleLeftIcon',
  },
  {
    name: 'arrow double right',
    element: <ArrowDoubleRightIcon />,
    importName: 'ArrowDoubleRightIcon',
  },
  {
    name: 'notification',
    element: <NotificationIcon />,
    importName: 'NotificationIcon',
  },
  {
    name: 'check fill',
    element: <CheckFillIcon />,
    importName: 'CheckFillIcon',
  },
  {
    name: 'plus fill',
    element: <PlusFillIcon />,
    importName: 'PlusFillIcon',
  },
  {
    name: 'warning',
    element: <WarningIcon />,
    importName: 'WarningIcon',
  },
  {
    name: 'safe',
    element: <SafeIcon />,
    importName: 'SafeIcon',
  },
  {
    name: 'cloud upload',
    element: <CloudUploadIcon />,
    importName: 'CloudUploadIcon',
  },
  {
    name: 'plus',
    element: <PlusIcon />,
    importName: 'PlusIcon',
  },
  {
    name: 'switch',
    element: <SwitchIcon />,
    importName: 'SwitchIcon',
  },
  {
    name: 'close fill',
    element: <CloseFillIcon />,
    importName: 'CloseFillIcon',
  },
  {
    name: 'resize',
    element: <ResizeIcon />,
    importName: 'ResizeIcon',
  },
  {
    name: 'earn',
    element: <EarnIcon />,
    importName: 'EarnIcon',
  },
];

const CustomDialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

const CustomDialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(DialogContent);

const IconTokenomy = () => {
  const classes = useStyles();
  const [iconState, setIconState] = useState(icons);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleClickOpen = (objIcon) => {
    setOpen(true);
    setModalData(objIcon);
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
        <Grid item xs>
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
                    <p style={{ textTransform: 'capitalize' }}>{name}</p>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {modalData && (
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
            {/* <Source
              language="jsx"
              code={dedent`import ${modalData.importName} from 'tokenomy-ui/Icon/${modalData.importName}';`}
            /> */}
          </CustomDialogContent>
        </Dialog>
      )}
    </>
  );
};

export default IconTokenomy;
