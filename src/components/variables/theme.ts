// Vendors
import { createTheme } from '@mui/material/styles';

// Configs variables
import colors from './colors';

// Styles sections

let theme = createTheme({
    palette: {
      primary: {
        main: '#0052cc',
      },
      secondary: {
        main: '#edf2ff',
      },
    },
  });
  
  theme = createTheme(theme, {
    palette: {
      info: {
        main: theme.palette.secondary.main,
      },
    },
  });

export default theme;