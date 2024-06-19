import React from "react";
import FeatureSection from "../components/About/FeatureSection";
import { SectionImg } from "../components/Extra";
import { Box, Grid } from "@mui/material";
import { work } from "../db";
import Hesitate from "../components/Services/Hesitate";
import WorkCards from "../components/Services/WorkCard";
import LongProcess from "../components/Services/LongProcess";
import CustomCard from "../components/Services/CustomCard";

const Services = () => (
  <>
    <SectionImg title="Services" />
    <WorkCards />
    <FeatureSection />
    <Grid container>
      {work.map((el, idx) => (
        <Grid item key={idx} xs={6} md={4} lg={3} xl={1.5}>
          <CustomCard data={el} />
        </Grid>
      ))}
    </Grid>

    <LongProcess />
    <Hesitate />
  </>
);

export default Services;
