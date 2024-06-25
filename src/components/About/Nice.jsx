import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import wall from "../../../assets/images/newest/wall.jpg";
import wood from "../../../assets/images/newest/1.jpg";

const Nice = () => {
  return (
    <Box
      sx={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        textAlign: "center",
        // color: "white",
        width: "50%",
        position: "relative",
        background: `url(${wall}) no-repeat center top / cover`,
      }}
    >
      <Container maxWidth="md" sx={{ zIndex: 1 }}>
        <Typography variant="h6" gutterBottom>
          HOME AND BUILDING MAINTENANCE & REPAIRS
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          Expert Handyman Services
          <br />
          Tokyo & Kanagawa
        </Typography>
        <Typography variant="body1" paragraph>
          In need of an expert handyman in Tokyo or Kanagawa? Look no further.
          From small repairs to large-scale projects, Tokyo Handyman offers
          top-notch maintenance and repair services. From wallpapering and
          painting to deck construction and general repairs. We cater to all
          types of properties - apartments, houses, businesses, and AirBnbs. Our
          expertise even extends to unique requests like stage and prop
          construction. Trust us to make your maintenance or repair tasks smooth
          and stress-free.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Give us a call!
          </Button>
          <Button variant="outlined" color="primary">
            Contact Info
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Nice;
