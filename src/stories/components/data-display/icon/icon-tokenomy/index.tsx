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

import { gray70 } from '@components/variables/colors';

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
import SearchIcon from '@components/data-display/Icon/SearchIcon';
import SettingsIcon from '@components/data-display/Icon/SettingsIcon';
import HelpIcon from '@components/data-display/Icon/HelpIcon';
import InfoIcon from '@components/data-display/Icon/InfoIcon';
import CardHolderIcon from '@components/data-display/Icon/CardHolderIcon';
import BookIcon from '@components/data-display/Icon/BookIcon';
import StarIcon from '@components/data-display/Icon/StarIcon';
import CalendarIcon from '@components/data-display/Icon/CalendarIcon';
import EyeOpenIcon from '@components/data-display/Icon/EyeOpenIcon';
import EyeCloseIcon from '@components/data-display/Icon/EyeCloseIcon';
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
import MoreMenuIcon from '@components/data-display/Icon/MoreMenuIcon';
import HamburgerMenuIcon from '@components/data-display/Icon/HamburgerMenuIcon';
import CaretSortIcon from '@components/data-display/Icon/CaretSortIcon';
import CaretDownIcon from '@components/data-display/Icon/CaretDownIcon';
import CaretUpIcon from '@components/data-display/Icon/CaretUpIcon';
import CaretLeftIcon from '@components/data-display/Icon/CaretLeftIcon';
import CaretRightIcon from '@components/data-display/Icon/CaretRightIcon';
import ArrowLeftIcon from '@components/data-display/Icon/ArrowLeftIcon';
import ArrowRightIcon from '@components/data-display/Icon/ArrowRightIcon';
import ArrowDownIcon from '@components/data-display/Icon/ArrowDownIcon';
import ArrowUpIcon from '@components/data-display/Icon/ArrowUpIcon';
import ChevronDoubleLeftIcon from '@components/data-display/Icon/ChevronDoubleLeftIcon';
import ChevronDoubleRightIcon from '@components/data-display/Icon/ChevronDoubleRightIcon';
import NotificationIcon from '@components/data-display/Icon/NotificationIcon';
import CheckFilledIcon from '@components/data-display/Icon/CheckFilledIcon';
import PlusFilledIcon from '@components/data-display/Icon/PlusFilledIcon';
import AlertIcon from '@components/data-display/Icon/AlertIcon';
import SafeIcon from '@components/data-display/Icon/SafeIcon';
import CloudUploadIcon from '@components/data-display/Icon/CloudUploadIcon';
import PlusIcon from '@components/data-display/Icon/PlusIcon';
import SwitchIcon from '@components/data-display/Icon/SwitchIcon';
import CloseFilledIcon from '@components/data-display/Icon/CloseFilledIcon';
import ResizeIcon from '@components/data-display/Icon/ResizeIcon';
import EarnIcon from '@components/data-display/Icon/EarnIcon';
import TransferIcon from '@components/data-display/Icon/TransferIcon';
import IncreaseUpIcon from '@components/data-display/Icon/IncreaseUpIcon';
import MultipleCardIcon from '@components/data-display/Icon/MultipleCardIcon';
import LowInterestIcon from '@components/data-display/Icon/LowInterestIcon';
import LogoutIcon from '@components/data-display/Icon/LogoutIcon';
import InstitutionIcon from '@components/data-display/Icon/InstitutionIcon';
import AddPeopleIcon from '@components/data-display/Icon/AddPeopleIcon';

