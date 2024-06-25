import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { SectionImg } from "../components/Extra";
import AboutUs from "../components/About/AboutUs";
import CallUs from "../components/About/CallUs";
import Process from "../components/About/Process";
import Deliver from "../components/About/Deliver";
import Nice from "../components/About/Nice";
// import Header from "../components/Home/Header";
import GridTemplateColumnsExample from "../components/About/Gridz";
import OurGoal from "../components/About/OurGoal";
const About = () => (
  <>
    {/* <SectionImg title="About">
      <Typography variant="h5" sx={styles.sectionText}>
        People, Passion, Process
      </Typography>
    </SectionImg> */}
    {/* <Header /> */}
    {/* <GridTemplateColumnsExample /> */}

    <AboutUs />
    {/* <OurGoal /> */}
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
