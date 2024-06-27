import React from "react";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import AboutUs from "../components/About/AboutUs";
import CallUs from "../components/About/CallUs";
import ShortProcess from "../components/About/ShortProcess";
import Deliver from "../components/About/Deliver";

import { SectionImg } from "../components/Extra";
import ParallaxSection from "../components/About/ParallaxSection";
import OurVision from "../components/About/OurVision";

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <SectionImg title="About">
        <Typography variant="h5" sx={styles.sectionText}>
          People, Passion, Process
        </Typography>
      </SectionImg>
      <AboutUs />
      <Deliver />
      <OurVision />
      {!isSmallScreen && <ParallaxSection />}
      <ShortProcess />
      <CallUs />
    </>
  );
};

const styles = {
  sectionText: {
    position: "absolute",
    left: 30,
    bottom: 30,
    fontWeight: "bold",
  },
};

export default About;