import TelegramIcon from '@components/data-display/Icon/TelegramIcon';
import FacebookIcon from '@components/data-display/Icon/FacebookIcon';
import TwitterIcon from '@components/data-display/Icon/TwitterIcon';
import InstagramIcon from '@components/data-display/Icon/InstagramIcon';
import RedditIcon from '@components/data-display/Icon/RedditIcon';
import CoinMarketCapIcon from '@components/data-display/Icon/CoinMarketCapIcon';
import LinkedinIcon from '@components/data-display/Icon/LinkedinIcon';
import AvaxIcon from '@components/data-display/Icon/AvaxIcon';
import BalIcon from '@components/data-display/Icon/BalIcon';
import BtcIcon from '@components/data-display/Icon/BtcIcon';
import BchIcon from '@components/data-display/Icon/BchIcon';
import AdaIcon from '@components/data-display/Icon/AdaIcon';
import LinkIcon from '@components/data-display/Icon/LinkIcon';
import CompIcon from '@components/data-display/Icon/CompIcon';
import EosIcon from '@components/data-display/Icon/EosIcon';
import EthIcon from '@components/data-display/Icon/EthIcon';
import IdkIcon from '@components/data-display/Icon/IdkIcon';
import LtcIcon from '@components/data-display/Icon/LtcIcon';
import MkrIcon from '@components/data-display/Icon/MkrIcon';
import DaiIcon from '@components/data-display/Icon/DaiIcon';
import DotIcon from '@components/data-display/Icon/DotIcon';
import SolIcon from '@components/data-display/Icon/SolIcon';
import XlmIcon from '@components/data-display/Icon/XlmIcon';
import SnxIcon from '@components/data-display/Icon/SnxIcon';
import XtzIcon from '@components/data-display/Icon/XtzIcon';
import TenIcon from '@components/data-display/Icon/TenIcon';
import TrxIcon from '@components/data-display/Icon/TrxIcon';
import UsdcIcon from '@components/data-display/Icon/UsdcIcon';
import UsdtIcon from '@components/data-display/Icon/UsdtIcon';

interface ObjIcon {
  name: string;
  element: React.ReactNode;
  importName: string;
  codeName?: string;
}

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
    width: 180,
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
      color: gray70,
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

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}

const OUTLINED_UI_ICON: string = 'outlined-ui-icon';
const FILLED_UI_ICON: string = 'filled-ui-icon';
const SOCIAL_MEDIA_ICON: string = 'social-media-icon';
const ASSET_ICON: string = 'asset-icon';

