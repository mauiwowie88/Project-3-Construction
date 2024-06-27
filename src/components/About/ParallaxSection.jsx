import React from "react";
import { Box, Typography, Container } from "@mui/material";
import backgroundImage from "../../../assets/images/newest/ey.jpg"; // Make sure to update the path to your image

const ParallaxSection = () => {
  return (
    <Box>
      <Box sx={styles.parallax}></Box>
    </Box>
  );
};

const styles = {
  parallax: {
    backgroundImage: `url(${backgroundImage})`,
    height: "150px",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
  },
  content: {
    padding: "2rem 0",
    textAlign: "center",
  },
  title: {
    marginBottom: "1rem",
  },
  description: {
    marginBottom: "1rem",
  },
};

export default ParallaxSection;
