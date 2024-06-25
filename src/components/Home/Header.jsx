import React from "react";
import { Box, Typography, Button } from "@mui/material";
import one from "../../../assets/images/newest/hall.avif";

const Header = () => {
  return (
    <Box sx={styles.backgroundImage}>
      <Box sx={styles.contentBox}>
        <Typography variant="h5" component="div" sx={styles.title}>
          Home Repair & Handyman Services in West Los Angeles, CA
        </Typography>
        <Typography variant="subtitle1" sx={styles.subtitle}>
          Home Improvement, Maintenance, & Repair
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={styles.body}>
          Trust Your Home to Mr. Handyman
        </Typography>
        <Button variant="contained" color="primary" sx={styles.button}>
          Request Service
        </Button>
      </Box>
    </Box>
  );
};

const styles = {
  backgroundImage: {
    backgroundImage: `url(${one})`, // replace with your image path
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "250px",
    display: "flex",
    alignItems: "center",

    // justifyContent: "center",
    position: "relative",
    mt: 7,
  },
  contentBox: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: "1rem 3rem",
  },
  title: {
    marginBottom: 1,
  },
  subtitle: {
    marginBottom: 1,
  },
  body: {
    marginBottom: 2,
  },
  button: {
    marginTop: 2,
  },
};

export default Header;
