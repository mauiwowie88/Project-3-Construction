import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import logo from "../assets/images/other/new-logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavigationDrawer from "./Drawer";

const pages = ["About", "Services", "Gallery", "Contact"];

function Navbar() {
  const mdToLg = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="fixed"
      sx={{
        p: "0 1rem 0 1rem",
        alignItems: "center",
        backgroundColor: "#2e2e2e",
        boxShadow: "none",
        height: smallScreen ? 55 : 65,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", width: "100%" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <img src={logo} style={{ height: smallScreen ? 32 : 40 }} />
          </Link>
        </Box>
        {mdToLg ? (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {pages.map((page) => (
              <Button key={page} sx={{ color: "#fff" }}>
                <Link
                  to={`/${page}`}
                  className="nav-link"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
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
