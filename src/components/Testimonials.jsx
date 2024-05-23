import { useState } from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import ImgBox from "./ImgBox";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { quotes } from "../assets/db";
import bg from "../assets/images/k.jpg";

function Testimonials() {
  const [index, setIndex] = useState(0);

  const nextQuote = () =>
    setIndex((prevIndex) => (prevIndex + 1) % quotes.length);

  const prevQuote = () =>
    setIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);

  return (
    <>
      <ImgBox title="Testimonials">
        <Container
          sx={{
            zIndex: 2,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            pt: 5,
          }}
        >
          <Typography
            variant="h6"
            sx={{
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
      </ImgBox>
    </>
  );
}
export default Testimonials;
