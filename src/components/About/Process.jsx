import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Card } from "@mui/material";
import { fetchData } from "../../client";
import { Loading } from "../Extra";
import HandshakeIcon from "@mui/icons-material/Handshake";

const Process = () => {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(`*[_type == "process"]{title, description}`, setSteps)
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        Our Process
      </Typography>
      <Box sx={styles.underline}></Box>

      <Grid container spacing={2} sx={styles.box}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={5} md={4} lg={2.4} key={index}>
            <ProcessStep
              title={step.title}
              description={step.description}
              index={index}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const ProcessStep = ({ title, description, index }) => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.overlay}>
        <Typography variant="h2">{index + 1}</Typography>
        <HandshakeIcon sx={{ p: 2 }} />
        <Typography variant="h6" sx={styles.title}>
          {title}
        </Typography>
      </Box>
      <Box className="hoverContent" sx={styles.hoverContent}>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Box>
  );
};

const styles = {
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    justifyContent: "center",
  },
  container: {
    mt: 7,
    p: 2.5,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  underline: {
    width: "60px",
    height: "4px",
    backgroundColor: "#cfb13e",
    margin: "0 auto 40px",
  },
  card: {
    position: "relative",
    display: "flex",

    height: "200px",
    // backgroundColor: "rgba(0,0,0,0.1)",
    overflow: "hidden",

    "&:hover .hoverContent": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  overlay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "right",
    alignItems: "center",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  hoverContent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    color: "black",
    opacity: 0,
    transition: "0.3s",
    transform: "translateY(100%)",
    zIndex: 2,
  },
};

export default Process;
