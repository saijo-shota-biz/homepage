import { responsiveFontSizes } from '@mui/material';
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { M_PLUS_Rounded_1c, Roboto } from '@next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const mplusRounded1c = M_PLUS_Rounded_1c({
  weight: ['300', '400', '500', '700'],
  subsets: ['japanese'],
  display: 'swap',
  fallback: ['roboto', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#009EFD',
    },
    secondary: {
      main: '#2AF598',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: mplusRounded1c.style.fontFamily,
  },
});

export default responsiveFontSizes(theme);
