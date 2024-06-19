import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { WorkOutline as DefaultIcon } from "@mui/icons-material";
import { fetchData } from "../../client";
import { Loading } from "../Extra";

const icons = {
  1: DefaultIcon,
  2: DefaultIcon,
  3: DefaultIcon,
  4: DefaultIcon,
  5: DefaultIcon,
  // Add more mappings as needed
};

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
    <Container sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        Our Process
      </Typography>
      <Box sx={styles.underline}></Box>
      <Grid container spacing={2}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <ProcessStep title={step.title} description={step.description} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const ProcessStep = ({ title, description }) => {
  return (
    <Box sx={styles.stepContainer}>
      {/* <Box sx={styles.iconContainer}>
        <Icon sx={styles.icon} />
      </Box> */}
      <Typography variant="h6" sx={styles.stepTitle}>
        {title}
      </Typography>
      <Typography variant="body1" sx={styles.stepDescription}>
        {description}
      </Typography>
    </Box>
  );
};

const styles = {
  container: {
    padding: "40px 0",
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
  stepContainer: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    marginBottom: "16px",
    backgroundColor: "#f5f5f5",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "8px",
  },
  icon: {
    fontSize: "2rem",
  },
  stepTitle: {
    fontWeight: "bold",
    marginBottom: "8px",
  },
  stepDescription: {
    color: "#666",
  },
};

export default Process;
