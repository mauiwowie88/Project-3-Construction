import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import logo from "../../../assets/images/other/new-logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavigationDrawer from "./Drawer";

const pages = ["About", "Services", "Contact"];

const NavLinks = ({ pages }) => (
  <Box sx={styles.navLinks}>
    {pages.map((page) => (
      <Button key={page} sx={styles.button}>
        <Link to={`/${page.toLowerCase()}`} style={styles.link}>
          {page}
        </Link>
      </Button>
    ))}
  </Box>
);

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
  appBar: {
    p: "0 1rem",
    alignItems: "center",
    backgroundColor: "#2e2e2e",
    boxShadow: "none",
    mr: 2.2,
    pl: 4.2,
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
  },
  button: {
    color: "#fff",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
};

export default Navbar;
