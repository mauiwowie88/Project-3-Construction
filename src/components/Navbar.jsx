import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import logo from "../assets/images/logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavigationDrawer from "./Drawer";

const pages = ["About", "Services", "Gallery", "Contact"];

function Navbar() {
  const smToLg = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <AppBar
      position="absolute"
      sx={{
        padding: "1rem 0",
        alignItems: "space-between",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box>
          <Link to="/" className="nav-link">
            <img src={logo} className="logo"></img>
          </Link>
        </Box>
        {smToLg ? (
          <Box>
            {pages.map((page) => (
              <Button key={page} sx={{ color: "#fff" }}>
                <Link to={`/${page}`} className="nav-link">
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        ) : (
          <NavigationDrawer />
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
