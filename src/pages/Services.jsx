// import Carousel from "../components/Carousel";
import { useState } from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { SectionImg } from "../components/Extra";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Characteristics from "../components/Characteristics";
import { yo, work } from "../assets/db";

function Services() {
  const [index, setIndex] = useState(0);

  const nextQuote = () =>
    setIndex((prevIndex) => (prevIndex + 1) % work.length);

  const prevQuote = () =>
    setIndex((prevIndex) => (prevIndex - 1 + work.length) % work.length);
  return (
    <>
      <SectionImg title="Services" />
      <Characteristics label={yo} />
      <Box
        sx={{
          height: "200px",
          background: "center / cover no-repeat",
          backgroundImage: `url(${work[index].imgPath})`,
        }}
      >
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          {work[index].label}
        </Typography>

        <Box sx={{ m: 1, textAlign: "center" }}>
          <IconButton onClick={prevQuote} sx={{ color: "white", mr: 1 }}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={nextQuote} sx={{ color: "white", ml: 1 }}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
      {/* <Carousel images={work} /> */}
    </>
  );
}
export default Services;
