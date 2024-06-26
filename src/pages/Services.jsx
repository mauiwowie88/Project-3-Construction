import React from "react";
import FP from "../components/About/FP";
import ServicesGrid from "../components/Services/ServicesGrid";
import LongProcess from "../components/Services/LongProcess";
import Hesitate from "../components/Services/Hesitate";
import { SectionImg } from "../components/Extra";
import { Typography } from "@mui/material";
import ServicesContent from "../components/Services/ServicesContent";

const Services = () => (
  <>
    <SectionImg title="About">
      <Typography variant="h5" sx={styles.sectionText}>
        People, Passion, Process
      </Typography>
    </SectionImg>
    <FP />
    <ServicesContent />
    <ServicesGrid />
    <LongProcess />
    <Hesitate />
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

export default Services;
