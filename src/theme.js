import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif, Roboto",
    h1: {
      fontSize: "1.2rem",
      "@media (min-width:600px)": {
        fontSize: "1.6rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1600px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontSize: "2rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      "@media (min-width:600px)": {
        fontSize: "2rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.5rem",
      },
    },
    h4: {
      fontSize: "1.5rem",
      "@media (min-width:600px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
    },
    h5: {
      fontSize: "2.25rem",
      "@media (min-width:600px)": {
        fontSize: "2.25rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3rem",
      },
    },
    h6: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "1rem",
      },
      "@media (min-width:1600px)": {
        fontSize: "1rem",
      },
    },
    body1: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "1.1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.2rem",
      },
    },
    body2: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.2rem",
      },
    },
    body3: {
      fontSize: "0.5rem",
      "@media (min-width:600px)": {
        fontSize: "0.75rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.2rem",
      },
    },
  },
});

export default theme;
