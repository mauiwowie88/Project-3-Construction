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

function NavigationDrawer() {
  const [open, setOpen] = useState(false);
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const pages = ["About", "Services", "Gallery", "Contact"];
  return (
    <>
      {/* Menu Icon */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <Menu
          style={{
            color: "#77cbc7",
            fontSize: smallScreen ? "1.7rem" : "2.2rem",
          }}
        />
      </IconButton>
      {/* Drop Down Menu */}
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#fff",
            color: "#000",
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        {/* Close Menu Icon */}
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{ position: "absolute", top: 16, right: 16 }}
        >
          <Close />
        </IconButton>
        {/* List of Pages */}
        <List>
          <ListItem
            onClick={toggleDrawer(false)}
            key="Home"
            sx={{ justifyContent: "center" }}
          >
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              <ListItemText
                primary="Home"
                primaryTypographyProps={{ fontSize: 25 }}
              />
            </Link>
          </ListItem>
          {pages.map((text, index) => (
            <ListItem
              key={text}
              onClick={toggleDrawer(false)}
              sx={{ justifyContent: "center" }}
            >
              <Link
                to={`/${text}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ fontSize: 25 }}
                />
              </Link>
            </ListItem>
          ))}
        </List>
        {/* Socials */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
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
      </Drawer>
    </>
  );
}

export default NavigationDrawer;
