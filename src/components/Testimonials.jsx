import { useState } from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { SectionImg } from "../components/Extra";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { quotes } from "../assets/db";
// import bg from "../assets/images/k.jpg";

function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextQuote = () =>
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);

  const prevQuote = () =>
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);

  return (
    <>
      <SectionImg title="Testimonials">
        <Container
          sx={{
            zIndex: 2,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            pt: 5,
          }}
        >
          <Typography variant="body1" sx={{ textAlign: "center" }}>
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
      </SectionImg>
    </>
  );
}
export default Testimonials;