const iconsTokenomy = [
  {
    name: 'home',
    element: <HomeIcon />,
    importName: 'HomeIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'portfolio',
    element: <PortfolioIcon />,
    importName: 'PortfolioIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'contract market',
    element: <ContractMarketIcon />,
    importName: 'ContractMarketIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'loan',
    element: <LoanIcon />,
    importName: 'LoanIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'exchange',
    element: <ExchangeIcon />,
    importName: 'ExchangeIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'history',
    element: <HistoryIcon />,
    importName: 'HistoryIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'search',
    element: <SearchIcon />,
    importName: 'SearchIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'settings',
    element: <SettingsIcon />,
    importName: 'SettingsIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'help',
    element: <HelpIcon />,
    importName: 'HelpIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'info',
    element: <InfoIcon />,
    importName: 'InfoIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'card holder',
    element: <CardHolderIcon />,
    importName: 'CardHolderIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'book',
    element: <BookIcon />,
    importName: 'BookIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'star',
    element: <StarIcon />,
    importName: 'StarIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'calendar',
    element: <CalendarIcon />,
    importName: 'CalendarIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'eye open',
    element: <EyeOpenIcon />,
    importName: 'EyeOpenIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'eye close',
    element: <EyeCloseIcon />,
    importName: 'EyeCloseIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'check',
    element: <CheckIcon />,
    importName: 'CheckIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'close',
    element: <CloseIcon />,
    importName: 'CloseIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'sync',
    element: <SyncIcon />,
    importName: 'SyncIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'copy',
    element: <CopyIcon />,
    importName: 'CopyIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'language',
    element: <LanguageIcon />,
    importName: 'LanguageIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'unlock',
    element: <UnlockIcon />,
    importName: 'UnlockIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'location',
    element: <LocationIcon />,
    importName: 'LocationIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'increase',
    element: <IncreaseIcon />,
    importName: 'IncreaseIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'decrease',
    element: <DecreaseIcon />,
    importName: 'DecreaseIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'delete',
    element: <DeleteIcon />,
    importName: 'DeleteIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'verified',
    element: <VerifiedIcon />,
    importName: 'VerifiedIcon',
    category: FILLED_UI_ICON,
  },
  {
    name: 'save',
    element: <SaveIcon />,
    importName: 'SaveIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'edit',
    element: <EditIcon />,
    importName: 'EditIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'more menu',
    element: <MoreMenuIcon />,
    importName: 'MoreMenuIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'hamburger menu',
    element: <HamburgerMenuIcon />,
    importName: 'HamburgerMenuIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'caret sort',
    element: <CaretSortIcon />,
    importName: 'CaretSortIcon',
    category: FILLED_UI_ICON,
  },
  {
    name: 'caret down',
    element: <CaretDownIcon />,
    importName: 'CaretDownIcon',
    category: FILLED_UI_ICON,
  },
  {
    name: 'caret up',
    element: <CaretUpIcon />,
    importName: 'CaretUpIcon',
    category: FILLED_UI_ICON,
  },
  {
    name: 'caret left',
    element: <CaretLeftIcon />,
    importName: 'CaretLeftIcon',
    category: FILLED_UI_ICON,
  },
  {
    name: 'caret right',
    element: <CaretRightIcon />,
    importName: 'CaretRightIcon',
    category: FILLED_UI_ICON,
  },
  {
    name: 'arrow left',
    element: <ArrowLeftIcon />,
    importName: 'ArrowLeftIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'arrow right',
    element: <ArrowRightIcon />,
    importName: 'ArrowRightIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'arrow down',
    element: <ArrowDownIcon />,
    importName: 'ArrowDownIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'arrow up',
    element: <ArrowUpIcon />,
    importName: 'ArrowUpIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'chevron double left',
    element: <ChevronDoubleLeftIcon />,
    importName: 'ChevronDoubleLeftIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'chevron double right',
    element: <ChevronDoubleRightIcon />,
    importName: 'ChevronDoubleRightIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'notification',
    element: <NotificationIcon />,
    importName: 'NotificationIcon',
    category: FILLED_UI_ICON,
  },
  {
    name: 'check filled',
    element: <CheckFilledIcon />,
    importName: 'CheckFilledIcon',
    category: FILLED_UI_ICON,
  },
  {
    name: 'plus filled',
    element: <PlusFilledIcon />,
    importName: 'PlusFilledIcon',
    category: FILLED_UI_ICON,
  },
  {
    name: 'alert',
    element: <AlertIcon />,
    importName: 'AlertIcon',
    category: FILLED_UI_ICON,
  },
  {
    name: 'safe',
    element: <SafeIcon />,
    importName: 'SafeIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'cloud upload',
    element: <CloudUploadIcon />,
    importName: 'CloudUploadIcon',
    category: FILLED_UI_ICON,
  },
  {
    name: 'plus',
    element: <PlusIcon />,
    importName: 'PlusIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'switch',
    element: <SwitchIcon />,
    importName: 'SwitchIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'close filled',
    element: <CloseFilledIcon />,
    importName: 'CloseFilledIcon',
    category: FILLED_UI_ICON,
  },
  {
    name: 'resize',
    element: <ResizeIcon />,
    importName: 'ResizeIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'earn',
    element: <EarnIcon />,
    importName: 'EarnIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'transfer',
    element: <TransferIcon />,
    importName: 'TransferIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'increase up',
    element: <IncreaseUpIcon />,
    importName: 'IncreaseUpIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'multiple card',
    element: <MultipleCardIcon />,
    importName: 'MultipleCardIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'low interest',
    element: <LowInterestIcon />,
    importName: 'LowInterestIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'logout',
    element: <LogoutIcon />,
    importName: 'LogoutIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'institution',
    element: <InstitutionIcon />,
    importName: 'InstitutionIcon',
    category: OUTLINED_UI_ICON,
  },
  {
    name: 'add people',
    element: <AddPeopleIcon />,
    importName: 'AddPeopleIcon',
    category: OUTLINED_UI_ICON,
  },
];

