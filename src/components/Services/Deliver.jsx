import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { fetchData } from "../../client";
import eee from "../../../assets/images/other/eee.jpg"; // Ensure this path is correct
import { Loading } from "../Extra";

function Deliver() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetchData(`*[_type == "services"]{title, description}`, setSections);
  }, []);

  if (sections.length < 2) return <Loading />;

  return (
    <>
      <Box sx={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box sx={styles.leftContainer}>
              <Typography variant="h2" sx={styles.text}>
                {sections[0].title}
              </Typography>
              {sections[0].description.map((desc, i) => (
                <Typography key={i} variant="h5" sx={styles.text}>
                  {desc}
                </Typography>
              ))}
              <Button variant="contained" sx={styles.button}>
                Learn More...
              </Button>
            </Box>
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
              <Typography variant="h3" sx={styles.title}>
                {sections[1].title}
              </Typography>
              {sections[1].description.map((desc, i) => (
                <Typography key={i} variant="body1" sx={styles.description}>
                  {desc}
                </Typography>
              ))}
              <Button variant="contained" sx={styles.button}>
                Find Your Next Career
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

const styles = {
  container: {
    padding: "16px",
    display: "flex",
    alignItems: "stretch",
  },
  leftContainer: {
    padding: "16px",
    backgroundColor: "#ffffff", // white background for left container
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    position: "relative",
  },
  rightContainer: {
    padding: "16px",
    backgroundColor: "#FF6F61",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
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
  title: {
    marginBottom: "16px",
    color: "white",
  },
  description: {
    marginBottom: "16px",
    color: "white",
  },
  button: {
    backgroundColor: "#fdd835", // Customize this color to match the design
    color: "#000",
    alignSelf: "center",
  },
};

export default Deliver;
