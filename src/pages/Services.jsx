import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { SectionImg } from "../components/Extra";
import Faded from "../components/Services/Faded";
import { BoxSlider } from "../components/Extra";
import { work } from "../assets/db";

function Services() {
  return (
    <>
      <SectionImg title="Services" />
      <Faded />
      <Box
        sx={{
          display: "flex",
          // flexDirection: { xs: "column", md: "row" },
          justifyContent: "flex-start",
          alignItems: "center",
          marginBottom: 8,
        }}
      >
        <Box
          sx={{
            width: { md: "50%" },
            marginLeft: { md: 4 },
            flexGrow: 1,
            flexBasis: 0,
          }}
        >
          <Typography variant="h4" sx={{ color: "#b71c1c", marginBottom: 2 }}>
            Our Goal
          </Typography>
          <Typography variant="body2">
            Our goal is not to be the largest contractor, but rather to focus on
            building relationships with clients now and into the future.
            <br />
            <br />
            Our relationships with the client, our employees, and trade partners
            come first. We focus on extensive planning, and consistency with
            processes and procedures that we are always improving upon.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { md: "50%" },
            flexGrow: 1,
            flexBasis: 0,
          }}
        >
          <BoxSlider data={work} sideBySide={true} />
        </Box>
      </Box>
    </>
  );
}

export default Services;
