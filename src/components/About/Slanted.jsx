import React from "react";
import { Box, Typography } from "@mui/material";
import workers from "../../assets/images/other/workers.jpg";

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
          We know that our best advertisement comes from you, the satisfied
          client. That’s why we treat every project as an opportunity to build
          on our reputation and going above and beyond the expected – of
          delivering a quality project, both on time and at the best value, all
          in a manner that assures you that you are in good hands with Project
          3.
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
    loading: "lazy",
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
