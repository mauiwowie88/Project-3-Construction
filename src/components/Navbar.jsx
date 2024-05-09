import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const navItems = ["Home", "About", "Contact"];

function SimpleNavBar() {
  return (
    <AppBar position="static" sx={{ padding: 0 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Site
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }}>
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default SimpleNavBar;
