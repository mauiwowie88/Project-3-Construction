import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/playfair-display"; // Import Playfair Display
import "@fontsource/open-sans"; // Import Open Sans

import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

import theme from "./theme";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollUp from "./components/ScrollUp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <main>
          <App />
        </main>
        <ScrollUp />
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
