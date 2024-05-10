import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const theme = createTheme({
  palette: {
    primary: { main: "#013e87" },
    secondary: { main: "#2e74c9" },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      // fontWeight: 600,
    },
  },
  body1: {
    fontSize: "1rem", // Adjust the font size as needed
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <App />
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
