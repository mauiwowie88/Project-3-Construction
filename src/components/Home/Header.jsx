import React from "react";
import { Box, Typography, Button } from "@mui/material";
import dark from "../../../assets/images/newest/drawing.jpg";

const Header = () => {
  return (
    <Box sx={styles.backgroundImage}>
      <Box sx={styles.contentBox}>
        <Typography variant="h5" component="div" sx={styles.title}>
          Commercial Construction & Contractor Services in San Marcos, TX
        </Typography>
        <Typography variant="subtitle1" sx={styles.subtitle}>
          Construction, Renovation, & Project Management
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={styles.body}>
          Trust Your Project to Our Expert Team
        </Typography>
        <Button variant="contained" color="primary" sx={styles.button}>
          Request a Quote
        </Button>
      </Box>
    </Box>
  );
};

const styles = {
  backgroundImage: {
    backgroundImage: `url(${dark})`, // replace with your image path
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
    backgroundColor: "#8FC1A9",
  },
};

export default Header;
