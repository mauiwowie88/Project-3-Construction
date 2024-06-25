import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    blue: {
      light: "#A0AEC0",
      default: "#2d5b96",
      dark: "#1a202c",
    },
    red: {
      light: "#ffcccb",
      regular: "#ff0000",
      dark: "#8b0000",
    },
    gray: {
      light: "#d3d3d3",
      default: "#808080",
      dark: "#505050",
    },
    yellow: {
      light: "#ffffe0",
      regular: "#ffff00",
      dark: "#ffd700",
    },
    green: {
      light: "#90ee90",
      regular: "#008000",
      dark: "#006400",
    },
  },

  typography: {
    fontFamily: "Roboto, Open Sans, sans-serif",
    h1: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "3.5rem",
      },
      "@media (min-width:1600px)": {
        fontSize: "4rem",
      },
    },
    h2: {
      fontSize: "1.75rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.25rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.5rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      fontSize: "1.25rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.75rem",
      },
    },
    h5: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:1600px)": {
        fontSize: "2rem",
      },
    },
    h6: {
      fontSize: "0.875rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.125rem",
      },
    },
    body1: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.2rem",
      },
    },
    body2: {
      fontSize: "0.7rem",
      "@media (min-width:600px)": {
        fontSize: "0.8rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1rem",
      },
    },
    body3: {
      fontSize: "0.6rem",
      "@media (min-width:600px)": {
        fontSize: "0.7rem",
      },
      "@media (min-width:900px)": {
        fontSize: "0.8rem",
      },
    },
    body4: {
      fontSize: "0.5rem",
      "@media (min-width:600px)": {
        fontSize: "0.6rem",
      },
      "@media (min-width:900px)": {
        fontSize: "0.7rem",
      },
    },
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
