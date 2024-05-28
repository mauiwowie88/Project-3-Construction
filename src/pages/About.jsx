import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";

import { characteristics } from "../assets/db";
import { BlackButton, SectionImg } from "../components/Extra";

const Item = ({ skill }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper>
        <img src={skill.image} alt="Project" className="job-pic" />
        <Typography
          variant="h6"
          sx={{ marginTop: "1rem", fontWeight: "bold", textAlign: "center" }}
        >
          {skill.title}
        </Typography>
        <Typography variant="body2">{skill.description}</Typography>
      </Paper>
    </Grid>
  );
};

function About() {
  return (
    <>
      <SectionImg title="About" />
      {/* Defining Characteristics  */}
      <Box sx={{ backgroundColor: "#dfe0e1" }}>
        <Container
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Typography variant="h4" sx={{ m: 5, textAlign: "center" }}>
            Our Defining Characteristics
          </Typography>
          <Grid container spacing={2}>
            {characteristics.map((skill, index) => (
              <Item key={index} skill={skill} />
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Give Us A Call */}
      <SectionImg title="Call Us">
        <Box padding="2rem 2rem 0 2rem">
          <Typography variant="h2">
            Ready to get started? Give us a call today.
          </Typography>
          <Link to="../Contact" style={{ textDecoration: "none" }}>
            <BlackButton label="Contact Us" width="250px" />
          </Link>
        </Box>
      </SectionImg>
    </>
  );
}
export default About;
