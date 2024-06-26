import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import AboutUs from "../components/About/AboutUs";
import CallUs from "../components/About/CallUs";
import ShortProcess from "../components/About/ShortProcess";
import Deliver from "../components/About/Deliver";
import Nice from "../components/About/Nice";
import Header from "../components/Home/Header";

import FP from "../components/About/FP";

const About = () => (
  <>
    <Header />

    <AboutUs />
    <Deliver />
    <FP />

    <ShortProcess />
    <CallUs />
  </>
);

export default About;
