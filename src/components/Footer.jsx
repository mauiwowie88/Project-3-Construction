import React from "react";
import { Typography, Box, Container, Grid, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", p: 8 }}>
      <Container>
        <Grid container spacing={10} justifyContent="center">
          {/* JSM Details */}
          <Grid item md sx={{ alignItems: "space-around" }}>
            <Typography variant="h2" sx={{ fontWeight: "bold" }}>
              Project 3 TX
            </Typography>
            <br />
            <Typography variant="body2">
              yussel@project3tx.com
              <br />
              info@project3tx.com
              <br />
              (512) 961 - 6042
            </Typography>
          </Grid>
          {/* Hours */}
          <Grid item>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Hours
            </Typography>
            <br />
            <Typography variant="body2" sx={{ textAlign: "center" }}>
              Monday – Friday
              <br />9 AM – 5 PM
            </Typography>
          </Grid>
          {/* Social Media Links */}
          <Grid item>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center" }}
              gutterBottom
            >
              Follow Us
            </Typography>
            <IconButton color="inherit" aria-label="Facebook">
              <a href="https://www.linkedin.com/in/mauricio-garza-guzman/">
                <Facebook style={{ color: "white" }} />
              </a>
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <a href="https://mauiwowie88.github.io/">
                <Instagram style={{ color: "white" }} />
              </a>
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <a href="https://google.com">
                <LinkedIn style={{ color: "white" }} />
              </a>
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
