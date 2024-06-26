import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const iconMap = {
  HomeRepairServiceIcon: HomeRepairServiceIcon,
  HomeWorkIcon: HomeWorkIcon,
};

const Card = ({ title, description, buttonText, contact, clipPath, icon }) => {
  const IconComponent = iconMap[icon];
  return (
    <Box sx={{ ...styles.card, clipPath }}>
      <Box sx={styles.iconBox}>{IconComponent && <IconComponent />}</Box>
      <Typography variant="h5" sx={styles.title}>
        {title}
      </Typography>
      <Typography sx={styles.description}>{description}</Typography>
      <Box sx={styles.buttonBox}>
        <Button variant="contained" sx={styles.button}>
          {buttonText} <ArrowForwardIosIcon sx={styles.icon} />
        </Button>
        {contact && <Typography sx={styles.contact}>{contact}</Typography>}
      </Box>
    </Box>
  );
};

const GetStarted = () => (
  <Container sx={styles.container}>
    <Card
      title="Explore Services"
      description="Check out all our other services we offer."
      buttonText="MY ACCOUNT"
      contact=""
      clipPath={{
        xs: "none",
        sm: "polygon(10% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 0%)",
      }}
      icon="HomeWorkIcon"
    />
    <Card
      title="Get Started"
      description="We offer a full range of construction services."
      buttonText="SCHEDULE NOW"
      contact="(512) 837-9500"
      clipPath={{
        xs: "none",
        sm: "polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)",
      }}
      icon="HomeRepairServiceIcon"
    />
  </Container>
);

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px",
    flexWrap: "wrap",
  },
  card: {
    backgroundColor: "#a71d22",
    color: "white",
    padding: "20px",
    width: "45%",
    textAlign: "center",
    margin: "10px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flexGrow: 1,
    "@media (max-width: 600px)": {
      width: "100%",
    },
  },
  iconBox: {
    marginBottom: "10px",
    "& svg": {
      fontSize: "50px",
    },
  },
  title: {
    marginBottom: "10px",
    fontWeight: "500",
  },
  description: {
    marginBottom: "20px",
    textAlign: "center",
  },
  buttonBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 1,
  },
  button: {
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
    fontWeight: "bold",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: "100%",
      bottom: 0,
      right: 0,
      backgroundColor: "white",
      transition: "left 0.5s",
      zIndex: -1,
    },
    "&:hover::before": {
      left: 0,
    },
    "&:hover": {
      backgroundColor: "white",
      color: "#a71d22",
      "& svg": {
        color: "#a71d22",
      },
    },
  },
  icon: {
    marginLeft: "10px",
    color: "inherit",
  },
  contact: {
    p: 1,
  },
};

export default GetStarted;
