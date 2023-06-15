// theme.ts
import { createTheme } from '@mui/material/styles';
import "@fontsource/quicksand";

// Define your color palette
const colors = {
  timberwolf: "#dad7cdff",
  sage: "#a3b18aff",
  fernGreen: "#588157ff",
  hunterGreen: "#3a5a40ff",
  tangerine: "#f08700ff",  
};

// Create a Material-UI theme
const theme = createTheme({
  typography: {
    fontFamily: "Quicksand",
    fontSize: 30,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  
  },

  palette: {
    primary: {
      main: colors.sage,
    },
    secondary: {
      main: colors.tangerine,
    },
    common: {
      black: colors.timberwolf,
    },
    background: { 
      default: colors.timberwolf,
    },

  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "3px solid",
         
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: colors.sage,
          borderColor: colors.sage,
          border: "2px",
          
        },
      },
    },
    
  },
  
 
  
});

export default theme;