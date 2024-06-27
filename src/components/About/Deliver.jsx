import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { fetchData } from "../../client";
import eee from "../../../assets/images/other/eee.jpg"; // Ensure this path is correct
import { Loading } from "../Extra";

function Deliver() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchData(`*[_type == "aboutUs"]{title, description}`, setSections);
  }, []);

  if (sections.length < 2) return <Loading />;

  return (
    <>
      <Container sx={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Container sx={styles.leftContainer} maxWidth="sm">
              <Typography variant="h2" sx={styles.missionTitle}>
                {sections[1].title}
              </Typography>
              <Box sx={styles.underline}></Box>
              {sections[1].description.map((desc, i) => (
                <Typography key={i} variant="body1" sx={styles.missionText}>
                  {desc}
                </Typography>
              ))}
              <Button variant="contained" sx={styles.button}>
                Learn More...
              </Button>
            </Container>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={styles.rightContainer}>
              <Box sx={styles.imageWrapper}>
                <Box sx={styles.imageContainer}>
                  <img
                    src={eee}
                    alt="Team of professionals"
                    style={styles.image}
                  />
                </Box>
              </Box>
              <Box sx={styles.box}>
                <Typography variant="h3" sx={styles.title}>
                  {sections[3].title}
                </Typography>
                {sections[3].description.map((desc, i) => (
                  <Typography key={i} variant="body1" sx={styles.description}>
                    {desc}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

const styles = {
  missionText: {
    py: 1,
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    p: "10px 30px",
  },

  container: {
    padding: "16px",
    display: "flex",
    alignItems: "stretch",
    mt: 10,
  },
  leftContainer: {
    padding: "16px",
    backgroundColor: "#ffffff", // white background for left container
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    height: "100%",
    position: "relative",
  },
  underline: {
    width: "60px",
    my: 2,
    height: "2px",
    backgroundColor: "#40bc99",
  },
  rightContainer: {
    padding: "16px",
    backgroundColor: "#2d3748",
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between",
    // height: "100%",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      borderStyle: "solid",
      borderWidth: "0 30px 30px 0px",
      borderColor: "transparent transparent #ffffff transparent",
    },
  },
  imageWrapper: {
    position: "relative",
    paddingTop: "45%",
    marginBottom: "16px",
  },
  imageContainer: {
    position: "absolute",
    top: "-20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "88%",
    height: "auto",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderRadius: "8px",
  },
  missionTitle: {
    color: "#006498",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },
  title: {
    color: "white",
  },
  description: {
    mt: 2,
    color: "white",
    fontWeight: "200",
  },
  button: {
    mt: 3,
    backgroundColor: "#fdd835", // Customize this color to match the design
    color: "#000",
    alignSelf: "flex-start",
  },
};

export default Deliver;
