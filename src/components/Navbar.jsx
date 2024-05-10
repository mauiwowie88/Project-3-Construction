import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import logo from "../assets/images/logo.png";

const pages = ["Projects", "About", "Contact"];

function Navbar() {
  return (
    <AppBar position="static" sx={{ padding: 0, alignItems: "space-between" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Link to="/" className="nav-link">
            <img src={logo} className="logo"></img>
          </Link>
        </Box>

        <Box>
          {pages.map((page) => (
            <Button key={page} sx={{ color: "#fff" }}>
              <Link to={`/${page}`} className="nav-link">
                {page}
              </Link>
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
