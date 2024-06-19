import React from "react";
import { Typography, Box, Container, Grid, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

const FooterDetails = () => (
  <Grid item md sx={styles.details}>
    <Typography variant="h2" sx={styles.bold}>
      Project 3 TX
    </Typography>
    <Typography variant="body2" sx={styles.contactInfo}>
      yussel@project3tx.com
      <br />
      info@project3tx.com
      <br />
      (512) 961 - 6042
    </Typography>
  </Grid>
);

const FooterHours = () => (
  <Grid item>
    <Typography variant="h4" sx={styles.centeredBold}>
      Hours
    </Typography>
    <br />
    <Typography variant="body2" sx={styles.centered}>
      Monday – Friday
      <br />9 AM – 5 PM
    </Typography>
  </Grid>
);

const FooterSocial = () => (
  <Grid item>
    <Typography variant="h4" sx={styles.centeredBold} gutterBottom>
      Follow Us
    </Typography>
    <IconButton color="inherit" aria-label="Facebook">
      <a href="https://www.linkedin.com/in/mauricio-garza-guzman/">
        <Facebook sx={styles.icon} />
      </a>
    </IconButton>
    <IconButton color="inherit" aria-label="Instagram">
      <a href="https://mauiwowie88.github.io/">
        <Instagram sx={styles.icon} />
      </a>
    </IconButton>
    <IconButton color="inherit" aria-label="LinkedIn">
      <a href="https://google.com">
        <LinkedIn sx={styles.icon} />
      </a>
    </IconButton>
  </Grid>
);

const Footer = () => (
  <Box sx={styles.footerBox}>
    <Container>
      <Grid container spacing={10} justifyContent="center">
        <FooterDetails />
        <FooterHours />
        <FooterSocial />
      </Grid>
    </Container>
  </Box>
);

const styles = {
  footerBox: {
    backgroundColor: "black",
    color: "white",
    p: 8,
  },
  details: {
    alignItems: "space-around",
  },
  bold: {
    fontWeight: "bold",
  },
  centeredBold: {
    fontWeight: "bold",
    textAlign: "center",
  },
  contactInfo: {
    marginTop: "1rem",
  },
  centered: {
    textAlign: "center",
  },
  icon: {
    color: "white",
  },
};

export default Footer;