const iconsSocialMedia = [
  {
    name: 'telegram',
    element: <TelegramIcon />,
    importName: 'TelegramIcon',
  },
  {
    name: 'facebook',
    element: <FacebookIcon />,
    importName: 'FacebookIcon',
  },
  {
    name: 'twitter',
    element: <TwitterIcon />,
    importName: 'TwitterIcon',
  },
  {
    name: 'instagram',
    element: <InstagramIcon />,
    importName: 'InstagramIcon',
  },
  {
    name: 'reddit',
    element: <RedditIcon />,
    importName: 'RedditIcon',
  },
  {
    name: 'coin market cap',
    element: <CoinMarketCapIcon />,
    importName: 'CoinMarketCapIcon',
  },
  {
    name: 'linkedin',
    element: <LinkedinIcon />,
    importName: 'LinkedinIcon',
  },
];

const iconsAsset = [
  {
    name: 'avalance (AVAX)',
    element: <AvaxIcon />,
    importName: 'AvaxIcon',
    codeName: 'avax',
  },
  {
    name: 'balancer (BAL)',
    element: <BalIcon />,
    importName: 'BalIcon',
    codeName: 'bal',
  },
  {
    name: 'bitcoin (BTC)',
    element: <BtcIcon />,
    importName: 'BtcIcon',
    codeName: 'btc',
  },
  {
    name: 'bitcoin cash (BCH)',
    element: <BchIcon />,
    importName: 'BchIcon',
    codeName: 'bch',
  },
  {
    name: 'cardano (ADA)',
    element: <AdaIcon />,
    importName: 'AdaIcon',
    codeName: 'ada',
  },
  {
    name: 'chainlink (LINK)',
    element: <LinkIcon />,
    importName: 'LinkIcon',
    codeName: 'link',
  },
  {
    name: 'compound (COMP)',
    element: <CompIcon />,
    importName: 'CompIcon',
    codeName: 'comp',
  },
  {
    name: 'EOS',
    element: <EosIcon />,
    importName: 'EosIcon',
    codeName: 'eos',
  },
  {
    name: 'ethereum (ETH)',
    element: <EthIcon />,
    importName: 'EthIcon',
    codeName: 'eth',
  },
  {
    name: 'IDK',
    element: <IdkIcon />,
    importName: 'IdkIcon',
    codeName: 'idk',
  },
  {
    name: 'litecoin (LTC)',
    element: <LtcIcon />,
    importName: 'LtcIcon',
    codeName: 'ltc',
  },
  {
    name: 'maker (MKR)',
    element: <MkrIcon />,
    importName: 'MkrIcon',
    codeName: 'mkr',
  },
  {
    name: 'DAI',
    element: <DaiIcon />,
    importName: 'DaiIcon',
    codeName: 'dai',
  },
  {
    name: 'polkadot (DOT)',
    element: <DotIcon />,
    importName: 'DotIcon',
    codeName: 'dot',
  },
  {
    name: 'solana (SOL)',
    element: <SolIcon />,
    importName: 'SolIcon',
    codeName: 'sol',
  },
  {
    name: 'stellar (XLM)',
    element: <XlmIcon />,
    importName: 'XlmIcon',
    codeName: 'xlm',
  },
  {
    name: 'Synthetic Network (SNX)',
    element: <SnxIcon />,
    importName: 'SnxIcon',
    codeName: 'snx',
  },
  {
    name: 'tezos (XTZ)',
    element: <XtzIcon />,
    importName: 'XtzIcon',
    codeName: 'xtz',
  },
  {
    name: 'tokenomy (TEN)',
    element: <TenIcon />,
    importName: 'TenIcon',
    codeName: 'ten',
  },
  {
    name: 'tron (TRX)',
    element: <TrxIcon />,
    importName: 'TrxIcon',
    codeName: 'trx',
  },
  {
    name: 'USDC',
    element: <UsdcIcon />,
    importName: 'UsdcIcon',
    codeName: 'usdc',
  },
  {
    name: 'USDT',
    element: <UsdtIcon />,
    importName: 'UsdtIcon',
    codeName: 'usdt',
  },
];

const newIconsTokenomy = iconsTokenomy.map((v) => ({
  ...v,
  codeName: '',
}));
const newIconsSocialMedia = iconsSocialMedia.map((v) => ({
  ...v,
  codeName: '',
  category: SOCIAL_MEDIA_ICON,
}));
const newIconsAsset = iconsAsset.map((v) => ({
  ...v,
  category: ASSET_ICON,
}));

