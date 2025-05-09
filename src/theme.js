import { createTheme } from '@mui/material/styles';

const commonPalette = {
  primary: {
    main: '#2A75FF',
    light: '#5D80FF',
    dark: '#1A5BD6',
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: '#00C896',
    light: '#78FFB4',
    dark: '#008A66',
    contrastText: '#000000'
  },
  error: {
    main: '#FF4C4C'
  }
};

const baseTheme = {
  typography: {
    fontFamily: '"Rajdhani", sans-serif',
    button: {
      textTransform: 'none',
      fontWeight: 600
    }
  },
  shape: {
    borderRadius: 12
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: 'all 0.3s ease',
          minHeight: '100vh'
        }
      }
    }
  }
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    ...commonPalette,
    background: {
      default: '#F4F7FA',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#0F1621',
      secondary: '#5E6B73'
    }
  }
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    ...commonPalette,
    background: {
      default: '#121212',
      paper: '#1E1E1E'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0AAB2'
    }
  }
});