import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { fetchData } from "../../client";
import { Loading } from "../Extra";
import fencing from "../../../assets/images/other/fencing.png";

function OurGoal() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchData(`*[_type == "services"]{title, description}`, setSections);
  }, []);

  if (sections.length < 2) return <Loading />;

  return (
    <Box sx={styles.container}>
      <Grid container spacing={0}>
        <Grid item xs={6} md={6} sx={styles.imageContainer}>
          <img src={fencing} alt="Our Goal" style={styles.image} />
          <Box sx={styles.gradientOverlay}></Box>
        </Grid>
        <Grid item xs={6} md={6} sx={styles.textContainer}>
          <Typography variant="h4" sx={styles.title}>
            {sections[2].title}
          </Typography>
          {sections[2].description.map((desc, i) => (
            <Typography key={i} sx={styles.text}>
              {desc}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // mt: 10,
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  gradientOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 95%)",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "35px",
  },
  title: {
    marginBottom: "16px",
    fontWeight: "bold",
  },
  text: {
    marginBottom: "16px",
  },
};

export default OurGoal;