const icons = [...newIconsTokenomy, ...newIconsSocialMedia, ...newIconsAsset];

const CustomDialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
        {children}
      </Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
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

  const handleClickOpen = (objIcon: ObjIcon) => {
    setOpen(true);
    setModalData(objIcon);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // Searching
  const [searchTerm, setSearchTerm] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 100);

  const searchCharacters = async (keyword: string) => {
    return await new Promise((resolve) =>
      setTimeout(() => {
        resolve(keyword);
      }, 100),
    );
  };

  const filteredCharacters = (list: any, key: string, value: string) => {
    let filtered = [],
      i = list.length;
    let reg = new RegExp('(.*)(' + value.toLowerCase() + ')(.*)');
    while (i--) {
      if (reg.test(list[i][key].toLowerCase())) {
        filtered.push(list[i]);
      }
    }
    return filtered;
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchCharacters(debouncedSearchTerm).then((keyword: string) => {
        setIconState(filteredCharacters(icons, 'name', keyword));
      });
    } else {
      if (debouncedSearchTerm == '') {
        searchCharacters(debouncedSearchTerm).then(() => {
          setIconState(icons);
        });
      }
    }
  }, [debouncedSearchTerm]);

  const groupedIcons = iconState.reduce((acc, icon) => {
    if (!acc[icon.category]) {
      acc[icon.category] = [];
    }
    acc[icon.category].push(icon);
    return acc;
  }, {});

  const groupedIconsTitle = (title: string) => {
    switch (title) {
      case OUTLINED_UI_ICON:
        return 'OUTLINED ICON';
      case FILLED_UI_ICON:
        return 'FILLED ICON';
      case SOCIAL_MEDIA_ICON:
        return 'SOCIAL MEDIA ICON';
      case ASSET_ICON:
        return 'ASSET ICON';
    }
  };

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

      <div className={classes.iconWrapper}>
        {Object.keys(groupedIcons).map((category, i: number) => (
          <>
            <Typography
              variant="h6"
              style={{
                textTransform: 'capitalize',
                marginBottom: 20,
                marginTop: i !== 0 ? 35 : 0,
                color: 'rgb(162 160 160)',
              }}
            >
              {groupedIconsTitle(category)}
            </Typography>
            <Grid container spacing={2}>
              {groupedIcons[category].map(
                ({ name, element, importName, codeName }, i: number) => (
                  <Grid
                    item
                    key={i}
                    onClick={() =>
                      handleClickOpen({
                        name,
                        element,
                        importName,
                        codeName,
                      })
                    }
                  >
                    <Paper className={classes.iconItem}>
                      <div>
                        {element}
                        <p style={{ textTransform: 'capitalize' }}>{name}</p>
                      </div>
                    </Paper>
                  </Grid>
                ),
              )}
            </Grid>
          </>
        ))}

        {iconState.length === 0 && (
          <Typography
            variant="h6"
            style={{ textAlign: 'center', width: '100%' }}
          >
            Icon not found!
          </Typography>
        )}
      </div>

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
            <Source
              language="jsx"
              code={dedent`import ${modalData.importName} from 'tokenomy-ui/data-display/Icon/${modalData.importName}';`}
            />
            <Source language="jsx" code={dedent`<${modalData.importName} />`} />

            {modalData.codeName !== '' && (
              <>
                <b>Additional Import</b>
                <Source
                  language="jsx"
                  code={dedent`https://spot.tokenomy.com/tokenomy-assets/images/cryptocurrency-icons/${modalData.codeName}.svg`}
                />
                <Source
                  language="jsx"
                  code={dedent`import ${modalData.codeName.toUpperCase()}Svg from 'tokenomy-ui/assets/icon/cryptocurrency/${
                    modalData.codeName
                  }.svg';`}
                />
              </>
            )}
          </CustomDialogContent>
        </Dialog>
      )}
    </>
  );
};

export default IconTokenomy;
