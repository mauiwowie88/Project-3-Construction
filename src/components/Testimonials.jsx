import { useState } from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import bg from "../assets/images/m.jpg";
import { quotes } from "../assets/db";

function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length); // Loop back to the first quote after the last
  };

  const prevQuote = () => {
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length); // Loop back to the last quote before the first
  };

  return (
    <Box className="big-img-box" sx={{ backgroundImage: `url(${bg})` }}>
      <Container sx={{ zIndex: 2 }}>
        <IconButton onClick={prevQuote} sx={{ color: "white" }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Typography variant="h6" sx={{ width: "80%", textAlign: "center" }}>
          {quotes[index]}
        </Typography>
        <IconButton onClick={nextQuote} sx={{ color: "white" }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Container>
    </Box>
  );
}
export default Testimonials;
