import { createTheme } from '@mui/material/styles';

// Definição de paleta de cores comuns
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


const createCustomTheme = (mode) => createTheme({
  palette: {
    mode,
    ...commonPalette,
    background: {
      default: mode === 'light' ? '#F4F7FA' : '#121212',
      paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E'
    },
    text: {
      primary: mode === 'light' ? '#0F1621' : '#FFFFFF',
      secondary: mode === 'light' ? '#5E6B73' : '#A0AAB2'
    }
  },
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
  transitions: {
    duration: {
      standard: 900 // Aumenta a duração padrão das transições
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          transition: theme.transitions.create(
            ['background-color', 'color'],
            { duration: theme.transitions.duration.standard }
          ),
          minHeight: '100vh',
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary
        },
        // Adiciona transição para componentes MUI
        '.MuiPaper-root, .MuiAppBar-root, .MuiButton-root, .MuiCard-root': {
          transition: theme.transitions.create(
            ['background-color', 'box-shadow', 'border-color'],
            { duration: theme.transitions.duration.standard }
          )
        }
      })
    }
  }
});

export const lightTheme = createCustomTheme('light');
export const darkTheme = createCustomTheme('dark');
