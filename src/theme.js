// import { createTheme } from "@mui/material/styles";

// const theme = createTheme({
//   // typography: {
//   //   fontFamily: "Open Sans, sans-serif, Roboto",
//   //   h1: {
//   //     fontSize: "1.2rem",
//   //     "@media (min-width:600px)": {
//   //       fontSize: "1.6rem",
//   //     },
//   //     "@media (min-width:900px)": {
//   //       fontSize: "2rem",
//   //     },
//   //     "@media (min-width:1200px)": {
//   //       fontSize: "2.5rem",
//   //     },
//   //     "@media (min-width:1600px)": {
//   //       fontSize: "3rem",
//   //     },
//   //   },
//   //   h2: {
//   //     fontSize: "2rem",
//   //     "@media (min-width:600px)": {
//   //       fontSize: "2.5rem",
//   //     },
//   //     "@media (min-width:900px)": {
//   //       fontSize: "3rem",
//   //     },
//   //   },
//   //   h3: {
//   //     fontSize: "1.75rem",
//   //     "@media (min-width:600px)": {
//   //       fontSize: "2rem",
//   //     },
//   //     "@media (min-width:900px)": {
//   //       fontSize: "2.5rem",
//   //     },
//   //   },
//   //   h4: {
//   //     fontSize: "1.5rem",
//   //     "@media (min-width:600px)": {
//   //       fontSize: "1.75rem",
//   //     },
//   //     "@media (min-width:900px)": {
//   //       fontSize: "2rem",
//   //     },
//   //   },
//   //   h5: {
//   //     fontSize: "2.25rem",
//   //     "@media (min-width:600px)": {
//   //       fontSize: "2.25rem",
//   //     },
//   //     "@media (min-width:900px)": {
//   //       fontSize: "3rem",
//   //     },
//   //   },
//   //   h6: {
//   //     fontSize: "1rem",
//   //     "@media (min-width:600px)": {
//   //       fontSize: "1rem",
//   //     },
//   //     "@media (min-width:900px)": {
//   //       fontSize: "1rem",
//   //     },
//   //     "@media (min-width:1200px)": {
//   //       fontSize: "1rem",
//   //     },
//   //     "@media (min-width:1600px)": {
//   //       fontSize: "1rem",
//   //     },
//   //   },
//   //   body1: {
//   //     fontSize: "0.8rem",
//   //     "@media (min-width:600px)": {
//   //       fontSize: "1rem",
//   //     },
//   //     "@media (min-width:900px)": {
//   //       fontSize: "1.2rem",
//   //     },
//   //   },
//   //   body2: {
//   //     fontSize: "1rem",
//   //     "@media (min-width:600px)": {
//   //       fontSize: "1rem",
//   //     },
//   //     "@media (min-width:900px)": {
//   //       fontSize: "1.2rem",
//   //     },
//   //   },
//   // },
// });

// export default theme;

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#ff1744",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#333",
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: "Roboto, Open Sans, sans-serif",
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
      fontSize: "1.75rem", // base size for large header
      "@media (min-width:600px)": {
        fontSize: "2.125rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width:1200px)": {
        fontSize: "2.875rem",
      },
    },
    h3: {
      fontSize: "1.5rem", // medium header
      "@media (min-width:600px)": {
        fontSize: "1.75rem",
      },
      "@media (min-width:900px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      fontSize: "1.25rem", // base medium header
      "@media (min-width:600px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.75rem",
      },
    },
    h5: {
      fontSize: "1rem", // small header
      "@media (min-width:600px)": {
        fontSize: "1.125rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.25rem",
      },
    },
    h6: {
      fontSize: "0.875rem", // smallest header
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.125rem",
      },
    },
    // Continue setting other headings
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
      fontSize: "1rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
      "@media (min-width:900px)": {
        fontSize: "1.2rem",
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
          borderRadius: 8, // Square edges
        },
      },
    },
    // Can add other component overrides as necessary
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
