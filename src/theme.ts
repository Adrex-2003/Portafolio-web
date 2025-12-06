import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#F5F5F5', 
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#555555',
    },

    primary: {
      main: '#0074D9',
    },
    secondary: {
      main: '#FF4136',
    },
    success: {
      main: '#2ECC40',
    },
    warning: {
      main: '#FFDC00',
    },
    info: {
      main: '#7FDBFF',
    },
    error: {
      main: '#FF6347',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
