import { createTheme } from '@mui/material/styles';
import { BREAKPOINTS } from '../constants';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: BREAKPOINTS.MOBILE,
      md: BREAKPOINTS.TABLET,
      lg: BREAKPOINTS.DESKTOP,
      xl: 1920
    }
  },
  components: {
    MuiTable: {
      styleOverrides: {
        root: {
          minWidth: 650
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '8px 16px'
        },
        head: {
          fontWeight: 'bold'
        }
      }
    }
  }
});

export default theme;
