import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

import theme from "./theme";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <main>
          <App />
        </main>
        <Footer />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
