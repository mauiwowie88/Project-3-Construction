import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { fetchData } from "../../client"; // Adjust the path as necessary
import { Loading } from "../Extra";

function LPSmall() {
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    fetchData(
      `*[_type == "longProcess"]{title, description, "imageUrl": image.asset->url}`,
      setProcesses
    );
  }, []);

  if (!processes.length) return <Loading />; // Adjust Loading as necessary

  return (
    <Box sx={styles.container}>
      <Grid container sx={styles.processContainer}>
        {processes.map((process, index) => (
          <Step process={process} index={index} key={index} />
        ))}
      </Grid>
    </Box>
  );
}

const Step = ({ process, index }) => {
  return (
    <>
      <Grid item sx={styles.textContainer}>
        <Box sx={styles.numberBox}>
          <Typography variant="h5" sx={styles.number}>
            {index + 1}
          </Typography>
        </Box>

        <Typography variant="h4" sx={styles.title}>
          {process.title}
        </Typography>
        <Container>
          {process.description.map((bullet, i) => (
            <Typography key={i} variant="body1" sx={styles.text}>
              {bullet}
            </Typography>
          ))}
        </Container>
      </Grid>
      <Grid item sx={styles.imageContainer}>
        <Box sx={styles.imageOverlay}>
          <img
            src={process.imageUrl}
            alt={process.title}
            style={styles.image}
          />
        </Box>
      </Grid>
    </>
  );
};

const styles = {
  container: {
    padding: "16px",
  },
  processContainer: {
    marginBottom: "32px",
  },
  imageContainer: {
    position: "relative",
  },

  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    display: "block",
    borderRadius: "8px",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    mt: 6,
  },
  numberBox: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "40px",
    backgroundColor: "#22c187",
    color: "white",
  },
  number: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  title: {
    m: "16px 0",
    fontWeight: "bold",
    display: "inline-block",
  },
  text: {
    marginBottom: "16px",
  },
};

export default LPSmall;
