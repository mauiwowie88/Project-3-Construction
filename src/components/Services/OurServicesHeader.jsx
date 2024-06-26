import React from "react";
import { Box, Typography } from "@mui/material";

const OurServicesHeader = ({ title }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.inner}>
        <Typography variant="h2" sx={styles.title}>
          {title[0]}
        </Typography>

        <Box sx={styles.linesContainer}>
          <Box sx={styles.line1} />
          <Box sx={styles.line2} />
          <Box sx={styles.line3} />
        </Box>
      </Box>

      <Typography variant="h1" sx={styles.boldTitle}>
        {title[1]}
      </Typography>
    </Box>
  );
};

const styles = {
  container: {
    textAlign: "center",
    my: 5,
  },
  inner: {
    justifyContent: "center",
    display: "flex",
  },
  title: {
    fontWeight: 400,
  },
  boldTitle: {
    fontWeight: "bold",
  },
  linesContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    mx: 5,
  },
  line1: {
    width: "40px",
    height: "1.5px",
    backgroundColor: "gold",
    my: 0.5,
  },
  line2: {
    width: "70px",
    height: "2.5px",
    backgroundColor: "gold",
    my: 0.5,
  },
  line3: {
    width: "100px",
    height: "3px",
    backgroundColor: "gold",
    my: 0.5,
  },
};

export default OurServicesHeader;
