import React from "react";

import { SectionImg } from "../components/Extra";
import { Box, Grid } from "@mui/material";
import { work } from "../db";
import Hesitate from "../components/Services/Hesitate";
import WorkCards from "../components/Services/WorkCard";
import LongProcess from "../components/Services/LongProcess";
import CustomCard from "../components/Services/CustomCard";
import one from "../../assets/images/inside/3.jpg";
import two from "../../assets/images/newest/drawing.jpg";
import zIndex from "@mui/material/styles/zIndex";

const Services = () => (
  <>
    {/* <SectionImg title="Services" /> */}
    {/* <WorkCards /> */}
    <Box sx={styles.container}>
      <Box sx={styles.imageContainer}>
        <Box sx={styles.image} />
      </Box>
    </Box>

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

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    height: "50vh",
    width: "auto",
    position: "relative",
    backgroundColor: "#f5f5f5",
    mt: 6,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    position: "relative", // Ensure position relative for the overlay to work
  },
  image: {
    backgroundImage: `url(${two})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay to make it darker
      zIndex: 1, // Ensure the overlay is above the image
    },
    loading: "lazy",
  },
  textContainer: {
    padding: "20px",
    width: "50%",
  },
  title: {
    color: "#b71c1c",
    marginBottom: "10px",
  },
  description: {
    color: "#333",
  },
};

export default Services;
