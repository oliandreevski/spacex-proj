import { createTheme } from '@mui/material/styles';



  
    const theme = createTheme({

        palette: {
          primary: {
            light: '#474f97',
            main: '#1a237e',
            dark: '#121858',
            contrastText: '#fff',
          },    
          secondary: {
            light: '#f6a5c0',
            main: '#f48fb1',
            dark: '#aa647b',
            contrastText: '#000',
          },
        },
        typography: {
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          },

    });

    export default theme