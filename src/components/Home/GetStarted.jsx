import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

// Add more icons as needed
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
        <Typography sx={styles.contact}>{contact}</Typography>
      </Box>
    </Box>
  );
};

const GetStarted = () => {
  return (
    <Container sx={styles.container}>
      <Card
        title="Explore Services"
        description="Check out all our other services we offer."
        buttonText="MY ACCOUNT"
        contact=""
        clipPath="polygon(10% 0%, 90% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 0%)"
        icon="HomeWorkIcon"
      />
      <Card
        title="Get Started"
        description="We offer a full range of construction services."
        buttonText="SCHEDULE NOW"
        contact="(512) 837-9500"
        clipPath="polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 10%)"
        icon="HomeRepairServiceIcon"
      />
    </Container>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px",
    flexWrap: "wrap", // Enable wrapping on smaller screens
  },
  card: {
    backgroundColor: "#a71d22",
    color: "white",
    padding: "20px",
    width: "45%", // Default width for larger screens
    textAlign: "center",
    margin: "10px", // Add some margin for spacing
    boxSizing: "border-box",
    "@media (max-width: 600px)": {
      width: "100%", // Full width on smaller screens
    },
  },
  iconBox: {
    marginBottom: "10px",
    "& svg": {
      fontSize: "50px", // Adjust the size as needed
    },
  },
  title: {
    marginBottom: "10px",
  },
  description: {
    marginBottom: "20px",
  },
  buttonBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap", // Allow wrapping for small screens
    gap: 1,
  },
  button: {
    backgroundColor: "transparent", // Transparent background
    color: "white", // White text color
    border: "2px solid white", // White border
    padding: "10px 20px", // Padding for the button
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase", // Uppercase text
    fontWeight: "bold", // Bold text
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
      backgroundColor: "white", // White background on hover
      color: "#a71d22", // Change text color to the card background color on hover
      "& svg": {
        color: "#a71d22", // Change icon color to the card background color on hover
      },
    },
  },
  icon: {
    marginLeft: "10px",
    color: "inherit", // Inherit color from the parent
  },
  contact: {
    marginLeft: "20px",
  },
};

export default GetStarted;
