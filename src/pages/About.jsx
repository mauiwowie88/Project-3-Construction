import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { characteristics } from "../assets/db";
import { BlackButton, SectionImg, ImgBox } from "../components/Extra";
import Characteristics from "../components/About/Characteristics";
import Slanted from "../components/About/Slanted";
function About() {
  return (
    <>
      <SectionImg title="About">
        <Typography
          variant="h5"
          sx={{
            position: "absolute",
            left: 30,
            bottom: 30,
            fontWeight: "bold",
          }}
        >
          People, Passion, Process
        </Typography>
      </SectionImg>
      <Slanted />

      <Characteristics label={characteristics} />

      {/* Give Us A Call */}
      <SectionImg title="Call Us">
        <Box p="3rem 2rem 0 2rem">
          <Typography variant="h2">
            Ready to get started? Give us a call today.
          </Typography>
        </Box>
        <Link to="../Contact" style={{ textDecoration: "none" }}>
          <BlackButton label="Contact Us" width="250px" m />
        </Link>
      </SectionImg>
    </>
  );
}
export default About;
