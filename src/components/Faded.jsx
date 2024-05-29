import React from "react";
import { Box, Typography } from "@mui/material";
import fencing from "../assets/images/other/fencing.png"; // Ensure the path to your image is correct

const BackgroundImageWithText = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.imageContainer}></Box>
      <Box sx={styles.textContainer}>
        <Typography variant="h4" sx={styles.title}>
          Our Services
        </Typography>
        <Typography variant="body2" sx={styles.description}>
          We have been servicing homes and businesses in the San Marcos
          community for over 20 years with the expertise and the experience to
          get the job done right.
          <br />
          <br />
          We make decisions with our client’s interest in mind first. We listen
          to their needs and develop a level of communication that lets our
          clients know they are getting what they want, without any surprises.
          We believe in never spending a client’s money without first telling
          them how much the work will cost.
        </Typography>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    height: "50vh",
    width: "auto",
  },
  imageContainer: {
    flex: 1,
    backgroundImage: `url(${fencing})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(to right, rgba(255, 255, 255, 0), white)",
    },
  },
  textContainer: {
    padding: "20px",
    width: "50%",
  },
  title: {
    color: "#b71c1c",
    marginBottom: "10px",
  },
  description: {
    color: "#333",
  },
};

export default BackgroundImageWithText;
