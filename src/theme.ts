import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366f1',
      light: '#818cf8',
      dark: '#4f46e5',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ec4899',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0f0f17',
      paper: '#17171f',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#94a3b8',
    },
    success: { main: '#22c55e' },
    error: { main: '#ef4444' },
    warning: { main: '#f59e0b' },
    info: { main: '#0ea5e9' },
    divider: '#27272a',
  },

  typography: {
    fontFamily: "Inter, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },

  shape: { borderRadius: 12 },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
        },
        containedPrimary: {
          background: 'linear-gradient(45deg, #6366f1 30%, #8b5cf6 90%)',
          boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
          '&:hover': {
            boxShadow: '0 6px 20px rgba(99, 102, 241, 0.6)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#17171f',
          border: '1px solid #27272a',
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    mode: 'light',
    primary: { main: '#4f46e5' },
    background: { default: '#f8fafc', paper: '#ffffff' },
    text: { primary: '#0f172a', secondary: '#475569' },
  },
});

export default theme;
