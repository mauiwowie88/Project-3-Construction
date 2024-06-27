import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import AboutUs from "../components/About/AboutUs";
import CallUs from "../components/About/CallUs";
import ShortProcess from "../components/About/ShortProcess";
import Deliver from "../components/About/Deliver";
import Nice from "../components/About/Nice";

import { SectionImg } from "../components/Extra";
import FP from "../components/About/FP";

const About = () => (
  <>
    <SectionImg title="About">
      <Typography variant="h5" sx={styles.sectionText}>
        People, Passion, Process
      </Typography>
    </SectionImg>
    <AboutUs />
    <Deliver />
    {/* <FP /> */}

    <ShortProcess />
    <CallUs />
  </>
);

const styles = {
  sectionText: {
    position: "absolute",
    left: 30,
    bottom: 30,
    fontWeight: "bold",
  },
};

export default About;
