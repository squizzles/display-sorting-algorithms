// theme.ts
import { createTheme } from '@mui/material/styles';


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
  palette: {
    primary: {
      main: colors.sage,
    },
    secondary: {
      main: colors.tangerine,
    },
    background: { 
      default: colors.timberwolf,
    },

  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "2px solid",
        
          fontSize: "3rem",
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          border: "2px solid",
          
        },
      },
    },
  },
  
 
  
});

export default theme;