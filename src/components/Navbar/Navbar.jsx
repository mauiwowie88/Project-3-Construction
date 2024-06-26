import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box, Typography } from "@mui/material";
import logo from "../../../assets/images/other/new-logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavigationDrawer from "./Drawer";
import { useTheme } from "@emotion/react";

const pages = ["About", "Services", "Contact"];

const NavLinks = ({ pages }) => {
  return (
    <Box sx={styles.navLinks}>
      {pages.map((page) => (
        <Button key={page}>
          <Link to={`/${page.toLowerCase()}`} style={styles.link}>
            <Typography sx={styles.navText}>{page}</Typography>
          </Link>
        </Button>
      ))}
    </Box>
  );
};

const Navbar = () => {
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <AppBar
      position="fixed"
      sx={{ ...styles.appBar, height: smallScreen ? 55 : 65 }}
    >
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.logoBox}>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{ height: smallScreen ? 32 : 40 }}
            />
          </Link>
        </Box>
        {!smallScreen ? <NavLinks pages={pages} /> : <NavigationDrawer />}
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  navText: {
    color: "#2d3748",
  },
  appBar: {
    p: "0 1rem",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "none",
  },
  toolbar: {
    justifyContent: "space-between",
    width: "100%",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    color: "black",
  },
  link: {
    textDecoration: "none",
  },
};

export default Navbar;
