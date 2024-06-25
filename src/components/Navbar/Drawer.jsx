import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
} from "@mui/material";
import {
  Menu,
  Close,
  Instagram,
  Facebook,
  Pinterest,
  LinkedIn,
} from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";

const pages = ["Home", "About", "Services", "Contact"];

const SocialLinks = () => (
  <Box sx={styles.socialBox}>
    <IconButton aria-label="instagram" href="https://www.instagram.com">
      <Instagram />
    </IconButton>
    <IconButton aria-label="facebook" href="https://www.facebook.com">
      <Facebook />
    </IconButton>
    <IconButton aria-label="pinterest" href="https://www.pinterest.com">
      <Pinterest />
    </IconButton>
    <IconButton aria-label="linkedin" href="https://www.linkedin.com">
      <LinkedIn />
    </IconButton>
  </Box>
);

const NavigationDrawer = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => () => setOpen(open);

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <Menu sx={{ color: "#77cbc7", fontSize: "2rem" }} />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)} sx={styles.drawer}>
        <IconButton onClick={toggleDrawer(false)} sx={styles.closeButton}>
          <Close />
        </IconButton>
        <List sx={styles.list}>
          {pages.map((page) => (
            <ListItem
              key={page}
              onClick={toggleDrawer(false)}
              sx={styles.listItem}
            >
              <Link to={`/${page.toLowerCase()}`} style={styles.link}>
                <ListItemText
                  primary={page}
                  primaryTypographyProps={{ fontSize: 25 }}
                />
              </Link>
            </ListItem>
          ))}
        </List>
        <SocialLinks />
      </Drawer>
    </>
  );
};

const styles = {
  drawer: {
    "& .MuiDrawer-paper": {
      backgroundColor: "#fff",
      color: "#000",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  closeButton: { position: "absolute", top: 16, right: 16 },
  list: { width: "100%", textAlign: "center" },
  listItem: { justifyContent: "center" },
  link: { textDecoration: "none", color: "black" },
  socialBox: { display: "flex", justifyContent: "center", gap: 2, mt: 2 },
};

export default NavigationDrawer;
