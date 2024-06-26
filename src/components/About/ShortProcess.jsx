import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { fetchData } from "../../client";
import { Loading } from "../Extra";
import HandshakeIcon from "@mui/icons-material/Handshake";

const ShortProcess = () => {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(`*[_type == "shortProcess"]{title, description}`, setSteps)
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
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
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
        <Typography variant="h2" sx={styles.number}>
          {index + 1}
        </Typography>
        <HandshakeIcon sx={styles.icon} />
        <Typography variant="h5" sx={styles.stepTitle}>
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
  container: {
    mt: 7,
    p: 2.5,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "200px",
    overflow: "hidden",
    "&:hover .hoverContent": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  overlay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    zIndex: 1,
  },
  number: {
    flexGrow: 1,
  },
  icon: {
    flexGrow: 1,
    padding: "10px",
  },
  stepTitle: {
    flexGrow: 1,
    textAlign: "center",
  },
  hoverContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    padding: "10px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    opacity: 0,
    transition: "opacity 0.3s, transform 0.3s",
    transform: "translateY(100%)",
    zIndex: 2,
  },
};

export default ShortProcess;
