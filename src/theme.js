// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#1976d2",
//     },
//     secondary: {
//       main: "#dc004e",
//     },
//   },
//   typography: {
//     fontFamily: "Roboto, Arial, sans-serif",
//     h4: {
//       fontWeight: "bold",
//       color: "#333",
//     },
//     subtitle1: {
//       fontWeight: "bold",
//       color: "#333",
//     },
//     body1: {
//       color: "#555",
//     },
//   },
// });

// export default theme;
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2.5rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
      "@media (min-width:900px)": {
        fontSize: "3.5rem",
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
      fontSize: "1.25rem",
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.75rem",
      },
    },
    h6: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.25rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.5rem",
      },
    },
    body1: {
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1.1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.2rem",
      },
    },
    body2: {
      fontSize: "0.875rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.1rem",
      },
    },
  },
});

export default theme;
