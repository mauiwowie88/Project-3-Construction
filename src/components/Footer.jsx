import React from "react";
import { Typography, Box, Grid, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", p: 6 }}>
      <Grid container>
        {/* JSM Details */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            GB
          </Typography>
          <p>
            1125 Lincoln Avenue #400
            <br />
            Steamboat Springs, CO 80487
          </p>
          <p>
            info@jsmbuilders.com
            <br />
            970.871.4899
          </p>
        </Grid>
        {/* Hours */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Hours</Typography>
          <Typography>
            Monday – Friday
            <br />9 AM – 5 PM
          </Typography>
        </Grid>

        {/* Social Media Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Follow Us</Typography>
          <IconButton color="inherit">
            <Facebook />
          </IconButton>
          <IconButton color="inherit">
            <Instagram />
          </IconButton>
          <IconButton color="inherit">
            <LinkedIn />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
