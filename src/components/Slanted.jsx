import React from "react";
import { Box, Typography } from "@mui/material";
import workers from "../assets/images/other/workers.jpg";

const Slanted = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.imageContainer}>
        <Box sx={styles.image} />
      </Box>
      <Box sx={styles.textContainer}>
        <Typography variant="h4" sx={styles.title}>
          About Us
        </Typography>
        <Typography variant="body1" sx={styles.description}>
          ABC Home & Commercial Services has been servicing homes and businesses
          in the Austin community for over 60 years with the expertise and the
          experience to get the job done right.
        </Typography>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    height: "50vh",
    width: "auto",
    position: "relative",
    backgroundColor: "#f5f5f5",
  },
  imageContainer: {
    width: "50%",
    height: "100%",
  },
  image: {
    backgroundImage: `url(${workers})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    clipPath: "polygon(0 0, 100% 0, 50% 100%, 0% 100%)",
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

export default Slanted;
