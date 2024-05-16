import { useState } from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import bg from "../assets/images/m.jpg";
import { quotes } from "../assets/db";
import { WhiteButton } from "./Extra";
import { Link } from "react-router-dom";
import hero from "../assets/images/k.jpg";

function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length); // Loop back to the first quote after the last
  };

  const prevQuote = () => {
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length); // Loop back to the last quote before the first
  };

  return (
    <Box className="big-img-box" sx={{ backgroundImage: `url(${hero})` }}>
      <Container
        sx={{
          zIndex: 2,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            p: 5,
            textAlign: "center",
            fontSize: {
              xs: "0.8rem",
              sm: "0.9rem",
              md: "1.12rem",
              lg: "1.25rem",
            },
          }}
        >
          {quotes[index]}
        </Typography>
        <Box sx={{ m: 1 }}>
          <IconButton onClick={prevQuote} sx={{ color: "white", mr: 1 }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={nextQuote} sx={{ color: "white", ml: 1 }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
export default Testimonials;
