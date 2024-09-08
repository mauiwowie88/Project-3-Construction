import { useState, useEffect } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { fetchData } from "../../client";
import { Loading } from "../Extra";
import PropTypes from "prop-types";

import {
  MiscellaneousServices,
  ReceiptLong,
  Paid,
  Handshake,
  Hardware,
  HelpOutline,
} from "@mui/icons-material";

const iconMap = {
  MiscellaneousServices: MiscellaneousServices,
  ReceiptLong: ReceiptLong,
  Paid: Paid,
  Handshake: Handshake,
  Hardware: Hardware,
};

const ShortProcess = () => {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData(
      `*[_type == "shortProcess"]{title, description, icon, step}`,
      setSteps
    )
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;

  // Sort steps by the 'step' key
  const sortedSteps = [...steps].sort(
    (a, b) => parseInt(a.step) - parseInt(b.step)
  );

  return (
    <section aria-labelledby="process-title">
      <Container sx={styles.container}>
        <Typography variant="h3" sx={styles.title} id="process-title">
          Our Process
        </Typography>
        <Box sx={styles.parentContainer}>
          <Box sx={styles.underline} />
        </Box>
        <Grid container sx={styles.box} spacing={3}>
          {sortedSteps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
              <ProcessStep
                title={step.title}
                description={step.description}
                icon={step.icon}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

const ProcessStep = ({ title, description, icon, index }) => {
  const IconComponent = iconMap[icon] || HelpOutline;

  return (
    <Box sx={styles.card}>
      <Box sx={styles.overlay} aria-labelledby={`process-step-${index}`}>
        <Typography variant="h2">{index + 1}</Typography>
        <IconComponent sx={styles.icon} aria-label={icon || "Help icon"} />
        <Typography
          variant="h5"
          sx={styles.stepTitle}
          id={`process-step-${index}`}
        >
          {title}
        </Typography>
      </Box>
      <Box className="hoverContent" sx={styles.hoverContent} tabIndex={0}>
        <Typography variant="body2">{description}</Typography>
      </Box>
    </Box>
  );
};

ProcessStep.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const styles = {
  container: {
    mt: 7,
    p: 2.5,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    my: 5,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  parentContainer: {
    display: "flex",
    justifyContent: "center",
  },
  underline: {
    width: "60px",
    height: "4px",
    backgroundColor: "#cfb13e",
  },
  card: {
    height: "100%",
    position: "relative",
    overflow: "hidden",
    "&:hover .hoverContent": {
      opacity: 1,
      transform: "translateY(0)",
    },
    "&:focus .hoverContent": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  overlay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    padding: "10px",
  },
  stepTitle: {
    textAlign: "center",
  },
  hoverContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "70%",
    backgroundColor: "black",
    color: "white",
    opacity: 0,
    transition: "opacity 0.3s, transform 0.3s",
    transform: "translateY(100%)",
    zIndex: 2,
    p: 2,
    boxSizing: "border-box",
  },
};

export default ShortProcess;
