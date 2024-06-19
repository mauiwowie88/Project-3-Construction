import React from "react";
import { Box, Typography } from "@mui/material";
import { SectionImg } from "../components/Extra";
import AboutUs from "../components/About/AboutUs";
import CallUs from "../components/About/CallUs";
import Process from "../components/About/Process";
import Deliver from "../components/Services/Deliver";
import OurGoal from "../components/Services/OurGoal";
const About = () => (
  <>
    <SectionImg title="About">
      <Typography variant="h5" sx={styles.sectionText}>
        People, Passion, Process
      </Typography>
    </SectionImg>

    <AboutUs />
    <OurGoal />
    <Deliver />
    <Process />
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
